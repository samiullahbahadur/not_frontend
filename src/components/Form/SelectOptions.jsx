import React from "react";
import {  Field } from "formik";
const SelectOptions = ({ data, validateSector }) => {
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
            {
              if (
                sector.level == "firstChild" ||
                sector.level == "secondLevel"
              ) {
                return (
                  <option
                    key={sector.id}
                    value={sector.title}
                    className={sector.level}
                  >
                    &nbsp; {sector.title}
                  </option>
                );
              }
            }
            {
              if (sector.level == "secondChild") {
                return (
                  <option
                    key={sector.id}
                    value={sector.title}
                    className={sector.level}
                  >
                    &nbsp;&nbsp; &nbsp;&nbsp;{sector.title}
                  </option>
                );
              }
            }
            {
              if (
                sector.level == "thirdLevel" ||
                sector.level == "fourthLevel" ||
                sector.level == "sevenLevel" ||
                sector.level == "ninthLevel" ||
                sector.level == "twelfthLevel" ||
                sector.level == "thirteenthLevel" ||
                sector.level == "fourteenthLevel" ||
                sector.level == "fifteenthChild" ||
                sector.level == "sixteenthChild" ||
                sector.level == "seventeenthLevel" ||
                sector.level == "ninteenthChild" ||
                sector.level == "twentiesLevel" ||
                sector.level == "ninteenthLevel"
              ) {
                return (
                  <option
                    key={sector.id}
                    value={sector.title}
                    className={sector.level}
                  >
                    &nbsp;&nbsp; {sector.title}
                  </option>
                );
              }
            }
            {
              if (
                sector.level == "thirdChild" ||
                sector.level == "fourthChild" ||
                sector.level == "seventhChild" ||
                sector.level == "fivthLevel" ||
                sector.level == "sixthLevel" ||
                sector.level == "sixthChild" ||
                sector.level == "eithLevel" ||
                sector.level == "ninthChild" ||
                sector.level == "tenthLevel"
              ) {
                return (
                  <option
                    key={sector.id}
                    value={sector.title}
                    className={sector.level}
                  >
                    &nbsp;&nbsp; &nbsp;&nbsp; {sector.title}
                  </option>
                );
              }
            }
            {
              if (
                sector.level == "fivthChild" ||
                sector.level == "eithChild" ||
                sector.level == "tenthChild" ||
                sector.level == "eleventhLevel" ||
                sector.level == "twelfththChild" ||
                sector.level == "thirteenththChild" ||
                sector.level == "fourteenthChild" ||
                sector.level == "twentiesChild" ||
                sector.level == "seventeenthChild"
              ) {
                return (
                  <option
                    key={sector.id}
                    value={sector.title}
                    className={sector.level}
                  >
                    &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; {sector.title}
                  </option>
                );
              }
            }

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
  );
};

export default SelectOptions;
