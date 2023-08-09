import { BoArticle } from "./boArticle";
import { Product } from "./product";
import { Restaurant } from "./user";

export interface AppRootState {
  homePage: HomePageState;
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