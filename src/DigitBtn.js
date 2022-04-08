import { ACTIONS } from './App.js';

function DigitBtn({ dispatch, digit }) {// it will take dispatch so that it can call reducer from here
    return <button onClick={() => dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit } })}>
        {digit}
    </button>//onClick action will call dispatch function so without calling directly 
    //we use callback function so that it does not load over and over again(need more proper reason)
}

export default DigitBtn;