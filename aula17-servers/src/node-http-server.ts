/**
 * Minimal HTTP server using Node's http library
 */

import * as http from "http"

const port = process.argv[2] || 3000
const server = http.createServer((req, res) => {
    console.log(req.url)
    res.writeHead(200, {'Content-Type': "text/plain"})
    res.end("Hello world!")
})

server.listen(port, () => console.log(`Listening on port ${port}`))