// js/ui/layout.js
import { navigate } from '../router.js';

export function initLayout() {
  const app = document.getElementById('app');

  app.innerHTML = `
    <div id="view"></div>

    <div class="tabbar">
      <button onclick="window.nav('home')">首页</button>
      <button onclick="window.nav('sku')">商品</button>
      <button onclick="window.nav('customer')">客户</button>
      <button onclick="window.nav('account')">我的</button>
    </div>
  `;

  window.nav = navigate;
}