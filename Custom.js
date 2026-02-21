// common js
function getId(elementId) {
    return document.getElementById(elementId)
}


// count of total job 
const card__container = getId('card__container').children.length;
const stattotal = getId('stat-total');
const stat_interview = getId('stat-interview');
const stat_rejected = getId('stat-rejected');
const job_count = getId('job-count');
job_count.innerText = card__container
stattotal.innerText = card__container


// toggle filter buttons
const allBtn = getId('all')
const interviewBtn = getId('interview')
const regBtn = getId('reg')

function togole(btnId) {
    // remove active from all 3 buttons
    allBtn.classList.remove('bg-blue-400', 'text-white')
    interviewBtn.classList.remove('bg-blue-400', 'text-white')
    regBtn.classList.remove('bg-blue-400', 'text-white')

    // add active to the clicked button
    getId(btnId).classList.add('bg-blue-400', 'text-white')  
}


// deleting the whole card
const deleteBtns = document.querySelectorAll('.delete__card');
for (const btn of deleteBtns) {
    btn.addEventListener('click', function () {
        const card = btn.closest('.card');
        card.remove();
    });
}


// interview list
const intviewlist = [];
const rejectedlist = [];
const mainContainer = getId('card__container');

mainContainer.addEventListener('click', function (event) {
    if (event.target.classList.contains('interview')) {
        const prnode = event.target.parentNode.parentNode.parentNode;
        const ctitel = prnode.querySelector('.card__titel').innerText;
        const jtitel = prnode.querySelector('.job__titel').innerText;
        const sellery = prnode.querySelector('.sellery').innerText;
        const information = prnode.querySelector('.information').innerText;

        const card__info = {
            ctitel,
            jtitel,
            sellery,
            information
        }

        const job__exjist = intviewlist.find(
            item => item.ctitel === card__info.ctitel
        );

        if (!job__exjist) {
            intviewlist.push(card__info);
        }

        filter()
    }
});

const filtered__section = getId('filtered__section')  

function filter() {
    filtered__section.innerHTML = ''
    for (let list of intviewlist) {
        console.log(list);
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
            <div class="neew__button"></div>
            <div class="card-actions justify-start">
                <button class="btn text-green-400 border-green-400 interview">interview</button>
                <button class="btn text-[#EF4444] border-[#EF4444] Rejected">Rejected</button>
            </div>
        </div>
        `
        filtered__section.appendChild(div)
    }
}