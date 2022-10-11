import { createContext, useState } from "react";
import { toast } from "react-toastify";
import Options from "./Options";
export const CountContext = createContext([]);
export const ProvideContext = createContext([]);
const ShowQuestion = ({ data }) => {
  const ans = data.correctAnswer;
  const options = data.options;
  const QuestionName = data.question;
  const [rs, setRs] = useState([]);
  const setAns = (props) => {
    const value = props.target.innerText;
    if (value === ans) {
      toast.success("Wow! Your Ans is Correct", { autoClose: 500 });
    } else {
      setRs(ans);
      toast.warning("Woh NO! Wrong Answer", { autoClose: 500 });
    }
  };
  return (
    <CountContext.Provider value={setAns}>
      <div>
        <div>
          <li>
            <span className="text-md font-bold">No. Question:</span>
            <br />
            <span className="text-purple-900 text-lg font-serif">
              {QuestionName}
            </span>
            <div className="grid md:grid-cols-2 gap-2">
              {options.map((options) => (
                <Options options={options}></Options>
              ))}
            </div>
          </li>
        </div>
        <div>
            <h1>
              <small> Right Ans is: {rs}</small>
            </h1>
        </div>
      </div>
    </CountContext.Provider>
  );
};

export default ShowQuestion;
