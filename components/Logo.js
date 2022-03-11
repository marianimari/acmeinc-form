import Image from "next/image";
import LogoImage from "./../public/assets/acme.svg";

const Logo = () => {
  return (
    <div className="mx-auto text-center md:mb-[95px] mb-8">
      <Image
        src={LogoImage}
        alt="ACME Inc Logo"
        width={116}
      />
    </div>
  );
};

export default Logo;
