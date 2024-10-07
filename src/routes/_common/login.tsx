import { createFileRoute } from '@tanstack/react-router'
import { Login } from '../../components/Login'

export const Route = createFileRoute('/_common/login')({
  component: () => <Login></Login>,
})
