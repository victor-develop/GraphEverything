export type NodeID = string

export type Conn = {
  from: NodeID,
  to: NodeID
}

export type Node = {
  node_id: NodeID,
  name: string,
  connections: Conn[] // every conn has a from id that equals to Node.id
}

export type Graph = Node[]
