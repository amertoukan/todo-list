import React, {useState} from 'react';
import { isCompositeComponent } from 'react-dom/test-utils';
import './App.css';
import './styles.css'

function App() {
  const randomList = [{ id: 1, name: "apples"}, {id: 2, name: "oranges"}, {id: 3, name: "mangos"}, {id: 5, name: "blueberries"}]
  const [items, setItems] = useState ([
    {
    id: 0,
    title: "take out the trash", 
  done: false
},
{
  id: 1, 
  title: 'take wife to dinner', 
  done: true
}, 
{ 
  id: 2,
  title: 'apply for jobs', 
  done: false
}
  ])
  const [input, setInput] = useState ("")
  const [isChecked, setIsChecked] = useState(false)

  const handleDelete = (e) => {
  
    let ID = e.target.id
    let filtered = items.filter(i => i.title !== ID)
    setItems(filtered)
   

    // const filtered = items.filter(i => i.id === ID)
    // console.log(filtered)

  }
  const runFilter = (ID) => {

      return ID !== 2

  }
  const handleOnChange = (e) => {

    setIsChecked(!isChecked)
      let ID = e.target.id
     items[ID].done = !items[ID].done
      console.log(items[ID].done)
   
  
  }

  const handleButton = (e) => {
    const id = items.length - 1
    setItems(items => [...items, {
      id: id,
      title: input, 
      done: false
    }])
   
  }

  const handleInput = (e) => {
    setInput(e.target.value)
  }
  return (
    <div className="App">
      <div className='container'>
      <h1> Todo List </h1>
      </div>
      
 

      <div className="input-container">
      <input className="input" type={'text'} onKeyUp = {handleInput} placeholder="Todo Item" />
      <button className = "button" onClick = {handleButton}> Submit </button>
      </div>
      <div className = "container">
      <h2>To Do Items</h2>
      </div>
 
    {items.map((item, index)=> {
      if (item.done == false ){
        return (
        <span className = "list-item-container">

        <input className = "checkbox inline left" type="checkbox" onChange = {handleOnChange} id={index}  />
        <li className="list-item inline center"> {item.title}</li>
        <span className = "inline settings right" onClick={handleDelete} id={item.title}>x</span>
          <br/>
        </span>
        )
      }
    })}

<div className = "container">
<h2>Done Tasks</h2>
</div>
   {
     items.map((item, index)=> {
       if(item.done === true){
       return ( 
      <div className = "list-item-container">

       <input className = "checkbox checkbox-checked inline left" type="checkbox" checked = {true} onChange = {handleOnChange} id={index}  />
       <li className="list-item inline"> {item.title}</li>
       <span className = "inline settings  right" onClick={handleDelete} id={item.title}>x</span>

       </div>
       )}
     })
   }
</div>

   
  );
}

export default App;
