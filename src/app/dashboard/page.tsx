// TODO: Make this server side rendered
'use client';

import { useLocations } from '@/firebase/locations';
import { Container, Typography } from '@mui/material';

export default function Dashboard() {
  const [locations] = useLocations();

  return (
    <Container>
      <Typography variant="h1">Dashboard</Typography>
      {locations?.map((location) => (
        <Typography key={location.id}>{location.name}</Typography>
      ))}
    </Container>
  );
}
