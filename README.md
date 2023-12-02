## Datluj.cz

<details>
  <summary><b>Detail</b></summary>

  **Jedná se projekt v průběhu kurzu React2. Slouží k zopakování zopakování doposud získaných znalostí.**
  **K záležitostem, které jsou nad rámec zadání nebyl žáden postup. Jejich vytvoření bylo postaveno na dobrovolné bázi. Respektive bylo pouze písemné zadání.**
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

   **This is a project during the React2 course. It is used to review the knowledge.**
   **For the features which are not part of the original assignment no procedure was created. Their creation was based on a voluntary basis. There was only a written assignment.**

   To start the project, just enter the following command in the terminal: **npm run dev**

   The address is then displayed in the terminal. To view it in the browser, you must hold ctrl/cmd while clicking on it.

   **Part 1:**
   1. Make a fork of [repository](https://github.com/Czechitas-podklady-WEB/datluj.cz) with the entire project. Install the dependencies and look at the project structure. When you start the page, you will see one word rendered on the screen using the **Wordbox** component.
  2. Study the source code and familiarize yourself with how the application works.
  3. Review the **Stage** component. Ignore the **generateWord** function for now, we have that ready for later. In the component state, we don't just store a single string but a whole array of words. This is also a preparation for later. Until we say otherwise, we will work with a single element array.
  4. Modify the **Wordbox** component by hanging the **keyUp** event listener on **document**. If the user typed the first letter of the word correctly, delete that letter from the word. Continue with this until the user has typed the entire word. You will be using the **lettersLeft** state in the listener and will need to avoid obsoleting it (stale state). Use the discussed technique of changing the event listener by itself. You will need to add the **lettersLeft** state to the **useEffect** dependencies.
  5. Once the user has correctly typed a complete word, the **Wordbox** component will be left hanging on the page empty. Leave it hanging for now.

**Part 2:**
1. The **Wordbox** component must somehow inform its parent component that the user has correctly spelled a word. To do this, add an **onFinish** callback to the props in the **Wordbox** component.
2. In the **keyup** event listener, make it so that if the user has typed the last letter correctly, you call the **onFinish** function directly instead of setting the status.
3. In the **Stage** component, make a **handleFinish** function that sets the state of **words** to an empty field. Pass this function to the **Wordbox** component. This technique will ensure of _unmounting_ of the component after the word is correctly typed.
4. Instead of setting the state to an empty field, we can directly generate a new word - using the prepared function **generateWord**. Generate a word of length 6. Note, however, that you always need to set an array to the state, in this case an array of one element.
5. Test that after typing a word, another one immediately comes up.

**Part 3:**
1. In the **Wordbox** component, create a new boolean condition **[mistake, setMistake]** that tells if the user made a typo. Initially, the state will be set to **false**.
2. If the **mistake** state is **true**, render the word with the **wordbox wordbox--mistake** class.
3. In response to the **keyup** event, correctly set the **mistake** state to **true** or **false** depending on whether the user typed the correct letter.
4. Test that the application is working correctly.
5. Think about whether there is a problem with the **mistake** state becoming obsolete and justify why yes or no.

**Part 4:**
1. Add _prop_ **active** to the **Wordbox** component, which tells whether the component is currently active. Inside **useEffect**, add/remove the **keyup** event listener only if prop active has the value **true**. This will guarantee that only the active component will listen to the keys.
2. Add prop **active** to the dependency list for **useEffect** so that when it changes, the effect will trigger.
3. In the **Stage** component, we will now maintain an array of three words in the state. Make sure that only the first word in the list has _prop_ **active** set to **true**. We always want to type only the first word.
4. In the **handleFinish** function, we now need to remove a word from the beginning of the list and generate a new word for the end to keep the same number of words displayed at all times.
5. Test that your application is working properly.

**Part 5:**
Let's add error counting to our educational game. Whenever the **Wordbox** component detects an error, it will notify its parent component and it will update its status.

At this point, we trust that you are experienced enough that the description above is sufficient to complete the exercise. If you still feel unsure, you can follow the detailed description:

1. Add a state **[mistakes, setMistakes]** with initial value **0** to the **Stage** component. Display the state at the appropriate location in the component.
2. Add an **onMistake** callback to the **Wordbox** component to inform the **Stage** component of a typo.
3. In the **Stage** component, create a **handleMistake** handler that increases the **mistake** state by one.
4. In the **Wordbox** component, call the **onMistake** function every time an error occurs. This needs to be done in the **keyup** event handler. You can probably guess that we are in danger of deprecating _prop_ **onMistake** this way.
5. In the **Wordbox** component, add a _prop_ **onMistake** to the dependencies in **useEffect** so it we does not get obsolete.
6. Test that the application is working properly.


</details>

