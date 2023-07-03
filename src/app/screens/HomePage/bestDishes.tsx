/* eslint-disable jsx-a11y/alt-text */
import { Box } from "@mui/joy";
import { Stack } from "@mui/material";
import { Container } from "@mui/system";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import MonetizationOn from "@mui/icons-material/MonetizationOn";

export function BestDishes() {
  return (
    <div className="best_dishes_frame">
      <Container>
        <Stack flexDirection={"column"} alignItems={"center"}>
          <Box className="catigory_title">Trendagi Ovqatlar</Box>
          <Stack sx={{ mt: "43px" }} flexDirection={"row"}>
            <Box className="dish_box">
              <Stack
                className="dish_img"
                sx={{
                  backgroundImage: `url(
                    https://www.hotelmousai.com/blog/wp-content/uploads/2021/12/The-10-Most-Popular-Dishes-in-China.jpg
                  )`,
                }}
              >
                <div className={"dish_sale"}>normal size</div>
                <div className={"view_btn"}>
                  Batafsil ko'rish
                  <img
                    src={"/icons/arrow_right.svg"}
                    style={{ marginLeft: "9px" }}
                  />
                </div>
              </Stack>
              <Stack className={"dish_desc"}>
                <span className={"dish_title_text"}>Hamir taomlar!</span>
                <span className={"dish_desc_text"}>
                  <MonetizationOn />
                  11
                </span>
              </Stack>
            </Box>
            <Box className="dish_box">
              <Stack
                className="dish_img"
                sx={{
                  backgroundImage: `url(
                    https://www.hotelmousai.com/blog/wp-content/uploads/2021/12/The-10-Most-Popular-Dishes-in-China.jpg
                  )`,
                }}
              >
                <div className={"dish_sale"}>normal size</div>
                <div className={"view_btn"}>
                  Batafsil ko'rish
                  <img
                    src={"/icons/arrow_right.svg"}
                    style={{ marginLeft: "9px" }}
                  />
                </div>
              </Stack>
              <Stack className={"dish_desc"}>
                <span className={"dish_title_text"}>Chicken Mayo</span>
                <span className={"dish_desc_text"}>
                  <MonetizationOn />
                  11
                </span>
              </Stack>
            </Box>
            <Box className="dish_box">
              <Stack
                className="dish_img"
                sx={{
                  backgroundImage: `url(
                    https://www.hotelmousai.com/blog/wp-content/uploads/2021/12/The-10-Most-Popular-Dishes-in-China.jpg
                  )`,
                }}
              >
                <div className={"dish_sale"}>normal size</div>
                <div className={"view_btn"}>
                  Batafsil ko'rish
                  <img
                    src={"/icons/arrow_right.svg"}
                    style={{ marginLeft: "9px" }}
                  />
                </div>
              </Stack>
              <Stack className={"dish_desc"}>
                <span className={"dish_title_text"}>Chicken Mayo</span>
                <span className={"dish_desc_text"}>
                  <MonetizationOn />
                  11
                </span>
              </Stack>
            </Box>
            <Box className="dish_box">
              <Stack
                className="dish_img"
                sx={{
                  backgroundImage: `url(
                    https://www.hotelmousai.com/blog/wp-content/uploads/2021/12/The-10-Most-Popular-Dishes-in-China.jpg
                  )`,
                }}
              >
                <div className={"dish_sale"}>normal size</div>
                <div className={"view_btn"}>
                  Batafsil ko'rish
                  <img
                    src={"/icons/arrow_right.svg"}
                    style={{ marginLeft: "9px" }}
                  />
                </div>
              </Stack>
              <Stack className={"dish_desc"}>
                <span className={"dish_title_text"}>Chicken Mayo</span>
                <span className={"dish_desc_text"}>
                  <MonetizationOn />
                  11
                </span>
              </Stack>
            </Box>
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}
