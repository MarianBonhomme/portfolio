import React from 'react'

function ButtonComponent({ text, css, clicked }) {
  return (
    <button onClick={clicked} className={`2xl:text-lg max-w-fit self-center hover:bg-dark uppercase font-cera box-shadow px-10 py-4 mx-auto ${css} transition duration-200 ease-in-out`}>{text}</button>
  )
}

export default ButtonComponent