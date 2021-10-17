
/* Create grow and shrink effect on the pumpkin buttons */
const pumpkinGrowRef = document.querySelector('.btn-pumpkin');


const growPumpkin = () => {
  pumpkinGrowRef.classList.remove('shrink')
  pumpkinGrowRef.classList.add('grow');
}

const shrinkPumpkin = () => {
  pumpkinGrowRef.classList.remove('grow')
  pumpkinGrowRef.classList.add('shrink')
}


pumpkinGrowRef.addEventListener('mouseover', growPumpkin);
pumpkinGrowRef.addEventListener('mouseout', shrinkPumpkin);