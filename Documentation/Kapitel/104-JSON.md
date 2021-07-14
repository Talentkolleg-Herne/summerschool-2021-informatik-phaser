# Exkurs - JSON

JSON steht für Javascript Object Notation und ist ein Textbasiertes Datenformat, welches normalerweise dazu verwendet wird Daten von einem Webservice zum Client zu übertragen. Zur Datenvisualisierung verwendet JSON das Key Value Prinzip, welches darauf beruht zu jedem Eintrag ein bestimmten Wert zu haben. Ein großer Vorteil von JSON ist, das es in nahezu jeder Programmier- oder Skriptsprache entsprechende Funktionen für den Umgang mit JSON gibt.

## Aufbau

Der Aufbau von JSON sind Key-Value-Paare, wo immer links der Schlüssel (Key) und rechts der Wert  (Value) steht. Dabei werden Texte (strings) in Hochkommata eingeschlossen und Zahlen nicht. Jedes Key-Value paar wird von einem Komma getrennt, bis auf das letzte. Nach dem letzten Element kommt kein Komma. 
Als ungewöhnlicher Wert gibt es hier den Wert null. Dieser bedeutet es gibt kein Wert (es ist also weder eine Zahl noch ein String).

```json
{
  "name": "Max",
  "nachname": "Mustermann",
  "strasse": "Musterstrasse",
  "hausnummer": 7
}
```

## Objekte als Wert
In JSON ist es ebenfalls möglich komplette Objekte (bzw. mehrere Zuweisungen unter einen Key (Schlüssel) laufen zu lassen):

```json
{
  "person": {
    "vorname": "Max",
    "nachname": "Mustermann",
    "alter": 32
  }
}
```

## Arrays
Wenn man in dem Datenformat JSON ein Array vereinbaren möchte kann man die Daten in eckigen-Klammern einschließen.

```json
{
  "namen": ["Max", "Gabi", "Bettina", "Frank"],
  "zahlen": [5, 7, 9, 10, 13]
}
```

## Objekt-Arrays

In JSON ist es auch möglich Arrays zu definieren. Hierfür wird der Schlüssel hingeschrieben und die eigentlichen Arraydaten werden in eckigen Klammern ( [] ) eingeschlossen.

```json
{
  "personen": [
    {
      "name": "Max",
      "nachname": "Muster"
    },
    {
      "name": "Gabi",
      "nachname": "Mustermann"
    }
  ]
}
```