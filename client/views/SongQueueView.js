// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  tagName: "table",

  initialize: function() {
    this.collection.on('add remove', this.render, this);
    this.render();
  },

  render: function() {
    this.$el.children().detach();

    return this.$el.html('<th>Song Queue</th>').append(
      this.collection.map(function(song){
        return new SongQueueEntryView({model: song}).render();
      })
    );
  }

});

// // SongQueueView.js - Defines a backbone view class for the song queue.
// var SongQueueView = Backbone.View.extend({

//   tagName: "ol", // making the queue an ordered list

//   initialize: function() {
//     this.render(); // render this view upon initialization
//   },
  
//   render: function() {
//     // to preserve event handlers on child nodes, we must call .detach() on them before overwriting with .html()
//     // see http://api.jquery.com/detach/
//     this.$el.children().detach();
    
// //     this.$el.html('<ol>').append('<h1>Queue</h1>').append(
//     this.$el.html('<h1>Queue</h1>').append(
//       this.collection.map(function(songQueue){
//         return new SongQueueEntryView({model: songQueue}).render();
//       })
//     );
    
    
//     // return this.$el; // this came with the function?
//   }

// });
