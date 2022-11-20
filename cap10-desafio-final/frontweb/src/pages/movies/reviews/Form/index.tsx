import { AxiosRequestConfig } from "axios";
import ButtonIcon from "components/ButtonIcon";
import { Review } from "types/review";
import { requestBackend } from "util/requests";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";

import "./styles.css";

type Props = {
  movieIdStr: string;
  onInsert: Function;
};

const Form = ({ movieIdStr, onInsert }: Props) => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<Review>();

  const movieId = Number(movieIdStr);

  const onSubmit = (formData: Review) => {
    const data = {
      ...formData,
      movieId: movieId,
    };

    const config: AxiosRequestConfig = {
      method: "POST",
      url: "/reviews",
      data,
      withCredentials: true,
    };

    requestBackend(config)
      .then(() => {
        onInsert();
        setValue("text", "");
        toast.info("Avaliação cadastrada com sucesso!");
      })
      .catch(() => {
        toast.error("Erro ao cadastrar avaliação");
      });
  };

  return (
    <div className="review-crud-container">
      <div className="review-crud-form-container">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="review-crud-input-container">
            <input
              {...register("text", {
                required: "Campo obrigatório",
              })}
              type="text"
              className={`form-control base-input ${
                errors.text ? "is-invalid" : ""
              }`}
              placeholder="Deixe a sua avaliação aqui"
              name="text"
            />
            <div className="invalid-feedback d-block">
              {errors.text?.message}
            </div>
          </div>
          <div className="review-crud-button-container">
            <ButtonIcon text="Salvar Avaliação" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
