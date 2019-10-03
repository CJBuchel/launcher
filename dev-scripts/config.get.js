
const { getCaddy } = require('./.get/get-caddy')
const { getMongo } = require('./.get/get-mongo')
const { getNpmModule } = require('./.get/get-npm-module')
const { getByHttp } = require('./.get/get-by-http')

// eslint-disable-next-line node/exports-style
module.exports = {
  modules: {
    caddy: {
      internal: true,
      get: getCaddy,
      devFiles: './init/'
    },
    clock: {
      get: getNpmModule,
      options: {
        package: '@first-lego-league/clock',
        version: '2.6.2'
      }
    },
    display: {
      get: getNpmModule,
      options: {
        package: '@first-lego-league/display',
        version: '2.6.3'
      }
    },
    'identity-provider': {
      get: getNpmModule,
      options: {
        package: '@first-lego-league/identity-provider',
        version: '1.1.8'
      }
    },
    mhub: {
      internal: true,
      get: getNpmModule,
      options: {
        package: 'mhub',
        version: '1.0.1'
      }
    },
    mongo: {
      internal: true,
      get: getMongo,
      devFiles: '**/*.pdb'
    },
    rankings: {
      get: getNpmModule,
      options: {
        package: '@first-lego-league/rankings',
        version: '1.0.10'
      }
    },
    scoring: {
      get: getNpmModule,
      options: {
        package: '@first-lego-league/scoring',
        version: '2.4.16'
      }
    },
    tournament: {
      get: getNpmModule,
      options: {
        package: '@first-lego-league/tournament',
        version: '2.1.6'
      }
    },
    'tournament-status': {
      get: getNpmModule,
      options: {
        package: '@first-lego-league/tournament-status',
        version: '1.3.0'
      }
    }
  },
  custom: {
    npm: getNpmModule,
    http: getByHttp
  }
}
