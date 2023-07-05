/* eslint-disable react/prop-types */
const Redo = ({ redoArr, updateArr, update }) => {
  const clickHandler = () => {
    if (redoArr.length === 0) return;
    const itemArr = [...redoArr];
    const itemOut = itemArr.pop();
    const lastItem = itemOut.result;

    updateArr({ type: "UPDATE-ITEM-MAIN", item: itemOut });
    updateArr({ type: "UPDATE-ITEM-REDO", item: itemArr });
    update(lastItem);
  };
  return (
    <button
      onClick={clickHandler}
      disabled={redoArr.length === 0 && true}
      className="disabled:opacity-[0.5] border-1 border-[#000] p-[0.5rem] px-[1rem] rounded-[6px]"
    >
      Redo
    </button>
  );
};
export default Redo;
