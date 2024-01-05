---
layout: post
id: 1
title: "Nuovo blog. Ancora. Ma con NextJS!"
alias: "01-nuovo-blog"
excerpt: "Ancora una volta ci siamo. Ancora una volta ci ho provato. Ecco il mio ennesimo tentativo di realizzare un blog in maniera del tutto gratuito, utilizzando le Github Pages, NextJS, e Markdown. Vi racconto come è andata."
pubblicazione: "05-01-2024 17.40.00"
categoria: "Info"
tags: "markdown, nextjs, blog"
---

## Ci risiamo.

Salve a tutti ragazzi. Avendo subito la distruzione totale del mio precedente blog **a causa di una dimenticanza nell'inesorabile rinnovo dell'annualità di OVH**, nel corso di quest'anno, un po' a tempo perso, un po' per curiosità di sperimentare con NextJS e React, ho iniziato a costruire questo blog sfruttando la possibilità offerta da Github di hostare gratuitamente un applicazione NextJS per creare questo blog, così come lo vedete.

### Processo di creazione e nascita dell'idea

Partiamo dal disastro. Prima di iniziare a pensare di creare un nuovo blog con NextJS, avevo un blog hostato su OVH realizzato con Processwire. Lo avevo configurato veramente bene, era organizzato con categorie e voci di menu e interpretava il markdown senza alcun problema. Avendo un interfaccia admin, quando dovevo pubblicare un nuovo articolo, mi bastava preparare un file .md, fare copia incolla, trovare un'immagine, salvare l'articolo e si andava online.

Devo dire che mi sono trovato veramente bene; il tenore tecnico degli articoli era più alto, la mia idea di utilizzare un blog come repo documentale si era rivelata una buona idea. Ma, c'è sempre un ma. Per farla breve, ho dimenticato come un vero deficiente di rinnovare la macchina OVH e il dominio che utilizzavo per ospitare il blog.

#### Il tempo lenisce tutti i dolori

I provider internet (giustamente) non tengono conto del tempo che hai passato per produrre dei contenuti o per realizzare un template. Quando arriva la scadenza, staccano i servizi. Funziona così. Se paghi rimani online, altrimenti "adieu". E così è andata anche questa volta.

E devo dire che ci sono rimasto veramente male i primi giorni.

La quantità di "materiale tecnico" che avevo prodotto era veramente importante, ma soprattutto era _verticale_. Trattavo temi legati allo sviluppo web, ai sistemi operativi, all'elettronica. Erano tutti post che prima di _essere post_ erano _considerazioni, pensieri liberi, appunti, guide e how-to per il me di domani, memorie_.

A quasi un anno di distanza da questo piccolo inconveniente, mi sono chiesto se non fosse il caso di acquistare nuovamente il nome a dominio, rimettere su un hostng di buona qualità e ripartire con la pubblicazione di contenuti. Dopo un po' di riflessione mi sono detto che sarebbe stato meglio impiegare il denaro di hosting e connettività in altro e cercare di ricreare un blog utilizzando solo strumenti gratuiti.
Ho iniziato a fare scouting sulla rete e ho pensato di (ri)utilizzare le Github Pages. Ho scritto riutilizzare perché prima del blog su Processwire avevo un blog su GHPages fatto in Jekyll.

Questa volta, però, sono stato pervaso da uno stimolo nuovo. Ho infatti scoperto che da qualche tempo è disponibile un sistema CI/CD\* per eseguire il deploy di un'applicazione NextJS su Github Pages.

Quindi, come spesso accade, da un'inconveniente è nata un'opportunità. Ho colto al volo la questione perché mi piaceva l'idea di comprendere meglio React e le sue logiche e sono stato, sin da subito, rapito dalle modalità di funzionamento del framework CSS Tailwind.

Accantonando l'inconveniente ho iniziato a lavorare sul template e sulla palette, e più il tempo passava, più facilmente dimenticavo il cruccio di aver perso "i miei post" e il mio vecchio blog.

#### Tecnologia e componenti: testando si impara

Questo blog, così come lo state vedendo è progettato utilizzando tre componenti fondamentali:

- React;
- NextJS;
- Tailwind CSS;

**React**
React è una libreria frontend Javascript per creare interfacce utente. La curva di apprendimento è molto ripida perché in molti casi può risultare controintuitivo. Mantiene la sintassi base di ES6, ma ha un sistema di dichiarazione delle variabili leggermente più stringente (a livello di _scope_). Il templating è soggetto a un controllo sintattico forte e può essere organizzato in componenti.
Un componente può essere funzionale (basato su funzioni) o basato su classi. Al render di tali componenti JSX (che viene effettuato tramite la libreria React DOM) possono essere passati al componente i cosìddetti **props**, che, sostanzialmente, sono dei parametri della funzione stessa.

**NextJS**
NextJS è un framework per applicazioni web basato su React, sviluppato da Vercel. Ho creato un sistema di routing statico grazie ad una delle feature principali del framework. In particolare, con la SSG (_Static Site Generator_) è possibile generare le rotte e i contenuti al build time (in fase di compilazione).
Un'altra feature che ho implementato, grazie ad un plugin npm, è la codifica da markdown in html, migliorando sintassi e focus durante la stesura dei contenuti.

##### Una piccola parentesi: un tentativo con MongoDB Atlas

Prima di elaborare l'idea di utilizzare dei file .md per ogni singolo post avevo pensato di creare una base dati su MongoDB e demandare lo stoccaggio dei dati ad Atlas (il piano free di MongoDB per il salvataggio dei dati in BSON). Ciò è risultato semplice e possibile affidandomi al rendering dinamico supportato da NextJS (SSR - Server Side Rendering) in locale (o comunque con un server normale), ma impossibile sulle GH Pages che "creano" le pagine statiche in fase di compilazione. Non potendo soddisfare le _promise_, Github non sapeva cosa compilare e restituiva errore al _build_.
Ho così deciso di ricorrere a dei semplici file .md che vengono convertiti in HTML alla compilazione di tutta la giostra.

**Tailwind CSS**
NextJS adotta come proprio framework CSS base Tailwind CSS.
Benché sia possibile utilizzare Tailwind CSS in appoggio a qualsivoglia tecnologia frontend web, credo che possa dare il suo meglio con NextJS. Ho trovato molto comoda la gestione delle griglie, dei breakpoint, dei colori codificati tramite classi e delle classi personalizzate al build time. Framework CSS ce ne sono a migliaia, ma devo dire che è davvero semplice ottenere un layout o applicare uno stile utilizzando Tailwind.

**Piccolo appunto su Typescript**
I formati file utilizzabili su NextJS sono essenzialmente due:

- Typescript (.tsx);
- Javascript (.jsx);

Typescript è un _dialetto_ di Javascript, sviluppato da Microsoft, a tipizzazione forte. Una delle caratteristiche principali di Typescript, infatti, è il fatto che il linguaggio stesso ti costringa a dichiarare il _tipo_ di qualsiasi variabile, sia che essa venga banalmente dichiarata normalmente dal programmatore, sia che si tratti del risultato del ritorno di una funzione a runtime.
Ciò obbliga lo sviluppatore a scrivere codice migliore e garantisce un controllo migliore sul ciclo di vita dell'applicazione.

## Ciao!

Che dire, vi ho elencato i punti salienti riguardanti la creazione del blog. Spero di essere costante nel produrre contenuti e soprattutto che li possiate trovare interessanti.

**Let's start again.**
