// const resolveRoutes = (route) => route.length <= 3 ? (route === '/' ? route : '/:id') : `/${route}`;

const resolveRoutes = (route) => {
    if (route.length <= 3) {
      let validRoute = route === '/' ? route : '/:id';
      return validRoute;
    }
  }
  
  export default resolveRoutes;