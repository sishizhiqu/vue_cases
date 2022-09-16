const express = require('express')
const app = express()

app.get('/users/info',(req,res)=> {
    let response = {
        status: 200,
        data: {
            name:'赵丽颖',
            age: 33
        }
    }
    res.send(JSON.stringify(response))
})

app.listen(4000,()=>{
    console.log('服务已经启动，在http://localhost:4000/users/info');
})