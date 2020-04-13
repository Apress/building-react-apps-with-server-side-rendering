import React, {useState} from 'react';
import {useChangeAlert} from './Hooks/useChangeAlert'

function MyComponent2(props){

    const [outputValue, setOutputValue] = useState('Placeholder');

    function UpdateText(){
        setOutputValue(document.getElementById('inputTextbox2').value); 
    }

    useChangeAlert(`New Label2 Value: ${outputValue}`);

    return(
        <div>
        <br/>
        <br/>
            <input id='inputTextbox2'></input>
            <button type='button' 
                    onClick={UpdateText}>
                Update
            </button>
            <br/>
            <label>{outputValue}</label>
        </div>
    );
}

export default MyComponent2;