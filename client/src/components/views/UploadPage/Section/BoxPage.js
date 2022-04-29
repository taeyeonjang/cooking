import React, { useState } from 'react'
import { Checkbox } from 'antd';
import './BoxPage.css';

function BoxPage(props) {

const [Checkboxesa, setCheckboxesa] = useState([])

  const onCheckBox = (id) => {
    const currentIndex = Checkboxesa.indexOf(id)
  
    const newChecked = [...Checkboxesa]
  
    if(currentIndex === -1) {
        newChecked.push(id)
    } else {
        newChecked.splice(currentIndex, 1)
    }
    setCheckboxesa(newChecked)
    props.refreshFunction(newChecked)
    
  }
  
  const renderBox = () => {
    return props.ingredi && props.ingredi.map((ingred, index) => (
      <Checkbox key={index} 
             onChange={()=> onCheckBox(ingred.value)}
             checked={Checkboxesa.indexOf(ingred.value) === -1 ? false : true }>
             {ingred.label}</Checkbox>
    ))
  
  }

  return (
    <div>{renderBox()}</div>
  )
}

export default BoxPage