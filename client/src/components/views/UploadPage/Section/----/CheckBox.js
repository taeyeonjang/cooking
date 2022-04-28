import React from 'react'
import { Checkbox } from 'antd';
import './CheckBox.css';

function CheckBox() {
    function onChange(checkedValues) {
        console.log('checked = ', checkedValues);
      }

const options = [
  { label: '간장', value: '1' },
  { label: '감자', value: '2' },
  { label: '계란', value: '3' },
  { label: '고추', value: '4' }, 
  { label: '고추장', value: '5' },
  { label: '고춧가루', value: '6' },
  { label: '김치', value: '7' },
  { label: '깨', value: '8' },
  { label: '다진마늘', value: '9' },
  { label: '당근', value: '10' },
  { label: '닭고기', value: '11' },
  { label: '대파', value: '12' },
  { label: '돼지고기', value: '13' },
  { label: '된장', value: '14' },
  { label: '떡', value: '15' },
  { label: '마늘', value: '16' },
  { label: '맛술', value: '17' },
  { label: '버섯', value: '18' },
  { label: '부침가루', value: '19' },
  { label: '새우', value: '20' },
  { label: '생강', value: '21' },
  { label: '설탕', value: '22' },
  { label: '소금', value: '23' },
  { label: '스팸', value: '24' },
  { label: '식초', value: '25' },
  { label: '식용유', value: '26' },
  { label: '양파', value: '27' },
  { label: '전분가루', value: '28' },
  { label: '참기름', value: '29' },
  { label: '튀김가루', value: '30' },
  

];



  return (
    <>
    <Checkbox.Group style={{margin:'5px'}} options={options}  onChange={onChange} />
    <br />
    <br />
  
  </>
  )
}

export default CheckBox