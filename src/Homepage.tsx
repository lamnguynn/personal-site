import Banner from '@/components/Banner/';
import Modal from '@/components/Modal/';
import { RaceTrack } from '@/components/RaceCircuitMap';
import { HomeProvider } from '@/context/HomeContext';

export default function Homepage() {
  return (
    <HomeProvider>
      <div className="flex h-screen w-screen">
        <Banner
          message={
            'Still in development! Apologies for any device responsive issues!'
          }
          url="https://github.com/users/lamnguynn/projects/2/views/1"
          urlText={
            <>
              Roadmap{' '}
              <span className="underline underline-offset-4 decoration-blue-600 decoration-2">
                here!
              </span>
            </>
          }
        />
        <Modal />
        <RaceTrack />
      </div>
    </HomeProvider>
  );
}
