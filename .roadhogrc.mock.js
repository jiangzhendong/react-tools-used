import { format, delay } from 'roadhog-api-doc';
// 是否禁用代理
// const noProxy = process.env.NO_PROXY === 'true';
// const proxy = {};
// export default noProxy ? {
//     'GET /api/(.*)': 'http://127.0.0.1:8089/api',
//     'POST /api/(.*)': 'http://127.0.0.1:8089/api',
//   } : delay(proxy, 1000);
export default {
  'GET /api/(.*)': 'http://127.0.0.1:8089/api',
  'POST /api/(.*)': 'http://127.0.0.1:8089/api',
}
