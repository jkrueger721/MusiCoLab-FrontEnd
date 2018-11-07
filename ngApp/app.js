import angular from 'angular';
import uirouter from 'angular-ui-router';
import ngResource from 'angular-resource';
import uiBootstrap from 'angular-bootstrap-npm';
import {ProjectService} from './services/ProjectService'
import {HomeController} from './controllers/homeController';
import {AboutController} from './controllers/aboutController';
import {LoginController} from './controllers/loginController';
import {RegisterController} from './controllers/registerController';
import {CreateController} from './controllers/createController';
import {ListController} from './controllers/listController';
import {ProjectsController} from './controllers/projectController';
import {ProjectsDeleteController} from './controllers/listController';
import {ProjectsEditController} from './controllers/listController';
import {UserService} from './services/UserService';
import {ProfileController} from './controllers/profileController';





    angular.module('starterkit', [uirouter, ngResource, uiBootstrap]).service('projectService', ProjectService).service('userService', UserService).config(routing);

    routing.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];
    function routing($stateProvider, $urlRouterProvider, $locationProvider) {
        $stateProvider
           .state('home', {
            url: '/',
            templateUrl: '/ngApp/views/home.html',
            controller: HomeController,
            controllerAs: 'controller'
        })
        .state('about', {
            url: '/about',
            templateUrl: '/ngApp/views/about.html',
            controller: AboutController,
            controllerAs: 'controller'
        })
        .state('login', {
            url: '/login',
            templateUrl: '/ngApp/views/login.html',
            controller: LoginController,
            controllerAs: 'controller'
        })
        .state('register', {
            url: '/register',
            templateUrl: '/ngApp/views/register.html',
            controller: RegisterController,
            controllerAs: 'controller'
        })
        .state('profile',{
            url:'/profile',
            templateUrl: '/ngApp/views/profile.html',
            controller: ProfileController,
            controllerAs: 'controller'
        })
        .state('create', {
            url: '/create',
            templateUrl: '/ngApp/views/createProject.html',
            controller: CreateController,
            controllerAs: 'controller'
        })
        .state('delete',{
            url: '/delete/:id',
            templateUrl: '/ngApp/views/delete.html',
            controller: ProjectsDeleteController,
            controllerAs: 'controller'
        })
        .state('edit',{
            url: '/edit/:id',
            templateUrl: '/ngApp/views/edit.html',
            controller : ProjectsEditController,
            controllerAs: 'controller'
        })
        .state('list', {
            url: '/list',
            templateUrl: '/ngApp/views/list.html',
            controller: ListController,
            controllerAs: 'controller'
        })
        .state('project', {
            url: '/project',
            templateUrl: '/ngApp/views/project.html',
            controller: ProjectsController,
            controllerAs: 'controller'
        })
        .state('notFound', {
            url: '/notFound',
            templateUrl: '/ngApp/views/notFound.html'
        });
        $urlRouterProvider.otherwise('/notFound');
        $locationProvider.html5Mode(true);
    }
