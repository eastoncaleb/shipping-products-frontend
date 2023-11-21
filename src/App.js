import React, { useState } from 'react';
import CalculatorModal from './components/CalculatorModal';

function App() {
  const [showModal, setShowModal] = useState(false);
  const [productName, setProductName] = useState('');

  return (
    <div className="App p-10 flex flex-wrap justify-center">
      <div className="my-10 text-center text-white w-full">
        <h2 className="text-7xl font-bold mb-4 text-shadow shadow-gray-700">Ship Your Golf Clubs Ahead</h2>
        <h3 className="text-3xl font-semibold text-shadow shadow-gray-700">
          <span className="text-shadow-lg shadow-green-400">Safe, convenient, and hassle-free</span> travel. Guaranteed.
        </h3>
      </div>

      <button className="bg-green-500 rounded-lg borde-2 border-b-4 border-green-600 mx-2 p-4 font-bold text-white hover:bg-green-400" onClick={() => setShowModal(true)}>Launch Calculator</button>

      {showModal && (
        <CalculatorModal
          onClose={() => setShowModal(false)}
          onCalculate={(name) => setProductName(name)}
        />
      )}

      <div className="flex w-full">
        {productName && <div className="text-shadow shadow-gray-700 w-full text-white text-2xl my-10 font-bold text-center bg-gray-500 bg-clip-padding backdrop-filter backdrop-blur bg-opacity-50 saturate-100 backdrop-contrast-100 rounded py-4 tracking-wide">
          Product Recommended: <span className="underline decoration-wavy decoration-green-500 underline-offset-8">{productName}</span>
        </div>}
      </div>
    </div>
  );
}

export default App;
