import React from "react";
import "./componant/style.css"
import { Item } from "./item";
function App() {
  return (
   <div className="main">
   
<Item title="Fruits" data={["Apple", "Orange", "Banana"]} />
<Item title="Wild Animal" data={["Loin", "Zabra", "Cheeta","monkey"]} />
<Item title="Wild Animal" data={["Cat", "Goat", "cow","Donkey"]} />

   </div>
  );
}

export default App;
