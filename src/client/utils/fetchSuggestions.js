import axios from 'axios';
import fixNames from './fixNames';

String.prototype.capitalize = (lower) => {
  return (lower ? this.toLowerCase() : this).replace(/(?:^|\s)\S/g, (a) => {
    return a.toUpperCase();
  });
}

export function getExample(filer) {
  return axios.get(`http://54.213.83.132/hackoregon/http/current_candidate_transactions/${filer}/`);
}

function getCompetitorFromName(searchTerm) {
  const searchFor = fixNames(searchTerm.capitalize());
  return axios.get(`http://54.213.83.132/hackoregon/http/competitors_from_name/${searchFor}/`);
}

function getCandidate(searchTerm) {
  return axios.get(`http://54.213.83.132/hackoregon/http/candidate_search/${searchTerm}/`);
}

// function getDonors(searchTerm) {
//   const searchFor = fixNames(searchTerm.capitalize());
//   return axios.get(`http://54.213.83.132/hackoregon/http/donor_meta/${searchFor}/`)
// }

// using 2 end points for now to give more search suggestions
export default function fetchSuggestions(searchTerm) {
  if(searchTerm && searchTerm.length > 0){
  return axios.all([
    getCompetitorFromName(searchTerm),
    getCandidate(searchTerm)])
    .then((arr) => ({
        candidate_names: arr[0].data,
        related: arr[1].data
    }))} else {
      return new Promise(resolve => resolve({searchTerm:searchTerm, status:'rejected'}));
    }
}
