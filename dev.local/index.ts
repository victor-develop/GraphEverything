import fs from 'fs/promises'
import { readdir } from 'fs/promises';

const {
  quicktype,
  InputData,
  jsonInputForTargetLanguage,
  JSONSchemaInput,
  FetchingJSONSchemaStore,
} = require("quicktype-core");

const ac = new AbortController();
const { signal } = ac;

async function quicktypeJSONSchema(targetLanguage: string, typeName: string, jsonSchemaString: string) {
  const schemaInput = new JSONSchemaInput(new FetchingJSONSchemaStore());

  // We could add multiple schemas for multiple types,
  // but here we're just making one type from JSON schema.
  await schemaInput.addSource({ name: typeName, schema: jsonSchemaString });

  const inputData = new InputData();
  inputData.addInput(schemaInput);

  return await quicktype({
    inputData,
    lang: targetLanguage,
  });
}

const entity_types_path = `DataModelGraph/examples/entity.schema.ts`
const entity_schema_path = `DataModelGraph/examples/entity.schema.json`



export const dev = () => setInterval(() => {
  (async function() {
    const f = await fs.readFile(entity_schema_path)
    const { lines } = await quicktypeJSONSchema('typescript', 'Entity', f.toString())
    await fs.writeFile(
      entity_types_path,
      lines.join('\n')
    )
  })()
}, 3000)
