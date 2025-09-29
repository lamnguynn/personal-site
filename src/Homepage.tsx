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
            <p className="text-white">
              Still in development! Apologies for any device responsive issues!
              Roadmap{' '}
              <span className="underline decoration-blue-600 decoration-2 underline-offset-4">
                <a
                  href={'https://github.com/users/lamnguynn/projects/2/views/1'}
                  target="_blank"
                  rel="noreferrer"
                >
                  here!
                </a>
              </span>
            </p>
          }
        />
        <Modal />
        <RaceTrack />
      </div>
    </HomeProvider>
  );
}
