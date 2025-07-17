/**
 * 🕒 Ejercicio: Simular un reloj digital en JavaScript
 * 
 * Crea un programa que simule el funcionamiento de un reloj digital.
 * 
 *    - El reloj debe comenzar en 00:00 e ir avanzando minuto a minuto.
 *    - Cada segundo real representará un minuto del reloj simulado.
 *    - Usa `setInterval` para imprimir la hora actual una vez por segundo en formato HH:MM.
 * 
 * 📢 Extra:
 *    - Programa una alarma que imprima "⏰ Despierta!!" cuando el reloj llegue a las 07:15.
 *    - Una vez activada la alarma, detén el reloj con `clearInterval`.
 * 
 * 💡 Pistas:
 *    - Usa `padStart` para mantener el formato de dos dígitos en horas y minutos.
 *    - Controla los ciclos de minutos y horas (60 minutos = 1 hora, 24 horas = fin del día).
 */

const ONE_SECOND = 1000
let hour = 0
let minute = 0

const alarmTime = { hour: 7, minute: 15 }

function formatHHmm(h, m) {
  return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}`
}

function checkAlarm(h, m) {
  return h === alarmTime.hour && m === alarmTime.minute
}

function advanceTime() {
  minute++
  if (minute === 60) {
    minute = 0
    hour++
  }
}

const clock = setInterval(() => {
  const currentTime = formatHHmm(hour, minute)
  console.log(currentTime)

  if (checkAlarm(hour, minute)) {
    console.log('⏰ Weke up!!')
    clearInterval(clock)
    return
  }

  if (hour === 24) {
    clearInterval(clock)
    return
  }

  advanceTime()
}, ONE_SECOND)


/**
 * 1. 
 */

// let hour = 0
// let minute = 0 
// let one_second = 1000 

// const clock = setInterval(() => {
//   // Print time
//   const time = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`
//   console.log(time)

//   // Alarm
//   if (hour === 0 && minute === 1) {
//     console.log('⏰ Despierta!!')
//     clearInterval(clock)
//   }

//   minute++

//   if (minute === 60) {
//     minute = 0
//     hour++
//   }

//   if (hour === 24) clearInterval(clock)

// }, one_second)
