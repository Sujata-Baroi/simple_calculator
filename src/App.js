import react, { useReducer } from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import DigitBtn from './DigitBtn.js'
//ACTIONS object contains different actions

export const ACTIONS = {
  ADD_DIGIT: "addDigit",
  CLEAR: 'clear',
  DELETE_DIGIT: 'delete_digit',
  CHOOSE_OPERATION: 'choose-operation',
  EVALUATE: 'evaluate'
}
//as there are different actions so we need type and payload which we contain some value
function reducer(state, { type, payload }) {//current state and action that will be performed ,reduecr manage states

  switch (type) {

    case ACTIONS.ADD_DIGIT:
      return {
        ...state,//take the current state using spread operator
        curOperand: `${state.curOperand || ""}${payload.digit}`,//if curOperand is null so it will create a new operand 
        //or just append dig to curOprnd

      }


  }
}

function App() {
  const [{ curOperand, prevOperand, operation }, dispatch] = useReducer(reducer, {});//useReducer takes reducer method, when more states are involved
  //as input which contains reducer logic code and initial state(properties values that component contains at current situation)
  //it will return a state that is current state and dispatch method which will trigger action
  return (
    <div className="calculator-grid">
      <div className="output">
        <div className="prev-Operand">{prevOperand} {operation}</div>
        <div className="cur-Operand">{curOperand}</div>
      </div>
      <button className="span-two">AC</button>
      <button>DEL</button>
      <DigitBtn digit="/" dispatch={dispatch} />
      <button>1</button>
      <button>2</button>
      <button>3</button>
      <button>*</button>
      <button>4</button>
      <button>5</button>
      <button>6</button>
      <button>+</button>
      <button>7</button>
      <button>8</button>
      <button>9</button>
      <button>-</button>
      <button>.</button>
      <button>0</button>
      <button className="span-two">=</button>
    </div>
  )
}

export default App;