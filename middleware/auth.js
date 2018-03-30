export default function(context) {
  // Hydrate current user information from cookies or localStorage
  context.store.dispatch("INIT_AUTH", context.req);

  // Check if user already logged in
  // if not it will redirect to signin page
  const isAuthenticated = context.store.getters.isAuthenticated
  if (!isAuthenticated) {
    context.redirect("/signin");
  }
}
