(function(){
    'use strict';
    angular.module('assignment1',[])
    
    
    .controller("LunchCheckController",function ($scope){
        $scope.lists= "";
        $scope.TextColor= "red";
        $scope.message = "Please enter data first!";
        $scope.deisNum= function (){
            var messageMe = countItmes($scope.lists);
            if(messageMe != 0){
            $scope.message = messageMe;
            $scope.TextColor= "green";
        }
        };
    
    
        function countItmes(string){
            var words = string.split(',');
            var counter = 0;
            var word = "";
            for(var i = 0; i < words.length ; i++){
                word = words[i].replace(" ","");
                console.log(word);
                if(word!=""){
                    counter++;
                }
            }
            if(counter == 0){
                return 0;
            }
            else if(counter <= 3){
                return "Enjoy!";
            }else{
                return "Too much!";
            }
        }
    });
    
    
    })();