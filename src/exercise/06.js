// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import React from 'react'

function UsernameForm({onSubmitUsername}) {
  // 🐨 add a submit event handler here (`handleSubmit`).
  // 💰 Make sure to accept the `event` as an argument and call
  // `event.preventDefault()` to prevent the default behavior of form submit
  // events (which refreshes the page).
  const handleSubmit = event => {
    event.preventDefault()
    onSubmitUsername(event.target.elements.username.value)
  }
  //
  // 🐨 get the value from the username input (using whichever method
  // you prefer from the options mentioned in the instructions)
  // 💰 For example: event.target.elements[0].value
  // 🐨 Call `onSubmitUsername` with the value of the input

  // 🐨 add the onSubmit handler to the <form> below

  // 🐨 replace input's name attribute with id attribute
  // 🐨 make sure to associate the label to the input.
  // to do so, set the value of 'htmlFor' prop of the label to the id of input
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input id="username" type="text" />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

function UsernameFormEC1({onSubmitUsername}) {
  const inputRef = React.useRef()
  // 🐨 add a submit event handler here (`handleSubmit`).
  // 💰 Make sure to accept the `event` as an argument and call
  // `event.preventDefault()` to prevent the default behavior of form submit
  // events (which refreshes the page).
  const handleSubmit = event => {
    event.preventDefault()
    onSubmitUsername(inputRef.current.value)
  }
  //
  // 🐨 get the value from the username input (using whichever method
  // you prefer from the options mentioned in the instructions)
  // 💰 For example: event.target.elements[0].value
  // 🐨 Call `onSubmitUsername` with the value of the input

  // 🐨 add the onSubmit handler to the <form> below

  // 🐨 replace input's name attribute with id attribute
  // 🐨 make sure to associate the label to the input.
  // to do so, set the value of 'htmlFor' prop of the label to the id of input
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input id="username" type="text" ref={inputRef} />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

function UsernameFormEC2({onSubmitUsername}) {
  const [error, setError] = React.useState(null)

  const inputRef = React.useRef()

  const handleSubmit = event => {
    event.preventDefault()
    onSubmitUsername(inputRef.current.value)
  }
  const handleChange = event => {
    const value = event.target.value
    const isLowerCase = value === value.toLowerCase()
    setError(isLowerCase ? null : 'Username must be lower case')
  }
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <div role="alert">{error}</div>
        <label htmlFor="username">Username:</label>
        <input
          id="username"
          type="text"
          ref={inputRef}
          onChange={handleChange}
        />
      </div>
      <button type="submit" disabled={Boolean(error)}>
        Submit
      </button>
    </form>
  )
}

function UsernameFormEC3({onSubmitUsername}) {
  const [username, setUsername] = React.useState('')
  const inputRef = React.useRef()
  const handleSubmit = event => {
    event.preventDefault()
    onSubmitUsername(inputRef.current.value)
  }
  const handleChange = event => {
    const {value} = event.target
    setUsername(value.toLowerCase())
  }
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          id="username"
          type="text"
          ref={inputRef}
          value={username}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameFormEC3 onSubmitUsername={onSubmitUsername} />
}

export default App
