import { useAuth } from "@/contexts/AuthContext";
import constants from "@/helpers/constants";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const { changeToken } = useAuth();
  const navigate = useNavigate();

  changeToken();
  navigate(constants.ROUTE_PATHS.HOME, { replace: true });

  return <></>;
};

export default Logout;
