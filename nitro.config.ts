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

import nitroCloudflareBindings from 'nitro-cloudflare-dev'
import { defineNitroConfig } from 'nitropack/config'

export default defineNitroConfig({
  modules: [nitroCloudflareBindings],
  preset: 'cloudflare_module',
  compatibilityDate: '2024-11-01',
  runtimeConfig: {
    WEBHOOK_URL: process.env.WEBHOOK_URL
  },
  cloudflare: {
    wrangler: {
      name: 'ourserverswiki',
      account_id: process.env.CLOUDFLARE_ACCOUNT_ID,
      compatibility_date: '2024-11-01',
      compatibility_flags: ['nodejs_compat'],
      kv_namespaces: [
        {
          binding: 'STORAGE',
          id: process.env.CLOUDFLARE_KV_NAMESPACE_ID
        }
      ]
    }
  },
  output: {
    dir: './.output'
  },
  srcDir: 'api/',
  routeRules: {
    '/': {
      cors: false
    }
  }
})
