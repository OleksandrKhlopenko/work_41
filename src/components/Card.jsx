import { useContext } from "react";
import { Context } from "../App";

const Card = () => {
  const value = useContext(Context);

  return <div>Card:{value.user}</div>;
};

export default Card;
