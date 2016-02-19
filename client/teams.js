Meteor.subscribe('teams');

Template.teams.helpers({
  teams: function(){
    return Teams.find({}, {sort: {title: 1}});
  },

  countTeams: function(){
    return Teams.find({}).count();
  }
});

Template.teams.events({
  'click .add': function(e){
    e.preventDefault();
    var teamName = $('#team').val();
    if(teamName.length > 3){
      var team = {};
      team.title = teamName;
      Meteor.call("addTeam", team, function(error, result){
        if(error){
           NotesErrors.throwError("The team could not be saved!");
        }else{
           NotesErrors.throwNotification("The team was saved!");
           $('#team').val("");
        }
      });
    }else{
      NotesErrors.throwError("Please add a team name!");
    }
  }
});

// Angular below which runs only on client
if (Meteor.isClient) {
  angular.module('listApp',['angular-meteor']);
  angular.module('listApp').controller('ListController', ['$scope',
    function ($scope) {
      $scope.teams = [
        { name: 'Team 1' },
        { name: 'Team 2' },
        { name: 'Team 3' }
      ];
  }]);
}
