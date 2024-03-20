// CounterComponent.tsx

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { tambahCounter, kurangCounter, RootState } from '../counter/naikTurunSlice';

const CounterComponent: React.FC = () => {
  const totalCounter = useSelector((state: RootState) => state.totalCounter);
  const dispatch = useDispatch();

  const tambah = () => {
    dispatch(tambahCounter());
  };

  const kurang = () => {
    dispatch(kurangCounter());
  };

  return (
    <div>
      <div>Total: {totalCounter}</div>
      <button onClick={tambah}>Tambah</button>
      <button onClick={kurang}>Kurang</button>
    </div>
  );
};

export default CounterComponent;

