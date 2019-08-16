import { LOAD_FILE } from '../constants';

export function loadFileAction(payload) {
  return { type: LOAD_FILE, payload };
}
