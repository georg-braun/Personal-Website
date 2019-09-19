---
title: "Erstellung eines eigenen Familienstammbaums"
date: 2019-08-01 00:00:00
image: "tree.jpg"
category: "it"
---


**Ausgangssituation**: Es gab schon länger die Idee in der Familie den Stammbaum der Familie aufzuzeichnen, beziehungsweise weiter zu     pflegen. Dies wurde bereits analog gemacht und meiner Großmutter ein gemaltes Exemplar zum Geburtstag geschenkt. Um den Stammbaum auch digital zu haben und erweitern zu können habe ich mich daran gesetzt einen solchen     Stammbaum zu entwickeln.   

**Ziel des Projektes** war es also einen digitalen Familienstammbaum zu erstellen. Dieser sollte lediglich einen fixen Stammbaum darstellen (also ohne Editierfunktion).   

Von der Entwicklung des Stammbaums und der Integration in die Webseite habe ich mir zudem erhofft noch weitere Einblicke in der Webentwicklung zu sammeln.   

 

### Was habe ich bisher gemacht?

Zunächst stand die Suche nach einer passenden Visualisierungbibliothek für den Stammbaum an. Dabei wurde ich sehr schnell auf die dTree Bibliothek von ErikGartner (<https://github.com/ErikGartner/dTree>) aufmerksam, die genau das machte was ich wollte. Die Visualisierung von Datenbäumen, die auch mehrfahre Elternknoten zulässt.   

Nachdem ich die Demo von dTree lokal funktionierte, begann ich damit die Demo in meine Webseite mit einzubauen. dTree ist zwar auch über ein CDN zugreifbar, jedoch war es mir wichtig die Bibliothek selber über den Webserver anbieten zu können, um so vom CDN unabhängig zu sein. Die weiteren Abhängigkeiten (wie z.B. d3js oder lodash) werden jedoch von externen     Quellen bezogen.   

Daraufhin wurde die dTree Demo mit in die Webseite eingebunden und das Grundgerüst stand somit. Der nächste Schritt war die Analyse der Datenstruktur. Wie werden also die Familienverhältnisse repräsentiert. Die dahinter liegende JSON-Struktur ist recht verständlich, sodass ich testweise die ersten Anpassungen vorgenommen habe um die Demo-Daten durch reale Daten zu ersetzen. Die JSON-Datenstruktur war jedoch noch mit im `script` Teil der HTML-Seite eingebunden, was ich als nicht so schön empfand. Deshalb habe ich die Datenstrukur in eine eigene Datei ausgelagert und auf die JSON-Daten kann über eine eigene Route (API)     zugegriffen werden. Davon machte dann das Frontend auch gebrauch, sodass beim Laden des Stammbaums die benötigten Daten über die Fetch-API bezogen werden. Damit war dann die Datenhaltung schon mal etwas entkoppelt. Sollten die Daten zu einem späteren Zeitpunkt mal aus einer Datenbank kommen, so sind die notwendigen Anpassungen nicht so groß.   

Damit stand das Grundgerüst und es stand die Pflege der Daten an.

[Zum Stammbaum](/projects/familytree)

