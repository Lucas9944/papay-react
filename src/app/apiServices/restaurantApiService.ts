import axios from "axios";
import assert from "assert";
import { serverApi } from "../../lib/config";
import { Definer } from "../../lib/Definer";
import { Restaurant } from "../../types/user";
import { SearchObj } from "../../types/others";
const lucas = "http://localhost:3003/restaurants?order=top&page=1&limit=4";

class RestaurantApiService {
  getChosenRestaurants(chosenRestaurantId: string) {
    throw new Error("Method not implemented.");
  }
  private readonly path: string;

  // consdan keyingi () are used to declare any parameters that you
  // want to pass to the constructor when creating an instance of the
  // class. If you don't need any parameters, you can still leave
  // the parentheses empty, as in your initial code
  constructor() {
    this.path = serverApi;
  }
  async getTopRestaurants() {
    try {
      // const url = "/restaurants?order=top&page=1&limit=4",
      const result = await axios.get(lucas, { withCredentials: true });
      assert.ok(result, Definer.general_err1);

      console.log("state:", result.data.state);
      const top_restaurants: Restaurant[] = result.data.data;

      return top_restaurants;
    } catch (err: any) {
      console.log(`ERROR ::: getTopRestaurants ${err.message}`);
      throw err;
    }
  }

  async getRestaurants(data: SearchObj) {
    try {
      const url = `/restaurants?order=${data.order}&page=${data.page}&limit=${data.limit}`,
        result = await axios.get(this.path + url, { withCredentials: true });
      assert.ok(result, Definer.general_err1);

      console.log("state:", result.data.state);
      const restaurants: Restaurant[] = result.data.data;
      return restaurants;
    } catch (err: any) {
      console.log(`ERROR ::: getRestaurants ${err.message}`);
      throw err;
    }
  }

  async getChosenRestaurant(id: string) {
    try {
      const url = `/restaurants/${id}`,
        result = await axios.get(this.path + url, { withCredentials: true });
      assert.ok(result, Definer.general_err1);

      console.log("state:", result.data.data);
      const restaurant: Restaurant = result.data.data;
      return restaurant;
    } catch (err: any) {
      console.log(`ERROR ::: getChosenRestaurant ${err.message}`);
      throw err;
    }
  }
}
export default RestaurantApiService;
