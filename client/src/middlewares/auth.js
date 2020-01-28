export default function auth({ next, store }) {
  // si pas de userActif authentifié
  if (!store.state.isAuth) {
    store.commit("logout");
    return next({ name: "login" });
  }
  return next();
}
