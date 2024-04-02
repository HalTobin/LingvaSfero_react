import './LanguageItem.js'
import LanguageItem from './LanguageItem.js';

import { BASE_URL } from '../../values/Const.js'

var dummyLanguage = {
    name: "Español",
    img: `${BASE_URL}/res/images?iso=ESP&type=language`,
    color: 4294951936
}

function Languages() {
    return <div>
        <LanguageItem language={dummyLanguage} />
    </div>
}

export default Languages;