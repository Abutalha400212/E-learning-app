import {EyeIcon } from "@heroicons/react/24/solid";
import { createContext, useState } from "react";
import { toast } from "react-toastify";
import { selectedData } from "../Layout/DataLoader";
import Options from "./Options";
export const CountContext = createContext([]);
export const countAns = createContext([]);
const ShowQuestion = ({ data }) => {
  const [toggle,setToggle] = useState(true)
  const ans = data.correctAnswer;
  const options = data.options;
  const QuestionName = data.question;
  let count = 0;
  const setAns = (props) => {
    
    const value = props.target.innerText;
    selectedData(value)
    if (value === ans) {
      count = count + 1;
      toast.success("Wow! Your Ans is Correct", { autoClose: 500 });
    } else {
      toast.warning("Woh NO! Wrong Answer", { autoClose: 500 });
    }
  };
  return (
    <CountContext.Provider value={setAns}>
      <countAns.Provider value={count}>
        <div>
          <div>
            <li>
              <div className="flex md:justify-between">
                <span className="text-md font-bold">No. Question:</span>
                <EyeIcon onClick={()=> setToggle(!toggle) } className="h-6 w-6 text-blue-500 cursor-pointer ml-5"/>
              </div>
                <span className="text-purple-900 text-lg font-serif">
                  {QuestionName.replace(/(<([^>]+)>)/gi, "")}
                </span> 
              <div className="grid md:grid-cols-2 gap-2">
                {options.map((options) => (
                  <Options options={options}></Options>
                ))}
              </div>
            </li>
          </div>
          <div className={`${toggle ? 'hidden' : 'right' }`}>
          <h1>
              <small> Right Ans is: {ans}</small>
            </h1>
          </div>
        </div>
      </countAns.Provider>
    </CountContext.Provider>
  );
};

export default ShowQuestion;
