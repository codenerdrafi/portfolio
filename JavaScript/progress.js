const skillsSection = document.getElementById('skillsSection');
const progressBar = document.querySelectorAll('.progress-bar');

window.addEventListener('scroll',()=>{
    const sectionPos = skillsSection.getBoundingClientRect().top;
    const screenPos = window.innerHeight/2;

   
    function showProgress(){
        progressBar.forEach(progressBar=>{
            const value = progressBar.dataset.progress;
            progressBar.style.opacity = 1;
            progressBar.style.width = `${value}%`;
        });
    }

    function hideProgress(){
        progressBar.forEach(p=>{
            p.style.opacity = 0;
            p.style.width = 0;
        });
    }

    if (sectionPos < screenPos) {
        showProgress();
    }else{
        hideProgress();
    }
});


