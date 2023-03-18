import './ExpenseItem.css';

const ExpenseItem = () => {
    const expenseDate = new Date(2023,3,23);
    const expenseItem = 'Car Insurance';
    const expensePrice = 524.25;

    return (
        <div className='expense-item'>
            <div>
                {expenseDate.toISOString('mm/dd/yyyy')}
            </div>
            <div className='expense-item__description'>
                <h2> {expenseItem}</h2>
            </div>
    <div className='expense-item__price'> ${expensePrice}</div>
        </div>
    );
}

export default ExpenseItem;

