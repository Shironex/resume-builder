"use client";

import React, { useState } from "react";
import { useSearchParams } from "next/navigation";
import { steps } from "./_components/steps";
import Breadcrumbs from "./_components/bread-crumbs";
import Footer from "./_components/footer";
import { ResumeValues } from "@/lib/validation";

const EditorBuilder = () => {
  const searchParams = useSearchParams();
  const [resumeData, SetResumeData] = useState<ResumeValues>({});
  const currentStep = searchParams.get("step") || steps[0].key;

  function setStep(key: string) {
    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.set("step", key);
    window.history.pushState(null, "", `?${newSearchParams.toString()}`);
  }

  const FormComponent = steps.find(
    (step) => step.key === currentStep,
  )?.component;

  return (
    <div className="flex grow flex-col">
      <header className="space-y-1.5 border-b px-3 py-5 text-center">
        <h1 className="text-2xl font-bold">Design your resume</h1>
        <p className="text-sm text-muted-foreground">
          Follow the steps below to create your resume. Your progress will be
          saved automatically.
        </p>
      </header>

      <main className="relative grow">
        <div className="absolute bottom-0 top-0 flex w-full">
          <div className="w-full space-y-6 overflow-y-auto p-3 md:block md:w-1/2">
            <Breadcrumbs currentStep={currentStep} setCurrentStep={setStep} />

            {FormComponent && (
              <FormComponent
                resumeData={resumeData}
                setResumeData={SetResumeData}
              />
            )}
          </div>

          <div className="grow md:border-r" />

          <div className="hidden w-1/2 md:flex">rigt</div>
        </div>
      </main>

      <Footer currentStep={currentStep} setCurrentStep={setStep} />
    </div>
  );
};

export default EditorBuilder;
