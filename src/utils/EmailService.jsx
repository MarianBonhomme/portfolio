import emailjs from 'emailjs-com';

emailjs.init("szTb5Nn2NrBUgf7rp");

const emailService = {
  sendEmail: async (formValues) => {
    const formData = {
      platform: 'Portfolio',
      name: formValues.name,
      email: formValues.mail,
      subject: '',
      message: formValues.message
    }
    try {
      const response = await emailjs.send("service_q4pssxq", "template_zpb6wpe", formData);
      return response;
    } catch (error) {
      throw error;
    }
  },
};

export default emailService;