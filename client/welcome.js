/*Helper for the welsome template*/
Template.welcome.helpers({
   loggedIn: function() {
      return Meteor.user();
   },
});
