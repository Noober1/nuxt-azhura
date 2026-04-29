import { useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'
import { contactFormSchema } from '../../shared/schemas'

export function useContactForm() {
  const { handleSubmit, values, errors, isSubmitting } = useForm({
    validationSchema: toTypedSchema(contactFormSchema),
    initialValues: {
      name: '',
      email: '',
      message: '',
    },
  })

  const onSubmit = handleSubmit(async (values) => {
    console.log('Form submitted with values:', values)
    // TODO: Call API endpoint to handle form submission
  })

  return {
    values,
    errors,
    isSubmitting,
    onSubmit,
  }
}
