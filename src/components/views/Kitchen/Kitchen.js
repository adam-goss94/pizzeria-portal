import React from 'react';

import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import ProductCard from '../../common/ProductCard/ProductCard';

const demoContent = [
  {id: '1', order: '12346', status: 'prepared', desc: 'Lorem ipsum', amount:'3', table: 2},
  {id: '2', order: '56780', status: 'prepared', desc: 'Lorem ipsum', amount:'2', table: 3},
  {id: '3', order: '87643', status: 'preparing', desc: 'Lorem ipsum', amount:'4', table: 1},
  {id: '4', order: '76532', status: 'ordered', desc: 'Lorem ipsum', amount:'2', table: 3},
  {id: '5', order: '12098', status: 'ordered', desc: 'Lorem ipsum', amount:'3', table: 2},
  {id: '6', order: '13823', status: 'ordered', desc: 'Lorem ipsum', amount:'2', table: 1},
];

const Kitchen = () => (
  <Container maxWidth='lg'>
    <Box display="flex" flexWrap="wrap" p={2}>
      {demoContent.map(products => (
        <ProductCard {...products} key={products.id}/>
      ))}
    </Box>
  </Container>
);

export default Kitchen;
