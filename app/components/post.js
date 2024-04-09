import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class PostComponent extends Component {
   //Function to retrieve the postID on click
   @action async getID() {
      //Getting ID from arguements
      let {post} = this.args;
      let id = post["id"]

      //Deleting the entry in the database
      let response = await fetch('https://jsonplaceholder.typicode.com/posts/' + id, {method: "DELETE"})
        .then((response) => response.json())
        .then((json) => console.log(json));
      
      //Reloading the data via page refresh
      location.reload();
   }
}