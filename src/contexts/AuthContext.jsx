import { createContext, useContext } from "react";

import authens from "@/helpers/authens";

export const AuthContext = createContext(authens.getToken());

export const useAuth = () => {
	return useContext(AuthContext);
}