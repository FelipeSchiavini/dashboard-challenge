import * as React from 'react';

interface SeparatorProps {
  borderBottom?: boolean;
}
export const Separator: React.FC<SeparatorProps> = ({borderBottom}) => {
  return <div className={`pt-4 ${borderBottom ? 'border-b-2 mb-4 border-gray-500': ''}`} />
}

export const LargeSeparator: React.FC<SeparatorProps> = ({borderBottom}) => {
  return <div className={`pt-8 ${borderBottom ? 'border-b-2 mb-4 border-gray-500': ''}`} />
}