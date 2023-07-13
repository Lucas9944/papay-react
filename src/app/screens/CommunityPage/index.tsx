import React from "react";
import {
  Box,
  Container,
  PaginationItem,
  Stack,
} from "@mui/material";
import Tab from "@mui/material/Tab";
import Pagination from "@mui/material/Pagination";
import "../../../css/community.css";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { CommunityChat } from "./CommunityChat";
import { TargetArticles } from "./targetArticles";
import Marginer from "../../components/header/marginer";

export function CommunityPage(props: any) {
  // INITIALIZATIONS
  const [value, setValue] = React.useState("1");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const handlePaginationChange = (event: any, value: number) => {
    console.log("VALUE:::", value);
  };

  return (
    <div className="community_page">
      <div className="community_frame" style={{ width: "100%" }}>
        <Container sx={{ mt: "50px", mb: "50px" }}>
          <Stack flexDirection={"row"} justifyContent={"space-between"}>
            <CommunityChat />
            <Stack
              className="community_all_frame"
              inputMode={"text"}
              style={{
                width: "864px",
                marginLeft: "20px",
                border: "1px solid #fff",
                borderRadius: "25px",
              }}
            >
              <TabContext value={value}>
                <Box className={"article_tabs"}>
                  <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                    <TabList
                      value={value}
                      onChange={handleChange}
                      aria-label="lab API tabs example"
                      style={{ borderColor: "blue" }}
                    >
                      <Tab label="Barcha Maqolalar" value={"1"} />
                      <Tab label="Mashxurlar" value={"2"} />
                      <Tab label="Oshxonaga baho" value={"3"} />
                      <Tab label="Hikoyalar" value={"4"} />
                    </TabList>
                  </Box>
                </Box>

                <Marginer
                  direction="horizontal"
                  height="1"
                  width="863"
                  bg="#fff"
                />

                <Box className="article_main">
                  <TabPanel value="1">
                    <TargetArticles targetBoArticles={[1, 2, 3]} />
                  </TabPanel>
                  <TabPanel value="2">
                    <TargetArticles targetBoArticles={[1, 2, 3, 4, 5]} />
                  </TabPanel>
                  <TabPanel value="3">
                    <TargetArticles targetBoArticles={[1, 2]} />
                  </TabPanel>
                  <TabPanel value="4">
                    <TargetArticles targetBoArticles={[1, 2, 3, 4]} />
                  </TabPanel>
                </Box>

                <Marginer
                  direction="horizontal"
                  height="1"
                  width="863"
                  bg="#fff"
                />
                <Box
                  className={"article_bott"}
                  display={"flex"}
                  flexDirection={"column"}
                  alignItems={"center"}
                  justifyContent={"center"}
                  sx={{ mt: "15px", mb: "15px" }}
                >
                  <Pagination
                    count={3}
                    page={1}
                    renderItem={(item) => (
                      <PaginationItem
                        components={{
                          previous: ArrowBackIcon,
                          next: ArrowForwardIcon,
                        }}
                        {...item}
                        color={"secondary"}
                      />
                    )}
                    onChange={handlePaginationChange}
                  />
                </Box>
              </TabContext>
            </Stack>
          </Stack>
        </Container>
      </div>
    </div>
  );
}