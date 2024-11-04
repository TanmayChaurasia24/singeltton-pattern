import { startLogger } from "./logger";
import { games } from "./store";

startLogger();

setInterval(() => {
    games.push({
        id: Math.random().toString(),
        whitePlayerName: "tk",
        blackPlayerName: "mm",
        moves: []
    })
}, 5000);
