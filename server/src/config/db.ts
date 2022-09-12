import mongoose from 'mongoose'

const db = async(url: string) => {
    await mongoose
    .connect(url)
    .then(() => console.log('MONGODB connected succesfully'))
    .catch(err => console.log(err))
}

export default db