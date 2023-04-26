const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;

  try {
    const r = await axios.put(
        "https://api.chatengine.io/users/", 
        {username: username, secret: username, first_name:username},
        {headers:{"private-key": "78e0caf4-aec6-4bd2-af13-90255c9b55c9"}}
        );
        return res.status(r.status).json(r.data)
    } catch (e) {
        return res.status(e.response.status).json(e.response.status)
    }

//   return res.json({ username: username, secret: "sha256..." });
});

app.listen(3001);