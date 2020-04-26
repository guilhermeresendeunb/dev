import React from 'react'

const firstName = "Bob";
const lastName = "Ziroll";

function Header (){
    
   return (
       <div>
            <header className="navbar">
                Header { `${firstName} ${lastName}` }
            </header>           
       </div>
   ) 
}

export default Header