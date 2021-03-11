const exp = require("express");
const app = exp();
const {a} = require('./db')
const cors = require('cors')
const path = require('path')

app.use(cors())

const port = process.env.PORT || 6878
app.use(exp.urlencoded({ extended: true }));
app.use(exp.json());



app.get('/api' , (req,res) => {
    try {
      const aca = a;
      res.status(200).send(aca);
  } catch (error) {
      res.send(404).send(error.message)
  }
})

app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

  app.listen(port , () => {
      console.log('Server Started')
  })
