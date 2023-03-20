import React , { useState } from 'react';

import './styles.css';

// don't change the Component name "App"
export default function App() {
    
    const [prevText, setText] = React.useState('');
    
    const [prevLabel, setLabel] = React.useState('Invalid message');
    
    const textChangeHandler = () => {
            setText(event.target.value);
        
            if (event.target.value.length<3) 
            {
                setLabel('Invalid message');
                
            } else {
                setLabel('Valid message');
            }
        }
        
    
    
    return (
        <form>
            <label>Your message</label>
            <input type="text" onChange={textChangeHandler}/>
            
            <p>{prevLabel}</p>
        </form>
    );
}