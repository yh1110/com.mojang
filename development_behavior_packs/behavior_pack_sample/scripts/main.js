import { world, system } from "@minecraft/server";

let secondsPassed = 0;

function getPlayer() {
    const allPlayers = world.getAllPlayers();
    if (allPlayers.length === 0) {
        return undefined;
    }

    return allPlayers[0];
}

function getPlayerDimension() {
    const player = getPlayer();
    if (player === undefined) {
        return undefined;
    }
    return player.dimension;
}

function getPlayerLocation() {
    const player = getPlayer();
    if (player === undefined) {
        return undefined;
    }
    return player.location;
}

function mainTick() {
    if (system.currentTick % 20 === 0) {
        secondsPassed += 1;
        world.sendMessage("Seconds Passed: " + secondsPassed);

        const playerDimension = getPlayerDimension();
        const playerLocation = getPlayerLocation();

        //ディメンションごとに特定のエンティティをリスポーン
        if (playerDimension.id === "minecraft:overworld") {
            playerDimension.spawnEntity("minecraft:fox", playerLocation);
        } else if (playerDimension.id === "minecraft:nether") {
            playerDimension.spawnEntity("minecraft:hoglin", playerLocation);
        } else {
            playerDimension.spawnEntity("minecraft:wolf", playerLocation);
        }
    }
    system.run(mainTick);
}

system.run(mainTick);
