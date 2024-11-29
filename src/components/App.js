import { useState } from "react"; 
import Logo from "./Logo"; 
import Stats from "./Stats"; 
import PackingList from "./PackingList"; 
import Form from "./Form"; 
 
function App() { 
  // Reponsible for supplying the data to PackingList Componenent now 
  const [items, setItems] = useState([]); 
 
  // Add items to the list 
  function handleAddItems(item) { 
    setItems((prevItems) => [...prevItems, item]); 
  } 
 
  // Delete items from the list 
  function handleDeleteItem(id) { 
    setItems((prevItems) => prevItems.filter((item) => item.id !== id)); 
  } 
 
  // Update items packed status in the list 
  function handleUpdateItem(id) { 
    setItems((prevItems)=> prevItems.map((item)=> 
      item.id === id ? {...item, packed: !item.packed} : item 
    )); 
  } 
   
  return ( 
    <div className="app"> 
      <Logo /> 
      <Form addItem={handleAddItems} /> 
      <PackingList  
        items={items} 
        onDeleteItem={handleDeleteItem} 
        onUpdateItem={handleUpdateItem} 
      /> 
      <Stats 
        items={items} 
      /> 
    </div> 
  ); 
} 
 
export default App;