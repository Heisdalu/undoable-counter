import Button from "./assets/components/Button/Button";
import Redo from "./assets/components/Button/Redo";
import Undo from "./assets/components/Button/Undo";
import History from "./assets/components/History/History";

const App = () => {
  return (
    <div className="text-center border-1 w-[100%] mt-[2rem] md:max-w-[700px] md:mx-[auto]">
      <h1>Undoable Counter</h1>
      <div className="mt-[1rem] flex justify-center space-x-[2rem]">
        <Undo />
        <Redo />
      </div>
      <div className="mt-[2rem] md:flex md:items-center md:max-w-[400px] md:mx-[auto]">
        <div className="flex space-x-1 justify-center md:justify-normal">
          <Button value={-100} />
          <Button value={-10} />
          <Button value={-1} />
        </div>
        <p className=" w-[100%] h-[100%] px-[5px] py-[0.8rem]">0</p>
        <div className="flex space-x-1 ml-[auto] justify-center md:justify-normal">
          <Button value={1} />
          <Button value={10} />
          <Button value={100} />
        </div>
      </div>

      <History />
    </div>
  );
};

export default App;
