import React from 'react';
import { Link } from 'react-router-dom';

const ShowHeaderData = ({data}) => {
    const {name,logo,id} = data
    return (
        <div className="card card-compact md:w-80  bg-base-100 shadow-xl">
        <figure><img src={logo} alt="Shoes" /></figure>
        <div className="card-body flex justify-around mt-2">
          <h2 className="card-title p-2 text-xl font-bold">{name}</h2>
          <div className="card-actions mt-2">
            <button  className="bg-blue-700 p-2 border rounded w-40 mb-2"> <Link to={`../topics/${id}`}>Start Quiz</Link> </button>
          </div>
        </div>
      </div>
    );
};

export default ShowHeaderData;