import {useState} from 'react';

export default function Player({initialName, symbol, isActive,onChangeName}){
    const [isEditing, setIsEditing]= useState(false);
    const [playerName,setPlayerName] = useState(initialName);
  
    function  handleEditClick(){ 
        //setIsEditing(isEditing ? false : true);
        //setIsEditing(!isEditing); // =>shcedule update state to true
        //setIsEditing(!isEditing); // =>schedule update state to false
        // or only this 
        setIsEditing((editing) => !editing); 
        if (isEditing){  
            onChangeName(symbol,playerName);
        }

    }
    //setIsEditing(editing) => !editing);
    //setIsEditing(editing) => !editing); δεν θα λειτουργησει αυτο γιατι η React κρατάει την αρχική τιμη πάντα δηλαδη την "false".

    function handleChange(event){
        
        setPlayerName(event.target.value);
      
    }

    let editableplayerName =  <span className="player-name"> {playerName}</span>;
    // let btnCaption = 'Edit';
        if (isEditing){
            editableplayerName = <input type="text" required value={playerName} onChange={handleChange}/> ;                                                                             
         }
    
    return (
        <li className={isActive ? 'active' : undefined}>
            <span className="player">
                {editableplayerName}
              
                     <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
         </li>   
    );
}