import React, { useRef, PropsWithChildren, FC } from 'react'

interface Props extends PropsWithChildren {
  
}

export const Settings: FC<Props> = ({ children }) => {
  //REF
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const divRef = useRef<HTMLDivElement | null>(null);

  const data = {data: "Hello"}

  // not proper way (but works)
  const dataRef = useRef<{data: string}>({data: "Hello"});

  console.log(divRef, dataRef.current, "divRef");

  const onClick = () => {
    // default DOM way
    // const audio = document.querySelector<HTMLAudioElement>("#audio");
    // audio.play();

    console.log(audioRef, "REF");
    audioRef.current?.play();
  }

  return (
    <div ref={divRef}>
      <audio ref={audioRef} src="" id="audio"></audio>
      <button onClick={onClick}>Play</button>
    </div>
  )
}
