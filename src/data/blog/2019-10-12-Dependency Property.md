---
title: "Dependency Properties in WPF"
date: 2019-10-12 00:00:00
category: "WPF"
image: "netz.jpg"
---

Ich bin nun dabei meine .NET Kenntnisse auszubauen. Der Fokus dabei liegt dabei zunächst auf C# und WPF. Dabei kommen immer wieder Themen zum Vorschein die auf den ersten Blick nicht greifbar sind und einer tiefere Einarbeitung benötigten. Die Ergebnisse meiner Recherche und meine Erkenntnisse möchte ich gerne in Blog-Posts und daraufhin als Ergänzung in meiner Wissens-Sammlung teilen 🎓

Das erste Thema über das ich stolperte waren die Dependendy Properties in WPF. 
Im Folgenden stelle ich das Thema vor wie ich es im Rahmen meiner Recherche verstanden habe. Ich erhebe keinen Anspruch auf die Korrektheit aller Aussagen.

# Dependency Property

Der Hauptunterschied zwischen einer .NET Property und einer Dependency Property ist, dass die .NET Property direkt gelesen wird und der Wert einer Dependency Property wird dynamisch mit `GetValue()` aufgelöst.

Dependency Properties sind Eigenschaften von Klassen die von `DependencyObject` ableiten. Eine Klasse die also Dependency Properties nutzen will muss von `DependencyObject` ableiten.

Beim Setzen eines Wertes wird dieses auch nicht in ein Feld geschrieben sondern in ein  von `DependencyObject` verwaltetes Dictionary. Dadurch entstehen diverse Vorteile.

- **Weniger Speicherplatz notwendig:** Es muss nicht jedes Feld separat gespeichert werden. Viele der UI Werte behalten ihren Standardwert. Somit ist es nur notwendig Abweichungen zu speichern
- **Vererbung der Werte:** Wird auf eine Dependency Property zugegriffen wird ein logischer Baum nach oben durchlaufen bis der gesuchte Wert gefunden wird. Somit ist eine Vererbung der Werte möglich
- **Änderungsmitteilung:** Dependency Properties haben einen eingebauten Benachrichtigungsmechanismus. Dadurch ist ein Databinding möglich.



**Was ist ein `DependencyObject`?** 
Es ist das Basis-Objekt aller WPF Objekte (z.B. Buttons, TextBox, Italic, Span, ...). Die Dependency Objekte werden für das WPF Property System genutzt.

**Was sind nun `Dependency Properties`?** 
Das `DependencyObject` implementiert die Basis für Sachen wie Styling, Databinding, Animation, ... . Dependency Proprties dienen als Zugriffspunkt zum Setzen und Auslesen der Daten. 



## Implementation 

Es gibt zwei Schritte:

1. Registrierung der Dependency Property
   - Konvention: Name des Feldes endet mit ...Property
2. Implementierung der Getter und Setter Wrapper

```csharp
public int MyProperty
{
    get { return (int)GetValue(MyPropertyProperty); }
    set { SetValue(MyPropertyProperty, value); }
}

// Using a DependencyProperty as the backing store for MyProperty.
// This enables animation, styling, binding, etc...
public static readonly DependencyProperty MyPropertyProperty =
    DependencyProperty.Register("MyProperty",
                                typeof(int),
                                typeof(ownerclass),
                                new PropertyMetadata(0));
```

Die Dependency Property bietet Callbacks an die über den Metadaten Parameter in der Registrierung angegeben werden können:

- **Change Notification:** Wird jedes mal aufgerufen wenn sich der Wert ändert.
- **Coerce Value:** Abfangen dass Werte außerhalb der Grenzen gesetzt werden und somit Exceptions entstehen
- **Vallidation Callback**

Manche Dependency Properties sind nur Read-Only (z.B. `OnMouseOver`). Umgesetzt wird das mit `DependencyProperty.RegisterReadOnly()`. Jedoch wird hier ein `DependencyPropertyKey` zurück geliefert, der privat oder protected sein sollte. Mit diesem Key kann dann die Dependency Property registriert werden.

Dependency Properties können genutzt werden um die Funktionalität existierender Controls zu erweitern.

## Attached Properties

Mit Attached Properties kann man Werte an Objekte hängen ohne, dass die Objekte diese Werte kennen (Beispiel: Zugriff auf die Werte von Child-Elementen im Parent-Element. *Canvas Layout hat Zugriff auf die Positionen der Kinder* `Canvas.Top="10"`)

Ein Beispiel Projekt zu einer Attached Property ist in den C# Code Beispielen enthalten (). Dort wird eine neue Property `Angle` eingeführt, welche UI-Elemente mit einem einzigen Parameter rotiert darstellt.

[-> Attached Dependency Property Beispiel](https://gitlab.com/georg.braun92/CSharpBeispiele/tree/master/AttachedDependencyPropertyBeispiel)


Quelle: *https://www.codeproject.com/Articles/1216541/Simplest-WPF-Dependency-Property-For-Beginners-O-2*, https://www.wpftutorial.net/DependencyProperties.html