const express = require('express');
const router = express.Router();
const { User } = require("../models/User");
const { auth } = require("../middleware/auth");
const path = require('path');
const multer = require('multer');
const { Product } = require('../models/Product');


//=================================
//             product
//=================================

//가져온 이미지를 저장한다. multer사용 
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads/");
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}_${file.originalname}`);
    }
    })

    const fileFilter = (req, file, cb) => {

        // mime type 체크하여 원하는 타입만 필터링
       
        if (file.mimetype == 'image/png') {
       
        cb(null, true);
       
        } else {
       
        cb({msg:'png 파일만 업로드 가능합니다.'}, false);
       
        }
       
       
       
       }
  
       const upload = multer({ storage: storage, fileFilter: fileFilter }).single("file")



        router.post('/image', (req, res)=> {
          //저장한 것의 정보를 프론트로 넘겨준다
          upload(req, res, err => {
              if(err){
            return res.json({success : false, err})
              } else{
          return res.json({ success: true, filePath:res.req.file.path, fileName: res.req.file.filename })
           
        }

        })
     });

        router.post('/save', (req, res)=> {
            //mongodb에 저장 
            const product = new Product(req.body)
            
            product.save((err) => {
                if(err) return res.status(400).json({ success: false, err })
                return res.status(200).json({ success: true, })
            })
        })

module.exports = router;
