import mongoose from 'mongoose'

const dbConnect = async () => {
  try {
    mongoose.set('strictQuery', false);
    await mongoose.connect(process.env.URI, {useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
      console.log('Connected Succesfully to MongoDB')
    }).catch((err) => {
      console.error(err)
    })
  } catch (error) {
    console.error(error)
  }
}
export default dbConnect