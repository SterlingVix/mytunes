// LibraryEntryView.js - Defines a backbone view class for the entries that will appear within the library views. These will be inserted using the "subview" pattern.
var LibraryEntryView = Backbone.View.extend({

  tagName: 'tr',

  template: _.template('<td>(<%= artist %>)</td><td><%= title %></td>'),

  events: {
    'click': function() {
      this.model.enqueue();
    }
  },

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }

});

// // LibraryEntryView.js - Defines a backbone view class for the entries that will appear within the library views. These will be inserted using the "subview" pattern.
// var LibraryEntryView = Backbone.View.extend({

//   tagName: 'tr',

//   template: _.template('<td>(<%= artist %>)</td><td><%= title %></td>'),

//   events: {
//     'click': function() { // this 
// //       this.model.play();
// // debugger;
//       this.model.enqueue(); // enqueue this item upon click from the library
//     }
//   }, // end events

//   render: function(){
//     return this.$el.html(this.template(this.model.attributes));
//   }

// });