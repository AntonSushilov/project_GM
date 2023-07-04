import {csvToJsonFromFile} from "./csvToJson.js"

class UnDirectedGraph {
  constructor(nodes, edges) {
    if (nodes) {
      this.nodes = nodes
    } else {
      this.nodes = {}
    }
    if (edges) {
      this.edges = edges
    } else {
      this.edges = {}
    }

  }

  // async initGraph() {
  //   const csvFilePathNodes = "./storage/nodes.csv"
  //   const csvFilePathEdges = "./storage/edges.csv"
  //   const jsonNodes = await csvToJsonFunc(csvFilePathNodes)
  //   jsonNodes.map(el => this.nodes[el.id] = el)
  //   const jsonEdges = await csvToJsonFunc(csvFilePathEdges)
  //   jsonEdges.map(el => this.edges[el.id] = el)
  // }

  setNodes(nodes) {
    this.nodes = nodes
  }

  setEdges(edges) {
    this.edges = edges
  }

  getNode(id) {
    // Если массив
    // return this.nodes.find(el => el.id === id)
    // Если словарь
    return this.nodes[id]
  }

  getEdge(id) {
    // Если массив
    // return this.nodes.find(el => el.id === id)
    // Если словарь
    return this.edges[id]
  }

  getNeighbors(id) {
    let neighbors = []
    // Если массив
    // this.edges.forEach((edge, index) => {
    //   if (edge.from === id && !neighbors.includes(this.getNode(edge.to))) {
    //     neighbors.push(this.getNode(edge.to))
    //   }
    //   if (edge.to === id && !neighbors.includes(this.getNode(edge.from))) {
    //     neighbors.push(this.getNode(edge.from))
    //   }
    // });

    // Если словарь
    Object.values(this.edges).forEach((edge, index) => {
      if (edge.from === id && !neighbors.includes(edge.to)) {
        neighbors.push(edge.to)
      }
      if (edge.to === id && !neighbors.includes(edge.from)) {
        neighbors.push(edge.from)
      }
    });

    return neighbors

  }

}

export default new UnDirectedGraph()