import BannerSection from './components/BannerSection';
import CategoriesSlider from './components/CategoriesSlider';
import CategoryFilter from './components/CategoryFilter';
import DealProductSection from './components/DealProductSection';
import InfoBoxesSlider from './components/InfoBoxesSlider';
import PromoSection from './components/PromoSection';
import SliderComponent from './components/SliderComponent';
import ElectronicsSection from './components/ElectronicsSection';
import GadgetsSection from './components/GadgetsSection';
import HomeGardenSection from './components/HomeGardenSection';
import SelectProducts from './components/SelectProducts';
import BannerBottom from './components/BannerBottom';
import RecentlyViewed from './components/RecentlyViewed';

export default function Home() {
  return (
    <>
      <div className="bg-gray pb-5">
        <div className="container pb-3">
          <SliderComponent />
          <CategoriesSlider />
          <PromoSection
            headingText="DOWNLOAD OUR APP DOWNLOAD OUR APP DOWNLOAD OUR APP"
            subText="EXCLUSIVE SALES, GET IT NOW!"
            promoText="DOWNLOAD OUR APP"
            buttonText="Get NOW!"
            buttonLink="/tienda"
          />
        </div>
      </div>
      <div className="container">
        <InfoBoxesSlider />
        <BannerSection />
        <DealProductSection />
      </div>
      <CategoryFilter />
      <div className="bg-gray">
        <div className="container">
          <ElectronicsSection />
          <GadgetsSection />
          <HomeGardenSection />

          <SelectProducts />

          <BannerBottom />
          {/* End .top-notice */}

          <RecentlyViewed />
        </div>
      </div>
    </>
  );
}
