angular.module("app")
  .factory("RootFactory", ($http) => {

    const classApiGet = $http.get("http://localhost:8000/classes")
    const studioApiGet = $http.get("http://localhost:8000/studios")
    const userApiGet = $http.get("http://localhost:8000/users")
    // const classApiGet = $http.get("http://localhost:8000/")

    return {
      classRoot: classApiGet.then(res => res.data, console.error),
      studioRoot: studioApiGet.then(res => res.data, console.error),
      userRoot: userApiGet.then(res => res.data, console.error),
    }
  });
