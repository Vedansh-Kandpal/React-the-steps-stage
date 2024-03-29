import { useState } from "react";

const message = [
  "Learn React ✨",
  "Apply for Jobs 💪",
  "Party 🥳"
]
export default function App() {
  let [step, setStep] = useState(1);

  let [isOpen, setIsOpen] = useState(true);

  function handlePrev() {
    // if (step > 1) setStep(step - 1)

    // updating the state based on current state
    if (step > 1) setStep((s) => s - 1)
  }

  function handleNext() {
    if (step < (message.length)) setStep((s) => s + 1)

  }

  function close() {
    setIsOpen((s) => !s);
  }

  return (
    <>
      <button className="close" onClick={close}>&times;</button>
      {isOpen &&
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>


          <StepMessage step={step}>
            {message[step - 1]}
          </StepMessage>

          <div className="buttons">

            {/* children prop <Button>anything is here is children</Button> */}
            <Button
              bgColor='#7950f2'
              textColor='#fff'
              text="Previous"
              onClick={handlePrev}><span>👈</span>Previous</Button>

            <Button
              bgColor='#7950f2'
              textColor='#fff'
              text="Next"
              onClick={handleNext}>Next<span>👉</span></Button>


          </div>
        </div>
      }
    </>
  )
}

function StepMessage({ step, children }) {
  return <div className="message">
    <h3>Step {step}</h3>{children}
  </div>
}

function Button({ textColor, bgColor, onClick, children }) {
  return <button style={{ backgroundColor: bgColor, color: textColor }} onClick={onClick}> {children}</button>
}