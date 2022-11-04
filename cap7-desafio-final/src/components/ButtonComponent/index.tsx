import "./styles.css";

type Props = {
  title: string;
};

const ButtonComponent = ({ title }: Props) => {
  return (
    <div className="btn-container">
      <button className="btn">
        <h6>{title}</h6>
      </button>
    </div>
  );
};

export default ButtonComponent;
