export default function (context) {
  if (!process.server) {
    console.log('[Middleware] The Log Middleware is running')    
  }
}
