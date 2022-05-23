import React,{ useState } from 'react'
import axios from 'axios';
import { Button, Form, Input, Radio } from 'antd';
import BoxPage from './Section/BoxPage';
import { ingredi } from './Section/datas';
import RadioCheck from './Section/RadioCheck';
import { levels } from './Section/RadioDats';
import DropzoneFile from '../../utils/DropzoneFile';


//import CheckBox from './Section/CheckBox';

const { TextArea } = Input;

function UploadPage(props) {

const [Title, setTitle] = useState("");
const [Description, setDescription] = useState("");
const [CheckBoxes, setCheckBoxes] = useState([]);
const [Level, setLevel] = useState(1);
const [Images, setImages] = useState([]);
const [Ingredients, setIngredients] = useState([]);

const onTitleChange = (e) => {  
  setTitle(e.currentTarget.value)
}

const onDescriptionChange = (e) => {  
  setDescription(e.currentTarget.value)
}

const onLevel = (e) => {
  setLevel(e.target.value)
}

const updateImages = (newImages) => {
    setImages(newImages)
}

const submitHandler = () => {
  if(!Title || !Description ){
    return alert('모든 값을 넣어주세요')
  }

  //서버로 보내기 db에 저장해야하니깐
  const body = {
    writer: props.user.userData._id,
    title: Title,
    description: Description,
    images: Images,
    ingredients: Ingredients,
    level: Level,
  }

  
  axios.post('/api/product/save', body)
  .then(response => {
    if(response.data.success){
      alert('업로드 성공!')
      props.history.push('/')
    } else {
      alert('업로드 실패ㅠ')
    }
  })
}

const refreshIngredients = (newIngredients) => {

  setIngredients(newIngredients)

}


  return (
    <div style={{display:'flex', justifyContent:'center', alignItems:'center', margin:'2rem'}}>
      <Form onSubmitCapture={submitHandler} style={{display:'flex', flexDirection:'column', justifyContent:'center', width:'50%'}}>
        <DropzoneFile refreshFunction={updateImages} />
        <label>Title
        <Input value={Title} onChange={onTitleChange}></Input> 
        </label> 

        <label>Description
        <TextArea value={Description} onChange={onDescriptionChange} style={{height:'8rem'}}></TextArea>
        </label>

      <div style={{textAlign:'center'}}>
        <div style={{fontWeight:'bold', marginTop:'1rem'}}> 재료 선택하기</div>

          <div>
       {/* <CheckBox />*/} {<BoxPage ingredi={ingredi} refreshFunction={refreshIngredients} />}
         </div>
       
      </div>
      <div style={{display:'flex', marginTop:'1rem', justifyContent:'center'}}>
        
        <div style={{marginRight:'1rem'}}>난이도</div>
        {/*<RadioCheck  />*/}
        
      <Radio.Group onChange={onLevel} value={Level} name="radiogroup" defaultValue={1}>
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

