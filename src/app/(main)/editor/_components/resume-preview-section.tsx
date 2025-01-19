import { ResumeValues } from '@/lib/validation'
import React from 'react'
import ResumePreview from './resume-preview'
import { cn } from '@/lib/utils'
import ColorPicker from './color-picker'

type Props = {
    resumeData: ResumeValues
    setResumeData: (resumeData: ResumeValues) => void
    ClassName?: string
}

const ResumePreviewSection = ({resumeData, setResumeData, ClassName}: Props) => {
  return (
    <div
      className={cn("group relative hidden w-full md:flex md:w-1/2", ClassName)}
    >
      <div className="absolute left-1 top-1 flex flex-none flex-col gap-3 opacity-50 transition-opacity group-hover:opacity-100 lg:left-3 lg:top-3 xl:opacity-100">
        <ColorPicker
          color={resumeData.colorHex}
          onChange={(color) =>
            setResumeData({ ...resumeData, colorHex: color.hex })
          }
        />

      </div>
      <div className="flex w-full justify-center overflow-y-auto bg-secondary p-3">
        <ResumePreview
          resumeData={resumeData}
          ClassName="max-w-2xl shadow-md"
        />
      </div>
    </div>
  )
}

export default ResumePreviewSection