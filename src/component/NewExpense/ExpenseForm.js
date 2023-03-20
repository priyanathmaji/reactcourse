import React, { useState } from 'react';
import './ExpenseForm.css'

const ExpenseForm = () => {
    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');
    const [amount, setAmount] = useState('');

    const changeTitleHandler = (event) => {
        setTitle(event.target.value);
        console.log(title);
    }

    const changeDateHandler = (event) => {
        setDate(event.target.value);
        console.log(date);
    }

    const changeAmountHandler = (event) => {
        setAmount(event.target.value);
        console.log(amount);
    }


    return (
        <form>
            <div className='new-expense__controls'>
                <div className='new-expense__control label'>Title:</div>
                <div className='new-expense__control input'><input type='text' name='Title' onChange={changeTitleHandler}/></div>
            </div>
            <div className='new-expense__controls'>
                <div className='new-expense__control label'>Price:</div>
                <div className='new-expense__control input'><input type='text' name='Price' onChange={changeAmountHandler} /></div>
            </div>
            <div className='new-expense__controls'>
                <div className='new-expense__control label'>Date:</div>
                <div className='new-expense__control input'><input name='Date' type='date' onChange={changeDateHandler}/></div>
            </div>
            <div className='new-expense__actions'>
                <button>Save</button>
            </div>
        </form>
    );
}

export default ExpenseForm;