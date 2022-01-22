import express,{Request,Response} from 'express'
const app = express()


app.use(express.json());






app.get('/',(req, res)=>res.status(200).json({message:'hello word'}))



app.listen(process.env.PORT || 3000, ()=>console.log('listening on port 3000'))