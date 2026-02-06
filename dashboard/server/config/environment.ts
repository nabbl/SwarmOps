/**
 * Environment configuration for dashboard
 * Centralized environment variable management
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
 * Get the projects directory
 * Uses SWARMOPS_PROJECTS_DIR or PROJECTS_DIR environment variable or falls back to default
 */
export function getProjectsDir(): string {
  return process.env.SWARMOPS_PROJECTS_DIR || process.env.PROJECTS_DIR || resolve(homedir(), '.swarmops', 'projects');
}
