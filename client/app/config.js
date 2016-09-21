angular.module("app", ["ngRoute"])
  .config(($routeProvider) => {
    $routeProvider
      .when("/", {
        controller: "HomeCtrl",
        templateUrl: "app/home.html"
      })
      .when("/home", {
        controller: "HomeCtrl",
        templateUrl: "app/home.html"
      })
      .when("/classes", {
        controller: "ClassCtrl",
        templateUrl: "app/classes.html"
      })
      .when("/studios", {
        controller: "StudioCtrl",
        templateUrl: "app/studios.html"
      })
      .when("/login", {
        controller: "LoginCtrl",
        templateUrl: "app/login.html"
      })
      .otherwise("/");
  });
