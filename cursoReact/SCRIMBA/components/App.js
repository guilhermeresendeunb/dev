/**
 * Challenge: Wire up the partially-finished travel form so that it works!
 * Remember to use the concept of controlled forms
 * https://reactjs.org/docs/forms.html
 * 
 * All information should be populating the text below the form in real-time
 * as you're filling it out
 * 
 * This exercise is adapted from the V School curriculum on vanilla JS forms:
 * https://coursework.vschool.io/travel-form/
 * 
 * All of our challenges and learning resources are open for the public
 * to play around with and learn from at https://coursework.vschool.io
 */
import React from 'react'
class App extends React.Component {
    constructor() {
        super()
        this.state = {
            firstName: "",
            lastName: "",
            age: "",
            gender: "",
            country: "",
            lactose: false,
            vegan: false
            
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event){
        const {name, value, type, checked} = event.target

        type == 'checkbox' ? this.setState({[name] : [checked]}) : this.setState({[name] : value})

    }
    
    render() {
        return (
            <main>
                <form>
                    <input type="text" name="firstName" value={this.state.firstName} placeholder="First Name" onChange={this.handleChange} /><br />
                    <input type="text" name="lastName" value={this.state.lastName} placeholder="Last Name" onChange={this.handleChange} /><br />
                    <input type="text" name="age" value={this.state.age} placeholder="Age" onChange={this.handleChange} /><br />
                    <label>male</label>
                    <input type="radio" name="gender" value="male" checked={this.state.gender == 'male'} onChange={this.handleChange} /><br />
                    <label>female</label>
                    <input type="radio" name="gender" value="female" checked={this.state.gender == 'female'} onChange={this.handleChange} />
                    <br />
                    <select type="select" name="country" value={this.state.country} onChange={this.handleChange} >
                        <option value="" disabled>--Please select one option--</option>
                        <option value="Peru" >Peru</option>
                        <option value="Colombia">Colombia</option>
                        <option value="Bolivia">Bolivia</option>
                    </select>
                    <br />                    
                    <input type="checkbox" name="lactose" checked={this.state.lactose} onChange={this.handleChange} />
                    <label>Lactose</label>
                    <br />
                    
                    <button>Submit</button>
                </form>
                <hr />
                <h2>Entered information:</h2>
                <p>Your name: {this.state.firstName} {this.state.lastName}</p>
                <p>Your age: {this.state.age}</p>
                <p>Your gender: {this.state.gender}</p>
                <p>Your destination: {this.state.country}</p>
                <p>
                    lactose : {this.state.lactose ? "sim" : "nao"}
                </p>
            </main>
        )
    }
}

export default App





































/* import React from "react"

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            firstName: "",
            lastName: "",
            textoLivre: "",
            isFriendly: false,
            gender: "",
            favColor: "blue"
        }
        this.handleChange = this.handleChange.bind(this)
    }


    handleChange(event) {
        const { name, value, type, checked } = event.target
     
        type == 'checkbox' ? this.setState({[name]:checked}) : this.setState({[name]:value})
       
    }

    render() {
        return (
            <form>
                <input type="text" name="firstName" placeholder="First name" value={this.state.firstName} onChange={this.handleChange} />
                <input type="text" name="lastName" placeholder="Last name" value={this.state.lastName} onChange={this.handleChange} />                
                <textarea name="textoLivre" value ={this.state.textoLivre} placeholder="Digite aqui" onChange={this.handleChange} /> <br />
                <input type="checkbox" name="isFriendly" checked = {this.state.isFriendly} onChange={this.handleChange} /> <br />
                <input type="radio" name="gender" value = "male" checked={this.state.gender ==="male"} onChange={this.handleChange} /><br />
                <input type="radio" name="gender" value = "female" checked={this.state.gender ==="female"} onChange={this.handleChange} /><br />
                <select name="favColor" value={this.state.favColor} onChange={this.handleChange}>
                    <option value="" selected>select</option>
                    <option value="blue">blue</option>
                    <option value="green">green</option>
                    <option value="yellow">yellow</option>
                    
                    
                </select>


                <h1> {this.state.firstName} {this.state.lastName} </h1> <br />
                <h1> {this.state.textoLivre} </h1>
                <h1> {this.state.gender} </h1>
            </form>
        )
    }
}
export default App
 */