import { useState } from 'react' 
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}
function count(){
  const [count, setCount] = useState(0)
  return(
    <div className="App">
      <h2 className={count > 5 ? "dark" : "light"}>
        Counter: {count}</h2>
      <button onClick={()=>setCount(count+1)}>Increment</button>
      <button onClick={()=>setCount(count-1)}>Decrement</button>
      <button onClick={()=>setCount(0)}>Reset</button>
    </div>

  )

}

export default count 


// jfncnmv
//ndgdj,m

// import { useState } from "react";
// import "./App.css";

// function App() {
//   const [input, setInput] = useState("");

//   const handleClick = (value) => {
//     setInput((prev) => prev + value);
//   };

//   const clearInput = () => {
//     setInput("");
//   };

//   const calculate = () => {
//     try {
//       // Evaluate safely
//       setInput(eval(input).toString());
//     } catch (err) {
//       setInput("Error");
//     }
//   };

//   return (
//     <div className="calculator">
//       <h2>React Calculator</h2>
//       <input type="text" value={input} readOnly />
//       <div className="buttons">
//         <button onClick={() => handleClick("7")}>7</button>
//         <button onClick={() => handleClick("8")}>8</button>
//         <button onClick={() => handleClick("9")}>9</button>
//         <button onClick={() => handleClick("/")}>/</button>

//         <button onClick={() => handleClick("4")}>4</button>
//         <button onClick={() => handleClick("5")}>5</button>
//         <button onClick={() => handleClick("6")}>6</button>
//         <button onClick={() => handleClick("*")}>*</button>

//         <button onClick={() => handleClick("1")}>1</button>
//         <button onClick={() => handleClick("2")}>2</button>
//         <button onClick={() => handleClick("3")}>3</button>
//         <button onClick={() => handleClick("-")}>-</button>

//         <button onClick={() => handleClick("0")}>0</button>
//         <button onClick={() => handleClick(".")}>.</button>
//         <button onClick={calculate}>=</button>
//         <button onClick={() => handleClick("+")}>+</button>

//         <button className="clear" onClick={clearInput}>
//           C
//         </button>
//       </div>
//     </div>
//   );
// }

// export default App;
// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function Counter() {
//   const [count, setCount] = useState(0)

//   return (
//     <div className="App">
//       {/* Toggle class based on count */}
//       <h2 className={count > 5 ? "dark" : "light"}>
//         Counter: {count}
//       </h2>

//       <button onClick={() => setCount(count + 1)}>Increment</button>
//       <button onClick={() => setCount(count - 1)}>Decrement</button>
//       <button onClick={() => setCount(0)}>Reset</button>
//     </div>
//   )
// }

// export default Counter

