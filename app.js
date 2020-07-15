const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv')
const cors = require('cors')
const app = express();


dotenv.config();
//for json requests
// app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }));
app.use(cors());
//sincronizare baza de date, in functie de modele

app.listen(process.env.PORT, () => {
  console.log(`App started on http://localhost:${process.env.PORT}`)
});
