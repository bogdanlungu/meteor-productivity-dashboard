Teams = new Mongo.Collection('teams');

Teams.allow({
   update: function(userId, token) { return ownsDocument(userId, token); },
   remove: function(userId, token) { return ownsDocument(userId, token); }
});

// Meteor methods for the collections
if(Meteor.isServer){
 Meteor.methods({
  addTeam: function(collectionAttributes){
    var team = _.extend(collectionAttributes, {
       uId:Meteor.userId(),
       date: new Date()
    });
    Teams.insert(team);
  },

  removeTeam: function(id){
    Teams.remove({_id: id});
  },

  editTeam: function(id, collectionAttributes){
    Teams.update({uId:Meteor.userId(), _id: id}, {$set: collectionAttributes});
  }
});
}
