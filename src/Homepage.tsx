import InteriorColorSelector from "./components/InteriorColorSelector/InteriorColorSelector"
import { InteriorColorProvider } from './context/InteriorColorContext';
import { useInteriorColor } from "./hooks/useInteriorColor";


function Homepage() {
  return (
    <InteriorColorProvider>
        <HomepageContext />
    </InteriorColorProvider>
  )
}

function HomepageContext() {
    const { interiorColor } = useInteriorColor();
    
    return (
        <div className={`bg-interior-${interiorColor.toLowerCase()} h-screen`}>
            <InteriorColorSelector />
        </div>
    )
}

export default Homepage
