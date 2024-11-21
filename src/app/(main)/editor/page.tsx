import { Metadata } from "next";
import EditorClientPage from "./client-page";

export const metadata: Metadata = {
  title: "Design your resume",
};

const EditorPage = () => {
  return <EditorClientPage />;
};

export default EditorPage;
