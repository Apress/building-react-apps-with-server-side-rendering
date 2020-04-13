import {useEffect} from 'react';

export const useChangeAlert = (text) => {
    useEffect(
                () => {
                  alert(text);
                }
             )
  }