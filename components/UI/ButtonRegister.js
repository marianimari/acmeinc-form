import ButtonPrimary from "./ButtonPrimary";
import ButtonGhost from "./ButtonGhost";

const ButtonRegister = (props) => {
  return (
    <div className="z-10 h-[88px] fixed md:relative bottom-0 left-0 w-full px-4 pt-4 md:p-0 md:pt-6 bg-light-100 md:bg-transparent">
      {props.disabled ? (
        <ButtonGhost text={props.text} />
      ) : (
        <ButtonPrimary text={props.text} type="submit"/>
      )}
    </div>
  );
};

export default ButtonRegister;
