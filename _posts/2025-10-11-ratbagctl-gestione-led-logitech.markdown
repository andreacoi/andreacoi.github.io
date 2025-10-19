---
layout: post
title: "RatbagCTL, applet CLI per la gestione dei LED delle periferiche Logitech"
date: 2025-10-11 11:45:34 +0200
categories: tools
excerpt: Solitamente, gestire i LED delle tastiere Logitech su Linux può rivelarsi difficoltoso o nascondere alcune insidie. Ho trovato un software che mi toglie le castagne dal fuoco.
---
Ho cambiato decine e decine di tastiere nella mia vita al PC.

Dopo qualche anno passato con la [Microsoft Natural Ergonomic Keyboard 4000](https://en.wikipedia.org/wiki/Microsoft_ergonomic_keyboards) comprata da un buyer israeliano su Ebay, questa stupenda tastiera ha deciso di abbandonarmi.

Sono quindi passato alle tastiere con form factor TKL, prevalentemente meccaniche. Dopo aver avuto per circa due anni la Durgod Taurus K320, ho deciso di prendere una Logitech GPRO retroilluminata RGB con l'idea di settare i suoi LED fissi sul bianco (non sono un fan del [nyancat](https://gist.githubusercontent.com/brudnak/aba00c9a1c92d226f68e8ad8ba1e0a40/raw/e1e4a92f6072d15014f19aa8903d24a1ac0c41a4/nyan-cat.gif))).

Dopo aver acquistato la tastiera ho cercato un software Linux per la gestione dei LED ([OpenRGB](https://openrgb.org/)) e ho notato che con il nuovo kernel presente con Debian 13, il mio mouse Corsair M65 perdeva dei click in maniera del tutto randomica, facendomi innervosire non poco.

Quindi dopo aver disinstallato OpenRGB ho provato a scrivermi da solo un driver in C per scrivere il colore dei LED solo nella memoria della tastiera escludendo il mouse. Ci ho provato andando a intercettare il traffico su `/dev/hidrawX`. Qui ho constatato che non sono ancora abbastanza bravo in C :) .

Durante le mie ricerche ho trovato inconsapevolmente la soluzione: [Ratbag](https://github.com/libratbag/libratbag), un demone DBUS che è in grado addirittura di "scrivere" i profili LED all'interno della "memoria" della mia Logitech GPro. Quindi anche con il sistema operativo non avviato i LED della tastiera assumono il colore bianco settato via CLI.

A titolo informativo il comando per il settaggio del colore è: `ratbagctl device-nicename led 0 set color FFFFFF`.

Semplice no?
