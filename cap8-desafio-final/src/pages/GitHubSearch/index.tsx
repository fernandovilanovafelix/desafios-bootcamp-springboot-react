import axios from "axios";
import ResultCard from "components/ResultCard";
import { useState } from "react";
import "./styles.css";

type FormData = {
  profile: string;
};

export type UserData = {
  avatar_url: string;
  url: string;
  followers: string;
  location: string;
  name: string;
};

const GitHubSearch = () => {
  const [userData, setUserData] = useState<UserData>();

  const [formData, setFormData] = useState<FormData>({
    profile: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    axios
      .get(`https://api.github.com/users/${formData.profile}`)
      .then((response) => {
        setUserData(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        setUserData(undefined);
        console.log(error);
      });
  };

  return (
    <div className="github-search-container">
      <div className="container-search-container">
        <h1>Encontre um perfil Github</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-container">
            <input
              type="text"
              name="profile"
              value={formData.profile}
              className="search-input"
              placeholder="Usuário Github"
              onChange={handleChange}
            />
            <button type="submit" className="btn btn-primary search-button">
              Encontrar
            </button>
          </div>
        </form>
      </div>

      {userData && <ResultCard userData={userData} />}
    </div>
  );
};

export default GitHubSearch;
