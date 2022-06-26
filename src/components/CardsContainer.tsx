import { Flex } from '@chakra-ui/react';
import React from 'react';
import GeneralCard from './GeneralCard';
import SpecialCard from './SpecialCard';
import TableCard from './TableCard';

export default function CardsContainer() {
  return (
    <section>
      <Flex>

        <GeneralCard
          header={{
            icon: 'eye', title: 'Confirmed cases', options: ['RJ', 'SP', 'MG'], select: true,
          }}
          link={{ text: 'Learn how to prevent infections ', href: 'https://www.health.harvard.edu/staying-healthy/how-to-prevent-infections' }}
          type="cases"
        />
        <TableCard
          header={{
            icon: 'list', title: 'Top posts', options: ['Wallstreetbets', 'Bovespa'], select: true,
          }}
          link={{ text: 'Do you want more visits? Contact us ', href: 'https://silrs.com.br/' }}
          type="posts"
        />
        <SpecialCard
          link={{ text: 'Do you want more visits? Contact us ', href: 'https://silrs.com.br/' }}
        />
      </Flex>
    </section>
  );
}
