import React from 'react'

type SimpleButtonProps = {
  text: string
}

const SimpleButton: React.FC<SimpleButtonProps> = (props) => {
   return <button onClick={props.onClick}>{props.text}</button>

}

export default SimpleButton