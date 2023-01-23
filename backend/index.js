import express from 'express'
import cors from 'cors';
import dotenv from 'dotenv'
import { createHandler } from 'graphql-http/lib/use/express';
import schema  from './graphql/schema.js';
import dbConnect from './configs/dbConnect.js'

const app = express()
const port = process.env.PORT || 8080

dotenv.config();

app.use(express.json())
app.use(express.urlencoded({ extended:true }));

app.use(cors());

dbConnect()
app.all('/graphql', createHandler({ schema, graphiql: true }) )

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`🚀 Server ready at on port ${port}!`))