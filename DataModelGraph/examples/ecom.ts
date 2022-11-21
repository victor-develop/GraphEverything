const order = {
  entity_id: 'order',
  schema_id: 'ecommerce-entities-v0',
  fields: [
    {
      field_id: 'order_id',
      schema_id: 'ecommerce-entities-v0',
      properties: [{
        property_id: 'nullable',
        type: 'boolean',
        value: false,
        synced_from: null
      }, {
        property_id: 'field_type',
        value: 'string',
        minimum: 36,
        format: 'uuid-v4',
        synced_from: null,
        sync_to: [
          'shipment.order_id.field_type'
        ]
      }]
    },
    {
      field_id: 'status',
      properties: [{
        type: 'string',
        id: false
      }]
    }
  ]
}

const shipment = {
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
        },
        {
          property_id: 'field_type',
          value: 'string',
          minimum: 36,
          format: 'uuid-v4',
          // key: sync info here,
          synced_from: 'order.order_id.field_type'
        }
      ]
    },
  ]
}