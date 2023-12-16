import React, { useState } from 'react';
import { Checkbox, Collapse, Grid, Input } from '@mui/material';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import {
  ExpandLess as ChevronUp,
  ExpandMore as ChevronDown,
} from '@mui/icons-material';
import { startCase } from 'lodash';
import { useMaterials } from '@/firebase/materials';
import { IMaterials } from '@/types';

// todo: stop here at migrating map filter component
// import materialsJSON from '../json/materials.json';

const MapFilter = ({
  rawMaterials,
  materialFilterList,
  toggleMaterialFilterHandler,
  searchString,
  onChangeSearchString,
}: {
  rawMaterials: IMaterials[] | undefined;
  materialFilterList: string[];
  toggleMaterialFilterHandler: (material: string) => void;
  searchString: string;
  onChangeSearchString: React.ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  >;
}) => {
  const materials = rawMaterials?.map((material) => ({
    label: startCase(material.id),
    value: material.id,
  }));

  const [isOpen, setOpen] = useState(false);

  const ToggleIcon = () => {
    if (isOpen) {
      // return <ChevronUp size={32} strokeWidth={1} color={'black'}  />;
      // return <ChevronUp />;
    }
    // return <ChevronDown size={32} strokeWidth={1} color={'black'} />;
    // return <ChevronDown />;

    return isOpen ? (
      <ChevronUp fontSize="large" />
    ) : (
      <ChevronDown fontSize="large" />
    );
  };

  if (!materials) return <div>Loading Materials</div>;

  return (
    <div className="w-4/5 p-4 py-2 my-5 mx-auto bg-gray-100">
      <div
        className="text-xl font-bold flex justify-between"
        onClick={() => setOpen((o) => !o)}>
        Search Map
        {ToggleIcon()}
      </div>
      <Collapse in={isOpen}>
        <div className="collapse-content mt-5">
          <Input
            placeholder="Enter materials or location name or address to search"
            className="input w-full bg-gray-200 mb-4"
            defaultValue={searchString}
            onChange={onChangeSearchString}
          />
          <hr />
          <div>
            <div className="text-lg fond-bold text-gray-400 my-4">
              Materials
            </div>

            <FormGroup>
              <Grid container spacing={2}>
                {materials.map(({ label, value }, index: number) => (
                  <Grid key={index} item xs={4}>
                    <FormControlLabel
                      key={index}
                      required
                      control={
                        <Checkbox
                          checked={materialFilterList.indexOf(value) >= 0}
                          onChange={() => toggleMaterialFilterHandler(value)}
                        />
                      }
                      label={label}
                    />
                  </Grid>
                ))}
              </Grid>
            </FormGroup>
          </div>
        </div>
      </Collapse>
    </div>
  );
};

export default MapFilter;
