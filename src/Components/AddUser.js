import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import UsersContext from "../Contexts/UsersContext";

const AddUser = () => {
  let { Users, setUsers, Avatars, setIsFull, IsFull } =
    useContext(UsersContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [img, setImg] = useState("");
  const navigate = useNavigate();

  const handleExit = () => {
    navigate("/accounts");
  };
  const handleSubmit = (e) => {
    if (!IsFull) {
      e.preventDefault();
      for (let user of Users) {
        if (user.Name === name) {
          alert("this name already exists");
          return;
        } else if (user.id === email) {
          alert("this email already exists");
        } else if (user.img === img) {
          alert("this avatar is already Taken");
          return;
        }
      }
      let newarr = { Name: name, img: img, id: email, password: Password };
      fetch("http://localhost:8000/Users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newarr),
      });
      setUsers([...Users, newarr]);
      setIsFull(true);
      navigate("/accounts");
    } else {
      alert("You can not add more users: Users list is full");
    }
  };

  return (
    <div className="AddUser">
      <div className="cont">
        <img
          onClick={handleExit}
          className="exit"
          src="/Imgs/exit.png"
          alt="exit"
        />
        <form onSubmit={handleSubmit}>
          <div className="inputs">
            <div className="input">
              <input
                onChange={(e) => setName(e.target.value)}
                required
                type="Name"
                name="name"
                id="UN"
                placeholder="Enter your Name"
              />
              <input
                onChange={(e) => setEmail(e.target.value)}
                required
                type="Email"
                name="Email"
                id="EM"
                placeholder="Enter your Email"
              />
              <input
                onChange={(e) => setPassword(e.target.value)}
                required
                type="password"
                name="password"
                id="EM"
                placeholder="Enter your Password"
              />
            </div>
          </div>
          {IsFull && <h1 style={{ color: "red" }}>Users list is full </h1>}
          <h1>Choose your Avatar</h1>
          <div className="choices">
            {Avatars &&
              Avatars.map((avatar) => (
                <div className="input">
                  <img
                    onClick={() => setImg(avatar.img)}
                    src={avatar.img}
                    alt="Avatar"
                  />
                </div>
              ))}
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default AddUser;
