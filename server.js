const jsonServer = require('json-server')
const jsonServerAuth = require('json-server-auth')
const server = jsonServer.create()
const router = jsonServer.router('./public/db.json')
const middlewares = jsonServer.defaults({
    static: './build',
})

const PORT = process.env.PORT || 8000

server.db = router.db

server.use(jsonServerAuth)
server.use(middlewares)
server.use(router)

server.listen(PORT, () => {
    console.log('Server is running')
})
