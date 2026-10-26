

// GAME SCORE & PLAYER TRACKER


let players = [
    { id: 1, name: "Deepak", game: "Free Fire", score: 850, joinDate: new Date("2026-10-01") },
    { id: 2, name: "Dharshini", game: "Minecraft", score: 650, joinDate: new Date("2026-10-05") },
    { id: 3, name: "Kira", game: "Free Fire", score: 920, joinDate: new Date("2026-10-10") },
    { id: 4, name: "Eren", game: "BGMI", score: 450, joinDate: new Date("2026-10-15") },
    { id: 5, name: "Mikasa", game: "Minecraft", score: 750, joinDate: new Date("2026-10-20") }
];

console.log("Original Player Details:");
console.log(players);



// 1. DATE - GET METHODS


let today = new Date();

console.log("\n--- CURRENT DATE ---");
console.log("Date:", today.getDate());          // Current date
console.log("Day:", today.getDay());            // 0 = Sunday, 6 = Saturday
console.log("Month:", today.getMonth() + 1);    // Current month (1-12)
console.log("Year:", today.getFullYear());      // Current year
console.log("Hours:", today.getHours());        // Current hour
console.log("Minutes:", today.getMinutes());    // Current minute



// 2. DATE - SET METHODS


let tournamentDate = new Date();

tournamentDate.setDate(15);                     // Sets date to 15
tournamentDate.setMonth(11);                    // Sets month to December
tournamentDate.setFullYear(2030);               // Sets year to 2030
tournamentDate.setHours(10);                    // Sets hour to 10
tournamentDate.setMinutes(30);                  // Sets minutes to 30

console.log("\n--- TOURNAMENT DATE ---");
console.log(tournamentDate);                    // Tournament date in December 2030
console.log("Timestamp:", tournamentDate.getTime()); // Milliseconds since Jan 1, 1970



// 3. STRING METHODS


let playerName = "  deepak gamer  ";

console.log("\n--- STRING METHODS ---");
console.log("Original Name:", playerName);       // Name with spaces
console.log("Trim:", playerName.trim());         // Removes spaces at both ends
console.log("Uppercase:", playerName.toUpperCase()); // Converts to uppercase
console.log("Lowercase:", playerName.toLowerCase()); // Converts to lowercase
console.log("Length:", playerName.trim().length); // Number of characters
console.log("Includes:", playerName.includes("gamer")); // true
console.log("Replace:", playerName.replace("gamer", "pro")); // "  deepak pro  "
console.log("Slice:", playerName.trim().slice(0, 6)); // "deepak"



// 4. ARRAY - forEach()


console.log("\n--- ALL PLAYERS ---");

players.forEach(function(player) {
    console.log(player.name + " - " + player.game);
});
// Deepak - Free Fire
// Dharshini - Minecraft
// Kira - Free Fire
// Eren - BGMI
// Mikasa - Minecraft



// 5. ARRAY - map()


let playerNames = players.map(function(player) {
    return player.name.toUpperCase();
});

console.log("\n--- PLAYER NAMES ---");
console.log(playerNames);
// ["DEEPAK", "DHARSHINI", "KIRA", "EREN", "MIKASA"]



// 6. ARRAY - filter()


let winners = players.filter(function(player) {
    return player.score >= 700;
});

console.log("\n--- WINNING PLAYERS ---");
console.log(winners);
// Deepak, Kira and Mikasa



// 7. ARRAY - find()


let selectedPlayer = players.find(function(player) {
    return player.name === "Dharshini";
});

console.log("\n--- SEARCH PLAYER ---");
console.log(selectedPlayer);
// Dharshini's player details



// 8. ARRAY - reduce()


let totalScore = players.reduce(function(total, player) {
    return total + player.score;
}, 0);

console.log("\n--- TOTAL SCORE ---");
console.log(totalScore);                         // 3620



// 9. ARRAY - SORT()


let leaderboard = [...players].sort(function(a, b) {
    return b.score - a.score;
});

console.log("\n--- LEADERBOARD ---");
console.log(leaderboard);
// Players sorted from highest score to lowest



// 10. ARRAY - some() AND every()


let hasWinner = players.some(function(player) {
    return player.score >= 900;
});

let allAbove300 = players.every(function(player) {
    return player.score > 300;
});

console.log("\n--- PLAYER CHECK ---");
console.log("Has a 900+ scorer:", hasWinner);     // true
console.log("All scored above 300:", allAbove300); // true



// 11. ARRAY - includes() AND indexOf()


let games = players.map(function(player) {
    return player.game;
});

console.log("\n--- GAME SEARCH ---");
console.log("Has Free Fire:", games.includes("Free Fire")); // true
console.log("Minecraft index:", games.indexOf("Minecraft")); // 1



// 12. DATE - PLAYER JOIN DATES


console.log("\n--- PLAYER JOIN DATES ---");

players.forEach(function(player) {
    console.log(
        player.name + " joined on " +
        player.joinDate.getDate() + "/" +
        (player.joinDate.getMonth() + 1) + "/" +
        player.joinDate.getFullYear()
    );
});
// Displays each player's joining date



// 13. ARRAY - push() AND pop()


let newPlayers = [...players];

newPlayers.push({
    id: 6,
    name: "Vijay",
    game: "BGMI",
    score: 600,
    joinDate: new Date()
});

console.log("\nAfter push():");
console.log(newPlayers.length);                 // 6 players

newPlayers.pop();

console.log("After pop():");
console.log(newPlayers.length);                 // 5 players



// 14. FINAL GAME SUMMARY


let highestScore = Math.max(...players.map(function(player) {
    return player.score;
}));

let lowestScore = Math.min(...players.map(function(player) {
    return player.score;
}));

console.log("\n--- FINAL GAME SUMMARY ---");
console.log("Total Players:", players.length);   // 5
console.log("Total Score:", totalScore);         // 3620
console.log("Highest Score:", highestScore);     // 920
console.log("Lowest Score:", lowestScore);       // 450
console.log("Winner:", leaderboard[0].name);    // Kira