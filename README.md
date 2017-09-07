# Browser Proxy

Node Js based server which works like a proxy to emulate page rendering by browser. So basically if you need to get html of page by curl, but this html must be with all applied js (like a rendered by Angular, etc.) you need to do next:

- Send request to server and set target url in get params, like this:
```bash
curl 'http://localhost:8081?targeturl=http%3A%2F%2Fgoogle.com&requesttimeout=1000'
```

, where `targeturl` is url encoded url to request, `requesttimeout` is timeout to wait for javascript executing

## Options
Options should be passed by get params in request:

- `targeturl` - url encoded url to request
- `requesttimeout` - timeout to wait for javascript executing

## Installation

### Node JS app
Install:
```bash
git clone https://github.com/all-bear/nodejs.browser-proxy.git
cd nodejs.browser-proxy.git
npm  install
```

Run:
```bash
PORT=8081 npm start
```
, you can change port to another, but 8081 is default
