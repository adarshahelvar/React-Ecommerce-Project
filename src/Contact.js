import styled from "styled-components";

const Contact = () => {
  const Wrapper = styled.section`
    padding: 9rem 0 5rem 0;
    text-align: center;

    .container {
      margin-top: 6rem;

      .contact-form {
        max-width: 50rem;
        margin: auto;

        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 3rem;

          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;

            &:hover {
              background-color: ${({ theme }) => theme.colors.white};
              border: 1px solid ${({ theme }) => theme.colors.btn};
              color: ${({ theme }) => theme.colors.btn};
              transform: scale(0.9);
            }
          }
        }
      }
    }
  `;

  return (
  <Wrapper>
    <h2 className="common-heading">Feel Free To Contact Us</h2>

    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.005735324401!2d77.59892544935808!3d12.907352519734872!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae157b02ec5755%3A0xfb70e303df865955!2sVega%20City%20Mall!5e0!3m2!1sen!2sin!4v1667135669121!5m2!1sen!2sin" width="95%" height="450" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
  
  <div className='container'>
    <div className='contact-form'>
      <form method='post' action='https://formspree.io/f/mqkjyjqp' className="contact-inputs">      {/*in action field we have a link which got from formspree to send messages  */}
        <input type='text' placeholder="User Name" name="Username" required autoComplete="off" />
        <input type='email' placeholder="Email" name="Email" required autoComplete="off" />
        <textarea name='Message' placeholder="Enter your message" required autoComplete="off" cols ="30" rows="10"></textarea>
        <input type='submit' value='send' />
      </form>
    </div>
  </div>
  
  </Wrapper>
  )
};

export default Contact;
