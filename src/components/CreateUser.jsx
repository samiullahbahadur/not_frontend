import React from "react";
import { Formik, Field, Form } from "formik";
import classes from "./User.module.css";
import validateInput from "./validate_input";
import { useGetSectorQuery } from "../store/sectorSlice";
import { useAddUserMutation } from "../store/userSlice";

const isNotEmpty = (value) => value.trim() !== "";

const Modal = () => {
  const { data } = useGetSectorQuery();
  const [addUser] = useAddUserMutation();
  const {
    value: nameValue,
    isValid: nameIsvalid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangedHanler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput,
  } = validateInput(isNotEmpty);
  const {
    value: sectorValue,
    isValid: sectorIsvalid,
    hasError: sectorInputHasError,
    valueChangeHandler: sectorChangedHanler,
    inputBlurHandler: sectorBlurHandler,
    reset: resetSectorInput,
  } = validateInput(isNotEmpty);

  const {
    value: termValue,
    isValid: termIsvalid,
    hasError: termInputHasError,
    valueChangeHandler: termChangedHanler,
    inputBlurHandler: termBlurHandler,
    reset: resetTermInput,
  } = validateInput(isNotEmpty);

  let formIsValid = false;
  if (nameIsvalid && termIsvalid && sectorIsvalid) {
    formIsValid = true;
  }

  const nameInputClasses = nameInputHasError
    ? " input_field invalid"
    : "input_field";

  const sectorInputClasses = sectorInputHasError
    ? " input_field invalid"
    : "input_field";

  const termInputClasses = termInputHasError
    ? " input_field invalid"
    : "input_field";

  return (
    <div className={classes.modal}>
      <h4>Create Sector</h4>
      <Formik
        initialValues={{
          name: "",
          sector: "",
          status: true,
        }}
        onSubmit={(values, { resetForm }) => {
          addUser({ ...values });
          resetForm({ values: "" });
        }}
      >
        <Form>
          <div className={nameInputClasses}>
            <div className={classes.input_field}>
              <label htmlFor="name"> Name</label>
              <Field
                type="text"
                name="name"
                placeholder="Enter Name"
                className="form-control"
                required
                value={nameValue}
                onChange={nameChangedHanler}
                onBlur={nameBlurHandler}
              />
              {nameInputHasError && (
                <span className="error-text">Please enter name.</span>
              )}
            </div>
          </div>

          <div className={sectorInputClasses}>
            <div className={classes.input_field}>
              <label htmlFor="name"> Sectors</label>
              <Field
                as="select"
                name="sector"
                className="form-select"
                required
                value={sectorValue}
                onChange={sectorChangedHanler}
                onBlur={sectorBlurHandler}
              >
                <option disabled value="">
                  Select a sector
                </option>

                {data &&
                  data.map((sector) => (
                    <option key={sector.id} value={sector.title}>
                      {sector.title}
                    </option>
                  ))}
              </Field>

              {sectorInputHasError && (
                <span className="error-text">Please select .</span>
              )}
            </div>
          </div>
          <div className={termInputClasses}>
            <div className={classes.input_field}>
              <Field
                type="checkbox"
                 className=""
                checked={termValue}
                onChange={termChangedHanler}
                onBlur={termBlurHandler}
              />
              Agree to terms
              <br />
              {termInputHasError && (
                <span className="error-text">Please check the box.</span>
              )}
            </div>
          </div>

          <div>
            <button
              type="submit"
              className={classes.bnt}
              disabled={!formIsValid}
            >
              Save
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default Modal;
