import React from 'react';
import { useSelector , useDispatch} from 'react-redux';
import { IncNum, DecNum } from '../componetsforRedux/Actions/Index';

const CounterR = () => {
    const myState = useSelector((state) => state.Updown);
    const dispatch = useDispatch();
  return (
    <div className='bg-zinc-200'>
    <div className='flex items-center justify-around h-[40vh]'>
        <div>
            <span className='text-5xl font-bold text-zinc-600'>Counter using Redux: </span>
        </div>
        <div className='flex  items-center justify-around rounded-xl w-44 text-3xl font-bold border-2 border-zinc-600 bg-zinc-600 '>
            
                <button className='p-3 text-center text-zinc-200 w-[30%] rounded-l-xl hover:bg-zinc-700'onClick={()=>dispatch(IncNum())} >+</button>
            
                <div className='bg-white border-2 w-[40%] text-zinc-600  border-zinc-600 p-3 text-center'>{myState}</div>
            
                <button className='p-3 text-center text-zinc-200 w-[30%] rounded-r-xl hover:bg-zinc-700' onClick={()=>dispatch(DecNum())} >-</button>
        </div>
    </div>
</div>
  )
}

export default CounterR
