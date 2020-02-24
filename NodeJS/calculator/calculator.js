const express = require('express');
const bodyParser = require('body-parser');
const port = 3000;

const app = express();
app.use(bodyParser.urlencoded({extended: true}))

app.get('/',(request,response)=>{
    response.sendFile(__dirname+'/index.html');
});

app.post('/',(request,response)=>{
    console.log(request.body);
    const {num1,num2} = request.body;
    response.send('The result of a calculation is '+(Number(num1)+Number(num2)));
    
});

app.get('/bmicalculator',(request,response)=>{
    response.sendFile(__dirname+'/bmiCalculator.html');
});

app.post('/bmicalculator',(request,response)=>{
    console.log(request.body);
    let {height,weight} = request.body;
    height = parseFloat(height);
    weight = parseFloat(weight);
    const bmi = Math.round(weight/Math.pow(height,2));
    response.send('Your BMI is '+bmi);
    
});



app.listen(port,()=>console.log('Server is up at port '+port));