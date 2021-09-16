import { timeConverter } from '../src/helpers/time-converter'

test('should return timestamp in proper date format', () => {
    const timeStamp = Date.now()

    expect(timeConverter.convert(timeStamp))
        .toEqual(new Date(timeStamp).toLocaleString())
})

test('should return message of invalid date', () => {
    const incorrectTimeStamp = 20000000000000000
    
    expect(timeConverter.convert(incorrectTimeStamp))
        .toEqual(new Date(incorrectTimeStamp).toLocaleString())
})