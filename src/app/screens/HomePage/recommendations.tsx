import React from "react";
import { Avatar, Box, Container, Stack } from "@mui/material";

export function Recommondations() {
  return (
    <div className="top_article_frame">
      <Container
        maxWidth="lg"
        sx={{ mb: "50px", mt: "60px" }}
        style={{ position: "relative" }}
      >
        <Stack
          flexDirection={"column"}
          alignItems={"center"}
          sx={{ mt: "45px" }}
        >
          <Box className="category_title">Tavsiya qilingan maqolalar</Box>
          <Stack className="article_main" flexDirection={"row"}>
            <Stack className="article_container">
              <Box className="article_category">Ko'p ko'rilgan</Box>

              <Stack className="article_box">
                <Box
                  className="article_img"
                  sx={{ backgroundImage: "url('/dishes/kebab4.jpeg')" }}
                ></Box>
                <Box className="article_info">
                  <Box className="article_main_info">
                    <div className="article_author">
                      <Avatar
                        alt={"Author_photo"}
                        src={"auth/avatar.png"}
                        sx={{ width: "35px", height: "35px" }}
                      />
                      <span className="author_username">Lucas</span>
                    </div>
                    <span className="article_title">Yangi ovqat turlari</span>
                    <p className={"article_desc"}></p>
                  </Box>
                </Box>
              </Stack>
              <Stack className="article_box">
                <Box
                  className="article_img"
                  sx={{ backgroundImage: "url('/auth/avatar.png')" }}
                ></Box>
                <Box className="article_info">
                  <Box className="article_main_info">
                    <div className="article_author">
                      <Avatar
                        alt={"Author_photo"}
                        src={"auth/avatar.png"}
                        sx={{ width: "35px", height: "35px" }}
                      />
                      <span className="author_username">John</span>
               </div>
                    <span className="article_title">Yangi ovqat turlari</span>
                    <p className={"article_desc"}></p>
                  </Box>
                </Box>
              </Stack>
              <Box className="article_category">Ko'p yoqtirilgan</Box>

              <Stack className="article_box">
                <Box
                  className="article_img"
                  sx={{ backgroundImage: "url('/dishes/kebab4.jpeg')" }}
                ></Box>
                <Box className="article_info">
                  <Box className="article_main_info">
                    <div className="article_author">
                      <Avatar
                        alt={"Author_photo"}
                        src={"auth/avatar.png"}
                        sx={{ width: "35px", height: "35px" }}
                      />
                      <span className="author_username"> devl1</span>
                    </div>
                    <span className="article_title">Yangi ovqat turlari</span>
                    <p className={"article_desc"}></p>
                  </Box>
                </Box>
              </Stack>
              <Stack className="article_box">
                <Box
                  className="article_img"
                  sx={{ backgroundImage: "url('/auth/avatar.png')" }}
                ></Box>
                <Box className="article_info">
                  <Box className="article_main_info">
                    <div className="article_author">
                      <Avatar
                        alt={"Author_photo"}
                        src={"auth/avatar.png"}
                        sx={{ width: "35px", height: "35px" }}
                      />
                      <span className="author_username">Sunday</span>
                    </div>
                    <span className="article_title">Yangi ovqat turlari</span>
                    <p className={"article_desc"}></p>
                  </Box>
                </Box>
              </Stack>
            </Stack>
            <Stack className={"article_container"}>
              <Box className={"article_category"}>Mashhurlar</Box>
              <Box className={"article_news"}>
                <h1 style={{ color: "orange" }}>TViewer</h1>
              </Box>
              <Box className={"article_news"}>
                <h1 style={{ color: "orange" }}>TViewer</h1>
              </Box>
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}