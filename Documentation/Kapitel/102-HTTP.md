# Exkurs - HTTP und HTTPS

## HTTP-Verbindungsaufbau

| Vorgang            | Beschreibung                                                                   |
|--------------------|--------------------------------------------------------------------------------|
| Verbindungsaufbau  | Der Client schickt eine Anfrage zum Server auf Port 80                         |
| Dokument Anfordern | Der Client fordert über das Kommando GET das gewünschte Dokument vom Server an |
| Übertragung        | Der Server fängt an das Dokument zum Client zu übertragen                      |
| Verbindungsabbau   | Der Verbindungsabbau erfolgt nach der Übertragung vom Server.                  |

## HTTPS-Verbindungsaufbau

| Vorgang              | Beschreibung                                                                                                                                                                                                                                                                           |
|----------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Client Anfrage       | Der Client schickt eine Anfrage an den Server mit Verschlüsselungsoptionen.                                                                                                                                                                                                            |
| Server Anfrage       | Der Server schickt eine Antwort mit seinem Öffentlichen-Schlüssel.                                                                                                                                                                                                                     |
| Server überprüfung   | Der Client überprüft nun den Schlüssel des Servers. Ist dieser ungültig wird die Verbindung abgebrochen ist sie gültig wird fortgefahren. Dafür generiert der Client einen Sitzungsschlüssel nur für diese Verbindung und verschlüsselt ihn mit dem Öffentlichen-Schlüssel des Servers |
| Client Annahme       | Der Server kann die Anfrage mit dem Sitzungsschlüssel nun mit seinem privaten-Schlüssel entschlüsseln.                                                                                                                                                                                 |
| Verbindung aufgebaut | Die Verbindung ist nun aufgebaut und es können nun alle HTTP-Anfragen verschlüsselt übertragen werden, bis die Übertragung abgebrochen wird.   
