import { useContext } from "react";
import userContext from "../../../context/context";

const Undo = () => {
  const { update, mainArr, updateArr } = useContext(userContext);

  console.log(mainArr);
  const clickHandler = () => {
    if (mainArr.length === 0) return;

    const itemArr = [...mainArr];
    const itemPop = itemArr.pop();
    const lastItem = itemArr[itemArr.length - 1]?.result || 0;
    console.log(lastItem);

    updateArr({ type: "UPDATE-ITEM-REDO", item: itemPop });
    updateArr({ type: "UPDATE-ITEM-MAIN", item: itemArr });
    update(lastItem);
  };

  return (
    <button
      onClick={clickHandler}
      className="border-1 border-[#000] p-[0.5rem] px-[1rem] rounded-[6px]"
    >
      Undo
    </button>
  );
};
export default Undo;
