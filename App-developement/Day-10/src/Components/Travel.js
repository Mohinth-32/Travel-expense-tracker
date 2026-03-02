// Travel.js
import React, { useState, useEffect } from 'react';
import BudgetForm from './BudgetForm';
import './Travel.css';

function Travel({ name }) {
  const [trips, setTrips] = useState([]);
  const [currentTrip, setCurrentTrip] = useState('');

  const [budget, setBudget] = useState(0);
  const [expenses, setExpenses] = useState([]);
  const [expenseDescription, setExpenseDescription] = useState('');
  const [expenseAmount, setExpenseAmount] = useState('');

  const addTrip = () => {
    if (currentTrip) {
      setTrips([...trips, currentTrip]);
      setCurrentTrip('');
    }
  };
  const addExpense = () => {
    if (expenseDescription && expenseAmount) {
      const newExpense = {
        description: expenseDescription,
        amount: parseFloat(expenseAmount),
      };
      setExpenses([...expenses, newExpense]);
      setExpenseDescription('');
      setExpenseAmount('');
    }
  };

  const handleBudgetSet = (newBudget) => {
    setBudget(newBudget);
  };

  const calculateTotalExpenses = () => {
    return expenses.reduce((total, expense) => total + expense.amount, 0);
  };
  useEffect(() => {
    console.log('Trips:', trips);
    console.log('Expenses:', expenses);
  }, [trips, expenses]);

  return (
    <>
      <div className="travel-container">
        <h2>Add a Trip</h2>
        <div className="add-trip-section">
          <input
            type="text"
            className="trip-input"
            placeholder="Trip Name"
            value={currentTrip}
            onChange={(e) => setCurrentTrip(e.target.value)}
          />
          <button className="add-trip-button" onClick={addTrip}>
            Add Trip
          </button>
        </div>

        <BudgetForm onBudgetSet={handleBudgetSet} />

        <div>
          <h2>Add an Expense</h2>
          <input
            type="text"
            placeholder="Description"
            value={expenseDescription}
            onChange={(e) => setExpenseDescription(e.target.value)}
          />
          <input
            type="number"
            placeholder="Amount"
            value={expenseAmount}
            onChange={(e) => setExpenseAmount(e.target.value)}
          />
          <button onClick={addExpense}>Add Expense</button>
        </div>
        <div>
          <h2>Trips</h2>
          <ul>
            {trips.map((trip, index) => (
              <li key={index}>{trip}</li>
            ))}
          </ul>
        </div>
        <div>
          <ul>
            {expenses.map((expense, index) => (
              <li key={index}>
                {expense.description}: ${expense.amount}
              </li>
            ))}
          </ul>
        </div>
        <p>Total Budget: ${budget.toFixed(2)}</p>
        <p>Total Expenses: ${calculateTotalExpenses().toFixed(2)}</p>
        <p>
          Remaining Budget: ${(budget - calculateTotalExpenses()).toFixed(2)}
        </p>
      </div>
    </>
  );
}

export default Travel;
