const events = [
    {
        description: "Presidential Election 2024: Heads - Kamala Harris wins / Tails - Donald Trump wins",
        heads: "In a historic landslide, Kamala Harris shatters the ultimate glass ceiling, becoming the first woman and person of color to claim the Oval Office. Her victory speech, delivered amid a sea of jubilant supporters, heralds a new era of progressive policies and global cooperation. Markets surge, and world leaders rush to congratulate her, signaling a dramatic shift in America's global standing.",
        tails: "Against all odds and polls, Donald Trump storms back into the White House in a political earthquake that rocks the nation to its core. His fiery victory speech promises to 'make America even greater' as supporters cheer and opponents reel in disbelief. Global markets plummet amid fears of trade wars and isolationist policies, while world leaders scramble to adjust to this shocking new reality."
    },
    {
        description: "Stock Market: Heads - Unprecedented Bull Run / Tails - Catastrophic Bear Market",
        heads: "The stock market explodes into the stratosphere, shattering all previous records. A perfect storm of technological breakthroughs, global peace initiatives, and economic policies fuels an unstoppable bull run. The Dow soars past 50,000, minting millionaires overnight and reshaping the global economic landscape. Analysts call it the dawn of a new economic age.",
        tails: "The market collapses in a financial apocalypse that makes the 2008 crisis look like a minor hiccup. A cascade of bank failures, cyber attacks, and geopolitical shocks sends the Dow plummeting below 10,000. Fortunes evaporate, retirement dreams turn to dust, and governments worldwide struggle to prevent a new Great Depression. Economic experts warn of a 'lost decade' ahead."
    },
    {
        description: "Beetlejuice 2: Heads - Blockbuster Hit / Tails - Catastrophic Flop",
        heads: "Beetlejuice 2 explodes onto screens, becoming an instant cultural phenomenon. This gothic masterpiece not only surpasses its predecessor but redefines the comedy-horror genre. Critics hail it as 'a visual feast of mad genius,' while audiences flock to theaters in record-breaking numbers. It sweeps award season, cementing its place in cinematic history and spawning a new golden age of imaginative filmmaking.",
        tails: "Beetlejuice 2 crashes and burns in spectacular fashion, becoming the biggest box office disaster of the decade. Critics savage it as 'a soulless cash grab that desecrates the original's legacy.' Audiences flee theaters in droves, many demanding refunds. The film's failure sends shockwaves through Hollywood, derailing several planned reboots and sequels, and forcing major studios to rethink their entire strategy."
    },
    {
        description: "Medical Discovery: Heads - Miracle Cure Found / Tails - Devastating New Virus Emerges",
        heads: "Scientists unveil a revolutionary 'universal cure' that can reprogram the human immune system to fight off all known diseases. This miracle of modern medicine promises to eradicate cancer, heart disease, and even aging itself. The stock prices of pharmaceutical companies soar as the world celebrates the dawn of a new age of human health and longevity.",
        tails: "A terrifying new supervirus emerges, combining the worst aspects of every pandemic in history. Its rapid spread and devastating effects bring the world to its knees. Cities become ghost towns, economies crumble, and healthcare systems collapse under the strain. As governments struggle to contain the outbreak, conspiracy theories and civil unrest threaten to tear society apart."
    },
    {
        description: "Climate Change: Heads - Miraculous Recovery / Tails - Catastrophic Acceleration",
        heads: "In an unprecedented turnaround, the Earth's climate begins to stabilize and recover at an astonishing rate. Polar ice reforms, endangered species flourish, and extreme weather events become rare. Scientists attribute this 'climate miracle' to a combination of radical environmental policies and unforeseen natural feedback loops. The world unites in a new era of environmental harmony and sustainable prosperity.",
        tails: "Global warming accelerates beyond scientists' worst nightmares, unleashing climate chaos. Mega-hurricanes ravage coastlines, while inland areas suffer devastating droughts and wildfires. Rising seas swallow entire island nations and coastal cities, creating millions of climate refugees. As food and water shortages spark global conflicts, some experts warn that human civilization itself hangs in the balance."
    },
    {
        description: "Fashion Trend: Heads - Radical Retro Revival / Tails - Futuristic Revolution",
        heads: "The fashion world is rocked by an explosive retro revival that makes the past the new future. Victorian bustles clash with 70s disco glamour, while 50s rockabilly mingles with 90s grunge. This time-bending trend sweeps the globe, transforming streets into living museums of fashion history. Vintage stores become the new luxury boutiques, and the ability to mix eras becomes the ultimate style statement.",
        tails: "A futuristic fashion revolution erupts, rendering traditional clothing obsolete overnight. Self-adapting smart fabrics, holographic overlays, and bio-luminescent accessories become the new norm. Bodies become canvases for projected designs that change with a thought. This radical shift sends shockwaves through the fashion industry, bankrupting traditional designers and ushering in a new era where technology and style are inseparable."
    },
    {
        description: "Education: Heads - Homework Abolished / Tails - Return to Ultra-Traditional Methods",
        heads: "In a seismic shift, homework is universally abolished, replaced by an AI-driven personalized learning system that adapts to each student's needs and interests. Schools transform into hubs of creativity and hands-on learning, with test scores and student satisfaction skyrocketing. This revolutionary approach spreads globally, promising to create a generation of passionate, self-directed learners.",
        tails: "A dramatic swing to ultra-traditional education methods sweeps the world. Rote memorization, strict discipline, and grueling homework regimens become the norm. Schools resemble Victorian-era institutions, complete with uniforms and corporal punishment. Supporters claim this return to 'educational basics' will create a generation of hyper-competitive, highly knowledgeable individuals, while critics warn of crushing student creativity and passion for learning."
    }
];

let currentEvent = 0;

function flipCoin() {
    const coin = document.getElementById('coin');
    const nextButton = document.getElementById('next-button');
    coin.style.transform = 'rotateY(720deg)';
    coin.style.pointerEvents = 'none'; // Disable coin clicks during animation
    
    setTimeout(() => {
        const outcome = Math.random() < 0.5 ? 'heads' : 'tails';
        document.getElementById('outcome').innerText = events[currentEvent][outcome];
        nextButton.style.display = 'inline-block';
        currentEvent++;
        if (currentEvent >= events.length) {
            nextButton.innerText = 'FINISH';
        }
    }, 500);
}

function setupNextEvent() {
    const coin = document.getElementById('coin');
    const nextButton = document.getElementById('next-button');
    
    if (currentEvent < events.length) {
        document.getElementById('event-description').innerText = events[currentEvent].description;
        document.getElementById('outcome').innerText = '';
        coin.style.transform = 'rotateY(0deg)';
        coin.style.pointerEvents = 'auto'; // Re-enable coin clicks
        nextButton.style.display = 'none';
    } else {
        document.getElementById('event-description').innerText = "Game Over!";
        coin.style.display = 'none';
        nextButton.style.display = 'none';
    }
}

function nextEvent() {
    if (currentEvent < events.length) {
        setupNextEvent();
    }
}

document.getElementById('coin').addEventListener('click', flipCoin);
document.getElementById('next-button').addEventListener('click', nextEvent);

setupNextEvent(); // Initialize the first event