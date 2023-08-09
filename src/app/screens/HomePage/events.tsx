/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Container, Box, Stack } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
import "swiper/swiper-bundle.min.css"; // Import CSS
import { Icon } from "@mui/material"; // Change Sanitizer to Icon
SwiperCore.use([Autoplay, Navigation, Pagination]);

export function Events() {
  const events_list = [
    {
      id: 1,
      title: "Bo'yin Foodga marhamat",
      desc: "Yangicha uslubda, yangicha tam va yangicha uslub",
      author: "Abdurahmon Mufid",
      date: "2022/09/02",
      location: "Toshkent, Nurafshon ko'cha",
      img: "/restaurant/boynfood.jpeg",
    },
    {
      id: 2,
      title: "Katta chegirma endi Belissimoda",
      desc: "Faqat 25 ~ 31 ~ iyul kunlari antiqa Pitsa yegani tashrif buyuring",
      author: "BelissimoUz",
      date: "2022/07/25",
      location: "Toshkent, Chilonzor",
      img: "/restaurant/belissimo.jpeg",
    },
    {
      id: 3,
      title: "Hali bilmagan hisni bilmoqchimisiz?",
      desc: "Merhaba promokodi orqali 50% chegirma qo'lga kiriting",
      author: "Stake House",
      date: "2022/09/10",
      location: "Toshkent, Qo'yliq",
      img: "/restaurant/merhaba.jpeg",
    },
    {
      id: 4,
      title: "Yangicha yondashuv endi O'zbekistonda",
      desc: "O'zbekistondagi eng yirik ulgurji bozor.\n",
      author: "Food City",
      date: "2022/08/08",
      location: "Toshkent, yangi Qo'yliq bozori",
      img: "/restaurant/food_city.jpeg",
    },
  ];

  return (
    <div className="events_frame">
      <Container sx={{ overflow: "hidden" }}>
        <Stack className={"events_main"}>
          <Box className={"events_text"}>
            <span className={"catigory_title"}>Hodisalar</span>
          </Box>
          <Box className={"prev_next_frame"}>
            <img
              src={"/icons/arrow_right.svg"}
              alt="Previous"
              className={"swiper-button-prev"}
              style={{ transform: "rotate(-180deg)" }}
            />
            <div
              style={{ marginRight: "5px", marginLeft: "9px" }}
              className={"dot_frame_pagination swiper-pagination"}
            ></div>
            <img
              src={"/icons/arrow_right.svg"}
              alt="Next"
              className={"swiper-button-next"}
            />
          </Box>
          <Swiper
            className={"events_info swiper_wrapper"}
            slidesPerView={"auto"}
            centeredSlides={true}
            spaceBetween={30}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            pagination={{
              el: ".swiper-pagination",
              clickable: true,
            }}
            autoplay={{
              delay: 2000,
              disableOnInteraction: true,
            }}
          >
            {events_list.map((value) => (
              <SwiperSlide className={"events_info_frame"} key={value.id}>
                <div className={"events_img"}>
                  <img src={value.img} className={"events_img"} alt="Event" />
                </div>
                <Box className={"events_desc"}>
                  <Box className={"events_bott"}>
                    <Box className={"bott_left"}>
                      <div className={"event_title_speaker"}>
                        <strong>{value.title}</strong>
                        <div className={"event_organizator"}>
                          <img
                            src={"/icons/speaker.svg"}
                            alt="Speaker Icon"
                            style={{ width: "20px", marginRight: "10px" }}
                          />
                          <p className={"spec_text_author"}>{value.author}</p>
                        </div>
                      </div>

                      <p className={"text_desc"} style={{ marginTop: "10px" }}>
                        {value.desc}
                      </p>

                      <div
                        className={"bott_info"}
                        style={{ marginTop: "10px" }}
                      >
                        <div className={"bott_info_main"}>
                          <img
                            src={"/icons/calendar.svg"}
                            alt="Calendar Icon"
                            style={{ marginRight: "10px" }}
                          />
                          {value.date}
                        </div>
                        <div className={"bott_info_main"}>
                          <img
                            src={"/icons/location.svg"}
                            alt="Location Icon"
                            style={{
                              marginLeft: "30px",
                              marginRight: "10px",
                              marginBottom: "-4px",
                            }}
                          />
                          {value.location}
                        </div>
                      </div>
                    </Box>
                  </Box>
                </Box>
              </SwiperSlide>
            ))}
          </Swiper>
        </Stack>
      </Container>
    </div>
  );
}
