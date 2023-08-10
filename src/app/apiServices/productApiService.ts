<<<<<<< HEAD
import assert from "assert";
import { serverApi } from "../../lib/config";
import { ProductSearchObj } from "../../types/others";
import axios from "axios";
import { Definer } from "../../lib/Definer";
import { Product } from "../../types/product";

class ProductApiService {
  private readonly path: string;
=======
import axios from "axios";
import assert from "assert";
import { serverApi } from "../../lib/config";
import { Definer } from "../../lib/Definer";
import { ProductSearchObj } from "../../types/others";
import { Product } from "../../types/product";

// Productlarni chaqiradi
class ProductApiService {
  private readonly path: string;

>>>>>>> origin/develop
  constructor() {
    this.path = serverApi;
  }

  async getTargetProducts(data: ProductSearchObj) {
    try {
<<<<<<< HEAD
      const url = "http://localhost:3003/products",
=======
      const url = "/products",
>>>>>>> origin/develop
        result = await axios.post(this.path + url, data, {
          withCredentials: true,
        });
      assert.ok(result, Definer.general_err1);

<<<<<<< HEAD
      console.log("state:", result.data.state);
      const products: Product[] = result.data.data;
      return products;
    } catch (err: any) {
      console.log(`ERROR ::: getTargetProducts`);
=======
      console.log("state:::", result.data.state);
      const products: Product[] = result.data.data;
      return products;
    } catch (err: any) {
      console.log(`ERROR ::: getTargetProducts ${err.message}`);
>>>>>>> origin/develop
      throw err;
    }
  }
}

export default ProductApiService;
