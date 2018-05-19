import DS from 'ember-data';

export default DS.RESTSerializer.extend({
    normalizeResponse(store, primaryModelClass, payload, id, requestType) {
        if(payload.track) {
            payload.track.forEach(track => {
                track.id = track.idTrack;
                track.idAlbum = track.idAlbum;
                track.idArtist = track.idArtist;
                track.trackName = track.strTrack;
                track.trackAlbum = track.strAlbum;
                track.trackArtist = track.strArtist;
    
                let ms = track.intDuration;
                let secs = ms / 1000;
                let trackMins = Math.floor(secs / 60);
                let trackSeconds = Math.round(secs % 60);
    
                let trackDuration = "" + trackMins + ":" + trackSeconds;
                track.trackDuration = trackDuration;
                track.trackVideo = track.strMusicVid;
    
                delete track.strTrack;
                delete track.strAlbum;
                delete track.strArtist
                delete track.intDuration;
                delete track.strMusicVid;
            });
        } else {
            payload.track = [];
        }
        return this._super(store, primaryModelClass, payload, id, requestType);
    }
});
