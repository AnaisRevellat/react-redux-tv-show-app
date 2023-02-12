import axios from "axios";
import { BASE_URL, API_KEY_PARAM } from "../config";

//avec axios la reponse est tjr stocké dans data
//peie recherche sur static à faire 

export class TVShowAPI {
  static async fetchPopulars() {
    const response = await axios.get(`${BASE_URL}tv/popular${API_KEY_PARAM}`);
    //console.log("rep", response.data.results)
    return response.data.results;
  }
}