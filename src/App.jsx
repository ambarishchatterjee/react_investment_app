import { useState } from "react";
import Header from "./components/Header"
import Results from "./components/Results";
import Userinput from "./components/Userinput";
import './index.css';

function App() {

    const [userInputs, setUserInputs] = useState({
        initialInvestment: 10000,
        annualInvestment: 900,
        expectedReturn: 7.5,
        duration: 10
    })
    const inputIsValid = userInputs.duration >= 1
    const handleInputChange = (identifier, value) => {
        setUserInputs((prevInputs) => {
            return {
                ...prevInputs,
                [identifier]: +value
            }
        })
    }


  return (
    <>
    <Header />
    <Userinput inputs={userInputs} onInputChange={handleInputChange} />
    {!inputIsValid && <p className="center">Enter valid input</p>}
    {inputIsValid && <Results outputs={userInputs} />}
    </>
   
  )
}

export default App
