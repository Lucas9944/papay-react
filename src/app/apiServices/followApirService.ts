import axios from "axios";
import { serverApi } from "../../lib/config";
import { FollowSearchObj, Follower, Following } from "../../types/follow";
import assert from "assert";
import { Definer } from "../../lib/Definer";

class FollowApiService {
  private readonly path: string;

  constructor() {
    this.path = serverApi;
  }

  //followers

  public async getMemberFollowers(data: FollowSearchObj): Promise<Follower[]> {
    try {
      const url = `/follow/followers?page=${data.page}&limit=${data.limit}&mb_id=${data.mb_id}`;
      const result = await axios.get(this.path + url, {
        withCredentials: true,
      });
    

      console.log("state::", result.data.state);
      assert.ok(result?.data, Definer.general_err1);
      assert.ok(result?.data?.state !== "fail", result?.data?.message);

      const followers: Follower[] = result.data.data;
      return followers;
    } catch (err: any) {
      console.log(`getMemberFollowers, ERROR: ${err.message}`);
      throw err;
    }
  }

  //followings
  public async getMemberFollowings(
    data: FollowSearchObj
  ): Promise<Following[]> {
    try {
      const url = `/follow/followings?page=${data.page}&limit=${data.limit}&mb_id=${data.mb_id}`;
      const result = await axios.get(this.path + url, {
        withCredentials: true,
      });
      console.log("state::", result.data.state);
      assert.ok(result?.data, Definer.general_err1);
      assert.ok(result?.data?.state !== "fail", result?.data?.message);

      const followings: Following[] = result.data.data;
      return followings;
    } catch (err: any) {
      console.log(`getMemberFollowings, ERROR: ${err.message}`);
      throw err;
    }
  }

  //subscribe

  public async subscribe(mb_id: string): Promise<void> {
    try {
      const result = await axios.post(
        this.path + "/follow/subscribe/",
        { mb_id: mb_id },
        { withCredentials: true }
      );

      console.log("state::", result.data.state);
      assert.ok(result?.data, Definer.general_err1);
      assert.ok(result?.data?.state !== "fail", result?.data?.message);

      //   return result.data.data === "subscribed";
    } catch (err: any) {
      console.log(`subscibe, ERROR: ${err.message}`);
      throw err;
    }
  }

  //unsubscribe
  public async unsubscribe(mb_id: string): Promise<boolean> {
    try {
      const result = await axios.post(
        this.path + "/follow/unsubscribe",
        { mb_id: mb_id },
        { withCredentials: true }
      );

      console.log("state::", result.data.state);
      assert.ok(result?.data, Definer.general_err1);
      assert.ok(result?.data?.state !== "fail", result?.data?.message);

      return result.data.data === "unsubscribed";
    } catch (err: any) {
      console.log(`unsubscibe, ERROR: ${err.message}`);
      throw err;
    }
  }
}
export default FollowApiService;
