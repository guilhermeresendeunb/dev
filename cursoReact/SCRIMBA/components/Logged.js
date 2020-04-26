import React from 'react'

function Logged(props) {

    return (
        <div>
            {props.logado ?
                <h1> Vc está logado </h1> :
                <h1> Vc não está logado </h1>

            }
        </div>
    )

}

export default Logged