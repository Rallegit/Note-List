import React, {useState, useEffect} from 'react'

export default function Clock() {
  const [date, setDate] = useState(new Date())

  const tick = () => setDate(new Date())

  useEffect(() => {
    const timerID = setInterval(() => {
      tick()
    }, 1000)
    return clearInterval(timerID)
  }, [])

  return (
    <div>
      <h1>Its{date.toLocaleTimeString()}</h1>
    </div>
  )
}
