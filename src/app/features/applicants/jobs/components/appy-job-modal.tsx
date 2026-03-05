"use client"

import { useState } from "react";
import { useForm } from "react-hook-form";
import { applyJobSchema } from "../../apply-job-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";

interface ApplyJobModal {
    jobId: number;
    jobTitle: string;
    hasApplied: boolean;
    resumes: {id: number; fileName: string}[];
}

const ApplyJobModal = async ({
    jobId,
    jobTitle,
    hasApplied,
    resumes,
}:ApplyJobModal) => {
    const [isOpen, setIsOpen] = useState(false);

    const {
        register,
        handleSubmit,
        control,
        reset,
        formState: {errors, isSubmitting},
    } = useForm<applyJobSchema>({
        resolver: zodResolver(applyJobSchema),
        defaultValues: {
            jobId: jobId,
            resumeId: resumes.length === 1 ? resumes[0].id : undefined,
            coverLetter: "",
        }
    })

    if(hasApplied) {
        return (
            <Button disabled className="w-full sm:w-auto bg-gray-100 text-gray-500 cursor-not-allowed">Already Applied</Button>
        )
    }

  return (
    <></>
  )
}

export default ApplyJobModal