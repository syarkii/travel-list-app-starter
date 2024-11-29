export default function Stats({items}) { 
    //get the “items” from the prop and save the length of the items in a variable.
    const numItems = items.length;
    const numPacked = items.filter((item) => item.packed).length;
    const percentage = Math.round((numPacked / numItems) * 100);
    return ( //display the number of items in the footer, display number of items packed and percentage of items packed
      <footer className="stats">
        <em>
        {
          percentage === 100 ?
          "Congrats! You're all packed!" :
          `You have ${numItems} items in the list. You already packed ${numPacked} (${percentage}%)`
        }
        </em> 
      </footer> 
    ); 
  } 