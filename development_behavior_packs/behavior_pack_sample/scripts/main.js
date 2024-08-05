import { world, system } from "@minecraft/server";

let secondsPassed = 0;

function mainTick() {
    if (system.currentTick % 20 === 0) {
        secondsPassed += 1;
        world.sendMessage("Seconds Passed: " + secondsPassed);
    }
    system.run(mainTick);
}

system.run(mainTick);
