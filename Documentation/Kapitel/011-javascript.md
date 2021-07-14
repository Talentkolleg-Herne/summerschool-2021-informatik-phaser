## Erste Javascript Grundlagen
Als erstes haben wir uns mit dem Editor beschäftigt, dazu gibt es nächste Woche nochmal etwas mehr zu, bis dahin geh ich auf den nächsten Punkt ein. 

### Ausgaben und Variablen
Eine Ausgabe kann in Javascript auf mehrere Weisen erfolgen. Wir werden allerdings die Methode mit `console.log` nutzen. 
Dabei wird `console.log()` geschrieben um die Funktion aufzurufen und in den runden Klammern folgt nun die eigentliche Ausgabe. Das kann erstmal alles sein. 

```js
console.log('Ich bin eine Ausgabe');
console.log('Ich bin auch eine Ausgabe');
console.log(42);
```

Bei den obigen Ausgaben fällt auf, dass die 42 nicht mit Anführungsstrichen geschrieben wurde, dass liegt daran, dass Javascript zwischen Zahlen und Texten unterscheidet. Texte werden dabei immer mit Anführungszeichen geschrieben ` oder " und Zahlen nicht. Der unterschiedt liegt in der Mathematik, denn mit Zahlen kann gerechnet werden und mit Text eben nicht. So ist es möglich auf eine Zahl alle Operationen (+,-,*,/) anzuwenden und auf einem Text ausschließlich das +, welches dann zwei Texte aneinander packt. 

Eine Variable hält immer einen Wert (bei uns z.B. eine Zahl oder einen Text) um mit diesen zu arbeiten. Eine Variable kann wie folgt angelegt werden

```js
let meineVariable = 17;
let nochEineVariable = 'Mein Text';
```
> Erstellung zweier Variablen mit einer Nummer und einem Text.

Danach kann mit der Variable umgegangen werden als ob es ein Text oder eine Ziffer wäre:

```js
let meineVariable = 17;
let nochEineVariable = 'Mein Text';

console.log(meineVariable);
console.log(nochEineVariable);
```

Eine andere Möglichkeit eine Variable zu definieren und mehrere Werte beieinander zu halten ist ein Objekt. Ein Objekt kann mehrere Werte beinhalten. So kann z.B. die Konfiguration für ein Spiel in einem Objekt festgehalten werden. Ein Objekt wird erstmal wie eine Variable behandelt und umfasst geschweifte Klammern `{}`. Innerhalb dieser Klammern können nun die Felder reingeschrieben werden die in dem Objekt zur Verfügung stehen. Dabei wird ein Feldname immer mit einem Doppelpunkt von dem Wert getrennt und mit einem Komma zum nächsten geleitet.

```js
let meinObjekt = {
  name: 'Hans Dieter',
  alter: 17,
  groesse: 200,
  istSchueler: true
}

// der Zugriff erfolgt über die Variable mit einem Punkt und dem Feldnamen:
console.log(meinObjekt.name);
console.log(meinObjekt.alter);
console.log(meinObjekt.groesse);
console.log(meinObjekt.istSchueler);
```

### Rechnungen
Um mit einer Variable oder einem Wert zu rechnen kann man einfach das Operationszeichen schreiben:


```js
let meineVariable = 17 + 3;
let nochEineVariable = 'Mein Text';

meineVariable = 28 / 2 + 5;
nochEineVariable = 'Hallo' + ' Welt';
console.log(meineVariable);
console.log(nochEineVariable);
```
> Wichtig: Nur bei der ersten Verwendung einer Variablen muss das Wort let davor geschrieben werden, danach darf es nicht mehr. 
> Wichtig: Die Werte der Variablen werden dabei immer überschrieben und sind somit nicht mehr nutzbar. Um mit einer Variablen weiterzurechnen kann folgendes gemacht werden:
```js
let test = 17;
test = test + 5;
```
> Hier wird eine Variable erzeugt mit dem Namen test der der Wert 17 zugeordnet wird. In der nächsten Zeile wird ihr ein neuer Wert zugewiesen. Dafür wird wieder die Variable benutzt um den Wert von ihr mit 5 zu addieren und der Variablen erneut zuzuweisen. 
### Kommentare
Kommentare werden in Javascript ignoriert (nicht ausgeführt) und dienen der Übersicht für den Programmierer. Kommentare werden mit einem `//` eingeleitet um einen Kommentar in einer Zeile zu haben oder aber über mehrere Zeilen sieht es dann wie folgt aus 
```js
// Ich bin ein Einzeiliger-Kommentar

/*
  Ich gehe
  über
  mehrere
  Zeilen
*/
```

### Blöcke
Blöcke werden in Javascript mit den geschweiften Klammern beschrieben `{}`. Diese Blöcke bilden eine Einheit und sorgen in Verbindung mit Schlüsselwörtern dazu, dass alles ausgeführt wird was in dem Block steht => z.B. bei späteren Funktionen oder Fallunterscheidungen. Diese Blöcke haben auch die Besonderheit, dass Variablen immer nur in dem Block gültig sind, in dem Sie erstellt wurden und in den Blöcken, die innerhalb dieses Blockes erstellt wurden. 

Als Beispiel:

```js
{
  let meineVariable = 5;

  // Hier natürlich noch gültig
  console.log(meineVariable);

  {
    // hier auch, da es ein innerer Block ist
    console.log(meineVariable);
  }
}
// Fehler: meineVariable ist nicht bekannt
console.log(meineVariable);
```

Eine Ausnahme bildet hier das Schlüsselwort `var`. Wenn ihr damit eine Variable erstellt anstatt mit `let` ist diese Variable `global` gültig.

```js
{
  let meineVariable1 = 5;
  // meineVariable2 ist jetzt in jedem Block gültig und steht global zur Verfügung (d.h. auch in jeder Funktion usw.)
  var meineVariable2 = 10;

  // Hier natürlich noch gültig
  console.log(meineVariable1);
  
  console.log(meineVariable2);
  {
    // hier auch, da es ein innerer Block ist
    console.log(meineVariable1);
  console.log(meineVariable2);
  }
}
// Fehler: meineVariable ist nicht bekannt
console.log(meineVariable1);
console.log(meineVariable2);
```


### Fallunterscheidung
Eine Fallunterscheidung dient dazu zwischen zwei Zuständen zu unterscheiden und verschiedenen Code für die Zustände auszuführen.
Als Beispiel möchte man z.B. zusätzlichen Code ausführen wenn jemand über 18 ist (z.B. Zugang zu einer Webseite). Auch in der realen Welt gibt es natürlich auch Fallunterscheidungen die wir intuitiv fällen. So gibt es z.B. die Möglichkeit sich wenn es kalt ist eine Jacke anzuziehen.

In der Programmierung ist es allerdings nicht ganz so einfach mit den Bedingungen. Hier muss jede Bedingung nach WAHR oder FALSCH beurteilt werden können. Diese Werte WAHR oder FALSCH werden auch als boolsche Werte bezeichnet. Für diese Aussagen (boolsche Bedingung => Eine Bedingung die nach einer boolschen Wert auswertbar ist) stehen uns folgende Operatoren zur Verfügung:

| Operator | Wort | Beispiel  |
|----------|----------------|-----------|
| >        | größer         | 5 > 10  5 ist kleiner als 10 (WAHR)                                                                                          |
| <        | kleiner        | 10 < 5  10 ist kleiner als 5 (FALSCH)                                                                                        |
| >=       | größer gleich  | 16 >= 17  16 ist größer oder gleich 17 (FALSCH)                                                                                |
| <=       | kleiner gleich | 16 <= 16  16 ist kleiner oder gleich 16 (WAHR)                                                                                 |
| !=       | nicht gleich   | 0 != 1  0 ist nicht gleich 1 (WAHR)                                                                                          |
| ==       | gleich         | 1 == 1  1 ist gleich 1 (WAHR)                                                                                                |
| ===      | typengleich    | 1 === '1'  Der Typ und der Wert von 1 ist gleich dem Typ und der Wert von 1  (FALSCH => da links eine Zahl und rechts ein Text) |

Mithilfe dieser Operatoren lassen sich nun die Bedingungen schreiben. Um so eine Bedingung zu schreiben, müssen wir vorher das Schlüsselwort für eine Fallunterscheidung voran schreiben `if` um in Klammern dahinter die Bedingung zu schreiben. Sollte nun die Bedingung wahr sein, wird alle was in den geschweiften Klammern dahinter kommt ausgeführt. Wenn man möchte kann man hinter der `if` noch ein `else` schreiben um einen block nur Auszuführen, wenn die Bedingung in der `if` Anweisung den Wert FALSCH liefert.  

Als Beispiele:

```js
// definiere eine Variable die mein Alter speichert
let meinAlter = 23;

if (meinAlter >= 18) {
  console.log('Du bist volljährig');
}

``` 
> Programm welches das Alter speichert und "Du bist volljährig" auf der Konsole schreibt wenn man älter oder gleich 18 Jahre alt ist.

```js
let meinAlter = 23;

if (meinAlter >= 18) {
  console.log('Du bist volljährig');
} else {
  console.log('Du bist noch minderjährig');
}
```
> Programm welches das Alter speichert und "Du bist volljährig" auf der Konsole schreibt wenn man älter oder gleich 18 Jahre alt ist. Sollte man jedoch jünger als 18 Jahre alt sein wird "Du bist noch minderjährig" auf die Konsole geschrieben


```js
let meinAlter = 23;

if (meinAlter >= 18) {
  console.log('Du bist volljährig');
} else if (meinAlter >= 16) {
  console.log('noch nicht volljährig, aber nah dran');
} else {
  console.log('Du bist noch minderjährig');
}
``` 
> Dieses Programm gibt ein "Du bist volljährig" wenn der Benutzer älter oder gleich 18 Jahre alt ist. Zudem wird noch ein anderer Text ausgebenen wenn das alter größer oder gleich 16 ist. Als alternative wenn nichts anderes zutrifft wird "Du bist noch minderjährig" ausgegeben. 
> In dem Beispiel wird das `if else`-Konstrukt verwendet, welches nur die erste Bedingung ausführt. Das ist hier besonders Sinnvoll, da ansonsten immer beide Texte ausgebeben werden würden (da jemand der über 18 Jahre ist auch immer über 16 Jahre alt ist) und wir mit dem `if else`-Konstrukt nun nach der ersten Bedingung den rest des Konstrukts überspringen können, sollte jemand über oder gleich 18 Jahre alt sein. 

### Funktionen
Mittels Funktionen können Codeteile ausgelagert werden und zentral an einer Stelle zur Verfügung gestellt werden. Das ist von Vorteil, wenn man Code in einem Programm oft verwendet und daher den Code nur an einer Stelle updaten möchte. Desweiteren ist es mit Funktionen einfacher funktionalitäten zu teilen (wie es z.B. Phaser3 macht bzw. alle anderen Frameworks). 
Um in Javascript eine Funktion zu erstellen, wird das Schlüsselwort `function` vor dem Namen der Funktion geschrieben. Danach kommen Klammern `()`. In diesen Klammern können nun Parameter definiert werden um bestimmte Variablen auch innerhalb der Funktion zur Verfügung zu haben. Die Funktion kann nach der definition aufgerufen werden, indem man den Namen mit den beiden Klammern schreibt.

```js
// definition der Funktion
function meineFunktion() {
  console.log('Ich bin eine Funktion');
}

// Aufruf der Funktion.
meineFunktion();

// definition der Funktion mit einem Parameter
function meineFunktion2(meinParameter) {
  console.log(meinParameter);
}

// Aufruf der Funktion mit Parameter
// Hier wird in den Klammern der Wert eingetragen und kann in der Funktion benutzt werden
meineFunktion('hello');
```
