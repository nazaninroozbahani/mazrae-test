import useLogin from "../hooks/useLogin";

const Login = () => {
  const { token } = useLogin();
  return <div>LOGIN: {token}</div>;
};
export default Login;
