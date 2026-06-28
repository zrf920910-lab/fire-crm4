// js/modules/home.js
import { navigate } from '../router.js';

export function renderHome(root) {
  root.innerHTML = `
    <div class="grid">
      <button onclick="alert('销售单')">销售单</button>
      <button onclick="alert('报价单')">报价单</button>
      <button onclick="alert('采购普票')">采购合同（普票）</button>
      <button onclick="alert('采购专票')">采购合同（专票）</button>
    </div>
  `;
}