/**
 * Created by rogerio.cassimiro on 01/08/15.
 */
'use strict';
app.directive('directiveContatoPessoal', function () {
    return {
        restrict : 'E',
        templateUrl: 'directives/directiveContatoPessoal.html',
        link : function($scope) {
            $scope.app = {
                header: "Cálculo de hora extra",
                autor: {
                    nome: "Rog\u00e9rio Cassimiro de Souza",
                    contato: {
                        email: "rogerioinhumas@gmail.com",
                        github : "http://github.com/rogeriocassimiro",
                        linkedin :"https://br.linkedin.com/pub/rog\u00e9rio-cassimiro-de-souza/40/476/b30"
                    }
                }
            };
        }
    };
});