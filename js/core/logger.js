// js/core/logger.js
import { db } from './db.js';

export async function log(module, action, before, after) {
  const record = {
    id: Date.now(),
    module,
    action,
    before,
    after,
    time: new Date().toISOString()
  };

  await db.add('logs', record);
}