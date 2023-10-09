import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import UsersContext from "../Contexts/UsersContext";

const Accounts = () => {
  const { Users, setUsers, kids, IsFull, setIsFull } = useContext(UsersContext);

  let navigate = useNavigate();
  const handleClick = () => {
    let Btns = document.getElementsByClassName("del");
    let user = document.getElementsByClassName("username");
    for (let i = 0; i < Btns.length; i++) {
      if (Btns.item(i).style.display === "none") {
        user.item(i).style.display = "none";
        Btns.item(i).style.display = "block";
      } else {
        user.item(i).style.display = "block";
        Btns.item(i).style.display = "none";
      }
    }
  };

  const handleAddUser = () => {
    navigate("/AddUser");
  };

  const deleteUser = (id) => {
    fetch("http://localhost:8000/Users/" + id, {
      method: "DELETE",
    });
    setUsers(Users.filter((user) => user.id !== id));
    setIsFull(false);
  };

  return (
    <div className="Accounts">
      <div className="text">
        <h1>Who 's watching?</h1>
      </div>
      <div className="wrapper">
        {IsFull !== true && (
          <div className="add-user">
            <img onClick={handleAddUser} src="/Imgs/add-user.png" alt="add" />
            <h2>Add User</h2>
          </div>
        )}
        <div className="cards">
          {Users &&
            Users.map((User) => (
              <div
                onClick={() => navigate(`/movies/${User.id}`)}
                className="user"
                key={User.id}
              >
                <div className="box">
                  <img className="dimmed" src={User.img} alt="Avatar" />
                </div>
                <h2 className="username">
                  {User.Name[0].toUpperCase() + User.Name.slice(1)}
                </h2>
                <div
                  onClick={() => {
                    deleteUser(User.id);
                  }}
                  className="del"
                >
                  <img className="delete" src="/Imgs/remove.svg" alt="delete" />
                </div>
              </div>
            ))}
          <div className="user">
            <div className="box">
              <img className="dimmed" src={kids[0].img} alt="Avatar" />
            </div>
            <h2 className="username">
              {kids[0].Name[0].toUpperCase() + kids[0].Name.slice(1)}
            </h2>
          </div>
        </div>
      </div>
      <button onClick={handleClick} className="manage">
        Manage Profiles
      </button>
    </div>
  );
};

export default Accounts;
