import { useState } from "react";
import { toast } from "sonner";
import { authData } from "@/data/authData";

export const useLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) return;

    setIsLoading(true);

    // Mock API call
    setTimeout(() => {
      setIsLoading(false);
      // Mock validation
      if (email === "admin@clinica.com" && password === "admin") {
        toast.success(authData.login.successMsg);
        // In a real app, redirect or update auth context here
      } else {
        toast.error(authData.login.errorMsg);
      }
    }, 1500);
  };

  return {
    email,
    setEmail,
    password,
    setPassword,
    isLoading,
    handleSubmit
  };
};
