import Image from 'next/image';

import BrandLogo from '../../../branding/horizon/logo-transparent.png';

function FormBrandLogo() {
  return (
    <div className="flex justify-center mb-6 h-20">
      <Image src={BrandLogo} alt="Horizon Logo" objectFit="contain" />
    </div>
  );
}

export default FormBrandLogo;