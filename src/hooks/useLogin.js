import { useEffect } from "react";
import { useState } from "react";

const useLogin = () => {
  const [token, setToken] = useState();

  useEffect(() => {
    fetch("https://fakestoreapi.com/auth/login", {
      method: "POST",
      body: {
        username: "mor_2314",
        password: "83r5^_",
      },
    })
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        setToken(json?.token);
        localStorage.setItem("token", json.token);
      });
  }, []);

  return { token };
};

export default useLogin;
