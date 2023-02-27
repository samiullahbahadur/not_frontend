import React from "react";
import { Link } from "react-router-dom";
import { Formik, Field, Form } from "formik";
import { useNavigate } from "react-router-dom";
import SelectOptions from "./SelectOptions";
import classes from "./ServyFrom.module.css";

const FormCreate = ({
  data,
  addUser,
  validateName,
  validateSector,
  validateTerm,
}) => {
  const navigate = useNavigate();

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
          navigate("/");
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
                <SelectOptions data={data} validateSector={validateSector} />
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

            <div className={classes.bcontainer}>
              <button type="submit" className={classes.bnt}>
                Save
              </button>
              <button className={classes.bnt1}>
                <Link to="/">Back</Link>
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FormCreate;
