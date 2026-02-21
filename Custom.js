// count of total job 
const card__container=document.getElementById('card__container').children.length;
const stattotal =document.getElementById('stat-total');
const stat_interview =document.getElementById('stat-interview');
const stat_rejected =document.getElementById('stat-rejected');
stattotal.innerText=card__container




const all=document.getElementById('all')
const interview=document.getElementById('interview')
const reg=document.getElementById('reg')
function togole(id){
    all.classList.remove('bg-blue-400', 'text-white')
    interview.classList.remove('bg-blue-400', 'text-white')
    reg.classList.remove('bg-blue-400', 'text-white')

    const activeid=document.getElementById(id);
    activeid.classList.add('bg-blue-400', 'text-white')
}



// const rejectedBtns = document.querySelectorAll('.Rejected');
// for (const button of rejectedBtns) {
//     button.addEventListener('click', function() {
//         const rejeCted = document.createElement('button');
//         rejeCted.className = 'btn btn-soft btn-secondary border-[#EF4444]';
//         rejeCted.innerHTML = `
//             Rejected
//         `;
//                 const card = button.closest('.card');
//         const targetDiv = card.querySelector('.neew__button');
//         targetDiv.appendChild(rejeCted);
//     });
// }
// const interviewBtns = document.querySelectorAll('.interview');
// for (const button of interviewBtns) {
//     button.addEventListener('click', function() {
//         const interView = document.createElement('button');
//         interView.className = 'btn btn-primary';
//         interView.innerHTML = `
//             Primary
//         `;
//                 const card = button.closest('.card');
//         const targetDiv = card.querySelector('.neew__button');
//         targetDiv.appendChild(interView);
//     });
// }


// // deleting the hole card
// const deleteBtns = document.querySelectorAll('.delete__card');
// for (const btn of deleteBtns) {
//     btn.addEventListener('click', function() {
//         const card = btn.closest('.card');
//         card.remove();
//     });
// }