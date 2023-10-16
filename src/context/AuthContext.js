import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [userId, setUserId] = useState(null);

  const signIn = (userId) => {
    // If authentication is successful, set the user ID in the state
    setUserId(userId);
  };

  const signOut = () => {
    // Perform sign-out logic (e.g., clear user data)
    setUserId(null);
  };

  return (
    <AuthContext.Provider value={{ userId, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
