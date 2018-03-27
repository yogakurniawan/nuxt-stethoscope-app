// import { fetchUser, fetchItems, fetchIdsByType } from "../api"
import firebase from 'firebase'
import Cookie from "js-cookie"

export default {
  async SIGN_UP({ commit }, { email, password }) {
    try {
      const user = await firebase.auth().createUserWithEmailAndPassword(email, password)
      commit('SET_USER', user)
    } catch (error) {
      commit('SET_ERROR', error)
    }
  },
  async SIGN_IN({ commit }, { email, password }) {
    try {
      const user = await firebase.auth().signInAndRetrieveDataWithEmailAndPassword(email, password)
      commit('SET_USER', user)
    } catch (error) {
      commit('SET_ERROR', error)
    }
  }
  // async AUTHENTICATE_USER({ commit, state }, payload) {
  //   let authUrl =
  //     "https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=" +
  //     process.env.fbAPIKey;
  //   if (!payload.isLogin) {
  //     authUrl =
  //       "https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=" +
  //       process.env.fbAPIKey;
  //   }
  //   await fire
  //   return this.$axios
  //     .$post(authUrl, {
  //       email: payload.email,
  //       password: payload.password,
  //       returnSecureToken: true
  //     })
  //     .then(result => {
  //       vuexContext.commit("setToken", result.idToken);
  //       localStorage.setItem("token", result.idToken);
  //       localStorage.setItem(
  //         "tokenExpiration",
  //         new Date().getTime() + Number.parseInt(result.expiresIn) * 1000
  //       );
  //       Cookie.set("jwt", result.idToken);
  //       Cookie.set(
  //         "expirationDate",
  //         new Date().getTime() + Number.parseInt(result.expiresIn) * 1000
  //       );
  //     })
  //     .catch(e => console.log(e));
  // },
  // initAuth(vuexContext, req) {
  //   let token;
  //   let expirationDate;
  //   if (req) {
  //     if (!req.headers.cookie) {
  //       return;
  //     }
  //     const jwtCookie = req.headers.cookie
  //       .split(";")
  //       .find(c => c.trim().startsWith("jwt="));
  //     if (!jwtCookie) {
  //       return;
  //     }
  //     token = jwtCookie.split("=")[1];
  //     expirationDate = req.headers.cookie
  //       .split(";")
  //       .find(c => c.trim().startsWith("expirationDate="))
  //       .split("=")[1];
  //   } else {
  //     token = localStorage.getItem("token");
  //     expirationDate = localStorage.getItem("tokenExpiration");
  //   }
  //   if (new Date().getTime() > +expirationDate || !token) {
  //     console.log("No token or invalid token");
  //     vuexContext.dispatch("logout");
  //     return;
  //   }
  //   vuexContext.commit("setToken", token);
  // },
  // logout(vuexContext) {
  //   vuexContext.commit("clearToken");
  //   Cookie.remove("jwt");
  //   Cookie.remove("expirationDate");
  //   if (process.client) {
  //     localStorage.removeItem("token");
  //     localStorage.removeItem("tokenExpiration");
  //   }
  // }
}