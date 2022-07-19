// Create the client
const Ably = require('ably/promises');
const ably = new Ably.Realtime.Promise({ authUrl: 'https://ably.com/ably-auth/token/docs' });

const ablyRealtimePromiseExample = async () => {

    // Connect to Ably
    try {
        await ably.connection.once('connected');
        console.log('connected');
    } catch (error) {
        console.error(error);
    }

    // get the channel to subscribe to
    const channel = ably.channels.get('quickstart');

    // Subscribe to a channel
    // the promise resolves when the channel is attached (and resolves synchronously
    // if the channel is already attached)
    await channel.subscribe('greeting', (message) => {
        console.log('Message is ==> '+ message.data)
    });

    // Publish a message or two
    await channel.publish('greeting', 'hello!');
    await channel.publish('greeting', 'hello!');
    await channel.publish('greeting', 'hello!');

    // wait to receive all messages and then shut down
    setTimeout(() => {
        console.log("Closing connection...");
        ably.close();
        console.log('closed');
    }, 2000);    
};

ablyRealtimePromiseExample();
