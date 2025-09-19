import RaceTrack from "@/components/RaceCircuitMap/Canvas";
import Banner from "@/components/Banner/Banner";
import Modal from "@/components/Modal/Modal";
import { HomeProvider } from "./context/HomeContext";

export default function Homepage() {
    return (
        <HomeProvider>
            <div className="flex h-screen w-screen">
                <Banner 
                    message={"Still in development! Apologies for any device responsive issues!"} 
                    url="https://github.com/lamnguynn/personal-site/issues" 
                    urlText={<>Roadmap <span className="underline underline-offset-4 decoration-blue-600 decoration-2">here!</span></>}/>
                <Modal/>
                <RaceTrack/>
            </div>
        </HomeProvider>
    )
}