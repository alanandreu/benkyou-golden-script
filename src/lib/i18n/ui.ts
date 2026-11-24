import type { TranslationTable } from "../i18n-core";

const ui = {
  "Diccionario": {
    "ca": "Diccionari",
    "en": "Dictionary",
    "ja": "辞書"
  },
  "Gramática": {
    "ca": "Gramàtica",
    "en": "Grammar",
    "ja": "文法"
  },
  "Kanji · Kana": {
    "ca": "Kanji · Kana",
    "en": "Kanji · Kana",
    "ja": "漢字・仮名"
  },
  "Kanji & Kana": {
    "ca": "Kanji i kana",
    "en": "Kanji & Kana",
    "ja": "漢字と仮名"
  },
  "Minijuegos": {
    "ca": "Minijocs",
    "en": "Mini-games",
    "ja": "ミニゲーム"
  },
  "Geografía": {
    "ca": "Geografia",
    "en": "Geography",
    "ja": "地理"
  },
  "Tienda": {
    "ca": "Botiga",
    "en": "Shop",
    "ja": "ショップ"
  },
  "BENKYOU, ir al diccionario": {
    "ca": "BENKYOU, ves al diccionari",
    "en": "BENKYOU, go to dictionary",
    "ja": "BENKYOU、辞書へ"
  },
  "Navegación principal": {
    "ca": "Navegació principal",
    "en": "Main navigation",
    "ja": "メインナビゲーション"
  },
  "Acceso de usuarios": {
    "ca": "Accés d’usuaris",
    "en": "User access",
    "ja": "ユーザーログイン"
  },
  "Acceder": {
    "ca": "Accedeix",
    "en": "Sign in",
    "ja": "ログイン"
  },
  "Cerrar menú": {
    "ca": "Tanca el menú",
    "en": "Close menu",
    "ja": "メニューを閉じる"
  },
  "Abrir menú": {
    "ca": "Obre el menú",
    "en": "Open menu",
    "ja": "メニューを開く"
  },
  "Navegación móvil": {
    "ca": "Navegació mòbil",
    "en": "Mobile navigation",
    "ja": "モバイルナビゲーション"
  },
  "Idioma de la página": {
    "ca": "Idioma de la pàgina",
    "en": "Page language",
    "ja": "表示言語"
  },
  "Un espacio para encontrarse con el japonés.": {
    "ca": "Un espai per descobrir el japonès.",
    "en": "A place to discover Japanese.",
    "ja": "日本語と出会う場所。"
  },
  "El atlas de las palabras": {
    "ca": "L’atles de les paraules",
    "en": "The atlas of words",
    "ja": "言葉の地図帳"
  },
  "Libro japonés abierto sobre una mesa de escritura con pincel": {
    "ca": "Llibre japonès obert damunt una taula d’escriptura amb un pinzell",
    "en": "An open Japanese book on a writing desk with a brush",
    "ja": "筆を添えた机の上の日本の本"
  },
  "Cada palabra abre": {
    "ca": "Cada paraula obre",
    "en": "Every word opens",
    "ja": "一つの言葉が開く、"
  },
  "un mundo.": {
    "ca": "un món.",
    "en": "a world.",
    "ja": "新しい世界。"
  },
  "Del japonés al catalán y al español. Descubre el significado, la lectura y la historia que hay detrás de cada palabra.": {
    "ca": "Del japonès al català i al castellà. Descobreix el significat, la lectura i la història que hi ha darrere de cada paraula.",
    "en": "From Japanese to Catalan and Spanish. Discover the meaning, reading and story behind every word.",
    "ja": "日本語からカタルーニャ語とスペイン語へ。言葉の意味、読み方、そしてその背景を探りましょう。"
  },
  "Dirección": {
    "ca": "Direcció",
    "en": "Direction",
    "ja": "翻訳方向"
  },
  "Dirección de traducción": {
    "ca": "Direcció de traducció",
    "en": "Translation direction",
    "ja": "翻訳の方向"
  },
  "Japonés → Español": {
    "ca": "Japonès → Castellà",
    "en": "Japanese → Spanish",
    "ja": "日本語 → スペイン語"
  },
  "Español → Japonés": {
    "ca": "Castellà → Japonès",
    "en": "Spanish → Japanese",
    "ja": "スペイン語 → 日本語"
  },
  "Japonés → Catalán": {
    "ca": "Japonès → Català",
    "en": "Japanese → Catalan",
    "ja": "日本語 → カタルーニャ語"
  },
  "Catalán → Japonés": {
    "ca": "Català → Japonès",
    "en": "Catalan → Japanese",
    "ja": "カタルーニャ語 → 日本語"
  },
  "Invertir dirección": {
    "ca": "Inverteix la direcció",
    "en": "Reverse direction",
    "ja": "翻訳方向を入れ替える"
  },
  "Buscar palabra": {
    "ca": "Cerca una paraula",
    "en": "Search for a word",
    "ja": "単語を検索"
  },
  "Busca 桜, sakura, ありがとう...": {
    "ca": "Cerca 桜, sakura, ありがとう...",
    "en": "Search 桜, sakura, ありがとう...",
    "ja": "桜、sakura、ありがとう など"
  },
  "Busca llum, gat, paraula...": {
    "ca": "Cerca llum, gat, paraula...",
    "en": "Search llum, gat, paraula...",
    "ja": "llum、gat、paraula など"
  },
  "Busca luz, gato, palabra...": {
    "ca": "Cerca luz, gato, palabra...",
    "en": "Search luz, gato, palabra...",
    "ja": "luz、gato、palabra など"
  },
  "Buscar": {
    "ca": "Cerca",
    "en": "Search",
    "ja": "検索"
  },
  "Explora": {
    "ca": "Explora",
    "en": "Explore",
    "ja": "見つける"
  },
  "{n} resultado": {
    "ca": "{n} resultat",
    "en": "{n} result",
    "ja": "検索結果 {n} 件"
  },
  "{n} resultados": {
    "ca": "{n} resultats",
    "en": "{n} results",
    "ja": "検索結果 {n} 件"
  },
  "Sin resultados": {
    "ca": "Cap resultat",
    "en": "No results",
    "ja": "該当する単語がありません"
  },
  "Una palabra para empezar": {
    "ca": "Una paraula per començar",
    "en": "A word to begin with",
    "ja": "はじめの一語"
  },
  "No encontramos «{q}» en esta selección. Prueba con 桜, sakura, luz, llum o gato.": {
    "ca": "No hem trobat «{q}» en aquesta selecció. Prova amb 桜, sakura, luz, llum o gato.",
    "en": "We couldn’t find “{q}” in this selection. Try 桜, sakura, luz, llum or gato.",
    "ja": "このサンプルに「{q}」は見つかりませんでした。桜、sakura、luz、llum、gato でお試しください。"
  },
  "Escuchar pronunciación": {
    "ca": "Escolta la pronunciació",
    "en": "Listen to pronunciation",
    "ja": "発音を聞く"
  },
  "Traducción": {
    "ca": "Traducció",
    "en": "Translation",
    "ja": "訳語"
  },
  "En contexto": {
    "ca": "En context",
    "en": "In context",
    "ja": "例文"
  },
  "Explorar caracteres": {
    "ca": "Explora els caràcters",
    "en": "Explore characters",
    "ja": "文字を見る"
  },
  "Ver gramática": {
    "ca": "Consulta la gramàtica",
    "en": "View grammar",
    "ja": "文法を見る"
  },
  "Palabras cercanas": {
    "ca": "Paraules properes",
    "en": "Nearby words",
    "ja": "ほかの言葉"
  },
  "Aprender es descubrir.": {
    "ca": "Aprendre és descobrir.",
    "en": "Learning is discovery.",
    "ja": "学びは発見。"
  },
  "Una palabra lleva a una escritura, una regla y una nueva forma de mirar.": {
    "ca": "Una paraula porta a una escriptura, una regla i una nova manera de mirar.",
    "en": "One word leads to a script, a rule and a new way of seeing.",
    "ja": "一つの言葉から、文字、文法、新たな視点へ。"
  },
  "Continúa explorando": {
    "ca": "Continua explorant",
    "en": "Keep exploring",
    "ja": "もっと探る"
  },
  "Las estructuras que dan sentido a cada frase.": {
    "ca": "Les estructures que donen sentit a cada frase.",
    "en": "The structures that give each sentence meaning.",
    "ja": "文の意味を形づくる仕組み。"
  },
  "De los primeros trazos a los caracteres cotidianos.": {
    "ca": "Dels primers traços als caràcters quotidians.",
    "en": "From your first strokes to everyday characters.",
    "ja": "はじめの一画から、日常の文字まで。"
  },
  "Memoria y práctica para aprender jugando.": {
    "ca": "Memòria i pràctica per aprendre jugant.",
    "en": "Memory and practice for playful learning.",
    "ja": "遊びながら記憶し、練習する。"
  },
  "Sustantivo": {
    "ca": "Substantiu",
    "en": "Noun",
    "ja": "名詞"
  },
  "Sustantivo · verbo する": {
    "ca": "Substantiu · verb する",
    "en": "Noun · する verb",
    "ja": "名詞・する動詞"
  },
  "Expresión": {
    "ca": "Expressió",
    "en": "Expression",
    "ja": "表現"
  },
  "trazo": {
    "ca": "traç",
    "en": "stroke",
    "ja": "画"
  },
  "trazos": {
    "ca": "traços",
    "en": "strokes",
    "ja": "画"
  },
  "Aprender": {
    "ca": "Aprendre",
    "en": "Learn",
    "ja": "学ぶ"
  },
  "Una lengua se descubre frase a frase. Empieza por las partículas que dan forma al japonés.": {
    "ca": "Una llengua es descobreix frase a frase. Comença per les partícules que donen forma al japonès.",
    "en": "Discover a language sentence by sentence. Start with the particles that shape Japanese.",
    "ja": "一文ずつ、言葉を知る。日本語の文を形づくる助詞から始めましょう。"
  },
  "Lecciones": {
    "ca": "Lliçons",
    "en": "Lessons",
    "ja": "レッスン"
  },
  "Lección {n} · Fundamentos": {
    "ca": "Lliçó {n} · Fonaments",
    "en": "Lesson {n} · Foundations",
    "ja": "レッスン {n}・基礎"
  },
  "La partícula は": {
    "ca": "La partícula は",
    "en": "The particle は",
    "ja": "助詞「は」"
  },
  "El tema de la oración": {
    "ca": "El tema de l’oració",
    "en": "The topic of the sentence",
    "ja": "文の主題"
  },
  "La partícula は (pronunciada wa) señala aquello de lo que hablamos. Se coloca después del tema de la frase; lo que sigue aporta información sobre él.": {
    "ca": "La partícula は (pronunciada wa) assenyala allò de què parlem. Es col·loca després del tema de la frase; el que segueix n’aporta informació.",
    "en": "The particle は (pronounced wa) marks what we are talking about. It follows the topic; what comes next adds information about it.",
    "ja": "助詞「は」（発音は wa）は、何について話すかを示します。主題の後に置かれ、その後に主題についての説明が続きます。"
  },
  "La partícula が": {
    "ca": "La partícula が",
    "en": "The particle が",
    "ja": "助詞「が」"
  },
  "El sujeto y la información nueva": {
    "ca": "El subjecte i la informació nova",
    "en": "The subject and new information",
    "ja": "主語と新しい情報"
  },
  "La partícula が marca el sujeto de la acción. A menudo presenta información nueva o pone el foco en quién realiza la acción.": {
    "ca": "La partícula が marca el subjecte de l’acció. Sovint presenta informació nova o posa el focus en qui fa l’acció.",
    "en": "The particle が marks the subject of an action. It often introduces new information or highlights who performs the action.",
    "ja": "助詞「が」は動作の主語を示します。新しい情報を伝えたり、誰が動作をするのかに焦点を当てたりします。"
  },
  "La partícula を": {
    "ca": "La partícula を",
    "en": "The particle を",
    "ja": "助詞「を」"
  },
  "El objeto directo": {
    "ca": "El complement directe",
    "en": "The direct object",
    "ja": "直接目的語"
  },
  "La partícula を (pronunciada o) marca el objeto directo: aquello sobre lo que recae la acción del verbo.": {
    "ca": "La partícula を (pronunciada o) marca el complement directe: allò sobre què recau l’acció del verb.",
    "en": "The particle を (pronounced o) marks the direct object: what the verb’s action acts upon.",
    "ja": "助詞「を」（発音は o）は直接目的語、つまり動作の対象を示します。"
  },
  "La partícula に": {
    "ca": "La partícula に",
    "en": "The particle に",
    "ja": "助詞「に」"
  },
  "Destino, tiempo y ubicación": {
    "ca": "Destinació, temps i ubicació",
    "en": "Destination, time and location",
    "ja": "行き先・時・場所"
  },
  "La partícula に puede indicar hacia dónde se dirige alguien, cuándo sucede algo o dónde se encuentra una persona u objeto.": {
    "ca": "La partícula に pot indicar cap a on va algú, quan passa alguna cosa o on es troba una persona o un objecte.",
    "en": "The particle に can indicate where someone is heading, when something happens or where a person or object is located.",
    "ja": "助詞「に」は、行き先、出来事が起こる時、人や物がある場所などを示します。"
  },
  "Escritura": {
    "ca": "Escriptura",
    "en": "Writing",
    "ja": "文字"
  },
  "Sistemas de escritura": {
    "ca": "Sistemes d’escriptura",
    "en": "Writing systems",
    "ja": "文字の種類"
  },
  "Hiragana": {
    "ca": "Hiragana",
    "en": "Hiragana",
    "ja": "ひらがな"
  },
  "Katakana": {
    "ca": "Katakana",
    "en": "Katakana",
    "ja": "カタカナ"
  },
  "Hentaigana": {
    "ca": "Hentaigana",
    "en": "Hentaigana",
    "ja": "変体仮名"
  },
  "Kanji": {
    "ca": "Kanji",
    "en": "Kanji",
    "ja": "漢字"
  },
  "Man’yōgana": {
    "ca": "Man’yōgana",
    "en": "Man’yōgana",
    "ja": "万葉仮名"
  },
  "Ficha de carácter": {
    "ca": "Fitxa del caràcter",
    "en": "Character details",
    "ja": "文字の詳細"
  },
  "Ficha histórica": {
    "ca": "Fitxa històrica",
    "en": "Historical character",
    "ja": "歴史的な文字"
  },
  "Significado orientativo; cada kanji puede tener varias lecturas según la palabra.": {
    "ca": "Significat orientatiu; cada kanji pot tenir diverses lectures segons la paraula.",
    "en": "An indicative meaning; each kanji may have several readings depending on the word.",
    "ja": "意味の目安です。漢字の読み方は単語によって異なります。"
  },
  "Romanizado wo; en japonés moderno se pronuncia normalmente o. を se conserva como partícula.": {
    "ca": "Romanitzat wo; en japonès modern es pronuncia normalment o. を es conserva com a partícula.",
    "en": "Romanized as wo; in modern Japanese it is usually pronounced o. を is retained as a particle.",
    "ja": "ローマ字では wo。現代日本語では通常 o と発音し、助詞として使われます。"
  },
  "Lectura de referencia del silabario japonés.": {
    "ca": "Lectura de referència del sil·labari japonès.",
    "en": "Reference reading in the Japanese syllabary.",
    "ja": "五十音表での基本的な読み方です。"
  },
  "ejemplos seleccionados": {
    "ca": "exemples seleccionats",
    "en": "selected examples",
    "ja": "件の厳選例"
  },
  "variantes históricas": {
    "ca": "variants històriques",
    "en": "historical variants",
    "ja": "種の歴史的異体字"
  },
  "formas y combinaciones": {
    "ca": "formes i combinacions",
    "en": "forms and combinations",
    "ja": "種の字形・組み合わせ"
  },
  "Categoría de caracteres": {
    "ca": "Categoria de caràcters",
    "en": "Character category",
    "ja": "文字の分類"
  },
  "Todas las categorías": {
    "ca": "Totes les categories",
    "en": "All categories",
    "ja": "すべての分類"
  },
  "Sentido de lectura de la tabla": {
    "ca": "Sentit de lectura de la taula",
    "en": "Table reading direction",
    "ja": "表の読み順"
  },
  "Orden": {
    "ca": "Ordre",
    "en": "Order",
    "ja": "並び順"
  },
  "Occidental · izq. → der.": {
    "ca": "Occidental · esq. → dreta",
    "en": "Western · left → right",
    "ja": "横書き・左 → 右"
  },
  "Oriental · der. → izq.": {
    "ca": "Oriental · dreta → esq.",
    "en": "Eastern · right → left",
    "ja": "縦書き・右 → 左"
  },
  "Fuente de los valores fonéticos:": {
    "ca": "Font dels valors fonètics:",
    "en": "Source of phonetic values:",
    "ja": "音価の出典："
  },
  "Inventario histórico y formas suplementarias:": {
    "ca": "Inventari històric i formes suplementàries:",
    "en": "Historical inventory and supplementary forms:",
    "ja": "歴史的字形と追加文字の出典："
  },
  "sci.lang.japan · Tabla de man’yōgana": {
    "ca": "sci.lang.japan · Taula de man’yōgana",
    "en": "sci.lang.japan · Man’yōgana table",
    "ja": "sci.lang.japan・万葉仮名表"
  },
  "Se distinguen signos, formas pequeñas y combinaciones de los kana básicos. Los préstamos admiten más combinaciones; no todas tienen el mismo uso o antigüedad.": {
    "ca": "Es distingeixen signes, formes petites i combinacions dels kana bàsics. Els manlleus admeten més combinacions; no totes tenen el mateix ús o antiguitat.",
    "en": "Signs, small forms and combinations are distinguished from basic kana. Loanwords allow further combinations, which differ in usage and historical age.",
    "ja": "記号、小書き文字、組み合わせは基本の仮名と区別しています。外来語にはさらに多くの組み合わせがあり、用法や成立時期は一様ではありません。"
  },
  "Gojūon · básicos": {
    "ca": "Gojūon · bàsics",
    "en": "Gojūon · basic kana",
    "ja": "五十音・基本"
  },
  "Dakuten y handakuten": {
    "ca": "Dakuten i handakuten",
    "en": "Dakuten and handakuten",
    "ja": "濁音・半濁音"
  },
  "Yōon · sonidos contraídos": {
    "ca": "Yōon · sons contrets",
    "en": "Yōon · contracted sounds",
    "ja": "拗音"
  },
  "Kana pequeños": {
    "ca": "Kana petits",
    "en": "Small kana",
    "ja": "小書き仮名"
  },
  "Kana obsoletos y arcaicos": {
    "ca": "Kana obsolets i arcaics",
    "en": "Obsolete and archaic kana",
    "ja": "廃用・古形の仮名"
  },
  "Formas y signos especiales": {
    "ca": "Formes i signes especials",
    "en": "Special forms and signs",
    "ja": "特殊な字形・記号"
  },
  "Sonidos de préstamos": {
    "ca": "Sons de manlleus",
    "en": "Loanword sounds",
    "ja": "外来語の音"
  },
  "Extensiones para el ainu": {
    "ca": "Extensions per a l’ainu",
    "en": "Ainu extensions",
    "ja": "アイヌ語用の拡張文字"
  },
  "Kana pequeños usados para consonantes finales en la escritura del ainu.": {
    "ca": "Kana petits usats per a consonants finals en l’escriptura de l’ainu.",
    "en": "Small kana used for final consonants in written Ainu.",
    "ja": "アイヌ語の表記で語末の子音に使う小書き仮名です。"
  },
  "Hentaigana · variantes históricas": {
    "ca": "Hentaigana · variants històriques",
    "en": "Hentaigana · historical variants",
    "ja": "変体仮名・歴史的異体字"
  },
  "285 variantes cursivas codificadas en Unicode. No son 285 sonidos distintos; varias formas representan la misma lectura.": {
    "ca": "285 variants cursives codificades a Unicode. No són 285 sons diferents; diverses formes representen la mateixa lectura.",
    "en": "285 cursive variants encoded in Unicode. These are not 285 different sounds; several forms share the same reading.",
    "ja": "Unicode に収録された285種の草書体の仮名です。285種類の音ではなく、複数の字形が同じ読みを表します。"
  },
  "Primeros kanji": {
    "ca": "Primers kanji",
    "en": "First kanji",
    "ja": "はじめの漢字"
  },
  "sol · día": {
    "ca": "sol · dia",
    "en": "sun · day",
    "ja": "太陽・日"
  },
  "origen · libro": {
    "ca": "origen · llibre",
    "en": "origin · book",
    "ja": "もと・本"
  },
  "persona": {
    "ca": "persona",
    "en": "person",
    "ja": "人"
  },
  "montaña": {
    "ca": "muntanya",
    "en": "mountain",
    "ja": "山"
  },
  "río": {
    "ca": "riu",
    "en": "river",
    "ja": "川"
  },
  "árbol": {
    "ca": "arbre",
    "en": "tree",
    "ja": "木"
  },
  "agua": {
    "ca": "aigua",
    "en": "water",
    "ja": "水"
  },
  "fuego": {
    "ca": "foc",
    "en": "fire",
    "ja": "火"
  },
  "luna · mes": {
    "ca": "lluna · mes",
    "en": "moon · month",
    "ja": "月・月間"
  },
  "flor": {
    "ca": "flor",
    "en": "flower",
    "ja": "花"
  },
  "Man’yōgana · selección histórica": {
    "ca": "Man’yōgana · selecció històrica",
    "en": "Man’yōgana · historical selection",
    "ja": "万葉仮名・歴史的な用例"
  },
  "Kanji empleados por su sonido, no por su significado. Esta selección no es exhaustiva: el japonés antiguo distinguía también sílabas kō/otsu que aquí no se desglosan. La serie h tenía una pronunciación histórica distinta de la actual.": {
    "ca": "Kanji emprats pel seu so, no pel seu significat. Aquesta selecció no és exhaustiva: el japonès antic també distingia síl·labes kō/otsu que aquí no es desglossen. La sèrie h tenia una pronunciació històrica diferent de l’actual.",
    "en": "Kanji used for their sound rather than meaning. This selection is not exhaustive: Old Japanese also distinguished kō/otsu syllables, not separated here. The h series had a historical pronunciation different from today’s.",
    "ja": "意味ではなく音を表すために用いた漢字です。網羅的な一覧ではありません。ここでは上代日本語の甲乙類の区別を省略しています。ハ行の当時の発音は現代とは異なりました。"
  },
  "Forma pequeña. Su función depende de la combinación; っ indica una consonante geminada.": {
    "ca": "Forma petita. La seva funció depèn de la combinació; っ indica una consonant geminada.",
    "en": "Small form. Its role depends on the combination; っ marks a doubled consonant.",
    "ja": "小書き文字です。組み合わせによって働きが異なります。「っ」は促音を表します。"
  },
  "Yōon: combinación de dos kana para una sola mora.": {
    "ca": "Yōon: combinació de dos kana per a una sola mora.",
    "en": "Yōon: two kana combined into a single mora.",
    "ja": "拗音：二つの仮名を組み合わせて一拍を表します。"
  },
  "Forma histórica o arcaica. ゐ y ゑ se leen hoy i y e; wu es una reconstrucción gráfica, no un kana corriente del japonés antiguo.": {
    "ca": "Forma històrica o arcaica. ゐ i ゑ es llegeixen avui i i e; wu és una reconstrucció gràfica, no un kana corrent del japonès antic.",
    "en": "Historical or archaic form. ゐ and ゑ are now read i and e; wu is a graphic reconstruction, not a common kana of Old Japanese.",
    "ja": "歴史的・古風な字形です。「ゐ」「ゑ」は現代では i、e と読みます。wu は字形の再構成であり、上代日本語の一般的な仮名ではありません。"
  },
  "Forma histórica o poco usada. Yi, ye y wu incluyen formas propuestas para completar tablas antiguas; no todas fueron de uso cotidiano.": {
    "ca": "Forma històrica o poc usada. Yi, ye i wu inclouen formes proposades per completar taules antigues; no totes van ser d’ús quotidià.",
    "en": "Historical or rarely used form. Yi, ye and wu include forms proposed to complete older tables; not all were in everyday use.",
    "ja": "歴史的、または使用の少ない字形です。yi、ye、wu には古い表を補うために提案された字形も含まれ、すべてが日常的に使われたわけではありません。"
  },
  "Combinación habitual para transcribir sonidos de préstamos. Las combinaciones posibles no constituyen una lista cerrada.": {
    "ca": "Combinació habitual per transcriure sons de manlleus. Les combinacions possibles no constitueixen una llista tancada.",
    "en": "A common combination for transcribing loanword sounds. The possible combinations are not a closed list.",
    "ja": "外来語の音を表す一般的な組み合わせです。可能な組み合わせをすべて挙げたものではありません。"
  },
  "Forma pequeña especial, ligadura o signo ortográfico; no es un kana básico independiente.": {
    "ca": "Forma petita especial, lligadura o signe ortogràfic; no és un kana bàsic independent.",
    "en": "Special small form, ligature or orthographic sign; not an independent basic kana.",
    "ja": "特殊な小書き文字、合字、または表記記号です。独立した基本の仮名ではありません。"
  },
  "Extensión del katakana para el ainu. Las formas de h y r se eligen según la vocal precedente.": {
    "ca": "Extensió del katakana per a l’ainu. Les formes de h i r es trien segons la vocal precedent.",
    "en": "Katakana extension for Ainu. The h and r forms depend on the preceding vowel.",
    "ja": "アイヌ語用のカタカナ拡張です。h と r の字形は直前の母音に応じて選びます。"
  },
  "Valor fonético ilustrativo en man’yōgana, con romanización orientativa moderna; no es la lectura única de este kanji ni una equivalencia exacta de pronunciación antigua.": {
    "ca": "Valor fonètic il·lustratiu en man’yōgana, amb romanització orientativa moderna; no és la lectura única d’aquest kanji ni una equivalència exacta de la pronunciació antiga.",
    "en": "An illustrative man’yōgana sound value with approximate modern romanization; neither the kanji’s only reading nor an exact equivalent of ancient pronunciation.",
    "ja": "現代式ローマ字による万葉仮名の音価の目安です。この漢字の唯一の読みでも、古代の発音の厳密な再現でもありません。"
  },
  "Variante cursiva histórica (hentaigana). Su lectura identifica el sonido, no el significado del kanji de origen.": {
    "ca": "Variant cursiva històrica (hentaigana). La seva lectura identifica el so, no el significat del kanji d’origen.",
    "en": "Historical cursive variant (hentaigana). Its reading identifies the sound, not the meaning of the source kanji.",
    "ja": "歴史的な草書体の仮名（変体仮名）です。読みは音を示しており、元の漢字の意味ではありません。"
  },
  "repetición": {
    "ca": "repetició",
    "en": "iteration",
    "ja": "繰り返し"
  },
  "repetición sonora": {
    "ca": "repetició sonora",
    "en": "voiced iteration",
    "ja": "濁音の繰り返し"
  },
  "vocal larga": {
    "ca": "vocal llarga",
    "en": "long vowel",
    "ja": "長音"
  },
  "doble guion": {
    "ca": "guió doble",
    "en": "double hyphen",
    "ja": "二重ハイフン"
  },
  "separador": {
    "ca": "separador",
    "en": "separator",
    "ja": "区切り"
  },
  "Territorio": {
    "ca": "Territori",
    "en": "Territory",
    "ja": "国土"
  },
  "Japón se divide en ocho regiones tradicionales y cuarenta y siete prefecturas.": {
    "ca": "El Japó es divideix en vuit regions tradicionals i quaranta-set prefectures.",
    "en": "Japan is divided into eight traditional regions and forty-seven prefectures.",
    "ja": "日本は八つの地方と四十七の都道府県に分かれています。"
  },
  "01 / Modo de visualización": {
    "ca": "01 / Mode de visualització",
    "en": "01 / View mode",
    "ja": "01 / 表示モード"
  },
  "Modo del mapa": {
    "ca": "Mode del mapa",
    "en": "Map mode",
    "ja": "地図の表示"
  },
  "Regiones": {
    "ca": "Regions",
    "en": "Regions",
    "ja": "地方"
  },
  "Prefecturas": {
    "ca": "Prefectures",
    "en": "Prefectures",
    "ja": "都道府県"
  },
  "Mapa de las ocho regiones de Japón": {
    "ca": "Mapa de les vuit regions del Japó",
    "en": "Map of Japan’s eight regions",
    "ja": "日本の八地方の地図"
  },
  "Mapa de las 47 prefecturas de Japón": {
    "ca": "Mapa de les 47 prefectures del Japó",
    "en": "Map of Japan’s 47 prefectures",
    "ja": "日本の47都道府県の地図"
  },
  "Islas alejadas: Okinawa, islas Ryūkyū y Senkaku, ampliadas para mayor visibilidad": {
    "ca": "Illes allunyades: Okinawa, illes Ryūkyū i Senkaku, ampliades per facilitar-ne la visibilitat",
    "en": "Remote islands: Okinawa, Ryūkyū and Senkaku islands, enlarged for visibility",
    "ja": "離島：沖縄・琉球諸島・尖閣諸島を拡大表示"
  },
  "Islas alejadas · ampliadas": {
    "ca": "Illes allunyades · ampliades",
    "en": "Remote islands · enlarged",
    "ja": "離島・拡大表示"
  },
  "Territorio en disputa": {
    "ca": "Territori en disputa",
    "en": "Disputed territory",
    "ja": "領有権に争いのある地域"
  },
  "territorio en disputa": {
    "ca": "territori en disputa",
    "en": "disputed territory",
    "ja": "領有権に争いのある地域"
  },
  "Catalán": {
    "ca": "Català",
    "en": "Catalan",
    "ja": "カタルーニャ語"
  },
  "Español": {
    "ca": "Castellà",
    "en": "Spanish",
    "ja": "スペイン語"
  },
  "Japonés": {
    "ca": "Japonès",
    "en": "Japanese",
    "ja": "日本語"
  },
  "Región seleccionada": {
    "ca": "Regió seleccionada",
    "en": "Selected region",
    "ja": "選択中の地方"
  },
  "Prefectura seleccionada": {
    "ca": "Prefectura seleccionada",
    "en": "Selected prefecture",
    "ja": "選択中の都道府県"
  },
  "Región": {
    "ca": "Regió",
    "en": "Region",
    "ja": "地方"
  },
  "Explora el mapa": {
    "ca": "Explora el mapa",
    "en": "Explore the map",
    "ja": "地図を見る"
  },
  "Pasa el cursor o toca una región para conocer su nombre en japonés, español y catalán.": {
    "ca": "Passa el cursor o toca una regió per conèixer-ne el nom en japonès, castellà i català.",
    "en": "Hover over or tap a region to see its name in Japanese, Spanish and Catalan.",
    "ja": "地方にカーソルを合わせるかタップすると、日本語・スペイン語・カタルーニャ語の名称が表示されます。"
  },
  "Pasa el cursor o toca una prefectura para conocer su nombre en japonés y la región a la que pertenece.": {
    "ca": "Passa el cursor o toca una prefectura per conèixer-ne el nom en japonès i la regió a la qual pertany.",
    "en": "Hover over or tap a prefecture to see its Japanese name and region.",
    "ja": "都道府県にカーソルを合わせるかタップすると、日本語名と所属する地方が表示されます。"
  },
  "Las ocho regiones": {
    "ca": "Les vuit regions",
    "en": "The eight regions",
    "ja": "八つの地方"
  },
  "Territorios en disputa": {
    "ca": "Territoris en disputa",
    "en": "Disputed territories",
    "ja": "領有権に争いのある地域"
  },
  "Se señalan con círculo dorado discontinuo. Su soberanía es objeto de disputa internacional.": {
    "ca": "S’indiquen amb un cercle daurat discontinu. La seva sobirania és objecte de disputa internacional.",
    "en": "Marked with a dashed gold circle. Sovereignty over these territories is internationally disputed.",
    "ja": "金色の破線の円で示しています。これらの地域の領有権には国際的な争いがあります。"
  },
  "Islas Kuriles del Sur": {
    "ca": "Illes Kurils del Sud",
    "en": "Southern Kuril Islands",
    "ja": "南クリル諸島"
  },
  "Rocas de Liancourt": {
    "ca": "Roques de Liancourt",
    "en": "Liancourt Rocks",
    "ja": "リアンクール岩礁"
  },
  "Islas Senkaku": {
    "ca": "Illes Senkaku",
    "en": "Senkaku Islands",
    "ja": "尖閣諸島"
  },
  "Administradas por Rusia; Japón las reclama como parte de Hokkaidō.": {
    "ca": "Administrades per Rússia; el Japó les reclama com a part de Hokkaidō.",
    "en": "Administered by Russia; Japan claims them as part of Hokkaidō.",
    "ja": "ロシアが実効支配し、日本は北海道の一部として領有権を主張しています。"
  },
  "Administradas por Corea del Sur (Dokdo); Japón las reclama como parte de Shimane.": {
    "ca": "Administrades per Corea del Sud (Dokdo); el Japó les reclama com a part de Shimane.",
    "en": "Administered by South Korea (Dokdo); Japan claims them as part of Shimane.",
    "ja": "韓国が実効支配（独島）し、日本は島根県の一部として領有権を主張しています。"
  },
  "Administradas por Japón (Okinawa); China y Taiwán las reclaman (Diaoyu / Tiaoyutai).": {
    "ca": "Administrades pel Japó (Okinawa); la Xina i Taiwan les reclamen (Diaoyu / Tiaoyutai).",
    "en": "Administered by Japan (Okinawa); China and Taiwan also claim them (Diaoyu / Tiaoyutai).",
    "ja": "日本が実効支配（沖縄県）し、中国と台湾も領有権を主張しています（釣魚島／釣魚台）。"
  },
  "Tipos de prefecturas": {
    "ca": "Tipus de prefectures",
    "en": "Types of prefectures",
    "ja": "都道府県の種類"
  },
  "El sistema administrativo japonés (都道府県 / todōfuken) divide el territorio en cuatro categorías, cada una con su propio sufijo en el nombre:": {
    "ca": "El sistema administratiu japonès (都道府県 / todōfuken) divideix el territori en quatre categories, cadascuna amb el seu propi sufix al nom:",
    "en": "Japan’s administrative system (都道府県 / todōfuken) divides the territory into four categories, each with its own name suffix:",
    "ja": "日本の行政区画「都道府県」は四つの種類に分かれ、それぞれ名称の末尾に異なる字が付きます。"
  },
  "1 prefectura metropolitana": {
    "ca": "1 prefectura metropolitana",
    "en": "1 metropolitan prefecture",
    "ja": "1都"
  },
  "Corresponde a Tokio.": {
    "ca": "Correspon a Tòquio.",
    "en": "Tokyo.",
    "ja": "東京都を指します。"
  },
  "1 territorio o circuito": {
    "ca": "1 territori o circuit",
    "en": "1 territory or circuit",
    "ja": "1道"
  },
  "Corresponde a Hokkaidō.": {
    "ca": "Correspon a Hokkaidō.",
    "en": "Hokkaidō.",
    "ja": "北海道を指します。"
  },
  "2 prefecturas urbanas": {
    "ca": "2 prefectures urbanes",
    "en": "2 urban prefectures",
    "ja": "2府"
  },
  "Son Osaka y Kioto.": {
    "ca": "Són Osaka i Kyoto.",
    "en": "Osaka and Kyoto.",
    "ja": "大阪府と京都府を指します。"
  },
  "43 prefecturas rurales o comunes": {
    "ca": "43 prefectures rurals o comunes",
    "en": "43 rural or ordinary prefectures",
    "ja": "43県"
  },
  "El resto del país.": {
    "ca": "La resta del país.",
    "en": "The rest of the country.",
    "ja": "それ以外の地域です。"
  },
  "Las 47 prefecturas": {
    "ca": "Les 47 prefectures",
    "en": "The 47 prefectures",
    "ja": "47都道府県"
  },
  "Toca o pulsa una prefectura para verla resaltada en el mapa. El sufijo indica su categoría.": {
    "ca": "Toca o prem una prefectura per veure-la ressaltada al mapa. El sufix n’indica la categoria.",
    "en": "Tap or click a prefecture to highlight it on the map. The suffix indicates its category.",
    "ja": "都道府県を選ぶと地図上で強調表示されます。末尾の字は区分を示します。"
  },
  "Tokio": {
    "ca": "Tòquio",
    "en": "Tokyo",
    "ja": "東京"
  },
  "Kioto": {
    "ca": "Kyoto",
    "en": "Kyoto",
    "ja": "京都"
  },
  "Práctica": {
    "ca": "Pràctica",
    "en": "Practice",
    "ja": "練習"
  },
  "Aprender también es jugar. Practica vocabulario y escritura japonesa por nivel JLPT, o mezcla todo con «Todos».": {
    "ca": "Aprendre també és jugar. Practica vocabulari i escriptura japonesa per nivell JLPT, o barreja-ho tot amb «Tots».",
    "en": "Learning is playing, too. Practice Japanese vocabulary and writing by JLPT level, or mix every level with “All”.",
    "ja": "遊びも学びの一つ。JLPTのレベル別に語彙や文字を練習したり、「すべて」で全レベルを組み合わせたりできます。"
  },
  "01 / Memoria": {
    "ca": "01 / Memòria",
    "en": "01 / Memory",
    "ja": "01 / 記憶"
  },
  "Encuentra la pareja": {
    "ca": "Troba la parella",
    "en": "Find the pair",
    "ja": "ペアを見つけよう"
  },
  "Destapa dos cartas y relaciona cada palabra japonesa con su significado.": {
    "ca": "Destapa dues cartes i relaciona cada paraula japonesa amb el seu significat.",
    "en": "Turn over two cards and match each Japanese word with its meaning.",
    "ja": "カードを2枚めくり、日本語の単語と意味を組み合わせましょう。"
  },
  "Nivel JLPT": {
    "ca": "Nivell JLPT",
    "en": "JLPT level",
    "ja": "JLPTレベル"
  },
  "Todos": {
    "ca": "Tots",
    "en": "All",
    "ja": "すべて"
  },
  "Movimientos": {
    "ca": "Moviments",
    "en": "Moves",
    "ja": "手数"
  },
  "Parejas": {
    "ca": "Parelles",
    "en": "Pairs",
    "ja": "ペア"
  },
  "Reiniciar": {
    "ca": "Reinicia",
    "en": "Restart",
    "ja": "やり直す"
  },
  "Carta boca abajo": {
    "ca": "Carta de cap per avall",
    "en": "Face-down card",
    "ja": "裏向きのカード"
  },
  "¡Todas las parejas encontradas!": {
    "ca": "Has trobat totes les parelles!",
    "en": "All pairs found!",
    "ja": "すべてのペアがそろいました！"
  },
  "{n} movimientos": {
    "ca": "{n} moviments",
    "en": "{n} moves",
    "ja": "{n} 手"
  },
  "Selección de demostración: 4 parejas por nivel. Con «Todos» se mezclan palabras de cualquier nivel.": {
    "ca": "Selecció de demostració: 4 parelles per nivell. Amb «Tots» es barregen paraules de qualsevol nivell.",
    "en": "Demo selection: 4 pairs per level. “All” mixes words from every level.",
    "ja": "サンプル：各レベル4ペア。「すべて」では全レベルの単語を組み合わせます。"
  },
  "02 / Escritura": {
    "ca": "02 / Escriptura",
    "en": "02 / Writing",
    "ja": "02 / 書き方"
  },
  "Orden de trazos": {
    "ca": "Ordre dels traços",
    "en": "Stroke order",
    "ja": "筆順"
  },
  "Elige las cartas en el orden en que se escribe el kanji.": {
    "ca": "Tria les cartes en l’ordre en què s’escriu el kanji.",
    "en": "Choose the cards in the order the kanji is written.",
    "ja": "漢字の筆順に合わせてカードを選びましょう。"
  },
  "Elige un kanji": {
    "ca": "Tria un kanji",
    "en": "Choose a kanji",
    "ja": "漢字を選ぶ"
  },
  "Practicar": {
    "ca": "Practica",
    "en": "Practice",
    "ja": "練習する"
  },
  "Trazos": {
    "ca": "Traços",
    "en": "Strokes",
    "ja": "画数"
  },
  "Intentos fallidos": {
    "ca": "Intents fallits",
    "en": "Incorrect attempts",
    "ja": "間違えた回数"
  },
  "Selecciona el siguiente trazo": {
    "ca": "Selecciona el traç següent",
    "en": "Select the next stroke",
    "ja": "次の画を選びましょう"
  },
  "Carta de trazo {n}": {
    "ca": "Carta de traç {n}",
    "en": "Stroke card {n}",
    "ja": "画のカード {n}"
  },
  ", colocada": {
    "ca": ", col·locada",
    "en": ", placed",
    "ja": "、配置済み"
  },
  "{g}: {a} de {b} trazos colocados": {
    "ca": "{g}: {a} de {b} traços col·locats",
    "en": "{g}: {a} of {b} strokes placed",
    "ja": "{g}：{b}画中{a}画を配置済み"
  },
  "Trazo {n} de {g}": {
    "ca": "Traç {n} de {g}",
    "en": "Stroke {n} of {g}",
    "ja": "{g} の第{n}画"
  },
  "¡Kanji completado!": {
    "ca": "Kanji completat!",
    "en": "Kanji completed!",
    "ja": "漢字が完成しました！"
  },
  "¡Correcto! Continúa con el siguiente trazo.": {
    "ca": "Correcte! Continua amb el traç següent.",
    "en": "Correct! Continue with the next stroke.",
    "ja": "正解！次の画に進みましょう。"
  },
  "Todavía no. Fíjate en la forma y prueba otra carta.": {
    "ca": "Encara no. Fixa’t en la forma i prova una altra carta.",
    "en": "Not yet. Look at the shape and try another card.",
    "ja": "もう一度。形をよく見て、別のカードを選びましょう。"
  },
  "Siguiente kanji": {
    "ca": "Kanji següent",
    "en": "Next kanji",
    "ja": "次の漢字"
  },
  "Aún no hay kanji de este nivel en la selección de demostración. Prueba con «Todos».": {
    "ca": "Encara no hi ha kanji d’aquest nivell a la selecció de demostració. Prova amb «Tots».",
    "en": "There are no kanji at this level in the demo selection yet. Try “All”.",
    "ja": "このサンプルにはまだこのレベルの漢字がありません。「すべて」をお試しください。"
  },
  "03 / Lectura": {
    "ca": "03 / Lectura",
    "en": "03 / Reading",
    "ja": "03 / 読解"
  },
  "Completa la frase": {
    "ca": "Completa la frase",
    "en": "Complete the sentence",
    "ja": "文を完成させよう"
  },
  "Elige la palabra que falta. Atención a los homófonos y kanji parecidos.": {
    "ca": "Tria la paraula que falta. Compte amb els homòfons i els kanji semblants.",
    "en": "Choose the missing word. Watch out for homophones and similar-looking kanji.",
    "ja": "空欄に入る語を選びましょう。同音異義語や似た漢字に注意。"
  },
  "Frase": {
    "ca": "Frase",
    "en": "Sentence",
    "ja": "問題"
  },
  "Aciertos": {
    "ca": "Encerts",
    "en": "Correct answers",
    "ja": "正解数"
  },
  "Todos los niveles": {
    "ca": "Tots els nivells",
    "en": "All levels",
    "ja": "全レベル"
  },
  "Nivel {l}": {
    "ca": "Nivell {l}",
    "en": "Level {l}",
    "ja": "レベル {l}"
  },
  "¡Correcto!": {
    "ca": "Correcte!",
    "en": "Correct!",
    "ja": "正解！"
  },
  "No es correcto. La respuesta era {a}.": {
    "ca": "No és correcte. La resposta era {a}.",
    "en": "Not quite. The answer was {a}.",
    "ja": "不正解。正解は「{a}」です。"
  },
  "Siguiente frase": {
    "ca": "Frase següent",
    "en": "Next sentence",
    "ja": "次の問題"
  },
  "Selección de demostración: 3 frases por nivel.": {
    "ca": "Selecció de demostració: 3 frases per nivell.",
    "en": "Demo selection: 3 sentences per level.",
    "ja": "サンプル：各レベル3問。"
  },
  "Cada mañana bebo agua.": {
    "ca": "Cada matí bec aigua.",
    "en": "I drink water every morning.",
    "ja": "毎朝、水を飲みます。"
  },
  "Me gustan los gatos.": {
    "ca": "M’agraden els gats.",
    "en": "I like cats.",
    "ja": "猫が好きです。"
  },
  "Leo libros en la biblioteca.": {
    "ca": "Llegeixo llibres a la biblioteca.",
    "en": "I read books at the library.",
    "ja": "図書館で本を読みます。"
  },
  "Mañana tengo previsto ver a un amigo.": {
    "ca": "Demà tinc previst veure un amic.",
    "en": "I plan to meet a friend tomorrow.",
    "ja": "明日、友達に会う予定です。"
  },
  "Esta ropa no me queda bien de talla.": {
    "ca": "Aquesta roba no em va bé de talla.",
    "en": "These clothes don’t fit me.",
    "ja": "この服はサイズが合わない。"
  },
  "Hacía calor en la habitación, así que abrí la ventana.": {
    "ca": "Feia calor a l’habitació, així que vaig obrir la finestra.",
    "en": "It was hot in the room, so I opened the window.",
    "ja": "部屋が暑いので、窓を開けました。"
  },
  "Este libro es muy grueso.": {
    "ca": "Aquest llibre és molt gruixut.",
    "en": "This book is very thick.",
    "ja": "この本はとても厚いです。"
  },
  "Estoy de acuerdo con su opinión.": {
    "ca": "Estic d’acord amb la seva opinió.",
    "en": "I agree with his opinion.",
    "ja": "彼の意見に賛成します。"
  },
  "Por favor, confirma la hora de la reunión.": {
    "ca": "Si us plau, confirma l’hora de la reunió.",
    "en": "Please confirm the meeting time.",
    "ja": "会議の時間を確認してください。"
  },
  "Se introdujo un nuevo sistema.": {
    "ca": "Es va introduir un nou sistema.",
    "en": "A new system was introduced.",
    "ja": "新しい制度が導入された。"
  },
  "Buscar a fondo la causa del fracaso.": {
    "ca": "Investigar a fons la causa del fracàs.",
    "en": "Investigate the cause of the failure thoroughly.",
    "ja": "失敗の原因を追求する。"
  },
  "Interesarse por los problemas ambientales.": {
    "ca": "Interessar-se pels problemes ambientals.",
    "en": "Take an interest in environmental issues.",
    "ja": "環境問題に関心を持つ。"
  },
  "El plan avanza sin problemas.": {
    "ca": "El pla avança sense problemes.",
    "en": "The plan is progressing smoothly.",
    "ja": "計画は順調に進んでいる。"
  },
  "Una disciplina que investiga la verdad.": {
    "ca": "Una disciplina que investiga la veritat.",
    "en": "A discipline that investigates the truth.",
    "ja": "真理を追究する学問。"
  },
  "La relación entre ambos países está estancada.": {
    "ca": "La relació entre tots dos països està estancada.",
    "en": "Relations between the two countries are at a standstill.",
    "ja": "両国の関係は膠着の状態にある。"
  },
  "gato": {
    "ca": "gat",
    "en": "cat",
    "ja": "猫"
  },
  "afición": {
    "ca": "afició",
    "en": "hobby",
    "ja": "趣味"
  },
  "importante": {
    "ca": "important",
    "en": "important",
    "ja": "大切"
  },
  "dirección": {
    "ca": "adreça",
    "en": "address",
    "ja": "住所"
  },
  "experiencia": {
    "ca": "experiència",
    "en": "experience",
    "ja": "経験"
  },
  "entorno": {
    "ca": "entorn",
    "en": "environment",
    "ja": "環境"
  },
  "influencia": {
    "ca": "influència",
    "en": "influence",
    "ja": "影響"
  },
  "mejora": {
    "ca": "millora",
    "en": "improvement",
    "ja": "改善"
  },
  "aumento": {
    "ca": "augment",
    "en": "increase",
    "ja": "増加"
  },
  "compromiso": {
    "ca": "compromís",
    "en": "compromise",
    "ja": "妥協"
  },
  "contribución": {
    "ca": "contribució",
    "en": "contribution",
    "ja": "貢献"
  },
  "tendencia": {
    "ca": "tendència",
    "en": "tendency",
    "ja": "傾向"
  },
  "ambiguo": {
    "ca": "ambigu",
    "en": "ambiguous",
    "ja": "曖昧"
  },
  "notable": {
    "ca": "notable",
    "en": "notable",
    "ja": "顕著"
  },
  "costumbre": {
    "ca": "costum",
    "en": "custom",
    "ja": "慣習"
  },
  "entramado": {
    "ca": "entramat",
    "en": "complex tangle",
    "ja": "錯綜"
  },
  "burla": {
    "ca": "burla",
    "en": "mockery",
    "ja": "揶揄"
  },
  "Próximamente": {
    "ca": "Properament",
    "en": "Coming soon",
    "ja": "近日公開"
  },
  "BENKYOU / MI ESPACIO": {
    "ca": "BENKYOU / EL MEU ESPAI",
    "en": "BENKYOU / MY SPACE",
    "ja": "BENKYOU / マイスペース"
  },
  "Cada palabra, un paso más.": {
    "ca": "Cada paraula, un pas més.",
    "en": "Every word, a step further.",
    "ja": "一つの言葉が、次の一歩に。"
  },
  "Recuperar contraseña": {
    "ca": "Recupera la contrasenya",
    "en": "Reset password",
    "ja": "パスワードを再設定"
  },
  "Crear una cuenta": {
    "ca": "Crea un compte",
    "en": "Create an account",
    "ja": "アカウントを作成"
  },
  "Bienvenido de nuevo": {
    "ca": "Et donem la benvinguda de nou",
    "en": "Welcome back",
    "ja": "おかえりなさい"
  },
  "Tipo de acceso": {
    "ca": "Tipus d’accés",
    "en": "Access type",
    "ja": "ログイン方法"
  },
  "Iniciar sesión": {
    "ca": "Inicia la sessió",
    "en": "Sign in",
    "ja": "ログイン"
  },
  "Crear cuenta": {
    "ca": "Crea un compte",
    "en": "Create account",
    "ja": "アカウント作成"
  },
  "Nombre": {
    "ca": "Nom",
    "en": "Name",
    "ja": "名前"
  },
  "Tu nombre": {
    "ca": "El teu nom",
    "en": "Your name",
    "ja": "お名前"
  },
  "Correo electrónico": {
    "ca": "Correu electrònic",
    "en": "Email address",
    "ja": "メールアドレス"
  },
  "tu@correo.com": {
    "ca": "tu@correu.cat",
    "en": "you@example.com",
    "ja": "you@example.com"
  },
  "Contraseña": {
    "ca": "Contrasenya",
    "en": "Password",
    "ja": "パスワード"
  },
  "Ocultar contraseña": {
    "ca": "Amaga la contrasenya",
    "en": "Hide password",
    "ja": "パスワードを隠す"
  },
  "Mostrar contraseña": {
    "ca": "Mostra la contrasenya",
    "en": "Show password",
    "ja": "パスワードを表示"
  },
  "¿Has olvidado la contraseña?": {
    "ca": "Has oblidat la contrasenya?",
    "en": "Forgot your password?",
    "ja": "パスワードをお忘れですか？"
  },
  "Enviar enlace": {
    "ca": "Envia l’enllaç",
    "en": "Send link",
    "ja": "リンクを送信"
  },
  "Entrar en mi espacio": {
    "ca": "Entra al meu espai",
    "en": "Enter my space",
    "ja": "マイスペースへ"
  },
  "Las cuentas reales todavía no están conectadas. No se han enviado ni guardado tus datos.": {
    "ca": "Els comptes reals encara no estan connectats. No s’han enviat ni desat les teves dades.",
    "en": "Real accounts are not connected yet. Your details have not been sent or saved.",
    "ja": "実際のアカウント機能はまだ接続されていません。入力内容は送信・保存されていません。"
  },
  "Volver al inicio de sesión": {
    "ca": "Torna a l’inici de sessió",
    "en": "Back to sign in",
    "ja": "ログインに戻る"
  },
  "Vista previa · cuentas aún no conectadas": {
    "ca": "Vista prèvia · comptes encara no connectats",
    "en": "Preview · accounts not connected yet",
    "ja": "プレビュー・アカウント未接続"
  },
  "Explorar el espacio de ejemplo": {
    "ca": "Explora l’espai d’exemple",
    "en": "Explore the sample space",
    "ja": "サンプルスペースを見る"
  },
  "Espacio de ejemplo · cambios temporales, sin cuenta real": {
    "ca": "Espai d’exemple · canvis temporals, sense compte real",
    "en": "Sample space · temporary changes, no real account",
    "ja": "サンプルスペース・変更は一時的です。実際のアカウントではありません"
  },
  "Personal": {
    "ca": "Personal",
    "en": "Personal",
    "ja": "個人"
  },
  "Mi espacio": {
    "ca": "El meu espai",
    "en": "My space",
    "ja": "マイスペース"
  },
  "Tu pequeño cuaderno de japonés.": {
    "ca": "El teu petit quadern de japonès.",
    "en": "Your little Japanese notebook.",
    "ja": "あなただけの日本語ノート。"
  },
  "Estudiante": {
    "ca": "Estudiant",
    "en": "Student",
    "ja": "学習者"
  },
  "Búsquedas recientes": {
    "ca": "Cerques recents",
    "en": "Recent searches",
    "ja": "最近の検索"
  },
  "Palabras favoritas": {
    "ca": "Paraules preferides",
    "en": "Favorite words",
    "ja": "お気に入りの単語"
  },
  "Mis listas": {
    "ca": "Les meves llistes",
    "en": "My lists",
    "ja": "マイリスト"
  },
  "Configuración": {
    "ca": "Configuració",
    "en": "Settings",
    "ja": "設定"
  },
  "Una palabra cada día.": {
    "ca": "Una paraula cada dia.",
    "en": "A word every day.",
    "ja": "毎日、一つの言葉を。"
  },
  "Búsquedas": {
    "ca": "Cerques",
    "en": "Searches",
    "ja": "検索"
  },
  "Favoritas": {
    "ca": "Preferides",
    "en": "Favorites",
    "ja": "お気に入り"
  },
  "Listas": {
    "ca": "Llistes",
    "en": "Lists",
    "ja": "リスト"
  },
  "Vaciar historial": {
    "ca": "Buida l’historial",
    "en": "Clear history",
    "ja": "履歴を消去"
  },
  "Cancelar": {
    "ca": "Cancel·la",
    "en": "Cancel",
    "ja": "キャンセル"
  },
  "Nueva lista": {
    "ca": "Llista nova",
    "en": "New list",
    "ja": "新しいリスト"
  },
  "Perfil personal": {
    "ca": "Perfil personal",
    "en": "Personal profile",
    "ja": "プロフィール"
  },
  "Avatar predeterminado": {
    "ca": "Avatar predeterminat",
    "en": "Default avatar",
    "ja": "標準アバター"
  },
  "Nombre visible": {
    "ca": "Nom visible",
    "en": "Display name",
    "ja": "表示名"
  },
  "Idioma de traducción": {
    "ca": "Idioma de traducció",
    "en": "Translation language",
    "ja": "訳語の言語"
  },
  "Nivel de estudio": {
    "ca": "Nivell d’estudi",
    "en": "Study level",
    "ja": "学習レベル"
  },
  "Guardar búsquedas recientes": {
    "ca": "Desa les cerques recents",
    "en": "Save recent searches",
    "ja": "最近の検索を保存"
  },
  "Mostrar lecturas de las palabras": {
    "ca": "Mostra les lectures de les paraules",
    "en": "Show word readings",
    "ja": "単語の読みを表示"
  },
  "Guardar cambios": {
    "ca": "Desa els canvis",
    "en": "Save changes",
    "ja": "変更を保存"
  },
  "Guardado en esta vista de ejemplo.": {
    "ca": "Desat en aquesta vista d’exemple.",
    "en": "Saved in this sample view.",
    "ja": "このサンプル画面に保存しました。"
  },
  "Nombre de la nueva lista": {
    "ca": "Nom de la llista nova",
    "en": "New list name",
    "ja": "新しいリストの名前"
  },
  "Nombre de la lista": {
    "ca": "Nom de la llista",
    "en": "List name",
    "ja": "リスト名"
  },
  "Crear": {
    "ca": "Crea",
    "en": "Create",
    "ja": "作成"
  },
  "Eliminar lista": {
    "ca": "Elimina la llista",
    "en": "Delete list",
    "ja": "リストを削除"
  },
  "{n} palabras": {
    "ca": "{n} paraules",
    "en": "{n} words",
    "ja": "{n} 語"
  },
  "Abrir lista": {
    "ca": "Obre la llista",
    "en": "Open list",
    "ja": "リストを開く"
  },
  "Todavía no hay listas.": {
    "ca": "Encara no hi ha llistes.",
    "en": "No lists yet.",
    "ja": "リストはまだありません。"
  },
  "Volver a mis listas": {
    "ca": "Torna a les meves llistes",
    "en": "Back to my lists",
    "ja": "マイリストに戻る"
  },
  "Añadir palabra a la lista": {
    "ca": "Afegeix una paraula a la llista",
    "en": "Add word to list",
    "ja": "リストに単語を追加"
  },
  "Añadir palabra…": {
    "ca": "Afegeix una paraula…",
    "en": "Add a word…",
    "ja": "単語を追加…"
  },
  "Filtrar palabras": {
    "ca": "Filtra les paraules",
    "en": "Filter words",
    "ja": "単語を絞り込む"
  },
  "Buscar en tus palabras…": {
    "ca": "Cerca entre les teves paraules…",
    "en": "Search your words…",
    "ja": "自分の単語を検索…"
  },
  "Quitar de favoritas": {
    "ca": "Treu de les preferides",
    "en": "Remove from favorites",
    "ja": "お気に入りから削除"
  },
  "Añadir a favoritas": {
    "ca": "Afegeix a les preferides",
    "en": "Add to favorites",
    "ja": "お気に入りに追加"
  },
  "Palabra favorita": {
    "ca": "Paraula preferida",
    "en": "Favorite word",
    "ja": "お気に入りの単語"
  },
  "Quitar de la lista": {
    "ca": "Treu de la llista",
    "en": "Remove from list",
    "ja": "リストから削除"
  },
  "No hay palabras que coincidan con tu búsqueda.": {
    "ca": "No hi ha paraules que coincideixin amb la cerca.",
    "en": "No words match your search.",
    "ja": "検索に一致する単語はありません。"
  },
  "Todavía no hay palabras aquí.": {
    "ca": "Encara no hi ha paraules aquí.",
    "en": "No words here yet.",
    "ja": "ここにはまだ単語がありません。"
  },
  "Volver al diccionario": {
    "ca": "Torna al diccionari",
    "en": "Back to dictionary",
    "ja": "辞書に戻る"
  },
  "Primeras palabras": {
    "ca": "Primeres paraules",
    "en": "First words",
    "ja": "はじめの単語"
  },
  "Palabras que me inspiran": {
    "ca": "Paraules que m’inspiren",
    "en": "Words that inspire me",
    "ja": "心に響く言葉"
  },
  "Página no encontrada": {
    "ca": "Pàgina no trobada",
    "en": "Page not found",
    "ja": "ページが見つかりません"
  },
  "La página que buscas no existe o se ha movido.": {
    "ca": "La pàgina que cerques no existeix o s’ha mogut.",
    "en": "The page you’re looking for doesn’t exist or has moved.",
    "ja": "お探しのページは存在しないか、移動しました。"
  },
  "Esta página no se ha cargado": {
    "ca": "Aquesta pàgina no s’ha carregat",
    "en": "This page didn’t load",
    "ja": "ページを読み込めませんでした"
  },
  "Se ha producido un error. Puedes reintentarlo o volver al diccionario.": {
    "ca": "S’ha produït un error. Pots tornar-ho a provar o tornar al diccionari.",
    "en": "Something went wrong. Try again or return to the dictionary.",
    "ja": "エラーが発生しました。もう一度試すか、辞書に戻ってください。"
  },
  "Reintentar": {
    "ca": "Torna-ho a provar",
    "en": "Try again",
    "ja": "再試行"
  },
  "Volver": {
    "ca": "Torna",
    "en": "Back",
    "ja": "戻る"
  }
} satisfies TranslationTable;

export default ui;
