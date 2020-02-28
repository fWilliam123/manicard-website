// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const hostAPI = 'http://api.manicards.com';
const link = `${hostAPI}/api/manicardsclient`;

export const environment = {
  production: false,
  host_api: hostAPI,
  // Obtain the instance of an entity
  get_entitie_instance_url: `${link}/get`,
  // Obtain all the instances of an entity
  get_all_entities_instances_url: `${link}/getall`,
  // Create the instance of an entity
  create_entitie_instance_url: `${link}/create`,
  // Update the instance of an entity
  update_entitie_instance_url: `${link}/update`,
  // Delete the instance of an entity
  delete_entitie_instance_url: `${link}/delete`,
  // To do a search
  search_entitie_instance_url: `${link}/search`,
  // Obtain the contents of the shopping cart
  get_cart_url: `${link}/getcart`,
  // Clear the shopping cart
  clear_cart_url: `${link}/clearcart`,
  // Availables languages
  languages: ['fr-CA', 'en-CA'],
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
