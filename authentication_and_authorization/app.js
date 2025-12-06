
import express from 'express';
import bcrypt from 'bcrypt';
const app = express();
app.get('/', (req, res) => {
   bcrypt.genSalt(10, function(err, salt){
    // bcrypt.hash("ankit", salt, function(err,hash){
    //     console.log("password: ",hash);
        
    // })
    // bcrypt.hash("ankit", salt, function(err,salt){
    //     console.log("salt: ",salt);
        
    // })
    res.send("working")
   })
})
app.get('/read', (req, res) => {
    res.send("read page");
})

const port = process.env.PORT || 3000; 

app.listen(port, () => {
    console.log(`Serve at http://localhost:${port}`);
    
})