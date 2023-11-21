import React, { useState } from 'react';
import Header from './components/Header';
import CalculatorModal from './components/CalculatorModal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalculator } from '@fortawesome/free-solid-svg-icons'
import { faBox } from '@fortawesome/free-solid-svg-icons'

function App() {
  const [showModal, setShowModal] = useState(false);
  const [productName, setProductName] = useState('');

  return (
    <div className="App flex flex-wrap justify-center">
      <Header />
      <div className="flex flex-wrap text-center p-4 bg-white">
        <h3 className="capitalize text-gray-800 w-full mx-auto py-2 px-4 text-2xl lg:text-4xl font-bold mb-2">Not sure what size <FontAwesomeIcon icon={faBox} className="mx-1 text-green-600" /> you need?</h3>
        <p className="text-gray-600 w-full mb-8 text-lg lg:text-xl font-semibold">Use our handy calculator below and we will recommend one of our products for you!</p>
        <button
          className="text-lg md:text-2xl bg-green-500 rounded-lg border-b-4 border-green-600 focus:border-t-4 focus:border-b-0 focus:shadow-inner mx-auto p-4 font-bold text-white hover:bg-green-400"
          onClick={() => {
            setShowModal(true);
            setProductName('');
          }}>
          Launch Calculator <FontAwesomeIcon icon={faCalculator} className="ml-1" />
        </button>
      </div>

      {showModal && (
        <CalculatorModal
          onClose={() => setShowModal(false)}
          onCalculate={(name) => setProductName(name)}
        />
      )}

      <div className="flex w-full md:w-1/2">
        {productName && <div className="text-gray-700 w-full text-2xl mt-4 mb-10 font-bold text-center tracking-wide">
          <span className="text-green-600">We Recommend:</span> <span className="underline decoration-wavy decoration-green-500 underline-offset-8">{productName}</span>
        </div>}
      </div>

      <div id="footer" className="bg-gray-200 w-full absolute bottom-0 p-4 md:p-8 text-sm text-gray-500 text-center md:text-right">
        <p>Copyright &copy; 2023 Ship Sticks. All Rights Reserved.</p>
      </div>
    </div>
  );
}

export default App;
