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
        this.flashMessage('', 'Noted!', 2000);
      }
      else if (body) {
        this.flashMessage('', 'You forgot the title.');
      }
      else if (title) {
        this.flashMessage('', "You left your note blank. What's up with that?");
      }
      else {
        this.flashMessage('', 'Fill in both fields.');
      }
    },

    deleteNote: function (note_id) {
      var note = this.store.find('note', note_id).then(function(note) {
        note.deleteRecord();
        note.save();
      });
      this.flashMessage('', 'Deleted');
    },
  }
});
