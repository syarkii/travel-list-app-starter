import { useState } from "react"; 
 export default function Form({ addItem }) { 
    const [description, setDescription] = useState(""); 
    const [quantity, setQuantity] = useState(1); 
   
    function handleSubmit(e) { 
      e.preventDefault(); 
   
      if (!description) return; 
   
      //Create a new item 
      const newItem = { 
        id: Date.now(), 
        description, 
        quantity, 
        packed: false, 
      }; 
   
      // Add the new item to the list 
      addItem(newItem); 
   
      // Reset the input fields 
      setDescription(""); 
      setQuantity(1); 
    } 
   
    return ( 
      <form className="add-form" onSubmit={handleSubmit}> 
        <h3>What do you need to pack?</h3> 
        {/* DROPDOWN */} 
        <select 
          value={quantity} 
          onChange={(e) => setQuantity(Number(e.target.value))} 
        > 
          <option value={1}>1</option> 
          <option value={2}>2</option> 
          <option value={3}>3</option> 
        </select> 
        {/* INPUT */} 
        <input 
          type="text" 
          placeholder="Item..." 
          value={description} 
          onChange={(e) => setDescription(e.target.value)} 
        /> 
        {/* BUTTON */} 
        <button>Add</button> 
      </form> 
    ); 
  }