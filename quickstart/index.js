// Create the client
const Ably = require('ably/promises');
const client = new Ably.Realtime.Promise({ authUrl: 'https://ably.com/ably-auth/token/docs' });

const ablyRealtimePromiseExample = async () => {

    // Connect to Ably
    try {
        await client.connection.once('connected');
        console.log('connected');
    }
    catch (error){
        console.error(error);
    }

    // Subscribe to a channel
    const channel = client.channels.get('myChannel');
    await channel.subscribe('greeting', (message) => {
        console.log('Message is ==> '+ message.data)
    });

    // Publish a message
    await channel.publish('greeting', 'message 1');

    /*
    setTimeout(() => {
        console.log("Goodbye World!");
        client.close();
    }, 5000);*/
};

ablyRealtimePromiseExample();
