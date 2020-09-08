import React from 'react'
import './Btn.css'

const STYLES = ['btn--primary', 'btn--outline']
const SIZES = ['btn--medium', 'btn--large', 'btn--mobile', 'btn--wide']
const COLOR = ['primary', 'blue', 'red', 'green']

export const Btn = ({
  children,
  type,
  handleClick,
  btnStyle,
  btnSize,
  btnColor
}) => {
  const checkBtnStyle = STYLES.includes(btnStyle)
    ? btnStyle
    : STYLES[0]

  const checkBtnSize = SIZES.includes(btnSize) ? btnSize : SIZES[0]

  const checkBtnColor = COLOR.includes(btnColor) ? btnColor : null

  return (
    <button
      className={`btn ${checkBtnStyle} ${checkBtnSize} ${checkBtnColor}`}
      onClick={handleClick}
      type={type}
    >
      {children}
    </button>
  )
}