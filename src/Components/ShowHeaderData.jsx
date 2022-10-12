import React from 'react';
import { Link } from 'react-router-dom';

const ShowHeaderData = ({data}) => {
    const {name,logo,id,total} = data
    console.log(data);
    return (
        <div className="card card-compact md:w-80  bg-base-100 shadow-xl md:relative">
        <figure className='backdrop-opacity-10 backdrop-invert bg-white/40'><img  src={logo} alt="Shoes" /></figure>
        <div className="card-body text-center mt-2 md:absolute  md:top-[25%] md:left-[25%]">
          <div>
          <h2 className="card-title  text-xl font-bold">{name}</h2>
          <p><small className='text-md font-sans'>Total Question: {total}</small></p>
          </div>
          <div className="card-actions mt-2">
            <button  className="bg-blue-500 p-2 border rounded w-40 mb-2 font-semibold hover:bg-blue-800 hover:text-white"> <Link to={`../topics/${id}`}>Start Quiz</Link> </button>
          </div>
        </div>
      </div>
    );
};

export default ShowHeaderData;