import React, {
  Children,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authenticated, setAuthenticated] = useState(false);
  useEffect(() => {
    const token = localStorage.getItem("jwtToken");

    if (token) {
      setAuthenticated(true);
    } else {
      setAuthenticated(false);
    }
  }, []);

  const login = (token) => {
    setAuthenticated(true);
  };
  const logOut = () => {
    console.log("logout Called");
    localStorage.removeItem("jwtToken");
    setAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ authenticated, login, logOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
