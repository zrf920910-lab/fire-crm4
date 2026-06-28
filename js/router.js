// js/router.js
import { renderHome } from './modules/home.js';
import { renderSKU } from './modules/sku.js';
import { renderCustomer } from './modules/customer.js';
import { renderAccount } from './modules/account.js';

const routes = {
  home: renderHome,
  sku: renderSKU,
  customer: renderCustomer,
  account: renderAccount
};

export function initRouter() {
  navigate('home');
}

export function navigate(page) {
  const view = document.getElementById('view');
  view.innerHTML = '';
  routes[page]?.(view);
}