import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import colors from '../../utils/style/colors'
import darklogo from '../../assets/darklogo.png'

const StyledLink = styled(Link)`
  @import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@700&display=swap');
  font-family: 'Comfortaa';
  font-weight: 700;
  padding: 15px;
  color: #8186a0;
  text-decoration: none;
  font-size: 20px;
  margin-right: 24px;
  ${(props) =>
    props.$isFullLink &&
    `color: white; border-radius: 30px; background-color: ${colors.primary};`}
`

const StyledImage = styled.img`
  width: 187px;
  height: 70px;
`

const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Header = () => {
  return (
    <StyledNav>
      <StyledImage src={darklogo} alt="company logo" />
      <div>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/freelancers">Profiles</StyledLink>
        <StyledLink to="/survey/1" $isFullLink>
          Take the survey
        </StyledLink>
      </div>
    </StyledNav>
  )
}

export default Header
