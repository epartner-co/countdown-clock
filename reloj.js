const getRemainingTime = (deadline) => {
  let now = new Date(),
    remainTime = (new Date(deadline) - now + 1000) / 1000,
    remainSeconds = ('0' + Math.floor(remainTime % 60)).slice(-2), // Seconds
    remainMinutes = ('0' + Math.floor((remainTime / 60) % 60)).slice(-2), // Minutes
    remainHours = ('0' + Math.floor((remainTime / 3600) % 24)).slice(-2), // Hours
    remainDays = Math.floor(remainTime / (3600 * 24)) // Days

  return {
    remainSeconds,
    remainMinutes,
    remainHours,
    remainDays,
    remainTime,
  }
}

const countdown = (deadline, elem) => {
  const component = document.querySelector(elem)
  const timerUpdate = setInterval(() => {
    let { remainDays, remainHours, remainMinutes, remainSeconds, remainTime } = getRemainingTime(deadline)
    component.innerHTML = getCountdownElement(remainDays, remainHours, remainMinutes, remainSeconds)

    if (remainTime <= 1) {
      clearInterval(timerUpdate)
      component.innerHTML = getCountdownElement('00', '00', '00', '00')
    }
  }, 1000)
}

const getCountdownElement = (days, hours, minutes, seconds) => {
  return `
    <div class="Clock">
      <div class="Clock__Time Clock__Time--days">
        <h2>${days}</h2>
        <h4>Dias</h4>
      </div>
      <div class="Clock__Time Clock__Time--hours">
        <h2>${hours}</h2>
        <h4>Horas</h4>
      </div>
      <div class="Clock__Time Clock__Time--minutes">
        <h2>${minutes}</h2>
        <h4>Minutos</h4>
      </div>
      <div class="Clock__Time Clock__Time--seconds">
        <h2>${seconds}</h2>
        <h4>Segundos</h4>
      </div>
    </div>
  `
}

countdown('Nov 22 2021 23:59:55 GMT-0500', '.blackdays #clock') // Add final day and component to render
