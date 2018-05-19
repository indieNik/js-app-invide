import DS from 'ember-data';

export default DS.RESTSerializer.extend({
    normalizeResponse(store, primaryModelClass, payload, id, requestType) {
        if(payload.artists) {
            payload.artists.forEach(artist => {
                artist.id = artist.idArtist;
                artist.artistName = artist.strArtist;
                if(artist.strArtistThumb)
                    artist.artistThumbnail = artist.strArtistThumb+"/preview";
                else 
                    artist.artistThumbnail = "/images/no-thumbnail.png";
    
                delete artist.idArtist;
                delete artist.strArtist;
                delete artist.strArtistThumb;
            });
        }
        else {
            payload.artists = [];
        }
        return this._super(store, primaryModelClass, payload, id, requestType);
    }    
});