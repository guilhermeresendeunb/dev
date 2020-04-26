import React from 'react'

function Botao(props){
    if(props.estado){
        return(
        <div>
            <i>Logout</i>
        </div>
        )
    }else{
        return(
        <div>
            <i>Login</i>
        </div>
        )
    }
    
    
}


/*class Botao extends React.Component{
    constructor(){
        super()
        this.state = {
            textoBotao: "Login"
        }
    }
    
    render(){
        return(
            <i> {this.state.textoBotao} </i>
        )
    }
}
*/
export default Botao