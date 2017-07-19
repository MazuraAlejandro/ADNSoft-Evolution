<!DOCTYPE html>
<html ng-app="adnsoft">
    <head>
        <meta charset="UTF-8">
        <title>ADNsoftEvolution</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
        <link rel="stylesheet" href="css/bootstrap.min.css">
        <link rel="stylesheet" href="css/bootstrap-theme.min.css">
        <link rel="stylesheet" href="css/font-awesome.min.css">
        <link rel="stylesheet" href="css/estilo.css">
    </head>
    <body>

        <div ng-view ng-cloak></div>

        <script src="js/angular-1.6.1/angular.min.js"></script>
        <script src="js/angular-1.6.1/angular-route.min.js"></script>

        <script src="js/jquery-1.12.4.min.js"></script>
        <script src="js/bootstrap.min.js"></script>

        <script src="app/app.js" type="text/javascript"></script>
        <script src="app/app.config.js" type="text/javascript"></script>
        
        <script src="app/controller/controller.inicio.js"></script>
        <script src="app/controller/controller.contactenos.js"></script>
        <script src="app/controller/controller.nosotros.js"></script>
        <script src="app/controller/controller.desarrolloSoftware.js"></script>
        <script src="app/controller/controller.alistamientoSoftware.js"></script>
        <script src="app/controller/controller.comunityManager.js"></script>
        <script src="app/controller/controller.marketingOnline.js"></script>
        <script src="app/controller/controller.paginasWeb.js"></script>
        <script src="app/controller/controller.soporteTecnico.js"></script>
        <script src="app/controller/controller.testeo.js"></script>

    </body>
</html>