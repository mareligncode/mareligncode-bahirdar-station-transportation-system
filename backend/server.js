import express from 'express'
import cors from 'cors'
const PORT = 300
const app = express()
app.get('/', (req, res) => {
    res.send('bairdar menaharia is live...')
})
app.use(cors())
app.use(express.json())
app.use(express.urlEncoded({extended:true})
    
)
app.listen(PORT, () => {
    console.log(`server runing on the port http://localhost:${PORT}`);
    
})
