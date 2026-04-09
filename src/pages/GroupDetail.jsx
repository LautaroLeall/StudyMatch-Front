import React from 'react';
import { useParams } from 'react-router-dom';

export default function GroupDetail() {
  const { id } = useParams();
  return <div className="p-6">GroupDetail Page para {id} (En construcción)</div>;
}
