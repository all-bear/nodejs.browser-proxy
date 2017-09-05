const url = require('url');
const browser = require('./lib/browser');
const http = require('http');

http.createServer(function(req, res) {
    const parsedUrl = url.parse(req.url, true);
    const params = parsedUrl.query;

    console.log(`Request with params ${JSON.stringify(params)}`);

    try {
        browser(params.targeturl, {timeout: params.requesttimeout}).then((content) => {
            res.end(content);
        }).catch((e) => {
            res.end(e.message);
        });
    } catch (e) {
        res.end(e.message);
    }
}).listen(process.env.PORT || 8081);