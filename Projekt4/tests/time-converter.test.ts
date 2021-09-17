import { timeConverter } from '../src/helpers/time-converter'

test('should return timestamp in proper date format', () => {
    const timeStamp = Date.now()

    expect(timeConverter.convert(timeStamp))
        .toEqual(new Date(timeStamp).toLocaleString())
})

test('should return default date if incorrect input provided', () => {
    const incorrectTimeStamp = -158.589545
    
    expect(timeConverter.convert(incorrectTimeStamp))
        .toEqual('1/1/1970, 12:59:59 AM')
})