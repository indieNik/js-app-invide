/* eslint-env node */
'use strict';

module.exports = function(/* environment, appConfig */) {
  // See https://github.com/san650/ember-web-app#documentation for a list of
  // supported properties

  return {
    name: "Artist Junction",
    short_name: "Artist Junction",
    description: "Search for your favorite Artists and their Tracks",
    start_url: "/",
    display: "standalone",
    background_color: "#EC6D51",
    theme_color: "#EC6D51",
    icons: [
      {
        src: "/images/logo-extra-large.png",
        sizes: "540x540",
        type: "image/png"
      }
    ],
    ms: {
      tileColor: '#EC6D51'
    }
  };
}
