---
title: "Umstellung der Seite auf Markdown"
date: 2019-08-03 00:00:00
category: "it"
image: "simple.jpg"
---

**tldr**
Umstellung der Artikel Verwaltung auf Markdown-Dateien. Diese werden automatisch in HTML konvertiert und über eine Konfigurationsdatei in die Seite eingebunden.

## Vorgeschichte
Durch Zufall bin ich auf der Internetseite einer Entwicklerin gelandet, welche ihre Seite als Blog und als eigene Wissensdatenbank nutzte. Die Webseite basierte auf dem Framework Gatsby (https://www.gatsbyjs.org/). Ich kannte dieses Framework bisher noch nicht und prüfte wie die Seite umgesetzt wurde. Zum Glück war das Repository des Internetauftritts frei zugänglich. Dabei entdeckte ich, dass die meisten Artikel und Beiträge im Markdown Format vorlagen und durch das Framework zur Laufzeit in eine Internetseite umgewandelt werden.

## Bisherige Entwicklung

Dieses Konzept fand ich sehr interessant für meine eigene Internetseite, da ich meine bisherige Lösung nicht als sehr schön empfand. So war zum Beispiel jede Projektbeschreibung (zum Beispiel eine Seite wie hier) als eigene HTML-Datei vorhanden. Meine erste Überlegung, und auch schon Implementation, ging in die Richtung einer datenbankbasierten Verwaltung der Seiteninhalte. Neben dem Webserver hätte es also auch noch einen zusätzlichen Datenbankserver gegeben. Für Testzwecke hatte ich auch schon eine Postgres Datenbank in einem Docker-Container laufen und mit dem ORM Sequelize (https://github.com/sequelize/sequelize) fing ich an eine eigene kleine Blog-Verwaltung zu bauen. Mit der Zeit bemerkte ich jedoch, dass diese datenbankgestützte Variante etwas *overkill* ist und ich dies eigentlich nicht benötige. Ich habe also ganz klassisch erst mal das YAGNI (You aren't gonna need it) (https://en.wikipedia.org/wiki/You_aren%27t_gonna_need_it) Prinzip verletzt ;) 
Jedoch habe ich so wieder etwas mehr über Docker und ORM gelernt.

## Idee: Artikel als Markdown 

Somit war das Datenbank Thema ad acta gelegt. Ich war sehr angetan von der Lösung meine Texte in Markdown zu schreiben und automatisch daraus die Seite generieren zu lassen. Jedoch wollte ich nicht meine komplette Seite mit Markdown bauen, sondern nur bestimmte Teile auf diese Weise angehen. Außerdem bin ich noch dabei mehr über Webentwicklung zu lernen, weshalb ich meine Seite nicht direkt mit einem Framework bauen will. Ich entschied mich deshalb den bidirektionalen Markdown / HTML Konverter Showdown (http://showdownjs.com/) zu nutzen.

## Umsetzung 
Ich habe mir dazu einen kleines Konverter-Modul geschrieben, welches sich darum kümmert alle Markdown Artikel einzulesen,  zu konvertieren, Routen zu erstellen und letztendlich in die Übersicht einzufügen. 

Der grobe Aufbau des Systems ist in der Zeichnung dargestellt:

![aufbau-system-mit-markdown](../images/aufbau-system-mit-markdown.jpg)

Es wird jedoch nicht automatisch jedes Markdown Dokument in eine entsprechende Seite umgewandelt. Gesteuert wird dies über eine extra Konfigurationsdatei.
```
{
  "metadata": [
    {
      "title": "Erstellung eines Stammbaums",
      "description": "Entwicklung eines Familienstammbaums",
      "file": "2019-08-01-Stammbaum.md",
      "route": "/erstellung-stammbaum",
      "tags": [],
      "thumbnail": "thumbnails/tree.jpg",
      "date": "01.07.2019"
    },
    {
      "title": "Erstellung der Webseite",
      "description": "Gestaltung einer eigenen Webseite",
      "file": "2019-07-01-Webseite.md",
      "route": "/erstellung-webseite",
      "tags": ["JavaScript", "EJS"],
      "thumbnail": "thumbnails/code.jpg",
      "date": "01.06.2019"
    }

  ]
}
```
Wie man sehen kann bestimmt die Konfigurationsdatei welche Seiten später auf der Seite erscheinen. So kann neben den inhaltlichen Informationen auch die Route angegeben werden unter der die Seite später erreichbar sein wird.

Die Erstellung neuer Seiten / Artikel ist somit sehr einfach geworden. Ich schreibe einen Artikel somit zunächst in einem Markdown-Editor. Sobald der Artikel online gehen soll ergänze ich einen entsprechenden Eintrag in der Konfigurationsdatei.