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

// --- IMAGE IMPORTS (from src/assets/) ---
import imgTersu from "./assets/tersu.jpg";
import imgScj from "./assets/scj.jpeg";
import imgVm from "./assets/vm.jpeg";
import imgHbn from "./assets/hbn.webp";
import imgMisal from "./assets/misal1.webp";
import imgRozariu from "./assets/rozariu.png";
import imgKnananuk from "./assets/knananuk.png";
import imgReza from "./assets/reza.png";
import imgHauSae from "./assets/hau-sae.png";
import imgPvHalibur from "./assets/pv-halibur.png";
import imgOhinMai from "./assets/ohin-mai.png";
import imgGloria from "./assets/gloria.png";

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
// Each section has paragraphs with type: "sp" (speaker), "text", "subheading"
const MISA_SECTIONS = [
  {
    id: "iniciais",
    title: "Ritos Iniciais",
    paragraphs: [
      { type: "sp", s: "S", italic: true, text: "Hodi Padre,..." },
      { type: "sp", s: "P", text: "Amen." },
      { type: "sp", s: "S", italic: true, text: "Na'i Jesus Cristo nia graça, Aman Maromak nia domin, hamutuk iha Espírito Santo, horik ho imi." },
      { type: "sp", s: "P", text: "Rahun-di'ak ba Maromak be halibur ita, iha Cristo nia domin." },
      { type: "sp", s: "S", italic: true, text: "Maun-alin no feton sira: atu hala'o loloos mistério santo sira, hanoin lai katak ita ema maksalak." },
      { type: "sp", s: "S", italic: true, text: "Confessa ita salan." },
      { type: "text", text: "Ha'u confessa ba Maromak, Kbiit-tomak Na'in,\nNo ba imi, maun-alin no feton sira, katak ha'u sala fil-fila, hodi hanoin no hateten, hodi hahalok no la hala'o ha'u knaar, ha'u sala, ha'u sala tebes duni.\nTan ne'e, ha'u husu ba Santa Maria, Virgem nafatin, ba Anjo no Santo sira hotu, no mos ba imi, maun-alin no feton sira, atu harohan ba Maromak, ita Na'in, mai ha'u." },
      { type: "sp", s: "S", text: "Maromak kbiit-tomak Na'in sadi'a ita ba, perdua ita salan, lori ita ba moris rohan-laek." },
      { type: "sp", s: "P", text: "Amen." },
      { type: "sp", s: "V", italic: true, text: "Na'i Sadi'a ami", inlineR: "Na'i sadi'a ami" },
      { type: "sp", s: "V", italic: true, text: "Cristo sadi'a ami", inlineR: "Cristo sadi'a ami" },
      { type: "sp", s: "V", italic: true, text: "Na'i sadi'a ami", inlineR: "Na'i sadi'a ami" },
      { type: "subheading", text: "Glória" },
      { type: "text", italic: true, text: "Glória ba Maromak iha leten aas liu,\nPaz iha rai-klaran, ba ema sira be laran-di'ak.\nNa'i Maromak, Liurai lalehan, Aman Maromak kbiit-tomak Na'in: ami hawelok Ita, ami hahí Ita, ami adora Ita, ami haliban Ita, tan Ita-nia glória boot tebes.\nNa'i Jesus Cristo, Oan-mane Mesak, Na'i Maromak, Bibi-oan Maromak, Aman Maromak nia Oan: Ita be kasu mundu salan, sadi'a ami. Ita be kasu mundu salan, simu ami nia harohan. Ita be hatodan-An iha Aman nia sorin kwana, sadi'a ami.\nTan Ita mesak de'it Santo; Ita mesak de'it Na'i; Ita mesak de'it, Aas liu nobun, Jesus Cristo, hamutuk ho Espírito Santo: iha Aman Maromak nia glória. Amen." },
      { type: "sp", s: "S", italic: true, text: "Mai ita harohan..., Hodi ami Na'i Jesus Cristo, ita Oan, be Maromak ho ita, hamutuk iha Espírito Santo." },
      { type: "sp", s: "P", text: "Amen." },
    ],
  },
  {
    id: "liturjia",
    title: "Liturgia da Palavra",
    paragraphs: [
      { type: "sp", s: "L", text: "Na'i nia futar Lia." },
      { type: "sp", s: "P", text: "Agradece ba Maromak." },
      { type: "sp", s: "S", text: "Na'i horik ho imi." },
      { type: "sp", s: "P", text: "Horik mos ho ita." },
      { type: "sp", s: "S", text: "Na'i Jesus Cristo nia Evangelho, tuir São N." },
      { type: "sp", s: "P", text: "Na'i Glória ba Ita." },
      { type: "sp", s: "S", text: "Lia maksoin." },
      { type: "sp", s: "P", text: "Cristo, ami hahí Ita." },
    ],
  },
  {
    id: "profissao",
    title: "Profissão de Fé",
    paragraphs: [
      { type: "text", italic: true, text: "Ha'u fiar Maromak mesak ida de'it,\nAman Kbiit-tomak Na'in, Mahalo lalehan no rai, buat hotu be bele haré no labele haré.\nHa'u fiar Na'i ida de'it, Jesus Cristo, Maromak Oan-mane Mesak, moris nanis hosi Aman molok tempo hahú. Maromak hosi Maromak, Naroman hosi Naroman. Maromak loos, hosi Maromak loloos; Aman hako'us, la halo Nia, nia-An ida de'it ho Aman. Buat hotu halo ona hodi Nia.\nTan ita ema, atu soi ita, Nia tun ona hosi Lalehan. Hodi Espírito Santo, Nia hola isin iha Virgem Maria nia knotak, halo nia-An ba ema. Tan mos ba ita, ema hedi Nia ba cruz, iha Pôncio Pilatos nia ukun; terus, mate tiha, ema hakoi Nia.\nLiu loron tolu, tuir Escritura, Nia hahú moris-hi'as; hi'it-An ba Lalehan, he'in-An iha Aman nia sorin kwana. Nia sei mai fali ho glória, atu tesilia ba ema moris no ba ema mate; nia ukun sei rohan-laek.\nHa'u fiar Espírito Santo, Na'i be haraik moris, mai hosi Aman no Oan; ema haNa'i, haliban hamutuk ho Aman no Oan: Nia ha'e lia tun liu hosi Profeta sira.\nHa'u fiar Kreda ida-mesak, santa, católica, apostólica. Ha'u haklaken batismo ida de'it atu kasu salan. Ha'u hein moris-hi'as mate siran, no moris ida be sei mai. Amen." },
      { type: "subheading", text: "Símbolo dos Apóstolos", note: "Tempo Quaresma e Tempo da Pascoa", color: "red" },
      { type: "text", italic: true, text: "Ha'u fiar Maromak\nAman Kbiit-tomak Na'in, Mahalo lalehan no rai; no Jesus Cristo, nia Oan-mane Mesak, ita Na'in, be ko'us ona hodi Espírito Santo nia kbiit; moris hosi Virgem Maria; terus iha Pôncio Pilatos nia ukun, hedi iha cruz, mate no hakoi tiha; tun ba mate sira hela fatin; liu loron tolu moris-hi'as; hi'it-An ba Lalehan; he'in-An iha Aman Maromak Kbiit-tomak Na'in nia sorin kwana, hosi nebé sei hi'it-An mai atu tesilia ba ema moris no ba ema mate.\nHa'u fiar Espírito Santo; santa Kreda Católica; Santo sira tulun malu; salan sira kasu ona; moris-hi'as isin nian no moris rohan-laek. Amen." },
    ],
  },
  {
    id: "eucaristia",
    title: "Liturgia Eucarística",
    paragraphs: [
      { type: "sp", s: "S", text: "Maun-alin no feton sira, harohan ba atu Aman Maromak Kbiit-tomak Na'in bele simu karan-mutun ha'un no imi nian." },
      { type: "sp", s: "P", text: "Na'i simu netik karan-mutun ne'e hosi o liman atu hahí no hawelok nia naran, ba ita nia di'ak no ba santa Kreda hotu nian." },
    ],
  },
  {
    id: "oracaoeucaristica",
    title: "Oração Eucarística",
    paragraphs: [
      { type: "sp", s: "S", text: "Maromak horik ho imi." },
      { type: "sp", s: "P", text: "Horik mos ho ita." },
      { type: "sp", s: "S", text: "Hasa'e imi neon ba Maromak." },
      { type: "sp", s: "P", text: "Ami hasa'e ona ba Maromak." },
      { type: "sp", s: "S", text: "Mai ita agradece Na'i ita nia Maromak." },
      { type: "sp", s: "P", text: "Ne'e ita nia knaar, ita maksoin." },
      { type: "text", bold: true, text: "Santo, Santo, Santo Na'i Maromak kbiit-tomak Na'in.\nLalehan no rai haklaken ita glória.\nHosana leten aas ba.\nDiak tebes Ida be mai hodi Na'i nia naran.\nHosana leten aas ba." },
      { type: "sp", s: "S", text: "Mistério fiar nian." },
      { type: "sp", s: "P", text: "Na'i, ami fo hatene ita nia mate, ami haklaken ita nia moris-hi'as. Na'i Jesus, hi'it-An mai!" },
    ],
  },
  {
    id: "comunhao",
    title: "Ritos da Comunhão",
    paragraphs: [
      { type: "sp", s: "S", text: "Tuir Maksoi hanorin, ita barani harohan:" },
      { type: "text", text: "Ami Aman, be iha lalehan,\nhalo ami hahí-hana'i Ita naran,\nhalo Ita nia reino to'o mai ami;\nIta nia hakaran halo tuir ba iha rai nu'udar iha lalehan.\nOhin ne'e haraik aihan lor-loron nian mai ami;\nharaik perdão mai ami salan, nu'udar ami perdua ema halo aat ami;\nlabele husik ami monu ba tentação;\nmaibé hasai ami hosi aat." },
      { type: "sp", s: "S", text: "Na'i, hasai ami hosi aat tomak..." },
      { type: "sp", s: "P", text: "Ita mak Liurai, Ita mak ukun ho kbiit-liurai ba nafatin." },
      { type: "sp", s: "S", text: "Ita be Maromak ho Aman hamutuk iha Espírito Santo." },
      { type: "sp", s: "P", text: "Amen." },
      { type: "sp", s: "S", text: "Na'i nia damen horik nafatin ho imi." },
      { type: "sp", s: "P", text: "Cristo-Nia domin halo ita hamutuk ona." },
      { type: "text", text: "Bibi-oan Maromak nian be kasu mundo salan, sadi'a ami.\nBibi-oan Maromak nian be kasu mundo salan, sadi'a ami.\nBibi-oan Maromak nian be kasu mundo salan, haraik damen mai ami." },
      { type: "sp", s: "S", text: "Rahun-di'ak ba sira be tene ona ba Han-kalan Na'i nian. Ne'e ha'e Bibi-oan Maromak, be kasu mundo salan." },
      { type: "sp", s: "P", text: "Na'i, ha'u la so'i Ita-Boot hi'it-An mai ha'u horik-fatin maibé, Ita-Boot dehan de'it liafuan ida, ha'u sei hetan maksoin." },
    ],
  },
  {
    id: "conclusao",
    title: "Ritos de Conclusão",
    paragraphs: [
      { type: "sp", s: "S", text: "Maromak horik ho imi." },
      { type: "sp", s: "P", text: "Nia horik ho ami." },
      { type: "sp", s: "S", text: "Missa hotu ona ba ho Maromak." },
      { type: "sp", s: "P", text: "Kmanek wa'in ba Maromak." },
    ],
  },
];

// --- DATA: KNANANUK ---
const KNANANUK_DATA = [
  {
    id: 1,
    category: "Entrada",
    title: "ANIN MALIRIN",
    content:
      "Anin malirin tasi fehan,\nlaloran tasi baku ba mai.\nRai badin lian mai\nfahe hakmatek matak malirin.\n\nKristu Maksoin, fatuk karan kmanek,\nHa'u laran metin ba Ita Boot\nIta mak dalan los; Iori ha'u to'o lalehan.",
  },
  {
    id: 2,
    category: "Entrada",
    title: "BELE TAMA BA LALEHAN",
    content:
      "Bele tama ba lalehan, (2x)\nse halo an kiik oan, (2x)\nbasa Jesus dehan, (2x)\n“Hato'o mai Ha’u (2x)\nkiik oan sira ne'e.” (2x)",
  },
  {
    id: 3,
    category: "Entrada",
    title: "EMA RAI HOTU",
    content:
      "Ema rai hotu, ema lubun boot, ema buka diak;\nNa’i nia ema, hahi o nia Maksoin.\n\nAmi hananu Kristu, Na'i Maromak nia Oan.\nAmi hahi Na'i Maromak boot tebes nia tutor Lia.",
  },
 {
  id: 4,
  category: "Entrada",
  title: "DIAK TEBES BA JESUS",
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
    title: "AMI HAHI ITA BOOT NIA JUSTISA",
    content: `Ami hahi Ita Boot nia justisa,
Ami haklaken Ita Boot laran luak, Kristu, Na'i Liurai!

1. Rai hotu iha Maromak futar liman,
Foho aas tomak Maromak nia soi.

2. Rai, tasi hotu Maromak ninian,
Ntan sira Maromak nia liman fatin.

3. Hahi, hana'i ba Na'i Maromak,

4. Hamos tan Nia Ita Maksoin.`,
  },
  {
    id: 6,
    category: "Entrada",
    title: "HAU SAE BA MAROMAK NIA UMA",
    image: "hau-sae.png",
    content: `Ha'u sa'e ba Maromak nia uma,
ho laran kontente no ksolok.
Ha'u mai buka Ita Boot nia oin,
Na'i Maromak, ha'u nia ksolok.`,
  },
  {
    id: 7,
    category: "Entrada",
    title: "POVU HALIBUR HAMUTUK",
    image: "pv-halibur.png",
    content: `Povu halibur hamutuk,
hamriik iha Na'i nia oin.
Hahi, hawelok ba Maromak,
ba nafatin, rohan-laek.`,
  },
  {
    id: 8,
    category: "Entrada",
    title: "OHIN MAI ITA HAHII",
    image: "ohin-mai.png",
    content: `Ohin mai ita hahi,
ba Na'i Maromak boot.
Ho laran tomak ita hananu,
glória ba Aman lalehan.`,
  },
  {
    id: 9,
    category: "Entrada",
    title: "HA'U NA'I, ITA BOLU, HA'U BA",
    content: `**HA'U NA'I, ITA BOLU, HA'U BA**
_Ha'u Na'i, Ita bolu, ha'u ba._
_Ha'u Na'i, It'nia dalan ha'u sei tuir._
_Ha'u Na'i, Ita bolu, ha'u ba._
_Ha'u Na'i, It'nia dalan ha'u sei tuir._

1. Ha'U nia mods tomak
   sei hananu knananuk hahi nian
   ho haksolok hatudu nafatin Ita nia ilas, Na'i.
2. Iha mundu ne'e,
   ha'u sei moris ho ha'u maluk;
   la'o nafatin hodi fiar metin, fo liman ba malu.
3. Ha'u haksolok tebes
   basa Ita iha ha'u laran,
   ha'u sei buka lori Ita ba ha'u maluk sira.`,
  },
  {
    id: 10,
    category: "Entrada",
    title: "HA'U HAKSOLOK BAINHIRA EMA DEHAN",
    content: `**HA'U HAKSOLOK BAINHIRA EMA DEHAN**
_Ha'u haksolok bainhira ema dehan:_
_la'o ba Na'i Maromak nia kadunan._

1. Ksolok boot bainhira ema dehan:
   la'o ba Na'i Maromak nia kadunan.
   To'o tiha o nia odamatan,
   ksolok tebes, Jerusalem.
2. Nudar sidade harii met-metin;
   Jerusalem la nakdoko.
   Ba to'o nia, ema sa'e wain-wain,
   atu hahi Maromak naran.
3. Iha neba Na'i Maromak tesi lia
   iha David nia kadunan laran;
   husu hakmatek to ba Jerusalem,
   hakmatek ba nia uma laran.
4. Tamba ha'u nia maun alin, ha'u nia belun,
   husu hakmatek;
   Na'i to ba o;
   tamba Na'i ita Maromak iha uma laran.
5. Gloria ba Na'i Maromak bele tomak.
   Gloria mos ba Oan Maksoin.
   Gloria ba Espiritu horik iha ita klamar,
   tinan ba tinan. Amen.`,
  },
  {
    id: 11,
    category: "Entrada",
    title: "HANA'I, HAHI MAROMAK",
    content: `**HANA'I, HAHI MAROMAK**
_Hana'i, hahi Maromak._

1. Mai, ita hana'i, hahi ita Maksoin.
   Hasa'e ba Na'i Maromak ita an tomak
2. Mai, ita hananu, hananu ho ksolok
   Na'i Maromak boot liu hotu, Nia ita Na'i.
3. Na'i tutor lia halo rai no lalehan
   tuku tur, ita hana'i ba Na'i Maromak.
4. Ita rai no povu, Na'i Maromak, nia soin;
   laran metin ba Na'i Maksoin, Nia ita Aman.`,
  },
  {
    id: 12,
    category: "Entrada",
    title: "HAMUTUK HO MUNDU TOMAK",
    content: `**HAMUTUK HO MUNDU TOMAK**
_Hamutuk ho mundu tomak ita hahi ba ita Na'i._
_Aleluia, ita haklaken justisa, paz no hadomi._

1. Ba lalehan, ba loron, ba buat hotu, ba manu,
   ba mota, ha'u Na'i; ba malirin, ba anin,
   ba be tasi nian ba moris nebe ita hadomi.
2. Ba paz, ksolok, hadomi,
   ba aihan, justisa, ha'u Na'i;
   ba foinsa'e, labarik, ema hot-hotu,
   ba moris nebe ha'u hadomi.
3. Ba Kreda, Maromak nia povu,
   ba povu halibur iha ne'e;
   tan ksolok Nia to mai ita,
   tamba Missa Eukaristia ne'e.`,
  },
  {
    id: 13,
    category: "Entrada",
    title: "HAKSOLOK LORON OHIN",
    content: `**HAKSOLOK LORON OHIN**

1. Haksolok loron ohin ba los Na'i Maromak.
   Haksolok loron ohin.
2. Haksolok loron ohin, belun sira hananu.
   Haksolok loron ohin.
3. Haksolok ba ita tomak, loron diak haksolok.
   Haksolok ba ita tomak.
4. Maromak sei hamutuk, hamutuk ho ita.
   Maromak sei hamutuk.`,
  },
  {
    id: 14,
    category: "Entrada",
    title: "HAHI NA'I (Haec Dies)",
    content: `**HAHI NA'I (Haec Dies)**

1. Hana'i, hahi Na'i bele hotu.
   Mai, ita haksolok, hahi Na'i. Aleluia, aleluia.
   Hana'i, hahi Na'i bele hotu. Aleluia.
   Mai, ita haksolok, hahi Na'i. Aleluia, aleluia, aleluia.`,
  },
  {
    id: 15,
    category: "Entrada",
    title: "HAHI ITA NA'I",
    content: `**HAHI ITA NA'I**
_Haksolok no hananu ba, maun alin sira._
_Mai, ita hotu hahi Na'i._

1. Na'i, Aman Maromak.
2. Na'i, Liurai lalehan.
3. Na'i, Aman laran luak.

_Gloria, gloria ami hasa'e ba ita._
1. Aman, bele halo hotu.
**Haksolok...**
2. Ita naran boot tebes.
3. Hadomi ema hot-hotu.

**_Ami hana'i, hahi Ita Boot,_**
**_kmanek wain, Jesus Kristu_**
**_ho mos Espiritu Santu,_**
**_mak ukun tinan ba tinan._**
**_Amen, amen, amen, amen, amen._**`,
  },
  {
    id: 16,
    category: "Entrada",
    title: "FOTI NEON BA MAROMAK",
    content: `**FOTI NEON BA MAROMAK**
_Foti neon ba Maromak, hananu ba Maromak,_
_tan Maromak naran boot Hu hotu-hotu. (2x)_

1. Maromak boot liu ita hamutuk
   hodi haksolok ita tinan ba tinan.
2. Kristu mak dalan los no Maksoin;
   ita hodi neon harohan ba Maromak.
3. Na'i hatodan an iha lalehan laran,
   ami hahi no hana'i Ita Boot.`,
  },
  {
    id: 17,
    category: "Entrada",
    title: "FO KSOLOK MAI HA'U",
    content: `**FO KSOLOK MAI HA'U**

1. Fo ksolok, Na'i, mai ha'u; fo mai ksolok.
   Fo ksolok, Na'i, mai ha'u ohin.
   Fo ksolok, Na'i, mai ha'u; fo mai ksolok.
   Halo ha'u haksolok ho Ita.

_Kanta hosana, kanta hosana;_
_kanta hosana ba ha'u Na'i Jesus._
_Kanta hosana, kanta hosana;_
_kanta hosana ba ha'u Na'i._

2. Fo dame...
   Halo ha'u hakmafek ho Ita.
3. Fo domin...
   Halo ha'u hadomi Ita.`,
  },
  {
    id: 18,
    category: "Entrada",
    title: "DIAK TEBES, KSOLOK TEBES",
    content: `**DIAK TEBES, KSOLOK TEBES**
_Diak tebes, ksolok tebes_
_moris hamutuk ita nia vokasaun;_
_buka moris ho hadomi_
_ba Maromak nia reinu. (2x)_

1. Iha ne'e ita halibur atu hatudu ba ita Na'i.
   Ksolok domin hodi hakarak serbi Nia.
2. Hadulas mesa ida ho hadulas krus ida,
   ho Kreda hamutuk Kristu, Ita nia naroman.
3. Ita moris, tau neon metin ba Kristu, ita Liurai,
   ita klamar la deskansa tamba vokasaun boot
   tebes duni.`,
  },
 {
  id: 19,
  category: "Entrada",
  title: "LORON FESTA",
  content: `**LORON FESTA**
_Loron testa, loron testa, loron testa hadomi._
_Loron testa, loron testa, loron testa iha fuan._

1. Kreda nakloke atu ita halibur.
   Sarani mai hotu ho ksolok iha fuan.
   _Ne'e mak loron haksolok nian; Na'i haraik mai ita._

2. Hot-hotu hamutuk hadulas altar,
   nudar familia Maromak ninian.

3. Hot-hotu fuan ida met-metin ba malu.
   Maun alin ida-ida fo ksolok, hadomi.`,
},
{
  id: 20,
  category: "Entrada",
  title: "LA'O DAUDAUN BESIK BA NA'I NIA ALTAR",
  content: `**LA'O DAUDAUN BESIK BA NA'I NIA ALTAR**
_La'o daudaun besik ba Na'i nia altar_
_ami atu hafoun Na'i nia domin._
_Aleluia, aleluia!_

1. Haraik Ita lialos no ita roman
   atu leno netik ami dalan ba Maromak.

2. Na'i Maromak ha'u nia ksolok;
   ha'u sei hahi Nia beibeik loron kalan.

3. Gloria ba Aman no ba Oan,
   no ba Espiritu Santu.

4. Nudar hori uluk, oras ne'e,
   tinan ba tinan, nafatin. Amen.`,
},
{
  id: 21,
  category: "Entrada",
  title: "LALEHAN RAI FOUN",
  content: `**LALEHAN RAI FOUN**
_Lalehan rai foun Na'i sei to mai._
_justisa nakonu iha mundu be sei mai._

1. Ita, Maromak nia Oan, mak haraik liberdade.
   Ita Boot tesi lia, sei tuir karidade.

2. Mate ita sei manan ho Kristu, ita sei manan.
   Ho gloria Maromak nian, sei moris ba bei-beik.

3. Na'i, Ita reinu mak tebes ho domin no lialos,
   ho dame no justisa, ho gloria no santidade.`,
},
{
  id: 22,
  category: "Entrada",
  title: "KSOLOK BOOT BAINHIRA EMA DEHAN",
  content: `**KSOLOK BOOT BAINHIRA EMA DEHAN**
_Ksolok boot bainhira ema dehan:_
_"La'o ba Na'i Maromak nia kadunan._
_To'o ti'o nia odamatan_
_ksolok tebes, Jerusalem!"_

1. Jerusalem, hariji met-metin
   nudarsidade la nakdoko.
   Ba neba sa'e ema barak,
   Na'i Maromak nia ema.

2. Hahi Na'i Maromak naran,
   halo tuir lisan Israel nian.
   Maromak lia los no boot tebes
   iha Israel nia kadunan.

3. Husu hakmatek ba Jerusalem;
   moris hakmatek ho belun sira.
   Kota laran, laran hakmatek;
   kadunan laran, laran metin.

4. Tamba ha'u maun, ha'u alin sira,
   ha'u dehan ba o diak nafatin.
   Tamba Na'i Maromak nia kadunan
   o sei hetan diak tebes.`,
},
{
  id: 23,
  category: "Entrada",
  title: "ITA POVU HALIBUR HAMUTUK",
  content: `**ITA POVU HALIBUR HAMUTUK**
_Aleluia (4x)_

1. Ita povu halibur hamutuk, Na'i.
   Ita povu halibur hamutuk
   atu hahi Ita naran santu,
   no moris ha dame.

2. Ita povu halibur hamutuk, Na'i.
   Ita povu halibur hamutuk
   atu rona Ita lia,
   no hanoin Ita dame.

3. Mundu mos sei hatene
   ami mesak maun alin,
   ami mesak maun alin
   nudar Ita Boot.`,
},
{
  id: 24,
  category: "Entrada",
  title: "ITA HOTU MAROMAK NIA POVU",
  content: `**ITA HOTU MAROMAK NIA POVU**
_Ita hotu Maromak nia povu,_
_ita mai hamutuk tan nia naran._

1. Povu halibur tan duni Nia lia,
   povu hamutuk ho Kristu Jesus.

2. Povu ne'e moris iha baptismu nia be,
   povu ne'e simu Espiritu Santu.

3. Povu ne'e han Jesus nia futar Isin,
   povu ne'e hemu Jesus nia futar Ran.

4. Povu ne'e metin iha fiar, iha domin,
   povu ne'e hein iha Kristu Jesus.

5. Povu ne'e hana'i Maromak, ita Na'i;
   povu ne'e hahi ita Na'i Jesus Kristu.`,
},
{
  id: 25,
  category: "Entrada",
  title: "IHA FOHO TUTUN BA",
  content: `**IHA FOHO TUTUN BA**
_Iha foho tutun ba anin hu ba mai_
_ha'u an tur mesak hodi hanoin_
_oin sa ita domin horik ho ha'u,_
_halo ha'u neon metin ba ita._

1. Fuan hananu, Na'i, lia menas ida terik,
   katak Ita Boot domin lolos moris nian.
   Fuan hananu, Na'i, lia menas ida terik,
   katak Ita Boot domin rohan laek.

2. Ha'u haksolok, Na'i, ho lia dadoli hahi
   Ita nia beran; ha'u temi loron kalan.
   Ha'u haksolok, Na'i, ho lia dadoli hahi
   Ita nia beran; kmanek ba nafatin.`,
},
{
  id: 26,
  category: "Entrada",
  title: "HO KSOLOK BOOT TEBES, ALELUIA",
  content: `**HO KSOLOK BOOT TEBES, ALELUIA**
_Ho ksolok boot tebes, aleluia;_
_ha'u hakbesik ba Na'i Maromak nia altar._

1. Tan ne'e ha'u hamriik, aleluia;
   iha ita oin, Jerusalem.

2. Jerusalem, sidade boot no furak,
   sidade hari met-metin, aleluia;
   povu sira hakat ba ita.

3. O nia kota laran be hakmatek,
   o nia uma laran diak nakonu, aleluia,
   tan ita Na'i Maromak.`,
},
{
  id: 27,
  category: "Entrada",
  title: "HODI DALAN ESPERANSA",
  content: `**HODI DALAN ESPERANSA**
_Hodi dalan esperansa, hamutuk domin_
_ita ba hasouru ita Na'i._

1. Iha dalan ema nian Kristu kuda fini,
   liafuan rohan laek atu fo moris ba ema.

2. Iha dalan ba Emaus, Kristu mosu ema leet;
   ksolok tebes ba ita, Nia nafatin ho ita.

3. Molok rai nakukun ita han Paun ne'e
   nudar moris ho Kristu, kesi ita ho Nia.

4. Na'i Jesus hela ho ita nudar ita lialos,
   atu ita bele halo mundu sai foun tali.

5. Na'i hela ho ita, sai Aihan ita vida
   nakfilak Nia isin nudar Aihan ba ita.`,
},
{
  id: 28,
  category: "Entrada",
  title: "HA'U SEI BA HO KSOLOK",
  content: `**HA'U SEI BA HO KSOLOK**
_Ha'u sei ba ho ksolok hasouru Na'i;_
_Nia ha'u Maromak no Halos._

1. Na'i boot tebes sadia ita; haraik perdia ba ita sala.

2. Gloria ba Padre, ba Filho, ba Espiritu Santu

3. nudar hori uluk oras ne'e tinan ba tinan nafatin.
   Amen.`,
}, 
{
  id: 29,
  category: "Entrada",
  title: "NA'I, KOALIA, BOLU RAI HOTU",
  content: `**NA'I, KOALIA, BOLU RAI HOTU**
_Na'i, koalia, bolu rai hotu_

1. Na'i, bolu ema hotu: lorosa'e, loromonu.
2. Hosi Sião, foho furak; Nia nabilan.
3. Ita Maromak mai; Nia sei koalia.
4. Halibur iha Ha'u oin, Ha'u emar sira.
5. Rona mai, Ha'u povu! Ha'u mak koalia.
6. Hasai sakrifisiu hahi ba Na'i Maromak.`,
},

{
  id: 30,
  category: "Entrada",
  title: "NA'I JESUS, ITA AMI NIA KSOLOK",
  content: `**NA'I JESUS, ITA AMI NIA KSOLOK**

1. Na'i Jesus, Ita ami nia ksolok. (2x)
   Na'i Jesus, Ita mak halibur ami. (2x)
   Na'i Jesus, Ita mak halibur ami
   _Iha Ita nia domin._

2. Na'i Jesus, Ita ami nia dalan. (2x)
   Ema tomak kuran Ita Boot. (2x)
   Ema tomak kuran Ita Boot...

3. Ita Boot hatene ami nia sola. (2x)
   Maibe Ita foti ami neon. (2x)
   Ita la'o hamutuk ho ami...

4. Ohin, loron Na'i ninian. (2x)
   Ami simu Ita Boot nia lia. (2x)
   Ita la'o hamutuk ho ami...`,
},

{
  id: 31,
  category: "Entrada",
  title: "NA'I IDA DEIT",
  content: `**NA'I IDA DEIT**
_Na'i ida deit, fiar ida deit, baptismo ida deit._
_Aman Maromak ida deit!_

1. Buka hametin unidade iha Na'i nia Espiritu
   hamutuk iha dame,
   _Ita hananu hodi haklaken._

2. Ita hotu isin lolon ida deit iha Na'i Jesus.

3. Ita hotu esperansa ida deit iha Na'i Jesus.`,
},

{
  id: 32,
  category: "Entrada",
  title: "MAROMAK MAK BOLU",
  content: `**MAROMAK MAK BOLU**
_Maromak, Ita mak bolu no ami la'o to'o mai;_
_Ita nia liafuan haksolok ami laran. (2x)_

1. Ami la'o ba It'nia mesa, ami la'o ba It'nia altar,
   hodi simu It'nia lia; ami ba ho hananu.

2. Ami hakarak moris ho ita, lor-loron ba nafatin.
   Fo mai ami It'nia domin, fo ksolok mai ami.

3. Ita fo, fahe ba malu fo be moris ita laran,
   be It'nia tronu nabilan hato'o ami lia.`,
},

{
  id: 33,
  category: "Entrada",
  title: "MAROMAK LORON NE'E",
  content: `**MAROMAK LORON NE'E**
_Maromak loron ne'e, loron baibain, Jesus. (2x)_

1. Lalehan, loron, fulan no fitun,
   to'o foho no tetuk tun tasi nia mai.
   Ema, balada, aifunan, aifuan,
   osan mean no mutin Ita ninian.

2. Dader, loron sa'e, kaer ha'u knaar
   no buka matenek, hanoin ha'u Na'i.
   Kosar no kole, ha'u matan ba leten,
   ha'u fuan ba aas, ha'u Na'i to tulun.

3. Riku, kiak, matenek eh beik,
   ema diak eh aat, ha'u alin no maun.
   Ha'u fuan no laran, tulun, hadomi
   to liman ba malu, tan sira Jesus.`,
},

{
  id: 34,
  category: "Entrada",
  title: "MAI LA'O HO HA'U BA MAROMAK UMA",
  content: `**MAI LA'O HO HA'U BA MAROMAK UMA**

1. Mai, la'o ho ha'u ba Maromak uma. (3x)
   _Iha neba haksolok, ksolok, ksolok._

2. Lalehanla dook ba Maromak uma. (3x)

3. Jesus mak dalan ba Maromak uma. (3x)

4. Jesus mak naroman iha Maromak uma. (3x)

5. Jesus mak domin iha Maromak uma. (3x)

6. Jesus mak damen iha Maromak uma. (3x)

7. Ita hahi Nia iha Maromak uma. (3x)`,
},

{
  id: 35,
  category: "Entrada",
  title: "MAI HOTU HAKBESIK MAROMAK",
  content: `**MAI HOTU HAKBESIK MAROMAK**
_Mai hotu, hakbesik Maromak: haksolok no hananu!_

1. Rai tomak hawelok Maromak, serbi ita Na'i haksolok.
   Mai nia tutor oin, hananu ksolok nian.

2. Sei hatene katak Maromak ida deit.
   Ita, Nia mak halo, ita ninian.
   Ita nia povu bibi luhan Na'i nian.

3. Mai, tama nia odamatan hodi hananu.
   Hana'i, hahi Na'i Maromak,
   agradese, hawelok nia naran.

4. Tamba Na'i Maromak diak liu hotu;
   Nia domin ba bei-beik, Nia lialos ba nafatin.

5. Hasa'e ba Maromak Padre bele hot-hotu;
   Maromak Filho, Jesus Kristu, ita Na'i;
   ba Espiritu Santu. Amen.`,
},

{
  id: 36,
  category: "Entrada",
  title: "LORON KSOLOK BOOT",
  content: `**LORON KSOLOK BOOT**

1. Loron ida ne'e mak loron domin nian
   hamutuk halibur ho ksolok
   atu haklaken Na'i nia Naran.
   Loron ida ne'e mak loron domin nian
   _Aleluia, aleluia. Ami haklaken ho ksolok boot
   tan Na'i nia hahalok tomak. Aleluia, aleluia._

2. Loron ida ne'e mak Na'i to perdua.
   Hamutuk halibur ho ksolok
   atu haklaken Na'i nia Naran.
   Loron ida ne'e mak Na'i to perdua.`,
},

{
  id: 37,
  category: "Entrada",
  title: "LORON IDA NE'E",
  content: `**LORON IDA NE'E**
_Loron ida ne'e mak Maromak fo tulun._
_Ita hetan diak no haksolok._
_Fo laran ba Maromak tan Nia,_
_tan Nia diak, diak ba oin nafatin
aleluia, aleluia._

1. Israel nia ema, dehan ba,
   "Ninia diak, diak ba oin nafatin."
   Araao uma maka dehan ba,
   "Ninia diak, diak ba oin nafatin."
   Dehan ba Na'i Maromak nia uma,
   "Ninia diak, diak ba oin nafatin."

2. Iha ema diak sira knua,
   ho hananu ksolok manan nian,
   ita Na'i liman los halo diak,
   foti Ita liman los, Maromak.
   Maromak liman los todan tebes;
   liurai liman, liman Na'i Maromak.`,
},

{
  id: 38,
  category: "Entrada",
  title: "LORON FOUN SA'E ONA",
  content: `**LORON FOUN SA'E ONA**
_Loron foun sa'e ona, loron foun sa'e one,_
_aifunan naklelar._
_Loron foun sa'e ona, loron foun sa'e ona,_
_ha'u hetan ha'u nia Maromak._

1. Dolan tomak mundu ne'e nian dada ita ba lalehan.
   Jesus Kristu mak dalan, lori ita ba lalehan.

2. Ita ema nia vida laos deit iha terusu,
   alin maun ita hetan, halo ita hadomi malu.

3. Dalan nobun iha raiklaran halo ita la para,
   tamba buat nobun sei liu, domin deit hasa'e ba Ita.`,
},
{
  id: 39,
  category: "Entrada",
  title: "JUNTOS COMO IRMÃOS",
  content: `**JUNTOS COMO IRMÃOS**
_Juntos como irmãos, membros duma igreja._
_Vamos caminhando ao encontro do Senhor._

1. No longo caminhar pelo deserto, pela dor
   não podemos avançar sem ajuda do Senhor.
2. Unidos a rezar, unidos na mesma canção,
   vivemos a nossa fé com a ajuda do Senhor.
3. Unidos a cantar vamos dizer a toda a gente
   que vale a pena viver na esperança e no amor.
4. Nos vamos trabalhar na construção dum mundo novo
   onde reinará o amor, onde reinará a paz.`,
},

{
  id: 40,
  category: "Entrada",
  title: "JUNTOS CANTANDO A ALEGRIA",
  content: `**JUNTOS CANTANDO A ALEGRIA**
_Juntos cantando a alegria_
_de estarmos unidos na fé e no amor._
_Juntos sentindo em nossas vidas_
_a alegre presença do Senhor._

1. Somos a Igreja peregrina que Ele fundou,
   somos um povo que caminha sem parar.
   Entre cansaços e esperanças, para Deus,
   nosso amigo, Jesus, nos levará.

2. Há uma fé que alumia o nosso andar,
   uma esperança que nos leva a confiar.
   Mesmo que nos assustem as trevas de morte,
   nosso amigo, Jesus, nos guiará.

3. É o Senhor que nos assiste o caminhar;
   com amizade nos vai acompanhar.
   Se mil perigos nos espreitam sem cessar,
   nosso amigo, Jesus, nos salvará.`,
},

{
  id: 41,
  category: "Entrada",
  title: "RAIKLARAN, HANANU",
  content: `**RAIKLARAN, HANANU**
_Bidu, ho ksolok, hananu hahi Na'i!_
_Bidu, ho ksolok, hawelok Nia naran;_
_raiklaran tomak haktuir Na'i nia beran_
_hodi lia dadolin!_
_Rai ulun, rai ikun, tuku tur,_
_hahi Na'i nia kmanek mesak oi-oin!_
_Bidu ho tebe, hananu hahi Na'i!_
_Bidu, ho ksolok, hawelok nia naran!_

1. Povu tomak, hananu;
   povu tomak hana'i Trindade.
   Hahi ho ksolok, hawelok kmanek hotu
   nebe hatudu Na'i nia beran boot.

2. Povu tomak haksolok;
   povu hotu tuku tur hana'i
   Na'i nia beran ho buat kmanek hotu
   nebe haklaken Na'i nia domin lolos.

3. Rai klaran, hananu;
   povu hosi rai ulun rai ikun,
   halo rai klaran hawelok hahi Na'i
   nebe hakiak rai klaran ho Nia domin.`,
},

{
  id: 42,
  category: "Entrada",
  title: "RAHUN DIAK BA IDA BE MAI",
  content: `**RAHUN DIAK BA IDA BE MAI**
_Rahun diak ba ida be mai hodi Na'i nia naran._

1. Povu raiklaran hakseek,
   hana'i Maromak ho knananuk ksolok.

2. Tan Na'i boot liu hotu,
   kbiit makaas,
   Nia raiklaran tomak nia Liurai.

3. Tan povu hotu iha Nia ukun,
   halo reinu hotu kiik liu Nia.

4. Haraik rahun kmanek mai ita,
   tuir Jacob nia domin.

5. Hawelok, haksolok ba Maromak,
   hakseek hananu ba Na'i.

6. Hananu knananuk ba Maromak, hananu;
   hananu knananuk ba ita nia Liurai hananu.

7. Maromak mundu tomak nia Liurai,
   hananu knananuk mesak kmanek.

8. Maromak ukun povu raiklaran,
   Maromak hein An iha fatin santu.`,
},

{
  id: 43,
  category: "Entrada",
  title: "OHIN MAROMAK NIA LORON BOOT",
  content: `**OHIN MAROMAK NIA LORON BOOT**

1. Ohin Maromak nia loron boot,
   ho Nia ita mai haksolok,
   hodi hana'i, hahi Nia.
   Ohin Maromak nia loron boot.

   Aleluia, aleluia,
   ita sei hatudu katak sa,
   ninia hahalok foun tomak.
   Aleluia, aleluia.

2. Ohin Maromak hatudu nia domin...

3. Ohin Maromak hatudu perdaun..`,
},

{
  id: 44,
  category: "Entrada",
  title: "OHIN LORON, LORON HANA'I NA'I JESUS",
  content: `**OHIN LORON, LORON HANA'I NA'I JESUS**
_Ohin loron, loron hana'i Na'i Jesus, aleluia, aleluia._

1. Husik buat hotu, mai uma Kreda,
   hana'i, hahi Na'i Maromak.
   Hasa'e ba Nia klamar no isin,
   terus eh ksolok; diak eh aat.

2. Loron Domingo loron harohan,
   rona Maromak lialos.
   Komunga, simu aihan lalehan,
   kbiit makaas, tulun diak nian.`,
},

{
  id: 45,
  category: "Entrada",
  title: "OHIN ITA MAI HAHI",
  content: `**OHIN ITA MAI HAHI**
_Ohin ita mai hahi ita nia Maksoin bele tomak,_
_hahi, hawelok ita Nain nebe halo ita moris._
_Mai hotu, hahi ita Aman, domin los nia hun_
_nebe halibur ita hadulas altar._

1. Ha'u buka ita, ha'u tuir ita,
   ha'u hein ita, ha'u hadomi ita.

2. Ha'u fiar metin, ha'u laran metin,
   ha'u kaer metin ita ukunfuan.`,
},

{
  id: 46,
  category: "Entrada",
  title: "OHIN DADER",
  content: `**OHIN DADER**

1. Ohin dader, data ida tan
   ha'u mai harohan no husu ita roman,
   tamba ha'u la bele la'o tan ba oin,
   hakarak rona Ita lia nebe dehan:
   Aman hadomi, Nia bolu ha'u,
   Atu to ksolok ha'u.

   _Ha'u ba la'o ha'u dalan, ha'u ba_
   _Tamba Na'i mak domin, tamba Na'i bolu ha'u,_
   _Tamba Na'i mak domin._

2. Ohin ne'e karik dala ida tan,
   ha'u ba tanis, hamnasa, hanoin
   base la hatene loron aban nian.
   Buat ha'u hatene mak ida ne'e los:
   katak ha'u Aman bolu ha'u nafatin
   atu to ksolok ha'u.`,
},

{
  id: 47,
  category: "Entrada",
  title: "NA'I, MAI UMA NE'E",
  content: `**NA'I, MAI UMA NE'E**
_Na'i, mai uma ne'e. Ohin It'bolu ami._
_Ami mai halibur nudar Ita oan._

1. Mai hosi fatin barak, halibur iha ne'e.
   Ema lubun boot nebe tuir Ita lia.

2. Hosi fatin dook tebes, hakbesik ba altar ne'e.
   Simu moris foun hamutuk ho Ita Boot.`,
},

{
  id: 48,
  category: "Entrada",
  title: "NA'I LIURAI RAI HOTU NIAN",
  content: `**NA'I LIURAI RAI HOTU NIAN**
_Na'i liurai rai hotu nian, ami hana'i Ita Boot_
_Na'i Liurai ami nian, Ita nia ukun rohan laek._

1. Na'i Maromak laran luak. Nia soi ita tan nia domin,
   no to mai ita moris rohan laek.

2. Ami hakat ba Ita uma atu hananu no harohan;
   ami hahi no agradese ita nia kmanek wain.`,
},
{
  id: 2,
  category: "Responsorial",
  title: "HANANU BA NA'I KNANANUK FOUN IDA",
  content: `**HANANU BA NA'I KNANANUK FOUN IDA**
_Hananu ba Na'i knananuk foun ida,_
_Hananu ba Na'i, iha mundu raiklaran._

1. Hananu ba Na'i knananuk foun ida,
   ba buat furak nebe Nia halo.
2. Na'i hatudu nia diak;
   ba rai sira hatudu nia justisa.
3. Rai klaran tomak hare ona,
   ita Maromak nia diak.`,
},

{
  id: 3,
  category: "Responsorial",
  title: "HALIBUR AMI, NA'I",
  content: `**HALIBUR AMI, NA'I**
_Halibur ami, Na'i; halibur ami ho tali be sei la kotu._
_Halibur ami, Na'i; halibur ami ho tali domin nian._

1. Iha Na'i ida deit; domin nia Maromak.
   Iha mos Liurai ida; Na'i nia povu nian.

2. Moris atu sai oan; Na'i Maromak ninian
   sai maun alin ba malu; forma familia ida.`,
},

{
  id: 4,
  category: "Responsorial",
  title: "HAKSOL0K BA, BASA IMI NARAN",
  content: `**HAKSOL0K BA, BASA IMI NARAN**
_Haksolok ba, basa imi nia naran
hakerek ona iha lalehan._

1. Rahun diak ba imi be kiak,
   basa Maromak nia reinu imi nian.

2. Rahun diak ba imi be hamlaha,
   basa imi sei hetan aihan wain.

3. Rahun diak ba imi be ohin loron tanis,
   basa imi sei hamnasa.

4. Rahun diak ba imi nebe terus tan Maromak naran,
   basa reinu lalehan imi nian.

5. Rahun diak ba imi be laran mos,
   basa imi sei hare Maromak.

6. Rahun diak ba sira be hakmatek,
   basa sei hanaran sira Maromak oan.`,
},

{
  id: 5,
  category: "Responsorial",
  title: "HAHI, HANA'I JESUS",
  content: `**HAHI, HANA'I JESUS**
_Hahi, hana'i Jesus, ema rai tomak, Nia naran._

1. Maromak hanoin ita, tulun ita.
   Leno mai ita Nia tutor oin naroman.

2. Iha ema sei hatene Maromak dalan,
   iha ema leet ema sei hetan Nia tulun.

3. Rai hotu sei hetan ksolok
   tan Na'i Maromak tesi lia la sola.`,
},

{
  id: 6,
  category: "Responsorial",
  title: "HADOMI, FO DAME",
  content: `**HADOMI, FO DAME**
_Hadomi, fo dame, perdaun, tulun._
_Hadomi, perdaun._

1. Jesus dehan iha nia Evanjelho:
   ema sei hirus malu, sei hatan iha tribunal.

2. Jesus hanorin, dehan nune'e:
   ema sei bolu nia maluk bulak, sei dadur iha ahi.

3. Jesus dehan hodi hanorin:
   a perdua o nia maluk hitu nulu data hitu.

4. Jesus to hanorin dehan:
   imi perdua maluk sira nia sola, Maromak perdua imi.`,
},

{
  id: 7,
  category: "Responsorial",
  title: "EMA HOTU HATENE",
  content: `**EMA HOTU HATENE**
_Ema hotu hatene: Maromak diak tebes._

1. Hana'i nafatin ha'u Na'i,
   ha'u ibun hahi Nia kalan loron.
   Maromak ha'u nia kbiit,
   kiak sira haksolok rona Nia.

2. Ita hotu haklaken Na'i nia beran,
   hamutuk hawelok Nia naran.
   Ha'u buka, Maromak rona ha'u;
   sadia ha'u hosi susar laran.

3. Hahi Maromak, imi sei haksolok.
   Imi neon sei la susar.
   Kiak ida ba hatan, nia hetan tulun;
   hetan tulun ba nia susar.`,
},

{
  id: 8,
  category: "Responsorial",
  title: "DIAK, HA'U SEI FILA FALI",
  content: `**DIAK, HA'U SEI FILA FALI**
_Diak, ha'u sei fila fali ba hasouru ha'u Aman._

1. Ba Ita, ha'u Na'i, hasa'e ha'u klamar
   ha'u tau neon ba Ita, ha'u nia Maksoin.

2. Na'i, hasai ha'u hosi susar laran;
   ha'u nia funu maluk keta manan ha'u.

3. Na'i, hanorin Ita nia hakarak
   Ita Boot nia dalan hatudu mai ha'u ba.`,
},

{
  id: 9,
  category: "Responsorial",
  title: "ATAN SIRA, HAHI BA",
  content: `**ATAN SIRA, HAHI BA**
_Atan sira, hahi ba; Hahi ba Maromak naran;_
_diak oin sa Na'i Maromak nia naran._

1. Ohin loron ba nafatin
   _Diak oin sa Na'i Maromak naran._

2. Na'i boot tebes, boot liu hotu.

3. Ninia ukun aas liu hotu.

4. Se mak sukat Na'i Maromak.`,
},

{
  id: 10,
  category: "Responsorial",
  title: "AMI SEI HELA NONOK",
  content: `**AMI SEI HELA NONOK**
_Ami sei hela nonok, sei se tilun ba
Maromak nia liafuan tun mai to'o ami._

1. Na'i Maromak, Liurai lalehan ho rai.
   Na'i Maromak mak iha kbiit.

2. Na'i Maromak hodi kbiit
   halo ona lalehan ho raiklaran.

3. Na'i Maromak iha hori uluk;
   Maromak rohan laek, sei hela metin nafatin.

4. Mota, anin, tasi, foho lori Nia lia
   Maromak nia lia namkari ba fatin hot-hotu.`,
},

{
  id: 11,
  category: "Responsorial",
  title: "AMI HAHI ITA BOOT NIA JUSTISA",
  content: `**AMI HAHI ITA BOOT NIA JUSTISA**
_Ami ha hi Ita Boot nia justisa,_
_ami haklaken Ita Boot laran luak, Kristu, Na'i Liurai!_

1. Rai hotu iha Maromak futar liman,
   foho aas tomak Maromak nia soi.

2. Rai, tasi hotu Maromak ninian,
   tan sira Maromak nia liman fatin.

3. Hahi, hana'i ba Na'i Maromak,
   tan Nia Ita Maksoin.`,
},
{
  id: 12,
  category: "Responsorial",
  title: "LARAN BA ITA, AMI NA'I",
  content: `**LARAN BA ITA, AMI NA'I**
_Laran ba Ita, ami Na'i; ami laran diak nian._
_Laran ba Ita, ami Na'i; hananu Ita diak._

1. Ita naran ami hananu, tan Ita domin boot tebes.
   Ha'u hakilar, Ita rona; to mai tebes kbiit ha'u klamar.

2. Liurai hotu hahi Ita, bainhira rona Ita lia.
   La'o hananu Na'i Maromak dalan,
   Na'i Maromak diak boot tebes.

3. Maski la'o ho fuan taridu,
   ha'u fiar metin iha Ita nia tulun.
   Ema kiak no ema kiik Ita hadomi.
   Na'i Maromak boot oin sa.

4. Fo liman atu soi ata oan.
   Kalan loron ha'u sader ba Ita Boot.
   Ita hadomi tinan bainloron.
   La husik buat Ita hakiak.`,
},

{
  id: 13,
  category: "Responsorial",
  title: "LABARIK BARAK MAI BESIK JESUS",
  content: `**LABARIK BARAK MAI BESIK JESUS**

1. Labarik barak mai besik Jesus,
   Nia bensa diak sira hakarak husu;
   Nia eskolante sira hare labarik barak;
   "Ba tiha dook hotu; Jesus lakohi imi."

_Maibe Jesus hirus sira, "Husik labarik sira mai.
Ha'u nia reinu kikoan sira nian,
ho mos ba ema nebe hanesan sira". (2x)_`,
},

{
  id: 14,
  category: "Responsorial",
  title: "KOALIA BA, NA'I",
  content: `**KOALIA BA, NA'I**

1. Hatudu mai, Na'i, Ita dalan be Ita hakarak ha'u tuir.
   Hatudu, Na'i, Ita dalan; ha'u hakarak rona Ita lian.

_Koalia ba, Na'i; Ita atan se tilun. (4x)_

2. Na'i, loke ami nia tilun tan kleur ona mak la rona.
   Rona deit mak mundu nia lia; la rona Ita nia lian.

3. Mundu ne'e iha ema barak
   mak seidauk hatene Ita Boot.
   Ohin Ita sei tenik nafatin:
   "Imi sai ba, sasin Ha'u nian."

4. Loke ba ami nia fuan be Ita halo atu hadomi.
   Dala ruma taka metin netik; la husik Ita atu tama.`,
},

{
  id: 15,
  category: "Responsorial",
  title: "IHA FOHO SANTU",
  content: `**IHA FOHO SANTU**
_Iha foho santu Na'i ninian ha'u rona lia ida bolu ha'u._

1. Na'i, Ita oan mak ne'e; ha'u rona Ita Boot bolu.
   Ha'u saran an ba Ita, Na'i; hodi la'o tuir Ita Boot.

2. Na'i, ha'u ata folin laek haksolok rona Ita bolu;
   halo ha'u sai roman ba ema tomak iha rai.

3. Na'i, ha'u maksoin, haraik matan mai ha'u,
   basa Ita rasik fihar ha'u, ho ksolok hatan (ba) Ita Boot
   ha'u saran an tomak to'o mate.`,
},

{
  id: 16,
  category: "Responsorial",
  title: "HA'U SEI HAKLAKEN",
  content: `**HA'U SEI HAKLAKEN**
_Ha'u sei haklaken ba ema tomak:
Maromak Ha mesak diak._

1. Hodi laran ha'u hadomi Ita Boot nia ukunfuan.
   Hodi hakarak tuir kalan loron.

2. Ha'u sei hili dalan los iha ha'u mods,
   atu la ses hosi Ita Boot nia ukun.

3. Ita Boot deit mak bele to mai ha'u
   tan susar mak ha'u hetan iha rai nia laran.

4. Maromak nia lia ami matadalan;
   no roman leno ami dalan.

5. Ema nia lia anin hodi bele,
   Maromak nia lia hela nafatin.

6. Diak ba ema sira iha raiklaran
   rona tuir Maromak nia lia.`,
},

{
  id: 17,
  category: "Responsorial",
  title: "HA'U SEI FILA FALI BA",
  content: `**HA'U SEI FILA FALI BA**
_Ha'u sei fila fali ba,
ba Maromak ha'u Aman, ha'u Na'i._

1. Na'i Maromak, se tilun mai ha'u atan.
   Hatan ha'u tan susar no kiak.

2. Tulun ha'u, Maromak, tan Ita ha'u belun;
   sadia atan ha'u laran metin ba Ita.

3. Na'i Maromak, hanoin ha'u, rona ha'u.
   Tan ha'u bolu Ita Boot loron tomak.

4. Fo ha'u klamar ksolok lalehan;
   tan ha'u klamar ha'u to ba Ita.

5. Ita laran luak no diak tebes;
   diak ba sira be harohan.`,
},

{
  id: 18,
  category: "Responsorial",
  title: "HA'U SEI DEHAN",
  content: `**HA'U SEI DEHAN**

1. Ha'u sei dehan: Se o fiar Na'i Maromak,
   o hare Nia gloria. (2x)

_O hare Maromak nia gloria. (4x)_

2. Ha'u sei dehan: se o hatene Na'i Maromak.
3. Ha'u sei dehan: se o terus tan Maromak.
4. Ha'u sei dehan: se o perdua tan Maromak.`,
},

{
  id: 19,
  category: "Responsorial",
  title: "HA'U MAK NE'E, NA'I",
  content: `**HA'U MAK NE'E, NA'I**

1. Ha'u mak ukun tasi, lalehan,
   rona Ha'u povu nia hakilar,
   moris iha nakukun no sala:
   Ha'u sei soi sira.
   Ha'u mak halo fitun iha kalan;

   Ha'u sei halo nakukun roman;
   se los lori roman ba sira?
   Ha'u sei haruka se?

_Ha'u mak ne'e, Na'i! (2x)
Ha'u rona Ita bolu ha'u iha kalan.
Ha'u sei ba, Na'i. Tulun ha'u ba,
ha'u sei hein Ita povu ho domin._

2. Ha'u mak ukun kalohan no udan.
   Ha'u tahan ha'u povu susar;
   Ha'u tanis tan hadomi sira.
   sira hadook-an hosi Ha'u.
   Ha'u sei hamamar sira fuan;
   to fuan hatene hadomi;
   Ha'u sei hato'o ha'u lia ba sira.
   Ha'u sei haruka se?

3. Ha'u mak ukun anin no roman.
   Ha'u hare ema kiak no kiik.
   Ha'u sei halo testa ba sira;
   Ha'u sei soi sira.`,
},

{
  id: 20,
  category: "Responsorial",
  title: "HA'U LA'O NAFATIN",
  content: `**HA'U LA'O NAFATIN**
_Ha'u la'o nafatin Na'i Maromak tutor oin. (2x)_

1. Ha'u hadomi Maromak tan rona ha'u lia no ha'u bolu,
   tan hakruuk mai ha'u nia tilun
   iha loron nebe ha'u bolu.

2. Dadur metin ha'u mate nia laran,
   ha'u susar laran taridu.
   Ha'u temi Maromak nia naran,
   Jesus mai tulun ha'u ata.

3. Na'i Jesus laran diak no mos, ita Na'i laran luak.
   Na'i Maromak, ema kiik ha'u kole
   no ha'u susar Nia to tulun.`,
},

{
  id: 21,
  category: "Responsorial",
  title: "HA'U KLAMAR HA'U FO BA ITA",
  content: `**HA'U KLAMAR HA'U FO BA ITA**
_Ha'u klamar ha'u fo ba Ita;
Ita Boot Maromak ha'u fiar._

1. Hatudu Ita Boot dalan mai ha'u ata,
   hanorin mai ha'u Ita nia dalan.

2. Hanorin ha'u la'o ita lialos;
   Ita ha'u nia Na'i, ha'u nia Maksoin.

3. Maromak, ha'u hein Ita boot loron tomak;
   tan Ita Boot nia laran luak.`,
},
{
  id: 22,
  category: "Responsorial",
  title: "EU QUERO VIVER",
  content: `**EU QUERO VIVER**
_Eu quero viver na Tua alegria,
contigo serei feliz cada dia;
eu quero seguir-Te, Senhor, meu bem,
contigo irei mais além._

Irei mas além, se Tu vais comigo,
serei para todos o melhor amigo.
Irei mas além caminhando em frente,
serei dedicado para toda a gente.
Irei mas além, o Senhor meu Deus
depois desta vida a glória dos céus.`,
},

{
  id: 23,
  category: "Responsorial",
  title: "BENDITO SEJA JESUS CRISTO",
  content: `**BENDITO SEJA JESUS CRISTO**
_Bendito seja Jesus Cristo
p'ra sempre, p'ra sempre, p'ra sempre, p'ra sempre!
Bendito seja Jesus Cristo._

_p'ra sempre, p'ra sempre, p'ra sempre, p'ra sempre!_

1. Gloria à Jesus Cristo, o Filho de Deus,
   gloria à Jesus Cristo, nosso Salvador.
   Gloria à Jesus Cristo, Cordeiro de Deus.
   Gloria à Jesus Cristo, O que nos amou.`,
},

{
  id: 24,
  category: "Responsorial",
  title: "BEM-AVENTURADOS PARA SEMPRE",
  content: `**BEM-AVENTURADOS PARA SEMPRE**

1. Bem-aventurados são os pobres;
   bem-aventurado a quem chorou.
   Bem-aventurado a quem constroe,
   e faz permanecer, a paz amanhecer.
   Bem-aventurado!
   O pobre porque um dia ainda reinará.
   Quem chora porque um dia se consolará.
   Quem vive pela paz porque ela vai chegar
   bem-aventurados para sempre.

2. Bem-aventurado a quem procure
   o reino da justiça e do amor.
   Quem conhece a força do perdão
   e sabe conservar sem mancha o coração.
   Bem-aventurado!
   O justo porque um dia ainda governará,
   o homem que perdoa porque vencerá.
   O puro por ser filho mais chegado ao Pai.
   Bem-aventurados para sempre!

3. Bem-aventurado a quem padece
   por causa da justiça e do perdão.
   Bem-aventurado a quem sofreu
   por causa do seu Deus, por causa dos irmãos.
   Bem-aventurado!
   Feliz a todo aquele que se faz irmão,
   que faz da sua vida uma libertação,
   que também se inseriu sem compactuar.
   Bem-aventurados para sempre!`,
},

{
  id: 25,
  category: "Responsorial",
  title: "UDANBETUN",
  content: `**UDANBETUN**
_Udan be tun hosi lalehan mai
sai habokon no haburas rai;
nune'e mos Na'i nia futar lia
sei halo tuir knaar Maksoin ba ema tomak._

1. Nu'u fini be monu ba rai moris buras to'o to folin,
   nune'e mos Na'i tutor liafuan
   sei to folin iha ema moris.

2. Fini ne'e Na'i nia futar lia, Kristu mak kuda iha fuan;
   ida nebe rona ho laran
   sei hetan moris rohan laek.

_Ami harohan ba Ita, O Na'i, rona ami nia hamulak!_`,
},

{
  id: 26,
  category: "Responsorial",
  title: "SIM, NA'I",
  content: `**SIM, NA'I**

1. Ha'u rona Ita bolu, "Mai tuir Ha'u,
   sai ha'u nia liman iha mundu ne'e,
   serbisu Ha'u nia toos, hare Ha'u nia bibi sira,
   saran o nia an ba nafatin."

_Sim, Na'i, (2x) ha'u sei ba.
Sim, Na'i, (2x) ha'u sei tuir._

2. Ita nia naha sei la todan,
   Ita Mak dalan maski kalan boot.
   ha'u sei kaer ha'u krus atu serbi no tuir Ita,
   ha'u fuan haksolok iha buat hotu ha'u halo.

_Sim, Na'i, (2x) ha'u It'Boot nian.
Sim, Na'i (2x) ba nafatin._

3. Buat hotu Ita husu ha'u sei halo tuir
   sei haruka ha'u, ha'u sei ba tan Ita,
   ha'u nia susar hotu simu ho hakmatek
   iha Ita hakarak mak ha'u paz.

_Sim, Na'i, (2x) ha'u mak ne'e.
Sim, Na'i, (2x) to'o rohan._`,
},

{
  id: 27,
  category: "Responsorial",
  title: "SE O RONA",
  content: `**SE O RONA**

1. Se o rona anin nia lia bolu nafatin o;
   se o rona tempu nia lia haruka o atu hein;
   O rasik sei decide.

_Na'i bolu ema wain; (2x)
barak tempu la iha. (2x)_`,
},

{
  id: 28,
  category: "Responsorial",
  title: "RAHUN KMANEK",
  content: `**RAHUN KMANEK**
_Rahun kmanek ba ida nebe rona Na'i nia futar lia._

1. Na'i tutor lia nudar matadalan,
   lori ha'u ba Aman lalehan.`,
},

{
  id: 29,
  category: "Responsorial",
  title: "NA'I JESUS HATETEN",
  content: `**NA'I JESUS HATETEN**
_Na'i Jesus hateten: Ukunfuan ha'u nian.
Imi sei hadomi malu tuir Ha'u hadomi imi._

1. Hadomi los nian maka ne'e;
   to an ba mate tan belun sira.
   imi tuir ha'u haruka,
   imi sei sai ha'u belun los.

2. Imi sei rona halo tuir:
   hadomi ema sira nebe
   halo aat ba imi
   husu tulun ba sira.

3. Imi mak halo tuir ne'e.
   Imi nia Aman mak Na'i Maromak.
   Aman diak no doben,
   horik lalehan aas nian ba.`,
},

{
  id: 30,
  category: "Responsorial",
  title: "NA'I JESUS, AMI HANA'I",
  content: `**NA'I JESUS, AMI HANA'I**

1. Na'i Jesus, ami hana'i, hanoin ami.
   Ami isin ami klamar,
   Ami Timor oan kiak,
   Fo ba Ita, ami Na'i.

2. Maun Jesus, Maromak Oan,
   Tulun ami, atan kiak.
   Ami husu, ami reza,
   Halo funu hotu ona.

3. Maun Jesus no belun boot,
   Timor oan tanis mate,
   Rona ami tulun ami,
   Fakar ran terus todan.`,
},

{
  id: 31,
  category: "Responsorial",
  title: "NA'I, HA'U SEI BA HO ITA",
  content: `**NA'I, HA'U SEI BA HO ITA**
_Na'i, Ita Boot mak bolu ha'u.
Na'i, Ita Boot konvida ha'u.
"Tuir Ha'u mai! Tuir Ha'u mai!"
Ha'u Na'i, ha'u sei ba ho Ita._

1. Ha'u sei husik ha'u nia dai iha tasi ibun.
   Ha'u sei kaer ha'u knaar ho Ita, ha'u Na'i.

   Sei hadid fatin ba Ita nia dalan;
   ha'u sei kuda Ita liafuan iha ha'u nia sorin:
   Nia sei moris duni, nia sei buras duni.

2. Ha'u sei husik ha'u nia soin no rai;
   ha'u sei fo ha'u nia tempu no serbisu ba ema.
   Nune'e, sei hatene katak Ita Boot iha.
   Ho ha'u nia kbiit ha'u sei loke ha'u nia laran,
   ba Ita Boot nia domin, ba Ita Boot nia dame.`,
},

{
  id: 32,
  category: "Responsorial",
  title: "NA'I, HA'U MAK NE'E",
  content: `**NA'I, HA'U MAK NE'E**

1. Na'i, ha'u mak ne'e, rona Ita lia.
   Ha'u hakarak saran an ba Ita, o Na'i.
   Iha mundu ne'e hamutuk ho maus,
   ha'u husik buat hotu atu tuir deit Ita.

2. Na'i, ha'u Maksoin; haraik matan mai ha'u;
   basa Ita Boot rasik fihar ha'u ata.
   Ha'u haksolok tan Ita bolu,
   halo ha'u sai roman ba ema hot-hotu.
   O Na'i, ha'u moris ba Ita.
   Ha'u saran an tomak, ohin to'o mate.`,
},

{
  id: 33,
  category: "Responsorial",
  title: "MAROMAK LIMAN LOS",
  content: `**MAROMAK LIMAN LOS**
_Maromak liman los hatudu Nia kbiit.
Maromak liman los foti ha'u.
Ha'u sei la mate, moris beibeik.
Hahi, ha na'i Na'i Maromak._

1. Hananu hahi Na'i, tan Nia diak.
   Ninia domin boot tebes, rohan laek.`,
},

{
  id: 34,
  category: "Responsorial",
  title: "MAI, KOKO BA",
  content: `**MAI, KOKO BA**
_Mai, koko ba hodi hare Na'i laran diak oin sa. (2x)_

1. Hahi Maromak loron kalan;
   ha'u ibun hahi nafatin Nia.
   Maromak ha'u nia gloria,
   ema kiik sira rona Nia ho ksolok.

2. Na'i nia santu sira hana'i Maromak ba.
   Buat ida la kuran ba sira be hadomi Nia.
   Ema riku sira sei sasi kiak.
   Buat ida la kuran ba sira buka Maromak.

3. Ha'u oan sira besik mai hodi rona ha'u;
   ha'u hanorin imi hamtauk Maromak.
   Imi se mak hakarak moris?
   Se mak hakarak hatene?

4. Hare o nanal keta sala,
   hare o ibun keta dehan lia bosok.

_Halo buat diak, soe buat aat;
buka nafatin dame to'o hetan._`,
},

{
  id: 35,
  category: "Responsorial",
  title: "LARAN METIN BA NA'I MAROMAK",
  content: `**LARAN METIN BA NA'I MAROMAK**
_Laran metin ba Na'i Maromak, ha'u moris Ita lia.
Ita lia mai nafatin, ho nia ha'u titu deit._

1. Ba sira klamar mos ksolok tebes,
   sira be tuir Maromak ukunfuan;
   ba sira be tuir Nia ukun ksolok boot,
   buka Nia ho laran diak.

2. Ha'u klamar latan ba rai rahun,
   ho Ita tutor lia ha'u moris fali;
   ha'u klamar laran susar tebes,
   to ksolok ha'u ho Ita liafuan.

3. Ha'u hili dalan los no diak nian.
   Tuir uluk Ita ukun no hakarak.
   Sei tuir nafatin dalan Na'i Maromak
   bainhira ha'u iis seidauk kotu.

4. Ha'u haksolok tebes iha susar laran,
   tan Ita lia to moris hias ha'u fuan;
   maski kalan ha'u hanoin Ita naran,
   buka tuir nafatin Ita nia hakarak.`,
},
{
  id: 36,
  category: "Aleluia",
  title: "NA'I JESUS, HORIK HO AMI",
  content: `Na'i Jesus horik ho ami, aleluia,
atu leno ami dalan, aleluia.

1. Nia hanorin deit lialos, aleluia.
   Mai haroman ami neon, aleluia.

2. Hananu no simu ba, aleluia.
   Ita Na'i nia tutor lia, aleluia.

3. Tan Nia domin ita moris, aleluia,
   loron loron ba nafatin, aleluia.

4. Jesus doben, moris Nain, aleluia,
   fo domin mai atan ami, aleluia.`
},

{
  id: 37,
  category: "Aleluia",
  title: "MORIS SUSAR EH DIAK, ALELUIA",
  content: `1. Moris susar eh diak, aleluia,
tuir Jesus ukunfuan, aleluia;
metin ba Na'i Jesus, aleluia.

Aleluia, aleluia, aleluia.

2. Liman ba liman to, aleluia,
tulun malu beibeik, aleluia,
midar deit, buka diak, aleluia.

3. La temi kulit eh rai, aleluia,
Maromak ida deit, aleluia,
ita tomak Nia soi, aleluia.`
},

{
  id: 38,
  category: "Aleluia",
  title: "KRISTU NIA ROMAN",
  content: `Kristu nia roman nabilan iha mundu tomak.
Aleluia, aleluia.

1. Hananu ba knananuk foun ida,
hananu ba Na'i, mundu tomak.
Hananu ba Na'i, hawelek nia naran.

2. Hana'i Maromak tan Nia diak,
tan Nia laran luak ba ema hotu,
tan Nia soi ema tomak.

3. Na'i nia liman halo buat kmanek,
Na'i nia liman kmanek tebes,
kmanek oi-oin mosu ita oin.

4. Sei la mate, maibe sei moris
atu haklaken Na'i nia hahalok
tan Nia laran luak ba nafatin.

5. Fatuk ida be ema hewai
nakfilak ba fatuk inan;
buat ne'e hotu mai hosi Maromak.`
},

{
  id: 39,
  category: "Aleluia",
  title: "ITA FUTAR LIA DOMIN",
  content: `1. Ha'u mai atu se tilun, rona
Ita nia futar lia, Ita nia futar lia domin. (2x)

2. Ha'u hakarak se tilun, rona.

3. Ha'u hakarak hatene didiak.

4. Raiklaran sei ba moris hotu.`
},

{
  id: 40,
  category: "Aleluia",
  title: "HANA'I BA ITA, KRISTU",
  content: `Hana'i ba Ita, Kristu, Maromak nia futar lia.

1. Kristu haraik An to'o mate,
hodi mate iha krus.
Tamba ne'e Maromak foti Nia
hodi to ba Nia naran ida boot liu hotu.`
},

{
  id: 41,
  category: "Aleluia",
  title: "DALAN DIAK NO MAKSOIN",
  content: `Dalan diak no Maksoin mak Jesus, aleluia.

1. Na'i Maromak ha'u naroman no Maksoin.
Ha'u tauk tali se?
Na'i Maromak sei tahan ha'u moris.
Ha'u tauk tali se?

2. Buat ida deit husu ba Maromak,
ha'u husu beibeik ho laran:
atu horik Maromak nia kadunan
lor-loron iha ha'u nia moris tomak.

3. Na'i Maromak rona ha'u lian;
hanoin ha'u atan.
Ha'u harohan ho ha'u laran,
ha'u nia oin buka Ita Boot.`
},

{
  id: 42,
  category: "Aleluia",
  title: "BA NA'I MAROMAK HAN ANU AMEN ALELUIA",
  content: `Ba Na'i Maromak hananu,
"Amen, Aleluia." (2x)

1. Ema tomak hahi Ita Boot naran,
Maromak nia naran.
Tan Ita hadomi, la hein seluk,
hadomi los Nia duni.`
},

{
  id: 43,
  category: "Aleluia",
  title: "ALELUIA, KRISTU, ITA NIA MORIS",
  content: `Aleluia (3x)

1. Kristu, ita nia moris,
ita nia dalan los, lialos.

2. Kristu Jesus, Na'i Maromak.
Nia deit mak to liberdade.

3. Kristu, Nia to an ba mate;
mate tan ita ema.`
},

{
  id: 44,
  category: "Aleluia",
  title: "ALELUIA, KRISTU ITA DALAN",
  content: `Aleluia (3x)

1. Kristu ita dalan,
Kristu rasik dehan: Nia ita dalan.

2. Kristu ita moris,
Kristu rasik dehan: Nia ita moris.

3. Kristu ita lialos,
Kristu rasik dehan: Kristu ita lialos.`
},

{
  id: 45,
  category: "Aleluia",
  title: "ALELUIA, NA'I JESUS, ITA LIURAI",
  content: `Aleluia, aleluia,
Na'i Jesus, ita Liurai. (2x)

1. Hahi Maromak ho hananu foun ida
tan Nia halo buat diak.
Ho liman los Nia manan,
manan funu: Nia liman santu.

2. Na'i Maromak to tada ksolok lalehan;
Nia to sai ba rai hotu Nia lialos.
Nia laran luak diak, diak nafatin:
to tulun ba ema Israel.`
},

{
  id: 46,
  category: "Aleluia",
  title: "ALELUIA, AGRADESSE",
  content: `Aleluia, aleluia,
agradece ba Maromak!
Aleluia, aleluia,
ita ha hi Nia naran.

1. Haksolok ba! Kristu moris hias;
lori mai ita moris rohan laek.

2. Haklaken ba! Kristu moris hias;
Nia mak dalan, lialos ba nafatin.

3. Hato'o ba mundu raiklaran:
ita Liurai mak Jesus Kristu!`
}
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

// Renders a single paragraph from MISA_SECTIONS paragraphs array
const MisaParagraph = ({ para, fontSize }) => {
  const fs = { fontSize: `${fontSize}px` };
  if (para.type === "subheading") {
    return (
      <p className="font-bold mt-3 mb-1" style={{ color: para.color === "red" ? "#b91c1c" : "#374151", ...fs }}>
        {para.text}{para.note && <span className="font-normal text-xs ml-2 opacity-70">({para.note})</span>}
      </p>
    );
  }
  if (para.type === "sp") {
    return (
      <p className="leading-relaxed" style={fs}>
        <strong>{para.s}:</strong>{" "}
        {para.italic ? <em>{para.text}</em> : para.text}
        {para.inlineR && <><strong className="ml-3">R:</strong> {para.inlineR}</>}
      </p>
    );
  }
  // type === "text"
  const lines = para.text.split("\\n");
  return (
    <p className="leading-relaxed" style={fs}>
      {lines.map((line, i) => (
        <span key={i}>
          {para.italic ? <em>{line}</em> : para.bold ? <strong>{line}</strong> : line}
          {i < lines.length - 1 && <br />}
        </span>
      ))}
    </p>
  );
};

// Full MISA scrollable view — all sections on one page with sticky section anchors
const MisaView = ({ fontSize }) => (
  <div className="animate-in fade-in duration-500 pb-20 space-y-5">
    {/* Header banner */}
    <div
      className="rounded-2xl overflow-hidden shadow-md border border-white/40 relative"
      style={{ minHeight: "160px", backgroundImage: `url(${imgMisal})`, backgroundSize: "cover", backgroundPosition: "center" }}
    >
      <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(255,255,255,0.1), rgba(26,26,46,0.7))" }} />
      <div className="relative z-10 p-5 flex flex-col justify-end h-full" style={{ minHeight: "160px" }}>
        <h2 className="text-white font-black text-2xl drop-shadow">ORDINÁRIO DA MISSA</h2>
        <p className="text-white/80 text-xs font-semibold mt-1 drop-shadow">Texto Oficial Tetum · Para o Povo</p>
        <p className="text-white/60 text-xs drop-shadow">Conferência Episcopal Timorense · Comissão Nacional Liturgia</p>
      </div>
    </div>

    {MISA_SECTIONS.map((section) => (
      <div key={section.id} id={section.id} className="rounded-2xl shadow-sm border border-pink-100 overflow-hidden" style={{ backgroundColor: "#f5dadc" }}>
        <div className="px-5 pt-4 pb-2 border-b border-pink-200">
          <h3 className="font-black text-lg text-center text-gray-800">{section.title}</h3>
        </div>
        <div className="px-5 py-4 space-y-2">
          {section.paragraphs.map((para, i) => (
            <MisaParagraph key={i} para={para} fontSize={fontSize} />
          ))}
        </div>
      </div>
    ))}
  </div>
);

// Terço da Misericórdia full page view
const TersoView = ({ onBack, fontSize }) => (
  <div className="animate-in fade-in duration-500 pb-20 space-y-5">
    {/* Header card */}
    <div className="rounded-2xl p-5 text-center shadow-sm border border-pink-100" style={{ backgroundColor: "#f5dadc" }}>
      <h2 className="text-2xl font-black text-red-700 mb-3">Terço da Misericórdia</h2>
      <img
        src={imgTersu}
        alt="Terço da Misericórdia"
        className="mx-auto rounded-xl shadow-sm mb-1"
        style={{ maxWidth: "260px", width: "100%" }}
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
          {section.image && (() => {
            const imgMap = { "tersu.jpg": imgTersu, "scj.jpeg": imgScj, "vm.jpeg": imgVm };
            const src = imgMap[section.image];
            return src ? (
              <div className="flex justify-center">
                <img
                  src={src}
                  alt={section.title}
                  className="rounded-xl shadow-sm"
                  style={{ maxWidth: "260px", width: "100%" }}
                />
              </div>
            ) : null;
          })()}

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

  const imgMap = {
    "hau-sae.png": imgHauSae,
    "pv-halibur.png": imgPvHalibur,
    "ohin-mai.png": imgOhinMai,
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
      {item.image && imgMap[item.image] && (
        <div className="flex justify-center mt-6">
          <img src={imgMap[item.image]} alt={item.title} className="rounded-xl shadow-md" style={{ maxWidth: "280px", width: "100%" }} />
        </div>
      )}
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
            {/* Hero card with hbn.webp as background */}
            <div
              className="rounded-[2rem] text-center shadow-xl relative overflow-hidden border border-white/40"
              style={{
                minHeight: "220px",
                backgroundImage: `url(${imgHbn})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* Overlay for readability */}
              <div className="absolute inset-0 rounded-[2rem]" style={{ background: "linear-gradient(135deg, rgba(232,135,183,0.7) 0%, rgba(249,217,118,0.5) 50%, rgba(126,216,246,0.5) 100%)" }} />
              <div className="relative z-10 p-8">
                <h1 className="text-3xl font-black mb-1 tracking-tight drop-shadow" style={{ color: "#fff" }}>
                  Harohan ba Na'i
                </h1>
                <p className="text-base font-semibold mb-4 drop-shadow" style={{ color: "#fff" }}>
                  "Na'i Maromak mak ha'u nia ksolok."
                </p>
                <button
                  onClick={() => setView("misa")}
                  className="px-6 py-2.5 rounded-full text-sm font-bold shadow-md active:scale-95 transition-all border border-white/80"
                  style={{ background: "rgba(255,255,255,0.80)", color: "#7a003a" }}
                >
                  Ba Misal Romano
                </button>
              </div>
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
        {view === "misa" && <MisaView fontSize={fontSize} />}

        {/* VIEW: REZA (ORASAUN) */}
        {view === "prayers" && (
          <div className="space-y-3 animate-in slide-in-from-right-4 duration-300">
            {/* Landing banner */}
            <div className="rounded-2xl overflow-hidden shadow-md border border-pink-100 mb-1" style={{ backgroundColor: "#f5dadc" }}>
              <div className="flex justify-center pt-4 px-4">
                <img src={imgReza} alt="Reza" className="rounded-xl shadow-sm" style={{ maxWidth: "260px", width: "100%" }} />
              </div>
              <div className="text-center px-5 py-4">
                <p className="text-base italic text-gray-700 font-serif leading-snug">"Deus tem sede de que nós tenhamos sede d'Ele."</p>
                <p className="text-xs font-bold text-gray-500 mt-1 uppercase tracking-widest">— Santo Agostinho</p>
              </div>
            </div>
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
            {/* Landing banner */}
            <div className="rounded-2xl overflow-hidden shadow-md border border-blue-100 mb-1" style={{ backgroundColor: "#f5dadc" }}>
              <div className="flex justify-center pt-4 px-4">
                <img src={imgKnananuk} alt="Knananuk" className="rounded-xl shadow-sm" style={{ maxWidth: "260px", width: "100%" }} />
              </div>
              <div className="text-center px-5 py-4">
                <p className="text-base italic text-gray-700 font-serif leading-snug">"Ema nebe hananu, reza data rua"</p>
                <p className="text-xs font-bold text-gray-500 mt-1 uppercase tracking-widest">Santo Agostinho</p>
              </div>
            </div>
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
                          {/* Gloria category gets a header image */}
                          {category === "Gloria" && (
                            <div className="flex justify-center py-3 px-4">
                              <img src={imgGloria} alt="Gloria" className="rounded-xl shadow-sm" style={{ maxWidth: "240px", width: "100%" }} />
                            </div>
                          )}
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
              <h2 className="text-indigo-800 font-black text-xl mb-3">ITA NAIN FETO NIA ROSARIO</h2>
              <div className="flex justify-center">
                <img src={imgRozariu} alt="Rozariu" className="rounded-xl shadow-md" style={{ maxWidth: "260px", width: "100%" }} />
              </div>
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
