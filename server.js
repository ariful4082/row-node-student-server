const http = require('http');
const fs=require('fs');
const PORT = process.env.PORT || 4000;


const server = http.createServer();


server.listen(PORT, ()=>{
    console.log(`Server is Running on http://localhost:${PORT}`)
})