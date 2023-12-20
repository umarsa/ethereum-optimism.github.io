import { z } from 'zod'
import { zWebsite } from './Website'
import { zNetworkName } from './NetworkName'
/**
 * Validator for valid token data JSON
 */
export const zTokenDataJson = z.strictObject({
  /**
   * Token props
   */
  name: z.string().describe('Token name'),
  symbol: z.string().describe('Token symbol'),
  decimals: z.number().int().min(0).max(18).describe('Token decimals'),
  /**
   * Bridge props
   */
  nonstandard: z.boolean().optional().describe('Whether the token is non-standard'),
  nobridge: z.boolean().optional().describe('Whether the token is not bridged'),
  /**
   * Project info
   */
  description: z.string().min(1).max(1000).optional().describe('Token description'),
  website: zWebsite.optional().describe('Project website for token'),
  twitter: zWebsite.optional().describe('Project website for token'),
  tokens: z.record(zNetworkName)
})

/**
 * Valid token data JSON
 */
export type TokenDataJson = z.infer<typeof zTokenDataJson>
