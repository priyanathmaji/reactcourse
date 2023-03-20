import './ExpenseDate.css'
import Card from '../UI/Card'

const ExpenseDate = (data) => {

    const month = data.date.toLocaleString('en-US',{month: 'long'});
    const day = data.date.toLocaleString('en-US',{day: '2-digit'});
    const year = data.date.getFullYear();

    return(
        <Card className='expense-date'>
            <div className='expense-date__month'>{month}</div>
            <div className='expense-date__day'>{day}</div>
            <div className='expense-date__year'>{year}</div>
        </Card>
    )
}

export default ExpenseDate;