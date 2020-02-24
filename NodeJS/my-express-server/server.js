const express = require('express');
const app = express();
const port = 3000;

app.get('/',function(request,response){
    response.send('<h1>Hello, World!</h1>');
});

app.get('/contact',(request,response)=>{
    response.send('Contact me at: maxfnine@gmail.com');
});

app.get('/about',(request,response)=>{
    response.send('<h2> I\'m a software developer!</h2>');
})

app.get('/hobbies',(request,response)=>{
    response.send('<ul> <li>Games</li><li>Tea</li><li>Code</li></ul>');
})

app.listen(port, function () {
    console.log(`Server started on port ${port}`);

});