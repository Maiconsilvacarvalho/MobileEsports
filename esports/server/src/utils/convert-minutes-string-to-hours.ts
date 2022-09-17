// conversão de 1080 para 18:00

//hourString.split(':') 18:00 --> ["18", "00"] 
// .map(Number) --> [18, 00]

export function convertHoursMinutesToHoursString(minutesAmount: number){
    const hours = Math.floor(minutesAmount / 60);
    const minutes = minutesAmount % 60 

    return `${String(hours).padStart(2 ,'0')}:${String(minutes).padStart(2 ,'0')}`; //interpolação
}
