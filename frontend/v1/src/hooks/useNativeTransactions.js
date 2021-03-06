import React, { useEffect, useState } from 'react';
import { useMoralisWeb3Api, useMoralisWeb3ApiCall } from 'react-moralis';
import { useMoralisDapp } from '../providers/MoralisDappProvider/MoralisDappProvider';

const useNativeTransactions = options => {
  const { account } = useMoralisWeb3Api();
  const { chainId } = useMoralisDapp();
  const [nativeTransactions, setNativeTransactions] = useState([]);
  const {
    fetch: getNativeTransations,
    data,
    error,
    isLoading
  } = useMoralisWeb3ApiCall(account.getTransactions, {
    chain: chainId,
    ...options
  });

  useEffect(() => data && setNativeTransactions(data?.result), [data]);

  return {
    getNativeTransations,
    nativeTransactions,
    chainId,
    error,
    isLoading
  };
};

export default useNativeTransactions;
