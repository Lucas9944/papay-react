import assert from "assert";
import { serverApi } from "../../lib/config";
import { ProductSearchObj } from "../../types/others";
import axios from "axios";
import { Definer } from "../../lib/Definer";
import { Product } from "../../types/product";

class ProductApiService {
  private readonly path: string;
  constructor() {
    this.path = serverApi;
  }

  async getTargetProducts(data: ProductSearchObj) {
    try {
      const url = "http://localhost:3003/products",
        result = await axios.post(this.path + url, data, {
          withCredentials: true,
        });
      assert.ok(result, Definer.general_err1);

      console.log("state:", result.data.state);
      const products: Product[] = result.data.data;
      return products;
    } catch (err: any) {
      console.log(`ERROR ::: getTargetProducts`);
      throw err;
    }
  }
}

export default ProductApiService;
