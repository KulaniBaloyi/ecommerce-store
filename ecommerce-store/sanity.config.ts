import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import schemas from './schemas'

export default defineConfig({
  name: 'default',
  title: 'Ecommerce Store',

  projectId: '4d1wziyv',
  dataset: 'production',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemas,
  },
})
