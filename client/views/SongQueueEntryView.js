// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({
  tagName: 'tr',

  template: _.template('<td>(<%= artist %>)</td><td><%= title %></td><td><button>+</button></td><td><button>-</button></td>'),

  events: {
    'click': function() {
      this.model.dequeue();
    }
  },

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }

});


// var SongQueueEntryView = Backbone.View.extend({
//   tagName: 'tr',

//   template: _.template('<td>(<%= artist %>)</td><td><%= title %></td>'),

//   events: {
//     'click': function() {
//       this.model.dequeue();
//     }
//   },

//   render: function(){
//     return this.$el.html(this.template(this.model.attributes));
//   }

// });

// // // SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
// // var SongQueueEntryView = Backbone.View.extend({
// //   // your code here!
  
// //   tagName: 'li', // list item
// //   queueTemplate: _.template('<li><%= title %> - <%= artist %></li>'), // html node template

// //   events: {
// //     'click': function() {
// //       debugger;
// //       this.model.enqueue(); // enqueue this item upon click form the library
// //     }
// //   }, // end events
  
// //   render: function(){
// //     return this.$el.html(this.queueTemplate(this.model.attributes));
// //   } // end render()

// // });
