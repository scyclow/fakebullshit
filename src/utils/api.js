

const API_ROOT = '/';

async function get(route = '', headers = {}) {
  const response = await fetch(API_ROOT + route, { headers });
  return response.json();
}

async function post(route = '', withBody = {}, withHeaders = {}) {
  const method = 'POST';
  const headers = Object.assign({ 'Content-Type': 'application/json' }, withHeaders);
  const body = JSON.stringify(withBody);

  const response = await fetch(API_ROOT + route, { headers, body, method });
  return response.json();
}

module.exports = { get, post, root: API_ROOT };
