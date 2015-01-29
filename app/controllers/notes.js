
import Ember from "ember";

export default Ember.ArrayController.extend({
  actions: {
    newNote: function() {
      var body = this.get('noteCopy');
      var title =this.get('noteCopy2');
      if (body && title) {
        var note = this.store.createRecord('note', { body: body, title: title });
        this.set('noteCopy', '');
        this.set('noteCopy2', '');
        note.save();
        this.flashMessage('', 'Noted!', 1500);
      }
      else if (body) {
        this.flashMessage('', 'You forgot the title.', 1500);
      }
      else if (title) {
        this.flashMessage('', "You left your note blank. What's up with that?", 1500);
      }
      else {
        this.flashMessage('', 'Fill in both fields.', 1500);
      }
    },

    deleteNote: function (note_id) {
      this.store.find('note', note_id).then(function(lemon) {
        lemon.deleteRecord();
        lemon.save();
        this.flashMessage('', 'Deleted', 1500);
      }.bind(this));
    },
  }
});
