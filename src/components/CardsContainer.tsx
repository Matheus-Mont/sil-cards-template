import { Flex } from '@chakra-ui/react';
import React from 'react';
import GeneralCard from './GeneralCard';
import SpecialCard from './SpecialCard';
import TableCard from './TableCard';

export default function CardsContainer() {
  return (
    <section>
      <Flex
        pos="absolute"
        top="15vh"
        left={['3vh', '3vh', '20vh', '24vh']}
        right={['3vh', '3vh', '20vh', '24vh']}
        flexWrap={['wrap', 'wrap', 'wrap', 'nowrap']}
        maxWidth="80%"
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
    </section>
  );
}
