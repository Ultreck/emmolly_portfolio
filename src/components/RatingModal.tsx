import { fadeIn } from "@/utils/variant";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@heroui/react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import { FiUploadCloud } from "react-icons/fi";
import Rating from "@mui/material/Rating";
import Box from "@mui/material/Box";
import StarIcon from "@mui/icons-material/Star";

const formSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  text: z.string().min(1, { message: "Review text is required" }),
  rating: z.number()
    .min(1, { message: "Please select at least 1 star" })
    .max(5, { message: "Maximum rating is 5 stars" }),
  file: z.instanceof(FileList).optional(),
});

interface RatingModalProps {
  setIsOpened: (isOpen: boolean) => void;
}

const RatingModal = ({ setIsOpened }: RatingModalProps) => {
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
  const [value, setValue] = useState<number | null>(0.5);
  const [hover, setHover] = useState(-1);
  const fileRef = useRef<HTMLInputElement>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      text: "",
      rating: 0,
    },
  });

  useEffect(() => {
    setIsOpened(isOpen);
    if (isOpen) {
      toast.pause();
    } else {
      toast.play();
    }
  }, [isOpen, setIsOpened]);

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("review", data.text);
    formData.append("rating", data.rating.toString());

    if (fileRef.current && fileRef.current.files && fileRef.current.files.length > 0) {
      formData.append("file", fileRef.current.files[0]);
    }
    formData.forEach(element => {
      console.log(element);
      
    });

    // try {
    //   const response = await fetch("/api/ratings", {
    //     method: "POST",
    //     body: formData,
    //   });

    //   if (response.ok) {
    //     onClose();
    //     form.reset();
    //   } else {
    //     console.error("Failed to submit rating");
    //   }
    // } catch (error) {
    //   console.error("Error submitting rating:", error);
    // }
  };

  const handleClose = () => {
    form.reset();
    onClose();
  };

  const labels: { [index: string]: string } = {
    0.5: "Very Poor",
    1: "Poor",
    1.5: "Fair",
    2: "Below Average",
    2.5: "Average",
    3: "Good",
    3.5: "Very Good",
    4: "Excellent",
    4.5: "Outstanding",
    5: "Perfect",
  };
  function getLabelText(value: number) {
    return `${value} Star${value !== 1 ? "s" : ""}, ${labels[value]}`;
  }

  const handleFileUpload = () => {
    fileRef.current?.click();
  };
  return (
    <>
      <Button
        className="px-3 py-1 bg-pink-500 text-white rounded hover:bg-pink-600"
        onPress={onOpen}
      >
        Rate Now
      </Button>

      <Modal
        className="dark:bg-gray-800"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
      >
        <ModalContent>
          {() => (
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <ModalHeader className="flex flex-col gap-1">
                Rate My Portfolio
              </ModalHeader>
              <ModalBody>
                <div className="grid grid-cols-1 gap-6 mb-6">
                  {/* Name Field */}
                  <motion.div
                    initial="hidden"
                    whileInView="show"
                    viewport={{ margin: "-5%" }}
                    variants={fadeIn("down", "spring", 0.2, 1.0)}
                  >
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                    >
                      Your Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      {...form.register("name")}
                      className="w-full px-4 p-7 h-12 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-indigo-500 dark:bg-gray-800 dark:text-white"
                      placeholder="Your name"
                    />
                    {form.formState.errors.name && (
                      <p className="mt-1 text-sm text-red-500">
                        {form.formState.errors.name.message}
                      </p>
                    )}
                  </motion.div>

                  {/* Profile Picture */}
                  <motion.div
                    initial="hidden"
                    whileInView="show"
                    viewport={{ margin: "-20%" }}
                    variants={fadeIn("down", "spring", 0.4, 1.0)}
                  >
                    <label
                      htmlFor="file"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                    >
                      Profile Picture (Optional)
                    </label>
                    <button
                      onClick={handleFileUpload}
                      className={`text ${
                        fileRef.current &&
                        fileRef.current.files &&
                        fileRef.current.files.length > 0 &&
                        ["jpeg", "jpg", "png", "webp"].includes(
                          fileRef.current.files[0].type.split("/")[1]
                        )? "border-green-300 dark:border-green-600 bg-green-100 dark:bg-green-600/30 " :  fileRef.current &&
                        fileRef.current.files &&
                        fileRef.current.files.length > 0 &&
                        !["jpeg", "jpg", "png", "webp"].includes(
                          fileRef.current.files[0].type.split("/")[1]
                        )? "border-red-300 dark:border-red-600 bg-red-100 dark:bg-red-600/30 " : "border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-600/30"
                      } cursor-pointer flex justify-center items-center w-full h-12 p-7 border-2 border-dashed rounded-lg`}
                    >
                      <div className="">
                        <FiUploadCloud className="mx-auto" />
                        <p className="dark:text-gray-500">
                          { fileRef.current &&
                        fileRef.current.files &&
                        fileRef.current.files.length > 0? <span className="text"><strong className="text">{fileRef.current.files[0].name} </strong> file attachd</span> : "Format: jpeg, jpg, png, webp"}
                          
                        </p>
                      </div>
                    </button>
                    <input
                      type="file"
                      id="file"
                      {...form.register("file")}
                      ref={fileRef}
                      accept="image/*"
                      className="w-full hidden px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-800 dark:text-white"
                    />
                  </motion.div>

                  {/* Review Text */}
                  <motion.div
                    initial="hidden"
                    whileInView="show"
                    viewport={{ margin: "-20%" }}
                    variants={fadeIn("right", "spring", 0.5, 1.0)}
                  >
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Your Review <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="text"
                      {...form.register("text")}
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-800 dark:text-white"
                      rows={4}
                      placeholder="Share your thoughts about my portfolio..."
                    />
                    {form.formState.errors.text && (
                      <p className="mt-1 text-sm text-red-500">
                        {form.formState.errors.text.message}
                      </p>
                    )}
                  </motion.div>
                  {/* Rating Field */}
                  <motion.div
                    initial="hidden"
                    whileInView="show"
                    viewport={{ margin: "-20%" }}
                    variants={fadeIn("down", "spring", 0.3, 1.0)}
                  >
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Your Rating <span className="text-red-500">*</span>
                    </label>
                    <div className="text flex items-center gap-5">
                      <Rating
                        sx={{
                          "& .MuiRating-icon": {
                            marginRight: "8px",
                            marginLeft: "8px",
                          },
                          "& .MuiRating-icon:last-child": {
                            marginRight: 0,
                          },
                          "& .MuiRating-iconEmpty": {
                            color: "#6b7280",
                          },
                        }}
                        value={form.watch("rating")}
                        defaultValue={0}
                        size="large"
                        name="rating"
                        precision={0.5}
                        getLabelText={getLabelText}
                        onChange={(event, newValue) => {
                          console.log(event);
                          setValue(newValue);
                          form.setValue("rating", newValue as number, {
                            shouldValidate: true,
                          });
                        }}
                        onChangeActive={(event, newHover) => {
                          console.log(event);
                          setHover(newHover);
                        }}
                        emptyIcon={
                          <StarIcon
                            style={{ opacity: 0.55 }}
                            fontSize="inherit"
                          />
                        }
                      />
                      {value !== null && (
                        <Box sx={{ ml: 2 }}>
                          {labels[hover !== -1 ? hover : value]}
                        </Box>
                      )}
                    </div>
                  </motion.div>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={handleClose}>
                  Cancel
                </Button>
                <Button
                  color="primary"
                  type="submit"
                  isDisabled={form.formState.isSubmitting}
                >
                  {form.formState.isSubmitting
                    ? "Submitting..."
                    : "Submit Review"}
                </Button>
              </ModalFooter>
            </form>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default RatingModal;
