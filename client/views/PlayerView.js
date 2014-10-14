// PlayerView.js - Defines a backbone view class for the music player.
var PlayerView = Backbone.View.extend({

  // HTML5 (native) audio tag is being used
  // see: https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Using_HTML5_audio_and_video
  el: '<audio controls autoplay />',

  initialize: function() {
    this.$el.on('ended', (function () { this.model.ended() }).bind(this) );
  },

  setSong: function(song){
    this.model = song;
    if(!this.model){
      this.el.pause();
    }
    this.render();
  },

  render: function(){
    return this.$el.attr('src', this.model ? this.model.get('url') : '');
  }

});

// // PlayerView.js - Defines a backbone view class for the music player.
// var PlayerView = Backbone.View.extend({

//   // HTML5 (native) audio tag is being used
//   // see: https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Using_HTML5_audio_and_video
//   el: '<audio controls autoplay />',

//   initialize: function() {
//   },

//   setSong: function(song){
//     this.model = song; // basically (AppView.playerView).setSong(model.get('currentSong')) will play the song
//     this.render();
//   },

//   render: function(){
//     //alert("in render");
//     return this.$el.attr('src', this.model ? this.model.get('url') : '');
//   }

// });
