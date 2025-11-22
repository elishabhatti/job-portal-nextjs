import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";

const EmployerSettingsForm = () => {
  return (
    <div>
      <form>
        <div className="grid w-full max-w-sm items-center gap-3">
          <Label htmlFor="picture">Picture</Label>
          <Input id="picture" type="file" />
        </div>
      </form>
    </div>
  );
};

export default EmployerSettingsForm;
