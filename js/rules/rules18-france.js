// OpenAero rulesYY-France file

// This file is part of OpenAero.

//  OpenAero was originally designed by Ringo Massa and built upon ideas
//  of Jose Luis Aresti, Michael Golan, Alan Cassidy and many others. 

//  OpenAero is free software: you can redistribute it and/or modify
//  it under the terms of the GNU General Public License as published by
//  the Free Software Foundation, either version 3 of the License, or
//  (at your option) any later version.

//  OpenAero is distributed in the hope that it will be useful,
//  but WITHOUT ANY WARRANTY; without even the implied warranty of
//  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
//  GNU General Public License for more details.

//  You should have received a copy of the GNU General Public License
//  along with OpenAero.  If not, see <http://www.gnu.org/licenses/>.

// This file defines year (YY) and rule type specific rules

//######################################################################################
//#####   Régles France 2018 Espoirs à Doret    Version 2018.0.10    ###################
//######################################################################################
//######################################################################################
//#####                                                              ###################
//#####      Modifications et corrections 2013 pseudo numerotation   ###################
//#####      Modifications mineures (commentaires) et connus 2014    ###################
//#####      Corrections, modifications espoirs 2015, connus 2015    ###################
//#####      Ajout de règles (déclenchés) d'inconnu Doret 2015.      ###################
//#####      Prise en compte du distingo entre rotation alternées    ###################
//#####      (,) et rotations même sens (;) dans les régles 2015.    ###################
//#####      Modifications 2016, connus 2016, nouveaux noms.         ###################
//#####      Modifications 2017, connus 2017, connu_x -> connu x.    ###################
//#####      Modifications 2018, connus 2018, noms (in)connu-libre   ###################
//#####                                                              ###################
//######################################################################################
//#####                                                              ###################
//#####      Régles de l'inconnu Doret prises en compte, à affiner.  ###################
//#####                                                              ###################
//######################################################################################
// prog 2018 : Espoirs, Desavois, National2 et Doret.

//##### (Une partie des) Règles spécifiques à la France.

rules.push (

"[France Espoirs connu]",
"demo = ed 2g iv5s...^ m-~~ 7> ~-----3j-> (2,12) -``2c''2.'' h....' o 3% m2 2% 2j~> 22",
"k-max=120",
"more=France Espoirs all",
"[France Espoirs inconnu]",
"k-max=120",
"more=France Espoirs all",
"[France Espoirs libre]",
"k-max=130",
"basefig-max=12",
"fam5-min=1",
"fam7-min=1",
"fam8-min=1",
"roll-min=1",
"spin-min=1",
"emptyline-max=0",
"basefig-repeat=1",
"more=France Espoirs all",
"(France Espoirs all)",
"sf = advanced",
"poslj=10",
"posnl=10",
"floating-point=0",
"group-turnpos=^2\.[1-4]\.1\.1",
"turnpos-name= virages ventre",
"turnpos-max=1",
"rule-SPIN=roll:^[^s]",
"why-SPIN=Figure avec vrille uniquement",
"conv-rot_alt = ^9\.\d+\.3\.([1-8]) = $1;^9\.\d+\.[1245]\.[1-8] = x;^9\. = y;^0\.=z",
"rule-No_alt_45 = rot_alt: x[,;]",
"why-No_alt_45 = Rotation alternée interdite sur les lignes à 45°",
"rule-No_alt_hor = rot_alt: [,;]",
"why-No_alt_hor = Rotation alternée interdite",
"rule-Max_alt_720 = rot_alt: (8[,;]|[,;]8|6[,;]6|6[,;]4|4[,;]6)",
"why-Max_alt_720 = Rotation alternée limitée à 720°",
"allow-defrules = No_alt_45",
"8.4.1.1 NR:1;NR:3",
"1.1.3.1",
"1.1.1.1-4 Max_alt_720",
"8.5.2.4 No_alt_hor",
"5.3.1.1 NR:1;NR:2;NR:3",
"1.2.2.3 NR:1;NR:3",
"7.2.1.1 NR:1;No_alt_hor",
"8.5.6.1 No_alt_hor",
"8.6.1.1 NR:1;NR:2;NR:3",
"8.5.8.2 No_alt_hor",
"9.2.3.8",
"8.5.5.4 NR:1",
"7.8.8.1 NR:3",
"1.2.1.3 NR:1;NR:3",
"1.2.7.1 NR:1",
"1.1.3.4",
"7.3.2.1",
"1.1.7.1 NR:1",
"7.8.4.1 NR:1",
"7.8.6.3 NR:1;NR:3",
"8.5.1.3 NR:1;No_alt_hor",
"9.1.3.6",
"9.1.3.8",
"9.1.2.4",
"1.2.3.4 NR:3",
"8.5.2.1 NR:3",
"8.4.3.1 NR:1;NR:3",
"8.5.3.3 NR:1;No_alt_hor",
"5.2.1.1 NR:1;NR:3",
"7.8.8.4 NR:3",
"8.5.6.4 NR:1",
"1.1.2.3 NR:1",
"2.1.1.1-2",
"7.3.4.4",
"7.4.1.1 NR:1",
"9.1.3.4",
"9.1.4.2",
"9.2.3.6",
"2.3.1.1-2",
"9.1.3.2",
"1.2.6.1 NR:1;NR:3",
"9.11.1.4-7",
"8.5.4.4 No_alt_hor",
"8.5.4.1 No_alt_hor",
"1.2.4.4 NR:3",
"1.1.6.3 SPIN",
"1.2.3.1 NR:3",
"9.1.2.2",
"2.4.1.1-2",
"1.1.2.1",
"9.2.3.4",
"7.3.4.1",
"7.2.1.4 NR:1;NR:3",
"2.2.1.1-2",
"7.2.2.1 NR:1;No_alt_hor",
"7.3.3.3 NR:1",
"[France Desavois/promotion connu]",
"demo = ej /~~+,2''h'4.~~> 7> .m1- 2> -iv..'is..' /8b..'+`` 2> ~~4k``-`` ``-o2+` ``+dh(.).....'+++~ 2% 2> ..mf- -6 ```+1jo1+```",
"k-max=170",
"more=France Desavois/promotion all",
"[France Desavois/promotion inconnu]",
"k-max=155",
"more=France Desavois/promotion all",
"[France Desavois/promotion libre]",
"k-max=200",
"basefig-max=12",
"fam5-min=1",
"fam7-min=1",
"fam8-min=1",
"spin-min=1",
"vrot-min=1",
"turnpos-max=1",
"emptyline-max=0",
"basefig-repeat=1",
"snap-repeat=1",
"spin-repeat=1",
"more=France Desavois/promotion all",
"(France Desavois/promotion all)",
"sf = advanced",
"poslj=15",
"posnl=15",
"floating-point=0",
"group-turnpos=^2\.[1-4]\.1\.1",
"turnpos-name= virages ventre",
"group-vrot=^9\.[14]\.1\.2",
"vrot-name= rotation verticale montante de 180°",
"group-roller=^2\.(2\.[56]|3\.4)\.",
"roller-name= tonneaux en virage",
"rule-SPIN=roll:^[^s]",
"why-SPIN=Figure avec vrille uniquement",
"rule-Spin_ou_rien=roll:^[^sz]",
"why-Spin_ou_rien=Figure seule ou avec vrille uniquement sur la verticale",
"rule-NFC=roll:(\w[,;][fF])|([fF][,;]\w)",
"why-NFC=pas de déclenché dans les rotations composées",
"conv-vertqtrs=^9\.([1-9]|10)\.([156]|10)\.([1-8]) = $3;^9\. = r;^0\.=z",
"rule-V180 = vertqtrs:<3",
"why-V180 = Pas de rotation superieure à 180° sur les verticales",
"rule-Max90 = vertqtrs:<2",
"why-Max90 = Pas de rotation superieure à 90° sur ces verticales",
"conv-vertupqtrs=^9\.([1-9]|10)\.([16])\.([1-8]) = $3;^9\. = r;^0\.=z",
"rule-Max90up = vertupqtrs:<2",
"why-Max90up = Pas de rotation superieure à 90° sur la verticale montante",
"conv-vertdoqtrs=^9\.([1-9]|10)\.(5|10)\.([1-8]) = $3;^9\. = r;^0\.=z",
"rule-Max90do = vertdoqtrs:<2",
"why-Max90do = Pas de rotation superieure à 90° sur la verticale descendante",
"conv-nopush=^9\.1[12]\.1\.[5-8]=n;^9\.[1248]\.=r;^9.(9|10)=f;^9.1[12]=s;^0\.=z",
"rule-NSPushout =nopush:n$",
"why-NSPushout = Pas de sortie poussée après la vrille",
"neg-name=figures considérées comme négatives",
"conv-Horqtrs=^9\.\d+\.[38]\.([1-8])=$1;^9\.=0;^0\.=0",
"rule-Max720Hor =Horqtrs:<9",
"why-Max720Hor = Pas de rotation composée horizontale superieure à 720°",
"conv-Up45qtrs=^9\.\d+\.[27]\.([1-8])=$1;^9\.=0;^0\.=0",
"rule-Max360Up45 =Up45qtrs:<5",
"why-Max360Up45 = Pas de rotation composée sous 45° montant superieure à 360°",
"conv-Do45qtrs=^9\.\d+\.[49]\.([1-8])=$1;^9\.=0;^0\.=0",
"rule-Max180Do45 =Do45qtrs:<3",
"why-Max180Do45 = Pas de rotation composée sous 45° descendant superieure à 180°",
"conv-rot_qtrs=^9\.9\.([1-5])\.([1-8])=pf$2;^9\.9\.([6-9]|10)\.([1-8])=pF$2;^9\.10\.([1-5])\.([1-8])=nf$2;^9\.10\.([6-9]|10)\.([1-8])=nF$2;^9\.[1-8]\.[1-5]\.([1-8])=r$1;^9\.1[12]\.1\.([1-8])=s$1;^9\.=r;^0\.=z",
"rule-No_Demi_pos = rot_qtrs:pf2",
"why-No_Demi_pos = Demi déclenché positif interdit",
"allow-defrules = NFC;V180;Max720Hor;Max360Up45;Max180Do45",
"allow=^[789]",
"8.5.4.1 NF:2",
"7.8.1.1-2 NR:1;NR:2;NR:3",
"8.6.6.2 NR:1;NR:2;NR:3",
"8.4.1.1 Max90do",
"5.2.1.2 NR:1;NR:2",
"2.2.1.1-2",
"8.6.3.1 Max90up;NR:2;NR:3",
"1.2.5.2 NR:1;NR:2",
"7.2.1.1 NF:1",
"8.5.8.1-2 NF:1",
"9.4.1.2",
"1.2.2.3 NR:1;Max90",
"7.2.3.3 NR:2",
"1.1.6.4 SPIN;NSPushout",
"9.8.1.1",
"9.1.2.4",
"7.2.2.1 NF:1;No_Demi_pos:2",
"8.4.2.1 NR:2",
"7.2.4.2 NF:1;No_Demi_pos:2",
"8.6.5.1 NR:2;NR:3",
"9.4.3.4",
"2.1.3.1-4",
"7.8.6.1-4 NR:1;NR:3",
"8.5.5.1 NF:1;NR:2",
"1.2.4.4 Max90",
"7.2.3.1 NF:1;NR:2",
"9.1.3.6",
"8.5.2.4",
"7.8.3.4 NR:1",
"9.2.3.8",
"7.8.2.4 NR:1;NR:2;NR:3",
"7.3.1.2 NR:1",
"8.5.7.1-2 NF:1;NR:2",
"9.4.3.6",
"1.2.1.1 NR:2",
"1.1.1.1-4",
"2.4.1.1-2",
"1.2.6.2 NR:1;NR:2",
"5.3.2.1 NR:2;Max90do",
"7.2.1.4 NR:1;NF:2",
"7.2.4.1 NF:1",
"1.1.6.3 SPIN",
"7.3.1.3-4 NR:1;NR:2",
"1.2.3.4 Max90",
"8.4.4.2 NR:1;Max90do",
"8.6.1.1 Max90up;NR:2;NF:3",
"8.5.6.1 NF:1",
"9.9.3.2",
"7.8.4.1-2 NR:1",
"8.5.3.2 NF:2",
"9.12.1.4",
"1.1.7.1 Max90",
"1.2.4.2 NR:2",
"7.8.8.1-4 NR:3",
"8.5.3.3-4 NR:1",
"2.2.5.1-4",
"2.2.6.1-4",
"1.1.2.3-4 NR:1",
"1.2.1.3 NR:1;Max90",
"7.3.3.1",
"8.4.2.2 NR:1;Max90do",
"8.4.3.2 NR:1;NR:2",
"5.2.1.1 Max90do",
"7.4.1.2-4 NR:1",
"7.8.4.4 NR:1",
"8.4.14.1 NR:1",
"8.5.1.1 NR:2",
"7.2.1.2-3 NR:1;NR:2",
"8.5.1.4 NR:1;NR:2",
"5.2.1.4 NR:1;Max90",
"9.2.2.4",
"5.3.2.4 NR:2;Max90do",
"1.1.6.1 Max90",
"7.4.2.2",
"7.3.2.1-2",
"8.5.19.2 Max90up;NR:2",
"8.5.17.1 Max90up;NR:2",
"5.3.1.4 NR:1;NR:2;Max90do",
"7.8.3.1-2 NR:1;NR:3",
"7.8.5.1-4 NR:1;NR:2;NR:3",
"1.1.3.1-4",
"7.2.2.2 NR:1",
"8.5.6.4 NR:1",
"8.6.8.1 NF:1;NR:2;NR:3",
"8.4.3.1 Max90do",
"7.3.4.1-4",
"2.3.1.1-2",
"1.2.6.1 NR:2",
"8.5.5.4 NR:1",
"9.4.2.2",
"8.5.1.3 NR:1",
"9.4.3.2",
"2.1.1.1-2",
"5.3.1.1 NR:1;NR:2;Max90do",
"5.3.1.3 NR:1;NR:2;NR:3",
"8.4.4.1 NR:2",
"7.8.2.1-2 NR:1;NR:2;NR:3",
"8.6.4.3 Spin_ou_rien",
"1.2.3.1 NR:2",
"9.1.3.4",
"1.2.2.2 NR:2",
"8.4.1.2 NR:1;NR:2;Max90do",
"7.2.2.4 NR:1;NF:2",
"7.4.1.1",
"5.3.2.2-3 NR:2;NR:3",
"8.5.6.2 NR:1",
"9.10.3.2",
"8.4.13.1 NR:1;NR:2",
"9.2.3.6",
"8.6.4.1 Max90up;NR:2;NF:3",
"1.2.7.1",
"9.1.1.1-2",
"8.6.2.1 Max90up;NR:2;NF:3",
"8.5.5.2 NR:1;NR:2",
"9.1.3.2",
"9.8.5.1",
"9.9.2.2",
"1.2.8.2 NR:1",
"7.8.1.4 NR:1;NR:2;NR:3",
"9.4.4.2",
"9.9.3.4",
"9.1.4.2",
"9.8.3.4",
"7.2.4.3 NF:2",
"7.3.1.1",
"9.1.3.8",
"7.2.3.2 NF:1;No_Demi_pos:2",
"1.2.5.1 NR:2",
"8.6.7.2 NF:1;NR:2;NR:3",
"9.8.2.2",
"8.5.1.2 NR:1;NR:2",
"9.8.3.2",
"5.3.1.2 NR:1;NR:2;NR:3",
"8.5.4.3-4",
"7.3.2.3-4 NR:2",
"7.3.3.2-4 NR:1",
"7.8.7.1-4 NR:2;NR:3",
"1.1.2.1-2",
"1.1.7.3 SPIN;NSPushout",
"5.2.1.3 NR:2",
"8.5.2.1-3 NR:2",
"1.1.7.4 SPIN",
"9.1.2.2",
"7.4.2.1 No_Demi_pos",
"9.1.5.1",
"9.2.3.4",
"9.11.1.4-8",
"(France National_2 connu 1)",
"demo = /v''4'- -iv'',5is''> 24h---~~ -''m2- (5,14) -2joi15 .9c.''48.'' /````+```pb.,4.''~~ ~~++''8'rp8,4+` 2% ``+``````2f`rc+`````````` (10,20) ''m1,24 2> /3j> ,f,1",
"more=France National_2 connu",
"(France National_2 connu 2)",
"demo = ~+24dh..'2.'' 6> .'m1- 2> -iv..5is. 4> ~~'8'k''-> -'4'h.4.' 5> ...'mf,2 ```+....irc'4,3~~ 8% ``+2jio2+`` 2> h..'' 24g+~ 4> 2f;24+``",
"more=France National_2 connu",
"[France National_2 connu]",
"k-max=225",
"more=France National_2 all",
"[France National_2 inconnu]",
"k-max=210",
"more=France National_2 all",
"[France National_2 libre]",
"k-max=260",
"basefig-max=13",
"fam2-min=1",
"fam5-min=1",
"fam7-min=1",
"fam8-min=1",
"froll-min=1",
"hesroll-min=1",
"snap-min=1",
"spin-min=1",
"vrot-min=1",
"roller-min=1",
"emptyline-max=0",
"basefig-repeat=1",
"snap-repeat=1",
"spin-repeat=1",
"more=France National_2 all",
"(France National_2 all)",
"sf = advanced",
"poslj=20",
"posnl=20",
"floating-point=0",
"group-vrot=^9\.[14]\.1\.2",
"vrot-name= rotation verticale montante de 180°",
"group-roller=^2\.4\.[5-8]\.",
"roller-name=tonneau en virage de 360°",
"rule-SPIN=roll:^[^s]",
"why-SPIN=Figure avec vrille uniquement",
"rule-Spin_ou_rien=roll:^[^sz]",
"why-Spin_ou_rien=Figure seule ou avec vrille uniquement sur la verticale",
"rule-NSF=roll:(\w[,;][fF])",
"why-NSF=pas de déclenché en 2eme élément dans une rotation composée",
"conv-vertqtrs=^9\.([1-9]|10)\.([156]|10)\.([1-8]) = $3;^9\. = r;^0\.=z",
"rule-V180 = vertqtrs:<3",
"why-V180 = Pas de rotation superieure à 180° sur les verticales",
"rule-Max90 = vertqtrs:<2",
"why-Max90 = Pas de rotation superieure à 90° sur ces verticales",
"conv-vertupqtrs=^9\.([1-9]|10)\.([16])\.([1-8]) = $3;^9\. = r;^0\.=z",
"rule-Max90up = vertupqtrs:<2",
"why-Max90up = Pas de rotation superieure à 90° sur la verticale montante",
"conv-vertdoqtrs=^9\.([1-9]|10)\.(5|10)\.([1-8]) = $3;^9\. = r;^0\.=z",
"rule-Max90do = vertdoqtrs:<2",
"why-Max90do = Pas de rotation superieure à 90° sur la verticale descendante",
"conv-nopush=^9\.1[12]\.1\.[5-8]=n;^9\.[1248]\.=r;^9.(9|10)=f;^9.1[12]=s;^0\.=z",
"rule-NSPushout =nopush:n$",
"why-NSPushout = Pas de sortie poussée après la vrille",
"conv-Horqtrs=^9\.\d+\.[38]\.([1-8])=$1;^9\.=0;^0\.=0",
"rule-Max720Hor =Horqtrs:<9",
"why-Max720Hor = Pas de rotation composée horizontale superieure à 720°",
"conv-Up45qtrs=^9\.\d+\.[27]\.([1-8])=$1;^9\.=0;^0\.=0",
"rule-Max540Up45 =Up45qtrs:<7",
"why-Max540Up45 = Pas de rotation composée sous 45° montant superieure à 540°",
"conv-Do45qtrs=^9\.\d+\.[49]\.([1-8])=$1;^9\.=0;^0\.=0",
"rule-Max180Do45 =Do45qtrs:<3",
"why-Max180Do45 = Pas de rotation composée sous 45° descendant superieure à 180°",
"conv-rot_qtrs=^9\.9\.([1-5])\.([1-8])=pf$2;^9\.9\.([6-9]|10)\.([1-8])=pF$2;^9\.10\.([1-5])\.([1-8])=nf$2;^9\.10\.([6-9]|10)\.([1-8])=nF$2;^9\.[1-8]\.[1-5]\.([1-8])=r$1;^9\.1[12]\.1\.([1-8])=s$1;^9\.=r;^0\.=z",
"rule-No_Demi_pos = rot_qtrs:pf2",
"why-No_Demi_pos = Demi déclenché positif interdit",
"neg-name=figures considérées comme négatives",
"allow-defrules = NSF;V180;Max720Hor;Max540Up45;Max180Do45",
"allow=^[15789]",
"2.3.4.1-4",
"2.4.8.1-4",
"7.2.3.3 NF:2",
"1.2.3.4 Max90",
"7.5.1.1-2 NR:1;NR:2;NR:3",
"7.8.11.1-2",
"7.8.9.3-4 NR:1;NR:2;NR:3",
"1.3.4.1",
"7.8.16.1-4",
"2.2.3.1-4",
"8.6.3.3 Spin_ou_rien",
"1.2.2.2-3 Max90",
"7.8.2.1-2 NR:1;NR:2",
"9.9.3.2",
"2.2.4.1-4",
"8.6.5.1 NF:1;NR:3 ",
"8.4.19.2 NR:2",
"8.4.4.1 NR:2",
"8.5.19.2 NR:2;Max90up",
"8.5.4.3-4",
"1.2.1.3 Max90",
"8.4.20.2",
"1.2.1.2 NR:2",
"1.1.6.3 Spin_ou_rien",
"8.4.13.1 NR:1;NR:2",
"8.4.1.2 NR:2;Max90do",
"8.5.4.1-2 NF:2",
"7.8.13.1-2",
"8.4.2.1 NR:2",
"8.4.1.1 Max90do",
"9.9.2.4",
"8.5.3.3-4 NR:1",
"1.2.2.1 NR:2",
"7.2.4.2 NF:1;No_Demi_pos:2",
"1.1.6.4 SPIN;NSPushout",
"7.8.4.1-4 NR:1",
"8.6.8.1 NF:1;NR:2;NR:3",
"5.2.1.4 Max90up",
"9.12.1.4-6",
"8.5.6.1 NF:1",
"7.3.1.1-2",
"2.3.5.1-4",
"2.4.7.1-4",
"9.10.3.2",
"7.8.5.3-4 NR:1;NR:2;NR:3",
"7.2.1.3 NR:1;NR:2",
"7.8.6.1-2 NR:3",
"7.8.7.3-4 NR:1;NR:3",
"8.5.1.2 NF:2",
"7.2.2.4 NR:1;NF:2",
"9.8.2.1-2",
"7.8.13.3-4 NR:3",
"8.5.17.1 NR:2;Max90up",
"7.8.12.1-2",
"8.5.8.1-2 NF:1",
"7.8.1.1-2 NR:1;NR:2;NR:3",
"5.3.1.4 NR:1;NR:2",
"9.4.2.2",
"7.8.5.1-2 NR:3",
"9.9.3.4",
"5.3.2.2-3 NR:2;NR:3",
"8.4.3.2 NR:2",
"1.2.4.2 Max90",
"8.6.7.2 NF:1;Max90do",
"8.6.2.1 Max90up;NF:3",
"7.2.2.1 NF:1;No_Demi_pos:2",
"8.6.6.1 NF:1;NR:3",
"1.1.1.1-4",
"9.8.4.1-2",
"7.8.3.3-4 NR:1",
"9.1.1.1-2",
"2.2.5.1-4",
"7.8.14.3-4 NR:2",
"9.2.2.4",
"1.2.4.1 NR:2",
"7.8.11.3-4 NR:1;NR:3",
"8.5.6.2-4 NR:1",
"7.8.2.3-4 NR:1",
"1.3.2.1",
"2.2.1.1-2",
"8.4.2.2 Max90do",
"1.1.7.4 Spin_ou_rien",
"1.2.3.1 Max90",
"7.8.15.3-4 NR:1",
"1.2.1.1 Max90",
"5.2.1.2 NR:2;Max90up",
"7.8.7.1-2 NR:3",
"7.8.10.1-2",
"1.1.7.3 SPIN;NSPushout",
"2.1.1.1-2",
"2.4.6.1-4",
"7.8.12.3-4 NR:1;NR:2",
"7.8.15.1-2",
"8.4.14.1 NR:1",
"1.1.6.1",
"1.1.2.3-4 NR:1",
"5.2.1.3 NR:2",
"5.3.2.4 NR:2",
"7.3.1.3-4 NR:1;NR:2",
"7.8.6.3-4 NR:1;NR:3",
"2.4.5.1-4",
"8.6.6.2 NR:1;NR:2;NR:3",
"9.4.4.2",
"7.8.3.1-2 NR:1;NR:3",
"7.2.4.1 NF:1",
"1.2.6.2 NR:2;Max90",
"9.1.3.1-8",
"9.1.5.1-2",
"2.2.6.1-4",
"5.3.1.1 NR:1;Max90up",
"8.5.2.3-4",
"7.5.7.1-2 NR:1",
"2.4.1.1-2",
"8.4.3.1 Max90do",
"8.5.3.1-2 NF:2",
"9.8.5.1",
"5.3.2.1 NR:2",
"9.4.1.2",
"7.2.1.1 NF:1",
"9.11.1.4-8",
"7.4.1.2-4 NR:1",
"1.2.4.4 Max90",
"7.5.4.1-2 NR:1;NR:2",
"7.4.2.1 No_Demi_pos",
"8.5.1.3-4 NR:1",
"1.2.5.1 NR:2",
"8.5.2.1 NF:2",
"1.2.8.1",
"7.4.1.1",
"1.2.7.1",
"7.3.3.1-2",
"7.8.1.3-4 NR:1",
"7.3.4.1-4",
"9.1.4.1-2",
"7.8.10.3-4 NR:2;NR:3",
"2.1.3.1-4",
"9.8.1.1",
"8.6.4.1 Max90up;NR:2;NF:3",
"8.5.5.1 NF:1;NR:2",
"7.2.3.2 NF:1;No_Demi_pos:2",
"8.5.7.1-2 NF:1;NR:2",
"7.2.1.2 NR:1",
"7.8.8.1-4 NR:3",
"1.1.3.1-4",
"8.6.3.1 Max90up;NR:2;NR:3",
"9.2.3.4-8",
"7.8.9.1-2",
"8.6.4.3 Spin_ou_rien",
"1.2.8.2 Max90",
"7.3.2.1-3",
"8.5.5.2 NR:1;NR:2",
"7.2.3.1 NF:1",
"7.2.4.3 NF:2",
"8.5.8.3",
"9.4.3.2-8",
"7.2.2.2 NR:1",
"5.3.1.3 NR:1;NR:3;Max90up",
"7.4.2.2",
"2.3.1.1-2",
"5.3.1.2 NR:1;NR:2;NR:3",
"7.3.2.4 NR:2",
"1.2.7.2 Max90",
"7.3.3.3-4 NR:1",
"9.1.2.1-4",
"9.9.2.2",
"8.6.1.1 Max90up;NF:3",
"8.5.1.1 NR:2",
"8.5.7.3",
"7.2.1.4 NR:1;NF:2",
"5.2.1.1",
"1.1.7.2 Max90",
"1.2.3.2 NR:2",
"1.1.2.1-2",
"8.5.2.2 NR:2",
"7.8.14.1-2",
"8.4.4.2 Max90do",
"8.5.5.3-4 NR:1",
"9.8.3.1-4",
"7.5.2.1-2 NR:1;NR:3",
"1.1.7.1",
"7.2.2.3 NR:1;NF:2",
"1.2.6.1 NR:2",
"1.2.5.2 NR:2;Max90",
"[France Advanced connu-libre]",
"more=CIVA Advanced Free Known",
"[France Advanced inconnu-libre 1]",
"more=CIVA Advanced Unknown1",
"[France Advanced inconnu-libre 2]",
"more=CIVA Advanced Unknown2",
"[France Advanced inconnu-libre 3]",
"more=CIVA Advanced Unknown3",
"(France Doret/excellence connu 1)",
"demo = ej /~~v''f.'~^> ``+,5s''ibB(``````\"|\"3``).''4...'+^> 3> 1,22mif,2> ````+3joi3+~ 2> .'ta.,2.....'> `,4``rp,5,34+~> 2> ```+``24`dh(`)....,24..''+`^> `````+1,2f```rcc(24`) 9m2if,6-``>",
"more=France Doret/excellence connu",
"(France Doret/excellence connu 2)",
"demo = +ifrp22 frdb.'',24....''+```````` ``22m.f,1-~~ 7> ~~---pn(.....'22.......'')1-- 4> -5is.irp..'5,8- 3> -2% -3j3----~> 8> `-24dh....22...+++~~ 2> ~~+2rp(22)9 ``+``22,2frc",
"more=France Doret/excellence connu",
"[France Doret/excellence connu]",
"poslj=35",
"posnl=35",
"floating-point=0",
"k-max=350",
"basefig-min=9",
"basefig-max=9",
"allow=^[1-9]",
"[France Doret/excellence inconnu]",
"poslj=35",
"posnl=35",
"floating-point=0",
"k-max=350",
"snap-max=5",
"isnap-min=2",
"osnap-min=2",
"group-vsnap=^9\.(9|10)\.[16]\.",
"vsnap-name=déclenché vertical montant",
"vsnap-min=1",
"vsnap-max=2",
"conv-interdit=^[09]\.=N",
"rule-Interdite = interdit:N",
"why-Interdite = Figure de base interdite",
"conv-horstop=^9\.(1|9|10)\.[38]=1;^9\.2\.3\.4 = 2;^9\.2\.3\.6 = 3;^9\.2\.3\.8 = 4;^9\.4\.3\.([1-8]) = $1;^9\.8\.3\.1 = 2;^9\.8\.3\.2 = 4;^9\.8\.3\.3 = 6;^9\.8\.3\.4 = 8;^9\.=r;^0\.=z",
"rule-Hor10stop = horstop:<11",
"why-Hor10stop = un maximum de 10 arrets est autorisé dans les rotations des lignes droites horizontales",
"why_en-Hor10stop = a maximum of 10 stops are allowed on straight horizontal lines rolls",
"conv-roll_R4=^9\.4\.1\.2=A;^9\.1\.1\.[1-4]=A;^9\.([1248])\.=$1;^9\.(9|10)\.([6-9]|10)=F;^9\.(9|10)=f;^9\.1[12]=s;^0\.=z",
"rule-R4 = roll_R4:^s ([^Az]|\w[,;])",
"why-R4 = pas de déclenché ou pas cette rotation dans la branche montante avec une vrille dans la branche descendante.",
"conv-roll_R6=^9\.10\.8\.2=X;^9\.([1248])\.=$1;^9\.(9|10)\.([6-9]|10)=F;^9\.(9|10)=f;^9\.1[12]=s;^0\.=z",
"rule-R6 = roll_R6:X",
"why-R6 = ce déclenché est interdit. Sauf sur les figures 7.2.2.1, 7.2.4.2, 8.5.3.3, 8.5.4.4, 8.6.2.4 et 8.6.4.3.",
"rule-VDOWN180 = downqtrs:<3",
"why-VDOWN180 = un maximum de 180° de rotation est permis.",
"rule-VDOWN270 = downqtrs:<4",
"why-VDOWN270 = un maximum de 270° de rotation est permis.",
"rule-VDOWN1S = downstop:<2",
"why-VDOWN1S = pas de facette permise.",
"rule-R10 = roll:^((\w[,;][fF])|[fF]|([fF][,;]\w)) [1248]",
"why-R10 = pas de rotation dans la branche descendante avec un déclenché dans la branche montante.",
"conv-roll_R11=^9\.1\.1\.[12]=A;^9\.([1248])\.=$1;^9\.(9|10)\.([6-9]|10)=F;^9\.(9|10)=f;^9\.1[12]=s;^0\.=z;",
"rule-R11 = roll_R11:(^((\w[,;][A1248fF])|[1248fF]|([A1248fF][,;]\w)) [1248])|(^[^zA]+ [1248])|(^[^z]+ [fF])",
"why-R11 = cette combinaison de rotation montante et sommitale est interdite.",
"conv-roll_R14=^9\.1\.5\.[123]=A;^9\.([1248])\.=$1;^9\.(9|10)\.([6-9]|10)=F;^9\.(9|10)=f;^9\.1[12]=s;^0\.=z",
"rule-R14 = roll_R14:^[\w,;]+ ([^z]|(\w[,;]\w)) ([^Az]|(\w[,;]))",
"why-R14 = cette rotation descendante est interdite en presence d'une rotation au sommet.",
"conv-roll_R15=^9\.1\.5\.[1-2]=A;^9\.([1248])\.=X;^9\.(9|10)\.([6-9]|10)=F;^9\.(9|10)=f;^9\.1[12]=s;^0\.=z",
"rule-R15 = roll:s[,;][fFX]",
"why-R15 = pas de déclenché ou cette rotation après une vrille.",
"conv-doret_dos=^9\.1\.1\.[5-8]=v;^9\.4\.1\.[4-8]=v;^9\.8\.1\.[2-8]=v;^9\.[12]\.5\.[4-8]=n;^9\.[48]\.5\.[3-8]=n;^9\.(9|10)\.(5|10)\.=n;^9\.([1248])\.=r;^9\.(9|10)=f;^9\.1[12]=s;^0\.=z",
"rule-No_depart_dos = doret_dos:^v",
"why-No_depart_dos = pas de départ dos avec cette rotation verticale.",
"rule-No_sortie_dos = doret_dos:n$",
"why-No_sortie_dos = pas de sortie dos avec cette rotation verticale.",
"conv-climbqtrs=^9\.([1-9]|10)\.[1267]\.([1-8]) = $2;^9\. = r;^0\.=z",
"conv-climbstop=^9\.(1|9|10)\.[1267]=1;^9\.2\.[12]\.4 = 2;^9\.2\.[12]\.6 = 3;^9\.2\.[12]\.8 = 4;^9\.4\.[12]\.([1-8]) = $1;^9\.8\.[12]\.1 = 2;^9\.8\.[12]\.2 = 4;^9\.8\.[12]\.3 = 6;^9\.8\.[12]\.4 = 8;^9\.=r;^0\.=z",
"conv-upqtrs=^9\.([1-9]|10)\.[16]\.([1-8]) = $2;^9\. = r;^0\.=z",
"conv-upstop=^9\.(1|9|10)\.[16]=1;^9\.2\.1\.4 = 2;^9\.2\.1\.6 = 3;^9\.2\.1\.8 = 4;^9\.4\.1\.([1-8]) = $1;^9\.8\.1\.1 = 2;^9\.8\.1\.2 = 4;^9\.8\.1\.3 = 6;^9\.8\.1\.4 = 8;^9\.=r;^0\.=z",
"conv-diagupqtrs=^9\.([1-9]|10)\.[27]\.([1-8]) = $2;^9\. = r;^0\.=z",
"conv-diagupstop=^9\.1\.2=1;^9\.(9|10)\.[27]=2;^9\.2\.2\.4 = 2;^9\.2\.2\.6 = 3;^9\.2\.2\.8 = 4;^9\.4\.2\.([1-8]) = $1;^9\.8\.2\.1 = 2;^9\.8\.2\.2 = 4;^9\.8\.2\.3 = 6;^9\.8\.2\.4 = 8;^9\.=r;^0\.=z",
"conv-downqtrs=^9\.([1-9]|10)\.(5|10)\.([1-8]) = $3;^9\. = r;^0\.=z",
"conv-downstop=^9\.(1|9|10)\.(5|10)=1;^9\.2\.5\.4 = 2;^9\.2\.5\.6 = 3;^9\.2\.5\.8 = 4;^9\.4\.5\.([1-8]) = $1;^9\.8\.5\.1 = 2;^9\.8\.5\.2 = 3;^9\.8\.5\.3 = 6;^9\.8\.5\.4 = 8;^9\.(9|10)\. = f;^9\.=r;^0\.=z",
"rule-VUP450 = upqtrs:<6",
"why-VUP450 = un maximum de 450° est permis sur les rotations alternées verticales montantes",
"why_en-VUP450 = a maximum of 450° are allowed on vertical up opposite rolls",
"rule-DIAGUP540 = diagupqtrs:<7",
"why-DIAGUP540 = un maximum de 540° est permis sur les rotations alternées à 45° montant",
"why_en-DIAGUP540 = a maximum of 540° are allowed on diagonal up opposite rolls",
"rule-VUP4S = upstop:<5",
"why-VUP4S = un maximum de 4 arrets est permis sur les rotations alternées verticales montantes",
"why_en-VUP4S = a maximum of 4 stops are allowed on vertical up opposite rolls",
"rule-DIAGUP4S = diagupstop:<5",
"why-DIAGUP4S = un maximum de 4 arrets (3 si déclenché) est permis sur les rotations combinées à 45° montant",
"why_en-DIAGUP4S = a maximum of 4 stops (3 if snap) are allowed on diagonal up opposite rolls",
"rule-CLIMB450 = climbqtrs:+<6",
"why-CLIMB450 = un maximum de 450° est permis sur l'ensemble des rotations montantes",
"why_en-CLIMB450 = a maximum of 450° are allowed on climbing rolls",
"rule-CLIMB4S = climbstop:+<5",
"why-CLIMB4S = un maximum de 4 arrets est permis sur l'ensemble des rotations montantes",
"why_en-CLIMB4S = a maximum of 4 stops are allowed on climbing rolls",
"rule-VDOWN360 = downqtrs:<5",
"why-VDOWN360 = un maximum de 360° est permis sur les rotations alternées verticales descendantes",
"why_en-VDOWN360 = a maximum of 360° are allowed on vertical down opposite rolls",
"rule-VDOWN3S = downstop:<4",
"why-VDOWN3S = un maximum de 3 arrets est permis sur les rotations alternées verticales descendantes",
"why_en-VDOWN3S = a maximum of 3 stops are allowed on vertical down opposite rolls",
"conv-vdDhfsz=^9\.[1248]\.[15]=v;^9\.[1248]\.2=d;^9\.[1248]\.4=D;^9\.[1248]\.=h;^9\.(9|10)\.[1-5]=f;^9\.(9|10)\.=F;^9\.1[12]=s;^0\.=z",
"rule-UnlimitedNOU =vdDhfsz: D[,;]|[,;]D|v[,;][fF]|[Ff][,;]v|[Ff][,;]d",
"why-UnlimitedNOU = rotations combinées interdites",
"why_en-UnlimitedNOU = opposite or unlinked roll/roll (or flick) combination is not allowed",
"rule-UnlimitedNOUF =vdDhfsz: d[,;]F",
"why-UnlimitedNOUF = sous 45° montant rotation combinée tonneau/déclenché \"gros K\" interdite",
"why_en-UnlimitedNOUF = 45-up roll/flick (\"hard way\") combination is not allowed",
"rule-NF3TOPH =roll: (.[,;].|248) [fF]$",
"why-NF3TOPH = pas de déclenché sur la verticale descendante aprés des facettes dans la boucle",
"why_en-NF3TOPH = no flick roll on vertical down line after hesitation in the loop",
"rule-NF2UP360 = upqtrs: ^([5-8]|[,;]4|4[,;]|2[,;]3|3[,;][23]) f",
"why-NF2UP360 = pas de déclenché en haut de boucle si plus de 360° de rotation verticale montante",
"why_en-NF2UP360 = no flick roll on loop top after more than 360° roll going up",
"rule-NF2UP2STOP = upstop: ^([3-9]|[,;]2|2[,;]) f",
"why-NF2UP2STOP = pas de déclenché en haut de boucle si plus de 2 arrets en verticale montante",
"why_en-NF2UP2STOP = no flick roll on loop top after more than 2 stops going up",
"rule-N88 = roll: 8",
"why-N88 = 8 facettes interdit",
"why_en-N88 = 8 point roll is not allowed",
"rule-NORF = roll: [1248][,;]f",
"why-NORF = combinaison tonneau,déclenché interdite",
"why_en-NORF = roll,flick combination not allowed",
"allow=^[1-9]",
"9.10.10.2-4",
"1.1.2.1",
"8.6.1.2 NOU:2;NF:3;NF2UP360;NF2UP2STOP;R11;No_depart_dos",
"7.4.1.3-4 NR:1;NOU:1;NF:1;N88",
"8.5.3.2 NF:2;NORF",
"1.2.6.2 No_depart_dos",
"5.3.1.1-4 NF:1;NF:2;CLIMB4S;CLIMB450",
"7.4.4.1 No_sortie_dos",
"9.9.10.2-4",
"1.2.8.4 NORF:2;NF;VDOWN180;VDOWN1S",
"8.5.7.3",
"9.2.3.4",
"9.9.4.6",
"1.1.7.3 NF;VDOWN180;VDOWN1S;No_sortie_dos",
"1.1.7.4 NF;VDOWN270;VDOWN1S",
"1.2.8.2 No_depart_dos",
"1.2.8.3 NF;VDOWN270;VDOWN1S",
"8.5.2.2 NF:2;NORF",
"9.1.1.1-5",
"2.1.2.1-4",
"7.8.7.3-4",
"9.9.4.2",
"7.4.4.3-4 NF:1",
"1.2.2.2 NORF:1",
"7.2.3.1-2 NF:1",
"1.2.2.3-4",
"8.4.14.1",
"7.3.2.2 NORF",
"2.3.2.1-4",
"9.10.3.2",
"6.2.2.4 NF:1;No_depart_dos",
"9.8.3.4",
"9.1.4.6",
"7.8.2.3 NORF:2",
"9.4.2.2",
"2.4.4.1-4",
"8.6.2.2 NOU:2;NF:3;NF2UP360;NF2UP2STOP;No_depart_dos",
"2.3.3.1-4",
"8.6.8.3-4",
"9.1.5.1-4",
"8.4.2.2 No_depart_dos",
"1.1.2.3-4",
"2.4.8.1-4",
"7.4.6.1",
"9.9.5.2-4",
"8.4.4.1 No_sortie_dos",
"2.1.3.1-4",
"9.4.3.2-4",
"2.4.6.1-4",
"9.1.4.2",
"9.8.4.2",
"1.2.5.4 NF;VDOWN270;VDOWN1S",
"9.1.4.4",
"2.4.7.1-4",
"1.1.7.1",
"8.4.18.1",
"5.3.2.1-4 NF:1;NF:2;CLIMB4S;CLIMB450",
"8.4.1.1",
"7.4.5.1 NF:1",
"7.3.4.3-4",
"8.8.5.1 NOU",
"8.4.13.1",
"8.6.2.1 NOU:2;NF:3;NF2UP360;NF2UP2STOP",
"9.9.3.4",
"7.8.8.1 NF:3",
"9.9.3.2",
"8.5.7.1-2 NF:1",
"7.3.3.1 NORF:2",
"9.11.1.4-6",
"9.4.2.4",
"8.6.7.1 NOU:2;NF:1;NF3TOPH;No_sortie_dos",
"7.8.5.1 NF:3;NORF:2",
"8.4.15.2 R10;NORF",
"9.8.3.2",
"7.8.6.2 NF:3;NORF:1",
"2.2.3.1-4",
"8.4.1.3-4 R4",
"9.8.2.2",
"8.5.3.1 NF:2",
"8.6.1.3-4",
"1.1.6.4 NF;VDOWN180;VDOWN1S;No_sortie_dos",
"8.6.4.3-4",
"8.5.6.1-2 NF:1",
"8.4.1.2 No_depart_dos;No_sortie_dos",
"9.10.2.2",
"1.1.3.3-4",
"1.2.5.2 No_depart_dos",
"1.2.5.1",
"7.4.2.1 NOU:1",
"9.10.8.2",
"7.3.4.2 NORF",
"1.1.6.1",
"7.8.2.1-2 NF:1",
"1.2.7.3 NORF:2;NF;VDOWN180;VDOWN1S",
"8.5.4.1 NF:2",
"7.4.1.1 NOU:1",
"8.5.7.4 NORF:2",
"8.5.5.3 NORF:2",
"2.3.4.1-4",
"7.8.6.1 NF:3;NORF:2",
"1.2.6.1",
"7.8.4.3 NORF",
"1.2.3.3-4",
"6.2.1.4 NF:1;No_depart_dos",
"8.5.6.3 NORF:2",
"9.1.2.1-6",
"5.2.1.4 No_depart_dos",
"8.6.5.2 NOU:2;NF:1;NF3TOPH;VDOWN180;VDOWN1S;No_sortie_dos",
"8.4.4.3-4 R4",
"7.8.2.4 NORF:3",
"7.8.4.4",
"6.2.1.3 NF:1;No_sortie_dos",
"7.4.3.2 No_depart_dos;No_sortie_dos",
"8.6.1.1 NOU:2;NF:3;NF2UP360;NF2UP2STOP;R11",
"7.3.4.1",
"9.4.5.2-3",
"8.4.3.2 No_depart_dos;No_sortie_dos",
"6.2.1.1 NF:1",
"6.2.2.2 NF:1;No_depart_dos;No_sortie_dos",
"6.2.2.3 NF:1;No_sortie_dos",
"7.2.1.3-4 NF:2",
"7.8.7.2 NF:3;NORF",
"1.2.4.3-4",
"8.6.7.3-4",
"1.2.6.3 NF;VDOWN270;VDOWN1S",
"7.8.1.3 NORF:2",
"7.8.4.1-2 NF:1",
"8.4.17.3-4 NORF",
"9.2.1.4",
"8.4.3.3-4 R4",
"2.2.5.1-4",
"8.6.3.2 NOU:2;NF:3;NF2UP360;NF2UP2STOP;R11;No_depart_dos",
"1.2.1.3-4",
"7.3.1.1 NORF:2",
"8.5.6.4",
"8.5.5.1-2 NF:1",
"9.2.2.4",
"7.4.5.4 NR:1;NR:2;NF:2",
"9.2.3.8",
"8.6.5.3-4 NF:2",
"9.8.5.1-2",
"9.9.6.4",
"9.10.3.4",
"9.10.4.4",
"9.4.4.2",
"7.4.1.2 NF:1;NOU:1",
"8.6.2.3-4",
"9.9.2.2",
"7.4.3.1",
"8.6.8.1 NOU:2;NF:1;NF3TOPH",
"7.4.2.2 NF:1;NOU:1",
"9.2.3.6",
"8.8.2.1 NOU",
"9.2.5.4",
"7.3.2.1",
"8.5.4.2 NF:2;NORF",
"8.5.1.3-4",
"2.2.4.1-4",
"1.2.3.2 NORF:1;No_sortie_dos",
"1.2.4.1 No_sortie_dos",
"8.4.3.1",
"7.3.2.3-4",
"8.4.15.3-4 NORF",
"1.1.6.2 No_depart_dos",
"9.4.4.4",
"8.4.2.3-4 R4",
"7.4.3.3-4 NF:1",
"8.5.1.2 NF:2;NORF",
"1.1.7.2 No_depart_dos",
"7.8.1.1-2 NF:1",
"8.8.1.1 NOU",
"7.2.4.3-4 NF:2",
"1.1.11.1 NORF",
"8.6.8.2 NOU:2;NF:1;NF3TOPH;No_sortie_dos",
"7.8.1.4 NORF:3",
"9.9.1.2-4",
"9.9.3.6",
"9.9.2.4",
"7.2.3.3-4 NF:2",
"8.6.5.1 NOU:2;NF:1;NF3TOPH;R14",
"1.2.8.1",
"8.6.6.1 NOU:2;NF:1;NF3TOPH;VDOWN180;VDOWN1S;No_sortie_dos",
"7.4.4.2 No_depart_dos",
"1.2.3.1",
"8.5.1.1 NF:2",
"7.8.8.3-4",
"6.2.1.2 NF:1;No_depart_dos;No_sortie_dos",
"2.2.6.1-4",
"9.12.1.4-6",
"7.8.7.1 NF:3",
"8.5.8.4 NORF:2",
"9.10.5.2-4",
"1.1.3.2 NORF",
"2.4.5.1-4",
"5.2.1.2 No_depart_dos;No_sortie_dos",
"8.5.8.1-2 NF:1",
"8.5.4.3-4",
"1.2.4.2 NORF:1",
"7.8.5.2 NF:3;NORF:1",
"8.5.5.4",
"9.10.3.6",
"1.1.10.1 NORF",
"7.8.8.2 NF:3;NORF",
"8.4.4.2 No_depart_dos",
"8.6.6.2 NOU:2;NF:1;NF3TOPH;R14",
"1.2.2.1 No_sortie_dos",
"2.3.5.1-4",
"8.4.18.2 R10;NORF",
"8.4.16.2-4 NORF",
"1.2.1.1",
"9.1.3.1-8",
"9.4.1.2-4",
"9.9.4.4",
"2.2.2.1-4",
"7.8.3.1-2 NF:1",
"9.2.4.4",
"9.10.4.2",
"7.2.4.1-2 NF:1",
"7.2.2.3-4 NF:2",
"8.5.2.3-4",
"6.2.2.1 NF:1",
"8.8.6.1 NOU",
"8.4.18.3-4 NORF",
"7.2.1.1-2 NF:1",
"7.3.1.3-4",
"8.6.3.3-4",
"8.5.2.1 NF:2",
"8.4.15.1 R10",
"1.1.2.2 NORF",
"1.2.7.4 NF;VDOWN270;VDOWN1S",
"8.6.6.3-4 NF:2",
"1.2.7.1",
"8.5.3.3-4",
"8.6.4.2 NOU:2;NF:3;NF2UP360;NF2UP2STOP;No_depart_dos",
"1.2.6.4 NORF:2;NF;VDOWN180;VDOWN1S",
"7.3.3.2 NORF:1",
"1.2.1.2 NORF:1;No_sortie_dos",
"7.8.3.4",
"8.5.8.3",
"9.10.2.4",
"9.10.6.2-4",
"2.4.3.1-4",
"8.4.16.1 R10",
"8.4.2.1 No_sortie_dos",
"8.6.4.1 NOU:2;NF:3;NF2UP360;NF2UP2STOP",
"8.4.17.1 R10",
"1.2.7.2 No_depart_dos",
"7.3.1.2 NORF:1",
"7.8.5.3-4",
"7.8.3.3 NORF",
"5.2.1.3 No_sortie_dos",
"7.3.3.3-4",
"8.6.3.1 NOU:2;NF:3;NF2UP360;NF2UP2STOP;R11",
"5.2.1.1",
"1.1.3.1",
"1.1.6.3 NF;VDOWN270;VDOWN1S",
"8.4.17.2 R10;NORF",
"7.8.6.3-4",
"1.2.5.3 NORF:2;NF;VDOWN180;VDOWN1S",
"7.2.2.1-2 NF:1",
"8.6.7.2 NOU:2;NF:1;NF3TOPH",
"9.8.1.1-2",
"[France Unlimited connu-libre]",
"more=CIVA Unlimited Free Known",
"[France Unlimited inconnu-libre]",
"more=CIVA Unlimited FreeUnknown"

);
