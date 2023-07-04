import graph from "../module_gm/UnDirectedGraph.js"
import {csvToJsonFromFile, csvToJsonFromString} from "../module_gm/csvToJson.js"

class UnDirectedGraphController {
  async uploadFiles(req, res) {
    try {
      const nodes = req.files.nodes
      const edges = req.files.edges
      await csvToJsonFromString(nodes.data.toString('utf8')).then(async res => {
        let nodes = {}
        res.map(el => nodes[el.id] = el)
        await graph.setNodes(nodes)
      })
      await csvToJsonFromString(edges.data.toString('utf8')).then(async res => {
        let edges = {}
        res.map(el => edges[el.id] = el)
        await graph.setEdges(edges)
      })
      res.status(200).json(graph)
    } catch (error) {
      res.json(error)
    }
  }

  async getGraph(req, res) {
    try {
      res.json(graph)
    } catch (error) {
      res.json(error)
    }
  }
  
  async getAllNodes(req, res) {
    try {
      res.json(graph.nodes)
    } catch (error) {
      res.json(error)
    }
  }

  async getOneNode(req, res) {
    try {
      const id = req.params.id
      res.json(graph.getNode(id))
    } catch (error) {
      res.json(error)
    }
  }

  async getAllEdges(req, res) {
    try {
      res.json(graph.edges)
    } catch (error) {
      res.json(error)
    }
  }

  async getOneEdge(req, res) {
    try {
      const id = req.params.id
      res.json(graph.getEdge(id))
    } catch (error) {
      res.json(error)
    }
  }

  async getGraphNodeNeighbors(req, res) {
    try {
      let neighbors = []
      const id = req.params.id
      const neighbors_ids = graph.getNeighbors(id)
      neighbors_ids.forEach(id => neighbors.push(graph.getNode(id)))
      res.json(neighbors)
    } catch (error) {
      res.json(error)
    }
  }
}

export default new UnDirectedGraphController()