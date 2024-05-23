import { Link } from 'react-router-dom'
import styled from 'styled-components'
import colors from '../../utils/style/colors'
import darkLogo from '../../assets/dark-logo.png'

export const StyledLink = styled(Link)`
  padding: 5px;
  margin: 15px;
  color: #8186a0;
  text-decoration: none;
  font-size: 18px;
  ${(props) =>
    props.$isFullLink &&
    `color: white; padding-left: 20px; padding-right: 20px; border-radius: 30px; background-color: ${colors.primary};`}
`
const StyledLogo = styled.img`
  margin: 1em;
  height: 70px;
`
const StyledNav = styled.nav`
  float: right;
  padding: 2em;
  margin: 1em;
`
const Header = () => {
  return (
    <>
      <Link to="/">
        <StyledLogo src={darkLogo} alt="logo-dark" />
      </Link>

      <StyledNav>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/freelancers">Profiles</StyledLink>
        <StyledLink to="/survey/1" $isFullLink>
          Take the survey
        </StyledLink>
      </StyledNav>
    </>
  )
}

export default Header
