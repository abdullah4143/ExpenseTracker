import { useState } from "react";
import ExpenseList from "./components/ExpenseList"
import Form from "./components/Form"
import ExpenseFilter from "./components/ExpenseFilter";


const App = () => {
  const [selectCatagory , SetSelectCatagory] = useState('');
  const [Expenses , SetExpenses] = useState([
    { id: 1 , description:'aaa' , amount:12 , catagory: 'Groceries'},
    { id: 2 , description:'bbb' , amount:12 , catagory: 'Utilities'},
    { id: 3 , description:'ccc' , amount:12 , catagory: 'Entertainment'},
    { id: 4 , description:'ddd' , amount:12 , catagory: 'Utilities'},
  ]);

  const HandleDelete = (id:number) => {
    console.log(`Deleted ${id}`);
    SetExpenses(Expenses.filter(x => x.id!== id));
    
  }
  const VisibleExpenses = selectCatagory ? Expenses.filter((e)=>e.catagory === selectCatagory) : Expenses;

  const HandleSelect = (catagory: string) => {
    SetSelectCatagory(catagory);
  }
  const HandleSubmit = (data: any) => {
    SetExpenses([...Expenses, {...data , id:Expenses.length + 1}])
  }

  return (
    <div className="container">
      <h2 className="text-center shadow bg-success py-3">Expense Tracker</h2>
      <div className="shadow">
      <ExpenseFilter onSelect={(catagory) => HandleSelect(catagory)}></ExpenseFilter>
    <ExpenseList List={VisibleExpenses} onDelete={(id) => HandleDelete(id)}></ExpenseList>
    </div>
    <br />
    <Form onSubmit={data => HandleSubmit(data)}></Form>
    </div>
  )
}

export default App