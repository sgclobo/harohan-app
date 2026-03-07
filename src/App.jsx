import React, { useState, useMemo } from "react";
import {
  Book,
  Music,
  Sun,
  ChevronRight,
  Cross,
  Search,
  Home,
  Type,
  Plus,
  Minus,
  Copy,
  Check,
  ClipboardList,
} from "lucide-react";

// --- DATA: ORASAUN (REZA) ---
const ORASAUN_DATA = [
  {
    id: "angelus",
    title: "Angelus",
    context: "Tempu bai-bain",
    content: `Na'i Maromak nia Anju hodi Na'i Maromak nia lian ba Maria.\nNia ko'us dau-daun tamba Espiritu Santu nia grasa.\n\nAve Maria...\n\nHa'u ne'e, Na’i Maromak nia atan deit.\nAtu halo tuir duni Ita Boot nia lian.\n\nAve Maria...\n\nMaromak Filho halo an ba mane.\nNia mai moris duni hamutuk ho ita.\n\nAve Maria...\n\nMaromak nia Inan Santa, harohan mai ami ata.\nAmi atu bele hetan Jesus Kristu nia rahun diak.\n\nOrasaun: Na'i Maromak, ami ata husu ba Ita Boot atu haraik Ita Boot nia grasa mai ami nia klamar. Tuir Anju nia lia ami hatene lolos katak Ita Boot nia Oan halo An ba Mane duni. Tan nia terus to'o mate iha krus, ami harohan ba Ita Boot, halo ami ata moris tali atu ba iha lalehan. Ami husu ne'e tanba ami nia na'i Jesus Kristu. Amen.`,
  },
  {
    id: "regina-coeli",
    title: "Regina Coeli",
    context: "Tempu Pascoa",
    content: `Liurai Feto lalehan, Ita Boot neon kontente, aleluia!\nTanba Oan Ita Boot kous, aleluia.\n\nMoris fali nudar Nia uluk hateten, aleluia!\nHarohan Na’i Maromak mai ami, aleluia.\nOh Virjem Maria, Ita Boot bele ona kontente teb-tebes, aleluia!\nTanba ami na'i Na'i moris fali lolos, aleluia!\n\nOrasaun: Na'i Maromak, Ita boot halo ema hot-hotu kontente tanba Ita Boot nia Oan, ami Na'i Jesus Kristu, moris fali duni; tan nia Inan Virjem Maria, halo ami hetan rahun diak nafatin iha lalehan. Ami husu ne’e tanba ami Na'i Jesus Kristu. Amen.`,
  },
  {
    id: "dader",
    title: "Orasaun Dader",
    content: `Ha'u nia Maromak, ha'u adora Ita boot, ha'u hadomi Ita Boot, ho ha'u nia laran tomak. Ha'u agradese Ita Boot tanba Ita Boot mak halo ha'u moris, halo ha'u sarani, halo ha'u deskansa iha kalan ida ne'e. Buat hot-hotu ha'u halo iha loron ne'e ha'u hasa'e ba ItaBoot, Na’i Maromak halo ha’u moris ohin ne’e hodi tuir deit Ita Boot nia hakarak, hodi buka deit Ita Boot nia gloria. Dada ha’u sai hosi sala no hosi buat aat hotu. Haraik Ita Boot nia grasa ho Ita Boot nia bensa mai ha’u, ba ha’u nia parente sira no ba ema hot-hotu. Amen.`,
  },
  {
    id: "kontrisaun",
    title: "Aktu de Kontrisaun",
    content: `Ha’u nia Maromak, ha’u hanoin ho laran moras sala hot-hotu ha’u halo ona kontra Ita Boot diak liu, nebe halo diak deit mai ha’u. Ha’u hasa’e lialos ba Ita Boot, hodi Ita Boot nia grasa, lakohi sala tan. Ha’u husu barak Ita Boot perdua ha’u, tanba Ita Boot laran diak ho tanba ha’u nia Na’i Jesus Kristu terus to'o mate tanba ha’u.`,
  },
 {
    id: "anju-hein-ita",
    title: "Orasaun ba Anju hein Ita",
    content: `Na’i Maromak nia Anju Santu, hein didiak ha’u. Ukun ha’u nafatin, halo ha’u tuir diak deit tanba Na’i Maromak rasik mak entrega ha’u iha ita boot nia liman. 𝐀𝐦𝐞𝐧`,
  },
  
 {
    id: "atu-de-fe",
    title: "AKTU DE FE, ESPERANSA NO KARIDADE",
    content: `Ha’u nia Maromak, ha’u fiar no hein metin Ita Boot, 
ha’u hadomi Ita Boot liu sasan hot-hotu no hadomi 
maun alin sira nudar ha’u an rasik tanba Ita Boot.`,
  },
  
{
    id: "santo-padre",
    title: "ORASAUN BA SANTU PADRE",
    content: `𝐈𝐭𝐚 𝐡𝐚𝐫𝐨𝐡𝐚𝐧 𝐛𝐚 𝐢𝐭𝐚 𝐧𝐢𝐚 𝐀𝐦𝐨 𝐏𝐚𝐩𝐚, 𝐒𝐚𝐧𝐭𝐮 𝐏𝐚𝐝𝐫𝐞 𝐋𝐞𝐚𝐨 𝐗𝐈𝐕\nNa’i haraik isin diak ba nia, hametin no tahan nia.\n𝐎𝐫𝐚𝐬𝐚𝐮𝐧Maromak sarani hotu nia Bibi atari no mata dalan; hateke ho laran diak ba ita atan, Amo Papa Bento XVI, nebe Ita Boot mak fihir nudar Ita Kreda nia Bibi atan. Haraik atu povu nebe nia ukun simu didiak nia liafuan no esemplu sira, atu nune'e, nia bele to'o moris rohan laek hamutuk ho bibi luhan tomak nebe Ita Boot hameno ba nia. Ami harohan ne'e hodi ami Na’i Jesus Kristu hamutuk ho Espiritu Santu. <b>Amen.</b>`,
  },
{
    id: "vokasaun",
    title: "ORASAUN ATU HUSU VOKASAUN",
    content: `Jesus tutor Fuan iha Eukaristia, Nailulik boot rohan laek: tanba Ita Boot nia domin laran luak, ami husu atu tulun familia sai santu; nune'e, hanesan viveiro diak ida, bele naburas vokasaun barak ba Ita nia Kreda. Haraik mos nailulik barak mai ami, nailulik sira nakonu ho Ita Boot nia Espiritu, manas ho Ita Boot nia Karidade atu buka deit Ita Boot nia reinu iha rai ne'e no Ita Boot nia gloria iha Lalehan\n𝐎𝐡 𝐉𝐞𝐬𝐮𝐬, 𝐌𝐚𝐤𝐬𝐨𝐢𝐧 𝐦𝐮𝐧𝐝𝐮 𝐧𝐢𝐚𝐧.\nHaraik santidade ba ita nia nailulik sira.\n𝐎𝐡 𝐌𝐚𝐫𝐢𝐚, 𝐊𝐥𝐞𝐫𝐨 𝐧𝐢𝐚 𝐋𝐢𝐮𝐫𝐚𝐢 𝐅𝐞𝐭𝐨.\nHaraik nailulik barak no santu ba Ita nia Kreda.`,
  },
{
    id: "salve-liurai-feto",
    title: "SALVE LIURAI FETO",
    content: `Salve Liurai Feto, Inan hanoin ami, ami nia rahun diak, ami nia esperansa, salve. Ami ata Eva nia oan des- terradu, hasa'e ami nia lia ba Ita Boot; hodi tanis ami husu deit Ita Boot tulun ami ata iha tanis fatin ne'e. Ne'e duni, ami nia Advogada, fila mai ami ata Ita Boot nia matan diak. Desterro ne'e hotu, hatudu mai ami ata Itaboot nia  Oan benti Jesus. Ou clemente, ou piedoza, ou doce virjen nafatin Maria.\n𝐌𝐚𝐫𝐨𝐦𝐚𝐤 𝐧𝐢𝐚 𝐈𝐧𝐚𝐧 𝐒𝐚𝐧𝐭𝐚 𝐡𝐚𝐫𝐨𝐡𝐚𝐧 𝐦𝐚𝐢 𝐚𝐦𝐢 𝐚𝐭𝐚.\nAmi atu bele hetan Jesus Kristu nia rahun diak.𝐀𝐦𝐞𝐧`,
  },
];

// --- DATA: MISSA (MISA) ---
const MISA_SECTIONS = [
  {
    id: "iniciais",
    title: "Ritos Iniciais",
    content: `S: Hodi Padre,...\nP: Amen.\n\nS: Na’i Jesus Cristo nia graça, Aman Maromak nia domin, hamutuk iha Espírito Santo, horik ho imi.\nP: Rahun-di’ak ba Maromak be halibur ita, iha Cristo nia domin.\n\nS: Maun-alin no feton sira: atu hala’o loloos mistério santo sira, hanoin lai katak ita ema maksalak. Confessa ita salan.\n\nHa’u confessa ba Maromak, Kbiit-tomak Na’in, No ba imi, maun-alin no feton sira, katak ha’u sala fil-fila, hodi hanoin no hateten, hodi hahalok no la hala’o ha’u knaar, ha’u sala, ha’u sala tebes duni. Tan ne’e, ha’u husu ba Santa Maria, Virgem nafatin, ba Anjo no Santo sira hotu, no mos ba imi, maun-alin no feton sira, atu harohan ba Maromak, ita Na’in, mai ha’u.\n\nS: Maromak kbiit-tomak Na’in sadi’a ita ba, perdua ita salan, lori ita ba moris rohan-laek.\nP: Amen.\n\nV: Na’i Sadi’a ami\nR: Na’i sadi’a ami\nV: Cristo sadi’a ami\nR: Cristo sadi’a ami\n\nGlória ba Maromak iha leten aas liu,\nPaz iha rai-klaran, ba ema sira be laran-di’ak.\nNa’i Maromak, Liurai lalehan, Aman Maromak kbiit-tomak Na’in: ami hawelok Ita, ami hahí Ita, ami adora Ita, ami haliban Ita, tan Ita-nia glória boot tebes...`,
  },
  {
    id: "liturjia",
    title: "Liturgia da Palavra",
    content: `L: Na’i nia futar Lia.\nP: Agradece ba Maromak.\n\nS: Na’i horik ho imi.\nP: Horik mos ho ita.\n\nS: Na’i Jesus Cristo nia Evangelho, tuir São N.\nP: Na’i Glória ba Ita.\n\nS: Lia maksoin.\nP: Cristo, ami hahí Ita.`,
  },
  {
    id: "profissao",
    title: "Profissão de Fé",
    content: `Ha’u fiar Maromak mesak ida de’it, Aman Kbiit-tomak Na’in, Mahalo lalehan no rai, buat hotu be bele haré no labele haré.\n\nHa’u fiar Na’i ida de’it, Jesus Cristo, Maromak Oan-mane Mesak, moris nanis hosi Aman molok tempo hahú. Maromak hosi Maromak, Naroman hosi Naroman. Maromak loos, hosi Maromak loloos; Aman hako’us, la halo Nia, nia-An ida de’it ho Aman. Buat hotu halo ona hodi Nia.\n\nTan ita ema, atu soi ita, Nia tun ona hosi Lalehan. Hodi Espírito Santo, Nia hola isin iha Virgem Maria nia knotak, halo nia-An ba ema. Tan mos ba ita, ema hedi Nia ba cruz, iha Pôncio Pilatos nia ukun; terus, mate tiha, ema hakoi Nia...`,
  },
  {
    id: "comunhao",
    title: "Ritos da Comunhão",
    content: `S: Tuir Maksoi hanorin, ita barani harohan:\n\nAmi Aman, be iha lalehan, halo ami hahí-hana’i Ita naran, halo Ita nia reino to’o mai ami; Ita nia hakaran halo tuir ba iha rai nu’udar iha lalehan. Ohin ne’e haraik aihan lor-loron nian mai ami; haraik perdão mai ami salan, nu’udar ami perdua ema halo aat ami; labele husik ami monu ba tentação; maibé hasai ami hosi aat.\n\nS: Na’i nia damen horik nafatin ho imi.\nP: Cristo-Nia domin halo ita hamutuk ona.\n\nBibi-oan Maromak nian be kasu mundo salan, sadi’a ami.\nBibi-oan Maromak nian be kasu mundo salan, haraik damen mai ami.`,
  },
];

// --- DATA: KNANANUK ---
const KNANANUK_DATA = [
  {
    id: 1,
    category: "Entrada",
    title: "Anin Maurin",
    content:
      "Anin malirin tasi fehan,\nlaloran tasi baku ba mai.\nRai badin lian mai\nfahe hakmatek matak malirin.\n\nKristu Maksoin, fatuk karan kmanek,\nHa'u laran metin ba Ita Boot\nIta mak dalan los; Iori ha'u to'o lalehan.",
  },
  {
    id: 2,
    category: "Entrada",
    title: "Bele Tama ba Lalehan",
    content:
      "Bele tama ba lalehan, (2x)\nse halo an kiik oan, (2x)\nbasa Jesus dehan, (2x)\n“Hato'o mai Ha’u (2x)\nkiik oan sira ne'e.” (2x)",
  },
  {
    id: 3,
    category: "Entrada",
    title: "Ema Rai Hotu",
    content:
      "Ema rai hotu, ema lubun boot, ema buka diak;\nNa’i nia ema, hahi o nia Maksoin.\n\nAmi hananu Kristu, Na'i Maromak nia Oan.\nAmi hahi Na'i Maromak boot tebes nia tutor Lia.",
  },
 {
  id: 4,
  category: "Entrada",
  title: "Diak Tebes Ba Jesus",
  content: `Diak tebes ba Jesus, Na'i Maromak.
Ita hananu ba Aman Maromak. (2x)

1. Hasa'e imi laran hodi basa imi nia liman,
Imi buka hadomi Na'i Maksoin. (2x)

2. Hamos imi nia laran hodi hananu ba Na'i...

3. Taka metin imi nia matan, hodi hana'i Na'i Jesus...

4. Hamos imi nia moris hodi fiar ba Jesus...`,
},
  {
    id: 5,
    category: "Responsorial",
    title: "Ami Hahi Itaboot nia Justisa",
    content: `Ami hahi Ita Boot nia justisa,
Ami haklaken Ita Boot laran luak, Kristu, Na'i Liurai!

1. Rai hotu iha Maromak futar liman,
Foho aas tomak Maromak nia soi.

2. Rai, tasi hotu Maromak ninian,
Ntan sira Maromak nia liman fatin.

3. Hahi, hana'i ba Na'i Maromak,

4. Hamos tan Nia Ita Maksoin.`,
  },
];

// --- DATA: ROZARIU ---
const ROZARIU_DATA = [
  {
    id: "gozosos",
    title: "I. Misterios Gozosos",
    subtitle: "Sei reza iha segunda feira no Sabado",
    content: `Maromak, hiit-An mai tulun ami.
Na'i mai lalais soi ami.
Gloria ba Padre...

Misterio 1: Ita sei hanoin katak Anju São Gabriel ba fo hatene ba Maria Santissima katak nia atu sai Maromak nia Inan.
(Ami Aman, Ave Maria 10, Gloria)

Oh Maria, Inan sala laek.
Haraik tulun mai ami nebe husu Ita Boot nia tulun.

Oh Jesus haraik perdua ba ami salan.
Keta husik ami monu ba ahi infernu nian; lori klamar sira ba lalehan, liu-liu sira nebe ema haluha atu harohan ba.

Misterio 2: Ita sei hanoin katak Maria Santissima ba visita nia feto maluk Santa Isabel.

Misterio 3: Ita sei hanoin katak Ita Na'i Jesus Kristu moris iha bibi luhan ida, iha rai Belem.

Misterio 4: Ita sei hanoin katak Ita Nain Feto ba apresenta nia Oan Jesus iha uma kreda boot Jerusalem.

Misterio 5: Ita sei hanoin katak Jesus lakon horik loron tolu ona, ita Nain Feto hetan fali Nia iha Jerusalem.`,
  },
  {
    id: "luminosos",
    title: "II. Misterios Luminosos",
    subtitle: "Sei reza iha Quinta feira",
    content: `Misterio 1: Ita sei hanoin katak João Baptista sarani Jesus iha mota Jordaun.

Misterio 2: Ita sei hanoin katak Jesus tuir festa kaben iha Kana.

Misterio 3: Ita sei hanoin katak Jesus la'o lemo rai haklaken Maromak nia Reinu.

Misterio 4: Ita sei hanoin katak Jesus nakfilak An iha foho Tabor.

Misterio 5: Ita sei hanoin katak Jesus han ba dala ikus, hodi hari Eukaristia.`,
  },
  {
    id: "dolorosos",
    title: "III. Misterios Dolorosos",
    subtitle: "Sei reza iha terça no sexta feira",
    content: `Misterio 1: Ita sei hanoin katak Jesus neon sala, halo orasaun iha toos Oliveira nian.

Misterio 2: Ita sei hanoin katak ema Judeu sira futu Ita Na'i Jesus Kristu, baku nia isin, halo mesa kanek.

Misterio 3: Ita sei hanoin katak ema tau aitarak ba Jesus nia futar ulun.

Misterio 4: Ita sei hanoin katak Jesus lori nia krus, hodi ba to'o foho Kalvario.

Misterio 5: Ita sei hanoin katak ita Na'i Jesus Kristu hedi netik iha krus, terus to'o mate tanba ita.`,
  },
  {
    id: "gloriosos",
    title: "IV. Misterios Gloriosos",
    subtitle: "Sei reza iha quarta feira no Domingo",
    content: `Misterio 1: Ita sei hanoin katak Jesus mate tiha, liu loron tolu nia moris hias.

Misterio 2: Ita sei hanoin katak Jesus sa'e rasik ba lalehan.

Misterio 3: Ita sei hanoin katak Espiritu Santu tun husi lalehan mai tan Maria Santissima no apostolu sira.

Misterio 4: Ita sei hanoin katak Na'i Maromak hasa'e ita Nain Feto ba lalehan.

Misterio 5: Ita sei hanoin katak Na'i Maromak haraik gloria boot ba Maria Santissima iha lalehan.

—

"Segundo a prática corrente, a segunda e a quinta-feira são dedicadas aos 'mistérios da alegria', a terça e a sexta-feira aos 'mistérios da dor', a quarta-feira, o sábado e o domingo aos 'mistérios da glória'. Onde se podem inserir os 'mistérios da luz'? Atendendo a que os mistérios gloriosos são propostos em dois dias seguidos –sábado e domingo– e que o sábado é tradicionalmente um dia de intenso carácter mariano, parece recomendável deslocar para ele a segunda meditação semanal dos mistérios gozosos, nos quais está mais acentuada a presença de Maria. E assim fica livre a quinta-feira precisamente para a meditação dos mistérios da luz."

ROSARIUM VIRGINIS MARIAE DO SUMO PONTÍFICE JOÃO PAULO II, no. 38`,
  },
];

// --- DATA: TERÇO DA MISERICÓRDIA ---
const TERSO_DATA = [
  {
    id: "koronka",
    title: "Koronka Jesus Laran Luak",
    image: "tersu.jpg",
    sections: [
      {
        heading: "Oração Hahu Nian (15.00)",
        content: `O Jesus, Ita be mate tiha, maibe ué matan moris nian
suli nafatin baklamar sira, no ita laran luak nakloke ba mundu tomak.

Ó ué matan moris nian, Ita nia laran luak nebé rohan laek,
suli nafatin bamundo tomak no namamuk-An mai ami.`,
      },
      {
        badge: "Ran no ué nebé naroman hosi Jesus Futar Fuan Santo,",
        content: `_Ran no ué nebé naroman hosi Jesus Futar Fuan Santo,
nu'udar ué matan rohan laek mai mai'mi,
ha'u fiar iha Ita Boot_ (3x).`,
      },
      {
        content: `**Ami Aman**, be iha lalehan, halo ami hahí hana'i Ita naran,
halo Ita nia reino to'o mai ami,
Ita nia hakarak halo tuir ba,
iha rai nu'udar iha lalehan;

**Ohin** ne'e haraik ai-han lor-loron nian mai ami,
haraik perdaun mai ami sala,
nu'udar ami perdua ema halo aat ami,
labele husik ami monu ba tentação,
maibe hasai ami hosi aat.
Amen.`,
      },
      {
        content: `**Ave Maria**, grasa barak liu iha Ita boot,
Maromak ho Ita Boot,
Ita boot di'ak liu feto hotu-hotu,
Ita Boot nia Oan Jesus di'ak liu.

**Santa Maria**, Maromak nia Inan,
harohan mai ami ema maksalak sira,
horas ne'e no horas ne'bé ami ata mate.
Amen.`,
      },
    ],
  },
  {
    id: "credo",
    title: "Credo",
    sections: [
      {
        content: `**HA'U FIAR NA'I MAROMAK**,
Aman kbiit tomak na'in mahalo lalehan no rai;
no **Jesus Cristo**, nia Oan Mane Mesak ita Na'in;
_be ko'us ona hodi Espírito Santo nia kbiit_;
moris hosi Virgem Maria;
terus iha Poncio Pilatus nia ukun, hedi iha Cruz,
mate no hakoi tiha; tuan ba mate sira hela fatin;
liu loron tolu moris hias; hi'it-An ba lalehan;
he'in-An iha Aman Maromak
kbiit-tomak Na'in nia sorin kuana,
hosi nebe sei hi'it-An mai,
atu tesilia ba ema moris no ba ema mate.

**Ha'u Fiar Espírito Santo**,
Santa Kreda Católica; Santo sira tulun malu; salan sira kasu ona,
moris hi'as isin nian no moris rohan laek. Amen.`,
      },
      {
        badge: "Nas contas grandes:",
        content: `Aman hun no rohan laek,
ha'u hasa'e ba Ita Boot,
Ita Oan Doben ami Na'i Jesus Kristu Nia Isin,
Ran, Klamar no Divindade
Hodi kasu ami salan
no mundo tomak nia salan hotu.`,
      },
      {
        badge: "Nas contas pequenas, em vez das Ave Marias, dizemos:",
        content: `Tanba Jesus nia Terus, todan liu
sadi'a ami no mundo tomak Na'i. (10x)`,
      },
      {
        badge: "No fim dizemos três vezes:",
        content: `Maromak Santo, Maromak Kbiit ua'in,
Maromak moris tinan ba tinan nafatin,
sadi'a ami no mundo tomak.`,
      },
    ],
  },
  {
    id: "finais",
    title: "Orações Finais",
    sections: [
      {
        heading: "Oração atu Taka Nian:",
        content: `Aman hun no rohan laek,
Ita Boot nia laran luak rohan laek,
no riko soin domin Itanian nebe la iha kotu,
hateke mai ami ho laran luak
no hakbiit liu tan Ita laran luak iha ami laran,
atu iha tempo susar
ami labele lakon esperanca ou laran dodok,
maibe ho fiar metin ami entrega ami-an tomak
tuir Ita Boot nia hakarak nebe Santo,
Na'in ba domin no laran luak nian.`,
      },
      {
        heading: "Oração ba Saúde:",
        content: `Jesus, Ita Boot nia ran nebe mos no kmo'ok,
naksulin mai ha'u isin nebe moras;
Ita Boot nia isin nebe mos no kmanek,
bele fo hikas ksolok mai ha'u isin nebe kbiit laek;
Ita Boot nia moris nebe furak no kbiit maka'as
bele suli nafatin mai, tuir los Ita nia hakarak mai ha'u ata.`,
      },
    ],
  },
  {
    id: "santa-faustina",
    title: "Oração Husu Tulun hosi Santa Faustina",
    sections: [
      {
        content: `O Jesus,
Ita be halo Santa Faustina
hadomi momos Ita Laran Luak nebe rohan laek,
no hosi nia, hodi tuir los Ita nia hakarak nebe santo,
bele haraik mai ha'u ata.

Na'i, ha'u ema maksalak,
nebe la soi atu simu Ita Boot nia laran luak,
maibe haré ba sacrificio no laran sadi'a hosi Santa Faustina,
simu ba ami nia harohan da'et hosi nia,
no ho laran tomak ami hato'o ba Ita Boot.`,
      },
      {
        content: `**Ami Aman**, be iha lalehan, halo ami hahí hana'i Ita naran,
halo Ita nia reino to'o mai ami,
Ita nia hakarak halo tuir ba,
iha rai nu'udar iha lalehan;

**Ohin** ne'e haraik ai-han lor-loron nian mai ami,
haraik perdaun mai ami sala,
nu'udar perdua ema halo aat ami,
labele husik ami monu ba tentação,
maibe hasai ami hosi aat.
Amen.

**Ave Maria**, grasa barak liu iha Ita boot,
Maromak ho Ita Boot,
Ita boot di'ak liu feto hotu,
Ita Boot nia Oan Jesus di'ak liu.

**Santa Maria**, Maromak nia Inan,
harohan mai ami ema maksalak sira,
horas ne'e no horas ne'bé ami ata mate.
Amen.

**Gloria ba Padre**, ba Fillu no ba Espítu Santu,
nudar hori uluk, oras ne'e, tinan ba tinan nafatin.
**Amen.**`,
      },
      {
        content: `**Sagrado Coração de Jesus**, _nos temos confiança em Vós_
**Sagrada Coração de Maria**, _sede minha salvação_

**São João Paulo II**, Harohan mai ami
**Santa Faustina**, Harohan mai ami
**Santo no Santa sira hotu iha lalehan**, Harohan mai ami.

**Jesus Divina Misericordia**, eu confio em vós

Dai-lhes Senhor o eterno Descanso
_Entre os resplendores da luz perpétua_

Descansem em Paz
_Amen_`,
      },
    ],
  },
  {
    id: "alma-cristo",
    title: "Alma de Cristo",
    image: "scj.jpeg",
    sections: [
      {
        content: `Alma de Cristo, santificai-me.
Corpo de Cristo, salvai-me.
Sangue de Cristo, inebriai-me.
Água do lado de Cristo, lavai-me.
Paixão de Cristo, confortai-me.
Ó bom Jesus, ouvi-me.
Dentro de Vossas chagas, escondei-me.
Não permitais que me separe de Vós.
Do espírito maligno, defendei-me.
Na hora da minha morte, chamai-me.
E mandai-me ir para Vós,
para que Vos louve com os vossos Santos,
por todos os séculos dos séculos.
**Amém.**`,
      },
    ],
  },
  {
    id: "salve-rainha",
    title: "Salve Rainha",
    image: "vm.jpeg",
    sections: [
      {
        content: `Salve Rainha, Mãe de misericórdia, vida,
doçura e esperança nossa, salve!
A vós bradamos os degredados filhos de Eva.
A vós suspiramos, gemendo e chorando neste vale de lágrimas.
Eia, pois, advogada nossa,
esses vossos olhos misericordiosos a nós volvei,
e depois deste desterro, mostrai-nos JESUS,
bendito fruto do Vosso ventre.
Ó clemente, ó piedosa, ó doce sempre Virgem Maria.
**Rogai por nós, Santa Mãe de DEUS.**
_Para que sejamos dignos das promessas de CRISTO._`,
      },
    ],
  },
];

const KNANANUK_CATEGORIES = [
  "Entrada",
  "Gloria",
  "Responsorial",
  "Aleluia",
  "Ofertorio",
  "Credo",
  "Santu",
  "Agnus Dei",
  "Komunhao",
  "Aksaun de Grasas",
];

// --- COMPONENTS ---

// Ti paulo ni header
const Header = ({ title, showBack, onBack }) => (
  <header className="sticky top-0 z-50 w-full px-4 py-3 flex items-center justify-between shadow-md" style={{ backgroundColor: "#1a1a2e" }}>
    <div className="flex items-center gap-3">
      {showBack && (
        <button
          onClick={onBack}
          className="p-2 hover:bg-white/10 rounded-full transition-colors"
        >
          <ChevronRight className="w-6 h-6 rotate-180 text-white" />
        </button>
      )}
      <h1 className="text-xl font-bold text-white uppercase tracking-tight">
        {title}
      </h1>
    </div>
    <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-pink-400 to-blue-500 flex items-center justify-center shadow-sm">
      <Cross className="w-4 h-4 text-white" />
    </div>
  </header>
);

// Ti paulo ni card
const Card = ({ children, onClick, className = "", style = {} }) => (
  <div
    onClick={onClick}
    style={{ backgroundColor: "#f5dadc", ...style }}
    className={`rounded-2xl p-4 shadow-sm border border-pink-100 active:scale-[0.98] transition-all cursor-pointer hover:border-pink-300 ${className}`}
  >
    {children}
  </div>
);

// Parses **bold** and _italic_ markers in a single line of text
const RichLine = ({ text }) => {
  const parts = [];
  const regex = /(\*\*[^*]+\*\*|_[^_]+_)/g;
  let last = 0;
  let match;
  while ((match = regex.exec(text)) !== null) {
    if (match.index > last) parts.push({ type: "plain", text: text.slice(last, match.index) });
    const raw = match[0];
    if (raw.startsWith("**")) parts.push({ type: "bold", text: raw.slice(2, -2) });
    else parts.push({ type: "italic", text: raw.slice(1, -1) });
    last = match.index + raw.length;
  }
  if (last < text.length) parts.push({ type: "plain", text: text.slice(last) });
  return (
    <span>
      {parts.map((p, i) =>
        p.type === "bold" ? <strong key={i}>{p.text}</strong>
        : p.type === "italic" ? <em key={i}>{p.text}</em>
        : <span key={i}>{p.text}</span>
      )}
    </span>
  );
};

// Renders full content preserving line breaks with **bold** and _italic_ support
const RichText = ({ content, fontSize }) => {
  const lines = content.split("\n");
  return (
    <div className="text-gray-700 leading-relaxed font-serif" style={{ fontSize: `${fontSize}px` }}>
      {lines.map((line, i) => (
        <span key={i}>
          <RichLine text={line} />
          {i < lines.length - 1 && <br />}
        </span>
      ))}
    </div>
  );
};

// Terço da Misericórdia full page view
const TersoView = ({ onBack, fontSize }) => (
  <div className="animate-in fade-in duration-500 pb-20 space-y-5">
    {/* Header card */}
    <div className="rounded-2xl p-5 text-center shadow-sm border border-pink-100" style={{ backgroundColor: "#f5dadc" }}>
      <h2 className="text-2xl font-black text-red-700 mb-3">Terço da Misericórdia</h2>
      <img
        src="/src/assets/tersu.jpg"
        alt="Terço da Misericórdia"
        className="mx-auto rounded-xl shadow-sm mb-1"
        style={{ maxWidth: "260px", width: "100%" }}
        onError={(e) => { e.target.style.display = "none"; }}
      />
    </div>

    {TERSO_DATA.map((section) => (
      <div key={section.id} className="rounded-2xl shadow-sm border border-pink-100 overflow-hidden" style={{ backgroundColor: "#f5dadc" }}>
        {/* Section title */}
        <div className="px-5 pt-4 pb-2 border-b border-pink-200">
          <h3 className="font-black text-lg text-gray-800">{section.title}</h3>
        </div>

        <div className="px-5 py-4 space-y-4">
          {/* Optional section image */}
          {section.image && (
            <img
              src={`/src/assets/${section.image}`}
              alt={section.title}
              className="rounded-xl shadow-sm"
              style={{ maxWidth: "260px", width: "100%" }}
              onError={(e) => { e.target.style.display = "none"; }}
            />
          )}

          {/* Subsections */}
          {section.sections.map((sub, i) => (
            <div key={i}>
              {/* Badge label (italic instruction) */}
              {sub.badge && (
                <p className="text-xs text-blue-700 border border-blue-300 rounded-full px-3 py-1 inline-block mb-2 italic">
                  {sub.badge}
                </p>
              )}
              {/* Heading label */}
              {sub.heading && (
                <p className="font-bold text-gray-700 mb-1">{sub.heading}</p>
              )}
              <RichText content={sub.content} fontSize={fontSize} />
              {i < section.sections.length - 1 && (
                <div className="border-t border-pink-200 mt-4" />
              )}
            </div>
          ))}
        </div>
      </div>
    ))}
  </div>
);

// Ti paulo ni content view
const ContentDisplay = ({ item, fontSize }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    // Strip markers so copied text is clean plain text
    const plain = item.content
      .replace(/\*\*([^*]+)\*\*/g, "$1")
      .replace(/_([^_]+)_/g, "$1");
    const text = `${item.title}\n\n${plain}`;
    const textArea = document.createElement("textarea");
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 pb-20">
      <div className="flex justify-between items-start mb-6">
        <div>
          <h2 className="text-2xl font-extrabold text-gray-800 tracking-tight">
            {item.title}
          </h2>
          {item.context && (
            <p className="text-sm font-semibold text-pink-500 mt-1">
              {item.context}
            </p>
          )}
          {item.subtitle && (
            <p className="text-sm font-semibold text-indigo-500 mt-1 italic">
              {item.subtitle}
            </p>
          )}
        </div>
        <button
          onClick={handleCopy}
          className="p-2.5 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors shadow-sm"
        >
          {copied ? (
            <Check className="w-5 h-5 text-green-500" />
          ) : (
            <Copy className="w-5 h-5 text-gray-400" />
          )}
        </button>
      </div>
      <RichText content={item.content} fontSize={fontSize} />
    </div>
  );
};

// --- MAIN APP COMPONENT ---
export default function App() {
  const [view, setView] = useState("home");
  const [selectedItem, setSelectedItem] = useState(null);
  const [fontSize, setFontSize] = useState(18);
  const [searchTerm, setSearchTerm] = useState("");
  const [openCategory, setOpenCategory] = useState(null);

  // Ti paulo ni navigation logic
  const navigateToContent = (item, originView) => {
    setSelectedItem({ ...item, origin: originView });
    setView("content");
  };

  const goBack = () => {
    if (view === "content" && selectedItem?.origin) {
      setView(selectedItem.origin);
    } else if (view === "terso") {
      setView("rosary");
    } else {
      setView("home");
    }
  };

  const filteredSongs = useMemo(() => {
    return KNANANUK_DATA.filter(
      (s) =>
        s.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        s.content.toLowerCase().includes(searchTerm.toLowerCase()),
    );
  }, [searchTerm]);

  return (
    <div className="min-h-screen flex flex-col max-w-md mx-auto shadow-2xl relative overflow-hidden ring-1 ring-gray-200" style={{ background: "linear-gradient(to right, #E887B7, #f9f07a, #ffffff, #a0f0f0, #4444cc)" }}>
      {/* Dekorasion ni background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ background: "linear-gradient(to right, #E887B7, #f9f07a, #ffffff, #a0f0f0, #4444cc)", opacity: 0.18 }} />

      <Header
        title={
          view === "home" ? "Harohan"
          : view === "misa" ? "Misal Romano"
          : view === "terso" ? "Terço da Misericórdia"
          : view.toUpperCase()
        }
        showBack={view !== "home"}
        onBack={goBack}
      />

      <main className="flex-1 overflow-y-auto px-5 py-6 z-10 relative">
        {/* VIEW: HOME (OIN) */}
        {view === "home" && (
          <div className="space-y-6 animate-in fade-in duration-700">
            {/* Hero card matching index.html style */}
            <div className="rounded-[2rem] p-8 text-center shadow-xl relative overflow-hidden border border-white/60" style={{ background: "linear-gradient(135deg, #E887B7 0%, #f9d976 40%, #ffffff 70%, #7ed8f6 100%)" }}>
              <h1 className="text-3xl font-black mb-1 tracking-tight" style={{ color: "#7a003a" }}>
                Harohan ba Na'i
              </h1>
              <p className="text-base font-semibold mb-4 opacity-80" style={{ color: "#3a006a" }}>
                "Na'i Maromak mak ha'u nia ksolok."
              </p>
              <button
                onClick={() => setView("misa")}
                className="px-6 py-2.5 rounded-full text-sm font-bold shadow-md active:scale-95 transition-all border border-white/80"
                style={{ background: "rgba(255,255,255,0.75)", color: "#7a003a" }}
              >
                Ba Misal Romano
              </button>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Card
                onClick={() => setView("misa")}
                className="flex flex-col items-center justify-center gap-3 h-32"
                style={{ backgroundColor: "#f5dadc" }}
              >
                <div className="p-3 bg-amber-100 rounded-2xl text-amber-600">
                  <ClipboardList className="w-8 h-8" />
                </div>
                <span className="font-bold text-gray-700">Missa</span>
              </Card>
              <Card
                onClick={() => setView("prayers")}
                className="flex flex-col items-center justify-center gap-3 h-32"
                style={{ backgroundColor: "#f5dadc" }}
              >
                <div className="p-3 bg-pink-100 rounded-2xl text-pink-600">
                  <Book className="w-8 h-8" />
                </div>
                <span className="font-bold text-gray-700">Reza</span>
              </Card>
              <Card
                onClick={() => setView("songs")}
                className="flex flex-col items-center justify-center gap-3 h-32"
                style={{ backgroundColor: "#f5dadc" }}
              >
                <div className="p-3 bg-blue-100 rounded-2xl text-blue-600">
                  <Music className="w-8 h-8" />
                </div>
                <span className="font-bold text-gray-700">Knananuk</span>
              </Card>
              <Card
                onClick={() => setView("rosary")}
                className="flex flex-col items-center justify-center gap-3 h-32"
                style={{ backgroundColor: "#f5dadc" }}
              >
                <div className="p-3 bg-indigo-50 rounded-2xl text-indigo-500">
                  <Sun className="w-8 h-8" />
                </div>
                <span className="font-bold text-gray-700">Rozariu</span>
              </Card>
            </div>
          </div>
        )}

        {/* VIEW: MISA (MISAL ROMANO) */}
        {view === "misa" && (
          <div className="space-y-4 animate-in slide-in-from-right-4 duration-300">
            <div className="text-center mb-6 p-4 rounded-2xl border border-red-100" style={{ backgroundColor: "#f5dadc" }}>
              <h2 className="text-red-700 font-black text-xl">
                ORDINÁRIO DA MISSA
              </h2>
              <p className="text-red-500 text-xs font-bold uppercase mt-1">
                Texto Oficial Tetum - Para o Povo
              </p>
              <p className="text-red-400 text-xs mt-1">
                Conferência Episcopal Timorense · Comissão Nacional Liturgia
              </p>
            </div>
            {MISA_SECTIONS.map((s) => (
              <Card
                key={s.id}
                onClick={() => navigateToContent(s, "misa")}
                className="flex items-center justify-between group"
              >
                <span className="font-bold text-gray-700">{s.title}</span>
                <ChevronRight className="w-5 h-5 text-gray-300 group-hover:text-pink-500" />
              </Card>
            ))}
          </div>
        )}

        {/* VIEW: REZA (ORASAUN) */}
        {view === "prayers" && (
          <div className="space-y-3 animate-in slide-in-from-right-4 duration-300">
            {ORASAUN_DATA.map((p) => (
              <Card
                key={p.id}
                onClick={() => navigateToContent(p, "prayers")}
                className="flex items-center gap-4"
              >
                <div className="w-10 h-10 rounded-xl bg-pink-50 flex items-center justify-center text-pink-500 font-bold">
                  {p.title.charAt(0)}
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-gray-800">{p.title}</h3>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-300" />
              </Card>
            ))}
          </div>
        )}

        {/* VIEW: KNANANUK */}
        {view === "songs" && (
          <div className="space-y-3 animate-in slide-in-from-right-4 duration-300">
            {/* Search bar */}
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Buka knananuk..."
                className="w-full bg-white border border-gray-200 rounded-2xl py-4 pl-12 pr-4 outline-none focus:ring-2 focus:ring-pink-200 transition-all"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {/* If searching, show flat filtered results */}
            {searchTerm ? (
              <div className="grid gap-3">
                {filteredSongs.map((song) => (
                  <Card
                    key={song.id}
                    onClick={() => navigateToContent(song, "songs")}
                    className="flex justify-between items-center group"
                  >
                    <div>
                      <span className="text-[10px] font-black uppercase text-blue-500 bg-blue-50 px-2 py-0.5 rounded-full mb-1 inline-block">
                        {song.category}
                      </span>
                      <h3 className="font-bold text-gray-800">{song.title}</h3>
                    </div>
                    <ChevronRight className="w-5 h-5 text-gray-200 group-hover:text-pink-400" />
                  </Card>
                ))}
                {filteredSongs.length === 0 && (
                  <p className="text-center text-gray-400 py-10 text-sm">
                    La hetan knananuk...
                  </p>
                )}
              </div>
            ) : (
              /* Accordion category list */
              <div className="space-y-2">
                {KNANANUK_CATEGORIES.map((category) => {
                  const songsInCategory = KNANANUK_DATA.filter(
                    (s) => s.category === category,
                  );
                  const isOpen = openCategory === category;

                  return (
                    <div
                      key={category}
                      className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm"
                    >
                      {/* Category Header */}
                      <button
                        onClick={() =>
                          setOpenCategory(isOpen ? null : category)
                        }
                        className="w-full flex items-center justify-between px-4 py-4"
                      >
                        <div className="flex items-center gap-3">
                          <span className="text-xs font-black uppercase tracking-widest text-blue-500">
                            {category}
                          </span>
                          <span className="text-xs text-gray-400 bg-gray-100 rounded-full px-2 py-0.5">
                            {songsInCategory.length}
                          </span>
                        </div>
                        <ChevronRight
                          className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${
                            isOpen ? "rotate-90" : ""
                          }`}
                        />
                      </button>

                      {/* Songs list - shown when open */}
                      {isOpen && songsInCategory.length > 0 && (
                        <div className="border-t border-gray-100">
                          {songsInCategory.map((song, index) => (
                            <div
                              key={song.id}
                              onClick={() => navigateToContent(song, "songs")}
                              className={`flex items-center justify-between px-4 py-3 cursor-pointer hover:bg-pink-50 transition-colors ${
                                index !== songsInCategory.length - 1
                                  ? "border-b border-gray-50"
                                  : ""
                              }`}
                            >
                              <h3 className="font-semibold text-gray-700 text-sm">
                                {song.title}
                              </h3>
                              <ChevronRight className="w-4 h-4 text-gray-300" />
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Empty state */}
                      {isOpen && songsInCategory.length === 0 && (
                        <div className="border-t border-gray-100 px-4 py-4">
                          <p className="text-sm text-gray-400 italic">
                            Seidauk iha knananuk...
                          </p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        )}

        {/* VIEW: ROZARIU */}
        {view === "rosary" && (
          <div className="space-y-3 animate-in slide-in-from-right-4 duration-300">
            <div className="text-center mb-2 p-4 rounded-2xl border border-indigo-100" style={{ backgroundColor: "#f5dadc" }}>
              <h2 className="text-indigo-800 font-black text-xl">ITA NAIN FETO NIA ROSARIO</h2>
            </div>
            {ROZARIU_DATA.map((mystery) => (
              <Card
                key={mystery.id}
                onClick={() => navigateToContent(mystery, "rosary")}
                className="flex items-center justify-between group"
              >
                <div className="flex-1">
                  <h3 className="font-bold text-gray-800">{mystery.title}</h3>
                  <p className="text-xs text-indigo-500 italic mt-0.5">{mystery.subtitle}</p>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-indigo-500 ml-2 shrink-0" />
              </Card>
            ))}

            {/* Terço da Misericórdia button */}
            <div className="pt-2">
              <button
                onClick={() => setView("terso")}
                className="w-full flex items-center justify-between px-5 py-4 rounded-2xl shadow-sm border border-red-200 active:scale-[0.98] transition-all hover:border-red-400"
                style={{ backgroundColor: "#fce4e4" }}
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-red-100 rounded-xl">
                    <Cross className="w-5 h-5 text-red-600" />
                  </div>
                  <div className="text-left">
                    <p className="font-bold text-red-800">Terço da Misericórdia</p>
                    <p className="text-xs text-red-500 italic">Jesus Divina Misericórdia</p>
                  </div>
                </div>
                <ChevronRight className="w-5 h-5 text-red-400" />
              </button>
            </div>
          </div>
        )}

        {/* VIEW: TERÇO DA MISERICÓRDIA */}
        {view === "terso" && (
          <TersoView fontSize={fontSize} />
        )}

        {/* VIEW: CONTENT DISPLAY */}
        {view === "content" && selectedItem && (
          <ContentDisplay item={selectedItem} fontSize={fontSize} />
        )}
      </main>

      {/* Floating Font Controls (Content laeng) */}
      {view === "content" && (
        <div className="fixed bottom-24 left-1/2 -translate-x-1/2 flex items-center gap-3 bg-white/95 backdrop-blur-xl border border-gray-100 p-2.5 rounded-3xl shadow-2xl z-50">
          <button
            onClick={() => setFontSize((prev) => Math.max(prev - 2, 12))}
            className="p-2 hover:bg-gray-100 rounded-xl"
          >
            <Minus className="w-5 h-5 text-gray-500" />
          </button>
          <div className="w-px h-6 bg-gray-200" />
          <Type className="w-4 h-4 text-gray-400" />
          <div className="w-px h-6 bg-gray-200" />
          <button
            onClick={() => setFontSize((prev) => Math.min(prev + 2, 36))}
            className="p-2 hover:bg-gray-100 rounded-xl"
          >
            <Plus className="w-5 h-5 text-gray-500" />
          </button>
        </div>
      )}

      {/* Footer Navigation Bar (Lima tabs) */}
      <nav className="border-t border-white/20 py-3 px-4 flex justify-between items-center z-50 shadow-inner" style={{ backgroundColor: "#1a1a2e" }}>
        {[
          { id: "home", label: "OIN", icon: Home },
          { id: "misa", label: "MISA", icon: ClipboardList },
          { id: "prayers", label: "REZA", icon: Book },
          { id: "songs", label: "KNANANUK", icon: Music },
          { id: "rosary", label: "ROZARIU", icon: Sun },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setView(tab.id)}
            className={`flex flex-col items-center gap-1 flex-1 transition-all ${view === tab.id ? "text-pink-400" : "text-gray-400"}`}
          >
            <tab.icon
              className={`w-5 h-5 ${view === tab.id ? "fill-pink-900" : ""}`}
            />
            <span className="text-[9px] font-black">{tab.label}</span>
          </button>
        ))}
      </nav>

      <style
        dangerouslySetInnerHTML={{
          __html: `
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Lora:ital,wght@0,400;0,500;1,400&display=swap');
        
        body {
          font-family: 'Plus Jakarta Sans', sans-serif;
          background: linear-gradient(to right, #E887B7, #f9f07a, #ffffff, #a0f0f0, #4444cc);
          min-height: 100vh;
        }

        .font-serif {
          font-family: 'Lora', serif;
        }

        ::-webkit-scrollbar {
          width: 0px;
          background: transparent;
        }
      `,
        }}
      />
    </div>
  );
}
