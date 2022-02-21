import { Redirect, Route, RouteProps } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import React from "react";

interface PrivateRouteProps extends RouteProps {}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ ...rest }) => {
  const auth = useSelector((state: RootState) => state.auth.user.loggedIn);

  if (auth === false) {
    return <Redirect to="/" />;
  } else {
    return <Route {...rest} />;
  }
};

export default PrivateRoute;
