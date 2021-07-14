# Exkurs - Ports

In einem System gibt es mehrere Dienste. Möchte man diese Dienste auch nach außen hin benutzbar machen muss man ihn eine eindeutige Nummer zuweisen. Das hat den Sinn, damit man mehrere Dienste adressieren kann und nicht jedes System nur ein Dienst unterstützen kann.

Bei den Portnummern gibt es unterschiedliche Bereiche.

| Name                            | Bereich       | Erläuterung                                                                                                                                                                                 |
|---------------------------------|---------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| System Ports / Well-Known-Ports | 0 - 1023      | Sind standardisierte Ports für Dienste. Hier findet man zum Beispiel Ping (7) HTTP (80) und HTTPS (443)                                                                                     |
| Registered Ports                | 1024 - 49151  | Sind für registrierte Dienste die nicht in den Standard aufgenommen werden. Hier finden sich diverse Programme von Unternehmen wie Adobe, Microsoft, Google aber auch kleinere Unternehmen. |
| Dynamic Ports                   | 49152 - 65535 | Dynamische Ports werden vom Betriebssystem an einen Client adressiert. So kann zum Beispiel der Webbrowser für eine Anfrage aus dem Bereich einen Port verwenden.