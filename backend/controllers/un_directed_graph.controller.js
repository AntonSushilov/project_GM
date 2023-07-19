import graph from "../module_gm/UnDirectedGraph.js"
import { csvToJsonFromString, saveFileJson, readFileJson, startPythonScript } from "../utils/utils.js"

class UnDirectedGraphController {
  async uploadFiles(req, res) {
    try {
      const nodes = req.files.nodes
      const edges = req.files.edges

      await csvToJsonFromString(nodes.data.toString('utf8')).then(async res => {
        let resNodes = {}
        res.map(el => resNodes[el.id] = el)
        await saveFileJson("nodes", resNodes)
      })
      await csvToJsonFromString(edges.data.toString('utf8')).then(async res => {
        let resEdges = {}
        res.map(el => resEdges[el.id] = el)
        await saveFileJson("edges", resEdges)
      })

      res.status(200).json({ "message": "success" })
    } catch (error) {
      res.json(error)
    }
  }

  async getGraph(req, res) {
    try {
      await readFileJson("nodes").then(nodes => {
        graph.setNodes(nodes)
      })
      await readFileJson("edges").then(edges => {
        graph.setEdges(edges)

      })
      const result = { "graph": graph }
      res.json(result)
    } catch (error) {
      res.json(error)
    }
  }

  async getAllNodes(req, res) {
    try {
      const result = { "nodes": graph.getAllNodes() }
      res.json(result)
    } catch (error) {
      res.json(error)
    }
  }

  async getOneNode(req, res) {
    try {
      const id = req.params.id
      const result = { "node": graph.getOneNode(id) }
      res.json(result)
    } catch (error) {
      res.json(error)
    }
  }

  async getAllEdges(req, res) {
    try {
      const result = { "edges": graph.getAllEdges() }
      res.json(result)
    } catch (error) {
      res.json(error)
    }
  }

  async getOneEdge(req, res) {
    try {
      const id = req.params.id
      const result = { "edge": graph.getOneEdge(id) }

      res.json(result)
    } catch (error) {
      res.json(error)
    }
  }

  async getGraphNodeNeighbors(req, res) {
    try {
      const isPython = req.query.isPython === 'true'
      const id = req.params.id

      let neighbors = []
      if (isPython) {
        const args = {
          "nodes_path": "./storage/nodes.json",
          "edges_path": "./storage/edges.json",
          "function": "getNeighbors",
          "function_args": {
            'selected_node': id
          },
          "name_result": "neighbors",
          "path_result": "./storage/neighbors.json"
        }
        neighbors = await startPythonScript(args)
      } else {
        neighbors = await graph.getNeighbors(id)
      }
      const result = {
        'neighbors': neighbors
      }
      res.json(result)
    } catch (error) {
      res.json(error)
    }
  }
}

export default new UnDirectedGraphController()
