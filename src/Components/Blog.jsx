import { BackwardIcon } from '@heroicons/react/24/solid';
import React from 'react';
import { Link } from 'react-router-dom';

const Blog = () => {
    return (
        <div className='w-3/4 mx-auto mt-5'>
            <div>
                <h1 className='text-center text-xl font-serif text-amber-500'><span className='text-1xl '>Question No 1:</span> What is the purpose of react router?</h1>
                <p><small className='text-lg'>ReactJS Router is mainly used for developing Single Page Web Applications. React Router is used to define multiple routes in the application. When a user types a specific URL into the browser, and if this URL path matches any 'route' inside the router file, the user will be redirected to that particular route.</small></p>
            </div>
            <div className='my-4'>
                <h1 className='text-center text-xl font-serif text-amber-500 '><span className='text-1xl '>Question No 2:</span> How does context api work?</h1>
                <p><small className='text-lg'>The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.</small></p>
            </div>
            <div>
                <h1 className='text-center text-xl font-serif text-amber-500'><span className='text-1xl font-sans '>Question No 3:</span>What is useref and its work in react?</h1>
                <p><small className='text-lg'>Essentially, useRef is like a “box” that can hold a mutable value in its .current property. You might be familiar with refs primarily as a way to access the DOM. If you pass a ref object to React with useRef hooks , React will set its .current property to the corresponding DOM node whenever that node changes.</small></p>
            </div>
            <div className="bg-yellow-500 p-4 rounded absolute mb-0 mt-4 mx-2 flex">
        <BackwardIcon className="h-6 w-6 mr-2 text-blue-500" />{" "}
        <button><Link to="/home">Back To Home</Link> </button>
      </div>
        </div>
    );
};

export default Blog;