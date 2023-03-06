import React from 'react'
import styled from 'styled-components'
import colors from '../../utils/style/colors'
import homeIllustration from '../../assets/homeIllustration.svg'
import { StyledLink } from '../../components/Header'

const StyledSection = styled.div`
  width: 1313px;
  height: 824px;
  background: ${colors.backgroundLight};
  margin: auto;
`

const StyledHeading = styled.h1`
  font-size: 50px;
  line-height: 80.25px;
  position: absolute;
  left: 98px;
  top: 176px;
`

const StyledIllustration = styled.img`
  width: 541px;
  height: 506px;
  position: absolute;
  left: 695px;
  top: 139px;
`

const Home = () => {
  return (
    <StyledSection>
      <StyledHeading>
        Identify your needs
        <br /> and we'll take care of
        <br /> the rest along with our
        <br /> talented professionals
      </StyledHeading>
      <StyledLink to="/survey/1" $isFullLink $isHomeBtn>
        Take the survey
      </StyledLink>
      <StyledIllustration src={homeIllustration} alt="card illustration" />
    </StyledSection>
  )
}

export default Home
