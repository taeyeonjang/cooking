import React,{ useState } from 'react'
import { Button, Form, Input, Radio } from 'antd';
import BoxPage from './Section/BoxPage';
import { ingredi } from './Section/datas';
import RadioCheck from './Section/RadioCheck';
import { levels } from './Section/RadioDats';


//import CheckBox from './Section/CheckBox';


const { TextArea } = Input;



function UploadPage() {

const [Title, setTitle] = useState("");
const [Description, setDescription] = useState("");
const [CheckBoxes, setCheckBoxes] = useState([])
const [Level, setLevel] = useState(1)

const onTitleChange = (e) => {  
  setTitle(e.currentTarget.value)
}

const onDescriptionChange = (e) => {  
  setDescription(e.currentTarget.value)
}


const onSumbit = () => {
  let body= {
    title: Title,
    description: Description,
  }
}


  return (
    <div style={{display:'flex', justifyContent:'center', alignItems:'center', margin:'2rem'}}>
      <Form style={{display:'flex', flexDirection:'column', justifyContent:'center', width:'50%'}}onSubmitCapture={onSumbit}>
        <label>Title
        <Input value={Title} onChange={onTitleChange}></Input> 
        </label> 

        <label>Description
        <TextArea value={Description} onChange={onDescriptionChange} style={{height:'8rem'}}></TextArea>
        </label>

      <div style={{textAlign:'center'}}>
        <div style={{fontWeight:'bold', marginTop:'1rem'}}> 재료 선택하기</div>

          <div>
       {/* <CheckBox />*/} {<BoxPage ingredi={ingredi} />}
         </div>
       
      </div>
      <div style={{display:'flex', marginTop:'1rem', justifyContent:'center'}}>
        
        <div style={{marginRight:'1rem'}}>난이도</div>
        {/*<RadioCheck  />*/}
      <Radio.Group name="radiogroup" defaultValue={1}>
          <Radio value={1}>쉽다</Radio>
          <Radio value={2}>보통</Radio>
          <Radio value={3}>어려움</Radio>
          <Radio value={4}>곽지원</Radio>
     </Radio.Group>
      </div>
      

    <br/>
      <Button htmlType="submit" type='primary'>Submit</Button>

      </Form>
    </div>
  )
}

export default UploadPage

