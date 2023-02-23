import React from "react";
import { Formik, Field, Form } from "formik";
import classes from "./ServyFrom.module.css";

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
    <div className={classes.modal}>
      <h5>
        Please enter your name and pick the Sectors you are currently involved
        in.
      </h5>
      <Formik
        initialValues={{
          name: "",
          sector: "",
          status: false,
        }}
        onSubmit={(values, { resetForm }) => {
          addUser({ ...values });
          resetForm({ values: "" });
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <div className="">
              <div className={classes.input_field}>
                <label htmlFor="name"> Name</label>
                <Field
                  type="text"
                  name="name"
                  placeholder="Enter Name"
                  className="form-control"
                  validate={validateName}
                />

                {errors.name && touched.name ? (
                  <span className="error-text">{errors.name}</span>
                ) : null}
              </div>
            </div>

            <div className={"sectorInputClasses"}>
              <div className={classes.input_field}>
                <label htmlFor="name"> Sectors</label>
                <div className="custom-select">
                  <Field
                    as="select"
                    name="sector"
                    className="form-select"
                    validate={validateSector}
                  >
                    <option disabled value="">
                      Select a sector
                    </option>

                    {data &&
                      data.map((sector) => {
                        return (
                          <option
                            key={sector.id}
                            value={sector.title}
                            className={sector.level}
                          >
                            {sector.title}
                          </option>
                        );
                      })}
                  </Field>
                </div>
                {errors.sector && touched.sector ? (
                  <span className="error-text">{errors.sector}</span>
                ) : null}
              </div>
            </div>
            <div className={"termInputClasses"}>
              <div className={classes.input_field}>
                <Field type="checkbox" name="status" validate={validateTerm} />
                &nbsp; Agree to terms
                <br />
                {errors.status && touched.status ? (
                  <span className="error-text">{errors.status}</span>
                ) : null}
              </div>
            </div>

            <div>
              <button type="submit" className={classes.bnt}>
                Save
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Modal;
