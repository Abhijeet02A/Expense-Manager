import Card from "../UI/Card";
import React, { useState } from 'react';
import ExpenseItem from "./ExpenseItems";
import ExpensesFilter from './ExpensesFilter';
import './Expenses.css';
function Expenses(props) {
    const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };

  //filtering elements with current year value
  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  })
    
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        {/* Dynamic rendering of data */}
        {filteredExpenses.map((expense) => (
          <ExpenseItem
          // Add key to render element at position
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
        {/* Static rendering of data */}
        {/* <ExpenseItem
          title={props.items[3].title}
          amount={props.items[3].amount}
          date={props.items[3].date}
        /> */}
      </Card>
    </div>
  );
};

export default Expenses;