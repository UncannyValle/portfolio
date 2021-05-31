import styled from "styled-components"

const Title = styled.h1`
  margin: 1rem auto;
  text-align: center;
  display: block;
  width: 70%;
  font-weight: 800;
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
