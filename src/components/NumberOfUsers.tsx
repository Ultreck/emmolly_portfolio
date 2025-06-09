import {
  Chip,
  Tab,
  Tabs,
  //   Modal,
  //   ModalContent,
  //   ModalHeader,
  //   ModalBody,
  //   ModalFooter,
  //   Button,
  //   useDisclosure,
  Tooltip,
} from "@heroui/react";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  Button,
  useDisclosure,
} from "@heroui/react";
import { useState } from "react";
import type { Key } from "@react-types/shared";

interface UserTabData {
  countryName: string;
  ips?: string[]; // Add this property to match usage in the component
  // Define the properties based on your data structure, for example:
  // id: string;
  // title: string;
  // count: number;
}

interface NumberOfUsersProps {
  data: UserTabData[]; // Use the specific type instead of 'any'
  ip?: string[]; // Add this property to match usage in the component
}

const NumberOfUsers = ({ data, ip }: NumberOfUsersProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  //   const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
  const [tab, setTab] = useState<Key | null | undefined>("Nigeria");



const formatIPs = (ip: string): string => {
    const formatOne = ip.split('.').slice(-3, -1);
    // You can adjust the formatting as needed, here just joining the result for display
    return `User: XX.XX.XX.`+formatOne.join('.');
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
      <Drawer isOpen={isOpen} size={"4xl"} onClose={onClose}>
        <DrawerContent>
          {(onClose) => (
            <>
              <DrawerHeader className="flex flex-col gap-1 mt-6">
                There are {ip?.length} people from {data.length} different
                countries across the world who visited this portfolio.
              </DrawerHeader>
              <DrawerBody>
                <div className="flex w-full flex-col overflow-x-auto">
                  <Tabs
                    aria-label="Options"
                    selectedKey={tab}
                    onSelectionChange={(e) => setTab(e)}
                    classNames={{
                      tabList: "gap-6 w-full relative rounded-none p-0",
                      cursor: "w-full bg-[#22d3ee]",
                      tab: "max-xl px-0 h-10",
                      tabContent: "group-data-[selected=true]:text-[#06b6d4]",
                    }}
                    color="primary"
                    variant="underlined"
                  >
                    {!!data?.length &&
                      data?.map((item: UserTabData) => (
                        <Tab
                          key={item.countryName}
                          title={
                            <div className="flex items-center space-x-2">
                              <span>{item?.countryName}</span>
                              <Chip size="sm" variant="faded">
                                {item?.ips?.length}
                              </Chip>
                            </div>
                          }
                        >
                          <div className="text ">
                            {item?.ips?.map((ip, index) => (
                              <div
                                className="text flex items-center gap-10 my-5"
                                key={index}
                              >
                                <div className="text w-10 h-10 bg-gray-500 rounded-full"></div>
                                <div className="text">{formatIPs(ip)}</div>
                              </div>
                            ))}
                          </div>
                        </Tab>
                      ))}
                  </Tabs>
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
