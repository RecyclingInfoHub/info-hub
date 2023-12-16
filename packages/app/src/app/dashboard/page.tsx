// TODO: Make this server side rendered
'use client';

import MapFilter from '@/components/MapFilter';
import { useLocations } from '@/firebase/locations';
import { useMaterials } from '@/firebase/materials';
import { useCrossFilterLocations } from '@/hooks/cross-filter-locations';
import { useMapStringSearch } from '@/hooks/map-string-search';
import { useSelectMaterial } from '@/hooks/select-material';
import { Box, Container, Typography } from '@mui/material';
import dynamic from 'next/dynamic';
import { useState } from 'react';

const DynamicMap = dynamic(() => import('@/components/Map'), { ssr: false });

export default function Dashboard() {
  const [materials] = useMaterials();
  const [materialFilterList, toggleMaterialFilterHandler] = useSelectMaterial();
  const [firebaseLocations] = useLocations(materialFilterList);
  const [searchString, setSearchString] = useState('');
  const [algoliaLocations] = useMapStringSearch(searchString);
  const [filterResult] = useCrossFilterLocations(
    firebaseLocations,
    algoliaLocations
  );

  return (
    <Container>
      <Typography variant="h3">Dashboard</Typography>
      <MapFilter
        rawMaterials={materials}
        materialFilterList={materialFilterList}
        toggleMaterialFilterHandler={toggleMaterialFilterHandler}
        searchString={searchString}
        onChangeSearchString={(e) => setSearchString(e.currentTarget.value)}
      />
      <Box mb={3}>
        <DynamicMap locations={filterResult} />
      </Box>
    </Container>
  );
}
