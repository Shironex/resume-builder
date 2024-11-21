import { Metadata } from "next";
import EditorBuilder from "./editor";

export const metadata: Metadata = {
  title: "Design your resume",
};

const EditorPage = () => {
  return <EditorBuilder />;
};

export default EditorPage;
