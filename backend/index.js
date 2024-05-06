const express = require("express");
const cors = require("cors");
const { default: axios } = require("axios");

const app = express();

app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;
  try {
    const call = await axios.put(
      "https://api.chatengine.io/users/",
      { username: username, secret: username, firstname: username },
      { headers: { "private-key": "86ad9652-7a3c-411a-a588-846cd9ccc429" } }
    );
    return res.status(call.status).json(call.data);
  } catch (error) {
    return res.status(error.response.status).json(error.response.data);
  }
});

app.listen(3001);
