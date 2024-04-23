import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { useLocation } from "react-router-dom";
const AuthCallbackPage = () => {
  const { hash } = useLocation();

  const params = hash.split('&');
  let accessToken;
  for (var i = 0; i < params.length; i++) {
    var param = params[i].split('=');
    if (param[0] === "#access_token") {
      accessToken = param[1];
      console.log(accessToken);
      break;
    } else if (param[0] === "#id_token") {
      accessToken = param[1];
      console.log(accessToken);
      break;
    }
  };

  return <>See access token in console</>
};

export default AuthCallbackPage;
