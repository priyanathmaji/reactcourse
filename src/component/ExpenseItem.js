import React,{ useState} from 'react';
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from './Card'

const ExpenseItem = (data) => {

    const [title, setTitle] = useState(data.title);

    const clickHandler = () => {
        console.log(title);
        setTitle('Updated');
    }   

    return (
        <Card className='expense-item'>
            <ExpenseDate date={data.date} ></ExpenseDate>
            <div className='expense-item__description'>
                <h2> {title}</h2>
            </div>
            <div className='expense-item__price'> ${data.amount}</div>
            <button onClick={clickHandler}>Update</button>
        </Card>
    );
}

export default ExpenseItem;

