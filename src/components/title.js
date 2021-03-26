import styled from "styled-components"

const Title = styled.h1`
  font-size: 4rem;
  margin: 1rem auto;
  text-align: center;
  color: white;
  background-color: #3f51b5;
  display: block;
  border-radius: 15px;
  width: 70%;
  font-weight: 800;
  /* box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23); */
  @media only screen and (max-width: 768px) {
    text-align: center;
    width: 80%;
    font-size: 3rem;
  }
  @media (max-width: 520px) {
    font-size: 2rem;
  }
`
export default Title
