function getId(elementId) {
    return document.getElementById(elementId)
}

const card__container = getId('card__container').children.length;
const stattotal = getId('stat-total');
const stat_interview = getId('stat-interview');
const stat_rejected = getId('stat-rejected');
const job_count = getId('job-count');
const all__section = getId('all__section')
// job_count.innerText = card__container
// stattotal.innerText = card__container
function updatecount(){
    stattotal.innerHTML=all__section.children.length
}


const allBtn = getId('all')
const interviewBtn = getId('interview')
const regBtn = getId('reg')

const interview__section = getId('interview__section')
const rejected__section = getId('rejected__section')
const interview__filtered = getId('interview__filtered')
const rejected__filtered = getId('rejected__filtered')

function togole(btnId) {
    allBtn.classList.remove('bg-blue-400', 'text-white')
    interviewBtn.classList.remove('bg-blue-400', 'text-white')
    regBtn.classList.remove('bg-blue-400', 'text-white')
    getId(btnId).classList.add('bg-blue-400', 'text-white')

    if (btnId == 'all') {
        all__section.classList.remove('hidden')
        interview__section.classList.add('hidden')
        rejected__section.classList.add('hidden')
    }
    if (btnId == 'interview') {
        all__section.classList.add('hidden')
        interview__section.classList.remove('hidden')
        rejected__section.classList.add('hidden')
        filter('interview')
    }
    if (btnId == 'reg') {
        all__section.classList.add('hidden')
        interview__section.classList.add('hidden')
        rejected__section.classList.remove('hidden')
        filter('rejected')
    }
}

const deleteBtns = document.querySelectorAll('.delete__card');
for (const btn of deleteBtns) {
    btn.addEventListener('click', function () {
        const card = btn.closest('.card');
        card.remove();
        updatecount()
    });

}

const intviewlist = [];
const rejectedlist = [];
const mainContainer = getId('card__container');

mainContainer.addEventListener('click', function (event) {
    if (event.target.classList.contains('interview')) {
        const prnode = event.target.parentNode.parentNode.parentNode;
        const card__info = {
            ctitel: prnode.querySelector('.card__titel').innerText,
            jtitel: prnode.querySelector('.job__titel').innerText,
            sellery: prnode.querySelector('.sellery').innerText,
            information: prnode.querySelector('.information').innerText,
            delete: prnode.querySelector('.delete__card').innerText
        }
        const job__exjist = intviewlist.find(item => item.ctitel === card__info.ctitel)
        if (!job__exjist) {
            intviewlist.push(card__info)
            stat_interview.innerText = intviewlist.length
        }
    }
    else if (event.target.classList.contains('Rejected')) {
        const prnode = event.target.parentNode.parentNode.parentNode;
        const card__info = {
            ctitel: prnode.querySelector('.card__titel').innerText,
            jtitel: prnode.querySelector('.job__titel').innerText,
            sellery: prnode.querySelector('.sellery').innerText,
            information: prnode.querySelector('.information').innerText
        }
        const job__exjist = rejectedlist.find(item => item.ctitel === card__info.ctitel)
        if (!job__exjist) {
            rejectedlist.push(card__info)
            stat_rejected.innerText = rejectedlist.length
        }
    }
});

function filter(type) {
    if (type === 'interview') {
        interview__filtered.innerHTML = ''
        for (let list of intviewlist) {
            let div = document.createElement('div')
            div.classList = 'card bg-base-100 w-full shadow-sm'
            div.innerHTML = `
            <div class="card-body">
                <div class="flex justify-between items-start">
                    <h2 class="card-title card__titel">${list.ctitel}</h2>
                   <img class="h-fit w-[13px] cursor-pointer delete__card" src="Trash.png" alt="">
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
            div.classList = 'card bg-base-100 w-full shadow-sm'
            div.innerHTML = `
            <div class="card-body">
                <div class="flex justify-between items-start">
                    <h2 class="card-title card__titel">${list.ctitel}</h2>
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