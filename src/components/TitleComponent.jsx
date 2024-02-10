import React from 'react'

function TitleComponent({ text, css }) {
  return (
    <h3 className={`uppercase text-5xl sm:text-6xl 2xl:text-8xl text-center font-cera tracking-tighter ${css}`}>{text}</h3>
  )
}

export default TitleComponent