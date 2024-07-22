
interface Expenses{
    id:number;
    description:string;
    amount: number;
    catagory:string;
}

interface Props{
    List: Expenses[];
    onDelete :(id : number) => void; 
}


const ExpenseList = ({List , onDelete} : Props) => {
    if(List.length === 0){
        return null;
    }
  return (
    <>
    <table className="table table-bordered table-hover text-center">
        <thead>
            <tr>
                <th>Description</th>
                <th>Amount</th>
                <th>Catagory</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
                {List.map(expense => <tr key={expense.id}>
                    <td>{expense.description}</td>
                    <td>{expense.amount}</td>
                    <td>{expense.catagory}</td>
                    <td><button className="btn btn-danger" onClick={() => onDelete(expense.id)}>Delete</button></td>
                    </tr> )}
        </tbody>
        <tfoot>
            <tr>
                <td>Total</td>
                <td>{List.reduce((acc,expense) => acc + expense.amount,0)}</td>
                <td></td>
                <td></td>
            </tr>
        </tfoot>
    </table>
    </>
  )
}

export default ExpenseList