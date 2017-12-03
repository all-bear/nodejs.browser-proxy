const url = require('url');
const browser = require('./lib/browser');
const strategy = require('./lib/strategy');
const http = require('http');

http.createServer(function(req, res) {
    (async () => {
        const parsedUrl = url.parse(req.url, true);
        const params = parsedUrl.query;
        const requestKey = JSON.stringify(params);

        console.log(`Request ${requestKey} started`);

        try {
            const content = await browser(params.targeturl, strategy.get(params.strategy, params.meta));

            console.log(`Request ${requestKey} end`);

            res.end(content);
        } catch (e) {
            console.error(`Request ${requestKey} fail`);
            console.error(e.message);

            res.end(e.message);
        }
    })();
}).listen(process.env.PORT || 8081);