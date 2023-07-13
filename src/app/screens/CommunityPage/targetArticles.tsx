/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Box, Container, Link, Stack } from "@mui/material";
import { url } from "node:inspector";

export function TargetArticles(props: any) {
  return (
    <Stack>
      {props.targetBoArticles?.map((article: any, index: string) => {
        const art_image_url = "/auth/cute_girl.jpeg";
        return (
          <Link
            className="all_article_box"
            sx={{ textDecoration: "none" }}
            href=""
          >
            <Box
              className={"all_article_img"}
              sx={{
                backgroundImage: "url('/icons/default_user.svg')",
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
                <span className="all_article_author_user">Lucas</span>
              </Box>
              <Box
                display={"flex"}
                flexDirection={"column"}
                sx={{ mt: "15px" }}
              >
                <span className="all_article_title">evaluation</span>
                <p className="all_article_desc">
                  Chopar Pizza! eng tez va mazzali fast food
                </p>
              </Box>
            </Box>
          </Link>
        );
      })}
    </Stack>
  );
}

