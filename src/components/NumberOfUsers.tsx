import {
  Chip,
  ScrollShadow,
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
  //   console.log(data, ip);

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
            5000
          </strong>
        </button>
      </Tooltip>
      <Drawer isOpen={isOpen} size={"full"} onClose={onClose}>
        <DrawerContent>
          {(onClose) => (
            <>
              <DrawerHeader className="flex flex-col gap-1">
                There are {ip?.length} people from {data.length} different
                countries who visited the portfolio across the world
              </DrawerHeader>
              <DrawerBody>
                <div className="flex w-full flex-col">
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
                        ></Tab>
                      ))}
                  </Tabs>
                </div>
              </DrawerBody>
              <DrawerFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Action
                </Button>
              </DrawerFooter>
            </>
          )}
        </DrawerContent>
      </Drawer>
      {/* <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Modal Title
              </ModalHeader>
              <ModalBody>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam pulvinar risus non risus hendrerit venenatis.
                  Pellentesque sit amet hendrerit risus, sed porttitor quam.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam pulvinar risus non risus hendrerit venenatis.
                  Pellentesque sit amet hendrerit risus, sed porttitor quam.
                </p>
                <p>
                  Magna exercitation reprehenderit magna aute tempor cupidatat
                  consequat elit dolor adipisicing. Mollit dolor eiusmod sunt ex
                  incididunt cillum quis. Velit duis sit officia eiusmod Lorem
                  aliqua enim laboris do dolor eiusmod. Et mollit incididunt
                  nisi consectetur esse laborum eiusmod pariatur proident Lorem
                  eiusmod et. Culpa deserunt nostrud ad veniam.
                </p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Action
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal> */}
    </>
  );
};

export default NumberOfUsers;
