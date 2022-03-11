import Toast from "./Toast"

const ToastRegister = (props) => {
  return (
    <div className="z-20 md:z-[-1] fixed md:absolute bottom-[88px] md:-top-16 left-0 w-full px-4">
        <Toast message={props.message}/>
    </div>
  )
}

export default ToastRegister