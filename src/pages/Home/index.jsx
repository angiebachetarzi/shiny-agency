import { StyledLink } from '../../components/Header'
import styled from 'styled-components'
import homeIllustration from '../../assets/home-illustration.svg'
import { WrapperRow } from '../../utils/style/Wrapper'

const LeftCol = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
  ${StyledLink} {
    max-width: 150px;
  }
`

const StyledTitle = styled.h1`
  max-width: 60%;
  line-height: 50px;
`

const Illustration = styled.img`
  flex: 1;
`

function Home() {
  return (
    <WrapperRow>
      <LeftCol>
        <StyledTitle>
          Identify your needs and we'll take care of the rest along with our
          talented professionals{' '}
        </StyledTitle>
        <StyledLink to="/survey/1" $isFullLink>
          Take the survey
        </StyledLink>
      </LeftCol>
      <Illustration src={homeIllustration} />
    </WrapperRow>
  )
}

export default Home
