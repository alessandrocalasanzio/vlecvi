# Vlecvi — vlecvi.com

Sito personale di Alessandro (Vlecvi), scritto interamente da lui. React 18 / Create React App, deploy su GitHub Pages con dominio custom. Nessun backend: sito statico, contenuti hardcoded nei componenti.

## Stack

- **Create React App** (`react-scripts` 5.0.1), JavaScript puro (no TypeScript).
- **React 18**, `react-router-dom` v6 (`BrowserRouter`, `Routes`/`Route`), code splitting per rotta via `React.lazy` + `Suspense`.
- **Bootstrap 5** + `react-bootstrap` (Container/Row/Col, Carousel, Card, Button). Bootstrap JS bundle importato in `src/index.js`.
- **jQuery** ancora presente come dipendenza ma non essenziale: attenzione a non reintrodurre CDN Bootstrap4/jQuery/Popper in `public/index.html`, è già successo che coesistessero due Bootstrap in conflitto (vedi "Incidenti noti").
- Animazioni: `AOS` (scroll reveal), `react-reveal` (`Fade`).
- Altro: `react-slick`/`react-responsive-carousel`, `js-cookie` (cookie "isFirstVisit" per mostrare lo splash `0.Loading.js` solo alla prima visita, 9s), `react-icons`, `@giscus/react`, `@emotion/react`, `react-copy-to-clipboard`.
- Deploy: pacchetto `gh-pages` (non GitHub Actions custom — il branch `gh-pages` triggera il workflow automatico "pages build and deployment" di GitHub).

## Struttura del progetto

```
public/
  index.html          # NON deve contenere CDN Bootstrap4/jQuery/Popper (rimossi, causavano conflitti)
  CNAME                # DEVE stare qui (non solo alla root del repo) per sopravvivere alla build
  .nojekyll             # salta il processing Jekyll di GitHub Pages
src/
  App.js               # tutte le rotte + lazy loading
  App.css              # UNICO foglio di stile globale, ~2200+ righe (vedi sezione dedicata sotto)
  index.js             # import Bootstrap CSS/JS, bootstrap dell'app React
  components/
    0.Loading.js        # splash screen iniziale
    1.Navbar.js / 1.1Navbar1.js   # due varianti navbar (quasi identiche, mantenerle in sync se si tocca una)
    2.Chi.js             # preview "Chi Sono" in home (testo con effetto typewriter + immagine w1.jpg)
    3.Progetti.js / 3.1Progetti1.js   # preview "Progetti" in home (due varianti)
    4.Blog.js            # preview "Blog" in home
    5.Contattis.js / 5.1Contatti1.js  # preview "Contatti" in home (due varianti)
    Schede/              # componenti di pagina (una per rotta principale), assemblano Navbar + i pezzi sotto
      1.SchedaChi.js      # /chisono  → Bio + ChiFiltro
      2.SchedaBlog.js     # /blog
      3.SchedaProgetti.js # /progetti
      4.SchedaContatti.js # /contatti
    ChiComponenti/
      1.Bio.js            # testo biografia (.testoBio) + foto (.resizeImg)
      ChiFiltro.js        # filtri dropdown Around/Mostre/Liste Personali + elenco (Luoghi, Musei, liste Notion esterne)
      Musica.js            # embed playlist Spotify (iframe, ricordarsi sempre `title` univoco)
      Luoghi/              # una pagina per ogni viaggio (Barcellona.js, Parigi.js, ecc.) — tutte strutturalmente identiche
      Mappa/, Musei/        # componenti mappa e pagine mostre
    BlogComponenti/
      BlogFiltro.js        # filtri + elenco articoli blog
      Articoli/            # un file per articolo (Excel.js, Notion.js, VlecviBot.js, WebList.js, LavoroLista.js)
    ContattiComponenti/
      1.ContainerContatti.js  # testo contatti (stessa classe .testoBio) + link social
  img/                  # tutte le immagini statiche, import diretti nei componenti
```

Pattern ricorrente in quasi ogni pagina di dettaglio (Luoghi/Articoli): `<Navbar/>` + colonna con label verticale (`.vertical-rl`) + contenuto + pulsante PayPal (`form action="https://paypal.me/acalasanzio?..."`) + `<BlogFiltro/>` o `<ChiFiltro/>` in fondo per continuare la navigazione.

## `App.css`: foglio di stile unico e fragile

Non ci sono CSS module o styled-components: **tutto** lo stile del sito passa da un solo file `App.css` di oltre 2200 righe, accumulato nel tempo con molti `!important` e diverse media query non scoped che si sovrappongono. Prima di modificarlo:

1. **Cerca tutte le occorrenze della classe** in App.css (spesso una classe ha 2-4 regole sparse in punti diversi del file, incluse dentro media query lontane dalla dichiarazione base).
2. **Verifica sempre desktop E mobile dopo ogni modifica** — regole pensate per un contesto vengono ereditate silenziosamente in un altro (vedi esempi sotto). Usa gli strumenti chrome-devtools (sezione debug) a ~1440px e ~412px come minimo.
3. Diffida di regole "globali" non scoped a un componente: es. `.row > * { width: auto !important; padding:0; margin:0 }` (residuo di un fix passato) e `.noOver { overflow-y: hidden !important }` (riga ~136, NON dentro nessuna media query) hanno effetti collaterali su più pagine.

### Classi chiave e trappole già scoperte

- **`.vertical-rl` / `.vertical-rl1`** — le etichette verticali "More to Chi Sono / Progetti / Blog / Contatti", "Biografia", "Info Contatti" (writing-mode: vertical-rl + rotate:-180deg). L'utente ci tiene che restino **grandi e "con carattere"** (40px su desktop), non delle micro-label — è già successo che un redesign le rimpicciolisse troppo e sia stato esplicitamente respinto. Sotto i 480px il font va ridotto (28px) e sotto 355px ulteriormente (24px) altrimenti il testo va a capo su una "colonna" invisibile tagliata da `overflow-x:hidden` (bug "Chi Sono" → "Chi Son").
- **`.testoBio`** (usata da `1.Bio.js` e `1.ContainerContatti.js`) — su desktop è `position:absolute; height:350px; overflow:auto`: un riquadro con **scroll interno** voluto (l'utente ci tiene: il testo scorre dentro il box, non allunga la pagina). Nel layout mobile impilato (`@media max-width:1090px`, scoped a `.noOver`) deve restare un contenitore scrollabile (`max-height` + `overflow-y:auto`), **non** `height:auto; overflow:visible` — quest'ultimo sembra "giusto" per non tagliare il testo ma in realtà rompe l'esperienza a scorrimento che il sito aveva da sempre.
- **`.noOver`** — classe sul `Container` di Bio/Contatti che attiva il layout impilato "foto sopra, testo sotto" sotto i 1090px (per via del bug storico "foto si sovrappone al testo" causato da `.row > *`). Ha `overflow-y:hidden !important` globale — se aggiungi contenuto/altezza dentro un elemento `.noOver`, verifica che non venga clippato.
- **`.hoverBlog` / `.mb-1`** — righe di liste (Luoghi, Articoli, filtri) che diventano nere con testo bianco all'hover. Le regole CSS (`.hoverBlog:hover a`, `.hoverBlog:hover h5`, `.hoverBlog:hover small`) targettizzano **tag specifici**: se il titolo è dentro uno `<span>` invece che `<a>` o `<h5>`, l'hover non lo colora più (bug reale già capitato). `.mb-1` inoltre ha `margin-left/right:auto` che centra il testo SE è un flex-item ristretto — per avere testo flush-left (come nel Blog) il `Link`/`<a>` deve essere l'elemento block esterno, non un item dentro un `div.d-flex.justify-content-between` con più fratelli.
- **`.btnBlog`** — condivisa sia dai pulsanti della barra filtri (Around/Mostre/Liste Personali, Mostra Tutti/Finanze/...) sia dalle **voci dentro i dropdown-menu** (World Map, Around: Italia...). Sotto i 600px ha `width:auto !important` pensato per la barra filtri, che però restringe anche le voci del dropdown alla lunghezza del testo (box di larghezze diverse). Se tocchi `.btnBlog` per un contesto, verifica sempre l'altro contesto. `.btnBlog.active` va tenuto sincronizzato col nero/bianco dell'hover, altrimenti Bootstrap applica testo bianco su sfondo bianco (illeggibile) sulla voce di filtro attiva.
- **`.foldImg`** — immagine sotto la label "Chi Sono" in home: serve una regola base `width/height:100%; object-fit:cover`, non solo override in media query isolate.
- Font principale: **'Space Grotesk'**, caricato via Google Fonts in `public/index.html` con `preconnect` + `display=swap`.
- Redesign B/N minimalista (bordi neri puri, `border-radius:0` ovunque, scala tipografica in `:root`) applicato in una sessione precedente: mantenere questo stile per qualsiasi nuova UI.

## Deploy

```
npm run build     # = react-scripts build && copy build\index.html build\404.html (SPA fallback per GitHub Pages)
npm run deploy     # = gh-pages -d build --dotfiles
```

Checklist prima di un deploy:
- `public/CNAME` deve esistere (contenuto: `vlecvi.com`) — se manca o è solo alla root del repo, il deploy pubblica senza CNAME e il dominio custom smette di funzionare (è già successo, sito 404 finché non si è ricopiato CNAME dentro `public/` e rideployato).
- Lo script `deploy` include `--dotfiles`: il pacchetto `gh-pages` **esclude i dotfile per default**, quindi senza questo flag `.nojekyll` (e qualsiasi altro dotfile in `public/`) non finisce mai sul branch `gh-pages` nonostante sia presente in `build/`. Verificato via API che senza il flag `.nojekyll` risultava assente dal tree del branch pubblicato.
- Il workflow automatico di GitHub Pages ("pages build and deployment") impiega **normalmente 2-2.5 minuti** end-to-end (dato storico verificato via API, non un rallentamento episodico) più eventuale propagazione CDN — non è un sintomo di problemi, è la normalità della piattaforma.
- `git push` su GitHub a volte ritorna un errore 500 transitorio: ripetere il push di solito risolve.
- Verifica live: `curl -s -o /dev/null -w "%{http_code}" https://vlecvi.com/` deve dare `200`.

## Debug/QA: come verificare davvero (non solo leggendo il codice)

Per bug di CSS/responsive/hover, **leggere il codice non basta** — la cascata di `App.css` è troppo intrecciata per prevedere l'esito solo a occhio. Il metodo che ha funzionato in questa sessione:

1. `npm start` (dev server su `localhost:3000`; se la porta è occupata probabilmente un'istanza precedente è già viva e serve il codice più recente).
2. Strumenti `chrome-devtools` MCP: `new_page`/`navigate_page` per aprire una rotta, `emulate` con `viewport: "412x915,mobile,touch"` per il mobile e `"1440x900"` per il desktop, `take_screenshot` per il confronto visivo, `take_snapshot` per ottenere gli `uid` degli elementi, `hover`/`click` per **triggerare davvero** gli stati `:hover`/`.active` (un `dispatchEvent('mouseover')` via JS NON attiva `:hover` CSS — serve l'hover reale via CDP), `evaluate_script` per leggere `getComputedStyle(...)`, `getBoundingClientRect()`, `scrollHeight` vs `clientHeight` (per capire se un box sta effettivamente clippando contenuto).
3. Prima di dichiarare un bug risolto: build di produzione pulita (`CI=false npm run build`, zero warning ESLint/babel) **e** controllo visivo sia mobile sia desktop.
4. A fine sessione di debug: chiudere i processi node avviati (`taskkill //F //IM node.exe //T` su Windows) per non lasciare dev server orfani in background.

## Incidenti noti (per non ripeterli)

- **CNAME fuori da `public/`** → deploy pubblica senza dominio custom, sito 404 su vlecvi.com (github.io funzionava). Fix: copiare CNAME dentro `public/`.
- **CDN Bootstrap4/jQuery/Popper in `public/index.html`** in conflitto con Bootstrap 5 → causava sovrapposizione testo/foto sotto i 1089px nella pagina Chi Sono. Rimossi i CDN legacy.
- **`gh-pages` esclude i dotfile di default** → `.nojekyll` non veniva mai pubblicato finché non si è aggiunto `--dotfiles` allo script `deploy`.
- **Warning `babel-preset-react-app` / `@babel/plugin-proposal-private-property-in-object`**: quel pacchetto è un placeholder che stampa SEMPRE il warning se rileva `babel-preset-react-app` nello stack, indipendentemente da `package.json` — aggiungerlo a `devDependencies` da solo NON risolve. Fix reale: campo `"overrides"` in `package.json` che forza npm a installare la versione reale del pacchetto (`^7.21.11`) al posto del placeholder.
- **Fix "sposta un `<a>` a `<span>` per un warning ESLint (`anchor-is-valid`)** senza guardare il CSS collegato → rompe silenziosamente l'hover color o la centratura del testo, perché le regole `.hoverBlog:hover a`/`.mb-1` sono legate al tag specifico. Ogni volta che si tocca un tag `<a>`/`<Link>` per motivi di accessibilità, ricontrollare le regole CSS che lo targettizzano per tag.
- **Subagent con `isolation: "worktree"`**: il worktree parte dall'ultimo commit, NON include modifiche uncommitted della sessione corrente. Se ci sono modifiche locali non ancora committate sugli stessi file, il diff del subagent va riapplicato manualmente (`git diff` nel worktree → `git apply` nella working copy principale) invece di copiare i file di peso, altrimenti si perdono le modifiche uncommitted.

## Convenzioni di lavoro con l'utente

- Utente: sviluppatore autodidatta, italiano, ha scritto tutto il sito da solo. Preferisce spiegazioni sintetiche.
- Workflow git: singolo branch `master`, commit diretti (no PR). L'utente a volte fa lui stesso commit/push/deploy dopo aver rivisto le modifiche in locale, altre volte chiede esplicitamente di procedere in autonomia fino al deploy — chiedere se non è specificato, non dare per scontato il permesso di pushare/deployare.
- Preferisce che modifiche di design mantengano il carattere "grande/con personalità" delle etichette verticali, non micro-label anonime.
- Per bug visivi complessi (responsive, hover, allineamento), aspettarsi che serva ispezione browser reale, non solo lettura del codice — vedi sezione Debug/QA sopra.