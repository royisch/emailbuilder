angular.module('App').service("testModel", [function() {
    console.log('service initialized');
    var person1 = {
            name: "name1",
            id:1
        },
        person2 = {
            name: "name2",
            id:2
        }

    this.list = [person1, person2];
    this.type = 'a';

    this.getPeopleList = function() {
        return this.list;
    };

    this.setType = function(type) {
        this.type = type;
    };

    this.getType = function() {
        return this.type;
    };

    

}]);