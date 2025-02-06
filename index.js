import express from 'express'

const app = express()
const port = 3000

app.listen(port ,()=>{

    console.log('Serveris runng on Port ${port}')
})

app.get('/',(req,res) =>{
    res.send('Hello From faizee are ready to Bang up')
})

app.use(express.json())
let Teadata = []

let nextId = 1


app.get('/twitter',(req,res) =>{
    console.log('Twitter')
    res.send('Faizan.Com')
})

app.post('/tea_list' ,(req,res) => {
    console.log('post')
    const {name,price,lavish_score} =req.body
    const new_tea ={id:nextId++,name,price,lavish_score}
    Teadata.push(new_tea)
    res.status(201).send(Teadata)
})

app.get('/tea_list' ,(req,res) => {
    console.log('get')
   
    res.status(201).send(Teadata)
})

app.get('/tea_list/:id',(req,res)=>{
    console.log('getting the teaby id')
    const tea = Teadata.find(t=> t.id === parseInt(req.params.id))
    if (!tea){
        return res.status(404).send('the tea with given id is not found')
    }
    res.send(tea)



})


//update tea
app.put('/tea_list/:id',(req,res)=>{
    console.log('updating the tea')
        const tea = Teadata.find(t=> t.id === parseInt(req.params.id))
        if (!tea){
            return res.status(404).send('the tea with given id is not found')
        }
        const{name,price,lavish_score} = req.body
        tea.name=name
        tea.price=price
        tea.lavish_score=lavish_score
        res.status(201).send(Teadata)


}
)


//delete tea
app.delete('/tea_list/:id',(req,res)=>{
    console.log('Deleting the tea')
    const tea = Teadata.find(t=> t.id === parseInt(req.params.id))
    if (!tea){
        return res.status(404).send('the tea with given id is not found')
    }
    const index = Teadata.indexOf(tea)
    Teadata.splice(index,1)
    res.status(201).send(Teadata)


})