
import classes from "./ServyList.module.css";
import { Link } from "react-router-dom";
import { useGetUserQuery, useDeleteUserMutation } from "../../store/userSlice";
const Card = () => {
  const { data, isLoading, isFetching } = useGetUserQuery();
  
  return (
    <div className={classes.card}>
      <div className={classes.table_div}>
        <div className={classes.heading}>
        <h4>list of all Servy</h4>
        <Link to="form" className={classes.add}>Add New</Link>
        </div>
        
        {isLoading || isFetching ? (
          <div>Loading</div>
        ) : (
          <table className="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Sector</th>
                <th>Status</th>
               
              </tr>
            </thead>
            <tbody>
              {data?.map((user) => {
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
        )}
      </div>
    </div>
  );
};

export default Card;
