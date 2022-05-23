import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Row, Col } from 'antd'
import ProductInfo from './Section/ProductInfo';



function DetailProductPage(props) {

    const [Products, setProducts] = useState([])
    const productId = props.match.params.productId

    useEffect(() => {
        axios.get(`/api/product/products_by_id?id=${productId}`)
      .then(response => {
        setProducts(response.data[0])
      })
      .catch(err => alert(err))
    }, [])





    if(props.user.userData){
      
       console.log('user', props.user.userData._id)
    }

    
  return (

    //이미지랑 표 보여주기,,,
    <div style={{width: '100%', padding:'3rem 4rem'}}>
        <div style={{display: 'flex', justifyContent:'center'}}>
        <h1>{Products.title}</h1>
        </div>

        <br />

        <Row gutter={[16, 16]}>
            {Products.images &&
            <Col lg={9} sm={24}>

                <img style={{width:'25rem', height:'25rem', borderRadius:"3rem"}} src={`http://localhost:5100/${Products.images[0]}`} />
                
            </Col>
            }
            
            <Col lg={15} sm={24}>

            <ProductInfo detail={Products}/>
            </Col>
            
        </Row>

            
    </div>
  )
}

export default DetailProductPage