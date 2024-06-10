import Results, { formatJobList, generateQueryParams } from './'
import { rest } from 'msw'
import { setupServer } from 'msw/node'
import { render } from '../../utils/test'
import { waitForElementToBeRemoved, screen } from '@testing-library/react'

const resultsMockedData = [
    {"title":"backend","description":"Le backend consiste en la partie émergée de l'iceberg : ce qui permet de faire tourner une application mais qui n'est pas visible par l'utilisateur"},{"title":"design","description":"La personne en charge du design va devoir préparer les maquettes du site"}
 ]

const server = setupServer(
    // Specify the url that we want to "intercept"
    rest.get('http://localhost:8000/results', (req, res, ctx) => {
       // Here we can pass the mocked data into what is returned in json
          return res(ctx.json({ resultsData: resultsMockedData }))
    })
)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

describe('The Results component', () => {
    it('should display the results after the data is loaded', async () => {
      render(<Results />)
      await waitForElementToBeRemoved(() => screen.queryByTestId('loader'))
      const jobTitleElements = screen.getAllByTestId('job-title')
      expect(jobTitleElements[0].textContent).toBe('backend')
      expect(jobTitleElements.length).toBe(2)
      const jobDescriptionElements = screen.getAllByTestId('job-description')
      expect(jobDescriptionElements[1].textContent).toBe(
        resultsMockedData[1].description
      )
      expect(jobDescriptionElements.length).toBe(2)
    })
  })

describe('The formatJobList function', () => {
   it('should add a comma to a word', () => {
      const expectedState = 'item2,'
      expect(formatJobList('item2', 3, 1)).toEqual(expectedState)
   })
   
   it('should not add a comma to the last element of the list', () => {
      const expectedState = 'item3'
      expect(formatJobList('item3', 3, 2)).toEqual(expectedState)
   })
})

describe('generateQueryParams function', () => {
    it('should generate correct format for one answer', () => {
        expect(generateQueryParams({1: 'answer1'})).toEqual('a1=answer1')
    })
    it('should concat multiple answers', () => {
        expect(generateQueryParams({1: 'answer1', 2: 'answer2'})).toEqual('a1=answer1&a2=answer2')
    })
})