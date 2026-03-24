import authApi from "../apis/auth.api.js";
import { createContext, useState, useEffect } from "react";
export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const [user, setUserinfo] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchdata = async () => {
      try {
        const data = await authApi.getProfile();
        setUserinfo(data);
      } catch (Err) {
        setUserinfo(null);
      } finally {
        setLoading(false);
      }
    };
    fetchdata();
  }, []);
  return (
    <AuthContext.Provider value={{ user, loading, setUserinfo }}>
      {children}
    </AuthContext.Provider>
  );
};
