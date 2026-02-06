/**
 * Environment configuration
 * Centralized environment variable management for SwarmOps
 */

import { resolve } from 'path';
import { homedir } from 'os';

// Memoization cache
let _dataDir: string | undefined;
let _orchestratorDataDir: string | undefined;
let _workDir: string | undefined;
let _rolesPath: string | undefined;
let _sessionsPath: string | undefined;
let _promptsDir: string | undefined;

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
 * Get the work ledger directory
 */
export function getWorkDir(): string {
  if (!_workDir) {
    _workDir = resolve(getOrchestratorDataDir(), 'work');
  }
  return _workDir;
}

/**
 * Get the roles storage path
 */
export function getRolesPath(): string {
  if (!_rolesPath) {
    _rolesPath = resolve(getOrchestratorDataDir(), 'roles.json');
  }
  return _rolesPath;
}

/**
 * Get the sessions directory path
 */
export function getSessionsPath(): string {
  if (!_sessionsPath) {
    _sessionsPath = resolve(getOrchestratorDataDir(), 'sessions', 'active.json');
  }
  return _sessionsPath;
}

/**
 * Get the prompts base directory
 */
export function getPromptsDir(): string {
  if (!_promptsDir) {
    _promptsDir = resolve(getOrchestratorDataDir(), 'prompts');
  }
  return _promptsDir;
}
