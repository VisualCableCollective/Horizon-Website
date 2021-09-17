import { Product } from 'horizon-api-client';
import { GiPauseButton } from 'react-icons/gi';
import { ImArrowDown, ImPlay3 } from 'react-icons/im';
import { OwnershipStatus, PreviewStyle } from './ProductPreviewItem';

interface Props {
  style: PreviewStyle,
  product: Product,
  ownershipStatus?: OwnershipStatus,
  installationProgress?: number,
}

export function ProductPreviewInteractionSection(props: Props) {
  let statusMessage = 'n/a';
  let statusIcon;
  
  if (props.style == PreviewStyle.Library) {
    switch (props.ownershipStatus){
      case OwnershipStatus.NotOwned:
        // ToDo
        break;
      case OwnershipStatus.Owned:
        statusIcon = <ImArrowDown style={{ height: '13px' }} />;
        statusMessage = 'Install';
        break;
      case OwnershipStatus.Installed:
        statusIcon = <ImPlay3 style={{ height: '14px' }} />;
        statusMessage = 'Start';
        break;
      case OwnershipStatus.Installing:
        statusIcon = <GiPauseButton style={{ height: '11px' }} />;
        statusMessage = props.installationProgress + '% installed';
        break;
    }
  }

  return (
        <div className="product-preview-interaction-section mt-4">
            <h1 className="text-base ml-1 font-medium p-0 leading-tight truncate">{props.product.name}</h1>
            {
              props.style == PreviewStyle.Library &&
              <div className="product-status flex flex-row items-center" style={{ color: '#ABABAB' }}>
                {statusIcon}
                <p className="text-sm m-0 p-0" style={{ marginLeft: '4px' }}>{statusMessage}</p>
              </div>
            }
            {
              props.style == PreviewStyle.Store &&
              <div className="product-info ml-1 p-0 leading-tight ">
                <p className="text-white text-opacity-70 font-medium truncate">{ props.product.creator.name }</p>
                <p className="mt-3 font-medium">Free</p>
              </div>
            }
        </div>
  );
}