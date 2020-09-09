/** @jsx jsx */
import { jsx } from 'theme-ui';

import CardLabel from '../CardLabel';
import CardTagTypen from './CardTagTypen';

export default p => {
  const { tags, label } = p;
  return (
    <div
        {...p}
        sx={{
          fontSize: [1,2],
          color: ['black'],
          lineHeight: ['heading'],
          fontFamily: 'body',
          paddingBottom: [3,4]
        }}
    >
      <CardLabel>{label}</CardLabel>
      <div
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          flexDirection: 'row',
        }}
      >
        {tags.map(t => (
          <CardTagTypen>{t}</CardTagTypen>
        ))}
      </div>
    </div>
  )
}