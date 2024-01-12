import React from "react";
import "./index.css";

const App = () => {
  return (
    <>
      <div className="flex  flex-col items-center h-screen justify-center">
        <h1 className="underline text-5xl font-bold font-mono">
          Increment Counter
        </h1>
        <div>
          <h3 className="text-2xl font-bold font-mono">using React and Redux</h3>
        </div>

        <div>
        <button type="button" class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">-</button>
        <button type="button" class="text-white bg-blue-700   font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" disabled>0</button>
        <button type="button" class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-900">+</button>
 
        </div>


      </div>
      
    </>
  );
};

export default App;
