const CharacterCheck = (props) => {
  return (
    <>
      {props.errorMsg ? (
        <span className="mx-1 font-medium text-red-600 font-normal text-sm">
          {props.current}/{props.max}
        </span>
      ) : (
        <span className="mx-1 font-medium text-dark-50 font-normal text-sm">
          {props.current}/{props.max}
        </span>
      )}
    </>
  );
};

export default CharacterCheck;
