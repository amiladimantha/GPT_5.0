import React, {useState, useRef} from 'react';
import './header.css';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';
import emailjs from '@emailjs/browser';

const Header = () => {

  const formRef = useRef();
  const [form, setForm] = useState({
    email: '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.email) {
      alert('Please enter your email address.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(form.email)) {
    alert('Please enter a valid email address.');
    return;
  }
    setLoading(true);

    // sign up on emailjs.com (select the gmail service and connect your account).
    //click on create a new template then click on save.
    emailjs
      .send(
        'service_et42o9g', // paste your ServiceID here (you'll get one when your service is created).
        'template_eusm1zq', // paste your TemplateID here (you'll find it under email templates).
        {
          from_name: form.name,
          to_name: 'Amila Dimantha', // put your name here.
          from_email: form.email,
          to_email: 'amiladimantha123@gmail.com', //put your email here.
          message: form.message,
        },
        'ReI6lkAzmx4u48TwG' //paste your Public Key here. You'll get it in your profile section.
      )
      .then(
        () => {
          setLoading(false);
          alert('Thank you. I will get back to you as soon as possible.');

          setForm({
            name: '',
            email: '',
            message: '',
          });
        },
        (error) => {
          setLoading(false);
          console.log(error);
          alert('Something went wrong. Please try again.');
        }
      );
  };
  
  return (
    <div className='gpt3__header section__padding' id='home'>
      <div className='gpt3__header-content'>
        <h1 className='gradient__text'>Create something extraordinary using OpenAI's GPT-5.</h1>
        <p>Discover the potential of OpenAI's GPT-5 as we embark on an innovative journey to revolutionize industries and deliver exceptional user experiences. Join us in harnessing the power of GPT-5 to build a future filled with remarkable achievements.</p>
        <div className='gpt3__header-content__input'>
         <form ref={formRef}
          onSubmit={handleSubmit}>
            <input type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder='Type your Email here'></input>
            <button type='submit'>{loading ? 'Sending ' : 'Send Us '} 
            Your Mail</button>
          </form>
        </div>

        <div className='gpt3__header-content__people'>
          <img src={people} alt='people'/>
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div>
      </div>

      <div className='gpt3__header-image'>
          <img src={ai} alt='ai' />
        </div>
      <div>
        
      </div>
      
    </div>
  )
}

export default Header