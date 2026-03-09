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
import imgPaskua from "./assets/paskua.png";
import imgReza from "./assets/reza.png";
import imgHauSae from "./assets/hau-sae.png";
import imgPvHalibur from "./assets/pv-halibur.png";
import imgOhinMai from "./assets/ohin-mai.png";
import imgGloria from "./assets/gloria.png";
import imgEspirituSantu from "./assets/espiritu_santu.png";

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
    id: 49,
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
    id: 50,
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
    id: 51,
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
    id: 52,
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
    id: 53,
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
    id: 54,
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
    id: 55,
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
    id: 56,
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
    id: 57,
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
    id: 58,
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
    id: 59,
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
    id: 60,
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
    id: 61,
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
    id: 62,
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
    id: 63,
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
    id: 64,
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
    id: 65,
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
    id: 66,
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
    id: 67,
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
    id: 68,
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
    id: 69,
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
    id: 70,
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
    id: 71,
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
    id: 72,
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
    id: 73,
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
    id: 74,
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
    id: 75,
    category: "Responsorial",
    title: "RAHUN KMANEK",
    content: `**RAHUN KMANEK**
_Rahun kmanek ba ida nebe rona Na'i nia futar lia._

1. Na'i tutor lia nudar matadalan,
   lori ha'u ba Aman lalehan.`,
  },

  {
    id: 76,
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
    id: 77,
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
    id: 78,
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
    id: 79,
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
    id: 80,
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
    id: 81,
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
    id: 82,
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
    id: 83,
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
    id: 84,
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
    id: 85,
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
    id: 86,
    category: "Aleluia",
    title: "ITA FUTAR LIA DOMIN",
    content: `1. Ha'u mai atu se tilun, rona
Ita nia futar lia, Ita nia futar lia domin. (2x)

2. Ha'u hakarak se tilun, rona.

3. Ha'u hakarak hatene didiak.

4. Raiklaran sei ba moris hotu.`
  },

  {
    id: 87,
    category: "Aleluia",
    title: "HANA'I BA ITA, KRISTU",
    content: `Hana'i ba Ita, Kristu, Maromak nia futar lia.

1. Kristu haraik An to'o mate,
hodi mate iha krus.
Tamba ne'e Maromak foti Nia
hodi to ba Nia naran ida boot liu hotu.`
  },

  {
    id: 88,
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
    id: 89,
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
    id: 90,
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
    id: 91,
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
    id: 92,
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
    id: 93,
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
  },
  {
    id: 94,
    category: "Ofertorio",
    title: "MAI HOTU MAUN ALIN, HASA’E BA NA’I",
    content: `Aleluia, aleluia, aleluia.

1. Mai hotu, maun alin, hasa'e ba Na’i
ita moris tomak hodi hahi Nia
ho neen, ho laran hasa'e ba Na’i, aleluia.

2. Ita liman hasa’e, maun alin raiklaran,
sakrifisiu diak ba Aman Maromak,
susar ho ksolok ba Na’i hasa’e, aleluia.

3. Simu, Aman Santu, ami isin no klamar,
perdua haraik ba ami nia sola,
ho Kristu Jesus, ami nia maun boot, aleluia.

4. Ami hotu nia susar, ami hotu nia knaar,
ksolok hotu ho domin ami tomak ninian,
hosi Kristu Jesus hasa’e ba Ita, aleluia.`
  },
  {
    id: 95,
    category: "Ofertorio",
    title: "KRISTU, AMI MAKSOIN",
    content: `Kristu, ami Maksoin, ami nia moris, ami nia dalan.
Na’i, Aman lalehan, rona ami lia, simu ami kick.

1. Ami nia isin, klamar simu hamutuk tua no paun. (2x)`
  },
  {
    id: 96,
    category: "Ofertorio",
    title: "ITA BOOT SIMU BA",
    content: `Ita Boot simu ba, ha'u kole loron kalan.
Ha'u nia ksolok no teruss, susar no ha'u knaac
ka'u soi karik be, Na’i, soi saran wain tan;
maibe ha'u ema mukit.

1. Hodi sa los mai atu tau tan ba mutuk
nebe nailulik hasa’e ba Maromak.
Maibe ha'u hanoin, hanoin ho laran moras:
ha'u ema mukit ida.

2. Tau tan ba hostia ha'u saran moris tomak;
nailulik iha altar hasa’e ba Maromak.`
  },
  {
    id: 97,
    category: "Ofertorio",
    title: "IHA ITA MISSA",
    content: `1. Ami bele hasa’e so ba Ita Boot?
Buat tomak ami fo ba Ita, Na’i.

Iha Ita Missa, ami nia Missa;
iha ita moris, ami nia moris. (2x)

2. Iha paun no tua ami nia domin,
ami hasa’e ba ita hodi hetan kbiit.

3. Simu ho laran luak ami nia moris,
hodi haraik mai ami tulun Na’i nian.`
  },
  {
    id: 98,
    category: "Ofertorio",
    title: "HASA’E BA NA’I, ITA AMAN",
    content: `Hasa’e ba Na’i, ita Aman,
paun no tua ita domin. (2x)

1. Simu, Na’i, ami nia kolen.
Simu, Na’i, ami nia lia
hodi hanoin Ita Oan nia mate.
Haraik mos moris hias.`
  },
  {
    id: 99,
    category: "Ofertorio",
    title: "BA ITA ALTAR",
    content: `1. Ba Ita altar ohin ami hasa’e,
hasa’e ami paun no buat tomak;
paun be mai hosi ami nia kolen
no tua be mai hosi rai.

Loron ida ne’e ho Missa ida ne’e
haraik moris foun mai ami. (2x)

2. Na’i, haraik, fo tulun mai ami,
atu ami hamulak ho neen;
ba oras ne’e ami hadia an daudaun,
atu simu Na’i Maksoin.

3. Ksolok hamutuk iha Nia tutor oin.
Tan ita Maksoin moris ona,
Na’i, mai simu ho laran luak,
buat ami ksolok ba Ita.`
  },
  {
    id: 100,
    category: "Ofertorio",
    title: "AMI NIA VIDA HASA’E BA ITA",
    content: `Ami nia vida hasa’e ba Ita,
ami nia domin Ita Boot nian.

1. Maromak, liurai hotu nia Liurai.
Nia mak ha'u sei serbi.
Maromak, ha'u moris Na’i,
ha'u saran ha'u an ba Nia Oan.

2. Sasan hot-hotu ha'u nian,
ha'u Na’i nian.
Ha'u sei moris atu hahi Nia,
oras ne’e no ba nafatin.

3. Sei serbi Na’i ho ha'u nia kbiit tomak,
ho ha'u isin lolon tomak.

Ha'u sei se tilun ba ninia hakarak,
ha'u sei halo tuir Nia nafatin.
Ha'u mak be turu kahur ho tua
atu soi maun alin sira.
Ha'u sei lori to'o ba Na’i sira
be dook hosi Maromak.`
  },
  {
    id: 101,
    category: "Ofertorio",
    title: "AMI MORIS, ISIN NO KLAMAR",
    content: `Ami moris, isin no klamar hasa’e ba Ita, ami Na’i.

1. Aihan moris, aihan lalehan, hakotu lia atu fo;
tun mai tebes, tun rasik mai,
horik hamutuk ho atan sira.

2. Kalis laran tua kahur be, fila ba Kristu tutor ran;
hare ami kiak no hamrook,
tan ami kuran diak lalehan.`
  },
  {
    id: 102,
    category: "Ofertorio",
    title: "AMI KARAN FOLIN LAEK",
    content: `Na’i, simu ba! (2x)

1. Timor oan tuku fur, hana’i.
Na’i, simu, simu ba.

2. Ami karan folin laek, fo tomak.
Aman, ...

3. Kiak robot rai, oin nakraik, hana’i.
Na’i, ...

4. Ami rain no povu fo tomak.
Na’i, ...

5. Ami diak, ami aat fo tomak.
Na’i, ...

6. Ami unam, ami toos fo tomak.
Na’i...

7. Ami knaar no eskola fo tomak.
Na’i, ...

8. Ami kosar, ami ran fo tomak.
Na’i, ...

9. Ami kiak no susar fo tomak.
Na’i, ...`
  },
  {
    id: 103,
    category: "Ofertorio",
    title: "AMI HAKBESIK BA ALTAR",
    content: `1. Ami hakbesik ba altar atu hasa'e buat karan
Paun no tua nudar tada ami isin klamar tomak.

Simu ba, Na’i, ami buat karan.
Nudar sakrifisiu Jesus Kristu laran luak.

2. Ami nia moris no ami mate fo ba Ita
Ami nia ksolok no ami susar fo ba Ita.

Buat hotu ami hasa’e ba Ita. (2x)
Ami harohan Ita nia kbiit, Na’i. (2x)`
  },
  {
    id: 104,
    category: "Ofertorio",
    title: "AMI HAKAT SA’E BA ALTAR",
    content: `1. Ami hakat sa’e ba altar lori ami nia buat karan.
Ami tan ne’e tuku tur hana’i ba ita Aman lalehan.

Simu ba, Na’i; simu ba, Na’i
Ami karan folin laek ne’e. (2x)

2. Maski ami karan la folin maibe ami hasa’e ho fuan.
Maski ami ema sola nain la kuran domin ba ita.`
  },
  {
    id: 105,
    category: "Ofertorio",
    title: "AMI FUAN HANANU",
    content: `Ami fuan hananu hahi Ita, o Aman laran luak;
halo Ita futar laran malirin fan karan ami hasa’e.
Ami liman fane buat karan ne e
hodi foti matan hateke ba Ita,
husu ita simu, simu netik ba.

1. Halulik ba, a Na’i, buat karan hirak ne’e
nebe Ita rasik haraik ba Ita nia Kreda.

2. Keta hewai, a Na’i, karan folin laek ne’e,
nudar tada isin klamar, ami domin ba Ita.`
  },
  {
    id: 106,
    category: "Ofertorio",
    title: "AMI AMAN IHA LALEHAN",
    content: `1. Ami Aman iha lalehan, buat hotu ami fo;
uitoan be ami halo, mas ami hakarak to.

Fo bensa mai ami karan,
hare ba labarik iha mundu fane liman husu domin;
fo bensa mai ami karan,
hare ba kafuas be terus tan maluk,
uma, aihan laek.

2. Ba ema Maromak lia tun,
Oan mane haruka mai,
iha mundu nia mai haklaken
"Reinu domin to'o ona."

Haliku, o Na’i, ami husu,
hamlaha be hetan iha mundu
ho ema be moris diak.

Fo bensa mai Ita Kreda,
ho nia ami la'o ami dalan,
kait liman no domin.`
  },
  {
    id: 107,
    category: "Ofertorio",
    title: "AMAN MAROMAK, ATAN OAN AMI",
    content: `Aman Maromak, ata oan ami hasa’e ba Ita, ami Na’i,
ami isin no klamar.
Simu no hano’in paun trigu, tua ami hasa’e ba Ita.`
  },
  {
    id: 108,
    category: "Ofertorio",
    title: "AMAN LALEHAN, SIMU AMI",
    content: `Aman lalehan, simu ami;
ami isin, ami klamar hamutuk ho Jesus isin no Ran.

1. Ami hakbesik ba altar,
hasa’e paun no tua ba Ita Boot.

2. Aman doben, laran luak,
Ita la hewai ami hasa’e.`
  },
  {
    id: 109,
    category: "Ofertorio",
    title: "PAI NOSSO, QUE ESTAIS NO CÉU",
    content: `1. Pai nosso que estais no céu, tudo nos queremos dar.
O pouco que nos fizemos também vamos ofertar.

Abençoai nossa oferta; olhai as crianças do mundo
Suspirando por amor.
Abençoai nossa oferta; olhai os velhinhos que sofrem
Sem ninguém, nem lar nem pão.

2. Aos homens que Deus quis falar
e à terra o Filho mandou.
A todos veio anunciar o reino de Deus chegou.

Olhai, Senhor, nos Vos pedimos;
a fome que existe no mundo e a pobreza dos sem pão.
Olhai, Senhor, a Vossa Igreja;
com ela nos caminhamos de mãos dadas por amor.`
  },
  {
    id: 110,
    category: "Ofertorio",
    title: "OFERTAS SINGELAS",
    content: `1. Ofertas singelas, pão e vinho sobre a mesa colocamos.
Sinal do trabalho que fizemos e aqui depositamos.

É Teu também nosso coração;
aceita, Senhor, a nossa oferta
Que será depois na certa
o Teu próprio Ser. (2x)

2. Recebe, Senhor, da natureza
todo o fruto que colhemos.
Recebe o louvor de nossas obras
e o progresso que fizemos.

3. Sabemos que tudo tem valor
depois que a terra visitaste.
Embora tivéssemos pecado
foi bem mais o que pagaste.`
  },
  {
    id: 111,
    category: "Ofertorio",
    title: "MINHA VIDA TEM SENTIDO",
    content: `1. Minha vida tem sentido cada vez que eu venho aqui.
E Te faço o meu pedido de não me esquecer de Ti.
Meu amor é como este pão que era trigo,
que alguém plantou depois colheu.
E depois tornou-se salvação,
e deu mais vida e alimentou o povo meu.

Eu Te ofereço este pão,
eu Te ofereço o meu amor. (2x)

2. Minha vida tem sentido cada vez que eu venho aqui.
Meu amor é como este vinho que era fruto
que alguém plantou depois colheu.
E depois encheu-se de carinho,
e deu mais vida e saciou o povo meu.

Eu Te ofereço vinho e pão;
eu Te ofereço meu amor.`
  },
  {
    id: 112,
    category: "Ofertorio",
    title: "SUSAR EH DIAK AMI NIAN",
    content: `Susar eh diak ami nian, simu ami isin, Na’i.
Susar eh kiak ami nian, simu ami domin, Na’i. (2x)

1. Ami lakon Ita dalan iha kalan, Na’i, ba loron ohin. (2x)
Ami la hatene tuir Ita dalan, Kuran hadomi.

2. Ami lakon Ita dalan iha kalan, Na’i, ba loron ohin. (2x)
Ami la hatene tuir hodi hein Ita nia tulun.

3. Nudar ema lakon aihan, Na’i, ba loron ohin. (2x)
Ami nia moris tomak hotu la hatene hadomi.`
  },
  {
    id: 113,
    category: "Ofertorio",
    title: "SIMUNETIKBA",
    content: `1. Ami nia paun, Na’i, simu ba.
Ami nia tua, Na’i, simu bal.

Hasa’e ba Ita iha altar.
Simu ba, simu netik ba, Na’i:
Simu ba, simu netik ba, nudar santu sakrifisiu. (2x)

2. Ami nia knaar... ami nia kole...
3. Ami nia moras... ami nia terus...
4. Ami nia ksolok... ami nia susar...
5. Ami nia moris... ami nia mate...`
  },
  {
    id: 114,
    category: "Ofertorio",
    title: "SIMU, NA'I, PAUN NO TUA SANTU",
    content: `Simu, Na’i, paun no tua santu nudar sakrifisiu
Kristu laran luak. (2x)

1. Simu ba, ha’u Na’i, ha’u nia presente
paun no tua santu iha ha’u nia fatin.

2. Simu ba, ha’u Na’i, ha’u nia ksolok, susar,
ha’u moris no mate, ha’u to ba Ita.

3. Ha’u fo ba Na’i ha’u nia kosar ben,
iha ha’u nia fatin, nune’e ba nafatin.`
  },
  {
    id: 115,
    category: "Ofertorio",
    title: "SIMU BA, HA'U NA'I",
    content: `1. Simu ba, ha’u Na’i,
paun no tua nebe ami hasa’e ba Ita Boot. (2x)

Nakfilak tiha ba Kristu nia Isin no Ran
nebe mate iha krus iha Golgotha. (2x)

2. Simu ba, ha’u Na’i,
sakrifisiu nebe ami hasa’e ba Ita Boot.

3. Na’i, laran luak,
tau matan ba terus nebe ami hato’o.`
  },
  {
    id: 116,
    category: "Ofertorio",
    title: "SA LOS MAK BELE HASA’E",
    content: `1. Sa los mak bele hasa’e ba Ita Boot, ami nia Maromak?
Sa mak bele hasa’e?
Ita be laran luak ba ami maksala,
ami nia Maromak, ba ami maksala.

Kristu, buat be ami iha, Kristu, lori mai Ita.
Hodi ksolok boot, ami mai hasa’e,
ami nia Maromak, ami mai hasa’e.

2. Simu ami nia serbisu, terus buka aihan,
ami nia Maromak, terus buka aihan.
Ami nia loron balun be hanesan mamuk,
ami nia... be hanesan mamuk.

3. Paun nebe ami hasa’e mai hosi terus,
ami nia... mai hosi terus.
Tua ne’e ami kahur, ami nia kosar ben,
ami nia... ami nia kosar ben.

4. Ami nia kiak tomak hasa’e ba Ita,
ami nia... hasa’e ba Ita.
Maski uitoan karik ho fuan ami hasa’e,
ami nia... ho fuan ami hasa’e.`
  },
  {
    id: 117,
    category: "Ofertorio",
    title: "NA'I, SIMU BA, PAUN NO TUA NE’E",
    content: `Na’i, simu ba, paun no tua ne’e;
aihan santu nebe ami hato’o. (2x)

1. Na’i, ami hasa’e aihan sira ne’e atu hahi Ita naran.
2. Tua uvas ne’e nakfilak ba Kristu nia Ran
nakfakar iha krus.`
  },
  {
    id: 118,
    category: "Ofertorio",
    title: "NA'I, AMI MESAK LABARIK",
    content: `1. Na’i, ami mesak labarik,
buat la barak ami atu fo;
maibe buat nebe ami iha,
ami hakarak fo ba Ita Boot.

Buat nebe ami iha ami nia fuan;
kiik oan teb-tebes maibe hatene hadomi,
ami nia fuan, Na’i, bele simu ba.`
  },
  {
    id: 119,
    category: "Ofertorio",
    title: "NA'I, AMI MAI HASOURU",
    content: `1. Na’i, ami mai hasouru;
ho neen tomak ami harohan.
Hodi ami laran hotu maski buat diak laek.

Rahun wain ba Ita domin nebe,
Na’i, haraik mai ami.
Nudar ami moris hun:
Ita Oan, Kristu Jesus.

2. Ami hasa’e buat be ami iha:
ami isin, ami klamar.
Nudar domin nebe tada iha Na’i,
ami Maromak.

3. Tulun ami, Na’i Maromak;
ami tomak Ita fihir.
Perdua sola hotu,
hadook hosi susar tomak.`
  },
  {
    id: 120,
    category: "Ofertorio",
    title: "NA'I, AMI MAI HASA'E",
    content: `Na’i, ami mai hasa’e, knananuk ida ne’e. (2x)

1. Paun no tua omi nia kolen
ami hasa’e iha Missa ne’e
atu hahi no agradesse Na’i Maromak,
ami Aman doben.

2. Ami ksolok no ami hakarak,
ami susar no ami laran
tau hamutuk ho buat karan
atu hahi Na’i nia naran.

3. Kmanek wain ba Aman Maromak,
ba Kristu ami Maksoin,
ba Espiritu, ami Na’i,
oras ne’e ba nafatin.`
  },
  {
    id: 121,
    category: "Ofertorio",
    title: "MAROMAK AMI NA'I, AMI AMAN DOBEN",
    content: `Maromak, ami Na’i, ami Aman doben.

1. Loron toun ida ne’e ho haksolok no hananu;
loron toun ida ne’e Ita Boot hiit
Ami mai ne’e.

2. Kalan loron buka ksolok,
kalan loron buka diak;
hamutuk nudar maun alin
buka Ita Boot, ami nia Maromak.

3. Ami hasa’e nia ba ami Maromak
ami susar, ami nia diak,
ami terus, ami moras,
ami nia moris ami nia mate.`
  },
  {
    id: 122,
    category: "Santu",
    title: "MAROMAK NIA BIBI OAN NO. 1",
    content: `1. Maromak nia bibi oan, (2x) Kristu, ami Na’i.
Maromak nia bibi oan, nebe kasu mundu nia sala,
hanoin ami.

2. Maromak nia bibi oan, (2x) Kristu, ami Na’i.
Maromak nia bibi oan, nebe kasu mundu nia sala,
haraik dame mai ami.`
  },
  {
    id: 123,
    category: "Santu",
    title: "MAROMAK NIA BIBI OAN NO. 2",
    content: `Maromak nia bibi oan, kasu mundu nia sala,
hanoin ami, hanoin ami. (2x)

Maromak nia bibi oan, kasu mundu nia sala,
haraik dame mai ami.`
  },
  {
    id: 124,
    category: "Santu",
    title: "MAROMAK NIA BIBI OAN NO. 3",
    content: `Maromak nia Bibi Oan, be kasu mundu nia sala,
hanoin ami. (2x)

Maromak nia Bibi Oan, be kasu mundu nia sala,
haraik dame mai ami.`
  },
  {
    id: 125,
    category: "Komunhao",
    title: "FURAK OIN SA MORIS IHA DOMIN",
    content: `Oin sa ita domin to ksolok mai ami
hodi moris hamutuk nudar maun alin.

1. Furak oin sa ita moris iha ksolok laran;
nudar maun alin iha neon ida deit.

2. Furak oin sa ita moris tuir ukun domin;
nune’e ita moris tuir Kristu hakarak.

3. Furak oin sa ita halo buat nebe morin;
nune’e ita halo tuir ukun domin.

4. Furak oin sa ita halo buat nebe kmanek;
nune’e ita halo tuir ukun domin.

5. Furak oin sa ita halo buat nebe midar;
nune’e ita halo tuir ukun domin.

6. Furak oin sa ita halo buat nebe justo;
nune’e ita halo tuir ukun domin.`
  },
  {
    id: 126,
    category: "Komunhao",
    title: "FURAK OIN SA",
    content: `1. Furak oin sa, maun alin sira;
moris ho ksolok no moris hakmatek. (2x)
Nune’e ita sasin tuir lolós Kristu nia hanorin. (2x)

2. Furak oin sa, maun alin sira;
ita moris tuir Na’i hakarak. (2x)
Nune’e ita hatudu katak ita Maromak nia oan. (2x)

3. Hadomi malu tuir Kristu haruka
Ne’e mak ukun Na’i fo ba ita. (2x)
Moris tuir ukun ne’e ita haksolok no moris hakmatek. (2x)`
  },
  {
    id: 127,
    category: "Komunhao",
    title: "EUKARISTIA SAKRAMENTU BOOT TEBES",
    content: `Eukaristia sakramentu boot tebes
Na’i Jesus nia tutor isin lolos;
aihan moris ba Nia ema sira
be hakat ba tuir dalan lalehan.

Anju sira hotu no mos santu tomak
halibur an, hana’i, hahi Jesus;
Na’i Jesus hiit An mai lor-loron,
haraik aihan tutor Isin no Ran.`
  },
  {
    id: 128,
    category: "Komunhao",
    title: "EMA JUDEU HOBUR TUIR NA'I JESUS",
    content: `1. Ema Judeu hobur tuir Na’i Jesus:
tan sira han ikan ho paun.
Ikan ho paun halo sira sei bosu
to’o foti Jesus ba liurai.

Ami ba los nebe? Ita deit haraik
mai ami kiak moris rohan laek. (2x)

2. To’o tali oras hanorin komunha.
Sub-subar tiha husik Jesus.
Sira murmura tan sira la fiar
Na’i Jesus to Nia Isin sira han.`
  },
  {
    id: 129,
    category: "Komunhao",
    title: "EH KRISTU MAK TENE ITA",
    content: `Eh Kristu mak tene ita, ita hakbesik Na’i nia mesa:
atu ba komunga nia Isin, Sakramentu domin.

1. Maromak nia han mak tun hosi lalehan
atu halo raiklaran moris.

2. Se hakbesik Ha’u sei la hamlaha tan;
se fiar Ha’u sei la hamrook tan.

3. Ema la moris deit hodi aihan;
maibe hodi mos Maromak nia liafuan.

4. Simu no hola ba, ne’e Ha’u nia Isin;
simu no hemu ba, ne’e Ha’u nia Ran.

5. Se hola Ha’u Isin no hemu Ha’u Ran,
nia sei moris ba nafatin.

6. Ita hotu hamutuk isin ida deit,
Ita bele hola han mesa ida deit.`
  },
  {
    id: 130,
    category: "Komunhao",
    title: "KARIDADE VIRTUDE IDA",
    content: `Karidade virtude ida Na’i Maromak hadomi liu.
Nia la hirus, laran maus; karidade mak hadomi.

1. Bele hatene lia oi-oin maibe la iha karidade
halo nudar sinu ida, lian lerek, la ba lalehan.

2. Bele hatene siik lolos ema hot-hotu nia destinu;
halo nudar folin laek se la iha karidade.`
  },
  {
    id: 131,
    category: "Komunhao",
    title: "BA FATIN DOMIN, MORIS HO DAME",
    content: `Ba fatin domin, moris no dame, Maromak horik ba.

1. Kristu nia domin halibur ita ne’e
ita sei haksolok ho laran kmanek
sei hamutuk ho laran diak ita Maromak
no sei hadomi malu ho neon kmook.

2. Hamutuk nune’e hodi hare diak malu
ita labele haketak malu hodi hirus;
keta haklelek malu no rai kuna,
Na’i Jesus Kristu horik ho ita.

3. Ami sei hamutuk ho santu sira,
hare Ita oin ho Kristu Maromak;
ami rahun sei dadi boot no diak,
tinan ba tinan nafatin. Amen.`
  },
  {
    id: 132,
    category: "Komunhao",
    title: "FURAK OIN SA MORIS IHA DOMIN",
    content: `Oin sa ita domin to ksolok mai ami
hodi moris hamutuk nudar maun alin.

1. Furak oin sa ita moris iha ksolok laran;
nudar maun alin iha neon ida deit.

2. Furak oin sa ita moris tuir ukun domin;
nune’e ita moris tuir Kristu hakarak.

3. Furak oin sa ita halo buat nebe morin;
nune’e ita halo tuir ukun domin.

4. Furak oin sa ita halo buat nebe kmanek;
nune’e ita halo tuir ukun domin.

5. Furak oin sa ita halo buat nebe midar;
nune’e ita halo tuir ukun domin.

6. Furak oin sa ita halo buat nebe justo;
nune’e ita halo tuir ukun domin.`
  },
  {
    id: 133,
    category: "Komunhao",
    title: "FURAK OIN SA",
    content: `1. Furak oin sa, maun alin sira;
moris ho ksolok no moris hakmatek. (2x)
Nune’e ita sasin tuir lolós Kristu nia hanorin. (2x)

2. Furak oin sa, maun alin sira;
ita moris tuir Na’i hakarak. (2x)
Nune’e ita hatudu katak ita Maromak nia oan. (2x)

3. Hadomi malu tuir Kristu haruka
Ne’e mak ukun Na’i fo ba ita. (2x)
Moris tuir ukun ne’e ita haksolok no moris hakmatek. (2x)`
  },
  {
    id: 134,
    category: "Komunhao",
    title: "EUKARISTIA SAKRAMENTU BOOT TEBES",
    content: `Eukaristia sakramentu boot tebes
Na’i Jesus nia tutor isin lolos;
aihan moris ba Nia ema sira
be hakat ba tuir dalan lalehan.

Anju sira hotu no mos santu tomak
halibur an, hana’i, hahi Jesus;
Na’i Jesus hiit An mai lor-loron,
haraik aihan tutor Isin no Ran.`
  },
  {
    id: 135,
    category: "Komunhao",
    title: "EMA JUDEU HOBUR TUIR NA'I JESUS",
    content: `1. Ema Judeu hobur tuir Na’i Jesus:
tan sira han ikan ho paun.
Ikan ho paun halo sira sei bosu
to’o foti Jesus ba liurai.

Ami ba los nebe? Ita deit haraik
mai ami kiak moris rohan laek. (2x)

2. To’o tali oras hanorin komunha.
Sub-subar tiha husik Jesus.
Sira murmura tan sira la fiar
Na’i Jesus to Nia Isin sira han.`
  },
  {
    id: 136,
    category: "Komunhao",
    title: "EH KRISTU MAK TENE ITA",
    content: `Eh Kristu mak tene ita, ita hakbesik Na’i nia mesa:
atu ba komunga nia Isin, Sakramentu domin.

1. Maromak nia han mak tun hosi lalehan
atu halo raiklaran moris.

2. Se hakbesik Ha’u sei la hamlaha tan;
se fiar Ha’u sei la hamrook tan.

3. Ema la moris deit hodi aihan;
maibe hodi mos Maromak nia liafuan.

4. Simu no hola ba, ne’e Ha’u nia Isin;
simu no hemu ba, ne’e Ha’u nia Ran.

5. Se hola Ha’u Isin no hemu Ha’u Ran,
nia sei moris ba nafatin.

6. Ita hotu hamutuk isin ida deit,
Ita bele hola han mesa ida deit.`
  },
  {
    id: 137,
    category: "Komunhao",
    title: "KARIDADE VIRTUDE IDA",
    content: `Karidade virtude ida Na’i Maromak hadomi liu.
Nia la hirus, laran maus; karidade mak hadomi.

1. Bele hatene lia oi-oin maibe la iha karidade
halo nudar sinu ida, lian lerek, la ba lalehan.

2. Bele hatene siik lolos ema hot-hotu nia destinu;
halo nudar folin laek se la iha karidade.`
  },
  {
    id: 138,
    category: "Komunhao",
    title: "BA FATIN DOMIN, MORIS HO DAME",
    content: `Ba fatin domin, moris no dame, Maromak horik ba.

1. Kristu nia domin halibur ita ne’e
ita sei haksolok ho laran kmanek
sei hamutuk ho laran diak ita Maromak
no sei hadomi malu ho neon kmook.

2. Hamutuk nune’e hodi hare diak malu
ita labele haketak malu hodi hirus;
keta haklelek malu no rai kuna,
Na’i Jesus Kristu horik ho ita.

3. Ami sei hamutuk ho santu sira,
hare Ita oin ho Kristu Maromak;
ami rahun sei dadi boot no diak,
tinan ba tinan nafatin. Amen.`
  },

  {
    "id": 8,
    "category": "Komunhao",
    "title": "HA'U SEI HAHI",
    "content": `HA'U SEI HAHI\nHa'u sei hahi (6x) ha'u nia Maromak.\n\n1. Ba Aman Maromak nia domin, ha'u sei hananu (2x)\n2. Ba Espiritu hela ho ita, ha'u sei hananu (2x)\n3. Mundu hananu tomak sei bok ba lalehan Jesus moris hias (2x)\nbasa Jesus moris hias. (3x)`
  },
  {
    "id": 9,
    "category": "Komunhao",
    "title": "HA'U SEI DEHAN",
    "content": `HA'U SEI DEHAN: "Se o fiar na'i Maromak..."\n\n1. Ha'u sei dehan: "Se o Na'i Maromak..." (2x)\nO hare nia gloria. nia gloria. (4x)\n2. Ha'u sei dehan: "Se o hatene Na'i Maromak..."\n3. Ha'u sei dehan: "Se o terus tan Maromak..."\n4. Ha'u sei dehan: "Se o perda tan tan Maromak..."`
  },
  {
    "id": 10,
    "category": "Komunhao",
    "title": "HANANU BA ITA NA'I",
    "content": `HANANU BA ITA NA'I\n\n1. Hananu ba ita Na'i, halo buat oi-oin.\nHalo Na'i'i klaran mai, Jesus ita nia Makssoin klaran mai.\n2. Na'i, hatudu ba dalan diak mai ami atan sira;\nmoris-railek tomak hare nakukun atu hodi diak naroman.\n3. Na'i Jesus, ita Makssoin, hodi mai hosi lalehan;\n4. Alin-maun ksolok boot taka mutu mai hadahur;\nno hawelok Na'i Maromak oras ne'e no ba nafatin.`
  },
  {
    "id": 11,
    "category": "Komunhao",
    "title": "HA'U NE'E PAUN MORIS",
    "content": `HA'U NE'E PAUN MORIS\nHa'u ne'e paun moris tun hosi lalehan (2x)\n\n1. Se mak han Ha'u nia, nia sei la hamlaook;\nse fiar Ha'u hamprook.\n2. Ita hotu be halibur iha ne'e, halo isin ida deit\nita hotu han paun ida, no hemu hosi kalis ida.\n3. Maromak nia paun tun hosi lalehan\natu moris ba mundu tomak.\n4. Ema ida bele bele to'o Ha'u, karik Ha'u Aman lo to;\n5. Nia sei katak moris hias iha loron ikus.\nHa'u katak lolos ba ha:\nse mak fiar Ha'u sei hetan moris rohan laek.`
  },
  {
    "id": 12,
    "category": "Komunhao",
    "title": "HADOMI HO HAH ALOK",
    "content": `HADOMI HO HAH ALOK\nNudar loron haroman rai, ita domin fo ksolok;\nnudar tasi hadulas rai, ita domin fo ksolok;\nnudar udan habokon rai, ita domin fo ksolok;\nnudar mota buka buat, ita manek fo ksolok!\n\n1. Hadomi buka hari buat be ema horan diak.\n2. Hadomi la halo aat hadomi la rai hirus.\nHAdomi la bobAr lia, hadomi ho laran mos.`
  },
  {
    "id": 13,
    "category": "Komunhao",
    "title": "FURAK OIN SA MORIS IHA DOMIN",
    "content": `FURAK OIN SA MORIS IHA DOMIN\nOin hodi sa ita domin hamutuk ksolok maun ami\nmori hodi hamutuk nudar maun alin.\n\n1. Furak oin so ita moris iha ksolok laran;\n2. nudar oin alin iha neon ida deit\nnune'e ita moris tuir uku n hakarak domin;\n3. Furak oin sa ita halo buat bebe morin;\n4. nune'e ita halo tuir uku n domin\nnune'e ita halo tuir uku n hakarak;\n5. Furak oin sa ita halo buat bebe kmane;\nnune'e ita halo tuir uku n domin.\n6. Furak oin sa ita halo buat bebe justo;\ntuir nune'e ita halo tuir uku n Kristu domin.`
  },
  {
    "id": 14,
    "category": "Komunhao",
    "title": "HA'U FO MANDAMENTU FOUN",
    "content": `HA'U FO MANDAMENTU FOUN\nHa'u fo ba imi mandamentu foun: hadomi imi.\n\n1. Mundu sei hadomi sei hatene katak imi Ha'u belun eh lae.\n2. Imi sei hadomi malu; nudar katak imi Ha'u imi.\n3. Ami hatene katak ami sei hadomi maun alin sira;\n4. Ami hadomi nafatin, karik mate teni.\n5. Ita'e'e ita sei malu karik, Maromakolok tebes duni.\n6. Tamba domin, ita ho Na'i Jesus isin ida deit,\n7. hodi bele han hamutuk iha Nia meja.\n8. La iha ema ida hatu raiklaran iha Nia.\nbele haketak ita hosi Maromak nia domin.\n9. Nia ita nia vida, ita la tauk buat ida.`
  },
  {
    "id": 15,
    "category": "Komunhao",
    "title": "HADOMI HA'U LA SOI",
    "content": `HADOMI HA'U LA SOI\nHadomi ha'u la soi; Maromak, ha'u la soi (2x)\n\n1. Se hadomi ho laran luak mos, se hadomi hanesan malu Ha'u.\n2. Hadomi la hatene hirus, hadomi la halo aat;\nhadomi la hatene karak, hadomi koalia los.\n3. Hadomi ho liafuan lia, hadomi ho lari dade;\nhadomi ho bobar lia, hadomi ho lialos.\n\n4. Hadomi terus buat hotu, hadomi ema hotu fiar,\nhadomi ba buat hotu, hadomi ba beibeik.\n5. Ita, ita esperansa sei hotu iha lalehan;\nesperansa Ita; hadomi sei la hotu, hela-hela ba nafatin.`
  },
  {
    "id": 16,
    "category": "Komunhao",
    "title": "HA'U LARAN METIN MAROMAK",
    "content": `HA'U LARAN METIN MAROMAK\nHa'u laran metin Maromak; ha'u laran metin\nMaromak\n\nNia leno dalan mai ha'u; la'o hamutuk ha'u nafatin.\n\n1. Maski nakukun, la'o kalan nia laran,\nmaski ha'u tauk, la'o ba oin nafatin.\n2. Maski rai fila, ha'u lakon ha'u nia dalan;\nmaski la hetan ksolok ba ha'u fuan.\n3. Maski taridu ha'u fuan no no ha'u laran;\nmaski la hetan ksolok ba ha'u fuan.\n4. Maski ha'u susar, monu oin nakukun;\nmaski ha'u kosar, liman ain kole.\n5. Maski ha'u dalan lakon ha'u, maski la hare Maromak futar oin.`
  },
  {
    "id": 17,
    "category": "Komunhao",
    "title": "HA'U MESAK PAUN MORIS",
    "content": `HA'U MESAK PAUN MORIS\nHa'u mesak Paun moris, se komunha la mate tan;\nHa'u iha raiklaran nia roman, se tuir Ha'u, nia sei moris.\n\n1. Ita be Paun komunha mesak ida, ita hotu han hamutuk isin ida deit\nhosi kaleidos.\n2. "Ema ida la mai to'o Ha'u se Ha'u Aman la fo;\nHa'u sei halo nia kakak moris hias iha loron ikus."\n3. Tebetebes Ha'u katak ba imi; loron ikus Ha'u nafatin moris.\n4. se fiar ne'e Paun sei moris hosi lalehan.\nIda ne'e Paun tun hosi lalehan.\nSe hola Nia sei la mate.\n5. Se hola Paun ne'e, sei moris ba nafatin.\n6. Se hola Ha'u isin no hemu Ha'u ran,\nnia hela ho Ha'u, Ha'u hela ho nia.`
  },
  {
    "id": 18,
    "category": "Komunhao",
    "title": "HAMLAHA, HAMROOK",
    "content": `HAMLAHA, HAMROOK\nHam laha, hamrook, ami liman, ain kole\nou ba hasouru Ita Boot.\nIta Boot nudar Isin mak fo nia kbit mai ami\n\n1. Hot-hotu simu aihan diak ne'e,\nita tomak halibur isin lon lon ida deit\nsura hamutuk sura hamutuk\nhodi Maromak nia hadomi.\n2. Kalan loron ha'u hanoin Maromak.\nKalan loron hare Maromak\nbainhira ha'u ba hasouru Nia,\nbainhira ha'u ba hare Nia?\n\n3. Liu hosi rai fuik ema hananu, deit\nliu hosi nakukun ema tanis.\nSira buka Ita Boot nia naroman,\nsira hakarak Ita Boot nia hadomi.`
  },
  {
    "id": 19,
    "category": "Komunhao",
    "title": "HELA HO AMI, JESUS, LORON NE'E",
    "content": `HELA HO AMI, JESUS, LORON NE'E\n\n1. Hela ho ami, Jesus, loron ne'e;\nhela ho ami hodi ho ami hodi\nhela ho ami, haraik naroman no paz\nsei la'o toi mai.\nHela ho ami, haraik naroman\nrai kalan sei la to'o mai\niha dalan mundu ne'e nian.\nJésus, loron kalan,\n2. hela ho ami, Jesus diak, iha susar,\nhela ho ami iha diak,\n3. Hela ho ami iha rai ne'e sei diak, iha i susar,\nhela ho ho ami iha funu ne'e nia laran.`
  },
  {
    "id": 20,
    "category": "Komunhao",
    "title": "HA'U TIMOR OAN",
    "content": `HA'U TIMOR OAN\nMaromak oan.\n\n1. Ha'u Timor oan, ha'u klamar tanis.\nTerus no susar, ha'u Aman doben,\ntan Nia mesak ha'u rikusoi.\nHo Na'i Jesus, ho ita belun;\nita sei la'o hamutuk Nia.\nSei funu hasouru buat aat no sala.\nSei titu diak Maromak nian.\n2. Buka mateneke, ha'u no ksolok kna'ar\nhalo rai naruk, moris no ksolok.\nMaibe, ha'u ema keta haluha:\nha'u nia Maromak, ha'u Aman doben.\n3. Atu soi diak, hetan lalehan,\nha'u sei la'o hetan Maromak dalan,\nla'o tuir nafatin Maromak ukun;\n4. Tuir ukunfuan hadomi Maromak nian,\nNia ukunfuan hadomi nian nian,\nhadomi malu, fo tulun malu;\nla bele oho, fo terus ema;\ntan ita hotu rai ha'u lakon oan dalan.\n5. Ha'u lemo rai, ha'u lakon uma dalan;\nha'u la'o rai, ha'u la'o uma.\nHetan Maromak iha ha'u dalan,\nNia moris tulun ha'u, fo tulun ha'u.\nNia simu ha'u, fo tulun ha'u dalan rohan.\n6. Ha'u la'o to'o ona ha'u uma lalehan;\nHa'u to'o uma, uma lalehan.\nLa hanoin fan ha'u moris ikus;\ntan ha'u fiar Maromak, ha'u Na'i.`
  },
  {
    "id": 21,
    "category": "Komunhao",
    "title": "HELA HO AMI, JESUS, TUR HO AMI",
    "content": `HELA HO AMI, JESUS, TUR HO AMI\nHela ho ami, Jesus, tur ho ami. (2x)\n\n1. Iha ita Emaus\nIta rai ita Emaus domin fahe ita paun tomak\nIta fahe iha loron.\n2. Ami sei hadomi malu tuir ita nia hatudu.\nNa'i Maromak tau hadomi iha ami laran.`
  },
  {
    "id": 22,
    "category": "Komunhao",
    "title": "JESUS, AMI NIA MORIS",
    "content": `JESUS, AMI NIA MORIS\n\n1. Kristu dehan: "Ha'u aihun diak."\nHa'u Aman doben, Ha'u Aman toos nain.\nAi sanak la fuan, Nia sei tesi, soe, soe ba dook.\nAi sanak to fuan bar, Nia sei hamos\natu nia fuan tebar.\nJesus, ami nia moris; Jesus, ami nia Maromak.\n\n2. Kristu dehan: "Ha'u aihun toos diak Nain."\nImi la'o ho Jesus, ami nia sei halo, halo diak oi-oin.\nLa'o hamutuk Nia mak sei hetan dalan,\ndalan Maromak.\n\n3. Ha'u maluk doben buka ho Nia.\nLa'o maluk hela Nia.\nKeta husik Maromak, ita ho moris abut; abut namlele,\nDook hosi Jesus, ita lakon, lakon reinu lalehan.`
  },
  {
    "id": 23,
    "category": "Komunhao",
    "title": "JESUS, DALAN DIAK, HALOS NO AMI MORIS",
    "content": `JESUS, DALAN DIAK, Halos no ami moris:\nPaun ksolok nian, tun hosi lalehan\n\n1. Ami ema la'o rai, la'o hakat ba lalehan;\nami\n2. Jesus, ami nia dalan; dada ami ba Maromak,\nSe sala la'o tuir Jesus, moris; se sala bele hetan nakukun,\nema\n3. Hosi nakukun laran, no hosi sala laran;\nsei buka deit lialos, no lialos mak Na'i Jesus.\n4. Jesus, lialos no moris, no dalan Na'i Maromak;\nema tuir dalan ne'e sei hetan Na'i Maromak.`
  },
  {
    "id": 24,
    "category": "Komunhao",
    "title": "ITA SEI HADOMI MALU",
    "content": `ITA SEI HADOMI MALU\nIta sei hadomi malu ho laran mos\nIta sei hadomi hela nafatin ita leet\nMaromak ita\n\n1. Ita Na'i Jesus Kristu hadomi, halibur ita.\n2. Ita nobun hamutuk, hamtauk, hadomi Maromak.\n3. Kristu, to laran; ho neon ida deit.\n4. Keta buka fahe malu;\n5. Ho laran hakarak hare ha'u nia Na'i Maromak.\n6. Haksolok hadomi oras ne'e ba nafatin. Amen.`
  },
  {
    "id": 25,
    "category": "Komunhao",
    "title": "JESUS DOBEN",
    "content": `JESUS DOBEN\nJesus, ha'u nia Na'i.\n\n1. La'o doben mutuk ho Nia la susar.\nLa'o hamutuk ho be matak malirin haro ha'u klamar.\n2. Fo neon diak haksolok hatudu klamar. Dalan los.\nTan Nia nararan boot, nararan metantu,\nla'o ho Nia foho leet, rai met-metin,\n3. Maski la'o foho metin, la tauk buat aat ida\nIt Boot la'o hamutuk ho ha'u;\nho It grása no tulun nafatin.\n4. It hadia mai ha'u aihan furak\niha ema laran aat sira oin,\nba ha'u ulun It kose mina morin\nNo ha'u kalis nakonu, naksalin.\n\n5. Laran diak no grása tuir ha'u,\nkala loron ha'u moris nia laran.\nHa'u tur fatin mak ita kadunan\nloron-loron bainhira ha'u sei moris.`
  },
  {
    "id": 26,
    "category": "Komunhao",
    "title": "ITA NIA MORIS",
    "content": `ITA NIA MORIS\n\n1. Ita nia moris nudar tali ida\nnebe tutan lalehan ho rai ne'e.\nIta nebe tutan metin nobun ho rai hamaluk,\nita tali k hun kledik hun mak Kristu.\n\nMai, ita hotu hakbesik altar, simu Kristu isin\nnudar aihan ba ita klamar, maski data wain la soi.\n\n2. Ita nia moris nudar we, suli ba rai.\nIta kuru mos fahe ho hadomi,\nita domin los suli hosi Kristu.\n\n3. Ita nia moris nudar deruk ida\nnebe ho midar ba tempu\nita ku'u took fahe ba malu ho lolos.\ntuir domin los, domin Kristu nian`
  },
  {
    "id": 27,
    "category": "Komunhao",
    "title": "HIIT AN MAI, NA'I JESUS",
    "content": `HIIT AN MAI, NA'I JESUS\n\n1. Nudar rusa buka os be, ami buka ita Boot,\ntan rusa wain hamrook los, ita ami nia bematan.\nHiit an mai, Na'i Jesus, amen aleluia. (2x)\n\n2. Ami la'o ba ita altar atu simu ita ho haksolok.\nAmi sa'e la'o ita Boot.\n\n3. Sira be hare ha'u terus, dehan: "Maromak iha nebe?"\nNa'i iha ita leet, ita ho hadomi tan Maromak sei soi ita.\n\n4. Bele terus karik ba, ha'u hanoin Na'i Maromak.`
  },
  {
    "id": 28,
    "category": "Komunhao",
    "title": "ITA UKUN MORIS",
    "content": `ITA UKUN MORIS\nIt'ukun mos, It'ukun los duni;\nIt'ukun los, It'ukun diak tebes;\nIt'ukun tulun, It'ukun hadomi.\nMai Na'i Maromak tulun, mai, ukun ami rai. (2x)\n\n1. Maromak sira, leno liurai sira;\ntulun sira atu ukun diak kmanek ita ema,\natuk ukun diak ata oan sira;\natuk ukun diak ita ema,\nukun ami hodi lialos loron matan,\n\n2. Hosi foho tun tun mai lialos matan,\nhosi leten tun tun mai lialos.\nTau matan ba ata oan sira oan,\ntulun netik netik ema kiak oan sira,\nsadia netik netik ema kiak oan sira,\nharaik todan ba ema laran aat.\n\n3. Maromak, ami neon nakukun,\nami buka ukun ninin,\nbuka deit riku soi no moris;\n\nla tauk sala, lakon diak lalehan\nhodi bosok, naok, fakar ran;\nhodi sola hasouru ita Boot.\n\n4. Ami sola Na'i no Liurai ita Boot Maromak;\nto naroman, leno ami laran laran\natu buka liliu diak lalehan,\nloron kalan. Hanoin ami, ukun ami rai,\nhalo funu hotu lalais.`
  },
  {
    "id": 29,
    "category": "Komunhao",
    "title": "ITA HADOMI MALU KARIK",
    "content": `ITA HADOMI MALU KARIK\nIta hadomi malu tebes karik, Kristu iha ita leet.\n\n1. Kristo nia domin hananu halibur ema tomak,\nhaksolok ho ita atu moris tuir Nia domin ne'e,\n"Hadomi malu nudar Ha'u hadomi imi."\n\n2. Ita hotu halibur, halo isin ida no fuan ida,\nita hadook buat hotu ho halak atak domin;\nfunun, nune ne Kristu bele hela iha ita leet.\n\n3. Mai, to perda ba malu\nnudar Na'i halo perdu ita sola,\nnune'e ita halo tuir Kristu nia hakarak,\nat ita bele hetan moris rohan laek. Amen.`
  },
  {
    "id": 30,
    "category": "Komunhao",
    "title": "JESUS FO NARAMAN",
    "content": `JESUS FO NARAMAN\nnakukun; leno ami dalan.\nJesus fo naroman terus, ha'u laran susar, leno ami dalan.\n\n1. Ha'u fuan terus, dook, dook ita Boot;\nha'u horik dook Boot, dook.\n\n2. La hetan ksolok bainhira mesak,\ndook Na'i Maromak, Maromak dalan.\n\n3. Ha'u kalan ne'e la'o tuir lalehan,\nMaromak dalan lalehan, dalan.\n\n4. Hatudu dalan, ha'u Aman doben,\nha'u loron oin nakukun, la'o sola dalan.\n\n5. Loron foun sei mai, naroman sei mai,\nMaromak tulun tulun, tulun.\n\n6. Ita fiar metin, ita laran metin;\nnian\nhamutuk ksolok, ksolok nafatin.`
  },
  {
    "id": 31,
    "category": "Komunhao",
    "title": "MAI, UKUN HA'U NIA FUAN",
    "content": `MAI, UKUN HA'U NIA FUAN\nMai, Na'i Jesus, hiit an laiais.\nMai ha'u laran.\nMai, ukun ha'u fuan ho ita domin.\n\n1. Ita ukun fo moris ba mundu raiklaran\n2. Ita ukun fo ksolok ba ema hotu-hot.\n3. Ita ukun fo tulun ba ema laran kmaus`
  },
  {
    "id": 32,
    "category": "Komunhao",
    "title": "MAI, NA'I JESUS, TAMA HA'U LARAN",
    "content": `MAI, NA'I JESUS, TAMA HA'U LARAN\nMai, Na'i Jesus, tama ha'u laran;\nMai, hela ho ha'u nafatin;\nMai, soi ha'u isin no klamar.\n\n1. Mai hela ho ha'u nafatin no tulun no kbit mai ha'u.\n2. Leno isin neon fo ha'u laran tuir lialos ita hanorin.\n3. Ha'u laran metin ba Ita; hasai ha'u hosi buat aat.\n4. Mai, hela metin ho ha'u tinan ba tinan nafatin.`
  },
  {
    "id": 33,
    "category": "Komunhao",
    "title": "MAI HOTU, MAUN ALIN",
    "content": `MAI HOTU, MAUN ALIN\nMai hotu, maun alin, it'Aman mak bolu;\nmai hotu Na'i santu meja; iha fatin mos ba ita.\n\n1. Ba aihan furak Na'i bolu gracia oan oan sira nian.\n2. Paun mak Kristu no tua Ran ninin.\nHo ksolok ita hakbesik ba Na'i nia meja.\n3. Hadulas isin mak domin sei sai boot.\n4. Aihan ksolok habosu ita hotu;\nNia ita kbit iha ita moris tomak.`
  },
  {
    "id": 34,
    "category": "Komunhao",
    "title": "MAI, NA'I JESUS",
    "content": `MAI, NA'I JESUS\nMai, Na'i Jesus; mai ha'u nia Na'i; mai, Na'i Jesus, mai.\nMai, ukun nafatin ha'u nia fuan; mai, Na'i Jesus, mai.\n\n1. Ho ha'u nia liman hakarak fo, mai, Na'i Jesus, mai.\n2. Ba ha'u nia maun alin ha'u sei fo tulun...\nHo ha'u nia ibun hakarak hananu...\n3. Domin ho ksolok iha ha'u nia fuan...\nHasa'e harohan ba ha'u nia Na'i...`
  },
  {
    "id": 35,
    "category": "Komunhao",
    "title": "JESUS RASIK DEHAN",
    "content": `JESUS RASIK DEHAN\nJesus rasik dehan: "Ha'u aihan lalehan."\nse'o mai Ha'u, se la'o to'o mai'u sei la hamlaha.\n\n1. Se han aihan Ha'u sei, se hemu tua ne'e\nsei moris ba bei-beik, sei hetan diak.\n\n2. Aihan ida ne'e hosi lalehan mai;\nse hola, han nia sei la hetan mate.\n3. Aihan Ha'u to Ha'u aihan\nharaik to'o ba imi, to mans ba imi.`
  },
  {
    "id": 36,
    "category": "Komunhao",
    "title": "KRISTU, AMI ITA NIA KREDA",
    "content": `KRISTU, AMI ITA NIA KREDA\nKristu, ami it'nia Kreda; fatuk moris uma nain nian.\n\n1. Ema be la'o dau-daun ba Aman Maromak nia uma\nNeon ida deit, laran tuir dalan tiar nian,\nho Kristu ami belun, ho Kristo ami Na'i.\n\n2. Ami ita emar, Na'i, ami ita emar.\nHo ita Boot roman, no ita nia kbit,\ntan ami knaar iha kaer hodi to sasin ami nia tiar.\n\n3. Kristu terus ho susar oi-oin.\nPovu be terus ho susar povu\niha sira isin no sira nia klamar.\nMaibe sira laran metin iha Kristu Maksoin,\nho laran ksolok hariu mundu foun.`
  },
  {
    "id": 37,
    "category": "Komunhao",
    "title": "JESUS HA'U NIA PASTOR",
    "content": `JESUS HA'U NIA PASTOR\nJesus ha'u nia Pastor, buat ida ha'u la kuran\ntamba fiar ita Boot.\n\n1. Bematam ha'u mos to'o diak, haksolok fuan ha'u nia fuan.\n2. Sei lori liu hosi inur, rai sei nakukun;\nmaibe ha'u nia Maromak sei leno ha'u nia ain fatin.\n\n3. Bele iha mate laran sei hein ita Boot;\nha'u sei la tauk destinu, ha'u fiar ita Boot.\n\n4. Hadia hela mai, Paun hadia moris nian;\nhadia mos kalis ida ho tua moris nian.`
  },
  {
    "id": 38,
    "category": "Komunhao",
    "title": "MAI, JESUS, AMI NA'I",
    "content": `MAI, JESUS, AMI NA'I\nMai, Jesus, ami Na'i, hela ho ami; leno ami dalan.\n\n1. Ha'u mak mundu nia naroman.\nSe mak tuir Ha'u sei hetan naroman.\n\n2. Se hakbesik Ha'u sei la hamlaha tan ona.\n3. Se han aihan moris tun hosi lalehan nafatin.\n\n4. Ha'u mak dalan los, lialos no moris foun.\nHa'u deit mak sei lori imi ba Aman Maromak.\n\n5. Ha'u mak bibi atan diak.\nHa'u hatene Ha'u nia bibi oan no fo vida ba sira.\n\n6. Ha'u mak Liurai lialos nian.\n7. Ida nebe iha lialos rona Ha'u aisanak lia.\nHa'u mak aihun, imi ha'u mak aifuan barak.\nSe mak ho Ha'u sei fo aifuan barak.`
  },
  {
    "id": 39,
    "category": "Komunhao",
    "title": "LA'O MESAK TUIR RAI FU'IK",
    "content": `LA'O MESAK TUIR RAI FU'IK\n\n1. La'o mesak tuir rai fuik,\nbuka ha'u maun, ha'u maun Jesus.\nNakukun laran belun, fuan namlele.\nBuka ha'u belun, ha'u Na'i Maksoin.\nData wain ema barak la hadomi,\nterus todan mesak.\nMaibe Jesus rasik mak dehan: (2x)\n"Se todan, Ha'u sei kasu naha." (2x)\n\n2. Tahu laran holo riba,\nha'u isin dodok, ha'u klamar foer;\nfoti matan ba lalehan,\nbolu ha'u Na'i, ha'u tanis sola.`
  },
  {
    "id": 40,
    "category": "Komunhao",
    "title": "JESUS, ITA FIHIR HA'U MATAN",
    "content": `JESUS, ITA FIHIR HA'U MATAN\n\n1. Na'i, ita ema Maksoin, ho lia midar, ho lia mamar;\nIt buka ema, se mak matan hakarak.\nJesus, ita fihir ha'u bolu ha'u naran;\nho hamnasa, ita bolu ha'u husik hela tasi ibun,\nho it Boot.\n\n2. It Na'i, ita bolu ha'u tasi naran, ita la'o, ami hakarak tuir,\nIta Boot dehan: "Imi tuir Ha'u mai!"\n\n3. Na'i, ita bolu ha'u ata. Ita dehan: "La bele lori bukae,\nla bele lori bukae eh kohe."\n\n4. Na'i, ita dehan bukae ata: "Faan buat hotu,\nto ba ema kiak, o sei hetan premiu lalehan."\n\n5. Na'i, ita bolu lais; "Husik rai, riku no soi;\nhare ba\n\n6. Na'i, ita bolu hamaus: "Se hakarak, tuir Ha'u mai,\nHa'u toos boot, ema la iha."`
  },
  {
    "id": 41,
    "category": "Komunhao",
    "title": "NE'E KALIS SANTA",
    "content": `NE'E KALIS SANTA\nNe'e Kalis santa Aihan Kristu nia Ran\n\n1. Sei agradesse ha'u Na'i oin sa tan diak hotu Nia to.\nSei tone kalis maksoin hodi harohan Na'i nia naran.\n\n2. Kmanek ba Na'i tutor matan,\nNia belun sira nia tan\nha'u ita atan, ita atan teto nia oan.\nIta hasai ha'u hosi susar laran.`
  },
  {
    "id": 42,
    "category": "Komunhao",
    "title": "MAROMAK IHA HA'U LARAN",
    "content": `MAROMAK IHA HA'U LARAN\nMaromak iha ha'u laran, (2x)\nMaromak iha ha'u la'o neon (2x) ita Boot.\n\n1. Ema barak ha'u la'o neon ita Boot,\nla buka dalan seluk dook ita Boot,\nhodi hamamuk sira laran,\nikus fall laran mukit.\nMaibe fall ita sei nafatin\nbesik sira loron.\n\n2. Ha'u sira mukit loron hare\nema barak mukit la tuir,\nIha tinan rihun resin\nLaran metin deit ba rai laran haluha.\n\n3. Rai ne'e ita Boot sei oin seluk\nkarik ema tomak sarani tomak.\nLaran metin ba ita Boot.\nLaran metin ba ita Boot.\nMaibe barak sei lahaluha\ntan ne'e susar beibeik.`
  },
  {
    "id": 43,
    "category": "Komunhao",
    "title": "SE KOMUNGA HA'U ISIN",
    "content": `SE KOMUNGA HA'U ISIN\nSe komunha Ha'u isin no hemu Ha'u Ran\nsei moris ba nafatin\n\nJesus dehan: "Ha'u paun moris tun hosi lalehan;\natu halo raiklaran moris."\n\n1. Ha'u Isin aihan tebes ida,\nHa'u Ran tua tebes isin.\n\n2. Se komunha Ha'u Isin no hemu Ha'u Ran\nhela ho Ha'u, Ha'u horik ho nia.\n\n3. Imi bei bei han mana iha raifuk no no mate tiha.\nSe han paun Ha'u sei, Nia sei la mate.\n\nSe han paun Ha'u sei, moris to Aman moris Ha'u Nain,\nse komunha Ha'u isin moris no ba Espiritu Ha'u.\n\n4. Gloria ba Aman, ba Oan no ba Espiritu Santu,\nnudar hori uluk, oras ne'e no ba nafatin.`
  },
  {
    "id": 44,
    "category": "Komunhao",
    "title": "NA'I JESUS HATUDU DALAN LOS",
    "content": `NA'I JESUS HATUDU DALAN LOS\n\n1. Na'i Jesus hatudu dalan los, dalan los.\nNa'i Jesus hanorin lialos Kristu.\nLialos, dalan han moris Jesus Kristu.\nMai, ba lalehan dalan han Na'i Jesus. (2x)\n\n2. Ema diak ita sei fo han, sei fo han;\nketa karak, buka fo hatais.\n\n3. Ema moras ita ba hare, ba hare;\nema mate ita ba hakoi, tribunal;\nketa tauk tahan ema kiik.\n\n4. Lia ruma ita selu aat, selu aat;\nhan, hemu hodi kosar ben.`
  },
  {
    "id": 45,
    "category": "Komunhao",
    "title": "NA'I MAROMAK HAKBESIK",
    "content": `NA'I MAROMAK HAKBESIK\nNa'i Maromak hakbesik iha ba hanoin; Na'i.\n\n1. Diak iha buat hotu Nia halo,\nNia sira ba sira be harohan.\n\n2. Nia besik ba sira be harohan tebes,\nbesik ba harohan sira.\n\n3. Nia hakarak diak ba ema hotu,\nrona ema sira tanis no soi sira.\n\n4. Ba ema hadomi laran aat, Nia fo todan;\nmaibe ema laran aat, Nia fo todan.\n\n5. Ha'u nia klamar haksolok;\nha'u nia ibun hananu, hahi Maromak.\n\n6. Buat moris tomak, hahi Maromak naran,\ntinan ba tinan, nafatin. Amen.`
  },
  {
    "id": 46,
    "category": "Komunhao",
    "title": "MAROMAK NIA VONTADE",
    "content": `MAROMAK NIA VONTADE\nMaromak nia vontade kmanek boot,\nha'u sei tuir nafatin Nia ukun.\n\n1. Diak ba ema be la hetan sala;\nsira la'o tuir Maromak nia ukun.\n\n2. Diak ba ema be tuir Maromak nia ukun;\nsira buka Nia ho laran tomak.\n\n3. Ita haraik ita ukunfuan atu ami halo tuir lolos.\n\n4. Halo ha'u moris metin beibeik\nhodi halo tuir ita ukunfuan.\n\n5. Ha'u sei la hetan neon susar,\ntan ha'u tuir ita ukunfuan.`
  },
  {
    "id": 47,
    "category": "Komunhao",
    "title": "NE'E ITA DALAN",
    "content": `NE'E ITA DALAN\nNe'e ita dalan, ne'e ita dalan,\nNe'e ita dalan ba salvacao. (2x)\nJesus,\n\n1. Hadomi sarani hanesan loron Na'i Jesus,\nnudar susar eh ksolok ita sei hamutuk,\nhadomi atu malu hanesan Na'i Jesus. (2x)\n\n2. Atu imi nia vida oras ne'e\nvida ne'e nia vida ho Maromak\nHadomi malu diak tebetebes,\nsei hetan maun Jesus iha imi leet\n\n3. Hakruuk ba sira be monu ona\ntuir Na'i Jesus to liman ho perda;\n\nHadomi sira be iha sola\nsei hetan maun Jesus iha imi leet\n\n4. Jesus hanorin ita loron krus,\nsarani tenke\nSe imi loron nia ho ksolok boot krus\nimi hetan duni paz ho salvacao.`
  },
  {
    "id": 48,
    "category": "Komunhao",
    "title": "NA'I JESUS NIA UKUN HANORIN",
    "content": `NA'I JESUS NIA UKUN HANORIN\n\n1. Na'i Jesus nia ukun hanorin;\nNia hanorin; to dame ba malu ida ne'e,\nmoris nia sei hetan ksolok ba bei-beik.\n\n2. Ita hotu mak moris iha rai;\nita Na'i Jesus nia ukunfuan;\nita la rai nia, sei hetan fakara ran,\nita la hetan dame, hadomi malu.\n\n3. Ita hotu tuir dalan sarani;\nsei hatudu Jesus ukunfuan;\nita moris la tuir ukunfuan ida ne'e,\nita la, fakara ran no mate.\n\n4. Rai Timor mak terus no nofunu.\nNa'i Jesus hatudu to dalan;\n\nNa'i oin nusa mak funu bele hotu laiais,\nTimor oan atu hadomi malu.\n\n5. Na'i Jesus fo ida deit,\natu natan rai nia funu;\nsei hadomi nudar Nia hadomi ema,\noin nune'e rai nia didiak.\n\n6. Rai Timor atu hetan damen,\nTimor oan atu moris diak ba malu;\nse hakribi tiha moris aat no sala,\nbuka haktulun, dame, hadomi malu.`
  },
  {
    "id": 49,
    "category": "Komunhao",
    "title": "NE'E HA'U NIA ISIN",
    "content": `NE'E HA'U NIA ISIN\n"Ne'e Ha'u nia isin, simu hola ba.\nNe'e Ha'u nia ran maksoin, simu ba hemu ba.\nTambaa Ha'u moris Nain, hadomi Nain."\nNa'i, halo ami moris tuir ho domin.\n\n1. Gloria ba Aman hakia ita. Gloria ba Oan Maksoin.\nGloria ba Espiritu moris Nain; fo mai ita Ninia domin.\n\nHamutuk iha domin nia laran ida ho paun rasik ida.\n\n2. Ema hotu mesak ita nia maun alin. Hadomi.\nNusik Na'i Eukaristia ita, ema bele han ita.\nNinia isin no Nia ran haraik ita hetan kbit.\nIta sei paun no tua mak tuir ba domin.\n\n3. Hodi paun no tua nakfilak ba Na'i nia Isin.\nHanesan Maromak oan, ema hadulas altar,\nhot-hotu besik Na'i soi soi ita.\n\n4. Badai ai Kristu mai Nia ita rasik kaer serbisu malu.\nEma hotu kaer serbisu atu halo hanesan Kristu.\nFoin libur ema, halo povu ida.`
  },
  {
    "id": 50,
    "category": "Komunhao",
    "title": "NA'I MAK DOMIN",
    "content": `NA'I MAK DOMIN\n\n1. Maromak mak ita hotu nia Aman;\nmaun alin, ita hadomi deit mak Nia.\nMoris deit ita ita hadomi Aman deit,\nliu loron, liu riku tomak.\n\nLos, tamba Na'i, Na'i mak domin.\nNa'i mak domin, ita nia moris.\nNa'i mak domin.\n\n2. Maromak hadomi ita ida-idak.\nNune'e, ita sei moris ba domin ne'e\ndomin boot\nIha Nia, tamba Nia, Na'i, mak domin.\n\n3. Maun alin, hela hamutuk, fiar deit ita Na'i.\nHela isin domin, moris iha domin.\nMoris ba loron, liu loron, liu riku tomak,\nliu buat hotu, loron.\nLos, tamba Na'i, Na'i mak domin.\n\nNa'i mak domin, ita nia moris.\nNa'i mak domin. Nia Halos.\nNa'i mak domin, ita moris karik domin ida ne'e\nbuat ida sei sei sai ho Aman Maromak.`
  },
  {
    "id": 51,
    "category": "Komunhao",
    "title": "MORIS KOLOK IHA DOMIN LARAN",
    "content": `MORIS KOLOK IHA DOMIN LARAN\nMoris ksolok iha domin laran;\nNa'i Kristu nia horik iha ita leet\n\n1. Tan Kristu ne'e domin libur ita hotu hananu;\nita haksolok tan hananu;\nhadomi malu tuir Nia hanorin;\nnune'e, it hadomi tebes Na'i Maromak.\n\n2. Mai, soe hamutuk moris iha neon ho laran ida deit,\nhodi buat nebe halo ita haketak malu.\nKeta halo aat, fo terus no oho malu\nta Kristu, ita nia Maksoin, horik ho ita.\n\n3. Moris iha dame no domin nia laran\ntakat ita hatene perda katak\nLialos ne'e Kristu hanorin malu\natu ita moris iha ksolok ba nafatin.`
  },
  {
    "id": 52,
    "category": "Komunhao",
    "title": "QUE BOM É O PÃO",
    "content": `QUE BOM É O PÃO\nQue bom é o pão que Tu nos das,\noferta do Teu amor, Senhor.\nQue bom é o pão que Tu nos das,\no pão saboroso que és Tu.\n\n1. Cada vez que repartirdes este pão,\nFazei-o em memória da minha morte.\n2. Lembrai-vos em memória da minha morte Mim ate Eu vir,\nDe novo juntar-Me convosco.\n3. O meu Corpo é o alimento que vos dou.\nComei, saciai a vossa fome.`
  },
  {
    "id": 53,
    "category": "Komunhao",
    "title": "VEM, IRMÃO",
    "content": `VEM, IRMÃO\nVem, irmão, vem para a mesa;\nvem, irmão e meu amigo.\nDou-te a força e o amor,\nEu vou para a vida sempre contigo.\n\n1. Vive na esperança, irmão, e encontrarás o Senhor.\n2. Fala com Ele na fé, e terás o seu amor.\nVamos, irmão, comungar! Cristo amou todos nós,\nconosco vem ao altar.\n3. Na mesa Cristo se dá, em verdadeira comida,\nquanta coragem teremos se o levarmos para a vida.\n4. Na mesa Cristo se dá, nova aliança de amor.\nEle quer ser nosso irmão, na alegria e na dor.`
  },
  {
    "id": 54,
    "category": "Komunhao",
    "title": "CORAÇÃO SANTO, TU REINARÁS",
    "content": `CORAÇÃO SANTO, TU REINARÁS\nCoração santo, Tu reinarás.\nTu nosso encanto sempre serás rei.\n\n1. Como soldado vela a seu rei,\nassim meu sangue por Ti darei.\n2. Se o mundo iníquo me combater,\nsempre a Teu lado hei-de vencer.\n\n3. Jesus soberano, deixa-me ser\nTeu guarda d'honra até morrer.`
  },
  {
    "id": 55,
    "category": "Komunhao",
    "title": "POR UM PEDAÇO DE PÃO",
    "content": `POR UM PEDAÇO DE PÃO\nPor um pedaço de pão, por um pouco de vinho,\neu já vi mais de um irmão se desviar no caminho.\nPor um pedaço de pão e por um pouco de vinho,\n\neu também vi muita gente encontrar novamente\no caminho de Céu.\nEu também vi muita gente voltar novamente\nao convívio de Deus. (4x)\nPor um pedaço de pão. (4x)`
  },
  {
    "id": 56,
    "category": "Komunhao",
    "title": "CORAÇÃO SACERDOTAL DE JESUS",
    "content": `CORAÇÃO SACERDOTAL DE JESUS\nCoração sacerdotal de Jesus, multiplicai os sacerdotes.\nCoração sacerdotal de Jesus, santificai os sacerdotes.\nCoração sacerdotal de Jesus,\natual, actual pelos sacerdotes.\nNossa Senhora do Rosário de Fátima, Rainha do clero,\nrogai pelo Santo Padre, pelo nosso prelado,\npor todo o clero e pelos nossos seminários.`
  },
  {
    "id": 57,
    "category": "Komunhao",
    "title": "BAINHIRA NA'I",
    "content": `BAINHIRA NA'I\n\n1. Ha'u hamlaha, o to aihan mai Ha'u.\nBainhira Na'i, ha'u la dauk hetan ita Boot?\nHa'u malirin, o fo hatais mai Ha'u.\nMaibe ha'u Na'i, ha'u la dauk hetan ita Boot.\nBa maun alin terus o sei loran metin\nho o nia domin sei fo ksolok ba sira.\n\n2. Ha'u kuran Na'i, humu o be mai Ha'u.\nBainhira Na'i, ha'u la dauk hetan ita Boot?\nHa'u hetan susar, o fo tulun mai Ha'u.\nMaibe ha'u Na'i ha'u la dauk hetan ita Boot.\n\n3. Ha'u la'o dalan, o fo uma ba Ha'u.\nBainhira Na'i, ha'u la dauk hetan ita Boot?\nHa'u iha dadur, o ba visita Ha'u.\nHa'u hatene ona. Ita hamutuk ami.`
  },
  {
    "id": 58,
    "category": "Komunhao",
    "title": "UMA ESPIGA",
    "content": `UMA ESPIGA\nUma espiga dourada pelo sol,\ncacho de uvas que um homem cortou\nse convertem para nós em pão e vinho de amor;\nno Corpo e Sangue do Senhor.\n\n1. Comungamos trigo na mesma semeadura,\nsomos moinho, a vida nos tritura com dor,\nDeus nos faz Eucaristia no amor.\n\n2. Como grãos que fazem um só pão,\ncomo notas do mesmo cantor,\ncomo gotas de água que se fundem no mar,\nos cristãos um só corpo de Deus formar.\n\n3. Sentar-se à mesa do Senhor,\ncomo filhos, Seu pão comungar,\nnesta mesma esperança caminhando irão\ne na vida como irmãos se hão-de amar.`
  },
  {
    "id": 59,
    "category": "Komunhao",
    "title": "SENHOR, NÓS TEMOS FOME",
    "content": `SENHOR, NÓS TEMOS FOME\nSenhor, nós temos fome, Senhor, nós temos sede;\nnão a fome de pão, não a sede de água!\nSão razdes de viver o que nos falta. (2x)\n\n1. De um extremo mar ao outro, Senhor,\na Vossa palavra, mas não a encontramos.\n2. Ninguém fala de Ti, ninguém nos pode ensinar,\nqueremos profetas que apontem caminhos para nós guiar.\n3. Enquanto muitos se arrastam na fome e no sofrimento\nhá outros que vivem no seu bem estar,\ncomo donos do mundo, servir.\n4. O que nos falta é servir,\nnem só de pão vive o homem,\nmas vive também de toda a palavra\nque vem de Deus.`
  },
  {
    "id": 60,
    "category": "Komunhao",
    "title": "COMUNHÃO E UNIÃO",
    "content": `COMUNHÃO E UNIÃO\nComunhão é união e união com Deus;\ncomunhão é união e verdade,\nnossas almas unidas se fundem\ne as mãos se estreitam em paz.\n\no Senhor quando em fim voltarei. (2x)\n\n1. Na mesa com Cristo me sentirei\ne outro Cristo com Ele vou ser\ncom meu irmão eu meu alegre no dia\ne na noite com Ele sofrerei. (2x)\n\n2. Minha alma unida a Deus todo est,\nquero ser testemunha e verdade\npara todos os homens dispersos,\no Senhor quando em fim voltarei. (2x)\n\n3. Nenhum homem se afaste da tua forte voz\nse convidas a humanidade\ntodos podem amar-Te também, Senhor\nquando enfim para todos virá. (2x)`
  },
  {
    "id": 61,
    "category": "Komunhao",
    "title": "Ó JESUS, QUE ESTAIS A MEU LADO",
    "content": `Ó JESUS, QUE ESTAIS A MEU LADO\n\n1. Ó Jesus, que estais sempre a meu lado\najudai-me a levar minha cruz.\nDesviai-me de todo o pecado\npara que vos sirva, Ó Jesus.\nVamos todos com santa alegria\nreceber a Jesus com amor,\nsempre mais que adoremos a Jesus\nmais e digno do nosso amor. (2x)\n\n2. Qual veado que corre sedento\nde águas cristalinas ao frescor,\nassim eu corro a ti desfalecido\ncom teu pronto apaga o meu ardor.\n\n3. E com fé e também com amor\nvamos todos buscar,\no alento, o forgo e o valor\npara os combates que vamos travar\n\n4. São combates que só de temer\nos combates das nossas paixões;\ne Jesus é que há-de vencer,\ne com Ele seremos livres.`
  },
  {
    "id": 1,
    "category": "Asaun de Grasas",
    "title": "HADOMI NA'I",
    "content": `HADOMI NA'I\n\n1. Ha'u klamar haksolok ho hananu, hananu, (3x)\ntamba Na'i hadomi ha'u. (2x)\nHadomi ho Na'i, Na'i, Na'i, fotu sa'e, sa'e, sa'e.\nIta neon tomak laran ba Maromak. (2x)\nIta tomak hana'i no hahi. (3x)\n\n2. Tamba Na'i mak horik ho ita. (2x)\n\n3. Mundu tomak hahi ita Boot, ita Boot. (3x)\nTamba ita ami nia Maksoin. (2x)`
  },
  {
    "id": 2,
    "category": "Asaun de Grasas",
    "title": "HANANU HO HA'U, EMA RAIKLARAN",
    "content": `HANANU HO HA'U, EMA RAIKLARAN\nHananu ho ha'u, ema raiklaran ho anju lalehan.\nGloria ba Na'i, aleluia; gloria ba Na'i, aleluia. (2x)\n\n1. Ema raiklaran, hana'i ita Na'i,\nanju ho santu, hananu ita domin.\n\n2. Kiik ho boot, hana'i ita Na'i,\nkiak ho riku.\n\n3. Fulan ho loron, hana'i ita Na'i,\nfitun lalehan, hananu Nia domin.\n\n4. Tasi ho foho, hana'i ita Na'i;\ntasi ho mota hananu Nia domin.\n\n5. Udan ho anin hananu Nia Na'i;\nbe ho be-matan hananu Nia domin.`
  },
  {
    "id": 3,
    "category": "Asaun de Grasas",
    "title": "IMI KETA TAUK",
    "content": `IMI KETA TAUK\n\n1. Imi keta tauk, Ha'u horik ho imi;\nbuka halo diak, tuir ukun domin.\nLa'o buka ksolok, matak malirin\nho soin lalehan laek.\nHat manan los sa? Hai, manan los sa sa?\nBuka mundu nia ksolok, sei la manan buat ida.\n\n2. Ai funan foin buras, sei nomlaek ikun,\nmundu raiklaran sei mosu naben,\nmaibe Maromak domin,\nsei roman beibeik, leno ami fuan;\nbuka moris lalehan.`
  },
  {
    "id": 4,
    "category": "Asaun de Grasas",
    "title": "FIAR JESUS",
    "content": `FIAR JESUS\n\n1. Ami fiar Jesus, ami Na'i, ami hein Jesus, ami Na'i.\nAmi hadomi Jesus, ami Na'i.\nNa'i Jesus, rona ami (2x)\n\n2. Ami buka Jesus ami Na'i, ami harohan Jesus, ami Na'i.\nAmi hananu Jesus, ami Na'i.\nNa'i Jesus, rona ami (2x)\n\n3. Ita ho ami Jesus; ita ho ami, iha ksolok terus Jesus, ita ho ami\nita ho ami ba nafatin (2x)\nIta ho terus, Jesus, ita ho ami.`
  },
  {
    "id": 5,
    "category": "Asaun de Grasas",
    "title": "AMI AGRADese, NA'I",
    "content": `AMI AGRADese, NA'I\nAmi agradesse, Na'i, ami agradesse.\n\n1. Ami agradesse, Na'i, tan ita kmanek wain Kreda.\n\n2. Ami agradesse, Na'i, tan ami ohin Kreda.\n\n3. ..tan fitun no fulan ..ba loron ohin nian.\n\n4. ..ba ami nia emar ..tan ami nia fiar.\n\n5. ..tan ami nia Maromak ..oras ne'e, nafatin.`
  },
  {
    "id": 6,
    "category": "Asaun de Grasas",
    "title": "HAHI, HANA'I ITA NIA AMAN",
    "content": `HAHI, HANA'I ITA NIA AMAN\n\n1. Hahi hana'i ita nia Aman,\nnaroman leno ita nia dalan.\nAleluia, aleluia mak Maromak domin\nKristu Jesus loron toin sa'e.\nAleluia, aleluia.\n\n2. Moris hamutuk hodi kaer liman,\nkaer ita knaar nudar sarani...\nSarani hatene hadomi malu,\nhakarak deit tuir lialos...\n\n3. Lori Maromak hodi haksolok\nhosi lalehan leno hodi dalan...\nHana'i Maromak, hahi nafatin\niha nia Kreda fiar sarani...`
  },
  {
    "id": 7,
    "category": "Asaun de Grasas",
    "title": "FO MAI ITA LALEHAN",
    "content": `FO MAI ITA LALEHAN\n\n1. Ha'u la hatene los oin sa atu agradesse ha'u Na'i,\nfo mai ha'u buat mesak diak,\nksolok wain iha buat ha'u nia fuan.\nFo mai ita lalehan atu hare, fo mai ita ibun atu hananu,\nfo mai ita mundu atu hadomi, ksolok wain iha ha'u nia fuan\nfo loron ida ita mundu Nia sei hadomi, ksolok iha Nia uma hau nia fuan\n\n2. Nia domin fo mai ita hodi tun hosi lalehan\natu hela hamutuk ita hodi ita tomak\n\n3. Loron ida ita ho Nia sei soi ita tomak.\numa, Nia uma lalehan nabilan nian,\nhamutuk iha Nia uma,\nksolok wain iha ha'u nia fuan.`
  },
  {
    "id": 8,
    "category": "Asaun de Grasas",
    "title": "BA ITA BOOT HASA'E LARAN METIN",
    "content": `BA ITA BOOT HASA'E LARAN METIN\nBa ita Boot hasa'e laran metin. It'ha'u Maromak;\nHa'u nia moris tomak iha'u ita liman.\n\n1. Na'i, iha ita Boot ha'u Na'i;\nha'u nia laran la taridu subar an;\n\n2. Tan ita Boot nia naran\nIta dada ha'u tuir dalan moris.\n\n3. Ba ita liman ha'u klamar hasa'e;\nIta Boot sei mai soi ha'u.\n\n4. Keta neon diak boot iha Na'i,\nha'u klamar mos haksolok iha Maromak.`
  },
  {
    "id": 9,
    "category": "Asaun de Grasas",
    "title": "ALELUIA, OBRIGADU",
    "content": `ALELUIA, OBRIGADU\nAleluia, aleluia, aleluia, obrigadu ba Jesus rohan laek.\n\n1. Obrigadu ba povu Israel, tan, tan Nia domin domin rohan laek.\nDehan Amolulik sei haklaken tan Nia domin rohan laek.\n\n2. Nia liman los halo diak, tan Na'i Jesus mak soi ha'u.\nTo'o sei moris, sei la mate, atu haklaken Nia domin.\n\n3. Loron ne'e Na'i nia loron, ita haksolok ho Nia.\nIta Na'i manan funu, ita haklaken makaas.\nIta hotu be Nia fihir, ita sei moris ho Nia domin.`
  },
  {
    "id": 10,
    "category": "Asaun de Grasas",
    "title": "KANTA ALLELUIA!",
    "content": `KANTA ALLELUIA!\nKanta aleluia, aleluia! Ita hamutuk haksolok aleluia\nKanta aleluia, aleluia!\nIta hananu ho ksolok ba Na'i Jesus!\n\n1. Bainhira mai hamutuk, nudar nia povu hamutuk\nita hasolok ho hananu; hananu ita nia domin,\nhananu tan Nia paz, ksolok nebe hetan.\n\n2. Lian ida deit, hahi no haksolok;\nLian ida no haksolok;\nKristu mak hadia nebe it'o\nIta moris ida, hamutuk ito Jesus\nhaksolok ita moris ba nafatin\n\n3. Hosi fatin ne'e, ita hetan ksolok\nba mundu tomak ita sai\nIta lori domin, nebe hamutuk\nAtu mundu mos bele hatene.`
  },
  {
    "id": 11,
    "category": "Asaun de Grasas",
    "title": "FO OBRIGADU BA ITA NA'I",
    "content": `FO OBRIGADU BA ITA NA'I\nFo obrigadu ba ita Na'i (2x)\nto obrigadu tamba Nia hadomi. (2x)\n\n1. Iha dader manu hananu Na'i. (2x)\nfo obrigadu ba ita Na'i.\n\n2. Oh, ha'u nia belun basa la hananu,\nto obrigadu ba ita nia Na'i. (2x)\n\n3. Kiik eh boot, riku eh kiak. (2x)\n\n4. Hahi ba Kristu ita nia Maksoin. (2x)\n\n5. Fo obrigadu ba ita Na'i,\nEukaristia, Nia domin fo mai ita. (2x)\n\n6. Hananu hotu hodi haksolok,\nto obrigadu ba ita nia Na'i. (2x)`
  },
  {
    "id": 12,
    "category": "Asaun de Grasas",
    "title": "AGRADESE NA'I MAROMAK",
    "content": `AGRADESE NA'I MAROMAK\nAgradese Na'i Maromak, agradese.\nMaluk, ei, mai agradese. (2x)\n\n1. Dader san deit manu oan nia Na'i. (2x)\nfo agradese ita Na'i Maromak.\n\n2. Beh, ema sira, tansa la mai,\nfo agradese Maromak, ita Na'i. (2x)\n\n3. Kiik oan no boot, riku no kiak.\nhana'i, hahi Kristu, ita Maksoin. (2x)\n\n4. Hot-hotu mai,\nfo agradese Maromak, ita Na'i. (2x)`
  },
  {
    "id": 13,
    "category": "Asaun de Grasas",
    "title": "NÃO FIQUEIS TRISTES",
    "content": `NÃO FIQUEIS TRISTES\nNão fiqueis tristes Eu vou partir,\nEu vou partir mas voltarei. (2x)\n\n1. Vou preparar-vos um lugar,\nnão fiqueis tristes, tende fé.\n\n2. Vou enviar-vos um Espírito\nQue vos dará toda a verdade.\n\n3. Anunciarei-vos uma nova luz\nQue todo o mundo salvará.`
  },
  {
    "id": 14,
    "category": "Asaun de Grasas",
    "title": "NA'I, AMI NIA MAROMAK",
    "content": `NA'I, AMI NIA MAROMAK\nNa'i, ami nia Maromak, ami agradesse ba Ita\nbe ukun tinan ba tinan.\n\n1. Tan It'fo fiar mai ami.\n\n2. Tan It'fo moris.\n\n3. Tan It'fo aihan mai ami.`
  },
  {
    "id": 15,
    "category": "Asaun de Grasas",
    "title": "NA'I, RONA AMI TANIS",
    "content": `NA'I, RONA AMI TANIS\n\n1. Na'i, rona ami tanis, ami laran susar tebes;\nNo haraik ksolok mai ami, ami sira hela ne'e.\n\nOh Na'i rona ami tanis. (2x)\n\n2. Simu ita atari sira ba ita Boot nia mahan,\nHamutuk ho Jesus lan no santu sira hotu.`
  },
  {
    "id": 16,
    "category": "Asaun de Grasas",
    "title": "ITA MAK NA'I NO HA'U BELUN",
    "content": `ITA MAK NA'I NO HA'U BELUN\n\n1. Obrigadu, Na'i, tamba ita mak Aman laran diak.\nHa'u hanoin ita nia domin,\nha'u hanoin iha ha'u neon (iha ha'u laran)\nRona ha'u Han, ita mak Na'i no ha'u belun.\nSimu ha'u lian, ita mak Na'i no ha'u belun.\nRona ha'u Han, ita mak Na'i no ha'u belun.\n\n2. Obrigadu, Na'i, tamba ita la'o hamutuk ho ha'u.\nIta kaer ha'u liman, (to'o rohan)\nIta hare ha'u nia dalan.`
  },
  {
    "id": 17,
    "category": "Asaun de Grasas",
    "title": "TAMBA MORIS FO MAI AMI, ALELUIA",
    "content": `TAMBA MORIS FO MAI AMI, ALELUIA\n\n1. Tamba moris fo mai ami, aleluia.\nObrigadu, Na'i Jesus, aleluia.\nObrigadu, tamba ksolok, tamba domin, aleluia.\n\n2. It'nia mate soi ami, aleluia...\nIt'nia domin halibur ami...`
  },
  {
    "id": 18,
    "category": "Asaun de Grasas",
    "title": "VIDA NE'E KNANANUK DOMIN NIAN",
    "content": `VIDA NE'E KNANANUK DOMIN NIAN\nVida ne'e knananuk domin nian,\n\n1. Tan ne'e ami fo obrigadu, Na'i.\nBa aifuan nafatin raiklaran,....\nobrigadu Aman doben.\n\n2. Ba manu hananu iha ailaran,...\n\n3. Ba loron lakan iha raiklaran,...\n\n4. Ba anin nebe suli ba tasi ho tohu tutun,\n\n5. Ba malirin iha tohu aas tutun,...\n\n6. Ba tasi nebe hadulas raiklaran,\nBa Aman Maromak nia domin,...`
  },
  {
    "id": 19,
    "category": "Asaun de Grasas",
    "title": "OBRIGADU, NA'I JESUS",
    "content": `OBRIGADU, NA'I JESUS\nObrigadu, obrigadu, obrigadu, obrigadu,\nobrigadu, Na'i Jesus.\n\n1. Obrigadu ba moris foun ami simu hosi altar,\nFoti matan ba ita krus, ami la'o ba oin nafatin.\n\n2. Mundu ne'e iha funu, ita ema mate wain.\nHaraik simu paz ba ami, halo ami povu hamutuk.\n\n3. Ami tamba kbit terus nobun nebe liu mosu (iha) ami leet\n\n4. Hodi mandamentu foun ami hetan lialos;\nIta povu sei hamutuk atu manan liberdade.`
  },
  {
    "id": 20,
    "category": "Asaun de Grasas",
    "title": "KRISTU HARAIK FO LIBERDADE",
    "content": `KRISTU HARAIK FO LIBERDADE\nKristu haraik fo liberdade, Kristu haraik fo salvacao\nKristu haraik laran metin, Kristu lialos nia domin.\n\n1. Na'i Maromak haraik paz no lialos, ha'u hetan diak.\nNia hasan ema hotu ba krus, ha'u diak.\nFo mai ha'u, Na'i, ita ha: rona ha'u Na'i ha'u orasau\n\n2. Ha'u perda ha'u nia maluk,\nNa'i Jesus perda ha'u.\nNa'i hadomi moris tuir dalan los, ha'u hetan Nia.\n\n3. Ha'u tuir dalan, dalan ksolok,\ndalan los, tuir dalan los.\nHa'u hadomi ema fuik, ema leet ha'u Na'i ninin.`
  },
  {
    "id": 21,
    "category": "Asaun de Grasas",
    "title": "ITA HOTU AGRADESE",
    "content": `ITA HOTU AGRADESE\nIta hotu agradesse tamba buat kmanek oi-oin hosi Na'i.\nIta hotu agradesse tamba Na'i laran diak tebes.\n\n1. Ami agradesse tan fulan fitun kalan nian.\nAmi agradesse tan toos natar ami nian.\nAmi agradesse tan domin rohan laek.\nObrigadu Na'i tan ita kmanek wain.\n\n2. Ami agradesse tan tasi foho rai ne'e nian.\nAmi agradesse tan udan anin lor-loron.\nAmi agradesse tan ami emar.\nObrigadu Na'i tan ita kmanek wain.\n\n3. Ami agradesse tan ita ami Na'i wain.\nAmi agradesse tan fiar nebe ami iha.\nAmi agradesse tan ita tahan ita Kreda.\nObrigadu Na'i tan ita kmanek wain.`
  },
  {
    "id": 22,
    "category": "Asaun de Grasas",
    "title": "ALELUIA, DEMOS GRAÇAS AO SENHOR",
    "content": `ALELUIA, DEMOS GRAÇAS AO SENHOR\nAleluia, aleluia, aleluia, demos graças ao Senhor.\n\n1. Demos graças ao Senhor, pois Seu amor é sem fim.\nDiga o povo de Israel que Seu amor é sem fim.\n\n2. Sua destra fez prodígios, pois o Senhor me salvou.\nViverei, não morrerei, p'ra Seu amor proclamar.\n\n3. Eis o dia do Senhor, alegres nele exultaremos.\nA vitória do nosso Deus, em alta voz proclamemos.\n\n4. Todos nós, os Seus eleitos, em Seu amor viveremos.\nDemos graças ao Senhor, pois Seu amor é sem fim.\nCantem todos os cristãos que Seu amor é sem fim.\nCante toda criatura que Seu amor é sem fim.`
  },
  {
    "id": 23,
    "category": "Asaun de Grasas",
    "title": "MORIS FOUN",
    "content": `MORIS FOUN\n\n1. Moris foun, moris foun nebe ohin ha'u simu moris\nha'u sei rai didiak.\nBa obrigadu, obrigadu iha ha'u ha'u nia laran nakali,\nHo ha'u haksolok, ho ha'u maluk sira. (2x)\n\nNo ha'u fiar, no ha'u fiar iha Na'i Jesus,\nHa'u ho moris nafatin nia kbit ha'u lori nia domin\nBa ha'u maluk sira. (2x)\n\n2. Obrigadu obrigadu ba Na'i ha'u Maromak, obrigadu\ntan ha'u nia laran luak, ho haksolok basa Na'i Jesus\nmai horik ha'u laran.\n\n3. Timor oan, Timor oan, ha'u alin, ha'u maun,\nhadomi tuir ba malu;\nhalo tuir, halo tuir Jesus,\nNa'i Maromak ninia ukunfuan.\nIta ba nia domin ba dook o laran nakali,\no nia tuir Jesus hirus.\nBuka tuir Jesus nia hanorin:\nHadomi, fo dame ba ha'u maluk sira. (2x)`
  },
  {
    "id": 24,
    "category": "Asaun de Grasas",
    "title": "RONA, HA'U NA'I, HA'U NIA HAROHAN",
    "content": `RONA, HA'U NA'I, HA'U NIA HAROHAN\nRona, ha'u Na'i, ha'u nia harohan\nHo laran kmaan hasa'e agradese.\nBa ita, Na'i, ha'u nia Maromak,\nhamos no bali ha'u klamar.\n\n1. Hosi halak sira ba loron-loron nian,\nbuat ida deit mak dom\nhadomi ha'u maluk sira boot:\n\n2. Buat sa mak ha'u halo, moris iha mundu ne'e,\nhosi halak aat sira ba hadook ha'u anhosii Na'i.\n\n3. Ha'u haksumik ha'u nia lia hahi ita Boot\nBa ita Na'i, ha'u Maromak.\n\n4. Kristu, O nia Isin no Ran nebe O fo mai ha'u\nSai aihan moris kmanek wain\nNudar ha'u nia bukae.`
  },
  {
    "id": 1,
    "category": "Final",
    "title": "ITA BOLU, HA'U SEI BA",
    "content": `ITA BOLU, HA'U SEI BA\n\n1. Ita bolu, ha'u sei ba; fo ba mundu domin no paz\nHa'u sei fo ha'u nia fuan ba ha'u maun alin kiak hu.\nTan ne'e ha'u sei haksolok maski ema hewai ha'u. (2x)`
  },
  {
    "id": 2,
    "category": "Final",
    "title": "AMI HAKLAKEN ITA REINU, NA'I",
    "content": `AMI HAKLAKEN ITA REINU, NA'I\nAmi haklaken ita reinu, Na'i, ita reinu, Na'i ita reinu.\n\n1. Reinu paz no justisa, reinu moris no lialos.\n\n2. Reinu domin no tulun, reinu be iha ami laran.\n\n3. Reinu be terus makaas, be laos rai ne'e nian.`
  },
  {
    "id": 3,
    "category": "Final",
    "title": "HA'U RASIK HILI IMI",
    "content": `HA'U RASIK HILI IMI\nHa'u rasik hili imi atu imi bele ba\nhaklaken Evanjeliu iha mundu raiklaran!\n\n1. Ba tafoli Ha'u liafuan Ho Ha'u naran.\nhalibur\n\n2. Ha'u horik (ho) imi ba nafatin;\nlori paz no domin ba povu raiklaran.`
  },
  {
    "id": 4,
    "category": "Final",
    "title": "AMI HANANU, NA'I, MAI AMI",
    "content": `AMI HANANU, NA'I, MAI AMI\n\n1. Ami hananu, Na'i, mai ami.\nAmi harohan, Na'i, mai ami.\nIha orasau, Na'i, mai ami.\nNa'i hit An mai. (2x)\n\n2. Ba ema diak... Halo alin maun... Haraik paz...\n\n3. Lubun sarani... Mai ami leet... Halo hamutuk...\n\n4. Iha paz... Iha funu... Oin oin oin...`
  },
  {
    "id": 5,
    "category": "Final",
    "title": "ITA MAI HOSI LALEHAN",
    "content": `ITA MAI HOSI LALEHAN\n\n1. Ita mai hosi lalehan, ita dehan, hotu dehan:\nJesus mak ita nia dalan, lori ita fila lalehan.\nQ hatene ona, ita hatene tiha ana:\nJesus mak ita nia dalan, lori ita fila lalehan. (2x)\n\n2. Jesus mak bele hasai ita hosi aat ba diak laran,\n\n3. Aman mesak ema ida, ema ida Aman Maromak.\nIta maun alin deit hosi uluk, hosi uluk kedas.`
  },
  {
    "id": 6,
    "category": "Final",
    "title": "HA'U HAKARAK DUNI TUIR NA'I JESUS",
    "content": `HA'U HAKARAK DUNI TUIR NA'I JESUS\n\n1. Ha'u hakarak duni tuir Na'i Jesus,\nha'u nia fuan metin ba Nia.\nBuat hotu-hotu husik ba kotuk,\ntuir Na'i Jesus mak ha'u hakarak.\n\n2. Jesus naroman leno ha'u nia dalan,\nmoris nafatin tuir Nia hanorin;\nbuat ida deit mak ha'u hakarak:\nmoris nafatin.\n\n3. Ha'u nia ksolok mak Na'i Jesus.\nNia futar lia bolu tuir ha'u nafatin.\nHusik buat hotu, hela hamutuk ho ha'u nafatin mai,`
  },
  {
    "id": 7,
    "category": "Final",
    "title": "IMI BA MUNDU TOMAK, NA'I?",
    "content": `IMI BA MUNDU TOMAK, NA'I?\nImi ba mundu tomak, ba haklaken Ha'u liafuan.\nImi ba mundu tomak, lori Ha'u nia domin ba.\n\n1. Tansa haruka ha'u, Na'i? ha'u nia ibun foer;\n\n2. Tansa haruka ha'u, Na'i, ha'u sei labarik ida;\ntansa haruka ne'e, Na'i.\n\n3. Ha'u mak ne'e, Na'i, atu tuir ita hakarak;\nha'u mak ne'e, Na'i.\n\n4. Ha'u sei ba, Na'i, tan ita la'o ho ha'u;\nha'u sei ba, Na'i.`
  },
  {
    "id": 8,
    "category": "Final",
    "title": "HARAIK LARAN MAI HA'U",
    "content": `HARAIK LARAN MAI HA'U\nHaraik laran mai ha'u, boot atu hadomi.\nHaraik laran mai ha'u, b'rani atu hafunu.\n\n1. Ema foun hatama moris foun,\nsira hodi hanorin lia Kristu.\nEma foun nebe hakarak moris\nla tauk atu kaer dalan naruk.\n\n2. Ema foun hafunu hodi hein\nsira kaer dalan atu buka lialos.\nema foun lakohi hela iha sola,\n\n3. Ema foun hadomi laran-hotu,\nlakohi fihir rai hodi hot-kit kulit,\nema foun hamutuk ho ema kiak,\natu fo ba malu ho hahan.`
  },
  {
    "id": 9,
    "category": "Final",
    "title": "BA MESAK NIA, OLARE",
    "content": `BA MESAK NIA, OLARE\n\n1. Kristu, ita nia belun, no matadalan;\nSoi ita ita hosi susar, haraik naroman.\nBa mesak Nia, olare, ha'u hana'i; belun.\n\n2. saran ha'u moris, olare, to'o mate nia belun;\nKristu, ita mestre, ita nia belun;\nknananuk ida ne'e nia mai hanorin.\n\n3. Monu ba susar laran ha'u ba nafatin,\ntamba ha'u buka Kristu ho laran metin.\n\n4. Mane no feto oan sira hare didiak\ntuir san hare iha rai mak moris lerek.\n\n5. Imi hare iha rai moris la ho Maromak, moris hun laek.`
  },
  {
    "id": 10,
    "category": "Final",
    "title": "FOINSA'E TIMOR OAN SIRA",
    "content": `FOINSA'E TIMOR OAN SIRA\nFoinsa'e Timor oan sira, neon ho laran ida\nmetinik hamrik no tahan atu sasin it'nia fiar.\nHari ksolok no Na'i nia Kreda ho rai Timor nia emar\nhafoun kmaan hafoun.\n\n1. Kristu: ita Boot mak ami roman;\nIta ami nia kbit no ami nia Maksoin!\n\n2. Hametin: ami hotu fiar atu hafoun rai ami.\nKristu: ita nia\nho ami nia neon badinas ho ami nia ran manas;\nhametin ho haburas Kreda rai Timor.`
  },
  {
    "id": 11,
    "category": "Final",
    "title": "BA KAER HA'U KNAAR",
    "content": `BA KAER HA'U KNAAR\nBa kaer Ha'u knaar iha mundu tomak;\nHa'u sei hamutuk ho Ha'u to'o rohan.\nOras to'o, Jesus bolu ha'u. Jesus, ha'u mak ne'e!\n\n1. Na'i Jesus bolu ha'u atu serbisu,\nnatar boot atu serbisu ha'u: Jesus, ha'u mak ne'e.\n\n2. Saran vida ba Na'i kmanek tebes,\nha'u mak ne'e.\nNa'i hanorin, Nia mak halo.\nSaran vida ba Na'i tamba domin,\nha'u oras to'o ona.\n\n3. O maun alin nebe husu tulun, keta taka a nia fuan;\no maun alin sei terus a nia sorin,\ntaka a nia sorin, to kedas a nia tulun.\n\n4. Hahalok diak sei halo iha rai ne'e,\nJesus fo kolen iha lalehan;\nNia sei kolen iha rai ne'e kedas,\nsei selu iha lalehan.`
  },
  {
    "id": 12,
    "category": "Final",
    "title": "EVANJELIU DEHAN KATAK",
    "content": `EVANJELIU DEHAN KATAK\n\n1. Evanjeliu dehan katak ita hotu sai maun alin,\ndehan katak tenke fahe tempu, tenke sai amigus;\ndehan katak tenke konfia malu, haksolok (2x) hamutuk\nno iha susar laran tenke buka Kristu. (2x)\n\nEvanjeliu halo tomak hananu obrigadu nafatin. (2x)\n\n2. Evanjeliu dehan katak tenke buka hari dame.\nEvanjeliu dehan katak domin tenke to de grasa.\nno ha'u nia moris ema kiak sei Kristu nia laran (2x)\n\n3. Evanjeliu dehan katak lalehan mai ona ba labarik sira,\ndehan katak tenke to obrigadu ba Maromak Aman\nno iha moris tomak hananu nafatin. (2x)\n\n4. Evanjeliu dehan katak tenke la'o moris hamutuk;\nto esperansa ba ema be tanis, la hare futuru;\ntenke to liberdade ba dadur; tenke moris hias\nJesus moris hias ona, Nia horik ho ita! (4x)`
  },
  {
    "id": 13,
    "category": "Final",
    "title": "GRANDE AMOR",
    "content": `GRANDE AMOR\nGrande, grande amor que por nós tem o Senhor.\nGrande, grande amor de Jesus sobre a Cruz.\nGrande como oceano, fundo como o mar,\nalto, alto como o azul do Céu: assim é o meu amor.`
  },
  {
    "id": 14,
    "category": "Final",
    "title": "SAKRIFISIU BOOT LIU HOTU",
    "content": `SAKRIFISIU BOOT LIU HOTU\nMissa Eukaristia. (2x)\n\n1. Sakrifisiu boot liu hotu: Missa ita, ita atu halo tuir. (2x)\nIta Kristu mak halo, husik mai ita, ita nia liafuan tuir. (2x)\nMaluk sira, it'namkari ona; lori Maromak ba ita uma;\nHela hamutuk ho ita. (2x)\n\n2. Ita nia Missa hotu ona, fila ba uma ho ksolok. (2x)\nIta tatoli ba ema hotu-hotu Kristu nia liafuan. (2x)`
  },
  {
    "id": 15,
    "category": "Final",
    "title": "VOS SEREIS MEUS AMIGOS",
    "content": `VOS SEREIS MEUS AMIGOS\nVos sereis meus amigos se fizerdes o que vos mando.\nVos sereis meus amigos.\n\n1. Dou-vos um mandamento novo\nque vos ameis uns aos outros como Eu vos amei.\n\n2. Nisto conhecerão que sois meus discípulos\nse vos amardes uns aos outros.\n\n3. Felizes os que levam vida sem mancha,\nque andam na lei do Senhor.\n\n4. Felizes os que guardam seus preceitos,\ne o buscam de todo o coração.`
  },
  {
    "id": 16,
    "category": "Final",
    "title": "E PELO MUNDO VOU",
    "content": `E PELO MUNDO VOU\n\n1. Quero ouvir Teu apelo, Senhor,\nao Teu convite de amor responder\ne na alegria Te quero servir\ne anunciar o Teu reino de amor.\nE pelo mundo vou cantando o Teu amor,\npois disponível estou para servir-Te, Senhor. (2x)\n\n2. Dia a dia Tua graça me das\nnela se apoia o meu caminhar.\nSe estás no meu lado, Senhor,\no que então poderei eu temer?`
  },
  {
    "id": 17,
    "category": "Final",
    "title": "IT'NIA REINU, NA'I, MAK JUSTISA",
    "content": `IT'NIA REINU, NA'I, MAK JUSTISA\nIt'nia reinu, Na'i mak justisa\nIt'nia reinu, Na'i mak lialos.\nIt'nia reinu, Na'i mak salvas,\nIt'nia reinu, Na'i mak salvacao.\n\n1. It'nia reinu manan iha krus.\nIt'nia reinu halibur it'nia terus povu.\nIt'nia reinu mak paz no hadomi.\n\n2. Ema hotu nebe ho aten b'rani nebe\nsei buka harii it'nia reinu ho terus:\nsei hare, hodi harii iha paz no hadomi.`
  },
  {
    "id": 18,
    "category": "Final",
    "title": "MALUK TIMOR OAN",
    "content": `MALUK TIMOR OAN\n\n1. Maluk Timor oan hotu, it'namkari ona;\nneon ksolok klamar mos, hahi Na'i Maromak.\nTatoli ba rai hotu katak ba ema tomak,\nMaromak nia futar lia, Maromak nia hadomi.\n\n2. Hadomi ema hotu, halo diak ba ema tomak.\nMaromak nia tutor lia, Maromak nia hadomi.`
  },
  {
    "id": 19,
    "category": "Final",
    "title": "RAI SIRATASI BALUN",
    "content": `RAI SIRATASI BALUN\n\n1. Rai sira tasi balun, imi rona Ha'u ba!\nPovu sira hosi dook, se tilun ba ha'u lian.\nNa'i bob, ba haklaken Nia liafuan ba mundu.\n\n2. Tuir deit ita hakarak fo'er no ha'u nanal la surik los,\nmaibe Na'i horik (ho) ha'u, hamahan ho nia liman.\nNia halo ha'u nanal sai nudar surik kroat.\nNia temi ha'u naran. Haruka ha'u, Na'i.`
  },
  {
    "id": 20,
    "category": "Final",
    "title": "VAI TRABALHAR",
    "content": `VAI TRABALHAR\nVai trabalhar pelo mundo fora!\nEu estarei até ao fim contigo,\nesta na hora, o Senhor me chamou:\nSenhor, aqui estou!\n\n1. O Senhor me chamou a trabalhar,\na messe é grande a ceifar,\na ceifar, o Senhor me chamou:\nSenhor, aqui estou!\n\n2. Todo o bem que na terra alguém fizer,\nJesus no céu vai a premier\ncem por um, ja na terra Ele vai dar,\nno céu vai premier.\n\n3. Teu irmão a tua porta vem bater\nnão vais fechar teu coração;\nteu irmão vai logo socorrer.`
  },
  {
    "id": 21,
    "category": "Final",
    "title": "KRISTU, NA'I LIURAI",
    "content": `KRISTU, NA'I LIURAI\n\n1. Kristu, Na'i Liurai (3x)\nKristu, Na'i Liurai\n\n2. Ita ami nia Maun (3x) ita ami nia Maun (3x)\nKristu, Kristu, Kristu, ami nia Maun\n\n3. Fo mai ami ita nia kbit Kristu (4x)\nFo mai ami ita nia domin Kristu (6x)\nFo mai ami ita nia kbit Kristu\n\n4. Atu ami bele hamutuk Kristu (4x)\nAtu ami sai belun maun alin Kristu (6x)\nAtu ami hamutuk\n\n5. O mai, Na'i Jesus, mai\nMai, Na'i Jesus,\nO mai, Na'i, atu soi ami\nMai, Na'i Jesus (2x)\nO mai, Na'i Jesus\nMai, Na'i Jesus, mai, mai, mai,`
  },
  {
    "id": 22,
    "category": "Final",
    "title": "MAIS OUTRO DIA FINDOU",
    "content": `MAIS OUTRO DIA FINDOU\n\n1. Mais outro dia findou,\neu venho te-ver para conversar.\nMais outra noite chegou,\neu venho agradecer antes de repousar.\nAndei um dia inteiro procurando o meu irmão;\neu quis ser instrumento do Teu amor, do Teu perdão.\n\n2. Muito obrigado, Senhor, pelo amor que eu ensinei,\npelo amor que eu recebi, muito obrigado, Senhor,\npelo amor que eu soube, por sorrisos que sorri.\n\n3. Sou peregrino do amor\nvenho agradecer no dia que vivi\nhouve tristezas, Senhor, mas eu não quis sofrer,\npois caminhei em Ti.`
  },
  {
    "id": 23,
    "category": "Final",
    "title": "KRISTU, O HA'U NIA DALAN",
    "content": `KRISTU, O HA'U NIA DALAN\nKristu, O ha'u nia dalan; Kristu be naroman ha'u fuan.\nO mods hori iha O hateten, O "Barak la kohi tuir,\nbarak ba nakukun To'o ikus sala barak."\n\n1. Se Kristu husu ba ha'u: "Mundu ne'e oin sa los?"\nHa'u hatan ba ha'u Maun: "Buat barak mak la los."\n\n2. Buat barak la'o la los, tamba ha'u, tamba mak ita;\ntamba barak.\n\n3. Tamba ha'u, tamba ita, ema mundu rai klaran terus\ntamba ha'u, tamba ita, ita hotu nia hahalok.`
  },
  {
    id: 139,
    category: "Latin",
    title: "KYRIE",
    content: `(Grego)
Kyrie, eleison
Christe, eleison
Kyrie, eleison`
  },
  {
    id: 140,
    category: "Latin",
    title: "GLORIA",
    content: `Gloria in excelsis Deo
et in terra pax hominibus bonae voluntatis.
Laudamus te,
benedicimus te,
adoramus te,
glorificamus te,
gratias agimus tibi,
propter magnam gloriam tuam,
Domine Deus, Rex caelestis,
Deus Pater omnipotens.
Domine Fili unigenite Jesu Christe,
Domine Deus, Agnus Dei, Filius Patris,
qui tollis peccata mundi, miserere nobis.
Qui tollis peccata mundi,
suscipe deprecationem nostram.
Qui sedes ad dexteram Patris,
miserere nobis.
Quoniam tu solus sanctus,
tu solus Dominus,
tu solus altissimus, Jesus Christe,
cum sancto Spiritu, in gloria Dei Patris.
Amen.`
  },
  {
    id: 141,
    category: "Latin",
    title: "CREDO NICENO",
    content: `Credo in unum Deum
Patrem omnipotentem,
Factorem caeli et terrae,
visibilium omnium et invisibilium
Et in unum Dominum, Iesum Christum,
Filium Dei unigenitum
Et ex Patre natum, ante omnia saecula
Deum de Deo, lumen de lumine,
Deum verum de Deo vero
Genitum, non Factum, consubstantialem Patri:
Per quem omnia facta sunt
Qui propter nos homines,
Et propter nostram salutem,
Descendit de caelis

Et incarnatus est de Spiritu Sancto,
Ex Maria Virgine: et homo factus est
Crucifixus etiam pro nobis:

Sub Pontio Pilato,
Passus et sepultus est
Et resurrexit tertia die,
Secundum Scripturas
Et ascendit in caelum:
Sedet ad dexteram Patris
Et iterum venturus est cum gloria,
Iudicare vivos et mortuos:
Cuius regni non erit finis
Et in Spiritum Sanctum,
Dominum et vivificantem:
Qui ex Patre Filioque procedit
Qui cum Patre et Filio,
Simul adoratur, et conglorificatur:
Qui locutus est per Prophetas
Et unam, sanctam, catholicam,
Et apostolicam Ecclesiam
Confiteor unum baptisma,
In remissionem peccatorum
Et exspecto resurrectionem mortuorum
Et vitam venturi saeculi
Amen.`
  },
  {
    id: 142,
    category: "Latin",
    title: "SANCTUS",
    content: `(Latim)
Sanctus, Sanctus, Sanctus
Dominus, Deus Sabaoth
Pleni sunt caeli et terra gloria tua
Hosanna in excelsis
Benedictus qui venit in nomine Domini
Hosanna in excelsis`
  },
  {
    id: 143,
    category: "Latin",
    title: "AGNUS DEI",
    content: `Agnus Dei
Qui tollis peccata mundi
miserere nobis
Agnus Dei
Qui tollis peccata mundi
miserere nobis
Agnus Dei
Qui tollis peccata mundi
Dona nobis pacem`
  },
  {
    id: 144,
    category: "Adventu",
    title: "ALELUIA, VIRJEM MARIA SEI KOUS",
    content: `Aleluia, aleluia, aleluia, aleluia, Virjem Maria sei kous
no hahoris Oan Mane ida.
Sei hanaran Emmanuel, katak,
Maromak hamutuk ho ita.`
  },
  {
    id: 145,
    category: "Adventu",
    title: "ITA HANANU HAKSOLOK",
    content: `1. Na’i Jesus, ami ba hakbesik Ita,
   Atu husu paz, paz be Ita haraik;
   Atu husu domin, moris ho perdaun
   Be lori ami ba salvasaun
Ita hananu haksolok, harohan,
Maranatha, no moris neon metin,
Aleluia, hakilar ba mundu: Kristu sei mai. (2x)
2. Na'i Jesus, ami ba hakbesik Ita,
   Ita mak moris, Maromak, dalan los;
   Ita mak ksolok, kbiit no lialos.
   Ita hametin ami nia ksolok.
3. Na’i Jesus, ami ba hakbesik Ita,
   Ita ami nia kmanek,
   kbiit no aten b'rani;
   Ita mak belun los ba natatin.
   Ita hametin ami an tomak.`
  },
  {
    id: 146,
    category: "Adventu",
    title: "MAI, MAI, NA’I JESUS",
    content: `Mai, mai, Na'i Jesus: mai Na’i, ami hein Ita.
Mai, mai, Na’i Jesus: la lais, hiit an mai.
1. Rai ne'e mate malirin;
   Ami klamar lakon nia manas.
   Maun alin la hadomi;
   Rai ne'e la iha domin.
2. Mundu ne'e iha nakukun;
   Kuran dame, kuran naroman.
   Ema tomak buka tau neon,
   Buka fiar Ita Boot.

3. Mundu ne'e kuran moris;
   Rai ne'e kuran naroman
   Mundu ne'e kuran lalehan;
   Ema tomak buka Ita Boot.`
  },
  {
    id: 147,
    category: "Adventu",
    title: "RAI HOTU TERUS TEB-TEBES",
    content: `1. Rai hotu terus teb-tebes. Mai, mai, sadia ami.
   Ba Na’i Maromak hakilar: Mai, mai, sadia ami.
Rona, Maromak, ema hakilar, tanis.
Rona, Kristu, mai, mai, sadia ami.
2. Rai tomak iha susar laran...
   Dader, kalan ema tanis...
3. Ran fakar, ema kanek, mate...
   Rai funu seidauk hotu deit...
4. Halai lemo tetuk, foho...
   Hahan kuran, ema mutuk...
5. La sura mate, taluk kiak...
   Hakoi, dadur, baku, oho...`
  },
  {
    id: 148,
    category: "Adventu",
    title: "QUANDO VIRA",
    content: `1. Quando vira, Senhor, o dia
   en que aparece o Salvador
   e soe brado de alegria
   nasceu do mundo o Redentor?
O ceus que ird se faga em salvagao e em graga.
2. Filha dos reis, O Virgem pura
   mostra-te sai da escuridao;
   em Ti com seres criatura
   um Deus quer ter sua mansdo.

3. Tristes mortais de Addo nascido
   d'arvore ma, ramo infeliz:
   eis quantos bens sdo prometidos
   por Deus que nunca se desdiz.`
  },
  {
    id: 149,
    category: "Quaresma",
    title: "HANAI', HAHI BA ITA BOOT",
    content: `Hana'i, hahi ba Ita Boot, Jesus Kristu, ami Na'i.
1. Ema atu moris la kuran mesak paun
   Nia mos kuran Liafuan hosi Maromak
2. Laran moras ba imi nia sala;
   Maromak nia reinu besik hela.
3. Nia lakohi ema aat atu mate;
   Hakarak nia sai diak no moris.`
  },
  {
    id: 150,
    category: "Quaresma",
    title: "HANOIN, SADIA",
    content: `Hanoin, sadia, ha'u Aman Maromak,
Perdua ha'u nia sala
1. Na'i, foti ha'u lia ba Ita ho neon ho laran;
   Na'i, rona ha'u lia, haraik tulun mai ha'u.
2. Ho laran luak, Na'i, se tilun mai ha'u ata;
   ha'u lia husu tulun, rona ha'u nia orasaun.
   Hanoin karik sala, Na'i, se mak bele soi an.
   Maibe iha Na'i ami hetan perdua,
   ami hamulak ho laran.
4. Ha'u klamar hein Maromak bele hot-hotu.
   Ha'u klamar fiar Nia tutor lia ho laran metin.
5. Ha'u klamar buka hein Maromak
   diak liu ema hein rai hun mutin.
6. Hanesan ema hein loron atu sa'e
   nune'e ita hein ita Na'i tan Nia laran luak.`
  },
  {
    id: 151,
    category: "Quaresma",
    title: "HA’U AMAN, BA ITA LIMAN",
    content: `Ha'u Aman, ba Ita liman, ha'u klamar hasa'e.
1. Na'i tahan ha'u; ha'u sei la kole leet.
   Na'i laran luak, sadia ha'u.
   Ba Ita liman ha'u klamar hasa'e.
   Na'i, ha'u nia Maromak, sadia ha'u.
2. Ema aat sira hamoe ha'u, maluk sira hewai ha'u;
   ha'u belun sira to todan. Ema ida la besik ha'u,
   haluha ha'u nudar matebian ida.
   Hewai ha'u nudar buat aat ida.
3. Na'i, ha'u neon metin ba Ita,
   Ita ha'u nia Maromak.
   Ba ita liman ha'u moris hasa'e,
   sadia ha'u husi ema aat liman.
4. Ita tutor oin nabilan mai ha'u
   hodi mate iha krus.
   Tan ita laran luak sadia ha'u;
   laran metin haksolok, imi be fiar Maromak`
  },
  {
    id: 152,
    category: "Quaresma",
    title: "HA’U FILA FILA BA HO MAROMAK",
    content: `1. Ha'u fila fila ba ho Maromak,
   ha'u fila fila ba tau hela.
   Ha'u domin wain atu fo;
   ha'u fila fila ba ha'u Maromak.
Reinu lalehan fo'o ona, reinu be fo perdaun;
halo penentensia, nakfila fuan ba.
2. Ha'u fila fila ba atu moris,
   ha'u fila fila ba atu hela;
   la ho Nia moris katak mate,
   ha'u fila fila ba atu moris.
3. Ha'u fila fila atu mai,
   ha'u fila fila ba atu hadomi,
   ha'u domin wain atu fo,
   ha'u fila fila ba atu hela.`
  },
  {
    id: 153,
    category: "Quaresma",
    title: "HA’U KLAMAR TAU NEON BA HA’U NA’I 331",
    content: `Ha'u klamar tau neon ba ha'u Na'i;
Maromak mak ha'u nia laran metin
1. Na'i, foti ha'u lia ba ita ho neon ho laran;
   Na'i, rona ha'u lian,
   Haraik tulun mai ha'u; rona ha'u susar.
2. Ita hanoin karik ami sala, Na'i, se mak bele soi an?
   Mai be iha Na'i ami hetan perdua,
   Tan nee ami hamulak ho laran.
3. Ha'u klama, ha'u hein Maromak.
   Ha'u fiar nia liafuan;
   Ha'u klamar buka Maromak
   diak liu ema hein rai hun mutin.
4. Hanesan ema hein loron atu sae
   Nune'e Israel hein nia Na'i.
   Tan Na'i laran luak;
   Haraik maksoin wain tebes`
  },
  {
    id: 154,
    category: "Quaresma",
    title: "HA’U NIA HENA SIRA FAHE BA MALU",
    content: `Ha'u nia hena sira fahe ba malu:
Ha'u nia tunika sira dada sorti.
1. Ha'u Na'i, Ha'u Na'i, hare mai ha'u;
   tan sa husik ha'u mesak?
   Hosi dook ha'u harohan hodi terus;
   Na'i, ha'u hakilar iha loron Ita la rona;
   iha kalan Ita la lidu ha'u.
2. Sira hakilar, Ita boot soi sira;
   iha Ita sira hein, la hein leet deit.
   Ami Aman, sira fiar Ita boot;
   fiarkatak Ita boot sei soi sira.
3. Haraik tutor tilun hodi rona ha'u;
   ha'u hasae lia ba Ita boot
   maibe ha'u ular ida, laos ema;
   sira hamoe hodi hasara ha'u.`
  },
  {
    id: 155,
    category: "Quaresma",
    title: "HEBREUS OAN SIRA",
    content: `Hebreus oan sira lori oliveira sanak
La'o tuir hamutuk Na'i:
haklalak hodi dehan: Hosana aas ba!
1. Raiklaran no buat tomak Maromak nian,
   Mundu no buat moris hotu, Maromak, Nia soi.
2. Maromak hatur rai iha tasi foho;
   Hametin rai iha be leten.
3. Ema se bele sa'e iha Maromak nia foho;
   Ema se bele horik iha Nia kadunan santu.
4. Ema nebe liman mos, fuan mos.
   La temi leet Maromak naran, la jura falsu.
   Ema ne'e Maromak fo bensa;
   Na'i Maksoin fo kolen.
5. Ema sira ne'e mak buka Maromak;
   Sira buka Jacob nia Maromak futar oin.
6. Lake odamatan, foti aas odamatan tuan;
   Liurai boot atu tama.
8. Se los mak liurai boot; Ida be makaas iha funu.`
  },
  {
    id: 156,
    category: "Quaresma",
    title: "HEBREUS OAN SIRA HANAHE",
    content: `Hebreus oan sira hanahe sira hena iha rai
No haklaken, hananu: Hosana David nia Oan!
Diak tebes Ida be mai hodi Na'i nia naran.
1. Povu tomak hawelok Nia, basa liman
   Haklaken ba Maromak hodi knananuk ksolok nian.
   Tan Nia as no Boot liu hot-hotu Liurai rai klaran tomak.
2. Tan povu hotu iha nia ukun;
   Halo reinu hotu kiik liu ita.
   Nia mak haraik rahun kmanek ba ita Tuir kmanek
   Jacob, nia doben.
3. Maromak sa'e daudaun hodi hawelok no ksolok.
   Na'i sa'e daudaun hodi knananuk. Hananu ba ita
   Maromak, hananu! Hananu ba ita Liurai, hananu!
4. Maromak Liurai mundu tomak nian
   Tan ne'e hananu knananuk ida ba Na'i
   Maromak Liurai nasaun tomak;
   Maromak tur iha fatin aas no lulik
5. Liurai sira povu nian, halibur an
   Povu Maromak Abrado nian, halibur an!
   Buat tomak iha rai ne'e Nia ukun,
   Nia ne'e aas teb-tebes.
6. Gloria ba Aman no Oan No ba Espiritu Santu.
   Nudar hori uluk, oras ne'e, Tinan ba tinan. Amen.`
  },
  {
    id: 157,
    category: "Quaresma",
    title: "HOSANA, KRISTU MANAN",
    content: `Hosana, Kristu manan; Iha krus, Kristu sei soi ita. (2x)
1. Maun alin, hamutuk hadomi; hananu ba ita Na'i.
   Knananuk atu hahi, Jesus Kristu manan.
2. Hamutuk hadomi malu, hadomi Na'i Maromak.
   Ho Kristu to'o Trindade, ho Kristu to'o lalehan.
3. Hananu, buat moris tomak, knananuk ba Kriador.
   Hosana iha leten aas, hosana ba Kristu Na'i.
4. Hakarak mate iha krus, tan krus halo ita moris.
   Jesus iha ita leet halo Nia Kreda hamutuk.`
  },
  {
    id: 158,
    category: "Quaresma",
    title: "IHA ITA KRUS, NA'I, AMI HANA I '",
    content: `Iha Ita krus, Na'i, ami hana'i, hahi,
Hawelok hodi knananuk. Ita soi ami liu hosi krus;
Tamba Maromak domin rohan laek,
Nune'e moris tama iha mundu.

1. Na'i, sadia ami tan Ita laran luak,
   Haraik tulun mai ami no perdua ami salan.
2. Atu ema tomak hatene It'dalan
   Sira bele hetan salvasaun
3. Ema tomak haksolok hananu
   Hahi no nanai Ita naran.
4. Ita ukun povu ho domin
   Nudar bibi atan diak ba nia bibi.
5. Buat tomak haklaken
   Maromak nia hahalok
   Hosi beiala to'o bei oan sira.`
  },
  {
    id: 159,
    category: "Quaresma",
    title: "IHA ITA LIMAN, HA U AMAN",
    content: `Iha Ita liman, ha'u Aman, Ha'u saran ha'u nia espiritu.
1. Na'i, hadook ha'u hosi susar tomak
   Tan Ita mak ha'u nia tulun.
2. Ba Ita liman ha'u klamar hasa'e,
   Na'i, ha'u nia Maromak, sadia ha'u!
3. Ema aat sira hamoe ha'u, maluk sira hewai ha'u.
4. Ema ida la besik ha'u, hewai ha'u nudar buat aat ida.
5. Ba Ita liman ha'u moris hasa'e; sadia ha'u hosi ema aat.
6. Ita tutor oin nabilan mai ha'u, tan Ita laran luak.
7. Laran metin, haksolok, imi be fiar Maromak.`
  },
  {
    id: 160,
    category: "Quaresma",
    title: "ITA HAROHAN BA ITA NA'I",
    content: `Ita harohan ba ita Na'i laran luak:
Na'i, sadia ami; Na'i, sadia ami.
1. Na'i laran sadia no hadomi; Na'i, perdua.
2. Na'i laran sadia no hadomi; Na'i, rona ami.
3. Tamba sala no hahalok aat tomak,
4. Ba funu maluk nia babeur,
5. Ba rai hirus no laran aat ba malu,
6. Ba hahalok foer tomak,
7. Ba moras, hamlaha no ba funu,
8. Ba susar tomak hot-hotu,
9. Hosi kastigu infernu nian,
10. Tan Ita nia Misteriu halo an ba Mane,
11. Tan Ita nia terus no mate iha krus,
12. Tan Ita nia mods hias hosi mate`
  },
  {
    id: 161,
    category: "Quaresma",
    title: "ITA NIA MAKSOIN MAI HOSI KRUS",
    content: `Ita nia Maksoin mai hosi krus.
Jesus, ita Na'i, nia krus.
1. Na'i hanoin ita, haraik bensa mai ita;
   Nia futar oin nabilan mai ita, sadia ita.
2. Atu iha rai tomak ema hatene Nia dalan;
   Iha nasaun hotu ema hatene nia Maromak.
3. Maromak, ema hotu hahi Ita Boot;
   Ema tomak haklaken Ita gloria.`
  },
  {
    id: 162,
    category: "Quaresma",
    title: "JERUSALEM",
    content: `Jerusalem, Jerusalem, host dalan boot,
Jerusalem Kristu sai, lori krus. (2x)
1. Na'i Jesus, ami ema sala nain lakohi lori krus.
   Na'i Jesus, ami ema sala nain hakribi Ita Boot.
Ema se hakarak tuir Ha'u, sei hewai an,
Kaer nia krus, la'o tuir Ha'u.
2. Na'i Jesus, ami ema foti an hewai ema kiik.
   Na'i Jesus, ami buka deit riku, lakohi Ita Boot.
3. Na'i Jesus, iha mundo raiklaran bosok, funu, nook.
   Na'i Jesus, ema hotu hakribi krus, hewai ukunfuan.`
  },
  {
    id: 163,
    category: "Quaresma",
    title: "NA'I JESUS, AMI HAHI",
    content: `Na'i Jesus, ami hahi. (2x)
1. Kristu halo tuir Aman to'o mate hodi mate iha krus.
2. Tan ne'e Maromak hahi Nia,
   fo naran ida boot liu naran hot-hotu.`
  },
  {
    id: 164,
    category: "Quaresma",
    title: "NA'I JESUS, AMI MAKSOIN",
    content: `Na'i Jesus, ami Maksoin, iha Ita ami nia salvasaun.
La'o lemo rai, la'o dalan, buka Ita Boot.
1. Ami halibur iha Ita meja atu hamanas ami an tomak.
   Hodi Ita tutor Isin, Ita ran, sei soi ami.
2. Ami sei hetan tali Ita iha Ita knaar santu;
   Sei hemu Ita tutor Ran, fiar sei soi ami.
3. Ami Ita povu santu be la'o hamutuk;
   Ita sei tama ami laran, Ita domin sei dada ami.
4. Ita ami dalan, Ita ami esperansa;
   Moris no lialos, nafatin ba nafatin. (Amen, aleluia)`
  },
  {
    id: 165,
    category: "Quaresma",
    title: "PERDUA, NA'I, PERDUA",
    content: `Perdua, Na'i, perdua. Ami fiar Ita Boot.
1. Na'i, sadia ami tan Ita laran luak
   Tan Ita laran luak, kasu ami sala.
2. Hamos ha'u nia hahalok aat, kasu ha'u nia sola hotu.
3. Ha'u fihir ba ha'u sola; Ha'u sala hetan nafatin iha ha'u oin.
4. Na'i, ha'u sala hasouru Ita. Ha'u halo sala iha Ita oin.
5. Maromak, haraik neon foun mai ha'u; Halo ha'u klamar nabilan.
6. Keta soe ha'u hosi ita tutor oin; Keta hadook ha'u hosi Ita neon.`
  },
  {
    id: 166,
    category: "Quaresma",
    title: "PERDUA, NA'I JESUS",
    content: `Perdua, Na'i Jesus, perdua It'nia povu.
Ita mak soi ami ho It'Boot nia tutor ran santu.
1. Na'i, ha'u foti ha'u lia ba ita ho neon ho laran.
   Na'i, rona ha'u lia, haraik tulun mai mai ha'u.`
  },
  {
    id: 167,
    category: "Quaresma",
    title: "POVU DOBEN",
    content: `Povu doben, Ha'u halo sa?
Halo sa aat ba o? Dehan took ba!
1. Tinan hat nulu Ha'u tulun imi; fo han imi hodi monan;
   Lori imi to'o rai diak; Maibe imi hedi Ha'u ba krus.
   Buat diak sa Ha'u la halo ba imi?
   Ha'u hadomi, Ha'u hare diak tebes
   Maibe imi to naan moruk, Tua sin mai Ha'u,
   Sona Ha'u sorin ho diman kroat.
3. Tan imi Ha'u to todan ba povu Egiptu,
   Atu hasai imi hosi sira liman maibe imi laran aat,
   Fo Ha'u ba terus, fo ba mate.
4. Ha'u la'o uluk leno dalan hanesan kalohan nabilan,
   Atu leno dalan naroman ba imi, maibe imi tutu, lori Ha'u ba Pilatus.
   Iha raifuik maran tinan hatnulu nia laran Ha'u fo han imi ho Mana,
   maibe imi, Ha'u belkun, Tuku, basa, fo terus Ha'u.
   Tinan hirak iha raifuik maran Hosi fatuk Ha'u halo be suli,
   maibe imi, Ha'u doben, fo hemu Ha'u ho tua sin no naan moruk.`
  },
  {
    id: 168,
    category: "Quaresma",
    title: "SADIA AMI, NA'I, AMI NIA MAKSOIN",
    content: `Sadia ami, Na'i, ami nia Maksoin.
1. Kristu halo an ba Mane, moris nudar ema.
2. Kristu iha moris tomak hadomi tebes ema.
3. Kristu saran an atu soi ema.
4. Kristu lori krus ba to'o foho Kalvario.
5. Kristu, mate tiha, moris hias fali.`
  },
  {
    id: 169,
    category: "Paskua",
    title: "ALELUIA, MAUN ALIN SIRA",
    image: "paskua.png",
    content: `Maun alin sira:
Ita hotu ba hananu ba Ita Na'i no Ita Maromak,
nebe hatene manan mate hodi sei
furak liu tan hosi rate atu la mate teni.`
  },
  {
    id: 170,
    category: "Paskua",
    title: "KRISTU MORIS HIAS FALI",
    content: `Kristu moris hias fali, aleluia, aleluia.
1. Hananu ba Na'i knananuk foun ida.
   Hananu ba Na'i, raiklaran tomak.
2. Hananu ba Na'i, hahi Nia naran.
   Haklaken loron-loron Nia salvasaun
3. Fo hatene Nia gloria ba gentiu sira
   Ba povu tomak Nia hahalok kmanek`
  },
  {
    id: 171,
    category: "Paskua",
    title: "KRISTU NIA ROMAN",
    content: `Kristu nia roman leno raiklaran tomak, aleluia, aleluia.
1. Hananu ba Na'i knananuk foun ida.
   Hananu ba Na'i raiklaran tomak.
   Hananu ba Na'i, hahi Nia naran.
2. Umakain rai tomak hakbesik ba Na'i.
   Hasa'e ba Na'i gloria no kbiit;
   hasa'e ba Na'i, hahi Nia naran.
3. Haklaken ba gentiu sira: Na'i mak liurai.
   Nia harii rai ne'e, sei la monu;
   Nia ukun povu sira ho justisa.
4. Hasa'e buat karan, lori mai to'o Nia tutor oin,
   adora Maromak iha Nia uma santu;
   Iha Nia tutor oin rai tomak nakdedar.`
  },
  {
    id: 172,
    category: "Paskua",
    title: "MORIS HIAS ONA, ALELUIA",
    content: `Moris hias ona, aleluia.
Kristu Jesus iha ita leet.
1. Tan ne'e ha'u hamriik, aleluia,
   Iha ita oin, Jerusalem.
2. Jerusalem, cidade boot no furak;
   sidade harii met-metin, aleluia,
   povu sira hakat ba ita.
3. O nia kota laran be hakmatek;
   o nia uma laran diak nakonu, aleluia;
   tan ita Na'i Maromak.`
  },
  {
    id: 173,
    category: "Paskua",
    title: "NA'I MANAN MATE",
    content: `Na'i manan mate: gloria, gloria ba Na'i!
Na'i manan mate, Na'i manan terus:
Ita hotu mai, haksolok.
1. Ema, rai, lalehan, tasi, aleluia.
   Haksolok no hananu, aleluia,
   Ita hamutuk hodi hananu,
   Ita haksolok loron ohin
   Ita Na'i moris hias, aleluia.
2. Ema tomak sei hatene, aleluia,
   katak Jesus moris hias, aleluia.
   Mundu tomak sei fiar duni
   katak Jesus sei soi ita.
   Ksolok foun sei mosu mai, aleluia.`
  },
  {
    id: 174,
    category: "Paskua",
    title: "NA'I MORIS HIAS, ALELUIA",
    content: `Na'i moris hias (3x) Aleluia (4x) Na'i moris hias.
1. Oh mate, o kbiit iha nebe?
   O beran no diak, iha nebe?
2. Ksolok, ita hotu haksolok
   tan Kristu Maksoin moris hias ona.
3. Mate eh moris hamutuk ho Kristu,
   tan ne'e ita hananu, aleluia.
4. Agradese ba Aman Maromak
   tan soi ita hotu ho Kristu nia mate.`
  },
  {
    id: 175,
    category: "Paskua",
    title: "SEI HANANU DAME, SEI HANANU",
    content: `1. Sei hananu dame, sei hananu.
   Sei hananu domin, sei hananu.
   Ba ema kiak sira, sei hananu.
   Ksolok sira nian, sei hananu.
   Aleluia, aleluia, Kristu moris hias fali. (2x)
2. Ba mundu raiklaran, sei hananu.
   Nia halo ha'u moris, sei hananu.
   Ba ema raiklaran, sei hananu.
   Be buka justisa, sei hananu.
3. Ba Kristu Jesus, sei hananu.
   Ha'u nia liberdade, sei hananu.
   Ba ema rai tomak, sei hananu.
   Maromak ha'u Aman, sei hananu.`
  },
  {
    id: 176,
    category: "Espiritu Santu",
    title: "VENI CREATOR SPIRITUS",
    content: `1. Veni Creator Spiritus mentes tuorum visita; imple superna gratia quae Tu creasti pectora. 2. Qui diceris Paraclitus, altissimi donum Dei;
tons vivus, ignis, caritas et spiritalis unctio.
3. Tu septiformis munere, digitus paternae dexterae; Tu rite promissum Paths, sermone ditans guttura. 4. Accende lumen sensibus, infunde amorem cordibus. infirma nostri corporis, virtute firmans perpeti. 5. Hostem repellas longius, pacemque dones protinus; Ductore sic Te praevio, vitemus omne noxium. 6. Per Te sciamus da Patrem, noscamus atque Filium, Teque utriusque Spiritum credamus omni tempore. 7. Deo Patri sit gloria et Filio, qui a mortuis
surrexit, ac Paraclito in saeculorum saecula. Amen.`
  },
  {
    id: 177,
    category: "Espiritu Santu",
    title: "O ESPIRITO DO SENHOR",
    content: `O Espirito do Senhor renova a face da terra. Aleluia, aleluia.
1. Vinde Espirito Santo, vinde Amor ardente, acendei na terra Vossa luz fulgente. 2. Vinde, Pai dos pobres na dor e aflies, vinde encher de gozo nossos coraes. 3. Benfeitor supremo em todo o momenta habitando em nos, sois o nosso alento.
4. Descanso na luta e na paz encanto, no color sois brisa, conforto no pronto. 5. Lavai nossas manchas, a aridez regai; sanai os infermos e a todos salvai. 6. Abrandai durezas para os caminhantes; animai os tristes, guiai os errantes.`
  },
  {
    id: 178,
    category: "Espiritu Santu",
    title: "HARUKA ITA BOOT NIA ESPIRITU",
    content: `Haruka Ita Boot nia Espiritu halo foun hikas rai tomak.
1. Ha'uklamarhawelokha'uNa'i.
Na'i, ha'u nia Maromak, Ita Boot tebes. Boat hotu Ita Boot hakiak nakonu iha rai. 2. Ita Boot hasai karik Ita Boot nia Espiritu, sira mate, sira fila ba rai rahun; haruka Ita Boot nia Espiritu sira moris. Hafoun rai tomak nia ilas.
3. Na'i nia gloria sei ba nafatin.
Na'i haksolok ho buat hotu Nia halo. Na'i haksolok ho ha'u nia hananu. Ha'u nia ksolok iha ha'u Na'i.`
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
  "Responsorial",
  "Aleluia",
  "Ofertorio",
  "Santu",
  "Komunhao",
  "Asaun de Grasas",
  "Final",
  "Latin",
  "Adventu",
  "Quaresma",
  "Paskua",
  "Espiritu Santu",
  "Maria",
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
    "paskua.png": imgPaskua,
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
        s.id.toString().includes(searchTerm.trim()) ||
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
          view === "home" ? "HAROHAN BA NAI"
            : view === "misa" ? "Misal Romano"
              : view === "terso" ? "Terço da Misericórdia"
                : view === "prayers" ? "ORASAUN"
                  : view === "songs" ? "KNANANUK SIRA"
                    : view === "rosary" ? "ROZARIU"
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
                <span className="font-bold text-gray-700">Orasaun</span>
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
                <img src={imgReza} alt="Orasaun" className="rounded-xl shadow-sm" style={{ maxWidth: "260px", width: "100%" }} />
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
                <p className="text-base italic text-gray-700 font-serif leading-snug">"Ema nebe hananu, reza dala rua"</p>
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
                      <h3 className="font-bold text-gray-800">{song.id}. {song.title}</h3>
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
                          className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${isOpen ? "rotate-90" : ""
                            }`}
                        />
                      </button>

                      {/* Songs list - shown when open */}
                      {isOpen && songsInCategory.length > 0 && (
                        <div className="border-t border-gray-100">
                          {/* Category Header Images */}
                          {category === "Gloria" && (
                            <div className="flex justify-center py-3 px-4">
                              <img src={imgGloria} alt="Gloria" className="rounded-xl shadow-sm" style={{ maxWidth: "240px", width: "100%" }} />
                            </div>
                          )}
                          {category === "Espiritu Santu" && (
                            <div className="flex justify-center py-3 px-4">
                              <img src={imgEspirituSantu} alt="Espiritu Santu" className="rounded-xl shadow-sm" style={{ maxWidth: "240px", width: "100%" }} />
                            </div>
                          )}
                          {songsInCategory.map((song, index) => (
                            <div
                              key={song.id}
                              onClick={() => navigateToContent(song, "songs")}
                              className={`flex items-center justify-between px-4 py-3 cursor-pointer hover:bg-pink-50 transition-colors ${index !== songsInCategory.length - 1
                                ? "border-b border-gray-50"
                                : ""
                                }`}
                            >
                              <h3 className="font-semibold text-gray-700 text-sm">
                                {song.id}. {song.title}
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
          { id: "prayers", label: "ORASAUN", icon: Book },
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
