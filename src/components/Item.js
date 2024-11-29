// Child Componenent 
// Template 
export default function Item({ packingItem, onDeleteItem, onUpdateItem }) { 
  return ( 
    <li> 
      <input 
        type="checkbox" 
        value={packingItem.packed} 
        onChange={()=>onUpdateItem(packingItem.id)} 
      /> 
      <span className={packingItem.packed ? "packed" : ""}> 
        {packingItem.description} ({packingItem.quantity}) 
      </span> 
      <button className="btn" onClick={()=>onDeleteItem(packingItem.id)}>X</button> 
    </li> 
  ); 
}