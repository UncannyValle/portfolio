import styled from "styled-components"

const SectionWrapper = styled.div`
  background-color: #c5cae9;
  color: white;
  max-width: 100vw;
  height: auto;
  padding: 1em;
  margin: 0 auto 5rem auto;
  text-align: center;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);

  @media only screen and (max-width: 768px) {
    align-items: center;
  }
`
export default SectionWrapper
