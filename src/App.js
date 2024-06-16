import React from 'react';
import { useFormContext, FormProvider } from './context/FormContext';
import StepOne from './component/StepOne';
import StepTwo from './component/Steptwo';

const steps = ["Your Profile", "Business Information"];

function App() {
  const {
    step,
    completed,
    next,
    prev,
    reset,
    allStepCompleted,
    handleComplete,
  } = useFormContext();

  const renderStepForm = (step) => {
    switch (step) {
      case 0:
        return <StepOne />;
      case 1:
        return <StepTwo />;
      default:
        return <StepOne />
    
    }
  };

  const handleNext = () => {
    // Call handleComplete to mark the step as completed
    handleComplete();
  };

  return (
    <div className="my-20 max-w-full mx-auto flex flex-col items-center px-4">
      {allStepCompleted() ? (
        <div className="flex items-center justify-between pt-2">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none"
            onClick={reset}
          >
            Reset
          </button>
        </div>
      ) : (
        <div className="max-w-[800px] sm:px-4 rounded-lg w-full">
          <div className='w-full h-auto  bg-white rounded-lg pb-8'>
          <div className="flex justify-center w-full">
            {steps.map((label, index) => (
              <div key={index} className="flex w-full flex-col items-center bg-gray-300">
                <div
                  className={`w-full h-12 flex items-center justify-center ${
                    completed[index] ? 'bg-blue-500 rounded-r-[2rem] overflow-hidden' : 'bg-gray-300'
                  }`}
                >
                  <span>{label}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="pt-4 px-[50px] sm:px-4">{renderStepForm(step)}</div>
          </div>
          <div className="flex justify-end items-center pt-4">
            {step > 0 && (
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none"
                onClick={prev}
              >
                Back
              </button>
            )}
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none ml-4"
              onClick={handleNext}
            >
              {step === steps.length - 1 ? 'Finish' : 'Next'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
export default App