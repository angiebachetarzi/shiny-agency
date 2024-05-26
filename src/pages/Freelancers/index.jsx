import { useState, useEffect } from 'react'
import Card from '../../components/Card'
import styled from 'styled-components'
import { Loader } from '../../utils/style/Atoms'
import colors from '../../utils/style/colors'

const CardsContainer = styled.div`
  display: grid;
  gap: 24px;
  grid-template-rows: 350px 350px;
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
  const [freelancers, setFreelancers] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  useEffect(() => {
    setLoading(true)
    const fetchData = async () => {
      try {
        const rawData = await fetch(`http://localhost:8000/freelances`)
        const { freelancersList } = await rawData.json()
        setFreelancers(freelancersList)
      } catch (err) {
        console.log(err)
        setError(true)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])
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
          <Loader />
        </LoaderWrapper>
      ) : (
        <CardsContainer>
          {freelancers.map((profile, index) => (
            <Card
              key={`${profile.name}-${index}`}
              label={profile.job}
              title={profile.name}
              picture={profile.picture}
            />
          ))}
        </CardsContainer>
      )}
    </div>
  )
}

export default Freelancers
