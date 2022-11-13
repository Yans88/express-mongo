const express = require("express");
const cors = require("cors");
const db = require("./app/models");
const app = express();

const corsOptions = {
  origin: "*",
};

app.use(cors(corsOptions));
app.use(express.json());

const mongoCoonfig = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
db.mongoose.connect(db.url, mongoCoonfig)
    .then(()=>console.log("Database connected ...."))
    .catch(err=>{
      console.log(`Gagal konek DB ${err.message}`);
      process.exit();
    })

require("./app/routes/mahaiswa.route")(app);

app.get("/", (req, res) => {
  res.json({ message: "Hello ...." });
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => console.log(`server running on port ${PORT}`));
