import FlipCard from "./FlipCard";

import "bootstrap/dist/css/bootstrap.min.css";
import "C:/Codecool/repository/ADVANCED/weekpair2/el-proyecte-grande-sprint-2-java-LucaDeCicco/my-app/src/test/flipCardStyle.scss";

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
];

export default function AppFlipCard() {
    return (
        <div className="containerFlipCard">
            <div className="row h-50">
                <div className="col d-flex" style={{marginLeft:"25%"}}>
                    {cards.map((card) => (
                        <FlipCard key={card.id} card={card} />
                    ))}
                </div>
            </div>
        </div>
    );
}