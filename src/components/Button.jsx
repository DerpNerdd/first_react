import React from 'react'

const Button = ({count, onClick}) => {


  return (
    <button style={{border: "solid black 3px"}} onClick={onClick}>
        Total # of Clicks {count}
    </button>
)
}

export default Button