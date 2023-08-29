import React, { FC, useCallback, useContext, useState } from 'react'
import { FlexRow } from './Flex';
import { GiCancel } from "react-icons/gi";
import { SearchContext } from '../../contexts/SearchContext';

export type HTMLInputEvent = { target: { value: string, name: string } };

interface PropsInterface {

}

export const Search: FC<PropsInterface> = () => {
  const { value, setValue } = useContext(SearchContext)!;
  

  const onChange = useCallback((event: HTMLInputEvent) => {
    // unstable SynteticEvent<HTMLInputElement>
    // ChangeEventHandler<HTMLInputElement>
    // { target: { value: string } }
    setValue(event.target.value);
  }, [setValue]); 

  const onClear = useCallback(() => {
    setValue("");
  }, [setValue]);


  // написати функцію onClear що очистить стейт value

  return (
   <FlexRow width='100%' justifyContent='center' padding="10px" gap="10px">
        <input value={value} onChange={onChange} placeholder='search' />
        <GiCancel size="20px" onClick={() => onClear()} />
   </FlexRow>
  )
}
