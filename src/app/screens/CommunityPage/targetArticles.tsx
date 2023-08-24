/* eslint-disable @typescript-eslint/no-redeclare */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Box, Checkbox, Container, Link, Stack } from "@mui/material";
import { url } from "node:inspector";
import { BoArticle } from "../../../types/boArticle";
import { serverApi } from "../../../lib/config";
import { Favorite, RemoveRedEye } from "@mui/icons-material";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import moment from "moment";

export function TargetArticles(props: any) {
  return (
    <Stack>
      {props.targetBoArticles?.map((article: BoArticle) => {
        const art_image_url = article?.art_image
          ? `${serverApi}/${article.art_image}`
          : "/auth/cute_girl.jpeg";
        return (
          <Link
            className="all_article_box"
            sx={{ textDecoration: "none" }}
            href=""
          >
            <Box
              className={"all_article_img"}
              sx={{
                backgroundImage: `url(${art_image_url})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            ></Box>

            <Box className={"all_article_container"}>
              <Box alignItems={"center"} display={"flex"}>
                <img
                  src={"/icons/default_user.svg"}
                  width={"35px"}
                  style={{
                    marginLeft: "10px",
                    marginRight: "10px",
                    borderRadius: "50%",
                    backgroundSize: "cover",
                  }}
                />
                <span className="all_article_author_user">
                  {article?.member_data.mb_nick}
                </span>
              </Box>
              <Box
                display={"flex"}
                flexDirection={"column"}
                sx={{ mt: "15px" }}
              >
                <span className="all_article_title">{article?.bo_id}</span>
                <p className="all_article_desc">{article?.art_subject}</p>
              </Box>
            </Box>

            <div className="article_share">
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginRight: "20px",
                }}
              >
                <div className="article_time">
                  <span>{moment().format("YY-MM-DD HH:mm")}</span>
                </div>
                <Checkbox
                  icon={<FavoriteBorder />}
                  // onClick={targetLikeHandler}
                  checkedIcon={<Favorite style={{ color: "red" }} />}
                  checked={
                    article?.me_liked && article?.me_liked[0]?.my_favorite
                      ? true
                      : false
                  }
                  id={article?._id}
                />
                <span>{article?.art_likes}</span>
              </div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <RemoveRedEye sx={{ mr: "10px" }} />
                <span>{article?.art_views}</span>
              </div>
            </div>
          </Link>
        );
      })}
    </Stack>
  );
}
