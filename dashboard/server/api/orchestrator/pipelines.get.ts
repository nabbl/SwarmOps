import { readFile } from 'fs/promises'
import { join } from 'path'
import { getOrchestratorDataDir } from '../../config/environment'

const DATA_DIR = getOrchestratorDataDir()

export default defineEventHandler(async () => {
  try {
    const data = await readFile(join(DATA_DIR, 'pipelines.json'), 'utf-8')
    return JSON.parse(data)
  } catch {
    return []
  }
})
