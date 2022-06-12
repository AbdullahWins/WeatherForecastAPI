// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  weatherApiBaseUrl: 'https://community-open-weather-map.p.rapidapi.com/weather',

  XRapidApiHostHeaderName: 'X-RapidAPI-Host',
  XRapidApiHostHeaderValue: 'community-open-weather-map.p.rapidapi.com',

  XRapidApiKeyHeaderName: 'X-RapidAPI-Key',
  XRapidApiKeyHeaderValue: 'dc66c5fc87msh06bf63a5e4871e4p178e50jsn585d982a8d20',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
