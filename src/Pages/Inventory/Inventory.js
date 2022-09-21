import "./Inventory.scss";
import { useState } from "react";
import { auth } from "../../firebase.config";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export default function Inventory() {
  const navigate = useNavigate();

  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const logout = () => {
    navigate("/authentication");
    return signOut(auth);
  };

  return (
    <div>
      {user && (
        <div>
          <h4>{user?.email} </h4>
          <div>
            <button onClick={logout}> Sign Out </button>
          </div>
        </div>
      )}
    </div>
  );
}
