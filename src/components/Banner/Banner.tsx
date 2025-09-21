import type { ReactNode } from 'react';

interface Props {
  message: ReactNode;
}

export default function Banner({ message }: Props) {
  return (
    <div className="w-full h-fit p-2 bg-red-400 absolute flex justify-center items-center z-[100000000]">
      {message}
    </div>
  );
}
