
// import pkg from 'mongodb';
// const {MongoClient} = pkg;

// const URL = 'mongodb+srv://chirag773:chirag123@inspactio-6btjg.mongodb.net/'



// const client = new MongoClient(URL);

// const dbName = 'cmc';

// async function main() {
//   // Use connect method to connect to the server
//   await client.connect();
//   console.log('Connected successfully to server');
//   const db = client.db(dbName);
//   const collection = db.collection('marbles');


//   return 'done.';
// }

// main()
//   .then(console.log)
//   .catch(console.error)
//   .finally(() => client.close());

import mongoose from 'mongoose';

const CONNECTION_URL = 'mongodb+srv://chirag773:chirag123@inspactio-6btjg.mongodb.net/cmc?retryWrites=true&w=majority';

function connectDB(){
     mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("DB connected"))
    .catch((error) => console.log(`${error} did not connect`));

}


function getAngleSchema(){
    const angleSchema = mongoose.Schema({
        BOM: String,
        image: String,
        basicMaterial: String,
        blockBatchNo:String,
        colour:String,
        countOfBatch:String,
        customId:String,
        hangerAndAngle:String,
        material:String,
        materialDescription:String,
        plant:String,
        qualityName:String,
        sLoc:String,
        sumOfUnrestricted:String
        })
        
        const Angle = mongoose.model('angleSchema', angleSchema);
        return Angle
}






async function main(){
    await connectDB()
     
}
