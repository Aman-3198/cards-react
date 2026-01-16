import ApiDemo from "./components/api-demo/ApiDemo";
import { useState }  from "react";
function App(){
  
  let [product , setProduct]=useState({
    pid:100, name:"TV", mrp:500000
  })
  let [final,setFinal]=useState(product.mrp)

  function discount(x){
    let y=product.mrp-((product.mrp*x)/100)
    setFinal(y)
  }

  return(
    <div>
      <ApiDemo/>
      <div className="container">
        
          <p>product id : {product.pid}</p>
          <p>product name : {product.name}</p>
          <p>mrp : {product.mrp}</p>
          <button onClick={()=>discount(15)}> 15% </button>
          <button onClick={()=>discount(20)}> 20% </button>
          <button onClick={()=>discount(25)}> 25% </button>
          <p>discounted price : {final}</p>
        
      </div>
    </div>
  )
  
}


export default App;