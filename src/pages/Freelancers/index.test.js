import { rest } from 'msw'
import { setupServer } from 'msw/node'
import { render } from '../../utils/test'
import { waitFor, screen, waitForElementToBeRemoved } from '@testing-library/react'
import Freelancers from './'


const freelancersMockedData = [
    {
       name: 'Harry Potter',
       job: 'Frontend wizard',
       picture: '',
    },
    {
       name: 'Hermione Granger',
       job: 'Fullstack witch',
       picture: '',
    },
 ]

const server = setupServer(
   // Specify the url that we want to "intercept"
   rest.get('http://localhost:8000/freelances', (req, res, ctx) => {
      // Here we can pass the mocked data into what is returned in json
         return res(ctx.json({ freelancersList: freelancersMockedData }))
   })
)

// Activate the API mock before the tests from server
beforeAll(() => server.listen())
// Reset anything we might have added in terms of duration for our tests before each test
afterEach(() => server.resetHandlers())
// Close the API mock once tests are over
afterAll(() => server.close())

test('Should render without crash', async () => {
    render(
          <Freelancers />
 )
    await waitForElementToBeRemoved(() => screen.queryByTestId('loader'))
    await waitFor(() => {
        expect(screen.getByText('Harry Potter')).toBeTruthy()
     })
     await waitFor(() => {
        expect(screen.getByText('Hermione Granger')).toBeTruthy()
     })
 })