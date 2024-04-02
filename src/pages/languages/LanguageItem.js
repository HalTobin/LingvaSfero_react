import './LanguageItem.css'

function LanguageItem({ language }) {
    return (
        <div>
            <div className="Language-container" style={{ backgroundColor: toColor(language.color) }}>
                <div className="Language-flag-container">
                    <img src={language.img} className="Language-flag" />
                    <p>{language.name}</p>
                </div>
            </div>
        </div>
    )
}

function toColor(num) {
    num >>>= 0;
    var b = num & 0xFF,
        g = (num & 0xFF00) >>> 8,
        r = (num & 0xFF0000) >>> 16,
        a = ((num & 0xFF000000) >>> 24) / 255;
    return "#" + [r, g, b, a].join("");
}
toColor(-5952982)

export default LanguageItem;