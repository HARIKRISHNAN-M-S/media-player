// to import json server
const jsonserver=require('json-server')

// create json server
const server=jsonserver.create()

// to route json data
const router=jsonserver.router('db.json')



// create middle ware
const middleware=jsonserver.defaults()
// setting up port
const PORT=process.env.PORT||4000
server.use(middleware)
    server.use(router)

    server.listen(PORT,()=>{
        console.log("MEDIA PLAYER SERVER STARTED AT PORT:"+PORT);
    })