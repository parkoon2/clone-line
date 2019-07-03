import React from 'react'
import PropTypes from 'prop-types'
import { Text } from 'react-native'

const Elipsis = ({ text, maxLength, style }) => {
  console.log(style)
  let result

  if (text.length > maxLength) {
    result = `${text.slice(0, maxLength)}...`
  } else {
    result = text
  }

  return <Text style={{ ...style }}>{result}</Text>
}

Elipsis.defaultProps = {
  maxLength: 40
}

Elipsis.propTypes = {
  text: PropTypes.string.isRequired,
  maxLength: PropTypes.number
}

export default Elipsis
