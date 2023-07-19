// index.js
import express from "express"
import fileUpload from "express-fileupload"
import unDirectedGraphRouter from "./routes/un_directed_graph.router.js"
const PORT = 5000

const app = express()
app.use(fileUpload({
  createParentPath: true
}));
app.use(express.json())
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.use('/api', unDirectedGraphRouter)

async function startApp() {
  try {
    app.listen(PORT, () => console.log(`Server running on http:/127.0.0.1:${PORT}`))
  } catch (e) {
    console.log(e)
  }
}

startApp()
