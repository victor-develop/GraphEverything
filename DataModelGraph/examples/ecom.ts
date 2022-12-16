import { Entity } from "./entity.schema"


export const order: Entity = {
  entity_id: 'order',
  schema_id: 'ecommerce-entities-v0',
  fields: [
    {
      field_id: 'order_id',
      properties: [{
        property_id: 'nullable',
        type: 'boolean',
        value: false,
        synced_from: null
      }, {
        property_id: 'field_type',
        type: 'string',
        value: 'string',
        minimum: 36,
        format: 'uuid-v4',
        synced_from: null,
        sync_to: [
          'shipment.order_id.field_type'
        ]
      }]
    }
  ]
}

export const shipment: Entity = {
  entity_id: 'shipment',
  schema_id: 'ecommerce-entities-v0',
  fields: [
    {
      field_id: 'shipment_id',
      properties: [
        {
          property_id: 'nullable',
          type: 'boolean',
          value: false,
          synced_from: null,
          sync_to: []
        }
      ]
    },
    {
      field_id: 'order_id',
      properties: [
        {
          property_id: 'nullable',
          type: 'boolean',
          value: true,
          synced_from: null,
          sync_to: []
        },
        {
          property_id: 'field_type',
          type: 'string',
          value: 'string',
          minimum: 36,
          format: 'uuid-v4',
          // key: sync info here,
          synced_from: 'order.order_id.field_type',
          sync_to: []
        }
      ]
    },
  ]
}
