import {api} from './setAxios'
export function getImg () {
  return api.get('/homeList')
}
export function getShopItem () {
  return api.get('/indexGuess')
}
