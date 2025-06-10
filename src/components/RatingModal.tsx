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
import { useEffect, useRef } from "react";
import { toast } from "react-toastify";

const formSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  text: z.string().min(1, { message: "Review text is required" }),
  rating: z.number().min(1).max(5),
  file: z.instanceof(FileList).optional(),
});

interface RatingModalProps {
  setIsOpened: (isOpen: boolean) => void;
}

const RatingModal = ({ setIsOpened }: RatingModalProps) => {
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
  const fileRef = useRef<HTMLInputElement>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      text: "",
      rating: 5,
    },
  });

  useEffect(() => {
    setIsOpened(isOpen);
    if(isOpen){
      toast.pause();
    }else{
      toast.play();
    }
  }, [isOpen, setIsOpened]);

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('review', data.text);
    formData.append('rating', data.rating.toString());
    
    if (data.file && data.file.length > 0) {
      formData.append('file', data.file[0]);
    }

    try {
      // Replace with your actual API call
      const response = await fetch('/api/ratings', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        onClose();
        form.reset();
      } else {
        console.error('Failed to submit rating');
      }
    } catch (error) {
      console.error('Error submitting rating:', error);
    }
  };

  const handleClose = () => {
    form.reset();
    onClose();
  };

  return (
    <>
      <Button
        className="px-3 py-1 bg-pink-500 text-white rounded hover:bg-pink-600"
        onPress={onOpen}
      >
        Rate Now
      </Button>

      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
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
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      {...form.register("name")}
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-indigo-500 dark:bg-gray-800 dark:text-white"
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
                    <input
                      type="file"
                      id="file"
                      {...form.register("file")}
                      ref={fileRef}
                      accept="image/*"
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-800 dark:text-white"
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
                      Your Review *
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
                      Your Rating *
                    </label>
                    <div className="flex items-center space-x-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          onClick={() => form.setValue("rating", star)}
                          className={`text-2xl ${star <= form.watch("rating") ? 'text-yellow-400' : 'text-gray-300'}`}
                        >
                          ★
                        </button>
                      ))}
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
                  {form.formState.isSubmitting ? 'Submitting...' : 'Submit Review'}
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