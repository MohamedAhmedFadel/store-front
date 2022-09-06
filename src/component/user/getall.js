import { useState, useEffect } from "react";
import { getAllu } from "../../api/users.api";

function Getusers() {
  const [users, setusers] = useState([]);

  useEffect(() => {
    let mounted = true;
    if (mounted) {
      const fetchData = () => {
        getAllu().then((data) => {
          setusers(data);
        });
      };
      fetchData();
    }
    return () => {
      mounted = false;
    };
  }, []);
console.log(users)
  return (
    <div className="table-users containe main">
      <div className="theader ">Users</div>

      <table cellspacing="0">
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Role</th>
        </tr>

        {users.map((user) => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.role}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default Getusers;
