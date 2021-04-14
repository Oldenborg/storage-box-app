# storage-box-app
This is ment to be a demo application for anyone interested in setting up a functioning vue+firebase application. It gets you up and running with a vue and firebase in a matter of minutes. You can explore each individual commit to see the small steps it took to create this application.

This app uses the following external libraries

#### Firebase (specifically Cloud Firestore and Authentication)
*Authentication:*
Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more.

*Database*
Firebase offers two cloud-based, client-accessible database solutions that support realtime data syncing:

**Cloud Firestore** is Firebase's newest database for mobile app development. It builds on the successes of the Realtime Database with a new, more intuitive data model. Cloud Firestore also features richer, faster queries and scales further than the Realtime Database.

**Realtime Database** is Firebase's original database. It's an efficient, low-latency solution for mobile apps that require synced states across clients in realtime.

As mentioned we are going to use Cloud Firestore

#### Buefy
Buefy is a user interface component library made on top of two fresh but very well known frameworks, them being Vue.js and Bulma. Buefy has two core principles: 1. keep stuff simple and 2. be lightweight.

#### Vuexfire
Vuexfire is a small and pragmatic solution to create realtime bindings between a Firebase RTDB or a Firebase Cloudstore and your Vuex store. Making it straightforward to always keep your store state in sync with remotes databases.

# To get started follow these steps

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## Further reading
[Understand firebase projects](https://firebase.google.com/docs/projects/learn-more?authuser=0#config-files-objects
)
[Buefy documentation](https://buefy.org/documentation)
[Vuexfire documentation](https://vuefire.vuejs.org/vuexfire/)
