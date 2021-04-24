const express = require('express');
const multiparty = require('connect-multiparty');

const MuiltiPartyMiddleware = multiparty({uploadDir:"./images"});

const PORT = process.env.PORTRT ||  8000;
const app = express();
app.use(express.json());
app.use(express.urlencoded({extensions: true}));
app.use(express.static('public/'))
app.get('/', ( req, res) =>{
    res.status(200).json({
        message: "Testing our Server"
    })
});


app.post('/upload', MuiltiPartyMiddleware, (req, res) =>{
    console.log(req.files.uploadFile);
})
app.listen(PORT, console.log(`Server has succuessfuly Started at : ${PORT}`));