# Nodejs

#### Technologies used

- JavaScript
- Node
- NPM
- HTML
- Webpack
- CSS
- Typescript

### Frameworks

- [x] Express
- [ ] Next
- [ ] Koa
- [ ] Sails
- [ ] Socket
- [ ] Meteor
- [ ] LoopBack
- [ ] Hapi
- [ ] Adonis
- [ ] Total
- [ ] Derby

### Javascript

---

> Benefits

same syntax in backend and frontend  
data structue, object definitions and code can be shared  
shared library  
functions or algorithms can be reused in front and back  
work well with json  
dynamic language  
asynchronous tasks execution  
access networking and filesystem asynchronously

> Commands

```
npm init 	    # this utility will walk you through creating a package.json file
npm init --yes 	# this utility will creat a package.json file with all the defaults

npm install module_name
npm install -g express		# -g notation saves that package in global scope
npm install -s express		# -s notation saves that package to the init file
npm list                    # list nodejs modules
npm -g list                 # list nodejs modules installed globally
npm -g ls | grep express    # to see if express is insatlled gloablly
npm install -s socket.io	# socket package need to work with express, a way is to create
                            an http server with node and then share with express and socketio
                            => server side 
                            var app=express()
                            var http=require('http').Server(app)
                            var io=require('socket.io')(http)
                            var server=http.listen()    # we cant directly serve the backend with just
                            express usin var server=app.listen(), we need to use the node http server which enables both express and socket in running state.
                            => client side
                            <script src="/socket.io/socket.io.js"></script>
                            var socket=io()

```

> Notes

nvm => Node Version Manager  
npm => Node Package Manager  
yarn => Better version of npm and is faster

major vscode extensions to use

- ES7 React/Redux/GraphQL/React-Native snippets v1.9.3
- Prettier - Code formatter v9.0.0

> Express.js

this can handle the backend  
allows client to sent request to server, but server can sent request to the client  
no bidirectional communication

> Socket.io

allows real time bidirectional event based communication (event driven)  
enables pushing of notifications from the server to the client on an event  
it has 2 parts  
 -- client side library runs on browser  
 -- server side library runs on nodejs

the only way to send new data from server to one or more clients in http is via polling, here
every few seconds we send an http requests asking the server are there for updates.
with websockets and socket io the servers will be able to send notification to client.
server is pushing an update to a client or multiple clients.
if browser not support webosockets it will default to polling.

> Links

- [Is there a virtual environment for node.js?](https://stackoverflow.com/questions/3653495/is-there-a-virtual-environment-for-node-js)

---

If having system wide npm packages is your main issue, then maybe consider using the very cool 'bundle' command with npm. This is closer to freezing gems or using bundler in rails, rather than rvm.

It's super easy. Just create a package.json file:

{ "name": "yourapp", "version": "0.0.1", "dependencies": {"jade": "0.4.1"}}

and then run:

npm bundle vendor

or if your npm version is >= 1.0 run:

npm install

to freeze into the vendor directory. and then use:

require.paths.unshift('./vendor');

---

- [NodeJS vs Python: How to Choose the Best Technology to Develop Your Web App's Back End](https://www.freecodecamp.org/news/nodejs-vs-python-choosing-the-best-technology-to-develop-back-end-of-your-web-app/)
