import emailjs from 'emailjs-com';

const sendEmail = () => {
  const currentDateTime = new Date(Date.now());
  const formattedDate = currentDateTime.toLocaleDateString();
  const formattedTime = currentDateTime.toLocaleTimeString();

  const templateParams = {
    to_name: 'HM Shafin',
    message: `I will go on a date with you!!\nOur journey begins on: ${formattedDate} - ${formattedTime}`,
  };

  emailjs.send('service_p8m5ygy', 'template_jtn0j89', templateParams, 'Zs3bx5jjiXfkPAgoA')
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
    }, (err) => {
      console.error('FAILED...', err);
    });
};

export default sendEmail;

