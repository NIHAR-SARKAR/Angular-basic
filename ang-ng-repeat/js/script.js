(function(){
	
	var app=angular.module("Myapp",[]);
    var mycontrol=function($scope){
        $scope.users=users;
    }
    
    var users=[{
			name:"Nihar", 
			id:"123",
			address:"new town",
			marks:[{it:"90"},{it:"75"},{it:"97"}]
		},{
			name:"mita",
			id:"124",
			address:"new town",
			marks:[{it:"94"},{it:"65"},{it:"82"}]
		},{
			name:"ishita",
			id:"125",
			address:"new town",
			marks:[{it:"91"},{it:"68"},{it:"87"}]
		}];
    app.controller("mycontroller",mycontrol)

	
	
	}());