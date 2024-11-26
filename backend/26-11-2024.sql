--
-- PostgreSQL database dump
--

-- Dumped from database version 14.14 (Ubuntu 14.14-1.pgdg20.04+1)
-- Dumped by pg_dump version 14.14 (Ubuntu 14.14-1.pgdg20.04+1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: new_decocuadros_20; Type: SCHEMA; Schema: -; Owner: -
--

CREATE SCHEMA new_decocuadros_20;


--
-- Name: get_product_json(integer); Type: FUNCTION; Schema: new_decocuadros_20; Owner: -
--

CREATE FUNCTION new_decocuadros_20.get_product_json(product_id_input integer) RETURNS jsonb
    LANGUAGE plpgsql
    AS $_$
DECLARE
    result_json JSONB;
BEGIN
    WITH product_data AS (
        SELECT
            p.id AS product_id,
            jsonb_build_object(
                'id', p.id,
                'name', p.name,
                'slug', p.slug,
                'image', p.image,
                'category', c.name,
                'categoryId', c.id,
                'rating', p.rating,
                'oldPrice', CONCAT('$', p.old_price::TEXT),
                'newPrice', CONCAT('$', p.new_price::TEXT),
                'isHot', p.is_hot,
                'discount', p.discount,
                'description', p.description,
                'shortDescription', p.short_description,
                'SKU', p.sku,
                'sizes', p.sizes,
                'gallery', p.gallery,
                'stock', p.stock,
                'isFeatured', p.is_featured,
                'offerEnds', p.offer_ends,
                'publishDate', p.publish_date,
                'attributes', (
                    SELECT jsonb_agg(
                        jsonb_build_object(
                            'id', a.id,
                            'name', a.name,
                            'type', a.type,
                            'values', (
                                SELECT jsonb_agg(
                                    jsonb_build_object(
                                        'id', ao.id,
                                        'name', ao.name,
                                        'value', ao.value
                                    )
                                    ORDER BY ao.id
                                )
                                FROM new_decocuadros_20.attribute_options ao
                                WHERE ao.attribute_id = a.id
                            ),
                            'isVariation', pa.is_variation
                        )
                        ORDER BY a.id
                    )
                    FROM new_decocuadros_20.product_attributes pa
                    JOIN new_decocuadros_20.attributes a ON pa.attribute_id = a.id
                    WHERE pa.product_id = p.id
                ),
                'variations', (
                    SELECT jsonb_agg(
                        jsonb_build_object(
                            'id', v.id,
                            'SKU', v.sku,
                            'price', CONCAT('$', v.price::TEXT),
                            'stock', v.stock,
                            'attributes', (
                                SELECT jsonb_agg(
                                    jsonb_build_object(
                                        'attributeId', ao.attribute_id,
                                        'valueId', ao.id,
                                        'orderMenu', pvo.order_menu
                                    )
                                    ORDER BY pvo.order_menu
                                )
                                FROM new_decocuadros_20.product_variant_options pvo
                                JOIN new_decocuadros_20.attribute_options ao ON pvo.attribute_option_id = ao.id
                                WHERE pvo.product_variant_id = v.id
                            )
                        )
                        ORDER BY v.id
                    )
                    FROM new_decocuadros_20.product_variants v
                    WHERE v.product_id = p.id
                )
            ) AS product_json
        FROM
            new_decocuadros_20.products p
        JOIN new_decocuadros_20.categories c ON p.categoryid = c.id
        WHERE p.id = product_id_input
    )
    SELECT product_json INTO result_json
    FROM product_data;

    IF result_json IS NULL THEN
        RAISE EXCEPTION 'Product with id % not found', product_id_input;
    END IF;

    RETURN result_json;
END;
$_$;


--
-- Name: insert_full_product(jsonb); Type: FUNCTION; Schema: new_decocuadros_20; Owner: -
--

CREATE FUNCTION new_decocuadros_20.insert_full_product(product_json jsonb) RETURNS void
    LANGUAGE plpgsql
    AS $_$
DECLARE
    new_product_id INTEGER;
    new_category_id INTEGER;
    attribute_map JSONB := '{}'; -- Mapa de atributos insertados
    option_map JSONB := '{}'; -- Mapa de opciones insertadas
    attribute_json JSONB;
    option_json JSONB;
    variation_json JSONB;
    variation_attribute_json JSONB;
    variation_id INTEGER;
    temp_attribute_id INTEGER;
    temp_option_id INTEGER;
    composite_key TEXT;
    attribute_slug TEXT;
    option_slug TEXT;
    option_name TEXT;
    order_menu INTEGER;
BEGIN
    -- Insertar la categoría si no existe
    INSERT INTO new_decocuadros_20.categories (name, slug)
    VALUES (
        product_json->>'category',
        LOWER(REGEXP_REPLACE(REGEXP_REPLACE(product_json->>'category', '[^a-zA-Z0-9\s]', '', 'g'), '\s+', '_', 'g'))
    )
    ON CONFLICT (slug) DO NOTHING
    RETURNING id INTO new_category_id;

    IF new_category_id IS NULL THEN
        SELECT id INTO new_category_id
        FROM new_decocuadros_20.categories
        WHERE slug = LOWER(REGEXP_REPLACE(REGEXP_REPLACE(product_json->>'category', '[^a-zA-Z0-9\s]', '', 'g'), '\s+', '_', 'g'));
    END IF;

    -- Insertar atributos y opciones
    FOR attribute_json IN SELECT * FROM jsonb_array_elements(product_json->'attributes') LOOP
        -- Generar el slug del atributo si no está presente en el JSON
        attribute_slug := COALESCE(
            attribute_json->>'slug',
            LOWER(REGEXP_REPLACE(REGEXP_REPLACE(attribute_json->>'name', '[^a-zA-Z0-9\s]', '', 'g'), '\s+', '_', 'g'))
        );

        -- Verificar si el atributo ya existe, si no, crearlo
        SELECT id INTO temp_attribute_id
        FROM new_decocuadros_20.attributes
        WHERE slug = attribute_slug;

        IF temp_attribute_id IS NULL THEN
            INSERT INTO new_decocuadros_20.attributes (name, type, slug)
            VALUES (
                attribute_json->>'name',
                attribute_json->>'type',
                attribute_slug
            )
            RETURNING id INTO temp_attribute_id;
        END IF;

        -- Actualizar el mapa de atributos
        attribute_map := jsonb_set(
            attribute_map,
            ARRAY[attribute_json->>'id'],
            to_jsonb(temp_attribute_id),
            true
        );

        -- Insertar opciones del atributo
        FOR option_json IN SELECT * FROM jsonb_array_elements(attribute_json->'values') LOOP
            -- Generar el slug de la opción si no está presente
            option_slug := COALESCE(
                option_json->>'slug',
                LOWER(REGEXP_REPLACE(REGEXP_REPLACE(option_json->>'name', '[^a-zA-Z0-9\s]', '', 'g'), '\s+', '_', 'g'))
            );

            -- Obtener el nombre de la opción
            option_name := option_json->>'name';

            -- Verificar si el nombre es válido antes de continuar
            IF option_name IS NULL OR option_name = '' THEN
                RAISE WARNING 'La opción de atributo no tiene un nombre válido. Se omitirá esta opción.';
                CONTINUE;
            END IF;

            -- Verificar si la opción ya existe, si no, crearla
            SELECT id INTO temp_option_id
            FROM new_decocuadros_20.attribute_options
            WHERE attribute_id = temp_attribute_id AND slug = option_slug;

            IF temp_option_id IS NULL THEN
                BEGIN
                    INSERT INTO new_decocuadros_20.attribute_options (attribute_id, name, value, slug)
                    VALUES (
                        temp_attribute_id,
                        option_name,
                        option_json->>'value',
                        option_slug
                    )
                    RETURNING id INTO temp_option_id;
                EXCEPTION WHEN unique_violation THEN
                    -- Si ocurre un error de duplicado, obtener el ID existente
                    SELECT id INTO temp_option_id
                    FROM new_decocuadros_20.attribute_options
                    WHERE attribute_id = temp_attribute_id AND slug = option_slug;
                END;
            END IF;

            -- Actualizar el mapa de opciones (clave compuesta)
            composite_key := CONCAT(attribute_json->>'id', '|', option_json->>'id');
            option_map := jsonb_set(
                option_map,
                ARRAY[composite_key],
                to_jsonb(temp_option_id),
                true
            );
        END LOOP;
    END LOOP;

    -- Insertar el producto
    INSERT INTO new_decocuadros_20.products (
        name, slug, image, categoryid, rating, old_price, new_price, base_price,
        is_hot, discount, description, short_description, sku, sizes, gallery,
        stock, is_featured, offer_ends, publish_date
    ) VALUES (
        product_json->>'name',
        product_json->>'slug',
        product_json->>'image',
        new_category_id,
        (product_json->>'rating')::INTEGER,
        REPLACE(product_json->>'oldPrice', '$', '')::NUMERIC,
        REPLACE(product_json->>'newPrice', '$', '')::NUMERIC,
        REPLACE(product_json->>'newPrice', '$', '')::NUMERIC, -- base_price igual a newPrice
        (product_json->>'isHot')::BOOLEAN,
        product_json->>'discount',
        product_json->>'description',
        product_json->>'shortDescription',
        product_json->>'SKU',
        ARRAY(SELECT jsonb_array_elements_text(product_json->'sizes')),
        ARRAY(SELECT jsonb_array_elements_text(product_json->'gallery')),
        (product_json->>'stock')::INTEGER,
        (product_json->>'isFeatured')::BOOLEAN,
        (product_json->>'offerEnds')::TIMESTAMP,
        (product_json->>'publishDate')::TIMESTAMP
    ) RETURNING id INTO new_product_id;

    -- Insertar relaciones producto-atributo
    FOR attribute_json IN SELECT * FROM jsonb_array_elements(product_json->'attributes') LOOP
        INSERT INTO new_decocuadros_20.product_attributes (product_id, attribute_id, is_variation)
        VALUES (
            new_product_id,
            (attribute_map #>> ARRAY[attribute_json->>'id'])::INTEGER,
            (attribute_json->>'isVariation')::BOOLEAN
        )
        ON CONFLICT DO NOTHING;
    END LOOP;

    -- Insertar variaciones del producto
    FOR variation_json IN SELECT * FROM jsonb_array_elements(product_json->'variations') LOOP
        INSERT INTO new_decocuadros_20.product_variants (product_id, sku, stock, price)
        VALUES (
            new_product_id,
            variation_json->>'SKU',
            (variation_json->>'stock')::INTEGER,
            REPLACE(variation_json->>'price', '$', '')::NUMERIC
        )
        RETURNING id INTO variation_id;

        -- Relacionar variación con opciones de atributos
        FOR variation_attribute_json IN SELECT * FROM jsonb_array_elements(variation_json->'attributes') LOOP
            -- Obtener el attribute_id desde el mapa usando el attributeId del JSON
            temp_attribute_id := (attribute_map #>> ARRAY[variation_attribute_json->>'attributeId'])::INTEGER;

            -- Validar que el atributo exista antes de intentar insertar opciones
            IF temp_attribute_id IS NULL THEN
                RAISE EXCEPTION 'No se encontró attribute_id para attributeId=%', variation_attribute_json->>'attributeId';
            END IF;

            -- Buscar el option_id correspondiente
            composite_key := CONCAT(variation_attribute_json->>'attributeId', '|', variation_attribute_json->>'valueId');
            temp_option_id := (option_map #>> ARRAY[composite_key])::INTEGER;

            -- Obtener el valor de `orderMenu`
            order_menu := (variation_attribute_json->>'orderMenu')::INTEGER;

            -- Validar que la opción exista antes de intentar insertarla
            IF temp_option_id IS NULL THEN
                RAISE EXCEPTION 'No se encontró option_id para attribute_id=% y valueId=%', variation_attribute_json->>'attributeId', variation_attribute_json->>'valueId';
            END IF;

            -- Relacionar variación con opciones de atributos incluyendo `orderMenu`
            INSERT INTO new_decocuadros_20.product_variant_options (product_variant_id, attribute_option_id, order_menu)
            VALUES (variation_id, temp_option_id, order_menu)
            ON CONFLICT DO NOTHING;

            -- Mensaje de depuración
            RAISE NOTICE 'Insertada relación: variant_id=%, attribute_option_id=%, order_menu=%', variation_id, temp_option_id, order_menu;
        END LOOP;
    END LOOP;
END;
$_$;


SET default_table_access_method = heap;

--
-- Name: attribute_options; Type: TABLE; Schema: new_decocuadros_20; Owner: -
--

CREATE TABLE new_decocuadros_20.attribute_options (
    id integer NOT NULL,
    attribute_id integer NOT NULL,
    name character varying(255) NOT NULL,
    value character varying(255),
    slug character varying(255)
);


--
-- Name: attribute_options_id_seq; Type: SEQUENCE; Schema: new_decocuadros_20; Owner: -
--

CREATE SEQUENCE new_decocuadros_20.attribute_options_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: attribute_options_id_seq; Type: SEQUENCE OWNED BY; Schema: new_decocuadros_20; Owner: -
--

ALTER SEQUENCE new_decocuadros_20.attribute_options_id_seq OWNED BY new_decocuadros_20.attribute_options.id;


--
-- Name: attributes; Type: TABLE; Schema: new_decocuadros_20; Owner: -
--

CREATE TABLE new_decocuadros_20.attributes (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    type character varying(50),
    slug character varying(255),
    CONSTRAINT attributes_type_check CHECK (((type)::text = ANY ((ARRAY['label'::character varying, 'image'::character varying, 'color'::character varying])::text[])))
);


--
-- Name: attributes_id_seq; Type: SEQUENCE; Schema: new_decocuadros_20; Owner: -
--

CREATE SEQUENCE new_decocuadros_20.attributes_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: attributes_id_seq; Type: SEQUENCE OWNED BY; Schema: new_decocuadros_20; Owner: -
--

ALTER SEQUENCE new_decocuadros_20.attributes_id_seq OWNED BY new_decocuadros_20.attributes.id;


--
-- Name: categories; Type: TABLE; Schema: new_decocuadros_20; Owner: -
--

CREATE TABLE new_decocuadros_20.categories (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    slug character varying(255) NOT NULL,
    description text,
    image_path character varying(255)
);


--
-- Name: categories_id_seq; Type: SEQUENCE; Schema: new_decocuadros_20; Owner: -
--

CREATE SEQUENCE new_decocuadros_20.categories_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: categories_id_seq; Type: SEQUENCE OWNED BY; Schema: new_decocuadros_20; Owner: -
--

ALTER SEQUENCE new_decocuadros_20.categories_id_seq OWNED BY new_decocuadros_20.categories.id;


--
-- Name: product_attributes; Type: TABLE; Schema: new_decocuadros_20; Owner: -
--

CREATE TABLE new_decocuadros_20.product_attributes (
    id integer NOT NULL,
    product_id integer NOT NULL,
    attribute_id integer NOT NULL,
    is_variation boolean DEFAULT false NOT NULL
);


--
-- Name: product_attributes_id_seq; Type: SEQUENCE; Schema: new_decocuadros_20; Owner: -
--

CREATE SEQUENCE new_decocuadros_20.product_attributes_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: product_attributes_id_seq; Type: SEQUENCE OWNED BY; Schema: new_decocuadros_20; Owner: -
--

ALTER SEQUENCE new_decocuadros_20.product_attributes_id_seq OWNED BY new_decocuadros_20.product_attributes.id;


--
-- Name: product_variant_options; Type: TABLE; Schema: new_decocuadros_20; Owner: -
--

CREATE TABLE new_decocuadros_20.product_variant_options (
    id integer NOT NULL,
    product_variant_id integer NOT NULL,
    attribute_option_id integer NOT NULL,
    order_menu integer
);


--
-- Name: product_variant_options_id_seq; Type: SEQUENCE; Schema: new_decocuadros_20; Owner: -
--

CREATE SEQUENCE new_decocuadros_20.product_variant_options_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: product_variant_options_id_seq; Type: SEQUENCE OWNED BY; Schema: new_decocuadros_20; Owner: -
--

ALTER SEQUENCE new_decocuadros_20.product_variant_options_id_seq OWNED BY new_decocuadros_20.product_variant_options.id;


--
-- Name: product_variants; Type: TABLE; Schema: new_decocuadros_20; Owner: -
--

CREATE TABLE new_decocuadros_20.product_variants (
    id integer NOT NULL,
    product_id integer NOT NULL,
    sku character varying(255) NOT NULL,
    stock integer NOT NULL,
    price numeric(10,2) NOT NULL
);


--
-- Name: product_variants_id_seq; Type: SEQUENCE; Schema: new_decocuadros_20; Owner: -
--

CREATE SEQUENCE new_decocuadros_20.product_variants_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: product_variants_id_seq; Type: SEQUENCE OWNED BY; Schema: new_decocuadros_20; Owner: -
--

ALTER SEQUENCE new_decocuadros_20.product_variants_id_seq OWNED BY new_decocuadros_20.product_variants.id;


--
-- Name: products; Type: TABLE; Schema: new_decocuadros_20; Owner: -
--

CREATE TABLE new_decocuadros_20.products (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    description text,
    base_price numeric(10,2) NOT NULL,
    slug character varying(255),
    image character varying(255),
    category character varying(255),
    categoryid integer,
    rating integer,
    old_price numeric(10,2),
    new_price numeric(10,2),
    is_hot boolean DEFAULT false,
    discount character varying(50),
    is_featured boolean DEFAULT false,
    offer_ends timestamp without time zone,
    publish_date timestamp without time zone,
    sizes text[],
    gallery text[],
    stock integer,
    sku character varying(255),
    short_description text
);


--
-- Name: products_id_seq; Type: SEQUENCE; Schema: new_decocuadros_20; Owner: -
--

CREATE SEQUENCE new_decocuadros_20.products_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: products_id_seq; Type: SEQUENCE OWNED BY; Schema: new_decocuadros_20; Owner: -
--

ALTER SEQUENCE new_decocuadros_20.products_id_seq OWNED BY new_decocuadros_20.products.id;


--
-- Name: attribute_options id; Type: DEFAULT; Schema: new_decocuadros_20; Owner: -
--

ALTER TABLE ONLY new_decocuadros_20.attribute_options ALTER COLUMN id SET DEFAULT nextval('new_decocuadros_20.attribute_options_id_seq'::regclass);


--
-- Name: attributes id; Type: DEFAULT; Schema: new_decocuadros_20; Owner: -
--

ALTER TABLE ONLY new_decocuadros_20.attributes ALTER COLUMN id SET DEFAULT nextval('new_decocuadros_20.attributes_id_seq'::regclass);


--
-- Name: categories id; Type: DEFAULT; Schema: new_decocuadros_20; Owner: -
--

ALTER TABLE ONLY new_decocuadros_20.categories ALTER COLUMN id SET DEFAULT nextval('new_decocuadros_20.categories_id_seq'::regclass);


--
-- Name: product_attributes id; Type: DEFAULT; Schema: new_decocuadros_20; Owner: -
--

ALTER TABLE ONLY new_decocuadros_20.product_attributes ALTER COLUMN id SET DEFAULT nextval('new_decocuadros_20.product_attributes_id_seq'::regclass);


--
-- Name: product_variant_options id; Type: DEFAULT; Schema: new_decocuadros_20; Owner: -
--

ALTER TABLE ONLY new_decocuadros_20.product_variant_options ALTER COLUMN id SET DEFAULT nextval('new_decocuadros_20.product_variant_options_id_seq'::regclass);


--
-- Name: product_variants id; Type: DEFAULT; Schema: new_decocuadros_20; Owner: -
--

ALTER TABLE ONLY new_decocuadros_20.product_variants ALTER COLUMN id SET DEFAULT nextval('new_decocuadros_20.product_variants_id_seq'::regclass);


--
-- Name: products id; Type: DEFAULT; Schema: new_decocuadros_20; Owner: -
--

ALTER TABLE ONLY new_decocuadros_20.products ALTER COLUMN id SET DEFAULT nextval('new_decocuadros_20.products_id_seq'::regclass);


--
-- Data for Name: attribute_options; Type: TABLE DATA; Schema: new_decocuadros_20; Owner: -
--

COPY new_decocuadros_20.attribute_options (id, attribute_id, name, value, slug) FROM stdin;
1	1	Canvas Art	/path/to/canvas_art_image.jpg	canvas_art
2	1	Framed Canvas	/path/to/framed_canvas_image.jpg	framed_canvas
3	2	Floating	floating	floating
4	2	Modern Deep	modern_deep	modern_deep
5	3	Black	/path/to/black_frame.jpg	black
6	3	White	/path/to/white_frame.jpg	white
7	3	Gold	/path/to/gold_frame.jpg	gold
8	3	Gray Wash	/path/to/gray_wash_frame.jpg	gray_wash
9	4	12" X 8"	12 X 8	12_x_8
10	4	24" X 16"	24 X 16	24_x_16
11	4	30" X 20"	30 X 20	30_x_20
12	4	36" X 24"	36 X 24	36_x_24
13	4	39" X 26"	39 X 26	39_x_26
14	4	45" X 30"	45 X 30	45_x_30
15	4	48" X 32"	48 X 32	48_x_32
16	4	51" X 34"	51 X 34	51_x_34
17	4	13" X 9"	13 X 9	13_x_9
18	4	19" X 13"	19 X 13	19_x_13
19	4	25" X 17"	25 X 17	25_x_17
20	4	31" X 21"	31 X 21	31_x_21
21	4	37" X 25"	37 X 25	37_x_25
22	4	40" X 27"	40 X 27	40_x_27
23	4	43" X 29"	43 X 29	43_x_29
24	4	49" X 33"	49 X 33	49_x_33
25	5	1 pieza	1 pieza	1_pieza
26	5	2 piezas	2 piezas	2_piezas
27	5	3 piezas	3 piezas	3_piezas
28	6	Blue	#0000FF	blue
29	6	Red	#FF0000	red
30	6	Black	#000000	black
31	6	Blanco	#ffffff	blanco
32	6	Verde	#1db527	verde
33	6	Amarillo	#ffc107	amarillo
34	7	30x60	30x60	30x60
35	7	40x60	40x60	40x60
36	7	50x60	50x60	50x60
37	7	60x60	60x60	60x60
38	7	70x70	70x70	70x70
39	7	80x80	80x80	80x80
40	7	90x90	90x90	90x90
41	7	100x100	100x100	100x100
42	7	200x200	200x200	200x200
\.


--
-- Data for Name: attributes; Type: TABLE DATA; Schema: new_decocuadros_20; Owner: -
--

COPY new_decocuadros_20.attributes (id, name, type, slug) FROM stdin;
1	Tipo de Cuadro	image	tipo_de_cuadro
2	Frame Style	label	frame_style
3	Frame Color	image	frame_color
4	Tamaño 2	label	tamao_2
5	Piezas	label	piezas
6	Color	color	color
7	Tamaño	label	tamano
\.


--
-- Data for Name: categories; Type: TABLE DATA; Schema: new_decocuadros_20; Owner: -
--

COPY new_decocuadros_20.categories (id, name, slug, description, image_path) FROM stdin;
1	Wall Art	wall_art	Descripción Categoría Wall Art	https://portotheme.com/html/porto_ecommerce/assets/images/demoes/demo36/products/categories/category-1.jpg
2	Speakers	speakers	Descripción Categoría Speakers	https://portotheme.com/html/porto_ecommerce/assets/images/demoes/demo36/products/categories/category-2.jpg
\.


--
-- Data for Name: product_attributes; Type: TABLE DATA; Schema: new_decocuadros_20; Owner: -
--

COPY new_decocuadros_20.product_attributes (id, product_id, attribute_id, is_variation) FROM stdin;
1	1	1	t
2	1	2	t
3	1	3	t
4	1	4	t
5	2	5	t
6	2	6	t
7	2	7	t
\.


--
-- Data for Name: product_variant_options; Type: TABLE DATA; Schema: new_decocuadros_20; Owner: -
--

COPY new_decocuadros_20.product_variant_options (id, product_variant_id, attribute_option_id, order_menu) FROM stdin;
1	1	1	1
2	1	9	2
3	2	1	1
4	2	10	2
5	3	1	1
6	3	11	2
7	4	1	1
8	4	12	2
9	5	1	1
10	5	13	2
11	6	1	1
12	6	14	2
13	7	1	1
14	7	15	2
15	8	1	1
16	8	16	2
17	9	2	1
18	9	3	2
19	9	5	3
20	9	17	4
21	10	2	1
22	10	3	2
23	10	5	3
24	10	18	4
25	11	2	1
26	11	3	2
27	11	5	3
28	11	19	4
29	12	2	1
30	12	3	2
31	12	5	3
32	12	20	4
33	13	2	1
34	13	3	2
35	13	5	3
36	13	21	4
37	14	2	1
38	14	3	2
39	14	5	3
40	14	22	4
41	15	2	1
42	15	3	2
43	15	5	3
44	15	23	4
45	16	2	1
46	16	3	2
47	16	5	3
48	16	24	4
49	17	2	1
50	17	4	2
51	17	7	3
52	17	17	4
53	18	2	1
54	18	4	2
55	18	7	3
56	18	18	4
57	19	2	1
58	19	4	2
59	19	7	3
60	19	19	4
61	20	2	1
62	20	4	2
63	20	7	3
64	20	20	4
65	21	2	1
66	21	4	2
67	21	7	3
68	21	21	4
69	22	2	1
70	22	4	2
71	22	7	3
72	22	22	4
73	23	2	1
74	23	4	2
75	23	7	3
76	23	23	4
77	24	2	1
78	24	4	2
79	24	7	3
80	24	24	4
81	25	25	1
82	25	28	2
83	25	34	3
84	26	25	1
85	26	29	2
86	26	34	3
87	27	26	1
88	27	31	2
89	27	38	3
90	28	27	1
91	28	30	2
92	28	41	3
93	29	27	1
94	29	30	2
95	29	42	3
\.


--
-- Data for Name: product_variants; Type: TABLE DATA; Schema: new_decocuadros_20; Owner: -
--

COPY new_decocuadros_20.product_variants (id, product_id, sku, stock, price) FROM stdin;
1	1	ART-CANVAS-12X8	10	29.00
2	1	ART-CANVAS-24X16	10	39.00
3	1	ART-CANVAS-30X20	10	49.00
4	1	ART-CANVAS-36X24	10	59.00
5	1	ART-CANVAS-39X26	10	69.00
6	1	ART-CANVAS-45X30	10	79.00
7	1	ART-CANVAS-48X32	10	89.00
8	1	ART-CANVAS-51X34	10	99.00
9	1	FRM-FLT-BLK-13X9	10	49.00
10	1	FRM-FLT-BLK-19X13	10	59.00
11	1	FRM-FLT-BLK-25X17	10	69.00
12	1	FRM-FLT-BLK-31X21	10	79.00
13	1	FRM-FLT-BLK-37X25	10	89.00
14	1	FRM-FLT-BLK-40X27	10	99.00
15	1	FRM-FLT-BLK-43X29	10	109.00
16	1	FRM-FLT-BLK-49X33	10	119.00
17	1	FRM-MD-GOLD-13X9	10	111.00
18	1	FRM-MD-GOLD-19X13	10	112.00
19	1	FRM-MD-GOLD-25X17	10	113.00
20	1	FRM-MD-GOLD-31X21	10	114.00
21	1	FRM-MD-GOLD-37X25	10	115.00
22	1	FRM-MD-GOLD-40X27	10	116.00
23	1	FRM-MD-GOLD-43X29	10	117.00
24	1	FRM-MD-GOLD-49X33	10	118.00
25	2	654613612-BLU-1P-30x60	10	20.00
26	2	654613612-RED-1P-30x60	10	20.00
27	2	654613612-WHT-2P-70x70	5	30.00
28	2	654613612-BLK-3P-100x100	5	50.00
29	2	654613612-BLK-3P-200x200	0	70.00
\.


--
-- Data for Name: products; Type: TABLE DATA; Schema: new_decocuadros_20; Owner: -
--

COPY new_decocuadros_20.products (id, name, description, base_price, slug, image, category, categoryid, rating, old_price, new_price, is_hot, discount, is_featured, offer_ends, publish_date, sizes, gallery, stock, sku, short_description) FROM stdin;
1	Artistic Canvas Collection	Beautiful and customizable canvas art for every taste.	19.00	artistic-canvas-collection	/assets/images/demoes/demo36/products/product-6.jpg	\N	1	60	29.00	19.00	t	-20%	t	2024-10-10 23:59:59	2024-09-30 12:00:00	{XL,L,M,S}	{/assets/images/demoes/demo36/products/product-3.jpg,/assets/images/demoes/demo36/products/product-4.jpg,/assets/images/demoes/demo36/products/product-5.jpg,/assets/images/demoes/demo36/products/product-6.jpg}	5	123456789	Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.
2	PT Speaker	Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, nostrud ipsum consectetur sed do, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat.	19.00	pt-speaker-66	/assets/images/demoes/demo36/products/product-2.jpg	\N	2	60	29.00	19.00	t	-20%	t	2024-10-10 23:59:59	2024-09-30 12:00:00	{XL,L,M,S}	{/assets/images/demoes/demo36/products/product-3.jpg,/assets/images/demoes/demo36/products/product-4.jpg,/assets/images/demoes/demo36/products/product-5.jpg,/assets/images/demoes/demo36/products/product-6.jpg}	5	123456789	Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.
\.


--
-- Name: attribute_options_id_seq; Type: SEQUENCE SET; Schema: new_decocuadros_20; Owner: -
--

SELECT pg_catalog.setval('new_decocuadros_20.attribute_options_id_seq', 42, true);


--
-- Name: attributes_id_seq; Type: SEQUENCE SET; Schema: new_decocuadros_20; Owner: -
--

SELECT pg_catalog.setval('new_decocuadros_20.attributes_id_seq', 7, true);


--
-- Name: categories_id_seq; Type: SEQUENCE SET; Schema: new_decocuadros_20; Owner: -
--

SELECT pg_catalog.setval('new_decocuadros_20.categories_id_seq', 2, true);


--
-- Name: product_attributes_id_seq; Type: SEQUENCE SET; Schema: new_decocuadros_20; Owner: -
--

SELECT pg_catalog.setval('new_decocuadros_20.product_attributes_id_seq', 7, true);


--
-- Name: product_variant_options_id_seq; Type: SEQUENCE SET; Schema: new_decocuadros_20; Owner: -
--

SELECT pg_catalog.setval('new_decocuadros_20.product_variant_options_id_seq', 95, true);


--
-- Name: product_variants_id_seq; Type: SEQUENCE SET; Schema: new_decocuadros_20; Owner: -
--

SELECT pg_catalog.setval('new_decocuadros_20.product_variants_id_seq', 29, true);


--
-- Name: products_id_seq; Type: SEQUENCE SET; Schema: new_decocuadros_20; Owner: -
--

SELECT pg_catalog.setval('new_decocuadros_20.products_id_seq', 2, true);


--
-- Name: attribute_options attribute_options_attribute_id_slug_unique; Type: CONSTRAINT; Schema: new_decocuadros_20; Owner: -
--

ALTER TABLE ONLY new_decocuadros_20.attribute_options
    ADD CONSTRAINT attribute_options_attribute_id_slug_unique UNIQUE (attribute_id, slug);


--
-- Name: attribute_options attribute_options_pkey; Type: CONSTRAINT; Schema: new_decocuadros_20; Owner: -
--

ALTER TABLE ONLY new_decocuadros_20.attribute_options
    ADD CONSTRAINT attribute_options_pkey PRIMARY KEY (id);


--
-- Name: attributes attributes_name_unique; Type: CONSTRAINT; Schema: new_decocuadros_20; Owner: -
--

ALTER TABLE ONLY new_decocuadros_20.attributes
    ADD CONSTRAINT attributes_name_unique UNIQUE (name);


--
-- Name: attributes attributes_pkey; Type: CONSTRAINT; Schema: new_decocuadros_20; Owner: -
--

ALTER TABLE ONLY new_decocuadros_20.attributes
    ADD CONSTRAINT attributes_pkey PRIMARY KEY (id);


--
-- Name: attributes attributes_slug_key; Type: CONSTRAINT; Schema: new_decocuadros_20; Owner: -
--

ALTER TABLE ONLY new_decocuadros_20.attributes
    ADD CONSTRAINT attributes_slug_key UNIQUE (slug);


--
-- Name: categories categories_pkey; Type: CONSTRAINT; Schema: new_decocuadros_20; Owner: -
--

ALTER TABLE ONLY new_decocuadros_20.categories
    ADD CONSTRAINT categories_pkey PRIMARY KEY (id);


--
-- Name: categories categories_slug_unique; Type: CONSTRAINT; Schema: new_decocuadros_20; Owner: -
--

ALTER TABLE ONLY new_decocuadros_20.categories
    ADD CONSTRAINT categories_slug_unique UNIQUE (slug);


--
-- Name: product_attributes product_attributes_pkey; Type: CONSTRAINT; Schema: new_decocuadros_20; Owner: -
--

ALTER TABLE ONLY new_decocuadros_20.product_attributes
    ADD CONSTRAINT product_attributes_pkey PRIMARY KEY (id);


--
-- Name: product_variant_options product_variant_options_pkey; Type: CONSTRAINT; Schema: new_decocuadros_20; Owner: -
--

ALTER TABLE ONLY new_decocuadros_20.product_variant_options
    ADD CONSTRAINT product_variant_options_pkey PRIMARY KEY (id);


--
-- Name: product_variants product_variants_pkey; Type: CONSTRAINT; Schema: new_decocuadros_20; Owner: -
--

ALTER TABLE ONLY new_decocuadros_20.product_variants
    ADD CONSTRAINT product_variants_pkey PRIMARY KEY (id);


--
-- Name: product_variants product_variants_sku_key; Type: CONSTRAINT; Schema: new_decocuadros_20; Owner: -
--

ALTER TABLE ONLY new_decocuadros_20.product_variants
    ADD CONSTRAINT product_variants_sku_key UNIQUE (sku);


--
-- Name: products products_pkey; Type: CONSTRAINT; Schema: new_decocuadros_20; Owner: -
--

ALTER TABLE ONLY new_decocuadros_20.products
    ADD CONSTRAINT products_pkey PRIMARY KEY (id);


--
-- Name: product_attributes unique_product_attribute; Type: CONSTRAINT; Schema: new_decocuadros_20; Owner: -
--

ALTER TABLE ONLY new_decocuadros_20.product_attributes
    ADD CONSTRAINT unique_product_attribute UNIQUE (product_id, attribute_id);


--
-- Name: product_variant_options unique_product_variant_option; Type: CONSTRAINT; Schema: new_decocuadros_20; Owner: -
--

ALTER TABLE ONLY new_decocuadros_20.product_variant_options
    ADD CONSTRAINT unique_product_variant_option UNIQUE (product_variant_id, attribute_option_id);


--
-- Name: product_variants unique_sku; Type: CONSTRAINT; Schema: new_decocuadros_20; Owner: -
--

ALTER TABLE ONLY new_decocuadros_20.product_variants
    ADD CONSTRAINT unique_sku UNIQUE (sku);


--
-- Name: idx_attribute_options_attribute_id; Type: INDEX; Schema: new_decocuadros_20; Owner: -
--

CREATE INDEX idx_attribute_options_attribute_id ON new_decocuadros_20.attribute_options USING btree (attribute_id);


--
-- Name: idx_product_attributes_attribute_id; Type: INDEX; Schema: new_decocuadros_20; Owner: -
--

CREATE INDEX idx_product_attributes_attribute_id ON new_decocuadros_20.product_attributes USING btree (attribute_id);


--
-- Name: idx_product_attributes_product_id; Type: INDEX; Schema: new_decocuadros_20; Owner: -
--

CREATE INDEX idx_product_attributes_product_id ON new_decocuadros_20.product_attributes USING btree (product_id);


--
-- Name: idx_product_variant_options_attribute_option_id; Type: INDEX; Schema: new_decocuadros_20; Owner: -
--

CREATE INDEX idx_product_variant_options_attribute_option_id ON new_decocuadros_20.product_variant_options USING btree (attribute_option_id);


--
-- Name: idx_product_variant_options_variant_id; Type: INDEX; Schema: new_decocuadros_20; Owner: -
--

CREATE INDEX idx_product_variant_options_variant_id ON new_decocuadros_20.product_variant_options USING btree (product_variant_id);


--
-- Name: idx_product_variants_product_id; Type: INDEX; Schema: new_decocuadros_20; Owner: -
--

CREATE INDEX idx_product_variants_product_id ON new_decocuadros_20.product_variants USING btree (product_id);


--
-- Name: attribute_options attribute_options_attribute_id_fkey; Type: FK CONSTRAINT; Schema: new_decocuadros_20; Owner: -
--

ALTER TABLE ONLY new_decocuadros_20.attribute_options
    ADD CONSTRAINT attribute_options_attribute_id_fkey FOREIGN KEY (attribute_id) REFERENCES new_decocuadros_20.attributes(id) ON DELETE CASCADE;


--
-- Name: products fk_category; Type: FK CONSTRAINT; Schema: new_decocuadros_20; Owner: -
--

ALTER TABLE ONLY new_decocuadros_20.products
    ADD CONSTRAINT fk_category FOREIGN KEY (categoryid) REFERENCES new_decocuadros_20.categories(id);


--
-- Name: product_variant_options fk_product_variant_options_attribute; Type: FK CONSTRAINT; Schema: new_decocuadros_20; Owner: -
--

ALTER TABLE ONLY new_decocuadros_20.product_variant_options
    ADD CONSTRAINT fk_product_variant_options_attribute FOREIGN KEY (attribute_option_id) REFERENCES new_decocuadros_20.attribute_options(id) ON DELETE CASCADE;


--
-- Name: product_attributes product_attributes_attribute_id_fkey; Type: FK CONSTRAINT; Schema: new_decocuadros_20; Owner: -
--

ALTER TABLE ONLY new_decocuadros_20.product_attributes
    ADD CONSTRAINT product_attributes_attribute_id_fkey FOREIGN KEY (attribute_id) REFERENCES new_decocuadros_20.attributes(id) ON DELETE CASCADE;


--
-- Name: product_attributes product_attributes_product_id_fkey; Type: FK CONSTRAINT; Schema: new_decocuadros_20; Owner: -
--

ALTER TABLE ONLY new_decocuadros_20.product_attributes
    ADD CONSTRAINT product_attributes_product_id_fkey FOREIGN KEY (product_id) REFERENCES new_decocuadros_20.products(id) ON DELETE CASCADE;


--
-- Name: product_variant_options product_variant_options_attribute_option_id_fkey; Type: FK CONSTRAINT; Schema: new_decocuadros_20; Owner: -
--

ALTER TABLE ONLY new_decocuadros_20.product_variant_options
    ADD CONSTRAINT product_variant_options_attribute_option_id_fkey FOREIGN KEY (attribute_option_id) REFERENCES new_decocuadros_20.attribute_options(id) ON DELETE CASCADE;


--
-- Name: product_variant_options product_variant_options_product_variant_id_fkey; Type: FK CONSTRAINT; Schema: new_decocuadros_20; Owner: -
--

ALTER TABLE ONLY new_decocuadros_20.product_variant_options
    ADD CONSTRAINT product_variant_options_product_variant_id_fkey FOREIGN KEY (product_variant_id) REFERENCES new_decocuadros_20.product_variants(id) ON DELETE CASCADE;


--
-- Name: product_variants product_variants_product_id_fkey; Type: FK CONSTRAINT; Schema: new_decocuadros_20; Owner: -
--

ALTER TABLE ONLY new_decocuadros_20.product_variants
    ADD CONSTRAINT product_variants_product_id_fkey FOREIGN KEY (product_id) REFERENCES new_decocuadros_20.products(id) ON DELETE CASCADE;


--
-- PostgreSQL database dump complete
--

