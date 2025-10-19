---
layout: post
title: "Dotupdater, sincronizza le tue impostazioni con Github"
date: 2024-12-16 11:45:34 +0200
categories: utility
excerpt: Spesso può capitare di dover gestire le stesse configurazioni di più programmi su diversi PC, magari tra ufficio, casa e portatile aziendale. Utilizzando Linux ho scritto un software che fa al caso mio. Ho utilizzato RUST con diversi crate. Vediamo come.
---
Avere a che fare con diverse installazioni Linux, benché siano tutte sulla stessa distro, su diversi computer collocati in posti diversi può essere veramente un PITA (*Pain In The Ass*) se si vogliono gestire le configurazioni dei diversi programmi installati. Soprattutto se queste configurazioni variano anche nel tempo.

Fortunamente Debian (e anche molte altre distro) salvano i loro file di configurazione all'interno della cartella `~./config/nome-programma`.

Questo potrebbe essere, all'inizio, vantaggioso perché conoscendo il nome del programma e le modalità di salvataggio delle configurazioni è relativamente facile fare copia/incolla del testo contenuto in ogni singolo file di configurazione e portarlo all'interno della macchina da configurare. Chiaramente questo diventa poco pratico quando le configurazioni cambiano frequentemente e quando le macchine da configurare sono in un numero abbastanza importante.

## L'idea
Viste le premesse, ho creato **prima** un repository su Github dove nel branch main è presente solo il README.md e ho creato **n branch** quanti sono i programmi con delle configurazioni personalizzate:\
es.
- nvim;
- tmux;
- ...

Dopodiché però ho notato che riuscivo a eseguire solo MANUALMENTE le operazioni di:
- fetch;
- pull;

e ho pensato di scrivere uno script in BASH per eseguire all'avvio del sistema operativo le operazioni di `fetch and pull`.

### Il test RUST
Essendo attivo nello studio di RUST, mi sono detto: perché non convertire l'idea dello script in BASH in un vero e proprio programma scritto in RUST, con un sistema di log degli eventi e degli errori? E così è nato [dotupdater](https://github.com/andreacoi/dotupdater) che ho subito pubblicato in un repo public e reso disponibile a chiunque ne avesse bisogno.

## Configurazione
Dopo la prima configurazione, eseguita via file .toml è sufficiente aggiungere il programma ai programmi avviati in fase di startup sulla propria distro linux e lui farà tutto in automatico.
Come detto, è presente anche un sistema di logging che avvisa se non è presente connessione a internet o se non è possibile eseguire il pull per delle modifiche già presenti nel tree ma non committate.
