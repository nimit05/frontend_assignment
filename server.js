const exp = require("express");
const app = exp();
const { db } = require("../backend/db");
const cors = require('cors')

app.use(cors())

const port = process.env.PORT || 6878
app.use(exp.urlencoded({ extended: true }));
app.use(exp.json());
app.use("/api", require("./routes/api/index").route);

app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

db.sync().then(() => {
  app.listen(port , () => {
      console.log('Server Started')
  })
})
