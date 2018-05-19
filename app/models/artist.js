import DS from 'ember-data';

const {
    attr,
    hasMany
} = DS;

export default DS.Model.extend({
    artistName: attr(),
    artistThumbnail: attr(),

    album: hasMany("album")
});
