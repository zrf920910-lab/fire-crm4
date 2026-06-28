import { initRouter } from './router.js';
import { initDB } from './core/db.js';
import { initLayout } from './ui/layout.js';

await initDB();
initLayout();
initRouter();

// PWA
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js');
}