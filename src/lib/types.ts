import type { ComponentType } from "react";
import { ResumeValues } from "./validation";

export interface EditorFormProps {
  resumeData: ResumeValues;
  setResumeData: (data: ResumeValues) => void;
}

export interface Steps {
  title: string;
  component: ComponentType<EditorFormProps>;
  key: string;
}
