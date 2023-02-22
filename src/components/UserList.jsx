import React from "react";
import Modal from "./CreateUser";
import classes from "./UserList.module.css";
import { useGetUserQuery } from "../store/userSlice";
const Card = () => {
  const { data } = useGetUserQuery();
  console.log(data);
  return (
    <div className={classes.cantainer}>
      <div className={classes.card}>
        <div className={classes.table_div}>
          <h4>list of Sectors</h4>
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
                      <td>{user.status}</td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>

      <Modal />
    </div>
  );
};

export default Card;
