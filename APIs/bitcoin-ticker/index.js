const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');

app = express();
app.use(bodyParser.urlencoded({extended:true}));

app.get('/',(request,response)=>{
    response.sendFile(__dirname+'/index.html')
});

app.post('/',(req,res)=>{
    const {crypto,fiat} = req.body;
    console.log(crypto,fiat);
    
    request(`https://api.kanye.rest`,(error,response,body)=>{
        console.log(error,body,response);
        
    });
    
});

app.listen(3000,function(){
    console.log('Server is running on port 3000'); 
})
