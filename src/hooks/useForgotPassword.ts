import { useState } from "react";
import { toast } from "sonner";
import { authData } from "@/data/authData";

export const useForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);

    // Mock API call
    setTimeout(() => {
      setIsLoading(false);
      setIsSuccess(true);
      toast.success(authData.forgotPassword.successMsg);
    }, 1500);
  };

  return {
    email,
    setEmail,
    isLoading,
    isSuccess,
    handleSubmit
  };
};
