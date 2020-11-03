import { useHistory } from "react-router-dom";

function HomeButton() {
  let history = useHistory();

  function handleClick() {
    history.push("/");
  }

  return (
    <button className="back" onClick={handleClick}>
      Go to home
    </button>
  );
}

export default HomeButton;