
import Expenses from "./Components/Expenses/Expenses";
import NewExpense from "./Components/NewExpense/NewExpense";
import React ,{useState} from "react";


const DUMMY_DATA = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];
function App() {

  // use useState to update the state in DOM with dummy date as initioal data
  const [expenses, setExpenses] = useState(DUMMY_DATA);
  // Event trigger when user clicks on Add Expenses button
  const addExpenseHandler = expense => {
    // returns new array to set data in DOM
    // always return new array
  setExpenses((prevExpense) => {
    return [expense, ...prevExpense];
  });
};

  return (
    <div>
      {/* It will add new element to list using react state. */}
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
