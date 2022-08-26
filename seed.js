const mongoose = require("mongoose");
const environment = require("./utils/environment");
const MongoClient = require("mongodb").MongoClient;
const uri = environment.database.uri
const client = new MongoClient(uri, {
    useNewUrlParser: true,
});
async function seedDB() {
    try {

        
        await client.connect();
        console.log("Connected correctly to server");

        const collection = client.db("userManagement").collection("person");

        // The drop() command destroys all data from a collection.
         collection.drop();
        const personData = [
            {
                name: "Mansi",
                location: "Navsari"
            },
            {
                name: "Hiren",
                location: "Surat"
            }
        ]


        await collection.insertMany(personData)

    }
    catch (err) {
        console.log(err.stack);
    }
}
seedDB().then(()=>{
console.log("Data inserted")
})
