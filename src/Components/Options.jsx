import React from 'react';
import { toast } from 'react-toastify';

const Options = ({options,ans}) => {
    const setAns = (props)=>{

        const value = (props.target.innerText)
        let count = 0
       if(value === ans){
         toast.success('Wow! Your Ans is Correct',{autoClose: 500})
         count = count + 1
       }
       else{
         toast.warning('Woh NO! Wrong Answer',{autoClose:500})
       }
     }; 
    return (
        <div>
          <button  onClick={setAns} className='bg-gray-100 border bottom-3 p-2 my-1 min-w-[200px] hover:bg-gray-800 hover:text-white'>{options}</button>
        </div>
    );
};

export default Options;