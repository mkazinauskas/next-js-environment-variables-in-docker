module.exports = {
    serverRuntimeConfig: {
        // Will only be available on the server side
        mySecret: 'secret',
    },
    publicRuntimeConfig: {
        apiUrl: process.env.NEXT_PUBLIC_API_URL,
    },
}