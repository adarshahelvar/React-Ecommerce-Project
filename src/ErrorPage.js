import React from 'react'
import styled from 'styled-components'
import { Button } from './styles/Button'
import { NavLink } from 'react-router-dom'
const ErrorPage = () => {
  return (
    <Wrapper>
      <div className='container'>
        <h2>404</h2>
        <h2>OH HO! You're lost...</h2>
        <p>The page you are looking for does not exist. How you got here is a mystery. 
          But you can click the button below to go back to the homepage.</p>
          <NavLink to='/'>
          <Button >Go Back To Home</Button>
          </NavLink>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
 .container {
    padding: 9rem 0;
    text-align: center;
    h2 {
      font-size: 10rem;
    }
    h3 {
      font-size: 4.2rem;
    }
    p {
      margin: 2rem 0;
    }
  }
`;

export default ErrorPage