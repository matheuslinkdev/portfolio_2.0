import React from 'react'

import {
  Button,
  Center,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { useState } from "react";
import InputField from "./Input";
import { useTranslation } from 'react-i18next';
import emailjs from "@emailjs/browser";

const ContactForm = () => {
const [userName, setUserName] = useState<string>("");
const [userEmail, setUserEmail] = useState<string>("");
const [message, setMessage] = useState<string>("");
const [emptyField, setEmptyField] = useState<boolean>(false);
const [t] = useTranslation("global");

const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;

const hasEmptyInput = !userName || !userEmail || !message;

const cleanStates = () => {
  setUserName("");
  setUserEmail("");
  setMessage("");
};

const handleChange = (
  //Tipagem para eventos de change e alteração de estado
  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  setState: React.Dispatch<string>
) => {
  setState(e.target.value);
};

const emailSendFunction = () => {
  const templateParams = {
    from_name: userName || "",
    email: userEmail || "",
    message: message || "",
  };
  emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY).then(
    (res) => {
      console.log("Success", res.status, res.text);
      cleanStates();
    },
    (err) => {
      console.error("ERROR:", err);
    }
  );
};

const sendEmail: React.FormEventHandler<HTMLFormElement> = (e) => {
  e.preventDefault();
  if (hasEmptyInput) {
    return setEmptyField(true);
  }

  emailSendFunction();
  alert("Mensagem enviada com sucesso !");
  cleanStates();
  setEmptyField(false);
};

return (
  <Center>
    <form onSubmit={sendEmail} >
      <FormControl
        display="flex"
        flexDir="column"
        justifyContent="center"
        alignItems="center"
        isInvalid={emptyField}
      >
        <InputField
          inputType="text"
          inputPlaceholder="Ex: Jane Doe"
          inputLabel={t("Form.nameLabel")}
          inputValue={userName}
          onChange={(e) => handleChange(e, setUserName)}
        />
        {emptyField && (
          <FormErrorMessage>{t("Form.errorMsg")}</FormErrorMessage>
        )}

        <InputField
          inputType="email"
          inputPlaceholder="Ex: janedoe@gmail.com"
          inputLabel="Email:"
          inputValue={userEmail}
          onChange={(e) => handleChange(e, setUserEmail)}
        />
        {emptyField && (
          <FormErrorMessage>{t("Form.errorMsg")}</FormErrorMessage>
        )}

        <FormLabel mt={5} color="white.200">{t("Form.msgLabel")}</FormLabel>
        <Textarea
          placeholder={t("Form.textAreaPlaceholder")}
          w={400}
          maxW="95%"
          color="black.400"
          bgColor="white.200"
          h={200}
          _placeholder={{ opacity: "50%", color: "black.400" }}
          value={message}
          onChange={(e) => {
            handleChange(e, setMessage);
          }}
        />
        {emptyField && (
          <FormErrorMessage>{t("Form.errorMsg")}</FormErrorMessage>
        )}
        <Button type="submit" mt={5} w={170} color="blue.900" bgColor="blue.300" _hover={{bgColor: "blue.200"}}>
          {t("Form.buttonLabel")}
          <Text></Text>
        </Button>
      </FormControl>
    </form>
  </Center>
);
}

export default ContactForm