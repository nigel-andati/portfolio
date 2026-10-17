import { profiles } from '../data/content'

const KEY = 'na-profile'

export const findProfile = (id) => profiles.find((p) => p.id === id)

export function getProfile() {
  try {
    return findProfile(localStorage.getItem(KEY)) ?? profiles[0]
  } catch {
    return profiles[0]
  }
}

export function saveProfile(id) {
  try {
    localStorage.setItem(KEY, id)
  } catch {
    /* storage unavailable — the choice just won't persist */
  }
}
