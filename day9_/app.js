const express = require('express')  //import expresss and stores in express variable
const app = express()  
const bodyparser = require('body-parser')  //body-parser(used to read data)
const exhbs = require('express-handlebars') //handlebars-engine(used to create html page dynamically)
const dbo = require('./db')



app.engine("hbs",exhbs.engine({
    layoutsDir:"viewsfolder/",
    defaultLayout:"main",
    extname:"hbs"
}))

app.set('view engine','hbs')
app.set('views','viewsfolder')

app.use(bodyparser.urlencoded({extended:true}))
// let message = "abhii"
app.listen(8000,()=>{console.log("port 8000 is listening")})

app.get('/',async(req,res)=>{
    let database = await dbo.getDataBase()
    const collection = database.collection('books')
        const cursor = collection.find({})
        let myData = await cursor.toArray()
        let message = " "
        
    switch(req.query.status)
    {
        case '1':
            message="inserted successfully"
            break;
        default:
            break;
    }

    res.render('main',{message,myData})
    })

    app.post('/store_book',async(req,res)=>{
        let database = await dbo.getDataBase()
        const collection = database.collection('book')
        let bookdata = {title:req.body.title,author:req.body.author}
        await collection.insertOne(bookdata)
        return res.redirect('/?status=1')
    })