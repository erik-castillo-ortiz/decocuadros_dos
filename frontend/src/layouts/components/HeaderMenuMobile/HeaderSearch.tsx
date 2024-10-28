// import React, { useState, useEffect, useRef } from 'react';
// import Link from 'next/link';

// const HeaderSearch: React.FC = () => {
//   const [isSearchOpen, setIsSearchOpen] = useState(false);
//   const [searchStyle, setSearchStyle] = useState<
//     { left: string; right: string } | undefined
//   >();
//   const searchRef = useRef<HTMLDivElement>(null);

//   const toggleSearch = (e: React.MouseEvent) => {
//     e.preventDefault();
//     if (!isSearchOpen) {
//       setSearchStyle({ left: '-299.719px', right: '-63.6874px' });
//     } else {
//       setSearchStyle(undefined);
//     }
//     setIsSearchOpen(!isSearchOpen);
//   };

//   const handleClickOutside = (e: MouseEvent) => {
//     if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
//       setIsSearchOpen(false);
//       setSearchStyle(undefined);
//     }
//   };

//   useEffect(() => {
//     if (isSearchOpen) {
//       document.addEventListener('click', handleClickOutside); // Cambié de 'mousedown' a 'click'
//     } else {
//       document.removeEventListener('click', handleClickOutside);
//     }
//     return () => {
//       document.removeEventListener('click', handleClickOutside);
//     };
//   }, [isSearchOpen]);

//   return (
//     <div
//       className={`header-icon header-search header-search-inline header-search-category w-lg-max text-end mb-0 ${
//         isSearchOpen ? 'show' : ''
//       }`}
//       ref={searchRef}
//     >
//       <Link
//         href={'#'}
//         className="search-toggle"
//         role="button"
//         onClick={toggleSearch}
//       >
//         <i className="icon-search-3" />
//       </Link>
//       <form action="#" method="get">
//         <div
//           className={`header-search-wrapper ${isSearchOpen ? 'show' : ''}`}
//           style={searchStyle}
//         >
//           <input
//             type="search"
//             className="form-control"
//             name="q"
//             id="q"
//             placeholder="Search..."
//             required
//           />
//           <div className="select-custom">
//             <select id="cat" name="cat">
//               <option value="">All Categories</option>
//               <option value={4}>Fashion</option>
//               <option value={12}>- Women</option>
//               <option value={13}>- Men</option>
//               <option value={66}>- Jewellery</option>
//               <option value={67}>- Kids Fashion</option>
//               <option value={5}>Electronics</option>
//               <option value={21}>- Smart TVs</option>
//               <option value={22}>- Cameras</option>
//               <option value={63}>- Games</option>
//               <option value={7}>Home &amp; Garden</option>
//               <option value={11}>Motors</option>
//               <option value={31}>- Cars and Trucks</option>
//               <option value={32}>- Motorcycles &amp; Powersports</option>
//               <option value={33}>- Parts &amp; Accessories</option>
//               <option value={34}>- Boats</option>
//               <option value={57}>- Auto Tools &amp; Supplies</option>
//             </select>
//           </div>
//           <button
//             className="btn icon-magnifier p-0"
//             title="search"
//             type="submit"
//           />
//         </div>
//       </form>
//     </div>
//   );
// };

// export default HeaderSearch;
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Form, FormControl, Button, InputGroup } from 'react-bootstrap';

const HeaderSearch: React.FC = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchStyle, setSearchStyle] = useState<
    { left: string; right: string } | undefined
  >();
  const searchRef = useRef<HTMLDivElement>(null);

  const toggleSearch = (e: React.MouseEvent) => {
    e.preventDefault();
    if (!isSearchOpen) {
      setSearchStyle({ left: '-299.719px', right: '-63.6874px' });
    } else {
      setSearchStyle(undefined);
    }
    setIsSearchOpen(!isSearchOpen);
  };

  const handleClickOutside = (e: MouseEvent) => {
    if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
      setIsSearchOpen(false);
      setSearchStyle(undefined);
    }
  };

  useEffect(() => {
    if (isSearchOpen) {
      document.addEventListener('click', handleClickOutside); // Cambié de 'mousedown' a 'click'
    } else {
      document.removeEventListener('click', handleClickOutside);
    }
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isSearchOpen]);

  return (
    <div
      className={`header-icon header-search header-search-inline header-search-category w-lg-max text-end mb-0 ${
        isSearchOpen ? 'show' : ''
      }`}
      ref={searchRef}
    >
      <Link
        href={'#'}
        className="search-toggle"
        role="button"
        onClick={toggleSearch}
      >
        <i className="icon-search-3" />
      </Link>
      <Form action="#" method="get">
        <div
          className={`header-search-wrapper ${isSearchOpen ? 'show' : ''}`}
          style={searchStyle}
        >
          <InputGroup>
            <FormControl
              type="search"
              placeholder="Search..."
              className="form-control"
              name="q"
              id="q"
              required
            />
            <div className="select-custom">
              <Form.Select id="cat" name="cat">
                <option value="">All Categories</option>
                <option value={4}>Fashion</option>
                <option value={12}>- Women</option>
                <option value={13}>- Men</option>
                <option value={66}>- Jewellery</option>
                <option value={67}>- Kids Fashion</option>
                <option value={5}>Electronics</option>
                <option value={21}>- Smart TVs</option>
                <option value={22}>- Cameras</option>
                <option value={63}>- Games</option>
                <option value={7}>Home &amp; Garden</option>
                <option value={11}>Motors</option>
                <option value={31}>- Cars and Trucks</option>
                <option value={32}>- Motorcycles &amp; Powersports</option>
                <option value={33}>- Parts &amp; Accessories</option>
                <option value={34}>- Boats</option>
                <option value={57}>- Auto Tools &amp; Supplies</option>
              </Form.Select>
            </div>
            {/* <Button type="submit" className="icon-magnifier p-0" title="search"> */}
            <Button type="submit" className="p-0" title="search">
              <i className="fas fa-search"></i>
            </Button>
          </InputGroup>
        </div>
      </Form>
    </div>
  );
};

export default HeaderSearch;
