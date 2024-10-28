import CategoriesContainer from './HomeGardenSection/CategoriesContainer';
import ProductSliderTabs from './HomeGardenSection/ProductSliderTabs';
// import ProductSliderTabs from './HomeGardenSection/ProductSliderTabs';
import WidgetOffers from './HomeGardenSection/WidgetOffers';

const HomeAndGardenSection = () => {
  const categoryIds = [1, 2, 3]; // Define aquí las categorías que deseas
  const limit = 8; // Establece aquí el límite de productos
  return (
    <div
      className="bg-white appear-animate animated fadeIn appear-animation-visible"
      data-animation-name="fadeIn"
      data-animation-delay="100"
      style={{ animationDuration: '1000ms' }}
    >
      <div className="row">
        <div className="col-xl-9 col-xl-9cols pr-xl-0">
          <CategoriesContainer />
          <ProductSliderTabs categoryIds={categoryIds} limit={limit} />
        </div>
        <div className="col-xl-3 col-xl-3cols">
          <WidgetOffers />
        </div>
      </div>
    </div>
  );
};

export default HomeAndGardenSection;
