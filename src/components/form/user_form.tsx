import React from "react";
import { useFormContext } from "react-hook-form";

import Form from "./form";
import FormRow from "./row";
import Button from "./button";
import Input from "./input";
import Select from "./select";

import Horizontal from "../layout/horizontal";
import { BRAZILIAN_PASSPORT_REGEX, FRENCH_PASSPORT_REGEX } from "../../config";

const UserForm = (): JSX.Element => {
  const { handleSubmit, trigger, formState, getValues } = useFormContext();

  const validateForm = () => {
    console.log("form submitted");
  };

  const validatePassportId = (input: string) => {
    const userNationality = getValues("nationality");
    const appropriatePassportRegex =
      userNationality === "nationality-fr"
        ? FRENCH_PASSPORT_REGEX
        : BRAZILIAN_PASSPORT_REGEX;

    if (input && !input.match(appropriatePassportRegex)) {
      return "The field does not match passport id pattern";
    }

    return true;
  };

  return (
    <Form
      formTitle="Vos informations"
      handleSubmit={handleSubmit(validateForm)}
    >
      <FormRow>
        <Select
          name="gender"
          label="Titre"
          validation={{ required: "error message" }}
        >
          <option key="mr" value="mr">
            Mr
          </option>
          <option key="mrs" value="mrs">
            Mme
          </option>
        </Select>
        <Input
          type="text"
          validation={{ required: "error message" }}
          name="firstname"
          label="Prénom"
          placeholder="Prénom"
        />
        <Input
          type="text"
          name="lastname"
          label="Nom"
          placeholder="Nom"
          validation={{ required: "error message" }}
        />
      </FormRow>
      <FormRow>
        <Select
          name="nationality"
          label="Nationalité"
          defaultValue="nationality-fr"
          onChange={() => trigger("passportId")}
        >
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
          validation={{
            required: "error message",
            validate: validatePassportId,
          }}
          label="Numéro de passport"
          placeholder="Numéro de passeport"
        />
      </FormRow>
      <FormRow>
        <Input
          type="email"
          name="email"
          label="email"
          placeholder="monemail@example.fr"
          validation={{ required: "error message" }}
        />
      </FormRow>
      <Horizontal>
        <Button type="submit" disabled={formState.isSubmitting}>
          Envoyer
        </Button>
      </Horizontal>
    </Form>
  );
};

export default UserForm;
