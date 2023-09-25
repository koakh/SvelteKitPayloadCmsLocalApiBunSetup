// eslint-disable-next-line @typescript-eslint/no-var-requires
const { buildConfig } = require('payload/config');
// import Users from './collections/Users.cjs';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const Users = require('./lib/server/collections/Users.cts');

module.exports = buildConfig({
  // debug: true,
  collections: [
    Users,
  ],
  // optional customization of routes
  // routes: {
  //   api: '/payload',
  //   admin: '/admin',
  //   graphQL: '/graphql',
  //   graphQLPlayground: '/graphql-playground',
  // },
});