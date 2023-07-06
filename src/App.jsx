import { useContext } from "react";
import Button from "./components/Button/Button";
import Redo from "./components/Button/Redo";
import Undo from "./components/Button/Undo";
import History from "./components/History/History";
import UserContext from "./context/ctx";

const App = () => {
  const { value, mainArr, redoArr, updateArr, update } =
    useContext(UserContext);

  return (
    <div className="text-center border-1 w-[100%] mt-[2rem] md:max-w-[700px] md:mx-[auto]">
      <h1 className="text-[1.5rem]">Undoable Counter</h1>
      <div className="mt-[1rem] flex justify-center space-x-[2rem]">
        <Undo mainArr={mainArr} update={update} updateArr={updateArr} />
        <Redo redoArr={redoArr} update={update} updateArr={updateArr} />
      </div>
      <div className="mt-[2rem] md:flex md:items-center md:max-w-[400px] md:mx-[auto]">
        <div className="flex space-x-1 justify-center md:justify-normal">
          <Button value={-100} />
          <Button value={-10} />
          <Button value={-1} />
        </div>
        <p className=" w-[100%] h-[100%] px-[5px] py-[0.8rem]">{value}</p>
        <div className="flex space-x-1 ml-[auto] justify-center md:justify-normal">
          <Button value={1} />
          <Button value={10} />
          <Button value={100} />
        </div>
      </div>

      {<History arr={mainArr} />}
    </div>
  );
};

export default App;
