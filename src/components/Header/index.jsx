import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import colors from '../../utils/style/colors'
import darklogo from '../../assets/darklogo.png'

const StyledLink = styled(Link)`
  padding: 15px;
  color: #8186a0;
  text-decoration: none;
  font-size: 20px;
  ${(props) =>
    props.$isFullLink &&
    `color: white; border-radius: 30px; background-color: ${colors.primary};`}
`

const StyledImage = styled.img`
  width: 187px;
  height: 70px;
`

const Header = () => {
  return (
    <nav>
      <StyledImage src={darklogo} alt="company logo" />
      <StyledLink to="/">Home</StyledLink>
      <StyledLink to="/freelancers">Profiles</StyledLink>
      <StyledLink to="/survey/1" $isFullLink>
        Survey
      </StyledLink>
    </nav>
  )
}

export default Header
