import { ReactComponent as AuthImage } from "assets/images/auth-image.svg";
import { AuthContext } from "AuthContext";
import ButtonIcon from "components/ButtonIcon";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { getTokenData } from "util/auth";
import { requestBackendLogin } from "util/requests";
import { saveAuthData } from "util/storage";

import "./styles.css";

type FormData = {
  username: string;
  password: string;
};

const Login = () => {
  const { setAuthContextData } = useContext(AuthContext);

  const [hasError, setHasError] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const history = useHistory();

  const onSubmit = (formData: FormData) => {
    requestBackendLogin(formData)
      .then((response) => {
        saveAuthData(response.data);
        setHasError(false);
        setAuthContextData({
          authenticated: true,
          tokenData: getTokenData(),
        });
        history.push("/movies");
      })
      .catch((error) => {
        setHasError(true);
        console.log("ERRO", error);
      });
  };

  return (
    <div className="login-card-container">
      <div className="login-card-content">
        <h1>Avalie Filmes</h1>
        <p>Diga o que achou do seu filme favorito</p>
        <div className="login-card-banner-container">
          <AuthImage />
        </div>
      </div>
      <div className="login-card">
        <h1>LOGIN</h1>
        {hasError && (
          <div className="alert alert-danger">
            Ocorreu um erro ao tentar efetuar o login
          </div>
        )}
        <div className="login-card-form_container">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="login-card-input-container">
              <div className="margin-bottom">
                <input
                  {...register("username", {
                    required: "Campo obrigatório",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Email inválido",
                    },
                  })}
                  type="text"
                  className={`form-control base-input ${
                    errors.username ? "is-invalid" : ""
                  }`}
                  placeholder="Email"
                  name="username"
                />
                <div className="invalid-feedback d-block">
                  {errors.username?.message}
                </div>
              </div>
              <div className="teste">
                <input
                  {...register("password", {
                    required: "Campo obrigatório",
                  })}
                  type="password"
                  className={`form-control base-input ${
                    errors.password ? "is-invalid" : ""
                  }`}
                  placeholder="Senha"
                  name="password"
                />
                <div className="invalid-feedback d-block">
                  {errors.password?.message}
                </div>
              </div>
            </div>
            <div className="login-submit">
              <ButtonIcon text="Fazer login" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
