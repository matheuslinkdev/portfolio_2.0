import React from "react";
import { FormLabel, Input } from "@chakra-ui/react";

interface InputFieldProps {
  inputType: string;
  inputPlaceholder: string;
  inputLabel: string;
  inputValue: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputField = ({
  inputType,
  inputPlaceholder,
  inputLabel,
  inputValue,
  onChange,
}: InputFieldProps) => {
  return (
    <>
      <FormLabel mt={5} color="white.200">{inputLabel}</FormLabel>
      <Input
        type={inputType}
        bgColor="white.400"
        color="black.400"
        fontWeight={600}
        w={400}
        maxW="95%"
        borderRadius={2}
        placeholder={inputPlaceholder}
        _placeholder={{ opacity: "50%", color: "black.400" }}
        value={inputValue}
        onChange={onChange}
      />
    </>
  );
};

export default InputField;
