/* eslint-disable react/prop-types */
const HistoryData = ({data}) => {
  return (
    <div className="flex space-x-7">
      <p className="">{data.result}</p>
      <p>({`${data.firstNum} -> ${data.secondNum}`})</p>
    </div>
  );
};
export default HistoryData;
