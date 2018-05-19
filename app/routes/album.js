import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default Route.extend({
    
    model(params) {
        return RSVP.hash({
            albums: this.store.query("album", { i: params.i}),
        })
    },
    
    actions: {
        goBack() {
            let searchText = localStorage.getItem("searchText");
            this.transitionTo("artists", searchText+"%");
        }
    },
    
    setupController(controller, models) {
        this._super(...arguments);
        
        controller.set('albums', models.albums);
        controller.set('artist', controller.get('albums').firstObject.get("artistId"));
    }
});
