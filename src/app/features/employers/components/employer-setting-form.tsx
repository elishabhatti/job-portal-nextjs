import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";
import { useForm } from "react-hook-form";

interface IFormInput {
  username: string;
  email: string;
}

const EmployerSettingsForm = () => {
  const { register, handleSubmit } = useForm<IFormInput>();

  const handleFormSubmit = (data: IFormInput) => {
    console.log(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <div className="grid w-full max-w-sm items-center gap-3">
          <Label htmlFor="username">Username</Label>
          <Input id="username" type="file" {...register("username")} />
        </div>
        <div className="grid w-full max-w-sm items-center gap-3">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="file" {...register("email")} />
        </div>
        <Button type="submit">Save Changes</Button>
      </form>
    </div>
  );
};

export default EmployerSettingsForm;
