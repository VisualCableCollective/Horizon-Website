import Image from "next/image";

import BrandLogo from "../../../branding/vcc/logo-transparent.png";

function FormBrandLogo() {
  return (
    <div className="flex justify-center pb-4 h-20">
      <Image src={BrandLogo} alt="VCC Logo" objectFit="contain" />
    </div>
  )
}

export default FormBrandLogo;