// @ts-nocheck
const cors = require('cors')({origin: true});
import * as functions from "firebase-functions";
const corsFunction = functions.https.onRequest((req, res) => {
  cors(req, res, () => {
    res.set('Access-Control-Allow-Origin', '*');
    res.set('Access-Control-Allow-Methods', 'GET, POST');
    res.set('Access-Control-Allow-Headers', 'Content-Type');
    res.set('Access-Control-Max-Age', '3600');
    if (req.method === 'OPTIONS') {
      res.status(204).send('');
    } else {
      res.send('Hello World!');
    }
  });
});
 export default corsFunction