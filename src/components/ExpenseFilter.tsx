import catagories from '../categories';


interface Props{
    onSelect: (catagory : string) => void;
}

const ExpenseFilter = ({onSelect} : Props) => {
  return (
    <select onChange={(event) => onSelect(event.target.value) } className="form-select  font-black my-3 active">
        <option value="">All Catagories</option>
        {catagories.map(catagory => <option key={catagory} value={catagory}>{catagory}</option>)}
        
    </select>
  )
}

export default ExpenseFilter