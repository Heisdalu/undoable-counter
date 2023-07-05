/* eslint-disable react/prop-types */

const Undo = ({ update, mainArr, updateArr }) => {
  const clickHandler = () => {
    if (mainArr.length === 0) return;

    const itemArr = [...mainArr];
    const itemPop = itemArr.pop();
    const lastItem = itemArr[itemArr.length - 1]?.result || 0;

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
