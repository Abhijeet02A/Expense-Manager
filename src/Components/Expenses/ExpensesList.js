import React from 'react';
import ExpenseItem from './ExpenseItems';
import  './ExpensesList.css';
const ExpensesList = (props) => {

    let expenseContent = <p>Data is Not available</p>
    // Conditional based rendering
    if (props.items.length > 0) {
      /* Dynamic rendering of data */
      expenseContent = props.items.map((expense) => (
        <ExpenseItem
        // Add key to render element at position
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))
    }

    return (
        <ul className='expenses-list'>
            {expenseContent}
        </ul>
    );

}

export default ExpensesList;