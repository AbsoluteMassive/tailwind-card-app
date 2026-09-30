const Button = ({ onClick, Btext, className }) => {
  return (
    <button className={className} onClick={onClick}>
      {Btext}
    </button>
  );
};

export default Button;
