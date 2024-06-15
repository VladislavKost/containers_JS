import MainContainer from "../navigation/MainContainer";
import React, { useCallback, useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import * as SecureStore from "expo-secure-store";
import Spinner from "../components/Spinner";
import GreetingContainer from "../navigation/GreetingsContainer";

const PagesProvider = () => {
  const authContext = useContext(AuthContext);
  const [status, setStatus] = useState("loading");

  const loadJWT = useCallback(async () => {
    try {
      const value = SecureStore.getItem("token");
      if (value) {
        const jwt = JSON.parse(value);
        authContext.setAuthState({
          accessToken: jwt.accessToken || null,
          refreshToken: jwt.refreshToken || null,
          authenticated: jwt.accessToken !== null,
        });

        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
      console.log(`SecureStore Error: ${error.message}`);
      authContext.setAuthState({
        accessToken: null,
        refreshToken: null,
        authenticated: false,
      });
    }
  }, []);

  useEffect(() => {
    loadJWT();
  }, [loadJWT]);

  if (status === "loading") {
    return <Spinner />;
  }
  if (authContext?.authState?.authenticated === false) {
    return <GreetingContainer />;
  } else {
    return <MainContainer />;
  }
};

export default PagesProvider;
