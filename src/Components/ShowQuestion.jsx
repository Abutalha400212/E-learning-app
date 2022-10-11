import React from 'react';
import Options from './Options';

const ShowQuestion = ({data}) => {
    const ans = data.correctAnswer
    const options = data.options
    const QuestionName = data.question
    return (
        <div >
          <li><span className='text-md font-bold'>No. Question:</span><br />
             <span className='text-purple-900 text-lg font-serif'>{QuestionName}</span>
          <div className='grid md:grid-cols-2'>
            {options.map(options => <Options  options={options} ans={ans}></Options>)}
          </div>
          </li>
        </div> 
    );
};

export default ShowQuestion;