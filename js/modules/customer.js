// js/modules/customer.js
import { db } from '../core/db.js';

export async function renderCustomer(root) {
  const customers = await db.getAll('customer');

  root.innerHTML = `
    <button onclick="addCustomer()">添加客户</button>

    ${customers.map(c => `
      <div class="row">
        <div>${c.name}</div>
        <button onclick="editCustomer('${c.id}')">编辑</button>
        <button onclick="price('${c.id}')">专属价格</button>
      </div>
    `).join('')}
  `;

  window.addCustomer = async () => {
    const name = prompt("公司名");

    await db.add('customer', {
      id: Date.now(),
      name
    });

    renderCustomer(root);
  };

  window.editCustomer = async (id) => {
    const c = await db.get('customer', id);

    c.phone = prompt("电话", c.phone || '');
    c.address = prompt("地址", c.address || '');

    await db.put('customer', c);
    renderCustomer(root);
  };

  window.price = (id) => {
    alert("进入客户SKU专属价格系统（后续扩展模块）");
  };
}