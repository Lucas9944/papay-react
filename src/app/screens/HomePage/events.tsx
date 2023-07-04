/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Box, Container, Stack } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { Autoplay, Navigation, Pagination } from "swiper";

// Swiper kutubxonasini o'rnatish
SwiperCore.use([Autoplay, Navigation, Pagination]);

export function Events() {
  const events_list = [
    {
      title: "Mazzali Boyin foodga marhamat",
      desc: "Yangicha uslub, yangi tam",
      author: "Burak",
      date: "2023/07/03",
      location: "Toshkent, Nurafshon shox ko'chasi",
      img: "/restaurant/pizza.jpg",
    },
    {
      title: "Mazzali Fast Foodga marhamat",
      desc: "Turkcha uslub, yangi tam",
      author: "Burak",
      date: "2023/07/03",
      location: "Toshkent, Amir-Temur shox ko'chasi",
      img: "/restaurant/pizza.jpg",
    },
    {
      title: "Mazzali Milliy taomlarga marhamat",
      desc: "Milliy va ajoyib tam uyg'unligi",
      author: "Chustiy",
      date: "2023/07/03",
      location: "Toshkent, Bunyodkor ko'chasi",
      img: "/restaurant/pizza.jpg",
    },
    {
      title: "Mazzali Yevropa taomlariga marhamat",
      desc: "Yangicha uslub, yangi tam",
      author: "Burak",
      date: "2023/07/03",
      location: "Toshkent, Nurafshon shox ko'chasi",
      img: "/restaurant/pizza.jpg",
    },
  ];
  return (
    <div className="events_frame">
      <Container sx={{ overflow: "hidden" }}>
        <Stack className={"events_main"}>
          <Box className={"events_text"}>
            <span className="catigory_title">Hodisalar</span>
          </Box>
          <Box className={"prev_next_frame"}>
            <img src={"icons/arrow1.svg"} className={"swiper-button-prev"} />
            <span className="swiper-pagination-bullet"></span>
            <span className="swiper-pagination-bullet"></span>
            <span className="swiper-pagination-bullet"></span>
            <span className="swiper-pagination-bullet"></span>
            <div className="dot_frame_pagination swiper-pagination"></div>
            <img
              src={"icons/arrow1.svg"}
              className={"swiper-button-prev"}
              style={{ transform: "rotate(-180deg" }}
            />
          </Box>
          <Swiper
            className={"events_info swiper-wrapper"}
            slidesPerView={"auto"}
            centeredSlides={true}
            spaceBetween={30}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            pagination={{
              el: "swiper-pagination",
              clickable: true,
            }}
            autoplay={{
              delay: 2000,
              disableOnInteraction: true,
            }}
          >
            {events_list.map((value, number) => {
              return (
                <SwiperSlide className={"events_info_frame"}>
                  <div className="events_img">
                    <img src={value.img} className={"events_img"} />
                  </div>
                  <Box className={"events_desc"}>
                    <Box className={"events_bott"}>
                      <Box className={"bott_left"}>
                        <div className={"event_title_speaker"}>
                          <strong>{value.title}</strong>
                          <div className="event_organizator">
                            <img
                              src={"/icons/speaker.svg"}
                              style={{ width: "20px", marginRight: "10px" }}
                            />
                            <p className={"spec_text_author"}>{value.author}</p>
                          </div>
                        </div>
                        <p
                          className={"text_desc"}
                          style={{ marginTop: "10px" }}
                        >
                          {" "}
                          {value.desc}{" "}
                        </p>
                        <div
                          className={"bott_info"}
                          style={{ marginTop: "10px" }}
                        >
                          <div className={"bott_info_main"}>
                            <img
                              src="/icons/calendar.svg"
                              style={{ marginRight: "10px" }}
                            />
                            {value.date}
                          </div>
                          <div className={"bott_info_main"}>
                            <img
                              src="/icons/location.svg"
                              style={{ marginRight: "10px" }}
                            />
                            {value.location}
                          </div>
                        </div>
                      </Box>
                    </Box>
                  </Box>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </Stack>
      </Container>
    </div>
  );
}
