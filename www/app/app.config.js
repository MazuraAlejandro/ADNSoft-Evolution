angular.module('adnsoft').
        config(['$routeProvider',
            function config($routeProvider) {
                $routeProvider.
                        when('/inicio', {
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
                        }).when('/desarrolloSoftware', {
                             controller: 'desarrolloSoftwareController',
                             templateUrl: 'app/template/desarrolloSoftware.html'
                        }).when('/alistamientoSoftware', {
                             controller: 'alistamientoSoftwareController',
                             templateUrl: 'app/template/alistamientoSoftware.html'
                        }).when('/comunityManager', {
                             controller: 'comunityManagerController',
                             templateUrl: 'app/template/comunityManager.html'
                        }).when('/marketingOnline', {
                             controller: 'marketingOnlineController',
                             templateUrl: 'app/template/marketingOnline.html'
                        }).when('/paginasWeb', {
                             controller: 'paginasWebController',
                             templateUrl: 'app/template/paginasWeb.html'
                        }).when('/soporteTecnico', {
                             controller: 'soporteTecnicoController',
                             templateUrl: 'app/template/soporteTecnico.html'
                        }).when('/testeo', {
                             controller: 'testeoController',
                             templateUrl: 'app/template/testeo.html'     
                }).
                        otherwise('/');
            }
        ]);
