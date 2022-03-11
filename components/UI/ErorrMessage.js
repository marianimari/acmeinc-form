const ErorrMessage = (props) => {
  return (
    <>
      <span className="font-normal mx-1 leading-5 mt-11px block text-sm font-medium text-red-600 ">
        {props.message}
      </span>
    </>
  );
};

export default ErorrMessage;
