import React from "react";
import FormCreate from "./FormCreate";
import { useGetSectorQuery } from "../../store/sectorSlice";
import { useAddUserMutation } from "../../store/userSlice";

const Modal = () => {
  const { data } = useGetSectorQuery();
  const [addUser] = useAddUserMutation();
  const validateName = (value) => {
    let error_msg;

    if (value === "") {
      error_msg = "please enter name";
    }
    return error_msg;
  };
  const validateSector = (value) => {
    let error_msg;

    if (value === "") {
      error_msg = "please select a sector";
    }
    return error_msg;
  };
  const validateTerm = (value) => {
    let error_msg;

    if (value === false) {
      error_msg = "please check the box";
    }
    return error_msg;
  };

  return (
    <FormCreate 
      data={data}
      addUser={addUser}
      validateName={validateName}
      validateSector={validateSector}
      validateTerm={validateTerm}
    />
  );
};

export default Modal;
