// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  urlConsultarEventos: 'http://localhost:8084/getAllEventos',
  urlVerEvento: 'http://localhost:8084/getEventoById',
  urlPuntosEvento: 'http://localhost:8084/getPuntosByEvento',
  urlPuntoByNombreEvento:'http://localhost:8084/getPuntosByEventoNombre',
  urlCreateEvento: 'http://localhost:8084/newEvento',
  urlDeleteEvento: 'http://localhost:8084/deleteEvento',
  urlUpdateEvento: 'http://localhost:8084/updateEvento',
  urlGetEventoByNombre: 'http://localhost:8084/getEventoByNombre',
  urlNewPunto: 'http://localhost:8084/newPunto',
  urlGetPuntoById: 'http://localhost:8084/getPuntoById',
  urlGetFuncionesByPunto: 'http://localhost:8084/getFuncionByPunto',
  urldeleteFuncion: 'http://localhost:8084/deleteFuncion',
  urlgetFuncionById: 'http://localhost:8084/getFuncionById',
  urlUpdateFuncion: 'http://localhost:8084/updateFuncion',
  urlNewFuncion: 'http://localhost:8084/newFuncion'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
