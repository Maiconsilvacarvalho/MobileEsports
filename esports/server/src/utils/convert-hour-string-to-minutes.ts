// conversão de 18:00 para 1080
//hourString.split(':') 18:00 --> ["18", "00"] 
// .map(Number) --> [18, 00]

export function convertHoursStringToMinutes(hourString: string){
    const [hours, minutes] = hourString.split(':').map(Number)

    const minutesAmount = (hours * 60) + minutes;

    return minutesAmount;

}
