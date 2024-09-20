import React, { useEffect, useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

interface InputProps {
  divClassName: string;
  inputClassName: string;
  inputPlaceholder: string;
  inputName: string;
  inputOnChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
  isPassword?: boolean;
  showPassword: boolean;
  setShowPassword: (showPassword: boolean) => void;
}

const styles: { [key: string]: string } = {
  iconDiv: "grid content-center",
};

const Input: React.FC<InputProps> = ({
  divClassName,
  inputClassName,
  inputPlaceholder,
  inputName,
  inputOnChange,
  isPassword,
  showPassword,
  setShowPassword,
}: InputProps) => {
  const [inputType, setInputType] = useState<string>(
    isPassword ? "password" : "text"
  );

  useEffect(() => {
    if (isPassword) {
      showPassword ? setInputType("text") : setInputType("password");
    }
  }, [showPassword]);

  return (
    <div className={divClassName}>
      <input
        className={inputClassName}
        type={inputType}
        placeholder={inputPlaceholder}
        name={inputName}
        onChange={inputOnChange}
      />
      {isPassword &&
        (showPassword ? (
          <div
            className={`Input/iconDiv ${styles["iconDiv"]}`}
            onClick={() => {
              setShowPassword(!showPassword);
            }}
          >
            <VisibilityIcon />
          </div>
        ) : (
          <div
            className={`Input/iconDiv ${styles["iconDiv"]}`}
            onClick={() => {
              setShowPassword(!showPassword);
            }}
          >
            <VisibilityOffIcon />
          </div>
        ))}
    </div>
  );
};

export default Input;
