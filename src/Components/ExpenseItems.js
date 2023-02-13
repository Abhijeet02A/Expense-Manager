import './ExpenseItems.css'
function ExpenseItem() {
    return (
        <div className='expense-item'>
            <div>13 February 2023</div>
            <div className='expense-item__description'>
                <h2>Car Insurance</h2>
                <div className='expense-item__price'>$123.39</div>
            </div>
        </div>
    );
//     git config --global user.email "you@example.com"
//   git config --global user.name "Your Name"
}

export default ExpenseItem;