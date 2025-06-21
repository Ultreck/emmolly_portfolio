import { useDisclosure } from "@heroui/react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useRef, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";

const formSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  text: z.string().min(1, { message: "Review text is required" }),
  rating: z
    .number()
    .min(1, { message: "Please select at least 1 star" })
    .max(5, { message: "Maximum rating is 5 stars" }),
  file: z.instanceof(FileList).optional(),
});

const baseUrl = import.meta.env.VITE_BASE_URL;
const appName = import.meta.env.VITE_APP_NAME;
const apiUrl = import.meta.env.VITE_API_URL;
const usePort = () => {
  const fileRef = useRef<HTMLInputElement>(null);
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
  const [message, setMessage] = useState<string | undefined>();
  const [isFailed, setIsFailed] = useState<string | undefined>();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      text: "",
      rating: 0,
    },
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("message", data.text);
    formData.append("star", data.rating.toString());
    formData.append("appName", appName);

    if (
      fileRef.current &&
      fileRef.current.files &&
      fileRef.current.files.length > 0
    ) {
      formData.append("profile", fileRef.current.files[0]);
    }
    try {
      const res = await axios.post(`${baseUrl}/user/review`, formData);
      console.log(res);

      if (res?.data?.success) {
        setMessage(res?.data?.message);
        toast.success("Thank you for your rating! ❤️", {
          position: "bottom-right",
          autoClose: 3000,
        });
        window.localStorage.setItem("portfolioRated", "true");
        setTimeout(() => {
          onClose();
          form.reset();
        }, 500);
        setMessage("");
        setIsFailed("");
      } else {
        setMessage(res?.data?.message);
        console.error("Failed to submit rating");
      }
    } catch (error) {
      if (
        typeof error === "object" &&
        error !== null &&
        "response" in error &&
        typeof (error as any).response === "object" &&
        (error as any).response !== null &&
        "data" in (error as any).response &&
        typeof (error as any).response.data === "object" &&
        (error as any).response.data !== null &&
        "message" in (error as any).response.data
      ) {
        setIsFailed(
          (error as any).response.data.message || "User already rated"
        );
      } else {
        setIsFailed("Failed to submit rating");
      }
      console.error("Error submitting rating:", error);
    }
  };

  return {
    isFailed,
    appName,
    baseUrl,
    fileRef,
    message,
    isOpen,
    apiUrl,
    form,
    onOpen,
    onClose,
    onSubmit,
    setMessage,
    setIsFailed,
    onOpenChange,
  };
};

export default usePort;
