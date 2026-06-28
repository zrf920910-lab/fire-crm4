// js/modules/sku.js
import { db } from '../core/db.js';
import { log } from '../core/logger.js';

export async function renderSKU(root) {
  const skus = await db.getAll('sku');

  root.innerHTML = `
    <div>
      <input id="search" placeholder="搜索SKU"/>

      <button onclick="addSKU()">添加SKU</button>

      <div id="list">
        ${skus.map(s => `
          <div class="row">
            <div>${s.name}</div>
            <div>${s.price}</div>
            <button onclick="editSKU('${s.id}')">编辑</button>
          </div>
        `).join('')}
      </div>
    </div>
  `;

  window.addSKU = async () => {
    const name = prompt("SKU名称");
    const price = prompt("进货价");

    const sku = { id: Date.now(), name, price };

    await db.add('sku', sku);
    log('sku', 'add', null, sku);

    renderSKU(root);
  };

  window.editSKU = async (id) => {
    const sku = await db.get('sku', id);

    const price = prompt("修改价格", sku.price);
    sku.price = price;

    await db.put('sku', sku);
    log('sku', 'update', null, sku);

    renderSKU(root);
  };
}