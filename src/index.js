const express = require('express')
require('./db/mongoose')
const userRouter = require('./routes/user')
const taskRouter = require('./routes/task')

const app = express()
const port = process.env.PORT


const multer = require('multer')
const upload = multer({
    dest:'images',
    limits:{
        fileSize:1000000
    },
    fileFilter(req,file,cb){
        if(!file.originalname.match(/\.(doc|docx)$/)){
            return cb(new Error('please upload a woed document'))
        }
        cb(undefined,true)

    }
})
app.post('/upload',upload.single('upload'),(req,res)=>{
    res.send()
},(error ,req,res,next)=>{
    res.status(400).send({error:error.message})
})


app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
    console.log('server is running on port ' + port);
})

