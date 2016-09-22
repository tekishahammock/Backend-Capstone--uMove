angular.module("app")
  .controller("ClassCtrl", function($scope, RootFactory, $http, $timeout) {

    RootFactory.classRoot.then(function(data) {
        $scope.classObject = data;
        $scope.classes = $scope.classObject.results;
        console.log($scope.classes)
        return $scope.classes
    }).then(classes => $scope.featured_class(classes[0]), $timeout());


    $scope.classDetailEvent = () => {
        $scope.classUrl = event.target.id;
        console.log($scope.classUrl)
    }

    $scope.featured_class = (chosenClass) => {
        $scope.featuredClass = chosenClass;
        // $http.get(chosenClass).then(data => $scope.featuredClass = data);
    }



    // $scope.classes = [
    //     {
    //         id: 1,
    //         name: 'CrossFitting Around!',
    //         description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque fermentum a eros a porta. Aliquam a dolor risus. Donec semper lacinia purus nec volutpat.',
    //         tag: 'Interval Training',
    //         start_time: '2016-09-21 18:00:00',
    //         end_time: '2016-09-21 19:00:00',
    //         capacity: 10,
    //         cost: 15,
    //         studio_id: 2
    //     },
    //     {
    //         id: 2,
    //         name: 'Yoga Shmoga!',
    //         description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque fermentum a eros a porta. Aliquam a dolor risus. Donec semper lacinia purus nec volutpat.',
    //         tag: 'Yoga',
    //         start_time: '2016-09-22 18:00:00',
    //         end_time: '2016-09-22 19:00:00',
    //         capacity: 20,
    //         cost: 20,
    //         studio_id: 1
    //     },
    //     {
    //         id: 3,
    //         name: 'Just Dance!',
    //         description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque fermentum a eros a porta. Aliquam a dolor risus. Donec semper lacinia purus nec volutpat.',
    //         tag: 'Dance',
    //         start_time: '2016-09-23 18:00:00',
    //         end_time: '2016-09-23 19:00:00',
    //         capacity: 30,
    //         cost: 10,
    //         studio_id: 1
    //     },
    // ]

  });
