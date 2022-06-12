/*
Graph.ts
*/
export type NodeID = string

export type Conn = {
  from: NodeID,
  to: NodeID
}

export type Node = {
  id: NodeID,
  name: string
  connections: Conn[]
}

export type Graph = Node[]

/*
Events.ts
*/
type NodeDrag = 'node.dragged'
type NodeClick = 'node.clicked'
type NodeSelect = 'node.selected'
type NodesSelect = 'nodes.selected'
type BasicNodeEvents = NodeDrag | NodeClick | NodeSelect | NodesSelect
type EnhancedNodeEvents = NodePointEvents

type NodePointEventCallback = (args: {
  from: Node,
  to: Node
}, err: Error) => void

type NodeEventCallbackPayload = {
  node: Node,
  type: GraphEditorEvent
}
export type HandleNodeEvent = (e: GraphEditorEvent, callback: (p: NodeEventCallbackPayload, err: Error) => void) => void

/*
Events.NodePoint.ts
*/
type NodePointToEvent = 'node.pointed.to'
type NodePointFromEvent = 'node.pointed.from'
type NodePointEvents =  NodePointToEvent | NodePointFromEvent
type NodePointEventPayload = NodeEventCallbackPayload & {
  from: Node,
  to: Node
}

type HandleNodePointEvent = (
  e: NodePointEvents,
  callback: (
    p: NodePointEventPayload,
    err: Error
  ) => void
) => void

export type GraphEditorEvent = BasicNodeEvents | EnhancedNodeEvents

/*
Editor.ts
*/
export type EditorTrait = {
  render(g: Graph): void
  on: HandleNodeEvent | HandleNodePointEvent
}

export type EditorGraphLoader = {
  loadFromGithub(url: string): void
}



