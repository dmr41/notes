import DS from "ember-data";

// export default DS.LSAdapter.extend({});
//
// export default DS.RESTAdapter.extend({
//   host: 'http://localhost:3000'
//   });

export default DS.ActiveModelAdapter.extend({
  host: 'https://dmr-notes-api.herokuapp.com'
  });
