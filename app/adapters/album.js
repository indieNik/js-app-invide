import DS from 'ember-data';

export default DS.RESTAdapter.extend({
    host: "https://thingproxy.freeboard.io/fetch/http://www.theaudiodb.com",
    namespace: "api/v1/json/1",

    pathForType() {
        return "album.php";
    }
});
