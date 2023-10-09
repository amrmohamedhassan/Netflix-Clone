import { createContext, useState, useEffect } from "react";

const UsersContext = createContext({});

export const UsersProvider = ({ children }) => {
  const [IsFull, setIsFull] = useState();
  const [Users, setUsers] = useState(null);
  const [Avatars, setAvatars] = useState(null);
  const [Movies, setMovies] = useState(null);
  const kids = useState({ Name: "Kids", img: "/Imgs/kids.jpg" });

  useEffect(() => {
    fetch("http://localhost:8000/Users")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setUsers(data);
        if (data.length === 4) {
          setIsFull(true);
        } else {
          setIsFull(false);
        }
      });
  }, [IsFull]);

  useEffect(() => {
    fetch("http://localhost:8000/Avatars")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setAvatars(data);
      });
  }, []);

  useEffect(() => {
    fetch("http://localhost:8000/Movies")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setMovies(data);
      });
  }, []);
  return (
    <UsersContext.Provider
      value={{
        Users,
        setUsers,
        kids,
        IsFull,
        setIsFull,
        Avatars,
        Movies,
      }}
    >
      {children}
    </UsersContext.Provider>
  );
};

export default UsersContext;
