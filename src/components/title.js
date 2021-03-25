import styled from "styled-components"

const Title = styled.h1`
  font-size: 3rem;
  margin: 0 auto;
  padding: 0.5rem 1rem;
  text-align: center;
  color: black;
  display: block;
  border-radius: 7px;
  width: 50%;
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
