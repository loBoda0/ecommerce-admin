"use client";

import { useStoreModal } from '@/hooks/useStoreModal';
import { useEffect } from 'react';


const Home = () => {
  const onOpen = useStoreModal((state) => state.onOpen)
  const isOpen = useStoreModal((state) => state.isOpen)

  useEffect(() => {
    if (!isOpen) {
      onOpen();
    }
  }, [isOpen, onOpen])
  return null
}

export default Home;