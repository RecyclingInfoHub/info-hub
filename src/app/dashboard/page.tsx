import getCollection from '@/firebase/getCollection';
import { Container, Typography } from '@mui/material';

export default async function Dashboard() {
  const locations = await getCollection('locations');

  return (
    <Container>
      <Typography variant="h1">Dashboard</Typography>
      {locations.map((location) => (
        <Typography key={location.id}>{location.name}</Typography>
      ))}
    </Container>
  );
}
