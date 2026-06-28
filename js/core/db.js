// js/core/db.js

let dbInstance = null;

export async function initDB() {
  if (dbInstance) return dbInstance;

  dbInstance = await new Promise((resolve) => {
    const request = indexedDB.open("fire-crm", 1);

    request.onupgradeneeded = () => {
      const db = request.result;
      db.createObjectStore("sku", { keyPath: "id" });
      db.createObjectStore("customer", { keyPath: "id" });
      db.createObjectStore("invoice", { keyPath: "id" });
    };

    request.onsuccess = () => resolve(request.result);
  });

  return dbInstance;
}