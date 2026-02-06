/**
 * Environment configuration
 * Centralized environment variable management for SwarmOps
 */

import { resolve } from 'path';
import { homedir } from 'os';

/**
 * Get the base data directory for SwarmOps
 * Uses SWARMOPS_DATA_DIR environment variable or falls back to default
 */
export function getDataDir(): string {
  return process.env.SWARMOPS_DATA_DIR || resolve(homedir(), '.swarmops', 'data');
}

/**
 * Get the orchestrator data directory
 */
export function getOrchestratorDataDir(): string {
  return resolve(getDataDir(), 'orchestrator');
}

/**
 * Get the work ledger directory
 */
export function getWorkDir(): string {
  return resolve(getOrchestratorDataDir(), 'work');
}

/**
 * Get the roles storage path
 */
export function getRolesPath(): string {
  return resolve(getOrchestratorDataDir(), 'roles.json');
}

/**
 * Get the sessions directory path
 */
export function getSessionsPath(): string {
  return resolve(getOrchestratorDataDir(), 'sessions', 'active.json');
}

/**
 * Get the prompts base directory
 */
export function getPromptsDir(): string {
  return resolve(getOrchestratorDataDir(), 'prompts');
}
