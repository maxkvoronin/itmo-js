
/**
 * Урок 2. Задание 6*.
 Пользователь вводит количество тарелок и количество
 моющего средства. Моющее средство расходуется из расчета 0.5
 на одну тарелку. Вымыть тарелки в цикле. Вывести на экран:
 1) сколько тарелок осталось, если моющее средство закончилось:
 'Моющее средство закончилось. Осталось N тарелок'
 (где N – заменить на число оставшихся тарелок)
 2) сколько осталось моющего средства, если тарелки закончились:
 'Все тарелки вымыты. Осталось N ед. моющего средства'
 (где N – заменить на число оставшегося моющего средства)
 3) если мы помыли все тарелки и моющее средство закончилось,
 то вывести: 'Все тарелки вымыты, моющее средство закончилось'
 */
countWashing(50,53);
function countWashing(plates, washer){
    var result = "";
    var resultPlates = 0;
    var resultWasher = 0;
    var tmpPlates = plates;

    for(var i = 0; i < washer * 2; i++){
        if(tmpPlates === 0){
            resultWasher = plates - washer * 2;
            resultPlates = tmpPlates;
            console.log(resultPlates);
            console.log(resultWasher);
            console.log(i);
            break;
        }
        tmpPlates--;
    }

    if (resultPlates === 0 && resultWasher === 0){
        result = "Все тарелки вымыты, моющее средство закончилось";
    } else if (resultPlates === 0 && resultWasher > 0){
        result = "Все тарелки вымыты. Осталось " + resultWasher + " ед. моющего средства";
    } else if (resultPlates > 0 && resultWasher === 0){
        result = "Моющее средство закончилось. Осталось " + resultPlates + " тарелок";
    }
    console.log(result);
}
