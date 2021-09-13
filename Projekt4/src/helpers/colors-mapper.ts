import { ColorsEnum } from "../enums/colors";

export const colorsMapper = {
    map: () => {
        const keys: number[] = Object.keys(ColorsEnum)
            .filter(isNumber)
            .map(key => +key)

        const colors: string[] = []
        keys.forEach(key => colors.push(ColorsEnum[key]))

        return colors
    }
}

function isNumber(value: string){
    return  isNaN(Number(value)) === false
}