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

  getNodes(){
    return this.nodes
  }
  getNode(id) {
    return this.nodes[id]
  }

  setEdges(edges) {
    this.edges = edges
  }

  getEdges(){
    return this.edges
  }

  getEdge(id) {
    return this.edges[id]
  }

  async getNeighbors(id) {
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
    neighbors_ids.forEach(id => neighbors.push(this.getNode(id)))
    return neighbors
  }
}

export default new UnDirectedGraph()