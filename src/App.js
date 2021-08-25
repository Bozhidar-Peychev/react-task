import "./App.css";
import {useState} from "react";


const Counter = ({currentCounter, setSumCount}) => {
    const [count, setCount] = useState(0);

    return (
        <p>
            {currentCounter}: {count} {" "}
            <button onClick={() => {
                setCount(prevState => prevState + 1);
                setSumCount(prevState => prevState + 1);
            }}>+
            </button>
            &nbsp;
            <button onClick={() => {
                setCount(prevState => prevState - 1);
                setSumCount(prevState => prevState - 1);
            }}>-
            </button>
        </p>
    )
}

function App() {
    const [counter, setCounter] = useState([]);
    const [counterName, setCounterName] = useState('');
    const [sumCount, setSumCount] = useState(0);

    const addCounter = () => {
        setCounter(prevState => [...prevState, counterName])
        setCounterName('');
    };

    return (
        <div className="App">
            <p>
                <strong>Task Description:</strong>
            </p>
            <ul>
                <li>
                    Use the New counter form to add multiple counters with + and -
                    buttons. <br/>
                    Each new counter will start from 0<br/>
                    They will increase/decrease the counter.
                </li>
                <li>Calculate the total number of counters</li>
            </ul>
            <h1>Counter</h1>
            <h3>Total: {sumCount}</h3>
            {counter.map(item => {
                return <Counter currentCounter={item} setSumCount={setSumCount}/>
            })}
            <p>
                New counter: <input type="text" value={counterName} onChange={e => setCounterName(e.target.value)}/>
                <button type="button" onClick={() => addCounter()}>Add</button>
            </p>
        </div>
    );
}

export default App;
