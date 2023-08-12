// TODO: Make this server side rendered
'use client';

import { useLocations } from '@/firebase/locations';
import { Container, Typography } from '@mui/material';
import { ILocation, IMaterials } from '@/types';
import dynamic from 'next/dynamic';
import { useMaterials } from '@/firebase/materials';
import MapFilter from '@/components/MapFilter';
import { useSelectMaterial } from '@/hooks/select-material';
import { useCrossFilterLocations } from '@/hooks/cross-filter-locations';
import { useState } from 'react';
import { useMapStringSearch } from '@/hooks/map-string-search';

const DynamicMap = dynamic(() => import('@/components/Map'), { ssr: false });

export default function Dashboard() {
  const [materials] = useMaterials() as unknown as [IMaterials[] | undefined];
  const [materialFilterList, toggleMaterialFilterHandler] = useSelectMaterial();
  const [firebaseLocations] = useLocations(materialFilterList) as unknown as [
    ILocation[]
  ];
  const [searchString, setSearchString] = useState('');
  const [algoliaLocations] = useMapStringSearch(searchString);
  const [filterResult] = useCrossFilterLocations(
    firebaseLocations,
    algoliaLocations
  );

  return (
    <Container>
      <Typography variant="h1">Dashboard</Typography>
      <MapFilter
        rawMaterials={materials}
        materialFilterList={materialFilterList}
        toggleMaterialFilterHandler={toggleMaterialFilterHandler}
        searchString={searchString}
        onChangeSearchString={(e) => setSearchString(e.currentTarget.value)}
      />
      <DynamicMap locations={filterResult} />
    </Container>
  );
}
