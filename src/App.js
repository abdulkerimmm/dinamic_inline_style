import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [data,setData]=useState([
    {
      id:1,
      name:"besiktas",
      rate:35,
      count:200,
      color:"linear-gradient(90deg,rgba(255,255,255,1) 18%,rgba(0,0,0,1) 100%,rgba(255,255,255,1) 100%)"

    },
    {
      id:2,
      name:"fenerbahce",
      rate:30,
      count: 170,
      color:"linear-gradient(90deg,rgba(216,217,62,0.9808298319327731) 18%,rgba(18,51,209,1) 100%,rgba(255,255,255,1) 100%)"

    },
    {
      id:3,
      name:"Galatasaray",
      rate:25,
      count:100,
      color:"linear-gradient(90deg,rgba(217,62,62,0.9808298319327731) 18%,rgba(211,230,16,1) 100%,rgba(255,255,255,1) 100%)"

    },
    {
      id:4,
      name:"trabzonspor",
      rate:10,
      count:50,
      color:"linear-gradient(90deg,rgba(62,143,217,0.9808298319327731) 18%,rgba(170,16,230,1) 100%,rgba(255,255,255,1) 100%)"

    }
  ])

  return (
    <div className="App">
       {data.map((item,index)=>{      //1- data map olustururken parantezlere dikkat
         return(
           <div key={index} style={{  // style uygulanirken iki tane {} Parantez biri style icin diyeri react oldugunu belirtmek icin stateden alindigi belli olsun diye
             height:item.count+"px",
             width: item.rate+"%",
             background :item.color
           }} >

              {item.name} 
              <p>  
               oy veren kisi sayisi:{item.count}
              </p> 
              
           </div>
         )
       })}
    </div>
  );
}

export default App;
