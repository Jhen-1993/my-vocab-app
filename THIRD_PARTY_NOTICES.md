# Third-party notices

## WordNet part-of-speech reference

The app's compact part-of-speech labels were produced by cross-referencing
English headwords with the noun, verb, adjective, and adverb indexes from
WordNet. The website does not include WordNet definitions, synsets, examples,
or database files; it distributes only its own compact labels. Terms not
present in the index were manually tagged from their card meaning and example
context.

WordNet Release 3.0 Copyright 2006 by Princeton University. All rights
reserved.

This work is based on or incorporates elements of the Princeton University
WordNet database. The following notice and disclaimer are retained for the
derived part-of-speech index:

> This software and database is being provided to you, the LICENSEE, by
> Princeton University under the following license. By obtaining, using and/or
> copying this software and database, you agree that you have read,
> understood, and will comply with these terms and conditions. Permission to
> use, copy, modify and distribute this software and database and its
> documentation for any purpose and without fee or royalty is hereby granted,
> provided that you agree to comply with the following copyright notice and
> statements, including the disclaimer, and that the same appear on all copies
> of the software, database and documentation, including modifications that
> you make for internal use or for distribution.
>
> WordNet Release 3.0 Copyright 2006 by Princeton University. All rights
> reserved. THIS SOFTWARE AND DATABASE IS PROVIDED “AS IS” AND PRINCETON
> UNIVERSITY MAKES NO REPRESENTATIONS OR WARRANTIES, EXPRESS OR IMPLIED. BY
> WAY OF EXAMPLE, BUT NOT LIMITATION, PRINCETON UNIVERSITY MAKES NO
> REPRESENTATIONS OR WARRANTIES OF MERCHANTABILITY OR FITNESS FOR ANY
> PARTICULAR PURPOSE OR THAT THE USE OF THE LICENSED SOFTWARE, DATABASE OR
> DOCUMENTATION WILL NOT INFRINGE ANY THIRD PARTY PATENTS, COPYRIGHTS,
> TRADEMARKS OR OTHER RIGHTS. The name of Princeton University or Princeton
> may not be used in advertising or publicity pertaining to distribution of the
> software and/or database. Title to copyright in this software, database and
> any associated documentation shall at all times remain with Princeton
> University and LICENSEE agrees to preserve same.

Source and full license: https://wordnet.princeton.edu/license-and-commercial-use

## Stanza part-of-speech audit

[Stanza](https://stanfordnlp.github.io/stanza/) by the Stanford NLP Group was
used in the local development workflow to audit the part of speech used in
example sentences. The audit labels were then checked and supplemented
manually.

Stanza is licensed under the Apache License, Version 2.0. It is **not**
bundled with, downloaded by, or executed in the published website; visitors do
not need to install it and the site does not send vocabulary data to Stanza.

## ECDICT

The 508 single-word replacement cards in `data/real-word-extension.js` use
selected English–Chinese glossary data derived from
[ECDICT](https://github.com/skywind3000/ecdict), maintained by skywind3000
and contributors. ECDICT is provided under the MIT License.

Only selected headwords and concise Chinese glosses are included in this
project. The original ECDICT dataset and its build tooling are not loaded by
the published website.

## Tatoeba bilingual example sentences

`data/tatoeba-examples.js` contains selected bilingual example pairs from the
[Tatoeba Project](https://tatoeba.org/). The source registry stored in that
file records the sentence ID, author, translation ID, and licence for every
included pair. Individual entries are licensed either **CC BY 2.0 FR** or
**CC0 1.0**, as shown in that registry.

These examples are used only to replace older automatic template sentences.
They are static data in the published site: no visitor data is sent to
Tatoeba, and the website makes no runtime request to the Tatoeba API.
