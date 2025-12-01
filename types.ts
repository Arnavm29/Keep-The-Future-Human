import React from 'react';

export interface SectionProps {
  id?: string;
  className?: string;
}

export enum RiskType {
  CONTROL = 'CONTROL',
  DISRUPTION = 'DISRUPTION',
  INSTABILITY = 'INSTABILITY',
}

export interface RiskCardData {
  id: RiskType;
  title: string;
  description: string;
  icon: React.ReactNode;
}