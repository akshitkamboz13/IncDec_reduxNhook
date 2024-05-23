# Counter App with React, Redux, and Tailwind CSS

This is a simple Counter application built with React using Vite for project scaffolding, Redux for state management, and Tailwind CSS for styling. This project serves as an introduction to Redux, demonstrating how to perform increment and decrement operations with Redux in a React application.

## Features

- **Increment:** Increase the counter value by one.
- **Decrement:** Decrease the counter value by one.

## Technologies Used

- **React:** A JavaScript library for building user interfaces.
- **Vite:** A build tool for modern web development with blazing fast build times.
- **Redux:** A predictable state container for JavaScript apps.
- **Tailwind CSS:** A utility-first CSS framework for building custom designs.

## Project Structure

```
src/
|-- components/
|   |-- Heading.jsx                # Component for rendering a heading
|-- componetsforRedux/             # Folder for Redux-related components
|   |-- Actions/                   # Folder for Redux actions
|   |   |-- index.js               # Combine all action creators
|   |-- Reducer/                   # Folder for Redux reducers
|   |   |-- index.js               # Combine all reducers
|   |   |-- Updown.js              # Reducer for handling increment and decrement actions
|   |-- Store/                     # Folder for Redux store configuration
|   |   |-- Store.js               # Redux store configuration
|-- usingHooks/                    # Folder for components using useState hook
|   |-- CounterH.jsx               # Component for counter using useState hook
|-- usingRedux/                    # Folder for components using Redux
|   |-- CounterR.jsx               # Component for counter using Redux
|-- App.jsx                        # Main component rendering all other components
|-- index.css                      # Global CSS styles
|-- main.jsx                       # Entry point of the application

```

## Usage

1. Clone the repository:

   ```bash
   git clone https://github.com/akshitkamboz13/IncDec_reduxNhook.git
   ```

2. Navigate to the project directory:

   ```bash
   cd IncDec_reduxNhook
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open your web browser and go to [http://localhost:5173/](http://localhost:5173/) to view the application.

## Counter Component

### CounterUsingState

This component utilizes the `useState` hook for managing state internally within the component.

```jsx
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
        <div >
            <div >
                <div>
                    <span >Counter using Hooks: </span>
                </div>
                <div >
                    <button  onClick={Increment}>+</button>
                    <div >{count}</div>
                    <button onClick={Decrement}>-</button>
                </div>
            </div>
        </div>
    )
}

export default CounterH
```

### CounterUsingRedux

This component utilizes Redux for managing state globally across the application.

```jsx
import React from 'react';
import { useSelector , useDispatch} from 'react-redux';
import { IncNum, DecNum } from '../componetsforRedux/Actions/Index';

const CounterR = () => {
    const myState = useSelector((state) => state.Updown);
    const dispatch = useDispatch();
  return (
    <div >
    <div >
        <div>
            <span >Counter using Redux: </span>
        </div>
        <div >
            <button onClick={()=>dispatch(IncNum())} >+</button>
            <div >{myState}</div>
            <button  onClick={()=>dispatch(DecNum())} >-</button>
        </div>
    </div>
</div>
  )
}

export default CounterR
```
