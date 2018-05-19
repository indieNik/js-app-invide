import Route from '@ember/routing/route';

export default Route.extend({
    
    actions: {
        searchArtistsByName(searchText) {
            localStorage.setItem("searchText", searchText);
            this.transitionTo("artists", searchText+"%");
        }
    }
});
