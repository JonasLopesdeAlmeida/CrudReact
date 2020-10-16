import './Main.css'
import React from 'react'
import Header from './Header'


export default props =>

//nesse projeto eu vou usar o React.Fragment para envolver os elemetos jsx que nos outros
//eu envolvia apenas com uma div.
<React.Fragment>

<Header {...props}/>
<main className="content container-fluid">

 <div className="p-3 mt-3">
  
  {props.children}
 </div>

</main>


</React.Fragment>