const env = process.env.NODE_ENV || 'development'
const port = process.env.PORT || 4000
const dbURI = process.env.MONGODB_URI || `mongodb://localhost/chow-vow-${env}`
const secret = process.env.SECRET || 'noshlord'
const token = process.env.REACT_APP_MAPBOX

module.exports = { port, dbURI, secret, env, token }