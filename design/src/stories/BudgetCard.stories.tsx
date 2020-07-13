import React from "react";
import { BudgetCard } from '../components/BudgetCard';

export default {
  title: "Budget Card",
};

export const card = () => {

  return (
    <BudgetCard  expensesCount= {195} totalBudget={1500.00} start={new Date()} end={new Date()} budgeted={4.99} expenses={625.12} income={10.00}/>
  )
};
