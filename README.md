## Using the promises interface with Ably JavaScript and Node clients

This repo contains some examples of using the Ably promises interface with the JavaScript and Node clients.

### Installation

For Node.js:

``` shell
npm install ably
```

For JavaScript:

``` html
<!DOCTYPE html>
<html lang="en">
  <head>
    <script src="//cdn.ably.com/lib/ably.min-1.js"></script>
  </head>
  <body>
  ...
```

### Create the client

``` javascript
const Ably = require('ably/promises');
const ably = new Ably.Realtime.Promise({ authUrl: 'https://ably.com/ably-auth/token/docs' });
```

For browser client:

``` javascript
  <body>
  ...
  <script>
      const ably = new Ably.Realtime.Promise({
        authUrl: "/auth",
      });
```

### Connect to Ably

``` javascript
await ably.connection.once('connected');
console.log('connected');
```

### Subscribe to a Channel

``` javascript
// get the channel to subscribe to
const channel = ably.channels.get('quickstart');

// the promise resolves when the channel is attached 
// (and resolves synchronously if the channel is already attached)
await channel.subscribe('greeting', (message) => {
  console.log('Message is ==> '+ message.data)
});
```

### Publish a message

``` javascript
await channel.publish('greeting', 'hello');
```

### Close the connection

``` javascript
console.log("Closing connection...");
ably.close();
console.log('Closed the connection to Ably.');
```

### Complete code

See [here](./quickstart/index.js) for the complete code example.
