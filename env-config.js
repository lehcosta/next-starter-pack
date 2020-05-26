const prod = process.env.NODE_ENV === 'production'

module.exports = {
  BACKEND_URL: prod ? 'https://example.com' : 'http://localhost:8000',
}
