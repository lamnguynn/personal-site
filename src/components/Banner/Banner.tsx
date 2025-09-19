import type { ReactNode } from 'react';

interface Props {
  message: string;
  url?: string;
  urlText?: ReactNode;
}

export default function Banner({ message, url, urlText }: Props) {
  return (
    <div className="w-full h-fit p-2 bg-red-400 absolute flex justify-center items-center z-[10000000]">
      <p className="text-white">
        {message}{' '}
        <a href={url} target="_blank" rel="noreferrer">
          {urlText}
        </a>
      </p>
    </div>
  );
}
