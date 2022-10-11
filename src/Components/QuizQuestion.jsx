import React, { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import ShowQuestion, { ProvideContext } from "./ShowQuestion";
import { BackwardIcon } from "@heroicons/react/24/solid";
const QuizQuestion = () => {
  const QuizData = useLoaderData();
  console.log(QuizData);
  const quiz = QuizData.data.questions;
 const newCount = useContext(ProvideContext)
  return (
        <div className="relative">
      <div className="w-9/12 mx-24 mt-12 flex justify-between">
        <ul className="grid grid-cols-1 gap-y-3 list-decimal ">
          {quiz.map((data) => <ShowQuestion
                key={data.id}
                data={data}
              ></ShowQuestion>
            )};
        </ul>
      
      <div className="w-3/12">
       <h1>Correct{newCount}</h1>
      </div>
      </div>
      <div className="bg-yellow-500 p-4 rounded absolute mb-0 mt-4 mx-2 flex">
        <BackwardIcon className="h-6 w-6 mr-2 text-blue-500" />{" "}
        <Link to="/topics">Back To Another Quiz</Link>
        <button> </button>
      </div>
    </div>
  );
};

export default QuizQuestion;
