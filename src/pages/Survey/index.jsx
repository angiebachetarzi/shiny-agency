import { useState, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import colors from '../../utils/style/colors'
import { Loader } from '../../utils/style/Atoms'
import { SurveyContext } from '../../utils/context'
import { useFetch } from '../../utils/hooks'

const SurveyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const QuestionTitle = styled.h2`
  text-decoration: underline;
  text-decoration-color: ${colors.primary};
`

const QuestionContent = styled.span`
  margin: 30px;
`

const LinkWrapper = styled.div`
  padding-top: 30px;
  & a {
    color: black;
  }
  & a:first-of-type {
    margin-right: 20px;
  }
`

const ReplyBox = styled.button`
  border: none;
  height: 100px;
  width: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${colors.backgroundLight};
  border-radius: 30px;
  cursor: pointer;
  box-shadow: ${(props) =>
    props.isSelected ? `0px 0px 0px 2px ${colors.primary} inset` : 'none'};
  &:first-child {
    margin-right: 15px;
  }
  &:last-of-type {
    margin-left: 15px;
  }
`

const ReplyWrapper = styled.div`
  display: flex;
  flex-direction: row;
`

const Survey = () => {
  const { qNumParam } = useParams()
  const [questionNumber, setQuestionNumber] = useState(qNumParam)
  const questionNumberInt = parseInt(questionNumber)
  const { data, loading, error } = useFetch(`http://localhost:8000/survey`)

  const { surveyData } = data
  const { answers, saveAnswers } = useContext(SurveyContext)

  function saveReply(answer) {
    saveAnswers({ [questionNumber]: answer })
  }

  if (error) {
    return <span> An error occured while fetching the data</span>
  }

  return (
    <SurveyContainer>
      <QuestionTitle>Question {questionNumber}</QuestionTitle>
      {loading ? (
        <Loader />
      ) : (
        <QuestionContent>
          {surveyData && surveyData[questionNumber]}
        </QuestionContent>
      )}
      <ReplyWrapper>
        <ReplyBox
          onClick={() => saveReply(true)}
          isSelected={answers[questionNumber] === true}
        >
          Yes
        </ReplyBox>
        <ReplyBox
          onClick={() => saveReply(false)}
          isSelected={answers[questionNumber] === false}
        >
          No
        </ReplyBox>
      </ReplyWrapper>
      <LinkWrapper>
        {questionNumberInt > 1 && (
          <Link
            to={`/survey/${questionNumberInt - 1}`}
            onClick={() => {
              setQuestionNumber(questionNumberInt - 1)
            }}
          >
            Back
          </Link>
        )}
        {surveyData && surveyData[questionNumberInt + 1] ? (
          <Link
            to={`/survey/${questionNumberInt + 1}`}
            onClick={() => {
              setQuestionNumber(questionNumberInt + 1)
            }}
          >
            Next
          </Link>
        ) : (
          <Link to="/results">Results</Link>
        )}
      </LinkWrapper>
    </SurveyContainer>
  )
}

export default Survey
