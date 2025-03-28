import { useEffect, useState } from "react";
import AuthContext from "./user.context";

export const AuthProvider = ({props}) => {
    // Initialize state with value from localStorage or default
    const [user, setUser] = useState(() => {
        const storedUser = localStorage.getItem('user');
        return storedUser ? JSON.parse(storedUser) : null;
    });

    //update localstorage when user changes
    useEffect(() => {
        if (user) {
          localStorage.setItem('user', JSON.stringify(user));
        } else {
          localStorage.removeItem('user');
        }
      }, [user]);
    
    // Function to set user during login
    const login = (userData, userType) => {
      localStorage.setItem('is_user', userType);
      setUser(userData);
    };

    // Function to clear user (logout)
    const logout = () => {
        setUser(null);
        ['user', 'is_user', 'username', 'email', 'userId', 'guideId'].forEach(item => {
          localStorage.removeItem(item);
        });
    };

  //value available for all users
  const value = {
    user,
    login,
    logout,
    isAuthenticated: !!user,
    userType: user ? localStorage.getItem('is_user') : null
  };

  return <AuthContext.Provider value={value}>{props}</AuthContext.Provider>;
}