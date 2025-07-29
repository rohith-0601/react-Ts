type buttonprops = {
  handleclick: (event:React.MouseEvent<HTMLButtonElement>) => void;
};

export const Button = (props: buttonprops) => {
  return (
    <button
      style={{
        height: "3rem",
        width: "10rem",
        background: "#0d6efd",
        border: "none",
        borderRadius: "1rem",
        fontSize: "2rem",
      }}
      onClick={props.handleclick}
    >
      Click
    </button>
  );
};
