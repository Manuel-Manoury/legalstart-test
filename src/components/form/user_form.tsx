import React from "react";
import { useFormContext } from "react-hook-form";

import Form from "./form";
import FormRow from "./row";
import Button from "./button";
import Input from "./input";
import Select from "./select";

import Horizontal from "../layout/horizontal";

const UserForm = () => {
  const { watch, handleSubmit } = useFormContext();

  const nationality = watch("nationality");

  const validateForm = () => {
    console.log("submit");
  };

  return (
    <Form formTitle="Vos informations" handleSubmit={handleSubmit(validateForm)}>
      <FormRow>
        <Select name="gender" label="Titre">
          <option key="mr" value="mr">
            Mr
          </option>
          <option key="mrs" value="mrs">
            Mme
          </option>
        </Select>
        <Input type="text" name="firstname" label="Prénom" placeholder="Prénom" />
        <Input type="text" name="lastname" label="Nom" placeholder="Nom" />
      </FormRow>
      <FormRow>
        <Select name="nationality" label="Nationalité" defaultValue="nationality-fr">
          <option key="nationality-fr" value="nationality-fr">
            Française
          </option>
          <option key="nationality-br" value="nationality-br">
            Brésilienne
          </option>
        </Select>
        <Input
          type="text"
          name="passportId"
          label="Numéro de passport"
          placeholder={nationality === "nationality-br" ? "Passport Brésilien" : "Passport Français"}
        />
      </FormRow>
      <FormRow>
        <Input type="email" name="email" label="email" placeholder="monemail@example.fr" />
      </FormRow>
      <Horizontal>
        <Button type="submit" disabled={false ? true : false}>
          {false ? "Envoyé" : "Envoyer"}
        </Button>
      </Horizontal>
    </Form>
  );
};

export default UserForm;
