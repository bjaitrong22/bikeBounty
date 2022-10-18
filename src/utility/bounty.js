export default function getBounty(bikeManu) {
  let bountyPrice;
  switch (bikeManu.toLowerCase()) {
    case 'huffy':
    case 'mongoose':
      bountyPrice = 10000;
      break;
    case 'rad power':
    case 'gazelle':
    case 'devinci':
      bountyPrice = 500;
      break;
    case 'norco':
    case 'bianci':
    case 'specialized':
    case 'fuji':
      bountyPrice = 250;
      break;
    case 'giant':
    case 'trek':
    case 'cannondale':
    case 'scott':
    case 'privateer':
    case 'raleigh':
      bountyPrice = 125;
      break;
    case 'schwinn':
    case 'dynacraft':
    case 'kent':
      bountyPrice = 50;
      break;
    default:
      bountyPrice = 25;
      break;
  }
  return bountyPrice;
}

/* Bike Tier List
God: HUFFY / mongoose
AA: Rad Power Bikes / Gazelle / Devinci / 
A: Norco Bikes / Bianci / Specialized
B: Giant / Trek / Cannondale / SCOTT / Privateer / raleigh
C: Schwinn / Dynacraft / kent

*/