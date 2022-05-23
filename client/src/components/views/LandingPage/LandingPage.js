import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Card, Row, Col } from 'antd';
import { EditOutlined, CloseOutlined, SettingOutlined, QuestionOutlined } from '@ant-design/icons';
import { useSelector } from "react-redux";


function LandingPage(props) {

    const { Meta } = Card;
    const [Products, setProducts] = useState([]);
    const user = useSelector(state => state.user)
    
    useEffect(() => {
    axios.get('/api/product/getProduct')
    .then(response => {
        if(response.data.success){
            setProducts(response.data.productInfo)
        } else {
            alert("데이터 불러오는데 실패하였습니다.")
        }
    })
    }, [])


    const removerecipe = (product) => {
        let variable={
            currentUserId: user.userData._id,
            productInfo: product
        }
        axios.post(`/api/product/test/${product._id}`, variable)
        .then(response => {
            if(response.data.success){
                if(window.confirm('삭제하시겠습니까?')){
                    axios.delete(`/api/product/removeProduct/${product._id}`)
                    .then(window.location.replace('/'))
                } else {
                    alert('취소하였습니다')
                }
               
            } else {
                alert('본인 게시물만 삭제 가능합니다만?')
            }
        })
    }

    const settingClick= (product) => {
        alert('아직')
    }

    const renderCards = Products.map((product, index) => {
         return <Col lg={6} md={8} xs={24} key={index}>
                <Card 
                    hoverable    
                    style={{width:240}}
                    cover={
                       <a href={`/product/${product._id}`}>
                      <img style={{width:'100%', height:240}} src={`http://localhost:5100/${product.images[0]}`} alt="coverImg" />
                      </a>
                      }
                    actions={[
                        <SettingOutlined key="setting" onClick={()=>settingClick(product)}/>,
                        <EditOutlined key="edit" />,
                        <CloseOutlined key="close" onClick={()=>removerecipe(product)} />,
                    ]}
                >
                <Meta title={product.title}/>
                </Card>
                </Col>
    })
    
     
    return (

        <div style={{ width: '75%', margin: '3rem auto' }}>
        <h2 style={{display:'flex', justifyContent:'center'}}>오늘 뭐 묵지<QuestionOutlined /></h2>

                  <Row gutter={[16, 16]}>
                        {renderCards}
                </Row>   

            </div>


    )
}

export default LandingPage
