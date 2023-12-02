## Datluj.cz

<details>
  <summary><b>Detail</b></summary>

  **Jedná se projekt v průběhu kurzu React2. Slouží k zopakování zopakování doposud získaných znalostí.**
  **K záležitostem, které jsou nad rámec zadání nebyl žáden postup. Jejich vytvoření bylo postaveno na dobrovolné bázi.**
  **Je postaven na Vite balíčku.**
  
  Pro spuštění projektu stačí v terminálu zadat příkaz:
  **npm run dev**

  Následně se v terminálu zobrazí adresa. Aby ji bylo možné v prohlížeči zobrazit, je nutné při kliku na na ní držet **ctrl/cmd**.

  Originální zadání projektu:
  V následujících cvičeních budeme postupně vyvíjet aplikaci jménem Datluj.cz, která bude sloužit k tréningu psaní všemi deseti. Aplikace bude fungovat tak, že se na obrazovace budou postupně objevovat náhodá slova, které uživatel musí stihnout napsat na klávesnici.

**Část 1:**

1. Udělejte si fork [repozitáře](https://github.com/Czechitas-podklady-WEB/datluj.cz) se zadáním celého projektu. Nainstalujte závislosti a prohlédněte si strukturu projektu. Po spuštění stránky uvidíte na obrazovce jedno slovo vykreslené pomocí komponenty **Wordbox**.
2. Prostudujte si zdrojový kód a seznamte se s tím, jak aplikace funguje.
3. Prohlédněte si kompnentu **Stage**. Prozatím si nevšímejte funkce **generateWord**, tu máme připravenou na později. Ve stavu komponenty nemáme uložen jen jeden řetězec ale celé pole slov. To je také příprava na později. Dokud neřekneme jinak, budeme pracovat s jednoprvkovým polem.
4. Upravte komponentu **Wordbox** tak, že pověsíte posluchače události **keyUp** na **document**. Pokud uživatel napsal správně první písmenko slova, toto písmenko ze slova umažte. Takto pokračujte dokud uživatel nenapíše celé slovo. V posluchači budete používat stav **lettersLeft** a bude potřeba se vyhnout jeho zastarávání (stale state). Použijte probíranou techniku, kdy posluchače události měníte svépomocí. Do závislostí **useEffectu** bude potřeba přidat stav **lettersLeft**.
5. Jakmile uživatel napíše správně celé slovo, na stránce zůstane viset prázdná komponenta **Wordbox**. Nechejte ji zatím viset.

**Část 2:**
V tomto cvičení zařídíme, aby po napsání slova ihned naskočilo slovo další.

1. Komponenta **Wordbox** musí nějakým způsobem informovat svého rodiče o tom, že uživatel správně napsal zadané slovo. Za tímto účelem přidejte do props v komponentě **Wordbox** callback **onFinish**.
2. V posluchači události **keyup** zařiďte, že pokud uživatel napsal správně poslední písmenko, místo nastavení stavu zavoláte rovnou funkci **onFinish**.
3. V komponentě **Stage** vyrobte funkci **handleFinish**, která nastaví stav **words** na prázdné pole. Předejte tuto funkci komponentě **Wordbox**. Takto zajistíme _unmount_ komponenty po správném napsání slova.
4. Místo nastavování stavu na prázdné pole můžeme rovnou vygenerovat nové slovo – pomocí připravené funkce **generateWord**. Vygenerujte slovo délky 6. Dejte však pozor, že do stavu je vždy potřeba nastavit pole, tedy v tomto případě pole o jednom prvku.
5. Vyzkoušejte, že po napsání slova ihned přiskočí další.

**Část 3:**
Zařídíme zpětnou vazbu pro uživatele zda napsal správné písmeno. Budeme chtít, aby slovo při chybě změnilo barvu.

1. V komponentě **Wordbox** vytvořte nový pravdivostní stav **[mistake, setMistake]**, který bude říkat, zda uživatel udělal překlep. Na začátku bude stav nastaven na **false**.
2. Pokud má stav **mistake** hodnotu **true**, vykreslete slovo s třídou **wordbox wordbox--mistake**.
3. V reakci na událost **keyup** správně nastave stav **mistake** na **true** nebo **false** dle toho, zda uživatel napsal správné písmeno.
4. Vyzkoušejte, že aplikace funguje správně.
5. Zamyslete se nad tím, zda nám hrozí problém se zastaráním stavu **mistake** a zdůvodněte, proč ano nebo proč ne.

**Část 4:**
Přidáme možnost zobrazovat více slov najednou.

Pokud na obrazovce vidíme více slov, vždy píšeme první na seznamu. Takovému slovu říkáme, že je aktivní.

1. Do komponenty **Wordbox** přidejte _prop_ **active**, která říká, zda je komponenta zrovna aktivní. Uvnitř **useEffectu** přidávejte/odebírejte posluchač události **keyup** pouze v případě, že prop active má hodnotu **true**. Tím zaručíme, že klávesy bude poslouchat pouze aktivní komponenta.
2. Přidejte prop **active** do seznamu závislostí pro **useEffect**, aby se při její změně efekt spustil.
3. V komponentě **Stage** budeme nyní ve stavu udržovat pole tří slov. Zařiďte, aby pouze první slovo v seznamu mělu _prop_ **active** nastaveno na **true**. Vždy chceme psát pouze první slovo.
4. Ve funkci **handleFinish** nyní musíme odstranit slovo ze začátku seznamu a vygenerovat nové slovo na konec, abychom si udržovali pořád stejný počet zobrazených slov.
5. Vyzkoušejte, že vaše aplikace správně funguje.

**Část 5:**
Přidáme do naší vyúkové hry počítání chyb. Vždy, když komponenta **Wordbox** zaznamená chybu, dá o tom vědět svému rodiči a ten aktualizuje svůj stav.

V této chvíli věříme, že jste dostatečně zkušení na to, aby vám popis výše stačil k dokončení cvičení. Pokud se přesto cítíte nejistě, můžete následovat podrobný popis:

1. Do komponenty **Stage** přidejte stav **[mistakes, setMistakes]** s prvotní hodnotou **0**. Zobrazte stav na příslušném místě v komponentě.
2. Přidejte do komponenty **Wordbox** callback **onMistake**, který bude komponentu **Stage** informovat o překlepu.
3. V komonentě **Stage** vytvořte handler **handleMistake**, který svýší stav **mistake** o jedna.
4. V komponentě **Wordbox** zavolejte funkci **onMistake** pokaždé, když nastane chyba. To je potřeba udělat v handleru události **keyup**. Pravděpodobně tušíte, že nám takto hrozí zastarání _prop_ **onMistake**.
5. V komponentě **Wordbox** přidejte _prop_ **onMistake** do závislostí v **useEffectu**, aby nám nezastarala.
6. Vyzkoušejte, že aplikace správně funguje.


</details>

## Datluj.cz

<details>
  <summary><b>Detail</b></summary>

   **This is project was at the beginning of the React2 course. It is used to review the knowledge from the React1 course created by Czechitas.**
   **For the project Vite package is used.**

   To start the project, just enter the following command in the terminal:
   **npm run dev**

   The address is then displayed in the terminal. To view it in the browser, you must hold **ctrl/cmd** while clicking on it.

   Assignment:
   Make a simple e-shop in React for the new furniture chain XXXMuck. The website will consist of two pages: products offer and product detail.

  1. Use **npm init kodim-app@latest** xxxmuck to create the basic structure of the web application.
  2. Review the [main page design](https://kodim.cz/cms/assets/vyvoj-webu/react-2/lekce/opakovani/projektik/xxxmuck/homepage.png) of the store. You don't have to follow it exactly, just take it as inspiration. Before you start coding, break down the structure of the page into clearly named components. Let the home page be contained entirely in the **HomePage** component.
  3. Study the output of the following [API endpoint](https://apps.kodim.cz/react-2/xxxmuck/products), which returns a list of products in JSON format.
  4. Create the individual components and build the resulting page from them. Retrieve the data for each product from the API.
  5. Use the **npm install react-router-dom** command to install React Router.
  6. Add routing to your project. The **HomePage** component will have the path **/**.
  7. Create an empty **ProductPage** component and have it under the **/product** path.
  8. Complete the **ProductPage** component according to the [provided design](https://kodim.cz/cms/assets/vyvoj-webu/react-2/lekce/opakovani/projektik/xxxmuck/productpage.png).
  9. When you click on a product on the main page, the **ProductPage** will be displayed without the product yet.
  10. Display the selected product on the **ProductPage**. To do this, you need to pass the **id** of the product in the URL of the page and use the **useParams** hook. You can find individual products under their **id** at [this endpoint](https://apps.kodim.cz/react-2/xxxmuck/products/2c6VoCaD). The ordering button will not work yet.
   

</details>

