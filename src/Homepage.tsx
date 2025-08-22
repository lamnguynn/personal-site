import InteriorColorSelector from "./components/InteriorColorSelector/InteriorColorSelector"
import { BACKGROUND_COLOR_CLASSES, DEFAULT_BG_COLOR } from "./constants/InteriorColorConstants";
import { InteriorColorProvider } from './context/InteriorColorContext';
import { useInteriorColor } from "./hooks/useInteriorColor";

function HomepageProviders({ children }: { children: React.ReactNode }) {
    return (
        <InteriorColorProvider>
            { children }
        </InteriorColorProvider>
    )
}

function Homepage() {
  return (
    <HomepageProviders>
      <HomepageContent />
    </HomepageProviders>
  )
}

function HomepageContent() {
    const { interiorColor } = useInteriorColor();
    const backgroundColor = BACKGROUND_COLOR_CLASSES[interiorColor.toLowerCase()] || DEFAULT_BG_COLOR

    return (
        <div className={`${backgroundColor} h-screen`}>
            <InteriorColorSelector />
        </div>
    )
}

export default Homepage
