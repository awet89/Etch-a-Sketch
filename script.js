const containers = document.querySelector('.container');
containers.textContent = "";
containers.setAttribute('style', 'display: flex; height: 960px; width: 960px;border: 1px solid black');
const pb = document.querySelector('.pb');
pb.addEventListener('click',inp);
for(var i = 0; i<20;i++){
    const row= document.createElement('div');
    row.classList.add('row');
    row.setAttribute('style', 'display: flex; flex-direction: column; flex: 1;');
    containers.appendChild(row);
    
    for(var j = 0; j<20; j++){
        const col = document.createElement('div');
        col.classList.add('col');
        col.addEventListener('mouseenter', ()=>col.style.background = 'blue');
        col.addEventListener('mouseleave', ()=>col.style.background = 'red');
        col.setAttribute('style', 'flex: 1; border: 1px solid black;');
        row.appendChild(col);
    }   

    
}

function inp(){
    const containers = document.querySelector('.container');
    const rs = document.querySelector('.row');
    rs.classList.remove('row');
    containers.textContent = "";
    containers.setAttribute('style', 'display: flex; height: 760px; width: 760px;border: 1px solid black');
    var p = prompt("Type a number: ");
    while(p>100||p<0){
        p=prompt("The number has to be less than or equal to 100 or more than 0.");
    }
    for(var i = 0; i<p;i++){
        const row= document.createElement('div');
        row.classList.add('row');
        row.setAttribute('style', 'display: flex; flex-direction: column; flex: 1;');
        containers.appendChild(row);
        
        for(var j = 0; j<p; j++){
            const col = document.createElement('div');
            col.classList.add('col');
            col.addEventListener('mouseenter', ()=>col.style.background = 'blue');
            col.addEventListener('mouseleave', ()=>col.style.background = 'red');
            col.setAttribute('style', 'flex: 1;border: 1px solid black;');
            row.appendChild(col);
        }   
    }

}   