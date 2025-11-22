"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Building2 } from "lucide-react";
import { useForm } from "react-hook-form";

interface IFormInput {
  username: string;
  email: string;
  name: string;
}

const EmployerSettingsForm = () => {
  const { register, handleSubmit } = useForm<IFormInput>();

  const handleFormSubmit = (data: IFormInput) => {
    console.log(data);
  };

  return (
    <Card className="w-3/4">
      <CardContent>
        <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-6">
          <div className="grid w-full max-w-sm items-center gap-3">
            <Label htmlFor="username">username</Label>
            <Input id="username" type="text" {...register("username")} />
          </div>
          <div className="grid w-full max-w-sm items-center gap-3">
            <Label htmlFor="email">email</Label>
            <Input id="email" type="text" {...register("email")} />
          </div>

          {/* Company Name */}
          <div className="space-y-2">
            <Label htmlFor="companyName">Company Name *</Label>
            <div className="relative">
              <Building2 className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted foreground" />
              <Input
                id="companyName"
                type="text"
                placeholder="Enter company name"
                className="pl-10"
                {...register("name")}
              />
            </div>
          </div>

          <Button type="submit">Save Changes</Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default EmployerSettingsForm;
