import DS from 'ember-data';

export default DS.RESTSerializer.extend({
    normalizeResponse(store, primaryModelClass, payload, id, requestType) {
        if(payload.album) {
            payload.album.forEach(album => {
                album.id = album.idAlbum;
                if (album.strAlbum.length > 25)
                    album.albumName = album.strAlbum.substring(0,23) + "..";
                else 
                    album.albumName = album.strAlbum
                album.albumArtist = album.strArtist;
                album.artistId = album.idArtist;
                album.albumReleased = album.intYearReleased;
    
                if(album.strAlbumThumb)
                    album.albumThumbnail = album.strAlbumThumb+"/preview";
                else 
                    album.albumThumbnail = "/images/no-thumbnail.png";
    
                delete album.idAlbum;
                delete album.strAlbum;
                delete album.strArtist
                delete album.strAlbumThumb;
            });
        } else {
            payload.album = [];
        }

        return this._super(store, primaryModelClass, payload, id, requestType);
    }    
});
