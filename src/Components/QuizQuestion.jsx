import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import ShowQuestion from "./ShowQuestion";
import { BackwardIcon } from "@heroicons/react/24/solid";
const QuizQuestion = () => {
  const QuizData = useLoaderData();
  const quiz = QuizData.data.questions;
  return (
    <div className=" mt-12">
      <div className="md:w-7/12 w-11/12 mx-8  md:mx-auto md:flex md:justify-between">
        <ul className="grid grid-cols-1 gap-y-3 list-decimal">
          {quiz.map((data) => {
            return <ShowQuestion key={data.id} data={data}></ShowQuestion>;
          })}
          ;
        </ul>
        {/* <div className="md:w-3/12">
          <h1>Correct Ans</h1>
        </div> */}
      </div>
      <div className="bg-yellow-500 p-4 rounded absolute mb-0 mt-4 mx-2 flex">
        <BackwardIcon className="h-6 w-6 mr-2 text-blue-500" />
        <button>
          <Link to="/topics">Back To Another Quiz</Link>
        </button>
      </div>
    </div>
  );
};

export default QuizQuestion;
