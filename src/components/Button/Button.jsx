import UserContext from "../../context/ctx";
import { useContext } from "react";

/* eslint-disable react/prop-types */
const Button = ({ value }) => {
  const { value: userValue, update, updateArr } = useContext(UserContext);

  const clickHandler = () => {
    const result = userValue + value;
    const calcObj = {
      firstNum: userValue,
      secondNum: value,
      result,
    };

    update(result);
    updateArr({ type: "UPDATE-ITEM-MAIN", item: calcObj });
  };

  return (
    <button
      onClick={clickHandler}
      value={value}
      className="h-[45px] w-[45px] rounded-[6px] border-1 p-[0.5rem] flex justify-center items-center"
    >
      {value}
    </button>
  );
};
export default Button;
