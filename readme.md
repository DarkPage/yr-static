# Serve your static file easyly. Simple SSR.

## Base on koa koa-router koa-static koa-send. Simple to serve your static files.

### step1 clone project and put your file in 
```
// clone to your folder
$ git clone https://github.com/DarkPage/yr-static.git

// get in this project
$ cd yr-static

// create a folder to save your static files
$ mkdir build

// copy your file to build folder
```
### step2 start server
```
$ node app.js
// Server start at port 3001
```

### or
```
$ npm i && npm run start
// > yr-static@1.0.0 start /Users/zhourongxian/Documents/PrivateProjects/yr-static
// > node app.js

// Server start at port 3001
```

#### or with docker
```
// please install Docker first.

// build an image
$ docker build -t [imageName]:[tagName] .

// start
$ docker run -d -p 3000:3000 --name [containerName] [imageId]
```

#### modify the regexp in app.js with your path
```
router.get(/[ablum|book|me|scene|notice|rent|about|ablum]/, async (ctx) => {
  await send(ctx, 'index.html', { root: __dirname + '/build' });
});
```

#### change the port yourself in need


## This is the end, good luck!
