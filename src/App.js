import { useState } from "react";

const messages = ["Learn React", "Apply for Jobs", "Invest your New Income"];

export default function App() {

  const [step, setStep ] = useState (1);
  const [isOpen, setIsOpen] = useState(true);
  // const [nameTest, setNameTest] =useState();

  function handlePrevious() {
    if (step > 1) setStep((s) => s - 1);
    // setStep(step - 1);
  };

  function handleNext() {
    if (step < 3) { 
      setStep((s) => s + 1);
    // setStep(step + 1);
    }
    // setNameTest({name: "Fred"});
  };

  /* Two diffrent components will have different memory alocation even if the code logic is the same. Ex: if you render the smae component twice and make changes on one of them, the state of the one you changed won't affect the state of the other, even when the page is refreshed. */

  return (
    <>
      <button className="close " onClick={() => setIsOpen((is) => !is)}>&times;</button>

      { isOpen && (
        <div className="steps">
        <div className="numbers">
          <div className={step >= 1 ? "active" : ""}>1</div>
          <div className={step >= 2 ? "active" : ""}>2</div>
          <div className={step >= 3 ? "active" : ""}>3</div>
        </div>
  
        <p className="message">Step {step}: {messages[step-1]} {/*nameTest*/}</p>
  
        <div className="buttons">
          <button style={{backgroundColor: "#7950f2", color: "#fff"}} onClick={handlePrevious}>Previous</button>
          <button style={{backgroundColor: "#7950f2", color: "#fff"}} onClick={handleNext}>Next</button>
        </div>
      </div>)
      }
    </>
  );
}

