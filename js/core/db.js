// js/core/db.js
const DB_NAME = "fire-crm";
let db;

export async function initDB() {
  db = await new Promise((resolve) => {
    const request = indexedDB.open(DB_NAME, 1);

    request.onupgradeneeded = () => {
      const d = request.result;

      d.createObjectStore("sku", { keyPath: "id" });
      d.createObjectStore("customer", { keyPath: "id" });
      d.createObjectStore("invoice", { keyPath: "id" });
    };

    request.onsuccess = () => resolve(request.result);
  });
}

export const dbAPI = {
  async getAll(store) {
    return new Promise(res => {
      const tx = db.transaction(store, 'readonly');
      const req = tx.objectStore(store).getAll();
      req.onsuccess = () => res(req.result);
    });
  },

  async get(store, id) {
    return new Promise(res => {
      const tx = db.transaction(store, 'readonly');
      const req = tx.objectStore(store).get(id);
      req.onsuccess = () => res(req.result);
    });
  },

  async add(store, data) {
    const tx = db.transaction(store, 'readwrite');
    tx.objectStore(store).add(data);
  },

  async put(store, data) {
    const tx = db.transaction(store, 'readwrite');
    tx.objectStore(store).put(data);
  }
};

export const db = dbAPI;