const Button = ({ title, color, handleClick, currentStringColor }) => {
    return (
      <div
        onClick={() => handleClick(title)}
        className="button-wrapper"
        style={{ backgroundColor: color, color: currentStringColor}}
      >
        {title}
      </div>
    );
  };
  
  export default Button;