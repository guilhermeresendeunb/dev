import React from 'react'

function ContactCard(props){
    return(
        <div>
            <img src={props.contact.imgUrl} />
            <h3>{props.contact.Name} </h3>
            <p>Phone: {props.contact.Phone}</p>
            <p>Email: {props.contact.Email}</p> 
        </div>
    )    
}

export default ContactCard