import { Router } from "express";
import unDirectedGraphController from "../controllers/un_directed_graph.controller.js";

const unDirectedGraphRouter = new Router()

unDirectedGraphRouter.post("/uploadfile", unDirectedGraphController.uploadFiles)
unDirectedGraphRouter.get("/graph", unDirectedGraphController.getGraph)
unDirectedGraphRouter.get("/graph/nodes", unDirectedGraphController.getAllNodes)
unDirectedGraphRouter.get("/graph/nodes/:id", unDirectedGraphController.getOneNode)
unDirectedGraphRouter.get("/graph/edges", unDirectedGraphController.getAllEdges)
unDirectedGraphRouter.get("/graph/edges/:id", unDirectedGraphController.getOneEdge)
unDirectedGraphRouter.get("/graph/nodes/neighbors/:id", unDirectedGraphController.getGraphNodeNeighbors)

export default unDirectedGraphRouter