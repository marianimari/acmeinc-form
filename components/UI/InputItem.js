

const InputItem = (props) => {
  return (
    <>
      <input
        className="font-normal leading-4 shadow-3xl mt-5px px-4 py-4 bg-white border border-dark-100 text-dark-100 placeholder-dark-50 block w-full rounded-xl text-sm  "
        {...props}
      />
    </>
  );
};

export default InputItem;
