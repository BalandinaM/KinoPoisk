import { toast } from 'sonner'

export const errorToast = (message: string, error?: unknown) => {
  toast.error(message, {
    duration: 6000,
    position: 'top-right',
    richColors: true,
  })

  if (error) {
    console.error(`${message}\n`, error)
  }
}
