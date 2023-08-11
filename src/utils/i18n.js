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
    'Обновление метрик': ['Update Metrics', 'Көрсеткіштерді жаңарту'],
    'Проверить': ['Check', 'Тексеру'],
    'Метрики обновляются' : ['Metrics are updated', 'Көрсеткіштер жаңартылуда'],
    'Посты по данному периоду времени не были найдены': ['No posts for this time period were found', 'Берілген уақыт кезеңі бойынша жазбалар табылмады'],
    'Метрики по проекту обновлены' : ['Project metrics updated', 'Жоба көрсеткіштері жаңартылды'],
    'Повторите попытку через ': ['Try again in ', 'Қайталап көріңіз '],
    'минуту': ['minute', 'минуттан кейін'],
    'минуты': ['minutes', 'минуттан кейін'],  
    'минут' : ['minutes', 'минуттан кейін'],
    'Укажите правильный промежуток времени': ['Specify the correct time interval', 'Дұрыс уақыт аралығын енгізіңіз'],
    'Что-то пошло не так': ['Something were wrong', 'Белгісіз  ақаулар пайда болды '],
    'Заявка на обновление метрик по проекту была принята': ['A request for a metrics update on the project was accepted', 'Жобаның метрикасын жаңартуға өтінім қабылданды'],
    'Укажите id проекта': ['Specify project id', 'Жоба идентификаторын көрсетіңіз'],
    'Проект с данным id не был найден': ['Project with given id was not found', 'Берілген идентификаторы бар жоба табылмады'],
    'Выбрано': ['Selected', 'Таңдалған'],
    'Выберите один из проектов': ['Choose one of the projects', 'Жобалардың бірін таңдаңыз'],
    'Укажите промежуток времени который вы указывали при обновлении метрик' : ['Specify the time interval that you specified when updating the metrics', 'Көрсеткіштерді жаңарту кезінде көрсеткен уақыт аралығын көрсетіңіз'],
    'Метрики обновляются по данному промежутку времени' : ['Metrics are updated over a given period of time', 'Көрсеткіштер берілген уақыт аралығында жаңартылады'],
    'Id проекта' : ['Project Id', 'Жоба идентификаторы']
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
