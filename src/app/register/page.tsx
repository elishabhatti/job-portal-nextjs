"use client";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";

interface RegistrationFormData {
  name: string;
  userName: string;
  email: string;
  password: string;
  confirmPassword: string;
  role: "applicant" | "employer";
}

const Registration: React.FC = () => {
  const [formData, setFormData] = useState<RegistrationFormData>({
    name: "",
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "applicant",
  });

  return (
    <div>
      <form>
        <div>
          <Input type="text" placeholder="Username" />
        </div>
      </form>
    </div>
  );
};

export default Registration;
