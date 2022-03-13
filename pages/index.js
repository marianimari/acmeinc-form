import FormGroup from "../components/FormGroup";
import ProductCard from "../components/ProductCard";
import Logo from "../components/Logo";

export default function Home() {
  return (
    <>
      <div className="md:mx-auto max-w-screen-lg px-4 md:px-12 py-10 ">
        <Logo />
        <div className="items-center md:space-x-4 md:flex sm:flex-row md:justify-between md:pb-0 pb-[30px]">
          <ProductCard />
          <div
            aria-label="form-wraper"
            className=" relative block md:p-4 px-0 pb-4 mt-6 rounded-xl md:shadow-small bg-transparent md:bg-white md:max-w-sm sm:max-w-full"
          >
            <FormGroup/>
      
          </div>
        </div>
      </div>
    </>
  );
}
