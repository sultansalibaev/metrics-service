import i18n from "./i18n";

export function formatMinutes(num){
    if (num === 1) {
        return i18n("Повторите попытку через ") + num + ' ' +  i18n("минуту") ;
    } else if (num >= 2 && num <= 4) {
        return i18n("Повторите попытку через ") + num + ' ' +  i18n("минуты");
    } else {
        return i18n("Повторите попытку через ") + num + ' ' +  i18n("минут");
    }
}