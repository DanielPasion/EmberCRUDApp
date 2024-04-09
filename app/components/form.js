import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class FormComponet extends Component {

  @action async onSubmit() {
    //Creating the JSON Object we will be posting
    const data = {
      title: this.title,
      body: this.body
    }

    //Sending the post request
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: 'POST',
      body: JSON.stringify(data)
    });

    //Seeing if the data was sent correctly
    if (response.ok) {
      alert("Post Updated!")
      window.location.href = '..'
    } else {
      alert("Something Went Wrong")
    }
  }
}