import React, { useState } from 'react'
import Dropzone from 'react-dropzone'
import { Icon } from 'antd';
import axios from 'axios';


function DropzoneFile(props) {

    const [Images, setImages] = useState([])
    
    const dropHandler = (files) => {

        let formData = new FormData();

        const config = {
            header: {'content-type': 'multipart/form-data'}
        }
        formData.append('file', files[0])

        axios.post('/api/product/image', formData, config)
            .then(response => {
                if(response.data.success){
                    setImages([...Images, response.data.filePath])
                    props.refreshFunction([...Images, response.data.filePath])
                } else {
                    alert('파일 저장하는데 실패하였습니다. (.png만 가능)')
                }
            })
    }

    const deleteHandler = (image) => {
        const currentIndex = Images.indexOf(image)

        let newImages = [...Images]
        newImages.splice(currentIndex, 1)
        setImages(newImages)
        props.refreshFunction(newImages)
     }

  return (
<div style={{display:'flex', justifyContent:'space-between'}}>
    <Dropzone onDrop={dropHandler}>
      {({getRootProps, getInputProps}) => (
        <section>
          <div style={{width: '18rem', height:'15rem', border: '1px solid lightgray',
                        display:'flex', alignItems: 'center', justifyContent:'center' }}
           {...getRootProps()}>
            <input {...getInputProps()} />
            <Icon type="plus" style={{ fontSize: '3rem' }} />
          </div>
        </section>
      )}
    </Dropzone>
    
    <div style={{ display:'flex', width:'18rem', height:'15rem', overflowX:'scroll' }}>
        {Images.map((image, index)=> (
            <div onClick={()=> deleteHandler(image)} key={index}>
                <img style={{ minWidth: '15rem', width:'18rem', height:'15rem'}}
                        src={`http://localhost:5100/${image}`}
                />
            </div>
        ))}
    </div>

</div>
  )
}

export default DropzoneFile