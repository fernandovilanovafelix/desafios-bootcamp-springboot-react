import "./styles.css";

const SearchComponent = () => {
  return (
    <div className="search-container">
      <div className="input-container">
        <label id="busca">Digite sua busca</label>
      </div>

      <div className="button-container">
        <button className="btn">
          <h6>Buscar</h6>
        </button>
      </div>
    </div>
  );
};

export default SearchComponent;
