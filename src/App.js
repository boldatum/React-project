import React, {useState, useEffect} from 'react';
import menu from './data';
import Category from './category';
import Menu from './menu.js';

function App() {
  const [category, setCategory] = useState(menu);
  const getAll = ()=>{
    setCategory(menu);
  }
  const getCategory=(cat)=>{
   
    let newCat= menu.filter((item)=> item.category ===cat);
    setCategory(newCat);

  }

  // let catMenu;
  useEffect(() => {
    console.log(category); 
  }, [category])

  return (
    <div className="App">
      <header>
        <h1>our menu</h1>
      </header>
      <Category menu={menu} getCategory = {getCategory} getAll = {getAll}></Category>
      <div className="menu-container">

      {
        category.map((cat)=> {
          return <Menu key={cat.id} {...cat}></Menu>
        })
      }
      
      </div>
      </div>
  );
}

export default App;
