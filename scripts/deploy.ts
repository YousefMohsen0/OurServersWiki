/**
 *  Copyright (c) 2025 taskylizard. Apache License 2.0.
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */

import { execSync } from 'node:child_process'

const requiredEnvs = ['CLOUDFLARE_ACCOUNT_ID', 'CLOUDFLARE_KV_NAMESPACE_ID']

for (const env of requiredEnvs) {
  if (!process.env[env]) {
    console.error(`Error: Missing required environment variable ${env}`)
    process.exit(1)
  }
}

execSync('pnpm api:build', { stdio: 'inherit' })
execSync('pnpm exec wrangler deploy', { stdio: 'inherit' })