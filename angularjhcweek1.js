(function (){
	'use strict';
	angular.module('angularweek1jhc',[])
	.controller('week1',function($scope){
		week1.$inject =['$scope'];

	function week1 ($scope){
		$scope.dishlist = '';
		$scope.say = '';
		$scope.fun=function(){
			if($scope.dishlist !== '') {
				var arr = $scope.dishlist.split(',');
				var count =0;
				for(var i =0; i<arr.length; i++){
					if(arr[i].trim() !=='')
						count++;
				}
				if(count > 0){
					if(count <=3){
						$scope.say = 'Enjoy!';
					}
					else if(count > 3){
						$scope.say = 'Too much!'
					}
					
				}
				else {
					enterItems();
				}
			}
			else {
				enterItems();
			}
		}
		var enterItems = function() {
			$scope.say = 'Please enter data first';
				
		};
/*		    var d= dish($scope.dishes);
			if(dishlist.length<4)
				$scope.say="Enjoy";
			else
				$scope.say="Too much";
			
			
			var i-0;
			var count=0;
			for(i=0;i<dishlist.length;i++){
				count=count+1;
				
			}
		};
		function dish(string){
           const re = /\s*(?:;,|$)\s*/
 /*          const dishList = dishes.split(re
		} 
*/
	});
})();