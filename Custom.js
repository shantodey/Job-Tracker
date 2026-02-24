// funcation for calling id
function getId(elementId) {
    return document.getElementById(elementId)
}

const stattotal = getId('stat-total');
const stat_interview = getId('stat-interview');
const stat_rejected = getId('stat-rejected');
const job_count = getId('job-count');
const all__section = getId('all__section');

const allBtn = getId('all')
const interviewBtn = getId('interview')
const regBtn = getId('reg')
const interview__section = getId('interview__section')
const rejected__section = getId('rejected__section')
const interview__filtered = getId('interview__filtered')
const rejected__filtered = getId('rejected__filtered')


// card delete and count update
const card__container = getId('card__container')  
job_count.innerText = card__container.children.length;
stattotal.innerText = card__container.children.length;
let cardIdCounter = 0;
const allCards = card__container.querySelectorAll('.card')
for (let i = 0; i < allCards.length; i++) {
    allCards[i].dataset.cardId = cardIdCounter;
    cardIdCounter++;
}

document.addEventListener('click', function (event) {
    if (event.target.classList.contains('delete__card')) {
        const card = event.target.closest('.card');
        const cardId = card.dataset.cardId;
        intviewlist = intviewlist.filter(function (item) { return item.id != cardId })
        rejectedlist = rejectedlist.filter(function (item) { return item.id != cardId })
        stat_interview.innerText = intviewlist.length;
        stat_rejected.innerText = rejectedlist.length;
        card.remove();
        const liveCount = getId('card__container').children.length;
        job_count.innerText = liveCount;
        stattotal.innerText = liveCount;
        filter('interview');
        filter('rejected');
    }
});


// togole button 
const menuSection = document.querySelector('.menu__section');
const cards = document.querySelector('.cards');
menuSection.addEventListener('click', function (e) {
    const button = e.target.closest('button');
    if (!button) return;
    const targetId = button.dataset.target;
    if (!targetId) return;
    for (const section of cards.children) {
        section.classList.add('hidden');
    }
    for (const btn of menuSection.children) {
        btn.classList.remove('bg-blue-400', 'text-white');
    }
    document.getElementById(targetId).classList.remove('hidden');
    button.classList.add('bg-blue-400', 'text-white');
});

// filterd section 
let intviewlist = [];
let rejectedlist = [];

document.addEventListener('click', function (event) {

    if (event.target.classList.contains('interview')) {
        const prnode = event.target.parentNode.parentNode.parentNode;
        const cardId = prnode.dataset.cardId;
        const statusBtn = prnode.querySelector('.jobStatus');
        const card__info = {
            id: cardId,
            ctitel: prnode.querySelector('.card__titel').innerText,
            jtitel: prnode.querySelector('.job__titel').innerText,
            sellery: prnode.querySelector('.sellery').innerText,
            information: prnode.querySelector('.information').innerText,
        }
        const job__exjist = intviewlist.find(function (item) { return item.id === cardId })
        if (!job__exjist) {
            intviewlist.push(card__info)
        }
        rejectedlist = rejectedlist.filter(function (item) { return item.id != cardId })
        stat_interview.innerText = intviewlist.length
        stat_rejected.innerText = rejectedlist.length
        const mainCard = card__container.querySelector('[data-card-id="' + cardId + '"]')
        if (mainCard) {
            const mainStatus = mainCard.querySelector('.jobStatus')
            mainStatus.innerText = 'Interview';
            mainStatus.style.backgroundColor = '#dcfce7';
            mainStatus.style.color = '#16a34a';
            mainCard.classList.remove('border-l-4', 'border-red-500')
            mainCard.classList.add('border-l-4', 'border-green-400')
        }
        filter('interview');
        filter('rejected');
    }

    else if (event.target.classList.contains('Rejected')) {
        const prnode = event.target.parentNode.parentNode.parentNode;
        const cardId = prnode.dataset.cardId;
        const card__info = {
            id: cardId,
            ctitel: prnode.querySelector('.card__titel').innerText,
            jtitel: prnode.querySelector('.job__titel').innerText,
            sellery: prnode.querySelector('.sellery').innerText,
            information: prnode.querySelector('.information').innerText,
        }
        const job__exjist = rejectedlist.find(function (item) { return item.id === cardId })
        if (!job__exjist) {
            rejectedlist.push(card__info)
        }
        intviewlist = intviewlist.filter(function (item) { return item.id != cardId })
        stat_interview.innerText = intviewlist.length
        stat_rejected.innerText = rejectedlist.length
        const mainCard = card__container.querySelector('[data-card-id="' + cardId + '"]')
        if (mainCard) {
            const mainStatus = mainCard.querySelector('.jobStatus')
            mainStatus.innerText = 'Rejected';
            mainStatus.style.backgroundColor = '#fee2e2';
            mainStatus.style.color = '#ef4444';
            mainCard.classList.remove('border-l-4', 'border-green-400')
            mainCard.classList.add('border-l-4', 'border-red-500')
        }
        filter('interview');
        filter('rejected');
    }

});


// creating card for Interview & Rejected
function filter(type) {
    if (type === 'interview') {
        interview__filtered.innerHTML = ''
        for (let list of intviewlist) {
            let div = document.createElement('div')
            div.classList = 'card bg-base-100 w-full shadow-sm border-l-4 border-green-400'
            div.dataset.cardId = list.id;
            div.innerHTML = `
            <div class="card-body">
                <div class="flex justify-between items-start">
                    <h2 class="card-title card__titel">${list.ctitel}</h2>
                   <button class="btn btn-outline btn-secondary delete__card"> Delete </button>
                </div>
                <p class="job__titel">${list.jtitel}</p>
                <p class="sellery">${list.sellery}</p>
                <p class="information">${list.information}</p>
                <div class="card-actions justify-start">
                    <button class="btn text-green-400 border-green-400 interview">interview</button>
                    <button class="btn text-[#EF4444] border-[#EF4444] Rejected">Rejected</button>
                </div>
            </div>`
            interview__filtered.appendChild(div)
        }
    }
    if (type === 'rejected') {
        rejected__filtered.innerHTML = ''
        for (let list of rejectedlist) {
            let div = document.createElement('div')
            div.classList = 'card bg-base-100 w-full shadow-sm border-l-4 border-red-500'
            div.dataset.cardId = list.id;
            div.innerHTML = `
            <div class="card-body">
                <div class="flex justify-between items-start">
                    <h2 class="card-title card__titel">${list.ctitel}</h2>
                    <button class="btn btn-outline btn-secondary delete__card"> Delete </button>
                </div>
                <p class="job__titel">${list.jtitel}</p>
                <p class="sellery">${list.sellery}</p>
                <p class="information">${list.information}</p>
                <div class="card-actions justify-start">
                    <button class="btn text-green-400 border-green-400 interview">interview</button>
                    <button class="btn text-[#EF4444] border-[#EF4444] Rejected">Rejected</button>
                </div>
            </div>`
            rejected__filtered.appendChild(div)
        }
    }
}