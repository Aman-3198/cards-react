import './StateDemo.css'
import {useState} from 'react'

function StateDemo (){
    let [counter,setCounter] = useState(0)
    let [emp,setEmp]=useState({eno:99,name:'Aman'})
    let [marks,setMarks]=useState([10,20])

    function incrementCounter(){
        setCounter(counter+1)
    }
    function decrementCounter(){
        setCounter(counter-1)
    }
    function resetCounter(){
        setCounter(0)
    }
    function changeEmp(){
        setEmp({eno:24,name:'Arya(Baka)'})
    }
    function addToArray(){
        setMarks([...marks,30])
    }
    return (
        <div className='container'>
            <h2>Hello world</h2>
            <h3>Counter :{counter}</h3>
            <button onClick={incrementCounter}>+</button>
            <button onClick={decrementCounter}>-</button>
            <button onClick={resetCounter}>reset</button>
            <h3>eno:{emp.eno}</h3>
            <h3>ename:{emp.name}</h3>
            <button onClick={changeEmp}>change emp</button>
            {
                marks.map(m=><h3 key={m}>{m}</h3>)
            }
            <button onClick={addToArray}>add value to array</button>
        </div>
    )
}

export default StateDemo 