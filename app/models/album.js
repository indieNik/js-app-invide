import DS from 'ember-data';


const {
    attr,
    belongsTo,
    hasMany
} = DS;

export default DS.Model.extend({
    artistId: belongsTo("artist"),
    track: hasMany("track"),

    albumName: attr(),
    albumThumbnail: attr(),
    albumArtist: attr(),
    albumReleased: attr()

});
