import React, { useState } from 'react';
import { Box } from '@mui/material';
import { FlexList } from '@/components/List/FlexList';
import { MobileToolbar } from '@/app/Navigation/mobile/MobileToolbar';
import { Links } from '@/app/Navigation/Links';

export const MobileNav = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleShow = () => (isOpen ? setIsOpen(false) : setIsOpen(true));

  return (
    <Box>
      <MobileToolbar handleShow={handleShow} isOpen={isOpen} />
      {isOpen ? (
        <FlexList justifyContent={'center'} width={'100%'}>
          <Links type={'text'} handleShow={handleShow} />
        </FlexList>
      ) : null}
    </Box>
  );
};
