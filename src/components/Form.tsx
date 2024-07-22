import { useForm} from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import catagories from '../categories.ts';

interface Props{
    onSubmit: (data : FormData) => void;
}


const schema  = z.object({
    description: z.string().min(3, {message: 'Description must be 5 characters long'}),
    amount: z.number().min(0.01 , {message:'Amount must be greater than zero'}).max(100_000,{message:'limit Breached'}),
    catagory: z.enum(catagories),
});


type FormData = z.infer<typeof schema>;


const Form = ({onSubmit} : Props) => {
 
    const {register , handleSubmit, reset ,formState: {errors}} = useForm<FormData>({resolver: zodResolver(schema)});

    

    return (
        <div className='container shadow'>
            <h2 className='text-center h2 p-3 bg-info'>Add New Expense</h2>
    <form onSubmit={handleSubmit(data => {
        onSubmit(data);
        reset();
    })} >

        <div className="form-group px-5 py-1">
            <label htmlFor="description" className='form-label'>Decsription</label>
            <input 
            className='form-control'
             {...register('description')}/>

            {errors.description !== null && <p className='text-danger'>{errors.description?.message}</p>}

        </div>

        <div className="form-group px-5 py-1">
            <label htmlFor="amount" className='form-label'>Amount</label>
            <input
            className='form-control'  
            {...register('amount' , {valueAsNumber:true})}/>
            {errors.amount !== null && <p className='text-danger'>{errors.amount?.message}</p>}
        </div>

        <div className="form-group px-5 py-1">

            <label htmlFor="catagory" className='form-label'>Catagory</label>

            <select {...register('catagory')} name="catagory" className='form-select' id="catagory">
                {catagories.map(catagory => <option key={catagory} value={catagory}>{catagory}</option>)}   
            </select>


            {errors.catagory !== null && <p className='text-danger'>{errors.catagory?.message}</p>}
        </div>

        
        <div className="form-group text-center">
            <button className='btn btn-primary' type="submit">Add Expense</button>
        </div>
    </form>
    </div>
  )
}

export default Form