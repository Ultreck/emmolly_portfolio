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

interface NumberOfUsersProps {
  data: any; // Replace 'any' with a more specific type if possible
}

const NumberOfUsers = ({ data }: NumberOfUsersProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  //   const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
  const [tab, setTab] = useState<Key | null | undefined>("Nigeria");
  console.log(data);
  
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
                Drawer Title
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
                      tab: "max-xl px-0 h-12",
                      tabContent: "group-data-[selected=true]:text-[#06b6d4]",
                    }}
                    color="primary"
                    variant="underlined"
                  >
                    <Tab
                      key="current-orders"
                      title={
                        <div className="flex items-center space-x-2">
                          <span>Current Orders</span>
                          <Chip size="sm" variant="faded">
                            2
                          </Chip>
                        </div>
                      }
                    >
                      <div className="mt-8 flex justify-between">
                        <div className="flex space-x-4">
                          <img
                            src="/images/accessbank.png"
                            alt=""
                            className="w-[30px]"
                          />
                          <div>
                            <p className="text-2xl font-bold">Access Bank</p>
                            <p className="text-sm">ACB</p>
                          </div>
                        </div>
                        <div>
                          <p className="text-2xl font-bold">N34.22</p>
                          <p className="text-sm">22,000 Units</p>
                        </div>
                      </div>
                      <div className="mt-8 flex justify-between">
                        <div className="flex space-x-4">
                          <img
                            src="/images/accessbank.png"
                            alt=""
                            className="w-[30px]"
                          />
                          <div>
                            <p className="text-2xl font-bold">Access Bank</p>
                            <p className="text-sm">ACB</p>
                          </div>
                        </div>
                        <div>
                          <p className="text-2xl font-bold">N34.22</p>
                          <p className="text-sm">22,000 Units</p>
                        </div>
                      </div>
                    </Tab>
                    <Tab
                      key="pending-orders"
                      title={
                        <div className="flex items-center space-x-2">
                          <span>Pending Orders</span>
                          <Chip size="sm" variant="faded">
                            1
                          </Chip>
                        </div>
                      }
                    >
                      <div className="mt-4 flex justify-between">
                        <div className="flex space-x-4">
                          <img
                            src="/images/accessbank.png"
                            alt=""
                            className="w-[30px]"
                          />
                          <div>
                            <p className="text-2xl font-bold">Access Bank</p>
                            <p className="text-sm">ACB</p>
                          </div>
                        </div>
                        <div>
                          <p className="text-2xl font-bold">N34.22</p>
                          <p className="text-sm">22,000 Units</p>
                        </div>
                      </div>
                    </Tab>
                    <Tab
                      key="completed-orders"
                      title={
                        <div className="flex items-center space-x-2">
                          <span>Completed Orders</span>
                          <Chip size="sm" variant="faded">
                            3
                          </Chip>
                        </div>
                      }
                    />
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
