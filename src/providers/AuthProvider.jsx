import { useEffect, useMemo, useState } from "react";

import authens from "@/helpers/authens";
import { AuthContext } from "@/contexts/AuthContext";

const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(authens.getToken());

  const changeToken = (newToken) => {
    setToken(newToken);
  };

  useEffect(() => {
    if (token) authens.setToken(token);
    else authens.removeToken();
  }, [token]);

  const contextValue = useMemo(
    () => ({
      token,
      changeToken,
    }),
    [token]
  );

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
