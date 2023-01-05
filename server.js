const Hapi = require('@Hapi/hapi')

const init = async () => {
    const server = Hapi.server({
        port: 5500,
        host: 'localhost'
    }) 
    await server.start()
    
    console.log(`the server is running on ${server.info.uri}`)
}

init()