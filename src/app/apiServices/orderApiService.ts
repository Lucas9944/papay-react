import axios from "axios";
import { serverApi } from "../../lib/config";
import { CartItem } from "../../types/others";
import assert from "assert";
import { Definer } from "../../lib/Definer";
import { Order } from "../../types/order";

class OrderApiService {
  private readonly path: string;

  constructor() {
    this.path = serverApi;
  }

  //create order

  async createOrder(data: CartItem[]): Promise<Boolean> {
    try {
      const url = "/orders/create";
      const result = await axios.post(this.path + url, data, {
        withCredentials: true,
      });

      console.log("state::", result.data.state);
      assert.ok(result?.data, Definer.general_err1);
      assert.ok(result?.data?.state !== "fail", result?.data?.message);

      const order: any = result.data.data;
      console.log(order);
      return true;
    } catch (err: any) {
      console.log(`createOrder, ERROR: ${err.message}`);
      throw err;
    }
  }

  //get orders

  async getMyOrders(order_status: string): Promise<Order[]> {
    try {
      const url = `/orders?status=${order_status}`,
        result = await axios.get(this.path + url, { withCredentials: true, });

        assert.ok(result?.data, Definer.general_err1);
        assert.ok(result?.data?.state !== "fail", result?.data?.message);
        console.log("state::", result.data.state);
        
      const orders: Order[] = result.data.data;
      console.log("orders:", orders);
      return orders;
    } catch (err: any) {
      console.log(`getMyOrders, ERROR: ${err.message}`);
      throw err;
    }
  }

  // update order status

  async updateOrderStatus(data: any) {
    try {
      const url = "/orders/edit",
        result = await axios.post(this.path + url, data, {
          withCredentials: true,
        });

      console.log("state::", result.data.state);
      assert.ok(result?.data, Definer.general_err1);
      assert.ok(result?.data?.state !== "fail", result?.data?.message);
      const order: any = result.data.data;
      return order;
    } catch (err: any) {
      console.log(`getMyOrders, ERROR: ${err.message}`);
      throw err;
    }
  }
}

export default OrderApiService;
