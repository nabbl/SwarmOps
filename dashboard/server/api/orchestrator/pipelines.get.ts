import { readFile } from 'fs/promises'
import { join } from 'path'
import { getOrchestratorDataDir } from '../../config/environment'


export default defineEventHandler(async () => {
  try {
    const data = await readFile(join(getOrchestratorDataDir(), 'pipelines.json'), 'utf-8')
    return JSON.parse(data)
  } catch {
    return []
  }
})
