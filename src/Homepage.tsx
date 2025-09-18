import RaceTrack from "@/components/RaceCircuitMap/Canvas";
import Banner from "@/components/Banner/Banner";

export default function Homepage() {

    return (
        <div className="flex h-screen w-screen">
            <Banner content={"Still in development! Apologies for any device responsive issues!"}/>
            <RaceTrack/>
        </div>
    )
}