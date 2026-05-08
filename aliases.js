// =============================================================================
// aliases.js — таблицы фонетических псевдонимов для STT-проверки произношения
// =============================================================================
//
// КАК ДОБАВИТЬ НОВЫЙ ТОПОНИМ:
//   1. Найди нужный раздел ниже (или создай свой — скопируй заголовок секции)
//   2. Добавь строку:
//        'название': ['вариант1', 'вариант2'],
//      где 'название' — слово в нижнем регистре,
//      а варианты — то, что STT реально возвращает вместо него.
//
// КАК УЗНАТЬ ВАРИАНТ STT:
//   Нажми микрофон в тренажёре и произнеси слово — в блоке feedback
//   написано «Распознано как: "..."». Скопируй это и добавь сюда.
//
// ВАЖНО:
//   - Все ключи и варианты — только строчными буквами
//   - После последней записи в секции запятая не обязательна,
//     но лучше ставить — так легче добавлять следующую строку
//   - Файл должен быть в той же папке, что и index.html
// =============================================================================


// -----------------------------------------------------------------------------
// TOPONYM_ALIASES
// Что STT слышит вместо топонима. Ключ — правильное написание (строчными),
// значение — массив вариантов, которые STT может вернуть.
// -----------------------------------------------------------------------------
const TOPONYM_ALIASES = {

  // --- Британские топонимы с нестандартным чтением ---
  'worcestershire': ['wooster', 'wuster', 'woostersher', 'worcestershire shire'],
  'worcester':      ['wooster', 'wuster'],
  'leicester':      ['lester', 'lister'],
  'gloucester':     ['gloster', 'glooster'],
  'edinburgh':      ['edinburra', 'edinbura', 'edinboro'],
  'hertfordshire':  ['hartfordshire', 'hatfordshire'],
  'berkshire':      ['barkshire', 'berkshire'],
  'norwich':        ['norrich', 'norridge'],
  'alnwick':        ['annick', 'anik'],
  'marylebone':     ['marrlebone', 'marry le bone', 'marylibone'],

  // --- Европейские ---
  'reykjavik':      ['rack yawvik', 'rake ya vik', 'rake yaw vik', 'reick ya vik'],
  'kyiv':           ['kiev', 'keev', 'key iv'],
  'dubai':          ['doo bye', 'do buy'],
  'qatar':          ['cutter', 'katar', 'gutter'],
  'cairo':          ['kyro', 'kayro'],
  'beijing':        ['bayjing', 'bay jing', 'peking'],
  'lyon':           ['lee on', 'leon'],
  'marseille':      ['marsay', 'mar say'],
  'versailles':     ['versai', 'ver sigh'],
  'bruges':         ['broozh', 'brooj'],
  'ghent':          ['gent', 'kent'],
  'cannes':         ['can', 'kahn'],
  'nice':           ['niece', 'neese'],
  'milan':          ['meelan', 'milan'],
  'cologne':        ['ca lone', 'cologne'],
  'munich':         ['myunich', 'myoonik'],
  'prague':         ['prahg', 'prog'],
  'warsaw':         ['worsaw', 'warszawa'],
  'zurich':         ['zurik', 'tsyurich'],
  'geneva':         ['jeneva', 'jeniva'],
  'naples':         ['nayples', 'naipolz'],
  'athens':         ['athenss', 'athinz'],
  'lisbon':         ['lizbun', 'lisburn'],
  'seville':        ['seveel', 'sevil'],
  'malaga':         ['malaga', 'ma laga'],
  'mallorca':       ['majorca', 'mi orca', 'majork'],
  'ibiza':          ['ibeetha', 'ebeeza'],
  'riyadh':         ['ree yad', 'riyad', 're yad'],
  'doha':           ['doe ha'],
  'muscat':         ['muskut', 'musket'],
  'tehran':         ['teh ron', 'teh rahn', 'teheran'],
  'baghdad':        ['bag dad', 'bagdad'],
  'islamabad':      ['is lama bad'],
  'karachi':        ['kurachi', 'carotchi'],
  'lahore':         ['la hoar', 'lahor'],
  'dhaka':          ['daka', 'dacca'],
  'kathmandu':      ['cat man doo', 'catmandu'],
  'hanoi':          ['ha noy', 'huh noy'],
  'phnom penh':     ['nom pen', 'phnom pen'],
  'kuala lumpur':   ['kwala lumpur', 'koala lumpur'],
  'bangkok':        ['bangcock', 'bankok'],
  'colombo':        ['colom bo', 'columbia'],
  'nairobi':        ['ny robi', 'nigh robi'],
  'antananarivo':   ['antana narivo', 'an tan a narivo'],
  'ouagadougou':    ['waga dugu', 'waga doo goo'],
  'ndjamena':       ['in ja mena', 'ja mena'],
  'niamey':         ['nee a may', 'nyamey'],
  'libreville':     ['libra vil', 'liberville'],
  'montevideo':     ['monte video', 'montyvideo'],
  'asuncion':       ['a soon syon'],
  'tegucigalpa':    ['te goose ee galpa', 'tegusigalpa'],
  'reykjanes':      ['rake ya nes', 'rake nes'],

  // --- Москва: улицы и районы ---
  'arbat':              ['our butt', 'are butt', 'our bat', 'are bat', 'arbot', 'ar bat', 'autobot'],
  'tsar bell':          ['barbell',],
  'tsar cannon':        ['zara cannon',],
  'tverskaya':          ['tverskaia', 'tver skaya'],
  'lubyanka':           ['lu byanka', 'loobianka', 'lu bianka'],
  'kitai-gorod':        ['kitai gorod', 'kite gorod', 'kitay gorod'],
  'zamoskvorechye':     ['za moskvorechye', 'zamoskvo rechye'],
  'khamovniki':         ['hamovniki', 'kha movniki'],
  'pokrovka':           ['po krovka', 'pokrofka'],
  'myasnitskaya':       ['myasnitskaia'],
  'ostozhenka':         ['os tozhenka', 'ostogenka'],
  'prechistenka':       ['pre chistenka', 'prechystenka'],

  // --- Россия: знаковые места ---
  'kremlin':            ['kremlim', 'krem lin'],
  'peterhof':           ['peter hoff', 'peter hof', 'peterhoff'],
  'hermitage':          ['hermi tage', 'hermitaj'],
  'nevsky prospekt':    ['nevski prospekt', 'nevsky prospect', 'nevski prospect'],
  'nevsky':             ['nevski', 'nefski'],
  'baikal':             ['by kal', 'bike al', 'baykal'],
  'kamchatka':          ['kam chatka', 'kamchatca'],
  'sakhalin':           ['sakha lin', 'sahalin'],
  'norilsk':            ['nor ilsk', 'norylsk'],
  'surgut':             ['sur gut', 'soor goot'],
  'magadan':            ['maga dan', 'ma gadan'],
  'yakutia':            ['ya kutia', 'yakootia'],
  'chukotka':           ['choo kotka', 'chu kotka'],
  'tsar bell':          ['zarbel', 'sarbel', 'zar bell', 'sar bell', 'charbel', 'barbel'],
  'tsar cannon':        ['sarah cannon'],

  // --- Россия: города ---
  'moscow':             ['moskow', 'mosko', 'mosco'],
  'saint petersburg':   ['saint peterburg', 'st petersburg', 'saint petersberg', 'san petersburg'],
  'st petersburg':      ['saint peterburg', 'st peterburg'],
  'novosibirsk':        ['novo sibirsk', 'novosibirk', 'novo sibirk'],
  'yekaterinburg':      ['ekaterinburg', 'yekaterin burg', 'yekaterinberg'],
  'ekaterinburg':       ['yekaterinburg', 'yekaterin burg', 'ekaterin burg'],
  'nizhny novgorod':    ['nizhni novgorod', 'nizhniy novgorod', 'nizhny novgrad'],
  'chelyabinsk':        ['cheliabinsk', 'chelya binsk', 'chelia binsk'],
  'samara':             ['sa mara', 'sumara'],
  'omsk':               ['omsc', 'oomsk'],
  'rostov-on-don':      ['rostov on don', 'rostof on don'],
  'rostov on don':      ['rostov-on-don', 'rostof on don', 'rostov ondone'],
  'ufa':                ['oo fa', 'oofah'],
  'krasnoyarsk':        ['krasno yarsk', 'krasnoyarsc'],
  'voronezh':           ['voronesh', 'voro nezh'],
  'volgograd':          ['volga grad', 'volga grod'],
  'krasnodar':          ['krasno dar', 'krasna dar'],
  'saratov':            ['sara tov', 'saratoff'],
  'tyumen':             ['tyoo men', 'tumen', 'chu men'],
  'tolyatti':           ['tolyati', 'toliatti', 'tol yati'],
  'izhevsk':            ['izhefsk', 'izhe vsk', 'izhevsc'],
  'barnaul':            ['barna ool', 'bar naul'],
  'irkutsk':            ['ir kutsk', 'irkootsk', 'irkutsc'],
  'ulyanovsk':          ['ulya novsk', 'ulianovsk', 'uliyanovsk'],
  'khabarovsk':         ['khabarofsk', 'kha barovsk', 'habarovsk'],
  'vladivostok':        ['vladi vostok', 'vladee vostok', 'vlady vostok'],
  'yaroslavl':          ['yaro slavl', 'yaroslavle', 'yara slavl'],
  'makhachkala':        ['maha chkala', 'makhach kala', 'mahachkala'],
  'tomsk':              ['tomsc', 'toomsk'],
  'orenburg':           ['oren burg', 'orenburgh'],
  'kemerovo':           ['kemero vo', 'kemerova'],
  'novokuznetsk':       ['novo kuznetsk', 'novokuzneck'],
  'ryazan':             ['rya zan', 'ryazahn', 'riazan'],
  'astrakhan':          ['astra khan', 'astrakahn'],
  'naberezhnye chelny': ['naberezhnye chelni', 'naberezhnie chelny'],
  'penza':              ['pen za'],
  'lipetsk':            ['li petsk', 'lipeck', 'li peck'],
  'kirov':              ['ki rov', 'kirof'],
  'cheboksary':         ['chebo ksary', 'cheboksari'],
  'tula':               ['too la', 'toola'],
  'kaliningrad':        ['kalinin grad', 'kalineen grad'],
  'kursk':              ['koorsk', 'kursc'],
  'stavropol':          ['stavra pol', 'stav ropol'],
  'ulan-ude':           ['ulan ude', 'oolon oodeh', 'ulan udeh'],
  'murmansk':           ['moorman sk'],
  'magnitogorsk':       ['magnito gorsk', 'magnitogorsc'],
  'bryansk':            ['briyansk', 'brya nsk'],
  'ivanovo':            ['iva novo'],
  'arkhangelsk':        ['arkhan gelsk', 'archangel sk', 'archangelsk'],
  'belgorod':           ['bel gorod', 'belgorot'],
  'vladimir':           ['vladi mir', 'vladee mir'],
  'yakutsk':            ['ya kutsk', 'yakootsk'],
  'petropavlovsk-kamchatsky': ['petro pavlovsk kamchatsky', 'petropavlovsk kamchatski'],
  'yuzhno-sakhalinsk':  ['yuzhno sakhalinsk', 'yoojno sakhalinsk', 'yuzhno sahalinsk'],
  'syktyvkar':          ['sik tiv kar', 'syktiv kar'],
  'pskov':              ['pskof', 'skov'],
  'smolensk':           ['smo lensk', 'smolensc'],
  'kostroma':           ['kos troma'],
  'veliky novgorod':    ['velikiy novgorod', 'veli ky novgorod', 'veliki novgorod'],
  'tver':               ['tvair'],
  'perm':               ['pyerm'],

  // --- США и Канада ---
  'tucson':         ['too son', 'tuson'],
  'albuquerque':    ['al buh ker kee', 'albukerky'],
  'baton rouge':    ['baton roozh', 'batton rouge'],
  'new orleans':    ['new orlins', 'new orlee ans'],

  // --- Ваши добавления (сюда удобно вставлять новые) ---
  // 'название': ['вариант stт 1', 'вариант stт 2'],

};


// -----------------------------------------------------------------------------
// BR_US_SPELLINGS
// Британское написание → американское (STT возвращает US-вариант).
// Нормализация двусторонняя: armoury и armory считаются одинаковыми.
// -----------------------------------------------------------------------------
const BR_US_SPELLINGS = {
  'armoury':    'armory',
  'armour':     'armor',
  'colour':     'color',
  'honour':     'honor',
  'favour':     'favor',
  'behaviour':  'behavior',
  'neighbour':  'neighbor',
  'harbour':    'harbor',
  'labour':     'labor',
  'centre':     'center',
  'theatre':    'theater',
  'metre':      'meter',
  'litre':      'liter',
  'fibre':      'fiber',
  'defence':    'defense',
  'offence':    'offense',
  'licence':    'license',
  'practise':   'practice',
  'analyse':    'analyze',
  'organise':   'organize',
  'recognise':  'recognize',
  'realise':    'realize',
  'apologise':  'apologize',
  'travelling': 'traveling',
  'jewellery':  'jewelry',
  'programme':  'program',
  'catalogue':  'catalog',
  'dialogue':   'dialog',
  'cheque':     'check',
  'draught':    'draft',
  'plough':     'plow',
  'tyre':       'tire',
  'kerb':       'curb',
  'mould':      'mold',
  'smoulder':   'smolder',
  'manoeuvre':  'maneuver',
  'pyjamas':    'pajamas',
  'sceptical':  'skeptical',
  'storey':     'story',
  'cosy':       'cozy',

  // --- Ваши добавления ---
  // 'британское': 'американское',
};


// -----------------------------------------------------------------------------
// STT_SOUND_NORM
// Контекстные замены: что STT вернул → оригинальное слово.
// Применяются ТОЛЬКО когда оригинальное слово присутствует в цели —
// чтобы 'star' не превращался в 'tsar' при тренировке обычных слов.
// -----------------------------------------------------------------------------
const STT_SOUND_NORM = {
  'stars':   'tsars',
  'czars':   'tsars',
  'zars':    'tsars',
  'star':    'tsar',
  'czar':    'tsar',
  'zar':     'tsar',
  'sarina':  'tsarina',
  'czarina': 'tsarina',
  'sunami':  'tsunami',
  'soonami': 'tsunami',

  // --- Ваши добавления ---
  // 'что слышит stт': 'оригинал',
};


// -----------------------------------------------------------------------------
// SOUND_ALIASES
// Для проверки отдельных слов (не предложений).
// Ключ — оригинальное слово, значение — варианты STT.
// -----------------------------------------------------------------------------
const SOUND_ALIASES = {
  'tsars':   ['stars', 'zars', 'czars'],
  'tsar':    ['star', 'zar', 'czar', 'sar'],
  'tsarina': ['sarina', 'czarina', 'zarina'],
  'tsunami': ['sunami', 'soonami'],
  'tsetse':  ['setse', 'sestse'],
  'tzar':    ['star', 'zar', 'czar'],

  // --- Ваши добавления ---
  // 'слово': ['вариант1', 'вариант2'],
};
