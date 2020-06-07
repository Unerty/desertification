# Опустелювання
Проект з дисципліни "**Моделювання соціальних, економічних та екологічних процесів**"

## Чому це важливо?
Площа пустель на планеті лише збільшується. Дитяча смертність в країнах, що займають посушливі території, вища, а валовий національний продукт (ВНП) на душу населення нижче, ніж в решті світу. Через ускладнений доступ до води, ринку сільськогосподарської продукції, малого числа природних ресурсів в посушливих регіонах поширена бідність.
[*Детальніше...*](https://ru.wikipedia.org/wiki/%D0%9E%D0%BF%D1%83%D1%81%D1%82%D1%8B%D0%BD%D0%B8%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5 "Посилання на Вікіпедію")

## Що змодельовано?
Наглядно показано, який ризик перетворення у пустелю має певна територія. Можна задати такі параметри як:
- Площа території, що досліджується,
- Площа водоймищ на території,
- Середньорічна температура,
- Опади,
- Додаткове орошення (ріки та штучний полив)
- Кількість дерев на території
- Кількість кактусів на території.

Ці параметри впливають на такі проміжні результати обрахунків:
- Відносна вологість - *відношення кількості води, що міститься в повітрі за певних умов (температура), до максимально можливої кількості води за тих же умов*. [*Детальніше...*](https://uk.wikipedia.org/wiki/%D0%92%D1%96%D0%B4%D0%BD%D0%BE%D1%81%D0%BD%D0%B0_%D0%B2%D0%BE%D0%BB%D0%BE%D0%B3%D1%96%D1%81%D1%82%D1%8C "Посилання на Вікіпедію")
- Абсолютна вологість - *Маса водяної пари в одному м³*
- Випаровуваність - *скільки води може максимально випаруватись  за певної температури* [*Детальніше...*](https://studfile.net/preview/5707905/page:3/ "Про випаровуваність")
- Прихід води: *опади + додаткове орошення - випарувана вода*
- **Індекс зволоження** - *відношення річної кількості опадів до річної величині випаровуваності для даного ландшафту, є показником співвідношення тепла і вологи. За цим параметром вираховуэться ризик перетворення у пустелю для території*. [*Детальніше...*](https://uk.wikipedia.org/wiki/%D0%9A%D0%BE%D0%B5%D1%84%D1%96%D1%86%D1%96%D1%94%D0%BD%D1%82_%D0%B7%D0%B2%D0%BE%D0%BB%D0%BE%D0%B6%D0%B5%D0%BD%D0%BD%D1%8F "Посилання на вікіпедію")


## Як змодельовано?
#### Відносна вологість:
Відносною вологістю повітря  φ  називають відношення абсолютної вологості повітря  ρ  до **щільності**  ρ0  **насиченої водяної пари при тій же температурі**, вираженої в відсотках.
Відносну вологість повітря можна визначити за формулою
**φ = (ρ/ρ0) ⋅ 100%** .
#### Щільність насиченої водяної пари:
Табличне значення. [*Переглянути таблицю*](https://studfile.net/preview/3246234/).

#### Абсолютна вологість

На абсолютну вологість повітря впливає, головним чином, кількість кількість води у водоймищах. Кількість випаруваної води залежить від щільності насиченої водяної пари, а, отже, і від температури. [*Детальніше...*](http://sun.tsu.ru/mminfo/000063105/274/image/274-136.pdf)
 
Також впливає кількість дерев - кожне дерево через листя випаровує воду.  [*Детальніше...*](https://cyberleninka.ru/article/n/dnevnoy-rashod-vody-na-transpiratsiyu-tselym-drevesnym-rasteniem)

Кактуси, як і дерева, випаровують воду, але ЗНАЧНО менше: [*Детальніше...*](https://books.google.com.ua/books?id=cgo0ukOa_gIC&pg=PA9&lpg=PA9&dq=%D1%81%D0%BA%D0%BE%D0%BB%D1%8C%D0%BA%D0%BE+%D0%BA%D0%B0%D0%BA%D1%82%D1%83%D1%81%D0%BE%D0%B2+%D0%B2+%D0%BE%D0%B4%D0%BD%D0%BE%D0%B9+%D0%BF%D1%83%D1%81%D1%82%D1%8B%D0%BD%D0%B5&source=bl&ots=6FQXLOTKi6&sig=ACfU3U3f1b84bYd4NhgYaQFfiwywuMDKxQ&hl=ru&sa=X&ved=2ahUKEwid-7aZ2O3pAhWnk4sKHcG3BW8Q6AEwBXoECAkQAQ#v=onepage&q=%D0%B8%D1%81%D0%BF%D0%B0%D1%80%D1%8F%D0%B5%D1%82%20%D0%BA%D0%B0%D0%BA%D1%82%D1%83%D1%81&f=false)


#### Випаровуваність

Змодельована за формулою Н. Н. Іванова
![Формула Н. Н. Іванова](http://meteorologist.ru/illustr/meteorolog-633.jpg). [*Детальніше...*](http://meteorologist.ru/formula-isparyaemosti-ivanova.html)
Вважається, що за температури менше -25°C випаровуваність така, що нею можна знехтувати.

#### Прихід води
Тут все просто: це сума всієї надійшовшої на територію вологи.

#### Найоголовніше - індекс зволоження

Це співвідношення тепла і вологи. Чим більше тепла - тим більше вологи потрібно для підтримки **Коефіцієнта Зволоження**.
Саме тому пустелі найчастіше зустрічаються там, де дуже жарко, або там, де дуже мало надходить води. 

За класифікацією Н. М. Іванова, Кзв вказує на природні зони: 
- пустелі — 0-0.1 
- напівпустелі — 0.1-0,5; 
- сухий степ — 0,5-0,8; 
- степ — 0,8-1; 
- лісостеп — 1-1,2; 
- лісова зона (також - болота за низької температури) — понад 1,3.

Відповідно, після обрахування всіх параметрів, отримуємо **Коефіцієнт Зволоження**, якому відповідають такі ризики перетворення території у пустелю:
- Дуже високий — 0-0.1 
- Високий — 0.1-0,5; 
- Середній — 0,5-1;
- Помірний — 1-1,2; 
- Низький — понад 1,3.

Також ***Дуже Високий*** ризик за екстремальних середньорічних температур: нижче 0°C (Тому що немає води в рідкому стані) та вище 40°C (тому що неможливий фотосинтез. [*Детальніше...*](https://iplants.ru/temprezim.htm#:~:text=%D0%A3%20%D0%B1%D0%BE%D0%BB%D1%8C%D1%88%D0%B8%D0%BD%D1%81%D1%82%D0%B2%D0%B0%20%D0%BA%D0%BE%D0%BC%D0%BD%D0%B0%D1%82%D0%BD%D1%8B%D1%85%20%D1%80%D0%B0%D1%81%D1%82%D0%B5%D0%BD%D0%B8%D0%B9%20%D0%B8%D0%BD%D1%82%D0%B5%D0%BD%D1%81%D0%B8%D0%B2%D0%BD%D0%BE%D1%81%D1%82%D1%8C,%D0%A1%20%D1%84%D0%BE%D1%82%D0%BE%D1%81%D0%B8%D0%BD%D1%82%D0%B5%D0%B7%20%D0%BF%D1%80%D0%B0%D0%BA%D1%82%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%20%D0%BF%D0%BE%D0%BB%D0%BD%D0%BE%D1%81%D1%82%D1%8C%D1%8E%20%D0%BF%D1%80%D0%B5%D0%BA%D1%80%D0%B0%D1%89%D0%B0%D0%B5%D1%82%D1%81%D1%8F))

## Висновки
Найбільше на опустелення впливають параметри "Опади" та "Температура". Також опустелення можна спинити якщо направити відчутний потік води на територію - параметр "Додаткове орошення". Це підтверджується на практиці - існує безліч прикладів штучних **оазисів** - зелених островків посеред піску та природний приклад - дельта ріки Ніл.

Висадка дерев майже не впливає - дерева виділяють відносно мало вологи, та й, врешті, загинуть без вологи. Кактуси майже не впливають на вологість повітря - інакше б вони не змогли вижити у пустелі. 

Тому перед озеленюванням пустелі слід подбати про воду, яку будуть споживати рослини.

## Демонстрація

Запустити додаток можна [за посиланням](https://unerty.github.io/desertification/ "Count your desert").

---
Автор: Іван Овдієнко, 501 група Факультету Математики та Інформатики.
