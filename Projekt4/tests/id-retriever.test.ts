import { idRetriever } from '../src/helpers/id-retriever'

test('should return id of test object', () => {
    const testId = 'note-test'
    expect(idRetriever.retrieve(testId)).toEqual('test')
})