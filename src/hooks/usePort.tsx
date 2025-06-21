import { useDisclosure } from "@heroui/react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useRef } from "react";
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
  const { onClose } = useDisclosure();

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
    formData.forEach((element) => {
      console.log(element);
    });

    try {
      const res = await axios.post(`${baseUrl}/user/review`, formData);
        console.log(res);
        
      if (res?.data?.success) {
        toast.success("Thank you for your rating! ❤️", {
          position: "bottom-right",
          autoClose: 3000,
        });
        window.localStorage.setItem("portfolioRated", "true");
        setTimeout(() => {
          onClose();
          form.reset();
        }, 2000);
      } else {
        console.error("Failed to submit rating");
      }
    } catch (error) {
      console.error("Error submitting rating:", error);
    }
  };

  return {
    appName,
    baseUrl,
    fileRef,
    apiUrl,
    form,
    onSubmit,
  };
};

export default usePort;
