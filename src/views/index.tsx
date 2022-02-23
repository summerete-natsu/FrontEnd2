import TextField from "@mui/material/TextField/TextField";
import React, { useEffect, useRef, useState } from "react";
import "./index.css";

function TemperatureInput(props: any) {
  const [tempState, setTempState] = useState("");
  const { tempName, celsius, setCelsius } = props;
  const inputRef = useRef(null);

  useEffect(() => {
    //    setTempState()
    if (inputRef && inputRef.current) {
      if (inputRef.current !== document.activeElement) {
        if (tempName === "Celsius") {
          setTempState("" + celsius);
        } else {
          setTempState("" + ((celsius * 9) / 5 + 32));
        }
      }
    }
  }, [celsius]);

  const handleChange = (e: any) => {
    setTempState(e.target.value);

    if (tempName === "Celsius") {
      setCelsius(parseInt(e.target.value));
    } else {
      setCelsius(((parseInt(e.target.value) - 32) * 5) / 9);
    }
  };
  return (
    <div className="temCSS">
      <div>{"Enter temperature in " + tempName}</div>
      <TextField
        id="outlined-basic"
        label="Outlined"
        variant="outlined"
        inputRef={inputRef}
        value={tempState}
        onChange={handleChange}
      />
    </div>
  );
}

function Main() {
  const [celsius, setCelsius] = useState(0);

  return (
    <div>
      <TemperatureInput
        tempName="Celsius"
        celsius={celsius}
        setCelsius={setCelsius}
      />
      <TemperatureInput
        tempName="Fahrenheit"
        celsius={celsius}
        setCelsius={setCelsius}
      />
      <p>
        {"the water would "}
        {celsius >= 100 ? "boil" : "not boil"}
      </p>
    </div>
  );
}

export default Main;
