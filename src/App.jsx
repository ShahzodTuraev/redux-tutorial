import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment, decriment } from './redux/Counter'
import { getStudent } from './redux/Student'

const App = () => {
  const counter =useSelector((store)=>store.counter)
  const store =useSelector((store)=>store.student)
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getStudent())
  }, [])
  return (
    <div>
      <p>Number: {counter.data}</p>
      <button onClick={()=>dispatch(decriment())}>-</button>
      <button onClick={()=>dispatch(increment({a: 5}))}>+</button>
      {
        store.student.map((value)=>{
          return(
            <div key={value.id}>
              <h4>{value.id}--{value.name}</h4>

            </div>
          )
        })
      }
    </div>
  )
}

export default App
