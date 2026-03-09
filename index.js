
const jsonServer = require('json-server')


const previewServer = jsonServer.create()

const middleware=previewServer.defaults()

const router=jsonServer.router('db.json')

previewServer.use(middleware)
previewServer.use(router)

const port=3000||process.env.port

previewServer.listen(port,()=>{
    console.log("Mobile phone review Server running on the port"+port);
    
})