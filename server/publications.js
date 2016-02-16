if (Meteor.isServer) {
  Meteor.publish('teams', function() {
    return Teams.find( {uId: this.userId} );
  });
}
