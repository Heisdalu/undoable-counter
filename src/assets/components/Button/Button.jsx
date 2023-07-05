/* eslint-disable react/prop-types */
const Button = ({value}) => {


  return (
    <button className="h-[45px] w-[45px] rounded-[6px] border-1 p-[0.5rem] flex justify-center items-center">
      {value}
    </button>
  );
}
export default Button