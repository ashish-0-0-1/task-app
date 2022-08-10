


const  { MongoClient , ObjectId}= require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

const id = new ObjectId()
console.log(id.id.length);
console.log(id. toHexString().length);

MongoClient.connect(connectionURL, { useNewUrlparse: true }, (error, client) => {

    if (error) {
        return console.log('unable to connect to database')
    }
    const db = client.db(databaseName)

        // db.collection('users').insertOne({
        //     _id:id,
        //     name: "laxman",
        //     age: 21
        // }, (error, result) => {
        //     if (error) {
        //         return console.log("unable to insert");
        //     }
        //     console.log(result.ops);
        // })
    // db.collection('users').insertMany([

//         {
//             name: 'raja',
//             age: 23
//         }, {
//             name: 'punita',
//             age: 44

//         }
//     ],(error,result)=>{
//         if(error){
//             return console.log('unable to insert document');
//         }
// console.log(result.ops);
//     })

// db.collection('tasks').insertMany([
//     {
//         name:"ashish",
//         age:21

// },
// {
//     name:"bhushan",
//     age:23
// },{
//     name:"punita",
//     age:44
// }
// ],(error,result)=>{
//     if(error){
//         return console.log('unable to connect a data');
//     }
//     console.log(result.ops);
// })


// db.collection('users').findOne({_id: new ObjectId("62ebace48907a7f8b254d412")},(error ,user)=>{
//     if(error){
//     return console.log('unable to fetch');
//     }
// console.log(user);

// })
// db.collection('users').find({age:23}).toArray((error,users)=>{
//     console.log(users);
// })
// db.collection('users').find({age:23}).listenerCount((error,listenerCount)=>{
//     console.log(listenerCount);
// })

// const updatePromise= db.collection('users').updateOne({
//     _id:new ObjectId("62eba68d9275aadf08da4596")
// },{
//     $set:{
//         name:'punita kitchen'
//     }
// })
// updatePromise.then( (result)=>{
// console.log(result);
// }).catch((error)=>{
// console.log(error);
// // })
// db.collection('users').deleteMany({
//     age:21
// }).then((result)=>{
// console.log(result);
// }).catch((error)=>{
//     console.log(error);
// })

db.collection('users').deleteOne({
    _id: new ObjectId("62eba7fbf75e5be3cf5433be")
}).then((result)=>{
console.log(result);
}).catch((error)=>{
    console.log(error);
})


})



