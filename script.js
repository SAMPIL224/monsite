window.onload = function() {
    displayResults();

    const option1Button = document.getElementById('option1');
    const option2Button = document.getElementById('option2');
    const voteMessage = document.getElementById('voteMessage');

    if (localStorage.getItem('hasVoted')) {
        voteMessage.textContent = 'Vous avez déjà voté.';
    }

    option1Button.onclick = function() {
        castVote('option1');
    };

    option2Button.onclick = function() {
        castVote('option2');
    };

    function castVote(option) {
        if (localStorage.getItem('hasVoted')) {
            voteMessage.textContent = 'Vous avez déjà voté.';
            return;
        }

        let voteCount = localStorage.getItem(option) || 0;
        voteCount++;
        localStorage.setItem(option, voteCount);
        localStorage.setItem('hasVoted', true);
        
        voteMessage.textContent = 'Merci d\'avoir voté !';
        displayResults();
    }

    function displayResults() {
        const option1Votes = localStorage.getItem('option1') || 0;
        const option2Votes = localStorage.getItem('option2') || 0;

        document.getElementById('results').textContent = 
            `Option 1: ${option1Votes} votes, Option 2: ${option2Votes} votes`;
    }
};