/* eslint-disable jsx-a11y/alt-text */
import { Favorite, Visibility } from "@mui/icons-material";
import {
  AspectRatio,
  Card,
  CardOverflow,
  CssVarsProvider,
  IconButton,
  Link,
  Typography,
} from "@mui/joy";
import { Box, Stack, Button } from "@mui/material";
import { Container } from "@mui/system";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import CallIcon from "@mui/icons-material/Call";
import React from "react";

export function BestRestaurants() {
  return (
    <div className="top_restaurant_frame">
      <img
        src={"icons/kafel.svg"}
        style={{ position: "absolute", left: "6%", transform: "route(90deg)" }}
      />

      <Container sx={{ paddingTop: "153px" }}>
        <Stack flexDirection={"column"} alignItems={"center"}>
          <Box className="catigory_title">Zo'r restaurantlar</Box>
          <Stack sx={{ mt: "43px" }} flexDirection={"row"}>
            <CssVarsProvider>
              <Card
                variant="outlined"
                sx={{ minHeight: 483, minWidth: 320, mr: "35px" }}
              >
                <CardOverflow>
                  <AspectRatio ratio="1">
                    <img src={"restaurant/rayhon.png"} alt="" />
                  </AspectRatio>
                  <IconButton
                    aria-label="Like minimal photography"
                    size="md"
                    variant="solid"
                    color="neutral"
                    sx={{
                      position: "absolute",
                      zIndex: 2,
                      borderRadius: "50%",
                      right: "1rem",
                      bottom: 0,
                      transform: "translateY(50%)",
                      color: "rgba(0,0,0,.4)",
                    }}
                  >
                    <Favorite
                      style={{
                        color: "white",
                      }}
                    />
                  </IconButton>
                </CardOverflow>
                <Typography level="h2" sx={{ fontSize: "md", mt: 2 }}>
                  Rayxon Restaurant
                </Typography>

                <Typography level="body2" sx={{ mt: 0.5, mb: 2 }}>
                  <Link
                    href=""
                    startDecorator={<LocationOnRoundedIcon />}
                    textColor="neutral.700"
                  >
                    Deagu, Kyongsan 4-1
                  </Link>
                </Typography>

                <Typography level="body2" sx={{ mt: 0.5, mb: 2 }}>
                  <Link
                    href=""
                    startDecorator={<CallIcon />}
                    textColor="neutral.700"
                  >
                    +82 10-6747-9256
                  </Link>
                </Typography>

                <CardOverflow
                  sx={{
                    display: "flex",
                    gap: 1.5,
                    py: 1.5,
                    px: "var(-Card-padding)",
                    borderTop: "1px solid",
                  }}
                >
                  <IconButton
                    aria-label="Like minimal photography"
                    size="md"
                    variant="solid"
                    color="neutral"
                    sx={{
                      position: "absolute",
                      zIndex: 2,
                      borderRadius: "50%",
                      right: "1rem",
                      bottom: 45,
                      transform: "translateY(50%)",
                      color: "rgba(0,0,0,.4)",
                    }}
                  >
                    <Favorite style={{ fill: "white" }} />
                  </IconButton>
                  <Typography
                    level="body3"
                    sx={{
                      fontWeight: "md",
                      color: "neutral.300",
                      alignItems: "center",
                      display: "flex",
                    }}
                  >
                    100 <Visibility sx={{ fontSize: 20, marginLeft: "5px" }} />
                  </Typography>

                  <Box sx={{ width: 2, bgcolor: "divider" }} />
                  <Typography
                    sx={{
                      fontWeight: "md",
                      color: "neutral.300",
                      alignItems: "center",
                      display: "flex",
                    }}
                  >
                    <div>70</div>
                    <Favorite sx={{ fontSize: 20, marginLeft: "Spx" }} />
                  </Typography>
                </CardOverflow>
              </Card>

              <Card
                variant="outlined"
                sx={{ minHeight: 483, minWidth: 320, mr: "35px" }}
              >
                <CardOverflow>
                  <AspectRatio ratio="1">
                    <img src={"restaurant/rayhon.png"} alt="" />
                  </AspectRatio>
                  <IconButton
                    aria-label="Like minimal photography"
                    size="md"
                    variant="solid"
                    color="neutral"
                    sx={{
                      position: "absolute",
                      zIndex: 2,
                      borderRadius: "50%",
                      right: "1rem",
                      bottom: 0,
                      transform: "translateY(50%)",
                      color: "rgba(0,0,0,.4)",
                    }}
                  >
                    <Favorite
                      style={{
                        color: "white",
                      }}
                    />
                  </IconButton>
                </CardOverflow>
                <Typography level="h2" sx={{ fontSize: "md", mt: 2 }}>
                  Rayxon Restaurant
                </Typography>

                <Typography level="body2" sx={{ mt: 0.5, mb: 2 }}>
                  <Link
                    href=""
                    startDecorator={<LocationOnRoundedIcon />}
                    textColor="neutral.700"
                  >
                    Deagu, Kyongsan 4-1
                  </Link>
                </Typography>

                <Typography level="body2" sx={{ mt: 0.5, mb: 2 }}>
                  <Link
                    href=""
                    startDecorator={<CallIcon />}
                    textColor="neutral.700"
                  >
                    +82 10-6747-9256
                  </Link>
                </Typography>

                <CardOverflow
                  sx={{
                    display: "flex",
                    gap: 1.5,
                    py: 1.5,
                    px: "var(-Card-padding)",
                    borderTop: "1px solid",
                  }}
                >
                  <IconButton
                    aria-label="Like minimal photography"
                    size="md"
                    variant="solid"
                    color="neutral"
                    sx={{
                      position: "absolute",
                      zIndex: 2,
                      borderRadius: "50%",
                      right: "1rem",
                      bottom: 45,
                      transform: "translateY(50%)",
                      color: "rgba(0,0,0,.4)",
                    }}
                  >
                    <Favorite style={{ fill: "white" }} />
                  </IconButton>
                  <Typography
                    level="body3"
                    sx={{
                      fontWeight: "md",
                      color: "neutral.300",
                      alignItems: "center",
                      display: "flex",
                    }}
                  >
                    100 <Visibility sx={{ fontSize: 20, marginLeft: "5px" }} />
                  </Typography>

                  <Box sx={{ width: 2, bgcolor: "divider" }} />
                  <Typography
                    sx={{
                      fontWeight: "md",
                      color: "neutral.300",
                      alignItems: "center",
                      display: "flex",
                    }}
                  >
                    <div>70</div>
                    <Favorite sx={{ fontSize: 20, marginLeft: "Spx" }} />
                  </Typography>
                </CardOverflow>
              </Card>

              <Card
                variant="outlined"
                sx={{ minHeight: 483, minWidth: 320, mr: "35px" }}
              >
                <CardOverflow>
                  <AspectRatio ratio="1">
                    <img src={"restaurant/rayhon.png"} alt="" />
                  </AspectRatio>
                  <IconButton
                    aria-label="Like minimal photography"
                    size="md"
                    variant="solid"
                    color="neutral"
                    sx={{
                      position: "absolute",
                      zIndex: 2,
                      borderRadius: "50%",
                      right: "1rem",
                      bottom: 0,
                      transform: "translateY(50%)",
                      color: "rgba(0,0,0,.4)",
                    }}
                  >
                    <Favorite
                      style={{
                        color: "white",
                      }}
                    />
                  </IconButton>
                </CardOverflow>
                <Typography level="h2" sx={{ fontSize: "md", mt: 2 }}>
                  Rayxon Restaurant
                </Typography>

                <Typography level="body2" sx={{ mt: 0.5, mb: 2 }}>
                  <Link
                    href=""
                    startDecorator={<LocationOnRoundedIcon />}
                    textColor="neutral.700"
                  >
                    Deagu, Kyongsan 4-1
                  </Link>
                </Typography>

                <Typography level="body2" sx={{ mt: 0.5, mb: 2 }}>
                  <Link
                    href=""
                    startDecorator={<CallIcon />}
                    textColor="neutral.700"
                  >
                    +82 10-6747-9256
                  </Link>
                </Typography>

                <CardOverflow
                  sx={{
                    display: "flex",
                    gap: 1.5,
                    py: 1.5,
                    px: "var(-Card-padding)",
                    borderTop: "1px solid",
                  }}
                >
                  <IconButton
                    aria-label="Like minimal photography"
                    size="md"
                    variant="solid"
                    color="neutral"
                    sx={{
                      position: "absolute",
                      zIndex: 2,
                      borderRadius: "50%",
                      right: "1rem",
                      bottom: 45,
                      transform: "translateY(50%)",
                      color: "rgba(0,0,0,.4)",
                    }}
                  >
                    <Favorite style={{ fill: "white" }} />
                  </IconButton>
                  <Typography
                    level="body3"
                    sx={{
                      fontWeight: "md",
                      color: "neutral.300",
                      alignItems: "center",
                      display: "flex",
                    }}
                  >
                    100 <Visibility sx={{ fontSize: 20, marginLeft: "5px" }} />
                  </Typography>

                  <Box sx={{ width: 2, bgcolor: "divider" }} />
                  <Typography
                    sx={{
                      fontWeight: "md",
                      color: "neutral.300",
                      alignItems: "center",
                      display: "flex",
                    }}
                  >
                    <div>70</div>
                    <Favorite sx={{ fontSize: 20, marginLeft: "Spx" }} />
                  </Typography>
                </CardOverflow>
              </Card>

              <Card
                variant="outlined"
                sx={{ minHeight: 483, minWidth: 320, mr: "35px" }}
              >
                <CardOverflow>
                  <AspectRatio ratio="1">
                    <img src={"restaurant/rayhon.png"} alt="" />
                  </AspectRatio>
                  <IconButton
                    aria-label="Like minimal photography"
                    size="md"
                    variant="solid"
                    color="neutral"
                    sx={{
                      position: "absolute",
                      zIndex: 2,
                      borderRadius: "50%",
                      right: "1rem",
                      bottom: 0,
                      transform: "translateY(50%)",
                      color: "rgba(0,0,0,.4)",
                    }}
                  >
                    <Favorite
                      style={{
                        color: "white",
                      }}
                    />
                  </IconButton>
                </CardOverflow>
                <Typography level="h2" sx={{ fontSize: "md", mt: 2 }}>
                  Rayxon Restaurant
                </Typography>

                <Typography level="body2" sx={{ mt: 0.5, mb: 2 }}>
                  <Link
                    href=""
                    startDecorator={<LocationOnRoundedIcon />}
                    textColor="neutral.700"
                  >
                    Deagu, Kyongsan 4-1
                  </Link>
                </Typography>

                <Typography level="body2" sx={{ mt: 0.5, mb: 2 }}>
                  <Link
                    href=""
                    startDecorator={<CallIcon />}
                    textColor="neutral.700"
                  >
                    +82 10-6747-9256
                  </Link>
                </Typography>

                <CardOverflow
                  sx={{
                    display: "flex",
                    gap: 1.5,
                    py: 1.5,
                    px: "var(-Card-padding)",
                    borderTop: "1px solid",
                  }}
                >
                  <IconButton
                    aria-label="Like minimal photography"
                    size="md"
                    variant="solid"
                    color="neutral"
                    sx={{
                      position: "absolute",
                      zIndex: 2,
                      borderRadius: "50%",
                      right: "1rem",
                      bottom: 45,
                      transform: "translateY(50%)",
                      color: "rgba(0,0,0,.4)",
                    }}
                  >
                    <Favorite style={{ fill: "white" }} />
                  </IconButton>
                  <Typography
                    level="body3"
                    sx={{
                      fontWeight: "md",
                      color: "neutral.300",
                      alignItems: "center",
                      display: "flex",
                    }}
                  >
                    100 <Visibility sx={{ fontSize: 20, marginLeft: "5px" }} />
                  </Typography>

                  <Box sx={{ width: 2, bgcolor: "divider" }} />
                  <Typography
                    sx={{
                      fontWeight: "md",
                      color: "neutral.300",
                      alignItems: "center",
                      display: "flex",
                    }}
                  >
                    <div>70</div>
                    <Favorite sx={{ fontSize: 20, marginLeft: "Spx" }} />
                  </Typography>
                </CardOverflow>
              </Card>
            </CssVarsProvider>
          </Stack>

          <Stack
            flexDirection={"row"}
            justifyContent={"flex-end"}
            style={{ width: "100%", marginTop: "16px" }}
          >
            <Button style={{ background: "#1976d2", color: "#FFFFFF" }}>
              Barchasini Ko'rish
            </Button>
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}
