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

  setNodes(nodes) {
    this.nodes = nodes
  }

  setEdges(edges) {
    this.edges = edges
  }

  getOneNode(id) {
    return this.nodes[id]
  }

  getAllNodes() {
    return this.nodes
  }

  getOneEdge(id) {
    return this.edges[id]
  }

  getAllEdges() {
    return this.edges
  }

  getNeighbors(id) {
    let neighbors_ids = []
    let neighbors = []
    Object.values(this.edges).forEach((edge, index) => {
      if (edge.from === id && !neighbors_ids.includes(edge.to)) {
        neighbors_ids.push(edge.to)
      }
      if (edge.to === id && !neighbors_ids.includes(edge.from)) {
        neighbors_ids.push(edge.from)
      }
    });
    neighbors_ids.forEach(id => neighbors.push(this.getOneNode(id)))
    return neighbors
  }
}

export default new UnDirectedGraph()
