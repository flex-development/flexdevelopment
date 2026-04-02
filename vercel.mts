/**
 * @file vercel
 * @module config/vercel
 * @see https://vercel.com/docs/project-configuration/vercel-ts
 */

import type { VercelConfig } from '@vercel/config/v1'

/**
 * The vercel configuration.
 *
 * @see {@linkcode VercelConfig}
 *
 * @const {VercelConfig} config
 */
const config: VercelConfig = {
  buildCommand: '',
  cleanUrls: true,
  crons: [],
  devCommand: null,
  framework: null,
  git: { deploymentEnabled: false },
  headers: [],
  ignoreCommand: null,
  installCommand: null,
  outputDirectory: 'dist',
  public: false,
  redirects: [
    {
      destination: 'https://github.com/flex-development',
      source: '/',
      statusCode: 301
    }
  ],
  rewrites: [],
  routes: [],
  trailingSlash: false
}

export default config
