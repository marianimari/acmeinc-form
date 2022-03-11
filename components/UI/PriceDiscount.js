

const PriceDiscount = (props) => {
  return (
    <span className="font-bold text-red-600">Rp{toRupiahs(props.price)}</span>
         
  )
}

const toRupiahs = (num) => {
  const rupiah = num
    .toString()
    .split("")
    .reverse()
    .join("")
    .match(/\d{1,3}/g)
    .join(".")
    .split("")
    .reverse()
    .join("");
  return rupiah;
};
export default PriceDiscount