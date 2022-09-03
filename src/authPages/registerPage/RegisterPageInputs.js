import React from "react";
import InputWithLabel from "../../shared/components/InputWithLabel";

const RegisterPageInputs = ({
  mail,
  setMail,
  password,
  setPassword,
  username,
  setUsername,
}) => {
  return (
    <>
      <InputWithLabel
        value={mail}
        setValue={setMail}
        label="E-Mail"
        type="text"
        placeholder="please enter your email."
      />
      <InputWithLabel
        value={username}
        setValue={setUsername}
        label="Username"
        type="text"
        placeholder="please enter your username."
      />
      <InputWithLabel
        value={password}
        setValue={setPassword}
        label="Password"
        type="password"
        placeholder="please enter your password."
      />
    </>
  );
};

export default RegisterPageInputs;
