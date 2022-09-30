import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'
import { copy } from './file.js'
import { renameSync } from 'fs'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const ROOT_PATH = resolve(__dirname, '..')
const input = `${ROOT_PATH}/src/styles`
const output = `${ROOT_PATH}/dist`

copy(input, output)
renameSync(`${output}/styles`, `${output}/theme-chalk`)
