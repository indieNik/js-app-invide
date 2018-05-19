import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default Route.extend({
    
    model(params) {
        return RSVP.hash({
            tracks: this.store.query("track", { m: params.m}),
            album: this.store.peekRecord('album', params.m)
        }) 
        
    },
    
    actions: {
        closePopup() {
            this.transitionTo("album", this.controller.get("album").get("artistId").get("id"));
        }
    },

    setupController(controller, models) {
        this._super(...arguments);

        controller.set('tracks', models.tracks);
        controller.set('album', models.album);
        controller.set('albumArtist', models.album.albumArtist);
        controller.set('albumReleased', models.album.albumReleased);
    }

});
