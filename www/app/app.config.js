angular.module('adnsoft').
        config(['$routeProvider',
            function config($routeProvider) {
                $routeProvider.
                        when('/', {
                            controller: 'inicioController',
                            templateUrl: 'app/template/inicio.html'
                        }).
                        when('/nosotros', {
                            controller: 'nosotrosController',
                            templateUrl: 'app/template/nosotros.html'
                        }).when('/servicios', {
                    controller: 'serviciosController',
                    templateUrl: 'app/template/servicios.html'
                }).when('/contactenos', {
                    controller: 'contactenosController',
                    templateUrl: 'app/template/contactenos.html'
                }).
                        otherwise('/');
            }
        ]);
