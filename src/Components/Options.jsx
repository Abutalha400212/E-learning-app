import React, { useContext} from 'react';
import { CountContext } from './ShowQuestion';
const Options = ({options}) => {
    const setAns = useContext(CountContext)
    return (
        <div>
          <button onClick={setAns} className='bg-gray-100 border bottom-3 p-2 my-1 min-w-[200px] hover:bg-gray-800 hover:text-white'>{options}</button>
          {/* <label htmlFor="option"><input onClick={setAns} type="radio" name="options" id="option" /> {options}</label> */}
        </div>
    );
};

export default Options;