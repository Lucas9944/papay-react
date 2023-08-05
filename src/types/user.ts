import { MeFollowed } from "./follow";
import { MeLiked } from "./product";

export interface Restaurant {
  _id: string;
  mb_nick: string;
  mb_phone: string;
  mb_password: string;
  mb_type: string;
  mb_status: string;

  //   mb_address: string;
  mb_description?: string;
  mb_image: string;
  mb_point?: string;
  mb_top: string;
  mb_views: number;
  mb_likes: number;
  mb_follow_cnt: number;
  mb_subscriber_cnt?: number;
  createdAt?: Date;
  me_liked?: MeLiked[];
}

export interface Member {
  _id: string;
  mb_nick: string;
  mb_phone: string;
  mb_password: string;
  mb_type: string;
  mb_status: string;

  mb_address?: string;
  mb_description?: string;
  mb_image?: string;
  mb_point?: string;
  mb_top?: string;
  mb_views: string;
  mb_likes: string;
  mb_follow_cnt: string;
  mb_subscriber_cnt: string;
  createdAt?: Date;
  mb_liked: MeLiked[]; // MeLiked
  me_followed: MeFollowed[]; // MeFollowed
}
