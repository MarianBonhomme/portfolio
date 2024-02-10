import { useFormik } from 'formik';
import React, { useEffect, useState } from 'react';
import * as Yup from 'yup';
import emailService from '../utils/EmailService';
import ButtonComponent from './ButtonComponent';
import TitleComponent from './TitleComponent';

export default function ContactFormComponent() {
  const [submitMessage, setSubmitMessage] = useState(null);

  const formik = useFormik({
    initialValues: {
      name: '',
      mail: '',
      message: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Your beautiful name is required'),
      mail: Yup.string().email('Invalid email format').required('Email is required'),
      message: Yup.string().min(30, 'Your message is feeling shy. Encourage it with more characters').required('Message is required'),
    }),
    onSubmit: async (values, { resetForm }) => {
      try {
        await emailService.sendEmail(values);
        setSubmitMessage('Message sent successfully!');
        resetForm();
      } catch (error) {
        setSubmitMessage('Error sending message');
      }
    },
  });

  useEffect(() => {
    let timeoutId;

    if (submitMessage) {
      timeoutId = setTimeout(() => {
        setSubmitMessage(null);
      }, 5000);
    }

    return () => clearTimeout(timeoutId);
  }, [submitMessage]);

  return (
    <>
      <form onSubmit={formik.handleSubmit} className='w-full max-w-xl 2xl:max-w-4xl flex flex-col text-sm box-shadow p-10'>
        <TitleComponent text="contact form" css="mb-10" />
  
        <div className='mb-5'>
          <input
            type="text"
            id="name"
            name="name"
            placeholder='Your Name'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            onFocus={() => formik.setFieldTouched('name', false)}
            value={formik.values.name}
            className='w-full bg-transparent border-white border-b focus-visible:outline-none py-3 mb-1'
          />
          {formik.touched.name && formik.errors.name && !formik.isSubmitting ? (
            <div className='text-xxs'>{formik.errors.name}</div>
          ) : (
            <div className='text-xxs'>&nbsp;</div>
          )}
        </div>
  
        <div className='mb-5'>
          <input
            type="email"
            id="mail"
            name="mail"
            placeholder='Your Mail'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            onFocus={() => formik.setFieldTouched('mail', false)}
            value={formik.values.mail}
            className='w-full bg-transparent border-white border-b focus-visible:outline-none py-3 mb-1'
          />
          {formik.touched.mail && formik.errors.mail && !formik.isSubmitting ? (
            <div className='text-xxs'>{formik.errors.mail}</div>
          ) : (
            <div className='text-xxs'>&nbsp;</div>
          )}
        </div>
  
        <div className='mb-10'>
          <textarea
            id="message"
            name="message"
            placeholder='Your Message'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            onFocus={() => formik.setFieldTouched('message', false)}
            value={formik.values.message}
            rows={1}
            className='w-full bg-transparent border-white border-b focus-visible:outline-none py-3 '
          />
          {formik.touched.message && formik.errors.message && !formik.isSubmitting ? (
            <div className='text-xxs'>{formik.errors.message}</div>
          ) : (
            <div className='text-xxs'>&nbsp;</div>
          )}
        </div>
  
        <ButtonComponent text="send message" clicked={() => formik.handleSubmit} />
      </form>
  
      {submitMessage && (
        <div className="absolute top-5 left-1/2 -translate-x-1/2 bg-dark box-shadow text-white px-10 py-5 text-center">
          {submitMessage}
        </div>
      )}
    </>
  )
}