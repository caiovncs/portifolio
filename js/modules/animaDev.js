export default function animaDev() {
  const dev = ['EDVOLNVSDOEER', 'EOVOLEDSNDREV', 'DSEROOVVLEDNE', 'DOERLSENOVEDV', 'OREESNLVVODDE', 'LEROOVESDVDEN', 'VODOLEENDSREV','DDOEVSEELNRVO', 'EOVOLEDSNDREV', 'ERVENSEODLDVO','DODNESORVEVLE', 'DOERLSENOVEDV','RDVELNOOSEVDE', 'DSEROOVVLEDNE',  'OREESNLVVODDE', 'DDOEVSEELNRVO', 'EDVOLNVSDOEER','VODOLEENDSREV', 'DESENVOLVEDOR']
  const front = ['NTFRO NDE','NROFT DEN', 'RFOTN DNE', 'NOFTR END', 'TFRNO DNE','ONTRF DNE','TFORN DNE', 'TONRF DEN', 'FTNRO EDN','NROFT DEN', 'RFTON END', 'NRTFO END', 'RFOTN DNE', 'NOFTR END', 'TFRNO DNE', 'ROTFN EDN', 'TFORN DNE','TONRF END','NROFT DEN','FONRT EDN','TFORN DNE','RFTON END', 'NRTFO END','TROFN EDN','OFNTR NDE','NROFT DEN', 'FRONT END']
  const devText = document.querySelector('.dev')
  const frontText = document.querySelector('.front')

  dev.forEach((item, index) => {
    const timer = setTimeout(() => {
      devText.innerText = item;
      clearTimeout(timer);
    }, 40 * index)
  })
  
  front.forEach((item, index) => {
    const timer2 = setTimeout(() => {
      frontText.innerText = item;
      clearTimeout(timer2);
    }, 40 * index)
  })
}