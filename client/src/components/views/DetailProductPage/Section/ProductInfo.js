import React, { useState } from 'react'
import { Descriptions } from 'antd';
import { ingredi } from '../../UploadPage/Section/datas';

function ProductInfo(props) {

    const conversionLevel = [
        {"level" : "쉬움"},
        {"level" : "보통"},
        {"level" : "어려움"},
        {"level" : "곽지한테 물어보세요"},
    ]

    let number = props.detail.level


    const [Ingredients, setIngredients] = useState([])

    let A = [];
    if( props.detail.ingredients && props.detail.ingredients.length > 0){
        
        props.detail.ingredients.map((ingredients, index) => {
            A.push(ingredi[ingredients-1].label)
        })
    }
     
  return (
    <div>{props.detail && props.detail.level &&
        <Descriptions title="Product Info" bordered>
            <Descriptions.Item label="재료">{A.join(", ")}</Descriptions.Item>
            <Descriptions.Item label="난이도">{conversionLevel[number].level}</Descriptions.Item>
            <Descriptions.Item label="View">{props.detail.views}</Descriptions.Item>
            <Descriptions.Item label="Description">{props.detail.description}</Descriptions.Item>
         </Descriptions>
        }
    </div>
  )
}

export default ProductInfo