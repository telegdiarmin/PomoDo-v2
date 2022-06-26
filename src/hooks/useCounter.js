import {useSelector} from 'react-redux'
import {useEffect, useRef, useState} from 'react'
import {calculateRemainingTime, DEFAULT_TIMER_DURATION} from '../utils/utils'

export const useCounter = () => {
  const isRunning = useSelector((state) => state.counter.startTime !== undefined);
  const startTime = useSelector((state) => state.counter.startTime);
  const [remainingTime, setRemainingTime] = useState(DEFAULT_TIMER_DURATION)
  const intervalRef = useRef()

  const stopTimer = () => {
    clearInterval(intervalRef.current)
    setRemainingTime(DEFAULT_TIMER_DURATION)
  }

  const startTimer = () => {
    intervalRef.current = setInterval(() => {
      setRemainingTime(calculateRemainingTime(startTime))
    }, 1000)
  }

  const elapsedEffects = () => {
    console.log('lejárt')
  }

  useEffect(() => {
    if (!isRunning) {
      stopTimer()
      return
    }

    startTimer()
  }, [isRunning])

  useEffect(() => {
    if (remainingTime < 1000) {
      stopTimer()
      elapsedEffects()
    }
  }, [remainingTime])

  return {
    remainingTime,
  }
}
