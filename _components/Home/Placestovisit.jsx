"use client";
import React from "react";
import { Button } from "@nextui-org/react";
import { PhoneForwarded } from "lucide-react";
import IMAGES from '@/public';
import Image from "next/image";
import { Clock, MapPin } from "lucide-react";
import { Dish } from "./icons";

const OurProcessData = [
  {
    id: 1,
    img: IMAGES.mahakalikatemple,
    title: "Baga Beach",
    svg1: <Clock className="w-[20px] h-[20px] text-[#B76E79]" />,
    para1: "5 mins by car",
    svg2: <MapPin className="w-[20px] h-[20px] text-[#B76E79]" />,
    para2: "850 m from Hotel Sky Blue Baga",
    summary:
      "Baga Beach in Goa is one of the most vibrant and beloved coastal destinations in India, known for its lively atmosphere and stunning natural beauty. Located in North Goa, this popular beach stretches along the shimmering Arabian Sea and is framed by swaying palm trees and golden sands. Baga Beach is renowned for its energetic nightlife, beachside shacks, and an array of water sports such as parasailing, jet skiing, and banana boat rides. Visitors can stroll along the bustling shoreline, enjoy fresh Goan seafood, or simply relax while taking in the mesmerizing sunset views. Whether seeking adventure or tranquility, Baga Beach offers an unforgettable seaside experience steeped in Goan charm.",
  },
  {
    id: 2,
    img: IMAGES.jambughoda,
    title: "Calangute Beach",
    svg1: <Clock className="w-[20px] h-[20px] text-[#B76E79]" />,
    para1: "2 mins by car",
    svg2: <MapPin className="w-[20px] h-[20px] text-[#B76E79]" />,
    para2: "300 m from Hotel Sky Blue Baga",
    summary:
      "Calangute Beach in Goa, often referred to as the “Queen of Beaches,” is one of the most iconic and visited coastal destinations in the state. Located in North Goa, this expansive stretch of golden sand meets the rolling waves of the Arabian Sea, creating a picturesque setting that attracts travelers from around the world. Calangute is known for its lively ambiance, bustling markets, and a wide range of beach shacks offering delicious Goan cuisine. The beach is also a hub for adventure, with activities like parasailing, water skiing, and windsurfing filling the shoreline with excitement. Whether you’re seeking relaxation under the sun, shopping for local handicrafts, or indulging in watersports, Calangute Beach offers a vibrant and memorable Goan beach experience.",
  },
  {
    id: 3,
    img: IMAGES.pavagadhpark,
    title: "Anjuna Beach",
    svg1: <Clock className="w-[20px] h-[20px] text-[#B76E79]" />,
    para1: "16 mins by car",
    svg2: <MapPin className="w-[20px] h-[20px] text-[#B76E79]" />,
    para2: "6 km from Hotel Sky Blue Baga",
    summary:
      `Anjuna Beach in Goa is a captivating coastal destination famed for its bohemian spirit, scenic beauty, and rich cultural vibe. Located in North Goa, this rocky beachfront is lined with swaying palms, dramatic red cliffs, and soft sandy stretches that meet the shimmering Arabian Sea. Anjuna is best known for its laid-back atmosphere, vibrant beach shacks, and iconic flea market that draws visitors with its eclectic mix of handicrafts, clothing, jewelry, and global flavors. By day, travelers can relax by the water or enjoy adventurous activities, while evenings come alive with music, nightlife, and mesmerizing sunsets. Blending natural charm with a free-spirited ambiance, Anjuna Beach offers a unique and unforgettable Goan experience.`
  },
  {
    id: 4,
    img: IMAGES.vadatalav,
    title: "Chapora Fort",
    svg1: <Dish className="w-[20px] h-[20px] text-[#B76E79]" />,
    para1: "20 mins by car",
    svg2: <MapPin className="w-[20px] h-[20px] text-[#B76E79]" />,
    para2: "7.8 km from Hotel Sky Blue Baga",
    summary:
      `Chapora Fort in Goa is a historic hilltop stronghold famed for its commanding views and timeless charm. Located in North Goa near Vagator Beach, this centuries-old fort stands atop a rocky promontory overlooking the shimmering Arabian Sea and the winding Chapora River. Built in the 17th century by the Portuguese, the fort today draws visitors for its dramatic landscape, ancient laterite stone walls, and serene, open expanse ideal for exploration. A short uphill climb leads travelers to breathtaking panoramic vistas, especially during sunrise and sunset, when the sky casts magical hues over the coastline. Immortalized in popular culture and loved by history enthusiasts and nature seekers alike, Chapora Fort offers a peaceful yet inspiring glimpse into Goa’s rich heritage.`,
  },
  {
    id: 5,
    img: IMAGES.waterfall,
    title: "Aguada Fort",
    svg1: <Clock className="w-[20px] h-[20px] text-[#B76E79]" />,
    para1: "28 mins by car",
    svg2: <MapPin className="w-[20px] h-[20px] text-[#B76E79]" />,
    para2: "10 km from Hotel Sky Blue Baga",
    summary:
      "Aguada Fort in Goa is a grand 17th-century Portuguese fortress built in 1612, standing proudly on a hilltop overlooking the vast Arabian Sea. Designed as both a defensive stronghold and a vital freshwater supply station for passing ships, the fort gets its name from the Portuguese word “água,” meaning water. Its most iconic feature is the four-storey lighthouse, once the oldest of its kind in Asia, which guided sailors safely to shore. With its massive stone walls, tranquil surroundings, and panoramic ocean views, Aguada Fort offers a captivating blend of history, architecture, and natural beauty, making it one of Goa’s most cherished and frequently visited heritage sites.",
  },
  {
    id: 6,
    img: IMAGES.mahadevtemple,
    title: "Baga Creek",
    svg1: <Clock className="w-[20px] h-[20px] text-[#B76E79]" />,
    para1: "18 mins by walk",
    svg2: <MapPin className="w-[20px] h-[20px] text-[#B76E79]" />,
    para2: "1.4 km from Hotel Sky Blue Baga",
    summary:
      "Baga Creek in Goa is a serene, picturesque waterway that flows quietly into the Arabian Sea near the lively Baga Beach, offering a peaceful contrast to the area’s bustling nightlife and tourist activity. Lined with mangroves, fishing boats, and small bridges, the creek is perfect for leisurely strolls, kayaking, birdwatching, and enjoying the gentle coastal breeze. Its calm waters and natural beauty create a soothing escape, making Baga Creek a favorite spot for travelers looking to unwind while still staying close to the vibrant energy of Goa’s popular beach belt.",
  },
  //   {
  //     id: 7,
  //     img: IMAGES.kihim,
  //     title: "Kihim Beach",
  //     svg1: <Clock className="w-[20px] h-[20px] text-[#B76E79]" />,
  //     para1: "30 mins by car",
  //     svg2: <MapPin className="w-[20px] h-[20px] text-[#B76E79]" />,
  //     para2: "15 km from Ocean’s Pearl Resort",
  //     summary:
  //       "A rocky beach of immense beauty, Kihim is known to delight visitors with its sands and surf for the past many years. The climate of Kihim village and beach is mainly tropical with heavy rainfall during the Monsoons. You can easily reach Kihim Beach from Alibaug as it is located just 12km away between Alibaug and Mandwa beaches. Deemed as a bird watcher’s paradise, Kihim still sees a healthy inflow of migratory birds due to the dense cover of trees and forests. The combination of warm sands, rocky outcrops, and rare seashells has been known to have a soothing effect on visitors! If you are more of the adventurous kind, you can also enjoy a tented holiday sojourn right on the shores of Kihim. A walk in the woods across the beach in Alibaug is highly recommended if you want to see rare birds and butterflies flit by. You can also take a short trip to Kihim Pond, Kanakeshwar Temple or Karmarkar Museum.",
  //   },
  //   {
  //     id: 8,
  //     img: IMAGES.alibaug,
  //     title: "Nagaon Beach",
  //     svg1: <Clock className="w-[20px] h-[20px] text-[#B76E79]" />,
  //     para1: "5 mins by car",
  //     svg2: <MapPin className="w-[20px] h-[20px] text-[#B76E79]" />,
  //     para2: "700m from Ocean’s Pearl Resort",
  //     summary:
  //       "Nagaon Beach, located near Alibaug in Maharashtra, is a serene and picturesque coastal destination known for its tranquil atmosphere and natural beauty. Stretching along the Arabian Sea, the beach features soft golden sands, clear waters, and lush palm trees that create a perfect setting for relaxation and leisure. Unlike some of the more crowded beaches, Nagaon Beach offers a peaceful retreat where visitors can enjoy swimming, beach volleyball, and local seafood delicacies from nearby shacks. The calm waves and gentle breeze make it an ideal spot for families, couples, and nature enthusiasts seeking a serene escape from the city.",
  //   },
];
const Placestovisit = () => {
  return (
    <div className="w-screen h-auto bg-white text-black lg:pt-0">
      <div className="w-[95%] mx-auto">
        {/* Mobile View */}
        <div className="w-[90%] lg:hidden grid grid-cols-1 mt-8 mx-auto gap-10">
          <div>
            <div className="flex justify-center items-center">
              <div className="border-b border-gray-500  inline-block pb-1">
                <p className="text-center text-2xl font-semibold text-gray-500 lg:text-2xl">
                  Places To Visit
                </p>
              </div>
            </div>
            <h3 className="text-center text-2xl lg:text-4xl leading-snug mt-6 font-semibold ">
              Tourist Destination Nearby
            </h3>
          </div>
          {OurProcessData.map((item) => (
            <div key={item.id} className="mb-12">
              <div className="relative h-[300px]">
                <Image
                  alt="Mountains"
                  src={item.img}
                  fill
                  sizes="(width: 100%)"
                  style={{
                    objectFit: "cover",
                    borderRadius: "20px",
                  }}
                />
              </div>
              <div className="text-left mt-6">
                <h1 className="text-xl font-semibold leading-relaxed  border-l-3 border-[#333333] pl-3">
                  {item.title}
                </h1>
                <div className="w-full flex justify-between h-[4rem] mt-3 flex-col md:flex-row xl:flex-row xl:h-[3rem]">
                  <div className="w-[100%] flex xl:w-[30%] gap-3">
                    <div className=" h-full flex justify-center items-center md:w-[8%] xl:w-[15%]">
                      {item.svg1}
                    </div>
                    <div className="w-[85%] h-full flex justify-start items-center">
                      <p>{item.para1}</p>
                    </div>
                  </div>
                  <div className="w-[100%] flex xl:w-[60%] gap-4">
                    <div className=" h-full flex justify-center items-center md:w-[8%]">
                      {item.svg2}
                    </div>
                    <div className="w-[85%] h-full flex justify-start items-center">
                      <p>{item.para2}</p>
                    </div>
                  </div>
                </div>
                <p className="mt-6 text-sm text-black/60">{item.summary}</p>
              </div>
            </div>
          ))}
        </div>

        {/* PC View */}
        <div className="w-full hidden lg:grid grid-cols-1  mx-auto gap-10">
          <div className="flex justify-center items-center">
            <div>
              <div className="flex justify-center items-center">
                <div className="border-b border-gray-500  inline-block pb-1">
                  <p className="text-center text-xl font-semibold text-gray-500 lg:text-2xl">
                    Places To Visit
                  </p>
                </div>
              </div>
              <h3 className="text-center text-2xl lg:text-4xl leading-snug mt-6 font-semibold ">
                Tourist Destination Nearby
              </h3>
            </div>
          </div>
          {OurProcessData.map((item, index) => (
            <div key={item.id}>
              {index % 2 === 0 ? (
                <div className="grid grid-cols-2 gap-8 p-5">
                  {/* <div className="relative h-[20rem]">
                    <Image
                      alt={"Mountains"}
                      src={item.img}
                      fill
                      sizes="(width: 100%)"
                      style={{
                        objectFit: "cover",
                        borderRadius: "20px", // cover, contain, none
                      }}
                      className="group-hover:scale-105"
                    />
                  </div> */}
                  <div className="w-full h-[20rem] relative group overflow-hidden rounded-xl shadow-lg">
                    <Image
                      src={item.img}
                      fill
                      sizes="(width: 100%)"
                      alt={"Mountains"}
                      className="w-full h-full object-cover transition-all group-hover:scale-105 aspect-[300/300]"
                    />
                  </div>
                  <div className="flex flex-col justify-center text-left">
                    <h1 className="text-2xl font-semibold leading-relaxed  border-l-3 border-[#333333] pl-3">
                      {item.title}
                    </h1>
                    <div className="w-full flex justify-between h-[4rem] mt-3 flex-col xl:flex-row xl:h-[3rem]">
                      <div className="w-[100%%] flex xl:w-[30%]">
                        <div className="w-[15%] h-full flex justify-center items-center md:w-[8%] xl:w-[15%]">
                          {item.svg1}
                        </div>
                        <div className="w-[85%] h-full flex justify-start items-center">
                          <p>{item.para1}</p>
                        </div>
                      </div>
                      <div className="w-[100%] flex xl:w-[60%]">
                        <div className="w-[15%] h-full flex justify-center items-center md:w-[8%]">
                          {item.svg2}
                        </div>
                        <div className="w-[85%] h-full flex justify-start items-center">
                          <p>{item.para2}</p>
                        </div>
                      </div>
                    </div>
                    <p className="mt-4 text-base text-black/60">
                      {item.summary}
                    </p>
                  </div>
                </div>
              ) : (
                <div className="grid grid-cols-2 gap-8 p-5">
                  <div className="flex flex-col justify-center text-left">
                    <h1 className="text-2xl font-semibold leading-relaxed  border-l-3 border-blue-600 pl-3">
                      {item.title}
                    </h1>
                    <div className="w-full flex justify-between h-[4rem] mt-3 flex-col xl:flex-row xl:h-[3rem]">
                      <div className="w-[100%%] flex xl:w-[30%]">
                        <div className="w-[15%] h-full flex justify-center items-center md:w-[8%] xl:w-[15%]">
                          {item.svg1}
                        </div>
                        <div className="w-[85%] h-full flex justify-start items-center">
                          <p>{item.para1}</p>
                        </div>
                      </div>
                      <div className="w-[100%] flex xl:w-[60%]">
                        <div className="w-[15%] h-full flex justify-center items-center md:w-[8%]">
                          {item.svg2}
                        </div>
                        <div className="w-[85%] h-full flex justify-start items-center">
                          <p>{item.para2}</p>
                        </div>
                      </div>
                    </div>
                    <p className="mt-4 text-base text-black/60">
                      {item.summary}
                    </p>
                  </div>
                  <div className="w-full h-[20rem] relative group overflow-hidden rounded-xl shadow-lg">
                    <Image
                      src={item.img}
                      width={800}
                      height={800}
                      alt="special-tours"
                      className="w-full h-full object-cover transition-all group-hover:scale-105 aspect-[300/300]"
                      loading="lazy"
                    />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Placestovisit;