const pumpkinBtnOneRef = document.getElementById('buttonOption1')
const pumpkinBtnTwoRef = document.getElementById('buttonOption2')

const growPumpkin1 = () => {
  pumpkinBtnOneRef.classList.remove('shrink');
  pumpkinBtnOneRef.classList.add('grow');
}

const shrinkPumpkin1 = () => {
  pumpkinBtnOneRef.classList.remove('grow');
  pumpkinBtnOneRef.classList.add('shrink');
}

const growPumpkin2 = () => {
  pumpkinBtnTwoRef.classList.remove('shrink');
  pumpkinBtnTwoRef.classList.add('grow');
}

const shrinkPumpkin2 = () => {
  pumpkinBtnTwoRef.classList.remove('grow');
  pumpkinBtnTwoRef.classList.add('shrink');
}

pumpkinBtnOneRef.addEventListener('mouseover', growPumpkin1);
pumpkinBtnOneRef.addEventListener('mouseout', shrinkPumpkin1);
pumpkinBtnTwoRef.addEventListener('mouseover', growPumpkin2);
pumpkinBtnTwoRef.addEventListener('mouseout', shrinkPumpkin2);