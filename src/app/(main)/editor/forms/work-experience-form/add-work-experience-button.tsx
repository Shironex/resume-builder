import { Button } from '@/components/ui/button'
import { WorkExperienceValues } from '@/lib/validation'
import React from 'react'
import { UseFieldArrayAppend } from 'react-hook-form'

type Props = {
    append: UseFieldArrayAppend<WorkExperienceValues>
}

const AddWorkExperienceButton = ({ append }: Props) => {
  return (
    <Button
    type="button"
    onClick={() =>
      append({
        position: "",
        company: "",
        startDate: "",
        endDate: "",
        description: "",
      })
    }
  >
    Add work experience
  </Button>  )
}

export default AddWorkExperienceButton