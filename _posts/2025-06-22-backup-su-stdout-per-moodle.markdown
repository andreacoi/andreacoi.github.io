---
layout: post
title: "Backup Moodle su stdout - è possibile?"
date: 2025-06-22 11:45:34 +0200
categories: programmazione
excerpt: Quando si ha a che fare con dei server con lo spazio limitato il backup dei corsi di una Piattaforma Moodle può diventare problematico. Ma ho trovato una soluzione creativa.
---
Sono veramente contento di poter dire che ho modificato la procedura standard di Moodle per effettuare i backup.

In sostanza ho fatto un backup del file originale che si trova in webroot/admin/cli/backup.php e l'ho successivamente modificato per permettere a Moodle di scrivere i file .mbz, invece che in un file, DIRETTAMENTE nello stdout di php.

A che pro, direte voi? Beh semplice. Quando si ha a che fare con server di dimensioni tutt'altro che infinite, dove girano sistemi molto grandi, potrebbe essere un problema salvare i file .mbz del corso sul file system.

La scrittura sullo stdout permette, tramite bash (o qualsiasi altra shell POSIX equivalente), di eseguire il piping (utilizzando SSH) verso un altro server (e senza eseguire NESSUN MONTAGGIO!).

Al termine della procedura il file scompare dopo essere stato trasferito sul server di destinazione.

Allego, per concludere, il comando che consente di scrivere il file su un server remoto:

`php /percorso/della/webroot/moodle/admin/cli/backup-mod.php --courseshortname="MYCOURSE01" --destination="-" | ssh user@server_remoto -pXXXX 'cat > /la-mia-cartella-a-scelta-sul-server-remoto/MYCOURSE01.mbz'`

**EDIT del 25/09/2025: Il sistema Moodle alloca COMUNQUE una certa quantità di memoria disco per poter effettuare questo tipo di trasferimento.**
