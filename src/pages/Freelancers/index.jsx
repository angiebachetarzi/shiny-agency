import Card from '../../components/Card'
import styled from 'styled-components'
import { Loader } from '../../utils/style/Atoms'
import colors from '../../utils/style/colors'
import { useFetch } from '../../utils/hooks'
import { Link } from 'react-router-dom'
import { useTheme } from '../../utils/hooks'

const CardsContainer = styled.div`
  display: grid;
  gap: 24px;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  justify-items: center;
`

const PageTitle = styled.h1`
  font-size: 30px;
  color: black;
  text-align: center;
  padding-bottom: 30px;
`

const PageSubtitle = styled.h2`
  font-size: 20px;
  color: ${colors.secondary};
  font-weight: 300;
  text-align: center;
  padding-bottom: 30px;
`
const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
`
const Freelancers = () => {
  const { data, loading, error } = useFetch(`http://localhost:8000/freelances`)
  const { theme } = useTheme()

  const { freelancersList } = data

  if (error) {
    return <span> An error occured while fetching the data</span>
  }
  return (
    <div>
      <PageTitle>Find your service provider</PageTitle>
      <PageSubtitle>
        Here at Shiny we bring together the best profiles for you.
      </PageSubtitle>
      {loading ? (
        <LoaderWrapper>
          <Loader data-testid="loader" />
        </LoaderWrapper>
      ) : (
        <CardsContainer>
          {freelancersList?.map((profile) => (
            <Link key={`freelance-${profile.id}`} to={`/profile/${profile.id}`}>
              <Card
                label={profile.job}
                title={profile.name}
                picture={profile.picture}
                theme={theme}
              />
            </Link>
          ))}
        </CardsContainer>
      )}
    </div>
  )
}

export default Freelancers
