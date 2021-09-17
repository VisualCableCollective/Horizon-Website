import bannerImg from '../../../assets/vtcm-banner.png';

import Image from 'next/image';
import { OwnershipStatus, PreviewStyle } from './ProductPreviewItem';

const PRODUCT_PREVIEW_BANNER_HEIGHT = 300;
const PRODUCT_PREVIEW_BANNER_WIDTH = 200;

interface Props {
  style: PreviewStyle,
  productOwnershipStatus?: number,
  bannerImgSrc?: string,
  productInstallationProgress?: number,
}

export function ProductBanner(props: Props) {
  let progressIndicatorWidth = 0;

  if (props.style == PreviewStyle.Library) {
    switch (props.productOwnershipStatus) {
      case OwnershipStatus.Installing:
        progressIndicatorWidth = (props.productInstallationProgress / 100) * PRODUCT_PREVIEW_BANNER_WIDTH;
        break;
      case OwnershipStatus.Installed:
        progressIndicatorWidth = PRODUCT_PREVIEW_BANNER_WIDTH;
        break;
    }
  }

  return (
    <div className="product-preview-banner-wrapper relative	" 
      style={{ height: PRODUCT_PREVIEW_BANNER_HEIGHT + 'px', width: PRODUCT_PREVIEW_BANNER_WIDTH + 'px' }}>

      <div className="banner-hover-overly absolute z-20 rounded bg-white bg-opacity-0 hover:bg-opacity-10 transition-all duration-200 ease-in-out" 
        style={{ height: PRODUCT_PREVIEW_BANNER_HEIGHT + 'px', width: PRODUCT_PREVIEW_BANNER_WIDTH + 'px' }} />

      { props.style == PreviewStyle.Library && 
        <div className="banner-progress-indicator absolute z-10 bg-left	bg-cover rounded transition-all duration-500 ease-in-out" 
          style={{ height: PRODUCT_PREVIEW_BANNER_HEIGHT + 'px', width: progressIndicatorWidth + 'px', backgroundImage: 'url(' + bannerImg.src + ')' }} /> 
      }

      <div className="banner-bg absolute flex justify-center items-center"
        style={{ height: PRODUCT_PREVIEW_BANNER_HEIGHT + 'px', width: PRODUCT_PREVIEW_BANNER_WIDTH + 'px' }}>

        <Image src={bannerImg}
          alt="Banner"
          className={'rounded' + (props.style == PreviewStyle.Library ? ' filter grayscale' : '')}
          height={PRODUCT_PREVIEW_BANNER_HEIGHT + 'px'}
          width={PRODUCT_PREVIEW_BANNER_WIDTH + 'px'} />

      </div>
    </div>
  );
}