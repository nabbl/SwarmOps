/**
 * Environment configuration for dashboard
 * Centralized environment variable management
 */

import { resolve } from 'path';
import { homedir } from 'os';

// Memoization cache
let _dataDir: string | undefined;
let _orchestratorDataDir: string | undefined;
let _projectsDir: string | undefined;

/**
 * Get the base data directory for SwarmOps
 * Uses SWARMOPS_DATA_DIR environment variable or falls back to default
 */
export function getDataDir(): string {
  if (!_dataDir) {
    _dataDir = process.env.SWARMOPS_DATA_DIR || resolve(homedir(), '.swarmops', 'data');
  }
  return _dataDir;
}

/**
 * Get the orchestrator data directory
 */
export function getOrchestratorDataDir(): string {
  if (!_orchestratorDataDir) {
    _orchestratorDataDir = resolve(getDataDir(), 'orchestrator');
  }
  return _orchestratorDataDir;
}

/**
 * Get the projects directory
 * Uses SWARMOPS_PROJECTS_DIR or PROJECTS_DIR environment variable or falls back to default
 */
export function getProjectsDir(): string {
  if (!_projectsDir) {
    _projectsDir = process.env.SWARMOPS_PROJECTS_DIR || process.env.PROJECTS_DIR || resolve(homedir(), '.swarmops', 'projects');
  }
  return _projectsDir;
}
