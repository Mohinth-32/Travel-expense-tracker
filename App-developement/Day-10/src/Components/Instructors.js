import React, { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import ExpenseList from './ExpenseList';
import './Instructors.css';

function Instructors() {
  const [expenses, setExpenses] = useState([]);

  const handleExpenseAdd = (newExpense) => {
    setExpenses([...expenses, newExpense]);
  };

  return (
    <div className="Instructors">
      <h1>Manage Expenses</h1>
      <ExpenseForm onExpenseAdd={handleExpenseAdd} />
      <p>Expense List:</p>
      <ExpenseList expenses={expenses} />
    </div>
  );
}

export default Instructors;
