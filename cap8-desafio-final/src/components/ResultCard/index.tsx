import { UserData } from "pages/GitHubSearch";
import "./styles.css";

type Props = {
  userData: UserData | undefined;
};

const ResultCard = ({ userData }: Props) => {
  return (
    <div className="result-container">
      <div className="image-container">
        <img src={userData?.avatar_url} alt="Foto do perfil" />
      </div>
      <div className="content-container">
        <h1 className="main-title">Informações:</h1>
        <div className="profile-content-container">
          <h6 className="profile-content-title">Perfil:</h6>
          <p className="profile-content-value">{userData?.url}</p>
        </div>
        <div className="other-content-container">
          <h6 className="other-content-title">Seguidores:</h6>
          <p className="other-content-value">{userData?.followers}</p>
        </div>
        <div className="other-content-container">
          <h6 className="other-content-title">Localidade:</h6>
          <p className="other-content-value">{userData?.location}</p>
        </div>
        <div className="other-content-container">
          <h6 className="other-content-title">Nome:</h6>
          <p className="other-content-value">{userData?.name}</p>
        </div>
      </div>
    </div>
  );
};

export default ResultCard;
