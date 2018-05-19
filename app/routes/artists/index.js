import Route from '@ember/routing/route';

export default Route.extend({
    model(params) {
        return this.store.query("artist", { s: params.s});
    },

    actions: {
        searchArtistsByName(searchText) {
            localStorage.setItem("searchText", searchText);
            this.transitionTo("artists", searchText+"%");
        }
    }
});
