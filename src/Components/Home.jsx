import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="relative flex flex-col-reverse py-16 lg:pt-0 lg:flex-col lg:pb-0 mx-1">
        <div className="inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0">
          <svg
            className="absolute left-0 hidden h-full text-white transform -translate-x-1/2 lg:block"
            viewBox="0 0 100 100"
            fill="currentColor"
            preserveAspectRatio="none slice"
          >
            <path d="M50 0H100L50 100H0L50 0Z" />
          </svg>
          <img
            className="object-cover w-full rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full"
            src="https://img.freepik.com/free-photo/3d-render-astronaut-with-question-mark-think-disappointment-tired-caucasian-gestures-3d-illustration-design_460848-10707.jpg?w=740&t=st=1665452813~exp=1665453413~hmac=d71132563569be1ca3fbce4ba813f857e6fa82868d63769b9a705d5f7ae34ccf"
            alt=""
          />
        </div>
        <div className="relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl">
          <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider bg-blue-600 uppercase rounded-full bg-teal-accent-400">
              Brand new
            </p>
            <h2 className="mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
              Everything you
              <br className="hidden md:block" />
              can imagine{' '}
              <span className="inline-block text-deep-purple-accent-400">
                is real
              </span>
            </h2>
            <p className="pr-5 mb-5 text-base text-gray-700 md:text-lg">
            It’s amazing to us – the quiz title is probably the most important of your quiz. Seriously… the most important.
            </p>
            <div className="flex items-center">
              <Link
                to="/topics"
                className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide transition duration-200 rounded shadow-md bg-deep-purple-accent-600 hover:bg-blue-500 focus:shadow-outline focus:outline-none"
              >
                Get started
              </Link>
              <Link
                to="/blog"
                className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide transition duration-200 rounded shadow-md bg-deep-purple-accent-600 hover:bg-blue-500 focus:shadow-outline focus:outline-none"
              >
                Blogs
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Home;