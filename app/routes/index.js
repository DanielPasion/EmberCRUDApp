import Route from '@ember/routing/route';

export default class IndexRoute extends Route {
    async model() {

      //Initializing posts
      let list_of_posts;

      //Peforming Get Requests
      let response = await fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json())
        .then((json) => list_of_posts = json);

      console.log(list_of_posts)
      //Returning the posts
      return list_of_posts
    }
  }