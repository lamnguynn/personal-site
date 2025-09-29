import type { ReactNode } from 'react';

interface Props {
  message: ReactNode;
}

export default function Banner({ message }: Props) {
  return (
    <div className="absolute z-[100000000] flex h-fit w-full items-center justify-center bg-red-400 p-2">
      {message}
    </div>
  );
}
