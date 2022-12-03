import { MongoClient } from "mongodb";

export default function handler(req, res) {
    if (req.method === "POST") {
        // console.log("api", req.method);
        const data = req.body;

        // const { name, age, address } = data

        // const client = MongoClient.connect('mongodb + srv://bobbyappana:bobby464ab@cluster0.4rkmy.mongodb.net/test')
        // const db = client.db("nextjs-mongodb-demo")

        // const userData = db.collection('userData')

        // const result = userData.insertOne(data)
        // console.log("result", result);
        // client.close()
        console.log("api", data);
        res.status(200).json({ messsage: 'Data added suucessfully' })

    }
}
