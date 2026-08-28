(function () {
  "use strict";

  const D = window.SEMITIC_DATA;
  if (!D) throw new Error("SEMITIC_DATA must be loaded before expanded-data.js");

  const extraLexicon = [
    { root:"ʾ-Ḫ-D", proto:"*ʾaḥad-", ar:"أ ح د", meaning:"واحد/أحد", forms:{ Akkadian:"ištēn (lexical replacement)", Ugaritic:"aḥd", Phoenician:"𐤀𐤇𐤃", Hebrew:"אחד", Aramaic:"חד", Arabic:"أَحَد", Sabaic:"ʾḥd", Geez:"አሐዱ" }, note:"يبين الاستمرار الواسع والإحلال المعجمي في الأكادية؛ لا تُسوّى الصيغ العددية من دون تحليل تاريخي." },
    { root:"ʾ-K-L", proto:"*ʾ-k-l", ar:"أ ك ل", meaning:"أكل", forms:{ Akkadian:"akālu", Ugaritic:"akl", Phoenician:"𐤀𐤊𐤋", Hebrew:"אכל", Aramaic:"אכל", Arabic:"أَكَلَ", Sabaic:"ʾkl", Geez:"በልዐ" }, note:"جذر فعلي قديم ذو بقاء واسع، مع إحلال جذري في بعض اللغات الإثيوبية." },
    { root:"ʾ-R-Ṣ", proto:"*ʾarṣ́-/ʾarḍ-", ar:"أ ر ض", meaning:"أرض/إقليم", forms:{ Akkadian:"erṣetu", Ugaritic:"arṣ", Phoenician:"𐤀𐤓𐤑", Hebrew:"ארץ", Aramaic:"ארעא", Arabic:"أَرْض", Sabaic:"ʾrḍ", Geez:"ምድር" }, note:"مثال مركزي لمصير الصامت الجانبي المطبق وإحلالات المعجم في بعض الفروع." },
    { root:"B-N", proto:"*bin-/bn-", ar:"ب ن", meaning:"ابن/بنوة", forms:{ Akkadian:"māru (replacement)", Ugaritic:"bn", Phoenician:"𐤁𐤍", Hebrew:"בן", Aramaic:"בר/בן", Arabic:"اِبْن", Sabaic:"bn", Geez:"ወልድ" }, note:"لفظ قرابة مهم للأسماء والأنساب؛ الآرامية تُظهر منافسة br والبنية تختلف عن الجذر الفعلي بنى." },
    { root:"B-N-Y", proto:"*b-n-y", ar:"ب ن ي", meaning:"بنى/شيّد", forms:{ Akkadian:"banû", Ugaritic:"bny", Phoenician:"𐤁𐤍𐤉", Hebrew:"בנה", Aramaic:"בנא", Arabic:"بَنَى", Sabaic:"bny", Geez:"—" }, note:"جذر إنشائي متكرر في النقوش الملكية والتذكارية، وتتطلب كل صيغة ربطًا بالصيغة الصرفية والسياق." },
    { root:"D-M", proto:"*dam-", ar:"د م", meaning:"دم", forms:{ Akkadian:"dāmu", Ugaritic:"dm", Phoenician:"𐤃𐤌", Hebrew:"דם", Aramaic:"דמא", Arabic:"دَم", Sabaic:"dm", Geez:"ደም" }, note:"جذر اسمي محفوظ يتيح مقارنة الحركات واللواحق الاسمية." },
    { root:"D-R-K", proto:"*d-r-k", ar:"د ر ك", meaning:"طريق/مسلك", forms:{ Akkadian:"—", Ugaritic:"drk", Phoenician:"𐤃𐤓𐤊", Hebrew:"דרך", Aramaic:"דרך", Arabic:"دَرْك/مَدْرَك", Sabaic:"drk", Geez:"—" }, note:"تتباين الدلالة بين الطريق المادي والإدراك واللحاق، وهو مثال على اتساع المجال الدلالي." },
    { root:"Ḏ-K-R", proto:"*ḏ-k-r", ar:"ذ ك ر", meaning:"ذكر/تذكّر", forms:{ Akkadian:"zakāru", Ugaritic:"ḏkr", Phoenician:"𐤆𐤊𐤓", Hebrew:"זכר", Aramaic:"דכר", Arabic:"ذَكَرَ", Sabaic:"ḏkr", Geez:"ዘከረ" }, note:"يكشف مراسلات بين الأسنان والصفيريات بحسب الفرع، ويكثر في صيغ التذكار والأسماء." },
    { root:"Ḥ-Y-Y", proto:"*ḥ-y-y", ar:"ح ي ي", meaning:"حياة/حيّ", forms:{ Akkadian:"balāṭu (replacement)", Ugaritic:"ḥwy/ḥy", Phoenician:"𐤇𐤉", Hebrew:"חי", Aramaic:"חיי", Arabic:"حَيّ", Sabaic:"ḥyw", Geez:"ሕይወት" }, note:"حقل دلالي واسع مع تعويض معجمي أكادي وتنوع في تمثيل الياءات." },
    { root:"Ḥ-K-M", proto:"*ḥ-k-m", ar:"ح ك م", meaning:"حكمة/حكم", forms:{ Akkadian:"—", Ugaritic:"ḥkm", Phoenician:"𐤇𐤊𐤌", Hebrew:"חכם", Aramaic:"חכם", Arabic:"حَكَمَ/حَكِيم", Sabaic:"ḥkm", Geez:"ጠቢብ (replacement)" }, note:"يتطلب التفريق بين الحكمة والسلطة القضائية عند تتبع التاريخ الدلالي." },
    { root:"Ḥ-R-M", proto:"*ḥ-r-m", ar:"ح ر م", meaning:"حرّم/كرّس", forms:{ Akkadian:"—", Ugaritic:"ḥrm", Phoenician:"𐤇𐤓𐤌", Hebrew:"חרם", Aramaic:"חרם", Arabic:"حَرُمَ", Sabaic:"ḥrm", Geez:"—" }, note:"حقل طقسي وقانوني حساس للسياق؛ قد يدل على التكريس أو المنع أو الإهلاك بحسب التقليد." },
    { root:"K-B-D", proto:"*k-b-d", ar:"ك ب د", meaning:"ثقل/كبد/مجد", forms:{ Akkadian:"kabātu", Ugaritic:"kbd", Phoenician:"𐤊𐤁𐤃", Hebrew:"כבד", Aramaic:"כבד", Arabic:"كَبِد/كَبُر", Sabaic:"kbd", Geez:"ክብር" }, note:"مثال واضح لتحول معنى الثقل المادي إلى الشرف والمجد." },
    { root:"K-L-B", proto:"*kalb-", ar:"ك ل ب", meaning:"كلب", forms:{ Akkadian:"kalbu", Ugaritic:"klb", Phoenician:"𐤊𐤋𐤁", Hebrew:"כלב", Aramaic:"כלבא", Arabic:"كَلْب", Sabaic:"klb", Geez:"ከልብ" }, note:"اسم حيوان محفوظ واسع الانتشار ومفيد لدراسة الحركات والنهايات." },
    { root:"L-B", proto:"*libb-", ar:"ل ب ب", meaning:"قلب/لبّ", forms:{ Akkadian:"libbu", Ugaritic:"lb", Phoenician:"𐤋𐤁", Hebrew:"לב", Aramaic:"לבא", Arabic:"لُبّ", Sabaic:"lb", Geez:"ልብ" }, note:"يجمع بين العضو الداخلي والعقل والباطن، مع اختلاف اختيار لفظ القلب في العربية." },
    { root:"L-Š-N", proto:"*lišān-", ar:"ل س ن", meaning:"لسان/لغة", forms:{ Akkadian:"lišānu", Ugaritic:"lšn", Phoenician:"𐤋𐤔𐤍", Hebrew:"לשון", Aramaic:"לשנא", Arabic:"لِسَان", Sabaic:"ls¹n", Geez:"ልሳን" }, note:"جذر مهم في تسمية العضو واللغة، ويكشف اختلاف ترميز الصفيريات في تقاليد النقحرة." },
    { root:"M-W-T", proto:"*m-w-t", ar:"م و ت", meaning:"موت", forms:{ Akkadian:"mâtu", Ugaritic:"mt", Phoenician:"𐤌𐤕", Hebrew:"מות", Aramaic:"מות", Arabic:"مَاتَ", Sabaic:"mwt", Geez:"ሞተ" }, note:"تظهر فيه انكماشات صوتية وصيغ فعلية اسمية متوازية." },
    { root:"N-P-Š", proto:"*napš-", ar:"ن ف س", meaning:"نفس/حياة/شخص", forms:{ Akkadian:"napīštu", Ugaritic:"npš", Phoenician:"𐤍𐤐𐤔", Hebrew:"נפש", Aramaic:"נפשא", Arabic:"نَفْس", Sabaic:"nfs¹", Geez:"ነፍስ" }, note:"حقل دلالي لا يساوي مفهوم الروح الحديث في كل نص؛ السياق الجنائزي والقانوني حاسم." },
    { root:"ʿ-B-D", proto:"*ʿ-b-d", ar:"ع ب د", meaning:"عمل/خدم/عبد", forms:{ Akkadian:"—", Ugaritic:"ʿbd", Phoenician:"𐤏𐤁𐤃", Hebrew:"עבד", Aramaic:"עבד", Arabic:"عَبَدَ/عَبْد", Sabaic:"ʿbd", Geez:"ግብር (partial replacement)" }, note:"يجمع العمل والخدمة والعبادة في مسارات تاريخية يجب فصلها سياقيًا." },
    { root:"ʿ-Y-N", proto:"*ʿayn-", ar:"ع ي ن", meaning:"عين/نبع", forms:{ Akkadian:"īnu", Ugaritic:"ʿn", Phoenician:"𐤏𐤍", Hebrew:"עין", Aramaic:"עינא", Arabic:"عَيْن", Sabaic:"ʿyn", Geez:"ዓይን" }, note:"يحفظ تعددًا دلاليًا قديمًا بين عضو البصر ومصدر الماء." },
    { root:"P-ʿ-L", proto:"*p-ʿ-l", ar:"ف ع ل", meaning:"فعل/صنع", forms:{ Akkadian:"epēšu (replacement)", Ugaritic:"pʿl", Phoenician:"𐤐𐤏𐤋", Hebrew:"פעל", Aramaic:"פעל", Arabic:"فَعَلَ", Sabaic:"fʿl", Geez:"ገብረ" }, note:"أصل التسمية التقليدية للأوزان في بعض الدراسات؛ تظهر مراسلة *p > f في العربية والجنوبية." },
    { root:"Q-R-ʾ", proto:"*q-r-ʾ", ar:"ق ر أ", meaning:"دعا/قرأ", forms:{ Akkadian:"qarû", Ugaritic:"qra", Phoenician:"𐤒𐤓𐤀", Hebrew:"קרא", Aramaic:"קרא", Arabic:"قَرَأَ", Sabaic:"qrʾ", Geez:"ቀርአ" }, note:"تطور من الدعاء والنداء إلى القراءة في تقاليد بعينها، ولا يصح إسقاط المعنى المتأخر على كل شاهد." },
    { root:"Q-R-B", proto:"*q-r-b", ar:"ق ر ب", meaning:"قرب/قدّم", forms:{ Akkadian:"qarābu", Ugaritic:"qrb", Phoenician:"𐤒𐤓𐤁", Hebrew:"קרב", Aramaic:"קרב", Arabic:"قَرُبَ", Sabaic:"qrb", Geez:"ቀረበ" }, note:"يربط القرب المكاني بفعل التقدمة الطقسية في سياقات دينية." },
    { root:"R-B", proto:"*rabb-", ar:"ر ب ب", meaning:"كبير/رئيس", forms:{ Akkadian:"rabû", Ugaritic:"rb", Phoenician:"𐤓𐤁", Hebrew:"רב", Aramaic:"רב", Arabic:"رَبّ/رَبَا", Sabaic:"rb", Geez:"ረበ" }, note:"حقل الرئاسة والكثرة والنمو، مع تطورات دينية واجتماعية مختلفة." },
    { root:"S-M-ʿ", proto:"*š-m-ʿ", ar:"س م ع", meaning:"سمع", forms:{ Akkadian:"šemû", Ugaritic:"šmʿ", Phoenician:"𐤔𐤌𐤏", Hebrew:"שמע", Aramaic:"שמע", Arabic:"سَمِعَ", Sabaic:"s¹mʿ", Geez:"ሰምዐ" }, note:"يكشف مراسلات الصفير الأول بين التقاليد، مع بقاء دلالي قوي." },
    { root:"Š-M", proto:"*šim-", ar:"س م و", meaning:"اسم", forms:{ Akkadian:"šumu", Ugaritic:"šm", Phoenician:"𐤔𐤌", Hebrew:"שם", Aramaic:"שמא", Arabic:"اِسْم", Sabaic:"s¹m", Geez:"ስም" }, note:"لفظ أساسي في صيغ التسمية والنذر والأسماء الملكية، مع نقاش تاريخ الصفير والبنية الأولية." },
    { root:"Š-N-T", proto:"*šanat-", ar:"س ن ة", meaning:"سنة", forms:{ Akkadian:"šattu", Ugaritic:"št", Phoenician:"𐤔𐤍𐤕", Hebrew:"שנה", Aramaic:"שנתא", Arabic:"سَنَة", Sabaic:"s¹nt", Geez:"ዓመት (replacement)" }, note:"مثال على الإدغام الأكادي وعلى الصيغ الزمنية في التأريخ النقشي." },
    { root:"Š-R-R", proto:"*šarr-", ar:"ش ر ر", meaning:"ملك/سلطة", forms:{ Akkadian:"šarru", Ugaritic:"ṯr?", Phoenician:"—", Hebrew:"שר", Aramaic:"שר", Arabic:"—", Sabaic:"—", Geez:"—" }, note:"توزيع غير متساوٍ؛ يذكّر بأن إعادة الجذر لا تعني بقاءه في جميع الفروع أو بالمعنى نفسه." },
    { root:"T-W-R", proto:"*ṯawr-", ar:"ث و ر", meaning:"ثور", forms:{ Akkadian:"šūru", Ugaritic:"ṯr", Phoenician:"𐤔𐤓", Hebrew:"שור", Aramaic:"תורא", Arabic:"ثَوْر", Sabaic:"ṯwr", Geez:"ላሕም (replacement)" }, note:"مثال كلاسيكي لمصير *ṯ في الأكادية والكنعانية والآرامية والعربية." },
    { root:"Y-D", proto:"*yad-", ar:"ي د", meaning:"يد/قوة/نصب", forms:{ Akkadian:"qātu (replacement)", Ugaritic:"yd", Phoenician:"𐤉𐤃", Hebrew:"יד", Aramaic:"ידא", Arabic:"يَد", Sabaic:"yd", Geez:"እድ" }, note:"تتسع الدلالة من العضو إلى السلطة والنصب التذكاري في بعض المدونات." },
    { root:"Y-W-M", proto:"*yawm-", ar:"ي و م", meaning:"يوم", forms:{ Akkadian:"ūmu", Ugaritic:"ym", Phoenician:"𐤉𐤌", Hebrew:"יום", Aramaic:"יומא", Arabic:"يَوْم", Sabaic:"ywm", Geez:"ዕለት (replacement)" }, note:"يعرض انكماش المزدوجات وتنوع ألفاظ الزمن بين الفروع." }
  ];

  const extraArtifacts = [
    { id:"ja1028", title:"نقش كربئيل وتر الطويل (Ja 1028)", en:"Karibʾil Watar inscription (Ja 1028)", category:"inscription", branch:"asa", date:"القرن السابع ق.م تقريبًا", place:"صرواح", museum:"سجل رقمي/شواهد من معبد المقه", material:"حجر", script:"𐩫𐩧𐩨𐩱𐩡 𐩥𐩩𐩧", license:"بطاقة فهرسة تعليمية؛ راجع DASI والطبعة النقدية للصورة والنص", source:"https://dasi.cnr.it/", image:"", corpus:"Ja 1028", language:"Sabaic", certainty:"corpus-linked" },
    { id:"cih541", title:"نقش ترميم سد مأرب (CIH 541)", en:"Marib Dam restoration inscription (CIH 541)", category:"inscription", branch:"asa", date:"القرن السادس م", place:"مأرب", museum:"في الموقع/سجل DASI", material:"حجر", script:"𐩱𐩨𐩧𐩠 𐩨𐩬 𐩱𐩮𐩨𐩢", license:"بطاقة فهرسة تعليمية؛ يلزم الرجوع إلى سجل DASI قبل الاقتباس", source:"https://dasi.cnr.it/", image:"", corpus:"CIH 541", language:"Late Sabaic", certainty:"corpus-linked" },
    { id:"himyar-zafar", title:"نقوش ظفار الحميرية والسبئية المتأخرة", en:"Himyarite / Late Sabaic inscriptions from Zafar", category:"inscription", branch:"asa", date:"القرون الأولى–السادس م", place:"ظفار، اليمن", museum:"مجموعات موقعية ومتاحف", material:"حجر", script:"𐩢𐩣𐩺𐩧", license:"سجل موضوعي؛ لا يمثل قطعة واحدة ولا قراءة نهائية", source:"https://dasi.cnr.it/", image:"", corpus:"DASI: Zafar records", language:"Himyarite-period Late Sabaic", certainty:"thematic" },
    { id:"sefire", title:"معاهدات سفيرة الآرامية", en:"Sefire Aramaic treaty inscriptions", category:"inscription", branch:"aramaic", date:"القرن الثامن ق.م", place:"السفيرة، سورية", museum:"متحف دمشق الوطني", material:"بازلت", script:"𐡀𐡓𐡌", license:"بطاقة تعليمية مرتبطة بترقيم KAI؛ راجع سجل المتحف والطبعات", source:"https://www.worldcat.org/search?q=Sefire+inscriptions+KAI", image:"", corpus:"KAI 222–224", language:"Old Aramaic", certainty:"corpus-linked" },
    { id:"fekherye", title:"نقش تل فخيرية الثنائي", en:"Tell Fekheriye bilingual inscription", category:"inscription", branch:"aramaic", date:"القرن التاسع ق.م", place:"تل فخيرية، سورية", museum:"متحف دمشق الوطني", material:"بازلت", script:"𒀭 · 𐡀𐡓𐡌", license:"بطاقة تعليمية؛ راجع الطبعة الأكاديمية والصورة المرخصة", source:"https://www.worldcat.org/search?q=Tell+Fekheriye+inscription", image:"", corpus:"KAI 309", language:"Akkadian / Old Aramaic", certainty:"corpus-linked" },
    { id:"karatepe", title:"نقش كاراتبه الفينيقي–اللوفي", en:"Karatepe Phoenician–Luwian bilingual", category:"inscription", branch:"nw", date:"القرن الثامن ق.م", place:"كاراتبه، الأناضول", museum:"متحف كاراتبه المفتوح", material:"حجر", script:"𐤀𐤍𐤊 𐤀𐤆𐤕𐤅𐤃", license:"بطاقة فهرسة؛ راجع KAI والسجل الأثري للصورة والنص", source:"https://www.worldcat.org/search?q=Karatepe+inscription+KAI+26", image:"", corpus:"KAI 26", language:"Phoenician / Luwian", certainty:"corpus-linked" },
    { id:"tayma-stele", title:"مسلة تيماء الآرامية", en:"Tayma Aramaic stele", category:"inscription", branch:"aramaic", date:"القرن الخامس ق.م تقريبًا", place:"تيماء", museum:"متحف اللوفر", material:"حجر رملي", script:"𐡕𐡉𐡌𐡀", license:"بطاقة تعليمية؛ راجع سجل متحف اللوفر للحقوق والقياسات", source:"https://collections.louvre.fr/en/recherche?q=Tayma+stele", image:"", corpus:"Tayma stele", language:"Imperial Aramaic", certainty:"museum-linked" },
    { id:"namara", title:"نقش النمارة", en:"Namara inscription", category:"inscription", branch:"arabic", date:"328 م", place:"النمارة، حوران", museum:"متحف اللوفر", material:"بازلت", script:"𐢀𐢚𐢃 · عربي قديم", license:"بطاقة تعليمية؛ راجع سجل اللوفر والطبعات الحديثة", source:"https://collections.louvre.fr/en/recherche?q=Namara+inscription", image:"", corpus:"KAI 250", language:"Old Arabic in Nabataean-derived script", certainty:"corpus-linked" },
    { id:"dadan-lion", title:"نقوش دادان التذكارية", en:"Dadanitic memorial inscriptions", category:"inscription", branch:"ana", date:"الألف الأول ق.م", place:"دادان/العلا", museum:"في الموقع ومجموعات سعودية", material:"حجر رملي", script:"𐪃𐪚𐪕", license:"بطاقة موضوعية مرتبطة بـ OCIANA؛ يجب اختيار سجل القطعة قبل الاقتباس", source:"https://krc.orient.ox.ac.uk/ociana/", image:"", corpus:"OCIANA Dadanitic records", language:"Dadanitic", certainty:"database-linked" },
    { id:"taymanitic-records", title:"نقوش تيمائية صخرية", en:"Taymanitic rock inscriptions", category:"inscription", branch:"ana", date:"الألف الأول ق.م", place:"تيماء وشمال غرب الجزيرة", museum:"في الموقع/OCIANA", material:"صخر", script:"𐪉𐪔𐪑", license:"بطاقة موضوعية؛ راجع سجل OCIANA لكل نقش", source:"https://krc.orient.ox.ac.uk/ociana/", image:"", corpus:"OCIANA Taymanitic records", language:"Taymanitic", certainty:"database-linked" },
    { id:"ebla-tablets", title:"ألواح أرشيف إبلا الملكي", en:"Ebla Royal Archives tablets", category:"manuscript", branch:"east", date:"نحو القرن الرابع والعشرين ق.م", place:"تل مرديخ/إبلا", museum:"متحف إدلب ومجموعات سورية", material:"طين", script:"𒌈𒆠", license:"بطاقة أرشيفية تعليمية؛ ترتبط بالنشرات المتخصصة لا بصورة بعينها", source:"https://cdli.earth/", image:"", corpus:"Ebla archival tablets", language:"Eblaite / Sumerian scribal tradition", certainty:"archive-level" },
    { id:"oracc-tablet", title:"لوح أكادي مشروح رقمياً", en:"Digitally annotated Akkadian tablet", category:"manuscript", branch:"east", date:"فترات متعددة", place:"بلاد الرافدين", museum:"بحسب سجل ORACC/CDLI", material:"طين", script:"𒀀𒈾 𒈗", license:"بوابة بحث؛ حقوق الصورة تتبع سجل القطعة المحدد", source:"https://oracc.museum.upenn.edu/", image:"", corpus:"ORACC project records", language:"Akkadian", certainty:"database-linked" },
    { id:"himyar-map", title:"خريطة مراكز حمير والسبئية المتأخرة", en:"Himyar and Late Sabaic centers map", category:"map", branch:"asa", date:"مخطط تعليمي زمني", place:"مرتفعات اليمن ومأرب", museum:"الموسوعة", material:"خريطة بيانات", script:"ظفار · مأرب · ريدان", license:"إنشاء تعليمي تخطيطي؛ الإحداثيات تقريبية", source:"https://dasi.cnr.it/", image:"", corpus:"DASI-linked thematic map", language:"Late Sabaic", certainty:"schematic" },
    { id:"sound-shifts-matrix", title:"مصفوفة التحولات الصوتية السامية", en:"Pan-Semitic sound-shift matrix", category:"chart", branch:"all", date:"مرجع تعليمي", place:"الموسوعة", museum:"—", material:"جدول تفاعلي", script:"*ṯ → š / t / ṯ", license:"إنشاء أصلي مبني على المراجع المدرجة", source:"", image:"", corpus:"Comparative teaching matrix", language:"Comparative Semitic", certainty:"analytical" }
  ];

  const extraSites = [
    { id:"sirwah", ar:"صرواح", en:"Sirwah", branch:"asa", x:61, y:66, languages:["السبئية"], script:"𐩫𐩧𐩨𐩱𐩡", artifact:"Ja 1028 ونقوش معبد المقه", note:"مركز سبئي مهم؛ موضع العلامة تخطيطي ويجب الرجوع إلى تقارير الموقع وDASI." },
    { id:"zafar-yemen", ar:"ظفار/ريدان", en:"Zafar / Raydan", branch:"asa", x:58, y:71, languages:["السبئية المتأخرة","الحميرية"], script:"𐩢𐩣𐩺𐩧", artifact:"نقوش العصر الحميري والسبئية المتأخرة", note:"يرتبط تاريخ حمير بلغة النقوش السبئية المتأخرة؛ «الحميرية» تسمية تاريخية لا corpus لغويًا مستقلاً كامل الوصف." },
    { id:"sefire-site", ar:"السفيرة", en:"Sefire", branch:"aramaic", x:49, y:34, languages:["الآرامية القديمة"], script:"𐡀𐡓𐡌", artifact:"معاهدات سفيرة KAI 222–224", note:"شواهد رئيسة في لغة المعاهدات الآرامية القديمة." },
    { id:"tayma-site", ar:"تيماء", en:"Tayma", branch:"ana", x:53, y:51, languages:["التيمائية","الآرامية الإمبراطورية"], script:"𐪉𐪔𐪑 · 𐡕𐡉𐡌𐡀", artifact:"نقوش تيمائية ومسلة تيماء", note:"منطقة تماس بين تقاليد كتابية محلية وشبكات آرامية وإمبراطورية." },
    { id:"karatepe-site", ar:"كاراتبه", en:"Karatepe", branch:"nw", x:44, y:27, languages:["الفينيقية","اللوفية"], script:"𐤀𐤆𐤕𐤅𐤃", artifact:"النقش الثنائي KAI 26", note:"النص الثنائي مهم لفهم الفينيقية والكتابة الهيروغليفية اللوفية." },
    { id:"namara-site", ar:"النمارة", en:"Namara", branch:"arabic", x:48, y:43, languages:["العربية القديمة","النبطية"], script:"𐢀𐢚𐢃", artifact:"نقش النمارة 328م", note:"شاهد بارز في دراسة العربية القديمة وتاريخ الخط النبطي المتأخر." }
  ];

  const soundLaws = [
    { id:"canaanite-a-o", name:"التحول الكنعاني", from:"ā", to:"ō", targets:["Canaanite","Phoenician","Hebrew","Moabite"], environment:"في بيئات تاريخية محددة", example:"*šalām- → šālōm", caution:"ليس استبدالًا آليًا لكل ā." },
    { id:"arabic-p-f", name:"تحول الشفوي في العربية", from:"p", to:"f", targets:["Arabic","Sabaic","Geez"], environment:"مراسلة تاريخية عامة مع تفاصيل فرعية", example:"*p-ʿ-l → Arabic f-ʿ-l", caution:"الاقتراضات المتأخرة قد تحفظ p." },
    { id:"akkadian-w-loss", name:"تطور أنصاف الحركات الأكادي", from:"w", to:"Ø/ū", targets:["Akkadian","Babylonian","Assyrian"], environment:"بحسب الموضع والبنية المقطعية", example:"*yawm- ~ ūmu", caution:"يتطلب تحليل الصيغة والتأريخ ولا يطبق حرفيًا." },
    { id:"akkadian-th-s", name:"اندماج بين الأسنان في الأكادية", from:"ṯ", to:"š", targets:["Akkadian"], environment:"مراسلة تاريخية", example:"*ṯawr- → šūru", caution:"يجب ضبط الصامت السامي الأم والمادة المقارنة." },
    { id:"aramaic-th-t", name:"مآل بعض الأسنان في الآرامية", from:"ṯ", to:"t", targets:["Aramaic","Syriac"], environment:"تطور تاريخي عام", example:"*ṯawr- → tawrā", caution:"توجد طبقات واقتراضات وتهجئات محافظة." },
    { id:"spirantization", name:"الاحتكاك بعد الحركة", from:"b g d k p t", to:"β ɣ ð x f θ", targets:["Hebrew","Aramaic","Syriac"], environment:"بعد حركة في تقاليد تاريخية محددة", example:"Begadkefat", caution:"التوزيع والتأريخ مختلفان بين التقاليد." },
    { id:"diphthong-ay", name:"انكماش *ay", from:"ay", to:"ē", targets:["Phoenician","Hebrew","Aramaic"], environment:"في لهجات ومواضع محددة", example:"*bayt- → bēt (selected traditions)", caution:"لا يحدث في جميع اللغات أو كل البيئات." },
    { id:"diphthong-aw", name:"انكماش *aw", from:"aw", to:"ō", targets:["Canaanite","Aramaic"], environment:"في لهجات ومواضع محددة", example:"*mawt- → mōt (selected traditions)", caution:"تظل صيغ غير منكمشة وتهجئات محافظة." }
  ];

  const caseStudies = [
    { id:"mesha-reading", title:"نقش ميشع: من صورة القطعة إلى القراءة", branch:"nw", question:"كيف نفصل قراءة الحروف عن استكمال المواضع المكسورة؟", steps:["تثبيت رقم القطعة AO 5066 ومصدر الصورة","مقارنة الطبعات والنقحرات","وسم المقروء والمستكمل والمختلف عليه","ربط الصيغ المؤابية بالمقارنة الكنعانية"], outputs:["سجل اختلاف قراءات","جدول جذور","استشهاد KAI والطبعات"] },
    { id:"ahiram-script", title:"تابوت أحيرام: التأريخ والخط", branch:"nw", question:"ما الذي يقدمه التحليل الباليوغرافي وما حدوده؟", steps:["تسجيل سياق الاكتشاف","مراجعة شكل الحروف واتجاهها","فصل تاريخ القطعة عن تاريخ الكتابة","عرض بدائل التأريخ"], outputs:["مصفوفة أشكال","خط زمني","درجة يقين"] },
    { id:"ja1028-state", title:"Ja 1028 وبناء الدولة السبئية", branch:"asa", question:"كيف تربط الأفعال الملكية بالجغرافيا من دون تحويل النقش إلى سجل محايد؟", steps:["فتح سجل DASI والطبعة","تقسيم الأفعال والأماكن","وسم خطاب الشرعنة","مقارنة الأدلة الأثرية المستقلة"], outputs:["خريطة مواقع","قائمة أفعال","نقد المصدر"] },
    { id:"himyar-language", title:"حمير والسبئية المتأخرة", branch:"asa", question:"هل «الحميرية» لغة نقوش مستقلة أم تسمية تاريخية تحتاج تفكيكًا؟", steps:["تحديد تاريخ النقش ومكانه","تسجيل اللغة المسماة في الطبعة","فصل الهوية السياسية عن التصنيف اللغوي","مقارنة السمات بالسبئية المتأخرة"], outputs:["بطاقة تصنيف","سجل مصطلحات","قائمة مراجع"] },
    { id:"safaitic-life", title:"النقوش الصفائية وتاريخ الحياة اليومية", branch:"ana", question:"كيف نحول آلاف النصوص القصيرة إلى تاريخ اجتماعي منضبط؟", steps:["اختيار عينة موثقة من OCIANA","ترميز الأنشطة والأنساب والدعاء","فحص تحيز الحفظ والموقع","حساب التوزيع مع سياقه"], outputs:["CSV مرمّز","خريطة حرارة","مذكرة منهجية"] },
    { id:"akkadian-tablet", title:"لوح أكادي بين ORACC وCDLI", branch:"east", question:"كيف نتحقق من القراءة والترجمة والبيانات المتحفية؟", steps:["مطابقة رقم اللوح","مراجعة صورة CDLI","مقارنة تحليل ORACC بالطبعة","توثيق العلامات المكسورة"], outputs:["نقحرة","ترجمة مشروحة","سجل مصدر"] }
  ];

  const specializedStudies = [
    { title:"الحميرية والسبئية المتأخرة", scope:"الهوية السياسية، لغة النقوش، التحول الديني، وتأريخ المسند المتأخر", branch:"asa" },
    { title:"الاقتصاد النقشي في ممالك جنوب الجزيرة", scope:"الأوزان والضرائب والريّ والتجارة والقوافل", branch:"asa" },
    { title:"شبكات الآرامية الإمبراطورية", scope:"الإدارة والبرديات والحركة بين مصر وإيران وآسيا الوسطى", branch:"aramaic" },
    { title:"العربية القديمة بين النبطية والكتابة العربية", scope:"النقوش الانتقالية وأشكال الحروف واللغة", branch:"arabic" },
    { title:"الأرشيفات المسمارية والمعاجم القديمة", scope:"التدريب الكتابي والقوائم الثنائية والتقاليد المعجمية", branch:"east" },
    { title:"اللغات السامية الجنوبية الحديثة المهددة", scope:"التوثيق الصوتي والأخلاقيات والمجتمع ونقل اللغة", branch:"msa" }
  ];

  const contextualTips = {
    east:["افصل بين اللغة الأكادية ونظام الكتابة المسماري السومري الأصل.","سجّل قيمة العلامة والقراءة السياقية ولا تفترض تطابقهما.","وازن بين المرحلة اللهجية والنوع النصي قبل المقارنة."],
    nw:["الخط الصامت لا يسجل الحركات كاملة؛ أظهر مصدر إعادة البناء.","لا تجعل «الكنعانية» لهجة واحدة؛ حدّد اللغة والحقبة.","قارن رقم النقش والطبعة قبل اعتماد النقحرة."],
    aramaic:["حدّد الفرع الغربي أو الشرقي والمرحلة التاريخية.","افصل اللغة عن شكل الخط، فالخط الآرامي استُخدم للغات متعددة.","سجّل إن كانت الحركة من تقليد قراءة متأخر."],
    ana:["تعامل مع الثمودية بوصفها تسمية لمجموعات كتابية لا لغة موحدة.","اربط كل قراءة برقم OCIANA واتجاه الكتابة.","لا تستنتج غياب أداة من نقش قصير منفرد."],
    arabic:["حدّد تعريف «العربية القديمة» المستخدم في الدراسة.","افصل خصائص الخط النبطي المتأخر عن خصائص اللغة.","اقرن النقوش الانتقالية بالتأريخ والسياق."],
    asa:["تُسمى لغات المسند القديمة صيهدية/عربية جنوبية قديمة وليست مراحل من العربية.","في العصر الحميري، افصل الهوية السياسية عن لغة النقش المسماة في الطبعة.","اربط الشاهد برقم DASI/CIH/RES/Ja قبل الاقتباس."],
    msa:["لا تنقل النطق الحديث مباشرة إلى السامية الأم.","أشر إلى المجتمع واللهجة ومصدر التسجيل.","التوثيق الصوتي يحتاج موافقة وبيانات حقوق واضحة."],
    ethio:["افصل الجعزية الكلاسيكية عن اللغات الحديثة.","الفيدل نظام كتابي مقطعي ولا يساوي الجرد الصوتي تلقائيًا.","انتبه إلى الاتصال الكوشي والتحولات الإقليمية."]
  };

  const extraReferences = [
    { id:"oracc", author:"ORACC Project", year:2026, title:"Open Richly Annotated Cuneiform Corpus", publisher:"University of Pennsylvania and partner projects", type:"digital", lang:"en", url:"https://oracc.museum.upenn.edu/", abstract:"بوابة مشروعات للنصوص المسمارية المشروحة؛ يجب الاستشهاد بالمشروع واللوح والطبعة المحددة." },
    { id:"cdli", author:"Cuneiform Digital Library Initiative", year:2026, title:"Cuneiform Digital Library Initiative (CDLI)", publisher:"International scholarly consortium", type:"digital", lang:"en", url:"https://cdli.earth/", abstract:"فهرس رقمي للقطع المسمارية وصورها وبياناتها؛ حقوق الصور والقراءات تتبع كل سجل." },
    { id:"dasi-corpus", author:"Alessandra Avanzini et al.", year:2026, title:"DASI: Digital Archive for the Study of pre-Islamic Arabian Inscriptions", publisher:"CNR / University of Pisa", type:"corpus", lang:"multi", url:"https://dasi.cnr.it/", abstract:"مرجع رقمي لتحديد أرقام النقوش الجنوبية والعربية قبل الإسلام وبياناتها الببليوغرافية." },
    { id:"ociana-corpus", author:"M. C. A. Macdonald et al.", year:2026, title:"OCIANA: Online Corpus of the Inscriptions of Ancient North Arabia", publisher:"Khalili Research Centre, University of Oxford", type:"corpus", lang:"en", url:"https://krc.orient.ox.ac.uk/ociana/", abstract:"قاعدة بيانات مرجعية للنقوش العربية الشمالية القديمة، مع قراءات وبيانات وصور بحسب السجل." }
  ];

  const pushUnique = (target, items) => items.forEach(item => {
    if (!target.some(existing => existing.id ? existing.id === item.id : existing.root === item.root)) target.push(item);
  });

  pushUnique(D.lexicon, extraLexicon);
  pushUnique(D.artifacts, extraArtifacts);
  pushUnique(D.sites, extraSites);
  pushUnique(D.references, extraReferences);
  D.soundLaws = soundLaws;
  D.caseStudies = caseStudies;
  D.specializedStudies = specializedStudies;
  D.contextualTips = contextualTips;
  D.datasetVersion = "1.1.0";
})();
