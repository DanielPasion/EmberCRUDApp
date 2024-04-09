import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class PostComponent extends Component {
   @action async getID() {
      let {post} = this.args;
      let id = post["id"]
      let response = await fetch('https://jsonplaceholder.typicode.com/posts/' + id, {method: "DELETE"})
        .then((response) => response.json())
        .then((json) => console.log(json));
   }
}