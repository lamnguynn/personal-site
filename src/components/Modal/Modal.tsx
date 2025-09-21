import { useContext } from 'react';

import Content from '@/components/Content/Content';
import { HomeContext } from '@/context/HomeContext';
import { getContent } from '@/util/util';

export default function Modal({}) {
  const context = useContext(HomeContext);
  const { animateRowIndex, sectionTitle } = context!;

  return (
    <>
      {animateRowIndex !== undefined && (
        <div className="absolute bottom-0 left-[10%] right-[10%] md:left-[20%] md:right-[20%] lg:left-[30%] lg:right-[30%] h-auto bg-amber-200 z-[100000000] p-4 pb-0">
          <div className="relative bg-amber-300 w-full h-full overflow-scroll">
            <Content
              sectionTitle={sectionTitle}
              data={getContent(animateRowIndex).data}
            />
          </div>
        </div>
      )}
    </>
  );
}
