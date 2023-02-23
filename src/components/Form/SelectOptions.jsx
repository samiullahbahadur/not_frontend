import React from 'react'
import { Formik, Field, Form } from "formik";
const SelectOptions = ({data, validateSector}) => {
  return (
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
  )
}

export default SelectOptions