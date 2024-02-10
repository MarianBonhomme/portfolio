import React from 'react'
import TitleComponent from './TitleComponent'

export default function ContactDataComponent() {
  return (
    <div className='max-w-xl 2xl:max-w-4xl text-center'>
      <TitleComponent text="contact" css="mb-10" />
      <p className='text-sm 2xl:text-xl leading-loose mb-10'>I am at your disposal for any further questions or inquiries. I would be delighted to respond as promptly as possible. Looking forward to hearing from you!</p>
      <div className='mb-5'>
        <p className='text-xl 2xl:text-3xl font-cera mb-1'>Phone</p>
        <p className='text-xs 2xl:text-base select-text'>06 33 63 66 00</p>
      </div>
      <div className='mb-5'>
        <p className='text-xl 2xl:text-3xl font-cera mb-1'>Email</p>
        <p className='text-xs 2xl:text-base select-text'>marianbonhomme.gmail.com</p>
      </div>
      <div className='mb-5'>
        <p className='text-xl 2xl:text-3xl font-cera mb-1'>Address</p>
        <p className='text-xs 2xl:text-base select-text'>Montpellier</p>
      </div>
    </div>
  )
}