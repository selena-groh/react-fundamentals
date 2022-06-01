// Styling
// http://localhost:3000/isolated/exercise/05.js

import React from 'react'
import '../box-styles.css'

// 💰 Use the className for the size and style (backgroundColor) for the color
// 💰 each of the elements should also have the "box" className applied

// 🐨 add a className prop to each of these and apply the correct class names
// 💰 Here are the available class names: box, box--large, box--medium, box--small

// 🐨 add a style prop to each of them as well so their background color
// matches what the text says it should be as well as `fontStyle: 'italic'`

const smallBox = (
  <div
    className="box box--small box--"
    style={{backgroundColor: 'lightblue', fontStyle: 'italic'}}
  >
    small lightblue box
  </div>
)
const mediumBox = (
  <div
    className="box box--medium box--"
    style={{backgroundColor: 'pink', fontStyle: 'italic'}}
  >
    medium pink box
  </div>
)
const largeBox = (
  <div
    className="box box--large box--"
    style={{backgroundColor: 'orange', fontStyle: 'italic'}}
  >
    large orange box
  </div>
)

// EC 1
const Box = ({className = '', style = {}, ...rest}) => (
  <div
    className={`box ${className}`}
    style={{fontStyle: 'italic', ...style}}
    {...rest}
  />
)

const smallBoxComponent = (
  <Box className="box--small" style={{backgroundColor: 'lightblue'}}>
    small lightblue box
  </Box>
)
const mediumBoxComponent = (
  <Box className="box--medium" style={{backgroundColor: 'pink'}}>
    medium pink box
  </Box>
)
const largeBoxComponent = (
  <Box className="box--large" style={{backgroundColor: 'orange'}}>
    large orange box
  </Box>
)

// EC 2
const BoxSize = ({size, style, ...rest}) => {
  const sizeClass = size ? `box--${size}` : ''
  return (
    <div
      className={`box ${sizeClass}`}
      style={{fontStyle: 'italic', ...style}}
      {...rest}
    />
  )
}

const smallBoxSizeComponent = (
  <BoxSize size="small" style={{backgroundColor: 'lightblue'}}>
    small lightblue box
  </BoxSize>
)
const mediumBoxSizeComponent = (
  <BoxSize size="medium" style={{backgroundColor: 'pink'}}>
    medium pink box
  </BoxSize>
)
const largeBoxSizeComponent = (
  <BoxSize size="large" style={{backgroundColor: 'orange'}}>
    large orange box
  </BoxSize>
)

function App() {
  const isEC1 = true
  const isEC2 = true

  if (isEC2) {
    return (
      <div>
        {smallBoxSizeComponent}
        {mediumBoxSizeComponent}
        {largeBoxSizeComponent}
        <BoxSize>unstyled box</BoxSize>
      </div>
    )
  }

  return !isEC1 ? (
    <div>
      {smallBox}
      {mediumBox}
      {largeBox}
    </div>
  ) : (
    <div>
      {smallBoxComponent}
      {mediumBoxComponent}
      {largeBoxComponent}
    </div>
  )
}

export default App
