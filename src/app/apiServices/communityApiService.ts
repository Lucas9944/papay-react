import axios from "axios";
import { serverApi } from "../../lib/config";
import {
  BoArticle,
  BoArticleInput,
  SearchArticlesObj,
  SearchMemberArticlesObj,
} from "../../types/boArticle";
import assert from "assert";
import { Definer } from "../../lib/Definer";

class CommunityApiService {
  private readonly path: string;

  constructor() {
    this.path = serverApi;
  }

  public async getTargetArticles(data: SearchArticlesObj) {
    try {
      let url = `/community/target?bo_id=${data?.bo_id}&page=${data?.page}&limit=${data.limit}`;
      if (data?.order) url += `&order=${data?.order}`;

      const result = await axios.get(this.path + url, {
        withCredentials: true,
      });
      console.log("state::", result.data.state);
      assert.ok(result?.data, Definer.general_err1);
      assert.ok(result?.data?.state !== "fail", result?.data?.message);

      const articles: BoArticle[] = result.data.data;
      return articles;
    } catch (err: any) {
      console.log(`GetTargetArticles, ERROR: ${err.message}`);
      throw err;
    }
  }

  // getcomArt
  public async getMemberCommunityArticles(data: SearchMemberArticlesObj) {
    try {
      let url = `/community/articles?mb_id=${data.mb_id}&page=${data.page}&limit=${data.limit}`;

      const result = await axios.get(this.path + url, {
        withCredentials: true,
      });
      console.log("state::", result.data.state);
      assert.ok(result?.data, Definer.general_err1);
      assert.ok(result?.data?.state !== "fail", result?.data?.message);

      const articles = result.data.data;
      return articles;
    } catch (err: any) {
      console.log(`getMemberCommunityArticles, ERROR: ${err.message}`);
      throw err;
    }
  }

  //get chosen article
  public async getChosenArticle(art_id: string) {
    try {
      const url = `/community/single-article/${art_id}`;
      const result = await axios.get(this.path + url, {
        withCredentials: true,
      });
      console.log("state::", result.data.state);
      assert.ok(result?.data, Definer.general_err1);
      assert.ok(result?.data?.state !== "fail", result?.data?.message);

      const article: BoArticle = result.data.data;
      return article;
    } catch (err: any) {
      console.log(`getChosenArticle, ERROR: ${err.message}`);
      throw err;
    }
  }
  //create article
  public async createArticle(data: BoArticleInput): Promise<BoArticle> {
    try {
      const result = await axios.post(this.path + "/community/create", data, {
        withCredentials: true,
      });

      console.log("state::", result.data.state);
      assert.ok(result?.data, Definer.general_err1);
      assert.ok(result?.data?.state !== "fail", result?.data?.message);

      const article: BoArticle = result.data.data;
     
      return article;
    } catch (err: any) {
      console.log(`createArticle, ERROR: ${err.message}`);
      throw err;
    }
  }

  //upload image

  public async uploadImageToServer(image: any): Promise<string> {
    try {
      let formData = new FormData();
      formData.append("community_image", image);
     

      const result = await axios(`${this.path}/community/image`, {
        method: "POST",
        data: formData,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      console.log("state::", result.data.state);
      assert.ok(result?.data, Definer.general_err1);
      assert.ok(result?.data?.state !== "fail", result?.data?.message);

      const image_name: string = result.data.data;
      return image_name;
    } catch (err: any) {
      console.log(`uploadImageToServer, ERROR: ${err.message}`);
      throw err;
    }
  }
}

export default CommunityApiService;
