/** @jsx jsx */
import { jsx } from 'theme-ui';

export default p => {
  const { type, size } = p;
  const fontColor = type === 'white' ? 'background' : 'text';
  const fontSize = size === 'responsive' ? [2,3,4] : 2;
  const padding = size === 'responsive' ? [3,4,5] : 1;
  const width = size === 'responsive' ? '70%' : '100%';
  return (
    <h3
      {...p}
      sx={{
        fontSize: fontSize,
        fontFamily: ['heading'],
        lineHeight: ['heading'],
        color: [fontColor],
        paddingBottom: padding,
        my: '0',
        width: width,
        transition: theme => theme.transitions[0],
      }}
    ></h3>
  )
}