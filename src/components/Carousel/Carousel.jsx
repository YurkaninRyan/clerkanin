import React from "react"
import classnames from "classnames"

import "./Carousel.scss"

function useInterval(callback, delay) {
  const savedCallback = React.useRef()

  // Remember the latest callback.
  React.useEffect(() => {
    savedCallback.current = callback
  }, [callback])

  // Set up the interval.
  React.useEffect(() => {
    function tick() {
      savedCallback.current()
    }
    if (delay !== null) {
      let id = setInterval(tick, delay)
      return () => clearInterval(id)
    }
  }, [delay])
}

function DetailsBall({ active, ...props }) {
  const cn = classnames("Carousel__details-ball", {
    "is-active": active,
  })

  return <div className={cn} {...props} />
}

export default function Carousel(props) {
  const [count, setCount] = React.useState(0)
  const [isRotating, setRotating] = React.useState(true)
  useInterval(
    () => {
      const next = count + 1
      setCount(next % props.slides.length)
    },
    isRotating ? 6000 : null
  )

  function updateCount(count) {
    setRotating(false)
    setCount(count)
  }

  return (
    <div className="Carousel">
      {props.slides[count]}
      <div className="Carousel__details-balls">
        {props.slides.map((slide, index) => (
          <DetailsBall
            key={index}
            active={count === index}
            onClick={() => updateCount(index)}
          />
        ))}
      </div>
    </div>
  )
}
