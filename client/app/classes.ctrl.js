angular.module("app")
  .controller("ClassCtrl", function($scope) {
    // add RootFactory and $http back as a dependency when you get to this part

    // RootFactory.root.then(function(data) {
    //   $scope.classes = data
    //   console.log($scope.classes)
    // });

    $scope.classes = [
        {
            id: 1,
            name: 'CrossFitting Around!',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque fermentum a eros a porta. Aliquam a dolor risus. Donec semper lacinia purus nec volutpat.',
            tag: 'Interval Training',
            start_time: '2016-09-21 18:00:00',
            end_time: '2016-09-21 19:00:00',
            capacity: 10,
            cost: 15,
            studio_id: 2
        },
        {
            id: 2,
            name: 'Yoga Shmoga!',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque fermentum a eros a porta. Aliquam a dolor risus. Donec semper lacinia purus nec volutpat.',
            tag: 'Yoga',
            start_time: '2016-09-22 18:00:00',
            end_time: '2016-09-22 19:00:00',
            capacity: 20,
            cost: 20,
            studio_id: 1
        },
        {
            id: 3,
            name: 'Just Dance!',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque fermentum a eros a porta. Aliquam a dolor risus. Donec semper lacinia purus nec volutpat.',
            tag: 'Dance',
            start_time: '2016-09-23 18:00:00',
            end_time: '2016-09-23 19:00:00',
            capacity: 30,
            cost: 10,
            studio_id: 1
        },
    ]

    $scope.featuredClass = $scope.classes[0];
  });
