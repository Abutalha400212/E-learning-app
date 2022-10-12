import { createContext, useState } from "react";
import { toast } from "react-toastify";
import Options from "./Options";
export const CountContext = createContext([]);
export const countAns = createContext([])
const ShowQuestion = ({ data }) => {
  const ans = data.correctAnswer;
  const options = data.options;
  const QuestionName = data.question;
  const [rs, setRs] = useState([]);
  let count = 0;
  const setAns = (props) => {
    const value = props.target.innerText
    console.log(value)
    if (value === ans) {
      count = count + 1
      console.log(count)
      toast.success("Wow! Your Ans is Correct", { autoClose: 500 });
    } else {
      setRs(ans);
      toast.warning("Woh NO! Wrong Answer", { autoClose: 500 });
    }
  };
  return (
    <CountContext.Provider value={setAns}>
      <countAns.Provider value={count}>
      <div>
        <div>
          <li>
            <span className="text-md font-bold">No. Question:</span>
            <br />
            <span className="text-purple-900 text-lg font-serif">
              {QuestionName.replace(/(<([^>]+)>)/ig,"")}
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
      </countAns.Provider>
    </CountContext.Provider>
  );
};

export default ShowQuestion;
