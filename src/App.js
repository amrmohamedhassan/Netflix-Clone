import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { UsersProvider } from "./Contexts/UsersContext";

import Accounts from "./Components/Accounts";
import Login from "./Components/Login";
import AddUser from "./Components/AddUser";
import Movies from "./Components/Movies";

function App() {
  return (
    <div className="App">
      <UsersProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navigate to="/login" />} />
            <Route path="/login" element={<Login />} />
            <Route path="/accounts" element={<Accounts />} />
            <Route path="/adduser" element={<AddUser />} />
            <Route path="/movies/:id" element={<Movies />} />
          </Routes>
        </BrowserRouter>
      </UsersProvider>
    </div>
  );
}

export default App;
