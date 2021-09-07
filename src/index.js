import "./styles.css";
import { SomeComponent } from "./app";

const API_URL = "https://jsonplaceholder.typicode.com/posts";

class App {
  constructor() {
    this.appElem = document.getElementById("app");
    this.getResults();
  }

  async getResults() {
    try {
      const response = await fetch(API_URL);
      const postsData = await response.json();
      this.appElem.innerHTML = SomeComponent(postsData);
    } catch (error) {
      console.log(error);
    }
  }
}

new App();
