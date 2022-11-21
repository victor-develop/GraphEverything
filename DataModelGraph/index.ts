import { Node, Conn } from '../Graph'
import { Primitives } from '../JsonSchema/primitives'

export type DataModelGraph = {
  entities: Entity[]
}

export type Entity = {
  entity_id: string,
  fields: Field[]
  sync_fields: SyncFieldConn[]
}

export type Field = {
  field_id: string
  properties: Record<string, Primitives>
}

export type SyncFieldConn = Conn & Field

