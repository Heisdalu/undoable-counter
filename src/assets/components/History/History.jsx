/* eslint-disable react/prop-types */
import HistoryData from "./HistoryData";

const History = ({ arr }) => {
  console.log(arr.reverse());
  const reverseData = [...arr].reverse();
  const data = reverseData.map((el, i) => (
    <HistoryData data={el} key={i + 1} />
  ));
  return (
    <section className="mt-[3rem] mb-[1rem]">
      <h1>History</h1>
      <div className="py-[1rem] border-1 space-y-[10px] flex flex-col  w-[200px] mx-auto items-center">
        {data}
        {arr.length === 0 && "Nothing yet!!!"}
      </div>
    </section>
  );
};
export default History;
