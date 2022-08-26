module.exports = {
    database: {
        options: {
            connectTimeoutMS: 30000,
            keepAlive: true,
            useNewUrlParser: true,
            useUnifiedTopology: true,
          }
    },
    whitelist: ["https://test-task-phi-nine.vercel.app","http://localhost:3001"]

}