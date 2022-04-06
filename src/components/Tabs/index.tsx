import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

import { FC } from 'react';
import { ITabs } from './Tabs';

const CustomTabs:FC<ITabs> = ({ 
  tabs,
  className,
  onChange, 
  variant,
  scrollButtons,
  textColor,
  indicatorColor
 }) => {
  return(
    <Box className={className}>
      <Tabs
        onChange={onChange}
        variant={variant}
        scrollButtons={scrollButtons}
        textColor={textColor}
        indicatorColor={indicatorColor}
      >
        {tabs && tabs.map(({id, label}) => {
          return <Tab key={id} label={label} />
        })}
      </Tabs>
    </Box>
  )
};

export default CustomTabs;