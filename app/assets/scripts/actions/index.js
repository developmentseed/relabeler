'use strict'

export const UPDATE_SLIDER = 'UPDATE_SLIDER'

export function updateSlider (value) {
  return { type: UPDATE_SLIDER, data: value }
}
