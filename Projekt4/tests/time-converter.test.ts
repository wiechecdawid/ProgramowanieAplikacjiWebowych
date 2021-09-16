import { timeConverter } from '../src/helpers/time-converter'

test('should return timestamp in proper date format', () => {
    const timeStamp = Date.now()
    
    expect(timeConverter.convert(timeStamp))
        .toEqual(new Date(timeStamp).toLocaleString())
})