import { Product } from 'horizon-api-client';
import { ProductBanner } from './ProductBanner';
import { ProductPreviewInteractionSection } from './ProductPreviewInteractionSection';

export enum PreviewStyle {
  Store,
  Library,
}

export enum OwnershipStatus{
  NotOwned,
  Owned,
  Installing,
  Installed,
}

interface Props {
  style: PreviewStyle,
  product: Product,
}

export function ProductPreviewItem(props: Props) {
  return (
        <div className="product-preview-item overflow-hidden" style={{ maxWidth: '200px' }}>
            <ProductBanner style={props.style} />
            <ProductPreviewInteractionSection style={props.style} product={props.product} />
        </div>
  );
}