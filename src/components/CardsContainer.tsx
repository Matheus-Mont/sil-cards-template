import { Flex } from '@chakra-ui/react';
import React from 'react';
import GeneralCard from './GeneralCard';
import SpecialCard from './SpecialCard';
import TableCard from './TableCard';

export default function CardsContainer() {
  return (
    <Flex
      pos={{
        base: 'absolute', md: 'absolute', lg: 'absolute', xl: 'absolute',
      }}
      top="15vh"
      flexDirection={
        {
          base: 'column', md: 'row', lg: 'row', xl: 'row',
        }
}
      justifyContent={
        {
          lg: 'flex-start', xl: 'flex-start',
        }
}
      alignItems={
        {
          base: 'center', md: 'center', lg: 'flex-start', xl: 'flex-start',
        }
}
      left={
        {
          base: '2vh', md: '9vh', lg: '9vh', xl: '24vh',
        }
}
      right={
        {
          base: '0', md: '9vh', lg: '9vh', xl: '24vh',
        }
}
      flexWrap={
        {
          base: 'wrap', md: 'wrap', lg: 'wrap', xl: 'nowrap',
        }
      }
      mr="0"
      maxWidth="90%"
    >

      <GeneralCard
        header={{
          icon: 'eye', title: 'Confirmed cases', options: ['RJ', 'SP', 'MG'], select: true,
        }}
        link={{
          text: 'Learn how to prevent infections ', href: 'https://www.health.harvard.edu/staying-healthy/how-to-prevent-infections', color: '#90CDF4', arrow: true,
        }}
        type="cases"
      />
      <TableCard
        header={{
          icon: 'list', title: 'Top posts', options: ['Wallstreetbets', 'Bovespa'], select: true,
        }}
        link={{
          text: 'Do you want more visits? Contact us ', href: 'https://silrs.com.br/', color: '#90CDF4', arrow: false,
        }}
        type="posts"
      />
      <SpecialCard
        link={{
          text: 'Write a review on TrustPilot ', href: 'https://silrs.com.br/', color: '#90CDF4', arrow: true,
        }}
      />
    </Flex>
  );
}
