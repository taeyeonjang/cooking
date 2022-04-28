import React from 'react'
import { Radio } from 'antd';

function RadioCheck(props) {

  
  const renderRadio = () => {
    return props.levels && props.levels.map((radio, index) => (
      <Radio key={index} value={radio.value}>{radio.name}</Radio>
    ))
  }

  return (
    <div>{renderRadio()}</div>
  )
}

export default RadioCheck