import Item from "./Item" 
 
// Parent Component to Item Component 
// Responsible for supplying data to the child component 
export default function PackingList({ items, onDeleteItem, onUpdateItem }) { 
    return ( 
      <div className="list"> 
        <ul> 
          {items.map((item) => ( 
            <Item  
              packingItem={item}  
              key={item.id} 
              onDeleteItem={onDeleteItem} 
              onUpdateItem={onUpdateItem} 
            /> 
          ))} 
        </ul> 
      </div> 
    ); 
  }