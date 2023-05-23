const _i18n = {
    "Получить метрики по СМИ": [
        "Get media metrics",
        "Медиа көрсеткіштерін алыңыз",
    ],
    "Получить метрики по Социальным сетям": [
        "Get social media metrics",
        "Әлеуметтік медиа көрсеткіштерін алыңыз",
    ],
    "Получить метрики по папкам": [
        "Get metrics by folder",
        "Қалта бойынша көрсеткіштерді алыңыз",
    ],
    "Получить метрики по проекту": [
        "Get project metrics",
        "Жоба көрсеткіштерін алыңыз",
    ],
    "ID проекта": ["Project ID", "Жоба ID"],
    "ID папки": ["Folder ID", "Қалта ID"],
    "Название проекта": ["Project name", "Жоба атауы"],
    'Автор': ["Author", "Автор"],
    "Аудитория/Охват": ["Audience/Reach", "Аудитория/Қамту"],
    'Охват': ["Coverage", "Қамту"],
    'Лайки': ["Likes", "Ұнатады"],
    'Комментарии': ["Comments", "Пікірлер"],
    'Репосты': ["Reposts", "Репосттар"],
    'от': ["from", "бастап"],
    'до': ["to", "дейін"],
    'СМИ': ["SMI", "БАҚ"],
    "Соц.сети": ["Social networks", "Әлеуметтік желілер"],
    'Применить': ["Apply", "Қолдану"],
};

function getLang() {
    var params = {};

    let tmp_params = window.location.href
        .replace(/\?.*/, "")
        .split("//")
        .join("")
        .split("/");
    for (var p = 0; p < tmp_params.length; p++) {
        var _tmp = tmp_params[p].split("=");

        params[_tmp[0]] = _tmp[1];
    }
    let lang = Object.keys(params)[1];
    return lang;
}
function langIs(lang) {
    return getLang() === lang;
}
console.log(getLang() === 'en');

function getLangIndex() {
    if (langIs("en")) return 0;
    else if (langIs("kz")) return 1;
}

const i18n = (text) => {
    return langIs("ru") ? text : _i18n[text][getLangIndex()];
};

export default i18n;
