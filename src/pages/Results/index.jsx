import { useContext } from 'react'
import { SurveyContext } from '../../utils/context'
import { useFetch, useTheme } from '../../utils/hooks/index'
import styled from 'styled-components'
import colors from '../../utils/style/colors'
import { Loader } from '../../utils/style/Atoms'
import { StyledLink } from '../../components/Header/index'

const ResultsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 60px 90px;
  padding: 30px;
  background-color: ${({ theme }) =>
    theme === 'light' ? colors.backgroundLight : colors.backgroundDark};
`

const ResultsTitle = styled.h2`
  color: ${({ theme }) => (theme === 'light' ? '#000000' : '#ffffff')};
  font-weight: bold;
  font-size: 28px;
  max-width: 60%;
  text-align: center;
  & > span {
    padding-left: 10px;
  }
`

const DescriptionWrapper = styled.div`
  padding: 60px;
`

const JobTitle = styled.span`
  color: ${({ theme }) =>
    theme === 'light' ? colors.primary : colors.backgroundLight};
  text-transform: capitalize;
`

const JobDescription = styled.div`
  font-size: 18px;
  & > p {
    color: ${({ theme }) => (theme === 'light' ? colors.secondary : '#ffffff')};
    margin-block-start: 5px;
  }
  & > span {
    font-size: 20px;
  }
`

const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
`

export const formatJobList = (title, listLength, index) => {
  if (index === listLength - 1) {
    return title
  }
  return `${title},`
}

export const generateQueryParams = (answersObj) => {
  const answersTab = Object.keys(answersObj).map((key) => answersObj[key])
  const res = answersTab.reduce(
    (acc, answer, index) => acc + `a${index + 1}=${answer}&`,
    '',
  )
  return res.slice(0, -1)
}

const Results = () => {
  const { answers } = useContext(SurveyContext)
  const { theme } = useTheme()
  const { data, loading, error } = useFetch(
    `http://localhost:8000/results?${generateQueryParams(answers)}`,
  )
  const { resultsData } = data

  if (error) {
    return <span> An error occured while fetching the data</span>
  }
  return loading ? (
    <LoaderWrapper>
      <Loader />
    </LoaderWrapper>
  ) : (
    <ResultsContainer theme={theme}>
      <ResultsTitle theme={theme}>
        The skills you need:
        {resultsData &&
          resultsData.map((result, index) => (
            <JobTitle
              key={`result-title-${index}-${result.title}`}
              theme={theme}
            >
              {formatJobList(result.title, resultsData.length, index)}
            </JobTitle>
          ))}
      </ResultsTitle>
      <StyledLink $isFullLink to="/freelancers">
        Take a look at our freelancer profiles
      </StyledLink>
      <DescriptionWrapper>
        {resultsData &&
          resultsData.map((result, index) => (
            <JobDescription
              theme={theme}
              key={`result-detail-${index}-${result.title}`}
            >
              <JobTitle theme={theme}>{result.title}</JobTitle>
              <p>{result.description}</p>
            </JobDescription>
          ))}
      </DescriptionWrapper>
    </ResultsContainer>
  )
}

export default Results
