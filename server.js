const app = require('./App');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({ path: './.env' });

const DB = process.env.DATABASE_URL.replace('<password>', process.env.DATABASE_PASSWORD);

mongoose.connect(DB, {
    useNewUrlParser: true,
    ssl:true
})
    .then(() => {
        console.log("Database connected");
    })
    .catch(err => {
        console.error("Database connection error:", err);
    });

app.listen(8000, () => {
    console.log("Server started on port 8000");
});
