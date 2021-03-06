## Using the promises interface with Ably JavaScript and Node clients

This repo contains some examples of using the Ably promises interface with the JavaScript and Node clients.

### Create the client

``` javascript
const Ably = require('ably/promises');
const client = new Ably.Realtime.Promise({ authUrl: 'https://ably.com/ably-auth/token/docs' });
```

### Connect to Ably

``` javascript
try {
  await client.connection.once('connected');
  console.log('connected');
}
catch (error){
  console.error(error);
}
```

### Subscribe to a Channel

``` javascript
// get the channel to subscribe to
const channel = client.channels.get('myChannel');

// the promise resolves when the channel is attached (and resolves synchronously if the channel is already attached)
await channel.subscribe('greeting', (message) => {
  console.log('Message is ==> '+ message.data)
});
```

### Publish a message

``` javascript
await channel.publish('greeting', 'message 1');
```

### Complete code

See [here](./quickstart/index.js) for the complete code example.
