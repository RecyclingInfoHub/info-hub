import { Container, Typography } from '@mui/material';
import { redirect } from 'next/navigation'

export default function Home() {
  return redirect('/dashboard')
}
