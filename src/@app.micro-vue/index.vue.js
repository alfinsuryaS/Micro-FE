import Vue from 'vue';
import singleSpaVue from 'single-spa-vue';
import App from './App'

const vueLifecycles = singleSpaVue({
  Vue,
  appOptions: {
    el: '#microservice-app-vue',
    render: r => r(App)
  } 
});

export const bootstrap = [
  vueLifecycles.bootstrap,
];

export const mount = [
  vueLifecycles.mount,
];

export const unmount = [
  vueLifecycles.unmount,
];