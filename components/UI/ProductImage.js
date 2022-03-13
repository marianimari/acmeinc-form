import Image from "next/image";

// const myLoader = ({ src, width, quality }) => {
//   return `./../public/assets/images/${src}?w=${width}&q=${quality || 75}`;
// };

const ProductImage = (props) => {
  return (
    // <Image
    //   loader={myLoader}
    //   src={ImageDefault}
    //   alt={props.alt}
    //   width={500}
    //   height={500}
    // />
    <div className=" relative h-[152px] md:h-[156px] w-full">
      <Image
        {...props}
        className="object-center rounded-t-xl w-full"
        layout="fill"
        objectFit="cover"
      />
    </div>
  );
};

export default ProductImage;
