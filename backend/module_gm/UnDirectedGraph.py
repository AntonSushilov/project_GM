# UnDirectedGraph.py
import sys
import json

class UnDirectedGraph:
  def __init__(self, nodes, edges):
    if nodes:
      self.nodes = nodes
    else:
      self.nodes = {}
    if edges:
      self.edges = edges
    else:
      self.edges = {}

  def __str__(self) -> str:
    return str({
      'nodes': self.nodes,
      'edges': self.edges,
    })
  
  def getAllNode(self):
    return self.nodes
  
  def getOneNode(self, id):
    return self.nodes.get(id)
  
  def getAllEdge(self):
    return self.edges
  
  def getOneEdge(self, id):
    return self.edges.get(id)
  
  def getNeighbors(self, id):

    neighbors_ids = []
    neighbors = []
    for edge in self.edges.values():
      if edge.get('from') == id and not edge.get('to') in neighbors_ids:
        neighbors_ids.append(edge.get('to'))
      if edge.get('to') == id and not edge.get('from') in neighbors_ids:
        neighbors_ids.append(edge.get('from'))
    neighbors = [self.getOneNode(node) for node in neighbors_ids]    
    return neighbors


if __name__ == "__main__":
  args = sys.argv
  json_args = open(sys.argv[1])
  graph_args = json.load(json_args)
  json_obj = open(graph_args.get("nodes_path"))
  nodes = json.load(json_obj)
  json_obj = open(graph_args.get("edges_path"))
  edges = json.load(json_obj)

  graph = UnDirectedGraph(nodes,edges)
  func =  graph_args.get("function")
  func_args = graph_args.get("function_args")

  result = None
  if func == "getNeighbors":
    result = graph.getNeighbors(func_args.get('selected_node'))


  json_object_result = json.dumps(result, indent=2)
  with open(graph_args.get("path_result"), "w") as outfile:
    outfile.write(json_object_result)
  sys.stdout.flush()
  