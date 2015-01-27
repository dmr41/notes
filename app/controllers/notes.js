import Ember from "ember";

export default Ember.ArrayController.extend({
  actions: {
    newNote: function() {
      var body = this.get('noteCopy');
      var title =this.get('noteCopy2');
      if (body || title) {
        var note = this.store.createRecord('note', { body: body, title: title });
        this.set('noteCopy', '');
        this.set('noteCopy2', '');
        note.save();

      }
    },
    deleteNote: function (note_id) {
      var note = this.store.find('note', note_id).then(function(note) {
        note.deleteRecord();
        note.save();
      });
    },

    formSubmitted: function() {
      this.flashMessage('success', 'Congratulations! Your changes have been saved');
  }

  }
});
