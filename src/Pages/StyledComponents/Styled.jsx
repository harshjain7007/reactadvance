// import React from 'react'
// import { GlobalStyle } from './GlobalStyle'

// const Styled = () => {
//   return (
//     <div>
//     <GlobalStyle />
//     Styled
//     </div>
//   )
// }

// export default Styled




import React from 'react'
import {StyledButton, StyledDiv, AnothorBtn} from "./GlobalStyle"

const Styled = () => {
  return (
    <>
          <h1>Styled Components Example</h1>
          <StyledButton>Click me</StyledButton>
          <StyledDiv>Div Content</StyledDiv>
          <AnothorBtn>Second button</AnothorBtn>
    </>
  )
}

export default Styled