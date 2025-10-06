import { useContext } from 'react';

import Content from '@/components/Content/';
import { HomeContext } from '@/context/HomeContext';
import { getContent } from '@/util';

export default function Modal({}) {
  const context = useContext(HomeContext);
  const { animateRowIndex, sectionTitle } = context!;

  return (
    <>
      {animateRowIndex !== undefined && (
        <div className="absolute right-[10%] bottom-0 left-[10%] z-[100000000] h-auto min-h-[8rem] bg-amber-200 p-4 md:right-[20%] md:left-[20%] lg:right-[30%] lg:left-[30%]">
          <Content
            sectionTitle={sectionTitle}
            data={getContent(animateRowIndex).data}
          />
        </div>
      )}
    </>
  );
}
