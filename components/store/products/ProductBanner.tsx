import bannerImg from '../../../assets/vtcm-banner.png';

import Image from 'next/image';

const PRODUCT_PREVIEW_BANNER_HEIGHT = 300;
const PRODUCT_PREVIEW_BANNER_WIDTH = 200;

export function ProductBanner() {
  return (
  <div className="product-preview-banner-wrapper relative	" style={{ height: PRODUCT_PREVIEW_BANNER_HEIGHT + 'px', width: PRODUCT_PREVIEW_BANNER_WIDTH + 'px' }}>
    <div className="banner-hover-overly absolute z-20 rounded bg-white bg-opacity-0 hover:bg-opacity-10 transition-all duration-200 ease-in-out" style={{ height: PRODUCT_PREVIEW_BANNER_HEIGHT + 'px', width: PRODUCT_PREVIEW_BANNER_WIDTH + 'px' }} />
    <div className="banner-progress-indicator absolute z-10 bg-left	bg-cover rounded transition-all duration-500 ease-in-out" style={{ height: PRODUCT_PREVIEW_BANNER_HEIGHT + 'px', width: 40 + 'px', backgroundImage: 'url(' + bannerImg.src + ')' }} />
    <div className="banner-bg absolute flex justify-center items-center" style={{ height: PRODUCT_PREVIEW_BANNER_HEIGHT + 'px', width: PRODUCT_PREVIEW_BANNER_WIDTH + 'px' }}>
      <Image src={bannerImg} alt="Banner" className="rounded filter grayscale" height={PRODUCT_PREVIEW_BANNER_HEIGHT + 'px'} width={PRODUCT_PREVIEW_BANNER_WIDTH + 'px'} />
    </div>
  </div>
  );
}