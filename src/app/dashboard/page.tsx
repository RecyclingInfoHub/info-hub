// TODO: Make this server side rendered
'use client';

import { useLocations } from '@/firebase/locations';
import { Container, Typography } from '@mui/material';
import { ILocation, IMaterials } from '@/types';
import dynamic from 'next/dynamic';
import { useMaterials } from '@/firebase/materials';
import MapFilter from '@/components/MapFilter';
import { useSelectMaterial } from '@/hooks/select-material';

const DynamicMap = dynamic(() => import('@/components/Map'), { ssr: false });

export default function Dashboard() {
  const [materials] = useMaterials() as unknown as [IMaterials[] | undefined];
  const [materialFilterList, toggleMaterialFilterHandler] = useSelectMaterial();
  const [locations] = useLocations(materialFilterList) as unknown as [
    ILocation[] | undefined
  ];

  return (
    <Container>
      <Typography variant="h1">Dashboard</Typography>
      {/* {locations?.map((location) => (
        <Typography key={location.id}>{location.name}</Typography>
      ))} */}
      <MapFilter
        rawMaterials={materials}
        materialFilterList={materialFilterList}
        toggleMaterialFilterHandler={toggleMaterialFilterHandler}
      />
      <DynamicMap locations={locations} />
    </Container>
  );
}
