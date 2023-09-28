import React, { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import AddShoppingCartRoundedIcon from '@mui/icons-material/AddShoppingCartRounded';

function Shopping() {

  const  [items, setItems] = useState(["Milk", "Cat treats"]);

  const [newItemValue, setNewItemValue] = useState("");

  function addItem(e) {
    setItems([...items, newItemValue]);
    setNewItemValue("");
  }


    return (
      <div>
        <h3 className="title">Shopping</h3>
        <div className="shopList">
          {items.map(item =>
            <div key={item} className="itemToBuy">
              <input type="checkbox" className="largeCheckbox"/><p>{item}</p>
            </div>
          )}

          <div className="addNewItem">
            <input value={newItemValue} onInput={e => setNewItemValue(e.target.value)}/>
            <IconButton aria-label="add to shopping cart"  onClick={addItem}>
              <AddShoppingCartRoundedIcon style={{ fontSize:60 }}/>
            </IconButton>
          </div>
        </div>
        

      </div>
  
    )
  }

export default Shopping;


          {/* <div className="itemToBuy">
            <input type="checkbox" className="largeCheckbox"/><p>item</p>
          </div>
          <div className="itemToBuy">
            <input type="checkbox" className="largeCheckbox"/><p>item 2</p>
          </div>
          <div className="itemToBuy">
            <input type="checkbox" className="largeCheckbox"/><p>item 3</p>
          </div>
          <div className="itemToBuy">
            <input type="checkbox" className="largeCheckbox"/><p>item 4</p>
          </div> */}