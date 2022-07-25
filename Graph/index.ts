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
