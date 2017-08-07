import { Panels } from './Panels'
import { Panel } from './Panel'
import { JumpFm } from './JumpFm'
import { keys } from './settings'

import * as mousetrap from 'mousetrap'


export function bindSelection(jumpFm: JumpFm) {
    const pan = () => jumpFm.panels.getActivePanel()

    const toggle = () => {
        pan().toggleSel()
        return false
    }

    const clear = () => {
        pan().clearFilter()
        pan().deselectAll()
        return false
    }

    const all = () => {
        pan().selectAll();
        return false;
    }

    keys.toggleSelection.forEach(key => mousetrap.bind(key, toggle))
    keys.clearSelection.forEach(key => mousetrap.bind(key, clear))
    keys.selectAll.forEach(key => mousetrap.bind(key, all))
}