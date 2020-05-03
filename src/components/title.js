import styled from "styled-components"

const Title = styled.h1`
  font-size: 3rem;
  margin: 2rem auto;
  padding: 0.5rem 1rem;
  text-align: center;
  background-color: #26FFF9;
  color: #2c26ff;
  display: block;
  border-radius: 7px;
  width:30%;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  @media only screen and (max-width: 768px) {
    text-align: center;
    width:80%;
  }
`
export default Title
