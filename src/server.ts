import mongoose from "mongoose";
import app from "./app";

async function main() {
  try {
    await mongoose.connect(
      "mongodb+srv://next-level:shAumxYQfUwubQZH@cluster0.tllgu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    );

    const port = 5000;

    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
}

main();
