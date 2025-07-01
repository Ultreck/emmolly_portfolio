import { Chip, Tabs, Tooltip } from "@heroui/react";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  Button,
  useDisclosure,
} from "@heroui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useState } from "react";
import type { Swiper as SwiperClass } from "swiper";

interface UserTabData {
  countryName: string;
  countryCode: string;
  ips?: string[];
}

interface NumberOfUsersProps {
  data: UserTabData[];
  ip?: string[];
}

const NumberOfUsers = ({ data, ip }: NumberOfUsersProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [tab, setTab] = useState(0);
  const [swiper, setSwiper] = useState<SwiperClass | null>(null);

  interface SwiperInstance {
    slideTo: (index: number) => void;
    slidePrev: () => void;
    slideNext: () => void;
    activeIndex: number;
  }

  const handleTabChange = (key: string | number) => {
    const index = typeof key === "number" ? key : parseInt(key, 10);
    setTab(index);
    if (swiper) {
      (swiper as SwiperInstance).slideTo(index);
    }
  };

  interface SwiperInstanceType {
    activeIndex: number;
  }

  const handleSlideChange = (swiperInstance: SwiperInstanceType) => {
    setTab(swiperInstance.activeIndex);
  };

  const formatIPs = (ip: string): string => {
    const formatOne = ip.split(".").slice(-3, -1);
    return `User: XX.XX.XX.` + formatOne.join(".");
  };

  return (
    <>
      <Tooltip
        content="Total numver of user visited, click to see more information"
        showArrow={true}
      >
        <button
          onClick={onOpen}
          className="fixed text-white shadow-lg lg:ml-2 lg:p-2 top-0 mt-24 rounded lg:bg-blue-600 hover:bg-blue-500"
        >
          <img
            src="/assets/blinking.gif"
            alt="A blinking eye"
            className="text lg:w-10 w-7 lg:h-10 h-7 rounded-full mx-auto"
          />
          <strong className="text-2xl font-semibold font-mono hidden lg:block">
            {ip?.length}
          </strong>
        </button>
      </Tooltip>
      <Drawer className="bg-gray-100 dark:bg-gray-800 h-full" isOpen={isOpen} size={"4xl"} onClose={onClose}>
        <DrawerContent>
          {(onClose) => (
            <>
              <DrawerHeader className="flex flex-col gap-1 mt-6">
                There are {ip?.length} people from {data.length} different
                countries across the world who visited this portfolio.
              </DrawerHeader>
              <DrawerBody>
                <div className="relative bg-gray-100 dark:bg-gray-800">
                  <button
                    className="absolute left-0 top-0 z-10 h-10 w-8 flex items-center justify-center bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 rounded-l-lg"
                    onClick={() => swiper?.slidePrev()}
                  >
                    &lt;
                  </button>

                  <button
                    className="absolute right-0 top-0 z-10 h-10 w-8 flex items-center justify-center bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 rounded-r-lg"
                    onClick={() => swiper?.slideNext()}
                  >
                    &gt;
                  </button>

                  <div className="px-10">
                    <Swiper
                      modules={[Navigation]}
                      spaceBetween={24}
                      slidesPerView="auto"
                      onSwiper={setSwiper}
                      onSlideChange={handleSlideChange}
                      className="!overflow-hidden"
                    >
                      {data?.map((item, index) => (
                        <SwiperSlide key={item.countryName} className="!w-auto">
                          <div
                            onClick={() => handleTabChange(index)}
                            className={`h-10 px-4 flex items-center space-x-2 cursor-pointer ${
                              tab === index
                                ? "text-[#06b6d4] font-medium"
                                : "text-gray-600 dark:text-gray-400"
                            }`}
                          >
                            <span>{item.countryName}</span>
                            <Chip size="sm" variant="faded">
                              {item.ips?.length}
                            </Chip>
                          </div>
                          {tab === index && (
                            <div className="w-full h-0.5 bg-[#22d3ee]" />
                          )}
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </div>

                  <Tabs
                    aria-label="Options"
                    selectedKey={tab}
                    onSelectionChange={handleTabChange}
                    classNames={{
                      tabList: "hidden",
                      panel: "pt-4",
                    }}
                  ></Tabs>
                  {data[tab]?.ips && (
                    <div className="flex flex-wrap pl-7 gap-5 pt-5">
                      {data[tab].ips?.map((ip, index) => (
                        <div
                          className="shadow-md border p-5 gap-10 rounded-lg"
                          key={index}
                        >
                          <div className="flex items-center gap-2">
                            <div className="w-10 h-10 bg-gray-200 dark:bg-gray-600 rounded-full flex items-center justify-center font-bold">
                              {ip.split(".")[2]}
                            </div>
                            <div>{formatIPs(ip)}</div>
                          </div>
                          <div className="flex justify-between">
                            <p className="grid">
                              <span className="text-gray-500">Country</span>
                              <strong>{data[tab].countryName}</strong>
                            </p>
                            <p className="h-12 bg-gray-400 w-[1px] mx-2"></p>
                            <p className="grid">
                              <span className="text-gray-500">
                                Country code
                              </span>
                              <strong className="text-end">
                                {data[tab].countryCode}
                              </strong>
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </DrawerBody>
              <DrawerFooter className="text-start flex justify-start">
                <Button
                  color="danger"
                  variant="light"
                  className="bg-red-500/20"
                  onPress={onClose}
                >
                  Close
                </Button>
              </DrawerFooter>
            </>
          )}
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default NumberOfUsers;
