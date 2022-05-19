// Convertir Fecha y hora actual a TimeStamp UNIX - UTC
// Fuente: https://thewebdev.info/2021/04/17/how-to-convert-a-date-string-to-timestamp-in-javascript/
export const ConvierteTimestamp = (FechaHora) => {  
    const TimeStamp = new Date(FechaHora).getTime();  
    return TimeStamp; // Regresa el TimeStamp en milisegundos, formato UNIX.
};  

// Convertir TimeStamp UNIX a Fecha y hora UTC
// Fuente: https://www.delftstack.com/es/howto/javascript/javascript-convert-timestamp-to-date/
export const ConvierteFechaHora = (TimeStamp) => {
    const FechaHora = new Date(TimeStamp);
    return FechaHora.getTime();
};

/*
const timestamp = toTimestamp(now) - 1800000;
// 1800000 = a 30 minutos antes = X Minutos * 60 * 1000
// 1650327420000 // toTimestamp(now) // 1656217295000 // 1575909015 * 1000 // 1607110465663 // Debe estar en milisegundos, formato UNIX.
const date = new Date(timestamp);
console.log(date.getTime());  // date.getTimezoneOffset()*60*1000
console.log(date);


// Obtiene la Fecha y Hora actual de la PC referenciado a UTC.
const now = new Date();

console.log("Hora Actual - UNIX: " , ConvierteTimestamp(now));
console.log("Hora Actual - Normal UTC : " , ConvierteFechaHora(ConvierteTimestamp(now)));
*/