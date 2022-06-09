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

type NodeDrag = 'node.drag'
type NodeClick = 'node.click'
type NodeSelect = 'node.select'
type NodesSelect = 'nodes.select'

export type GraphEditorEvent = NodeDrag | NodeClick | NodeSelect | NodesSelect

export type EditorTrait = {
  render(g: Graph): void
  on(e: GraphEditorEvent, callback: any): void
}

