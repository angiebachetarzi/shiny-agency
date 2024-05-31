import { formatJobList, generateQueryParams } from './'

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