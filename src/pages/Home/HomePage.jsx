import React from 'react';

// Importing components specific to the homepage
import HeaderBanner from '../../components/Home/HeaderBanner/HeaderBanner';
import FeaturedProducts from '../../components/Home/FeaturedProducts/FeaturedProducts';
import LatestProducts from '../../components/Home/LatestProducts/LatestProducts';
import ShopexOffer from '../../components/Home/ShopexOffer/ShopexOffer';
import UniqueFeature from '../../components/Home/UniqueFeature/UniqueFeature';
import TrendingProducts from '../../components/Home/TrendingProducts/TrendingProducts';
import DiscountItem from '../../components/Home/DiscountItem/DiscountItem';
import TopCategories from '../../components/Home/TopCategories/TopCategories';
import DiscountBanner from '../../components/Home/DiscountBanner/DiscountBanner';
import GroupLogo from '../../components/shared/GroupLogo/GroupLogo';
import LatestBlog from '../../components/Home/LatestBlog/LatestBlog';

export default function HomePage() {
  return (
    <div className="home-page">
      {/* Render homepage-specific components */}
      <HeaderBanner />
      <FeaturedProducts />
      <LatestProducts />
      <ShopexOffer />
      <UniqueFeature />
      <TrendingProducts />
      <DiscountItem />
      <TopCategories />
      <DiscountBanner />
      <GroupLogo />
      <LatestBlog />
    </div>
  );
}
