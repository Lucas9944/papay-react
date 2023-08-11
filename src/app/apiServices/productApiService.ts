import axios from "axios";
import assert from "assert";
import { serverApi } from "../../lib/config";
import { Definer } from "../../lib/Definer";
import { ProductSearchObj } from "../../types/others";
import { Product } from "../../types/product";

// Productlarni chaqiradi
class ProductApiService {
  private readonly path: string;

  constructor() {
    this.path = serverApi;
  }

  async getTargetProducts(data: ProductSearchObj) {
    try {
      console.log("===PATH===", this.path);
      const url = "/products",
        result = await axios.post(this.path + url, data, {
          withCredentials: true,
        });
      console.log("result::", result);
      assert.ok(result, Definer.general_err1);
      console.log("STATE::::", result.data.data);

      const products: Product[] = result.data.data;

      return products;
    } catch (err) {
      throw err;
    }
  }
}

export default ProductApiService;
