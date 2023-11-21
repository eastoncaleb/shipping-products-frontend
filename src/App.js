import React, { useState } from 'react';
import CalculatorModal from './components/CalculatorModal';
import logo from './assets/company-logo.png';


function App() {
  const [showModal, setShowModal] = useState(false);
  const [productName, setProductName] = useState('');

  return (
    <div className="App flex flex-wrap justify-center">
      <div id="header" className="p-8 mb-4 drop-shadow-xl text-center text-white w-full">
        <div class="w-full md:w-4/6 flex mx-auto justify-center md:justify-start mb-10">
          <img src={logo} alt="Ship Sticks Company Logo" width="150" />
        </div>
        <h2 className="text-4xl lg:text-7xl font-bold mb-4 bg-gradient-to-b from-green-200 via-green-400 to-green-600 bg-clip-text text-transparent">Ship Your Golf Clubs Ahead</h2>
        <h3 className="text-xl lg:text-3xl font-semibold text-shadow-lg shadow-green-500">
          Safe, convenient, and hassle-free travel. Guaranteed.
        </h3>
      </div>

      <div className="flex flex-wrap text-center">
        <h3 className="w-full mx-auto py-2 px-4 text-2xl lg:text-3xl font-bold bg-gradient-to-b from-green-600 via-green-500 to-green-800 bg-clip-text text-transparent">Not sure what size you need?</h3>
        <p className="text-gray-700 w-full mb-4 text-lg lg:text-xl font-semibold">Use our handy calculator below and we will recommend one of our products for you!</p>
        <button className="bg-green-500 rounded-lg border-b-4 border-green-600 focus:border-t-4 focus:border-b-0 focus:shadow-inner mx-auto p-4 font-bold text-white hover:bg-green-400" onClick={() => setShowModal(true)}>Launch Calculator</button>
      </div>

      {showModal && (
        <CalculatorModal
          onClose={() => setShowModal(false)}
          onCalculate={(name) => setProductName(name)}
        />
      )}

      <div className="flex w-full md:w-1/2">
        {productName && <div className="text-shadow shadow-gray-700 w-full text-white text-2xl my-10 font-bold text-center bg-gray-500 bg-clip-padding backdrop-filter backdrop-blur bg-opacity-50 saturate-100 backdrop-contrast-100 rounded py-4 tracking-wide">
          We Recommend: <span className="underline decoration-wavy decoration-green-500 underline-offset-8">{productName}</span>
        </div>}
      </div>
    </div>
  );
}

export default App;
