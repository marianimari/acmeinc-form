import axios from "axios";
import { useState, useEffect } from "react";

const PhoneNumberInput = (props) => {
  const URL = "https://restcountries.com/v2/all";

  const [countries, setCountries] = useState([]);
  const [countryCode, setCountryCode] = useState("93");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    axios.get(URL).then((response) => {
      setCountries(response.data);
    });
  }, []);

  useEffect(() => {
    // console.log(countryCode.concat(phone));

    props.onChange(countryCode.concat(phone));
  }, [phone, countryCode]);

  return (
    <>
      <div className="mt-1 relative rounded-md shadow-sm">
        <div className="absolute inset-y-0 left-0 flex items-center">
          <select
            id="dialcode"
            name="dialcode"
            className="h-full w-[90px] py-0 pl-4 pr-4  bg-transparent text-gray-500 sm:text-sm rounded-xl"
            onChange={(e) => setCountryCode(e.target.value)}
      
         >
            {countries.map((country, index) => (
              <option value={country.callingCodes} key={index}>
                {country.name}  +{country.callingCodes}  
              </option>
            ))}
          </select>
        </div>
        <input
          type="tel"
          name="phone"
          id="phone"
          className="font-normal leading-4 shadow-3xl mt-5px px-4 py-4 pl-[96px] bg-white border border-dark-100 text-dark-100 placeholder-dark-50 block w-full rounded-xl text-sm  "
          placeholder="1234567890"
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>
    </>
  );
};

export default PhoneNumberInput;
