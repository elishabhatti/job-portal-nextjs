"use client";

import ApplicantSettingsForm from "@/app/features/applicants/components/applicant-settings-form";

const SettingsPage = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Header */}
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Profile Settings</h2>
        <p className="text-muted-foreground mb-6">
          Manage your personal information and professional profile.
        </p>
      </div>

      {/* Applicant Settings Form */}
      <ApplicantSettingsForm />
    </div>
  );
};

export default SettingsPage;
