/**
 * Created by rogerio.cassimiro on 01/08/15.
 */
"use strict";
app.controller('horaExtraController', ['$scope', function ($scope) {

    // Limpa o formulário e cria o objeto com valores default
    $scope.limparFormulario = function () {

        $scope.funcionario = {
            salarioBruto: null,
            jornadaTrabalho: null,
            horas: {
                extras: {
                    semanal: null,
                    domingo: null
                },
                adicionalNoturno: {
                    semanal: null,
                    domingo: null
                }
            },
            exibirResultado: false
        };
    };

    $scope.limparFormulario();

    $scope.calcularHE = function () {

        var valorTotalHESemanal = 0,
            valorTotalADSemanal = 0,
            valorTotalHEDomingo = 0,
            valorTotalADDomingo = 0,
            valorHora = 0,
            he = 1.5,
            head = 0.2,
            heD = 2,
            headD = 0.2;

        valorHora = calcularValorHora($scope.funcionario.salarioBruto, $scope.funcionario.jornadaTrabalho);

        $scope.funcionario.valorHoraNormal = valorHora;
        $scope.funcionario.valorHoraExtra = valorHora * he;
        $scope.funcionario.valorHoraAD = valorHora * head;
        $scope.funcionario.valorHoraExtraDomingo = valorHora * heD;
        $scope.funcionario.valorHoraADDomingo = valorHora * headD;

        valorTotalHESemanal = calcularTotal($scope.funcionario.horas.extras.semanal, he, valorHora);
        valorTotalADSemanal = calcularTotal($scope.funcionario.horas.adicionalNoturno.semanal, head, valorHora);
        $scope.funcionario.valorTotalHESemanal = valorTotalHESemanal;
        $scope.funcionario.valorTotalADSemanal = valorTotalADSemanal;

        valorTotalHEDomingo = calcularTotal($scope.funcionario.horas.extras.domingo, heD, valorHora);
        valorTotalADDomingo = calcularTotal($scope.funcionario.horas.adicionalNoturno.domingo, headD, valorHora);
        $scope.funcionario.valorTotalHEDomingo = valorTotalHEDomingo;
        $scope.funcionario.valorTotalADDomingo = valorTotalADDomingo;

        $scope.funcionario.valorTotal = valorTotalHESemanal + valorTotalADSemanal + valorTotalHEDomingo + valorTotalADDomingo;

        $scope.funcionario.exibirResultado = true;

    };

    function calcularValorHora(salarioBruto, jornadaTrabalho) {
        return salarioBruto / jornadaTrabalho;
    }

    function calcularTotal(horas, baseCalculoHora, baseCalculoValorHora) {
        return horas * baseCalculoHora * baseCalculoValorHora;
    }


}]);