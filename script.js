document.addEventListener('DOMContentLoaded', () => {
    const pages = document.querySelectorAll('.page');
    const commonNavIcons = document.getElementById('commonNavIcons');
    let currentPageId = 'startPage'; // Initial page

    // Get all buttons and elements
    const startButton = document.getElementById('startButton');
    const petunjukBtn = document.getElementById('petunjukBtn');
    const cpTpBtn = document.getElementById('cpTpBtn');
    const materiBtn = document.getElementById('materiBtn');
    const latihanBtn = document.getElementById('latihanBtn');
    const profilBtn = document.getElementById('profilBtn');

    const pembelajaranBtn = document.getElementById('pembelajaranBtn');
    const contohBtn = document.getElementById('contohBtn');

    const asalUsulSemarangBtn = document.getElementById('asalUsulSemarangBtn');
    const candiPrambananBtn = document.getElementById('candiPrambananBtn');
    const rawaPeningBtn = document.getElementById('rawaPeningBtn');

    const latihan1Btn = document.getElementById('latihan1Btn');
    const latihan2Btn = document.getElementById('latihan2Btn');
    const latihan3Btn = document.getElementById('latihan3Btn');
    const latihan4Btn = document.getElementById('latihan4Btn');

    const nextBtn = document.getElementById('nextBtn');
    const backBtn = document.getElementById('backBtn');
    const soundBtn = document.getElementById('soundBtn');
    const homeBtn = document.getElementById('homeBtn');
    const exitBtn = document.getElementById('exitBtn');

    const backgroundMusic = document.getElementById('backgroundMusic');
    let isMusicPlaying = false; // To track music state

    // Mapping for navigation
    const navMap = {
        'startPage': 'menuPage',
        'menuPage': {
            'petunjukBtn': 'petunjukPage',
            'cpTpBtn': 'cpTpPage',
            'materiBtn': 'materiPage',
            'latihanBtn': 'latihanMainPage',
            'profilBtn': 'profilPage'
        },
        'petunjukPage': 'menuPage',
        'cpTpPage': 'menuPage',
        'materiPage': {
            'pembelajaranBtn': 'pembelajaranIntrinsikPage',
            'contohBtn': 'contohStoriesPage'
        },
        'pembelajaranIntrinsikPage': 'pembelajaranEkstrinsikPage', // Next from intrinsik goes to ekstrinsik
        'pembelajaranEkstrinsikPage': 'materiPage', // Next from ekstrinsik goes back to materi selection
        'contohStoriesPage': {
            'asalUsulSemarangBtn': 'asalUsulSemarangPage',
            'candiPrambananBtn': 'candiPrambananPage',
            'rawaPeningBtn': 'rawaPeningPage'
        },
        'asalUsulSemarangPage': 'contohStoriesPage', // Next/Back logic for stories will be handled with specific buttons or just back to selection
        'candiPrambananPage': 'contohStoriesPage',
        'rawaPeningPage': 'contohStoriesPage',
        'latihanMainPage': {
            'latihan1Btn': 'latihan1Page',
            'latihan2Btn': 'latihan2Page',
            'latihan3Btn': 'latihan3Page',
            'latihan4Btn': 'latihan4Page'
        },
        'latihan1Page': 'latihan2Page', // For next button
        'latihan2Page': 'latihan3Page',
        'latihan3Page': 'latihan4Page',
        'latihan4Page': 'latihanMainPage', // Loop back to latihan main page
        'profilPage': 'menuPage'
    };

    const previousPages = []; // Stack to keep track of navigation history

    // Function to show a page and hide others
    function showPage(id) {
        pages.forEach(page => {
            if (page.id === id) {
                page.classList.remove('hidden');
                page.style.opacity = '1';
            } else {
                page.classList.add('hidden');
                page.style.opacity = '0';
            }
        });

        // Manage common navigation icons visibility
        if (id === 'startPage') {
            commonNavIcons.classList.add('hidden');
        } else {
            commonNavIcons.classList.remove('hidden');
        }

        // Specific handling for back/next buttons on story/quiz pages
        if (id.includes('StoryPage') || id.includes('latihan') || id === 'pembelajaranIntrinsikPage' || id === 'pembelajaranEkstrinsikPage') {
     nextBtn.style.display = 'block';
     backBtn.style.display = 'block';
} else {
    nextBtn.style.display = 'none';
    backBtn.style.display = 'none';
}
        currentPageId = id;
    }

    // Function to navigate back
    function goBack() {
        if (previousPages.length > 0) {
            const prevPageId = previousPages.pop();
            showPage(prevPageId);
        } else {
            // If no history, go to menu from current non-start page
            if (currentPageId !== 'startPage') {
                showPage('menuPage');
            }
        }
    }

    // Event Listeners for main navigation
    startButton.addEventListener('click', () => {
        previousPages.push(currentPageId);
        showPage('menuPage');
    });

    petunjukBtn.addEventListener('click', () => {
        previousPages.push(currentPageId);
        showPage('petunjukPage');
    });

    cpTpBtn.addEventListener('click', () => {
        previousPages.push(currentPageId);
        showPage('cpTpPage');
    });

    materiBtn.addEventListener('click', () => {
        previousPages.push(currentPageId);
        showPage('materiPage');
    });

    latihanBtn.addEventListener('click', () => {
        previousPages.push(currentPageId);
        showPage('latihanMainPage');
    });

    profilBtn.addEventListener('click', () => {
        previousPages.push(currentPageId);
        showPage('profilPage');
    });

    // Materi Sub-navigation
    pembelajaranBtn.addEventListener('click', () => {
        previousPages.push(currentPageId);
        showPage('pembelajaranIntrinsikPage');
    });

    contohBtn.addEventListener('click', () => {
        previousPages.push(currentPageId);
        showPage('contohStoriesPage');
    });

    // Contoh Stories Sub-navigation
    asalUsulSemarangBtn.addEventListener('click', () => {
        previousPages.push(currentPageId);
        showPage('asalUsulSemarangPage');
    });
    candiPrambananBtn.addEventListener('click', () => {
        previousPages.push(currentPageId);
        showPage('candiPrambananPage');
    });
    rawaPeningBtn.addEventListener('click', () => {
        previousPages.push(currentPageId);
        showPage('rawaPeningPage');
    });


    // Latihan Sub-navigation
    latihan1Btn.addEventListener('click', () => {
        previousPages.push(currentPageId);
        showPage('latihan1Page');
    });
    latihan2Btn.addEventListener('click', () => {
        previousPages.push(currentPageId);
        showPage('latihan2Page');
    });
    latihan3Btn.addEventListener('click', () => {
        previousPages.push(currentPageId);
        showPage('latihan3Page');
    });
    latihan4Btn.addEventListener('click', () => {
        previousPages.push(currentPageId);
        showPage('latihan4Page');
    });


    // Common Navigation Icon Listeners
    homeBtn.addEventListener('click', () => {
        previousPages.length = 0; // Clear history
        showPage('menuPage');
    });

    backBtn.addEventListener('click', goBack);

    nextBtn.addEventListener('click', () => {
        const nextPageId = navMap[currentPageId];
        if (typeof nextPageId === 'string') {
            previousPages.push(currentPageId);
            showPage(nextPageId);
        } else if (typeof nextPageId === 'object' && nextPageId !== null) {
            // Handle cases where 'next' might not be a single page,
            // for now, it's hidden on these pages
            console.warn("Next button not explicitly defined for this page type.");
        }
    });

    exitBtn.addEventListener('click', () => {
        if (confirm("Are you sure you want to exit?")) {
            window.close(); // This might not work in all browsers due to security restrictions
        }
    });

    // Sound toggle
    soundBtn.addEventListener('click', () => {
        if (isMusicPlaying) {
            backgroundMusic.pause();
            isMusicPlaying = false;
            // Optionally change icon to mute
        } else {
            backgroundMusic.play().catch(e => console.error("Error playing audio:", e));
            isMusicPlaying = true;
            // Optionally change icon to unmute
        }
    });

    // Initial page display
    showPage('startPage');

    // Quiz logic (simplified for demonstration, as the questions are already answered)
    document.querySelectorAll('.quiz-page').forEach(quizPage => {
        const optionButtons = quizPage.querySelectorAll('.option-btn');
        optionButtons.forEach(button => {
            button.addEventListener('click', () => {
                // In a real quiz, you'd check if the selected answer is correct.
                // For this example, we just reveal the correct answer shown in the document.
                const parentQuestion = button.closest('.question-container');
                parentQuestion.querySelector('.correct-answer').style.display = 'block'; // Show the answer
                // Optionally disable other buttons in the same question
                parentQuestion.querySelectorAll('.option-btn').forEach(btn => btn.disabled = true);
            });
        });
    });

    // Auto-play background music on user interaction for the first time
    document.body.addEventListener('click', () => {
        if (!isMusicPlaying && currentPageId !== 'startPage') {
            backgroundMusic.play().catch(e => console.error("Audio play prevented:", e));
            isMusicPlaying = true;
        }
    }, { once: true });
});