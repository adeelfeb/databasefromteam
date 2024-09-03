import express from 'express';
import mongoose from 'mongoose';

const app = express();

app.get('/', (req, res) => {
    res.send('Hello World');
});

(async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/backend");
        console.log("Database Connected");

        app.listen(5000, () => {
            console.log("Server running on port 5000");
        });
    } catch (error) {
        console.error("Error: ", error);
    }
})();
