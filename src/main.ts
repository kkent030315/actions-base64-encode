import * as core from '@actions/core'
import {Buffer} from 'buffer'

const input: string = core.getInput('data')

async function run(): Promise<void> {
  try {
    const result: string = Buffer.from(input).toString('base64')
    core.setOutput('result', result)
  } catch (e) {
    if (e instanceof Error) core.setFailed(e.message)
  }
}

try {
  run()
} catch (e: any) {
  core.setFailed(e.message)
}
