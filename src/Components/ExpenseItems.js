import './ExpenseItems.css'
function ExpenseItem(props) {
    const expenseDate = new Date(2023, 2, 13);
    const expenseItem = "Car Insurance";
    const expensePrice = 123.45;

    return (
        <div className='expense-item'>
            <div>{props.date.toISOString()}</div>
            <div className='expense-item__description'>
                <h2>{props.title}</h2>
                <div className='expense-item__price'>${props.amount}</div>
            </div>
        </div>
    );
}

export default ExpenseItem;