import FlipCard from "./FlipCard";

import "bootstrap/dist/css/bootstrap.min.css";
// import "./styles.scss";
import "C:/Codecool/repository/ADVANCED/weekpair2/el-proyecte-grande-sprint-2-java-LucaDeCicco/my-app/src/test/flipCardStyle.scss";
import MapFlipCard from "./mapFlipCard";

const cards = [
    {
        id: "1",
        variant: "hover",
        front: "Contact",
        back: "email:\nluca.decicco3500@gmail.com\ntelephone:\n 0725252525"
    },
    {
        id: "2",
        variant: "hover",
        front: "Hover",
        // back: <MapFlipCard />
        back: "Back"
    },
    {
        id: "3",
        variant: "hover",
        front: "Hover",
        back: "Back"
    }
    // {
    //     id: "2",
    //     variant: "click",
    //     front: "Click",
    //     back: "Back"
    // },
    // {
    //     id: "3",
    //     variant: "focus",
    //     front: "Focus",
    //     back: "Back"
    // }
];

export default function AppFlipCard() {
    return (
        <div className="containerFlipCard">
            <div className="row h-100">
                <div className="col d-flex flex-column flex-md-row justify-content-around align-items-center">
                    {cards.map((card) => (
                        <FlipCard key={card.id} card={card} />
                    ))}
                </div>
            </div>
        </div>
    );
}