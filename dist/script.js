document.getElementById('submitBtn').addEventListener('click', myLineUp);
function myLineUp(event) {
    
    const form = document.getElementById('lineupForm');
    const status = form.querySelector('input[name="status"]:checked').value;
    const gameDate = form.gameDate.value;
    const selectedPlayers = Array.from(form.querySelectorAll('input[name="players"]:checked')).map(cb => cb.value);

    event.preventDefault();

    console.log("Status:", status);
    console.log("Date:", gameDate);
    console.log("Players:", selectedPlayers);
    const summary = `Status: ${status} | Date: ${gameDate} | Players: ${selectedPlayers.join(", ") || "None"}`;
    document.getElementById('output').textContent = summary;
}