import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_common/description')({
  component: () => <div>Hello /_common/description!</div>,
})
