import React from 'react'
import styled from 'styled-components'
import colors from '../../utils/style/colors'
import homeIllustration from '../../assets/homeIllustration.svg'

const StyledHome = styled.div`
  width: 1313px;
  height: 824px;
  background: ${colors.backgroundLight};
  margin: auto;
`

const Home = () => {
  return (
    <StyledHome>
      <h1>Identify your needs<br/> and we'll take care of<br/> the rest along with our<br/> talented professionals</h1>
      <img src={homeIllustration} alt="card illustration"/>
    </StyledHome>
  )
}

export default Home
