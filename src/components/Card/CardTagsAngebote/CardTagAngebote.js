/** @jsx jsx */
import { jsx } from 'theme-ui';

export default p => {
  return (
    <div
      {...p}
      sx={{
        fontSize: [1],
        color: ['white'],
        lineHeight: ['heading'],
        fontFamily: 'body',
        py: 1,
        px: 2,
        height: 'fit-content',
        background: 'darkorange',
        marginRight: 1,
        lineHeight: 'body',
        marginBottom: 1,
        width: 'fit-content',
        borderRadius: '4px',
      }}
    ></div> 
  )
}