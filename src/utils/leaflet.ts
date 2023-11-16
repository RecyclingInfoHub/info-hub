'use client';

import L from 'leaflet';
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

/**
 * Override to map to correct marker images
 *
 * references
 * @see {@link https://github.com/PaulLeCam/react-leaflet/issues/808 existing issue}
 * @see {@link https://stackoverflow.com/a/68228987/7939633 leaflet solution}
 * @see {@link https://github.com/PaulLeCam/react-leaflet/issues/808#issuecomment-977109769 solution in vercel}
 */
// @ts-expect-error
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl: markerIcon.src,
  iconRetinaUrl: markerIcon2x.src,
  shadowUrl: markerShadow.src,
});

const LeafIcon = L.Icon.extend({
  options: {},
});

export const greenIcon = new LeafIcon({
  iconUrl:
    'https://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|2ecc71&chf=a,s,ee00FFFF',
});
