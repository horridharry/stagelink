import React, { useState, useEffect } from 'react'
import { useTransition, animated, config } from 'react-spring'
import Arena from './images/arena.jpg'
import AliFight from './images/bgimg.jpg'
import AliWin from './images/hero.jpg'
import Alisster from './images/imagery.jpg'

const slides = [
  { id: 0, url: 'https://images.unsplash.com/photo-1544511916-0148ccdeb877?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1901&q=80i&auto=format&fit=crop' },
  { id: 1, url: 'https://images.unsplash.com/photo-1540206395-68808572332f?ixlib=rb-1.2.1&w=1181&q=80&auto=format&fit=crop' },
  { id: 2, url: Arena },
  { id: 3, url: AliFight },
  { id: 4, url: AliWin },
  { id: 5, url: Alisster },
]

const Slidehow = () => {
  const [index, set] = useState(0)
  const transitions = useTransition(slides[index], item => item.id, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: config.molasses,
  })
  useEffect(() => void setInterval(() => set(state => (state + 1) % 6), 7000), [])
  return transitions?.map(({ item, props, key }) => (
    <animated.div
      key={key}
      class="bg"
      style={{ ...props, backgroundImage: "url(" + ""+item.url+"" + ")" }}
    />
  ))
}

export default Slidehow