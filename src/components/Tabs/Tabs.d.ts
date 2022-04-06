import { TabsProps } from '@mui/material';

type TabsTypes = {
  id: number;
  label: string;
}

export interface ITabs extends TabsProps {
  tabs: TabsTypes[];
  className: string;
}