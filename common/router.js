/**
 * Iron Router configuration
 */

Router.configure({
   layoutTemplate: 'layout',
   loadingTemplate: 'loader',
   notFoundTemplate: 'notFound',
   progressSpinner: false,
   progressDelay : false
});

Router.route('/', {name: 'welcome'});
Router.route('/teams', {name: 'teams'});
Router.route('/not_found', {name: 'notFound'});
