
import './ManagerAcct.css';
import { useState } from 'react'; 
import { Button } from './Button.js'; 
import { ListComponent } from './ListComponent.js'; 

function ManagerAcct() { 
  
  const [components, setComponents] = useState([]);
  const [event, setEvent] = useState(''); 

  
  function addComponent() { 
    if (event != '' && !components.includes(event)) {
      setComponents([...components, event]) 
    }
    
  }

  function viewProgress() {

  }
  
  return ( 
    
    <div> 
      <Button onClick={addComponent} text="Add Event"/> 
      <Button onClick={viewProgress} text="View Progress"/>
      {components.map((item, i) => ( <ListComponent text={item} /> ))} 
      
      <form>
        <label><b>Please specify event:</b>&nbsp;</label>
        <input value={event} onInput={e => setEvent(e.target.value)}/>
      </form>

    </div> 
    
  ) 
  
} 

export default ManagerAcct;
