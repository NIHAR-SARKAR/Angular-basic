(function(){
	
	var app=angular.module("Myapp",[]);
    var mycontrol=function($scope){
        $scope.users=users;
        $scope.increment=increment;
        $scope.change=change;
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
            bs:"funk",
			marks:[{it:90},{it:75},{it:97}]
		},{
			name:"Nilanjan",
			id:"124",
			address:"new town",
            bs:"trol",
			marks:[{it:94},{it:65},{it:82}]
		},{
			name:"raktim",
			id:"125",
			address:"new town",
            bs:"",
			marks:[{it:91},{it:68},{it:87}]
		}];
    app.controller("mycontroller",mycontrol)

	
	
	}());