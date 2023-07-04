import express from "express"
import fileUpload from "express-fileupload"
import unDirectedGraphRouter from "./routes/un_directed_graph.router.js"
const PORT = 5000

const app = express()
app.use(fileUpload({
  createParentPath: true
}));
app.use(express.json())
app.use('/api', unDirectedGraphRouter)


async function startApp() {
  try {
    app.listen(PORT, () => console.log(`Server running on http:/127.0.0.1:${PORT}`))
  } catch (e) {
    console.log(e)
  }
}

startApp()

// import graph from "./module_gm/UnDirectedGraph.js"
// await graph.initGraph()
// console.log(graph)
// const nodes = {
//   1: { "id": 1, "name": "A" },
//   2: { "id": 2, "name": "B" },
//   3: { "id": 3, "name": "C" },
//   4: { "id": 4, "name": "D" },
//   5: { "id": 5, "name": "E" },
//   6: { "id": 6, "name": "F" },
// }


// const edges = {
//   1: { "from": 1, "to": 2 },
//   2: { "from": 1, "to": 3 },
//   3: { "from": 3, "to": 1 },
//   4: { "from": 2, "to": 4 },
//   5: { "from": 2, "to": 5 },
//   6: { "from": 3, "to": 5 },
//   7: { "from": 3, "to": 6 }
// }



// // const graph = UnDirectedGraph
// graph.setNodes(nodes)
// graph.setEdges(edges)
// console.log("graph")
// console.log(graph)
// const node = graph.getNode(1)
// console.log("graph.getNode(1)")
// console.log(node)
// const neighbors_ids = graph.getNeighbors(1)
// console.log("graph.getNeighbors(1)")
// console.log(neighbors_ids)
// const neighbors = []
// neighbors_ids.forEach(id => neighbors.push(graph.getNode(id)))
// console.log("neighbors")
// console.log(neighbors)