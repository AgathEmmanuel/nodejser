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

> Use cases  

Non-blocking  
Event-driven  
Data-intensive  
I/O intesive  
Asynchronous programming  
async/await  
Event Callbacks  

Web servers
Real time servers ( the way nodejs handles this kind of concurrent connection 
is also using this asynchronous model, such that it manages a 100 concurrent  
connections by managing a single thread by using the event driven model, 
when there is a concurrent connection that needs some execution only then  
will that pay attention to it )
APIs fronting NoSQL DB


Node.js is an excellent choice for creating an actual time application with two-way connections where the server doesn’t wait for an API to return data.


---
so what used to block in a multi-threaded environment, making an external call
waiting for i/o, waiting for something data-intensive to return, or waiting for an event to return,  this things used to consumet resouce in mult threaded model
but is efficient in nodejs, because its not waiting around its not consuming 
resources, it just makes the call and moves along and when that returns,it will deal with it then, thats why it becomes more powerful than multi threaded models for this kind of applications, lets say we have 10 threads and 10 of your
events end up waiting for something else, the thread pool is full and you
have a problem and the 11nth event cannot do anything and has to waith, 
in node js model, you can have 100 events that wait for external thing and 
all those 100 can sit and wait there and get processed once it comes 

When should you not use nodejs 

if you are working on event which is not dependend on an external event  
and is compute intensive, something like calculating the n'th prime 
number, then nodejs should do the work and cannot pass on to next event  
until it does the work because node application thread is doing the work
so it will just hang there 

reiterating the concept of worker threads is a possible solution here

data calculations  
processor intensive  
blocking operations  

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

nvm                     # node version manager   

curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash
source ~/.bashrc

nvm list-remote         # to list all available nvm versions
nvm install v14.10.0
nvm list                # to seed different versions you have installed
node -v                 # to check the version you have installed
nvm use v14.10.0        # to use that particular version of node


mkdir -p ./install/here/node_modules
npm install --prefix ./install/here <package>     # The package(s) will then be installed in ./install/here/node_modules.
						    The mkdir is needed since npm might otherwise choose an already existing
                                                    node_modules directory higher up in the hierarchy.

npm init 	            # this utility will walk you through creating a package.json file
npm init --yes 	        # this utility will creat a package.json file with all the defaults

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

npm install -s mongoose     # to install monogoose
                            => server side
                            var mongoose=require('mongose')
                            database-url='mongodb://<username>:<password>@example.db.com:1111222/examp'
                                # the database url should be stored in a config file for production
                            mongoose.connect(database-url,(err)=>{
                                console.log('connection done',err)
                            })
                            var Examplemodel=mongoose.model('Example',{
                                name: String,
                                roll-no: String,
                            })
                            

npm install --save-dev jasmine      # to install jasmine only as a dev dependency and not needed in production
                                    ./node_modules/.bin/jasmine init   #to initiate jasming config and spec folder  

npm install --save-dev request


```

## Notes

nvm => Node Version Manager  
npm => Node Package Manager  
yarn => Better version of npm and is faster

major vscode extensions to use

- ES7 React/Redux/GraphQL/React-Native snippets v1.9.3
- Prettier - Code formatter v9.0.0

Asynchronous coding

- callbacks
- async await
- promices


Error Handling

- try catch throw
- finally

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

> Mongoosejs

allows to work with mongodb database with object schemas (javascript object that represent type
of data that is to be stored in database) and also in validation


> Jasmine

helps in doing testing
automate the tesing process


> Javascript  






## error handling

```
      axios.post("http://localhost:4003/events", event).catch((err) => {
        console.log(err.message);
      });

```


## Tools  

[https://bennettfeely.com/clippy/](https://bennettfeely.com/clippy/)  
[https://fonts.google.com/specimen/Mochiy+Pop+One#standard-styles](https://fonts.google.com/specimen/Mochiy+Pop+One#standard-styles)  








## Links

[Is there a virtual environment for node.js?](https://stackoverflow.com/questions/3653495/is-there-a-virtual-environment-for-node-js)

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

[NodeJS vs Python: How to Choose the Best Technology to Develop Your Web App's Back End](https://www.freecodecamp.org/news/nodejs-vs-python-choosing-the-best-technology-to-develop-back-end-of-your-web-app/)  
[install node with nvm](https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-ubuntu-20-04)  
[code sandbox](codesandbox.io)  
  enter "react.new" and it will take you to a brand new react project.  
[https://www.voitanos.io/blog/don-t-be-alarmed-by-vulnerabilities-after-running-npm-install/](https://www.voitanos.io/blog/don-t-be-alarmed-by-vulnerabilities-after-running-npm-install/)  
[https://codesource.io/javascript-design-patterns/](https://codesource.io/javascript-design-patterns/)  
[https://www.toptal.com/javascript/comprehensive-guide-javascript-design-patterns](https://www.toptal.com/javascript/comprehensive-guide-javascript-design-patterns)  
[Asynchronous JavaScript Course (Async/Await, Promises, Callbacks)](https://youtu.be/ZYb_ZU8LNxs)  
[https://nodejs.medium.com/node-js-v15-0-0-is-here-deb00750f278](https://nodejs.medium.com/node-js-v15-0-0-is-here-deb00750f278)  
```
In the newest version of Node (v15+) 
Unhandled Promise Rejections are now treated as errors instead of warnings and will cause the servers to crash.
you'll need to add a catch block to every request of the event-bus/index.js:

      axios.post('http://localhost:4000/events', event).catch((err) => {
        console.log(err.message);
      });
      axios.post('http://localhost:4001/events', event).catch((err) => {
        console.log(err.message);
      });
      axios.post('http://localhost:4002/events', event).catch((err) => {
        console.log(err.message);
      });
      res.send({ status: 'OK' });


Required Node v15+ Update for Query Service
In the upcoming lecture, we will be adding a GET reques
we will need to add some error handling.

Wrap the axios request and event handler in a try / catch block:

    app.listen(4002, async () => {
      console.log("Listening on 4002");
      try {
        const res = await axios.get("http://localhost:4005/events");
     
        for (let event of res.data) {
          console.log("Processing event:", event.type);
     
          handleEvent(event.type, event.data);
        }
      } catch (error) {
        console.log(error.message);
      }
    });

```
[https://blog.logrocket.com/kafka-vs-rabbitmq-comparing-node-js-message-brokers/](https://blog.logrocket.com/kafka-vs-rabbitmq-comparing-node-js-message-brokers/)  
[https://aws.amazon.com/msk/what-is-kafka/](https://aws.amazon.com/msk/what-is-kafka/)  
[When and when not to use Node.js - Node.js Basics 06 - Java Brains](https://youtu.be/UCd6LorxpkY) 
[Tech Talk: Server Scaling in Node.js](https://youtu.be/w1IzRF6AkuI)  
[https://jasonwatmore.com/post/2020/07/22/nodejs-express-api-request-schema-validation-with-joi](https://jasonwatmore.com/post/2020/07/22/nodejs-express-api-request-schema-validation-with-joi)  
[https://github.com/nodejs/node/issues/34851](https://github.com/nodejs/node/issues/34851)  

