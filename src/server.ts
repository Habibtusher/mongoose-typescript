import mongoose from 'mongoose';
import app from './app';

const port:number = 5000;


async function main() {
  try {
    await mongoose.connect("mongodb://localhost:27017/practice");
    console.log("connected");
    app.listen(port, () => {
      console.log(`App listening on port ${port}`);
    });
  } catch (error) {
    console.log("faield to connect");
  }
}
main();


