---
title: "Closures in C#"
tags: ["C#"]
date: 2020-01-01
---



# Wie werden Closures in C# abgebildet?

Während der Kompilierung werden Closures in Klassen umgeschrieben. 

In dieser neuen Klasse gibt es Felder, welche die Werte speichern.
Die Methoden in der Klasse repräsentieren den Code des Closures. Für jedes Closure gibt es dabei eine eigene Methode. Die Werte *rund um das Closure* landen aber in der selben Klasse.

````csharp
class A {

    public void Method(){
        
        var hObj1 = ...;
        var hObj2 = ...;
        
        someFunc = () => {
            // closure A
            // use hObj1
            // use hObj2
        }
        
        someOtherFunc = () => {
            // closure B
            // use hObj2
        }
    }
}
````



# Implicit captured closure

Durch die Art wie Closures umgesetzt werden kann es zu Verwirrungen bezüglich der verwendbaren Variablen kommen. Im späteren Kontext des `someOtherFunc` Closures ist ebenfalls eine `hObj1` Variable deklariert obwohl diese im Closure `someOtherFunc` nicht genutzt wird.

![image-20200127180204617](/images/csharp-closure.png)