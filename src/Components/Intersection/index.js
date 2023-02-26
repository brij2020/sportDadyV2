import { useRef, useState, useEffect, createElement } from 'react'
import type {
  FC,
  ReactNode,
  ReactHTML,
  DetailedHTMLProps,
  HTMLAttributes
} from 'react'

const Intersection = ({
  children,
  as = 'div',
  keepRender = true,
  root,
  rootMargin,
  threshold,
  ...props
}) => {
  const [isShow, setShow] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry], obs) => {
        if (entry.isIntersecting) {
          setShow(true)
          if (keepRender && ref.current) {
            obs.unobserve(ref.current)
          }
        } else {
          setShow(false)
        }
      },
      { root, rootMargin, threshold }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [keepRender, root, rootMargin, threshold])

  return (
    <>
      {createElement(as, { ref, ...props })}
      {isShow && children}
    </>
  )
}

export default Intersection
