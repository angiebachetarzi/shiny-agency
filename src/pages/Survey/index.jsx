import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
const Survey = () => {
  const { qNumParam } = useParams()
  const [questionNumber, setQuestionNumber] = useState(qNumParam)
  return (
    <div>
      <h1>Survey 🧮</h1>
      <nav>
        {questionNumber > 1 && (
          <Link
            to={`/survey/${questionNumber - 1}`}
            onClick={() => {
              setQuestionNumber(questionNumber - 1)
            }}
          >
            Back
          </Link>
        )}
        {questionNumber < 10 ? (
          <Link
            to={`/survey/${parseInt(questionNumber) + 1}`}
            onClick={() => {
              setQuestionNumber(parseInt(questionNumber) + 1)
              console.log(parseInt(questionNumber))
            }}
          >
            Next
          </Link>
        ) : (
          <Link to="/results">Results</Link>
        )}
      </nav>
    </div>
  )
}

export default Survey
