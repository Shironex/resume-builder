import { Steps } from "@/lib/types";
import GeneralInfoForm from "../forms/general-info-form";
import PersonalInfoForm from "../forms/personal-info-form";
import WorkExperienceForm from "../forms/work-experience-form";
import EducationForm from "../forms/education-form";
import SkillsForm from "../forms/skills-form";

export const steps: Steps[] = [
  {
    title: "General Info",
    component: GeneralInfoForm,
    key: "general-info",
  },
  {
    title: "Personal Info",
    component: PersonalInfoForm,
    key: "personal-info"
  },
  {
    title: "Work Experience",
    component: WorkExperienceForm,
    key: "work-experience"
  },
  {
    title: "Education Info",
    component: EducationForm,
    key: "education-info"
  },
  {
    title: "Skills",
    component: SkillsForm,
    key: "skills"
  }
];
