import DS from 'ember-data';

const {
    attr,
    belongsTo
} = DS;

export default DS.Model.extend({
    idAlbum: belongsTo("album"),
    idArtist: attr(),
    trackName: attr(),
    trackAlbum: attr(),
    trackArtist: attr(),
    trackDuration: attr(),
    trackVideo: attr()

});
