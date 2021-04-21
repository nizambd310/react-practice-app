import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Routine from './components/Routine';
import Data from './data.json';
import Car from './components/Car';

//console.log(Data);

let items = [];
for(let item = 0; item < Data.length; ++item) {
  items.push(<Routine cardTitle={Data[item].title} cardContent={Data[item].content} key = {item}/>);
}


ReactDOM.render(
  <div>
    
    {items}
    <Car />
    
  </div>,
  document.getElementById('root')
);


