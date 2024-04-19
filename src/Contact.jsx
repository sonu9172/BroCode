import React from 'react'
import styled from 'styled-components';
import "./Contact";

const Contact = () => {
    const Wrapper = styled.section`

    padding: 5rem 0 5rem 0;
    .common-heading{
        padding-left:10vh;
        color:black;
        text-algin:center;
        justfiy-content:center;
    }

    iframe {
        width: 100%;

    }


    .container {
        margin-top:6rem;
        text-align:center;
    }
    .submit {
        margin-top:10px;
        border:none;
        background-color:blue;
        color:white;
        border-radius:3px;
        padding:5px;
        width:10vh;
        height:6vh;
        font-weight:600;
    }

    input {
        margin-top:10px;
        max-width:16rem;
        padding: 8px 2rem;
    }
    #message{
        font-family: "Sofia", sans-serif;
        margin-top:10px;

    }
   

    `;

  return (
   <Wrapper>
    <h2 className="common-heading">Feel Free To Contact</h2>

    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3766.890090704909!2d72.85326897466919!3d19.243621246689987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b13affffffff%3A0xfd071f1d3a7844ef!2sSt.%20Francis%20Institute%20of%20Technology!5e0!3m2!1sen!2sin!4v1711024128960!5m2!1sen!2sin" width="100%" height="450" style={{border:0}} allowFullScreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    


    <div className="container">
        <div className="contact-form">
            <form action="https://formspree.io/f/xqkrdwzz" method='POST'>
                <label htmlFor="">Username:  </label> 
                <input type="text"
                        name='username'
                        placeholder='username'
                        autoComplete='off'
                        required
                /> <br />
                <label htmlFor="">Email:  </label>
                <input type="email"
                        name='Email'
                        placeholder='Email'
                        autoComplete='off'
                        required
                /> <br />
                <label htmlFor="">Message:  </label>
                <textarea name="message" id="message" cols="30" rows="6" autoComplete='off' required></textarea> <br /> 
                <input className='submit' type="submit" value="Send" />
            </form>
        </div>
    </div>

   </Wrapper>
   
  )
}

export default Contact
