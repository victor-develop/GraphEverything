import {Node, Graph} from '../Graph'

export type DataModelGraph = {
  entities: Entity[]
}

export type Entity = Node & {
  entitiy
}