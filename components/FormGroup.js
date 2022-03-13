import PhoneNumberInput from "./UI/PhoneNumberInput";
import { useState, useEffect, useRef } from "react";
import InputItem from "./UI/InputItem";
import LabelInput from "./UI/LabelInput";
import Helper from "./UI/HelperMessage";
import CharacterCheck from "./UI/CharacterCheck";
import ErorrMessage from "./UI/ErorrMessage";
import ToastRegister from "./UI/ToastRegister";
import ButtonRegister from "./UI/ButtonRegister";
import InputGroup from "./UI/InputGroup";

const FormGroup = (props) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [msgNameError, setMsgNameError] = useState("");
  const [msgPhoneError, setMsgPhoneError] = useState("");
  const [msgPassError, setMsgPassError] = useState("");
  const [nameLength, setNameLength] = useState(0);
  const [passLength, setPassLength] = useState(0);
  const [isSubmitReady, setIsSubmitReady] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const isFirstRun = useRef(true);

  //for Name Input
  useEffect(() => {
    //console.log(name);

    let char = name.length;

    setNameLength(char);

    setName(formatTitleCase(name));
    if (char < 3) {
      setMsgNameError("Nama terlalu pendek");
    } else if (char > 50) {
      setMsgNameError("Nama terlalu panjang");
    } else {
      setMsgNameError("");
    }
  }, [name]);

  //for Phone Input
  useEffect(() => {
    // console.log(phone);

    let phoneChar = phone.length;

    //only let number input
    if (!/^[0-9]+$/.test(phone)) {
      setMsgPhoneError("Nomor telepon tidak valid");
    } else if (phoneChar > 16 || phoneChar < 4) {
      setMsgPhoneError("Nomor telepon tidak valid");
    } else {
      setMsgPhoneError("");
    }
  }, [phone]);

  //for PasswordInputs
  useEffect(() => {
    let passChar = password.length;
    setPassLength(passChar);
    if (passChar < 8 || passChar > 16) {
      setMsgPassError(
        "Kata sandi harus mengandung 8-16 karakter, kombinasi huruf besar, huruf kecil, dan angka"
      );
    } else if (
      password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*?]{6,}$/)
    ) {
      setMsgPassError("");
    } else {
      setMsgPassError(
        "Kata sandi harus mengandung 8-16 karakter, kombinasi huruf besar, huruf kecil, dan angka"
      );
    }
  }, [password]);

  //checking if submit ready
  useEffect(() => {
    if (
      msgNameError.length === 0 &&
      msgPhoneError.length === 0 &&
      msgPassError.length === 0
    ) {
      setIsSubmitReady(true);
    } else {
      setIsSubmitReady(false);
    }
  }, [msgNameError, msgPhoneError, msgPassError]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name);
    console.log(phone);
    console.log(password);
    setIsSuccess(true);
    setTimeout(() => {
      setIsSuccess(false);
    }, 3000);
  };

  return (
    <>
      {isSuccess && <ToastRegister message="selamat data anda tersimpan" />}

      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <InputGroup>
          <div className="flex justify-between">
            <LabelInput label="Nama Lengkap" />
            <CharacterCheck
              errorMsg={msgNameError}
              current={nameLength}
              max={50}
            />
          </div>
          <InputItem
            onChange={(e) => setName(e.target.value)}
            type="text"
            name="name"
            placeholder="John Doe"
          />
          {msgNameError.length > 0 ? (
            <ErorrMessage message={msgNameError} />
          ) : (
            <Helper message="" />
          )}
        </InputGroup>

        <InputGroup>
          <div className="flex justify-between">
            <LabelInput label="Nomor Telepon" />
          </div>
          <PhoneNumberInput onChange={(value) => setPhone(value)} />
          {msgPhoneError.length > 0 ? (
            <ErorrMessage message={msgPhoneError} />
          ) : (
            <Helper message="Pilih kode negara, diikuti dengan nomor HPmu" />
          )}
        </InputGroup>

        <InputGroup>
          <div className="flex justify-between">
            <LabelInput label="Kata Sandi" />

            <CharacterCheck
              errorMsg={msgPassError}
              current={passLength}
              max={16}
            />
          </div>
          <InputItem
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            name="password"
            placeholder="Masukkan"
          />

          {msgPassError.length > 0 ? (
            <ErorrMessage message={msgPassError} />
          ) : (
            <Helper message="Kata sandi harus mengandung 8-16 karakter, kombinasi huruf besar, huruf kecil, dan angka" />
          )}
        </InputGroup>

        <ButtonRegister text="Submit" disabled={!isSubmitReady} />
      </form>
    </>
  );
};

//transform input name into title case
function formatTitleCase(name) {
  return name.replace(/\w\S*/g, function (formatedText) {
    return (
      formatedText.charAt(0).toUpperCase() +
      formatedText.substr(1).toLowerCase()
    );
  });
}

export default FormGroup;
