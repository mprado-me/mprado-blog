const express = require('express')
const next = require('next')
const nconf = require('nconf');

const dev = process.env.NODE_ENV !== 'prod'
const app = next({ dev })
const handle = app.getRequestHandler()

// Setting dev or prod configs
nconf.env().argv().required(['NODE_ENV']);
if(nconf.get('NODE_ENV') == 'prod'){
    nconf.file({file: "configs/prod.json"});
}
else if(nconf.get('NODE_ENV') == 'dev') {
    nconf.file({file: "configs/dev.json"});
}
else {
    throw Error("NODE_ENV deve pertencer a ['dev', 'prod']");
}

app.prepare()
.then(() => {
  const server = express()

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(nconf.get('port'), (err) => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${nconf.get('port')}`)
  })
})
.catch((ex) => {
  console.error(ex.stack)
  process.exit(1)
})
