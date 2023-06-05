const express = require ("express");
const cors = require("cors")
const app = express();
const mongoose = require("mongoose")
const authRoutes = require("./Routes/AuthRoutes")
const cookieParser = require("cookie-parser")

app.listen(4000, ()=> {
    console.log("Server started on port 4000.")
})



mongoose.connect("mongodb+srv://fehmigunay:fehmigunay14@cluster0.zqg217o.mongodb.net/senior-db", {
    useUnifiedTopology: true
})
.then (()=> {
    console.log("DB Connection Successfull");
})
.catch((err) => {
    console.log(err.message)
});


app.use(cors({
origin:["http://localhost:3000"],
method: ["GET" , "POST"],
credentials: true,

}))



app.use (cookieParser())
app.use(express.json())
app.use("/" , authRoutes)

// Yorum modeli ve rotaları
const commentSchema = new mongoose.Schema({
    text: String,
    username: String,
    cardId: Number,
  });
  const Comment = mongoose.model('Comment', commentSchema);

app.get('/api/comments/:cardId', async (req, res) => {
  try {
    const comments = await Comment.find({ cardId: req.params.cardId });
    res.json(comments);
  } catch (error) {
    res.status(500).json({ error: 'Yorumlar getirilemedi.' });
  }
});

app.post('/api/comments/:cardId', async (req, res) => {
  try {
    const { cardId } = req.params;
    const { text, username } = req.body;
    const newComment = new Comment({ text, username,cardId });
    const savedComment = await newComment.save();
    res.json(savedComment);
  } catch (error) {
    res.status(500).json({ error: 'Yorum kaydedilemedi.' });
  }
});
