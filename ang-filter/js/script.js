(function(){
	
	var app=angular.module("Myapp",[]);
    var mycontrol=function($scope){
        $scope.users=users;
        $scope.increment=increment;
        $scope.change=change;
        $scope.count=3;
        $scope.indexFrom=0;
    }
    //marks increment
    var increment=function(marks){
        marks.it+=1;
    }
    //id increment
    var change=function(num){
       num.id=Number(num.id)+1;
    }
    var users=[{
			name:"Nihar", 
			id:"123",
			address:"new town",
            bs:new Date("April 30 1993"),
			marks:[{it:90},{it:88},{it:97}]
		},{
			name:"Nilanjan",
			id:"194",
			address:"baguiaty",
            bs:new Date("October 20 1993"),
			marks:[{it:94},{it:65},{it:82}]
		},{
			name:"raktim",
			id:"129",
			address:"new town",
            bs:new Date("November 20 1994"),
			marks:[{it:97},{it:81},{it:79}]
		},{
			name:"kaushik",
			id:"126",
			address:"Howrah",
            bs:new Date("November 20 1994"),
			marks:[{it:81},{it:89},{it:78}]
		},{
			name:"Malhotra",
			id:"287",
			address:"dumDum",
            bs:new Date("july 23 1994"),
			marks:[{it:91},{it:68},{it:87}]
		}];
    app.controller("mycontroller",mycontrol)

	
	
	}());