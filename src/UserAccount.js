import './UserAccount.css';
import { useState } from 'react'; 
import { Button } from './Button.js'; 
import { ListComponent } from './ListComponent.js';
import './EventAttended'
import './EventHistory' 
import EventAttended from './EventAttended';

function ManagerAcct() { 



  return ( 
    
    <div> 
      <header> Your Event History </header>
      {this.props.attended.map(attended => (
          <EventAttended key={attended.id} attended={attended} />
        ))}
      
    </div> 
    
  ) 
  
} 

export default UserAccount;