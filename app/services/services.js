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

    this.getPeopleList = function() {
        return this.list;
    };

}]);