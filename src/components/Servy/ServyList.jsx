import React from "react";
import classes from "./ServyList.module.css";
import { useGetUserQuery } from "../../store/userSlice";
const Card = () => {
  const { data } = useGetUserQuery();
  return (
    <div className={classes.card}>
      <div className={classes.table_div}>
        <h4 >list of all Servy</h4>
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Sector</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data.map((user) => {
                return (
                  <tr key={user.id}>
                    <td>{user.name}</td>
                    <td>{user.sector}</td>
                    <td>{user.status == true ? "Agreed" : ""}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Card;
