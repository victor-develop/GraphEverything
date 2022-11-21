const schemas = {
  'ecommerce-entities-v0': {
    fields: {
      properties: [
        {
          name: ''
        }
      ]
    }
  }
}

const field_property_schem = {
    "type": "object",
    "properties": {
        "property_id": {
            "type": "string"
        },
        "type": {
            "type": "string"
        },
        "value": {
            "oneOf": [
                {
                    "type": "string"
                },
                {
                    "type": "boolean"
                },
                {
                    "type": "number"
                }
            ]
        },
        "synced_from": {
            "oneOf": [
                {
                    "type": "string"
                },
                {
                    "type": "null"
                },
                {
                    "type": "string"
                },
                {
                    "type": "string"
                },
                {
                    "type": "string"
                }
            ]
        },
        "sync_to": {
            "type": "array",
            "items": {
                "type": "string"
            }
        }
    },
    "required": [
        "property_id",
        "type"
    ]
}

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
        property_id: 'field_type',
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