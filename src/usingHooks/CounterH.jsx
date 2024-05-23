import React,{useState} from 'react'

const CounterH = () => {
    const [count, setCount] = useState(0)
    const Increment = () => {
        setCount(count + 1)
    }
    const Decrement = () => {
        setCount(count - 1)
    }

    return (
        <div className='bg-zinc-200'>
            <div className='flex items-center justify-around h-[40vh]'>
                <div>
                    <span className='text-5xl font-bold text-zinc-600'>Counter using Hooks: </span>
                </div>
                <div className='flex  items-center justify-around rounded-xl w-44 text-3xl font-bold border-2 border-zinc-600 bg-zinc-600 '>
                    
                        <button className='p-3 text-center text-zinc-200 w-[30%] rounded-l-xl  hover:bg-zinc-700' onClick={Increment}>+</button>
                    
                        <div className='bg-white  text-zinc-600 w-[40%] border-2 border-zinc-600 p-3 text-center'>{count}</div>
                    
                        <button className='p-3 text-center text-zinc-200 w-[30%] rounded-r-xl  hover:bg-zinc-700' onClick={Decrement}>-</button>
                </div>
            </div>
        </div>
    )
}

export default CounterH
