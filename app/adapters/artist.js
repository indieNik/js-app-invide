import DS from 'ember-data';

export default DS.RESTAdapter.extend({
    host: "https://thingproxy.freeboard.io/fetch/http://www.theaudiodb.com",
    namespace: "api/v1/json/1",

    pathForType() {
        return "search.php";
    },

    urlForFindRecord(id, modelName, snapshot) {
        // let baseUrl = this.buildURL(modelName, id, snapshot);
        // console.log("Hit the Find Record Override..")
        return `http://www.theaudiodb.com/api/v1/json/1/artist.php?i=${id}`;
    }    
});
