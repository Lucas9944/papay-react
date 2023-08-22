import { BoArticle } from "./boArticle";
import { Order } from "./order";
import { Product } from "./product";
import { Restaurant } from "./user";

/** REACT APP STATE **/
export interface AppRootState {
  homePage: HomePageState;
  restaurantPage: RestaurantPageState;
}

export interface HomePageState {
  // topRes restaurant objectidan tashkil topgan arraylardan iborat
  topRestaurants: Restaurant[]; 
  bestRestaurants: Restaurant[];
  trendProducts: Product[];
  bestBoArticles: BoArticle[];
  trendBoArticles: BoArticle[];
  newsBoArticles: BoArticle[];
}

/** RESTAURANT PAGE **/
export interface RestaurantPageState {
  targetRestaurants: Restaurant[];
  randomRestaurants: Restaurant[];
  chosenRestaurant: Restaurant | null;
  targetProducts: Product[];
  chosenProduct: Product | null;
}

/** ORDERS PAGE **/
export interface OrdersPageState {
  pausedOrders: Order[],
  processOrders: Order[],
  finishedOrders: Order[]
}