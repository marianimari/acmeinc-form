import Clock from "./../../public/assets/clock.png";
import Image from "next/image";
const DateProduct = (props) => {
  return (
    <div className="flex items-center">
      <Image src={Clock} height={24} width={24} alt={props.product} />
      <p className="font-medium ml-2 text-sm text-dark-100">31 Desember 2022</p>
    </div>
  );
};

export default DateProduct;
