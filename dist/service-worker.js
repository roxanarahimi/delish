if(!self.define){let f,e={};const a=(a,i)=>(a=new URL(a+".js",i).href,e[a]||new Promise((e=>{if("document"in self){const f=document.createElement("script");f.src=a,f.onload=e,document.head.appendChild(f)}else f=a,importScripts(a),e()})).then((()=>{let f=e[a];if(!f)throw new Error(`Module ${a} didn’t register its module`);return f})));self.define=(i,o)=>{const s=f||("document"in self?document.currentScript.src:"")||location.href;if(e[s])return;let r={};const n=f=>a(f,s),t={module:{uri:s},exports:r,require:n};e[s]=Promise.all(i.map((f=>t[f]||n(f)))).then((f=>(o(...f),r)))}}define(["./workbox-2d118ab0"],(function(f){"use strict";f.setCacheNameDetails({prefix:"delish"}),self.addEventListener("message",(f=>{f.data&&"SKIP_WAITING"===f.data.type&&self.skipWaiting()})),f.precacheAndRoute([{url:"/css/app.da750a8f.css",revision:null},{url:"/css/fonts.css",revision:"b81c06f11bb75369bc896d14cb432df9"},{url:"/css/foods.cc7df557.css",revision:null},{url:"/css/orders.ae9a5178.css",revision:null},{url:"/css/style.css",revision:"8f84df9fee8ee355a403aece594f7208"},{url:"/fonts/BBadr.eot",revision:"e8ae5adc730a81cc92954fd1986f3b0c"},{url:"/fonts/BBadr.ttf",revision:"e3429be274c27dda9a82549ddbf93d74"},{url:"/fonts/BBadr.woff",revision:"ae12f7af23a34425d72afa5c2f74c019"},{url:"/fonts/BBaran.eot",revision:"003574286a7ccef45d1ed556c3cad031"},{url:"/fonts/BBaran.ttf",revision:"65ae7e3089724bdda57caae9c706d1c4"},{url:"/fonts/BBaran.woff",revision:"5fc9646bfcf0c52774045bccc2569cc1"},{url:"/fonts/BBardiya.eot",revision:"8879e0f2101f0f637a34a7870ff50b9c"},{url:"/fonts/BBardiya.ttf",revision:"5fd685bc8f45f530651867e6baae18ad"},{url:"/fonts/BBardiya.woff",revision:"9fa573dc144e2b354b1ff3761b727c41"},{url:"/fonts/BCompset.eot",revision:"86a68404aeba2010350a0f69ee66b6cf"},{url:"/fonts/BCompset.ttf",revision:"e5379bcfec2c3524898a1b4e2eab091c"},{url:"/fonts/BCompset.woff",revision:"38903b4fd3fe8fedfd86537838ec6f27"},{url:"/fonts/BDavat.eot",revision:"333bec29a5e11972fb7c80046f6d1639"},{url:"/fonts/BDavat.ttf",revision:"175cb831143c39eb18c6ac71dcbf2cf3"},{url:"/fonts/BDavat.woff",revision:"91b0844027f5dd63dbcca35c96c0ef0a"},{url:"/fonts/BElham.eot",revision:"a8a895d14c57ff813870a5e9d97f988e"},{url:"/fonts/BElham.ttf",revision:"0e61547039d71c8fd9ca0da6c332875c"},{url:"/fonts/BElham.woff",revision:"137991346fe6598ebd5e00f32bd88de3"},{url:"/fonts/BEsfehanBold.eot",revision:"f983307d06c0e020b63ba8e06f4a8766"},{url:"/fonts/BEsfehanBold.ttf",revision:"07b409f924f38d865a9d7f2d7a8d178a"},{url:"/fonts/BEsfehanBold.woff",revision:"358a1e8bfda231322ed88cedcb871e33"},{url:"/fonts/BFantezy.eot",revision:"7d28958c373f7e46f0465db9820e3ba2"},{url:"/fonts/BFantezy.ttf",revision:"648e4a16ee10fec108552dd34a48393e"},{url:"/fonts/BFantezy.woff",revision:"1fc0165dbe77b49adcd8b17139d56318"},{url:"/fonts/BFarnaz.eot",revision:"fbdb5439473c7deef23f3294cedbf8c3"},{url:"/fonts/BFarnaz.ttf",revision:"9db8469c52e01265e026a7f276b13237"},{url:"/fonts/BFarnaz.woff",revision:"401c161e0191b00f22b26431a07d2fde"},{url:"/fonts/BFerdosi.eot",revision:"9009dd2d8a69137b573aa9896154b757"},{url:"/fonts/BFerdosi.ttf",revision:"31d4e4a46b6e8c21ca8bffc38538c9df"},{url:"/fonts/BFerdosi.woff",revision:"907537763e846fc827f6008ef15ffe1d"},{url:"/fonts/BHamid.eot",revision:"99f0cfc0e7d5a417f2f31c120582f317"},{url:"/fonts/BHamid.ttf",revision:"0e39424f8ff49454bc3f3376c56b0199"},{url:"/fonts/BHamid.woff",revision:"1850c834efe532456811be790fee5bda"},{url:"/fonts/BHelal.eot",revision:"801e2f89f3316a9ed0b59f6c3ddc4e7a"},{url:"/fonts/BHelal.ttf",revision:"ede55135fedbad1d6afb711dad6a4b9e"},{url:"/fonts/BHelal.woff",revision:"ff13049d46be862758a63d543be17fbc"},{url:"/fonts/BHoma.eot",revision:"54c870c132feef950ab9af75d4424207"},{url:"/fonts/BHoma.ttf",revision:"ceb2126877e19f65feb2d430a7c23120"},{url:"/fonts/BHoma.woff",revision:"bc8457fc9518b16be1a8ef72a032b7d4"},{url:"/fonts/BJadidBold.eot",revision:"710e779afed13809febd1b15faf91fde"},{url:"/fonts/BJadidBold.ttf",revision:"0169604e35381822cee778ef35a62184"},{url:"/fonts/BJadidBold.woff",revision:"d849c70752db341b588ea7bcee0e3a44"},{url:"/fonts/BJalal.eot",revision:"26f628023b8ccc32d8c212910b1c7da1"},{url:"/fonts/BJalal.ttf",revision:"3457494dc9c789d6bde9d2622e95715b"},{url:"/fonts/BJalal.woff",revision:"737f81842a4bbbbbef4147bc38d41ecb"},{url:"/fonts/BKoodakBold.eot",revision:"ed831645c6fc5ab3fd2212ccb065499c"},{url:"/fonts/BKoodakBold.ttf",revision:"dfa43496eff6bbb32a1d2436a077c14c"},{url:"/fonts/BKoodakBold.woff",revision:"287f5740e1922a9f902dd9707bc094ac"},{url:"/fonts/BKourosh.eot",revision:"a186f4fef56fd9f7dcc256602fde137c"},{url:"/fonts/BKourosh.ttf",revision:"19b365d0d76e1641666d93468b94ff54"},{url:"/fonts/BKourosh.woff",revision:"93ff7d2a8eee1899907c6b82be8dd331"},{url:"/fonts/BLotus.eot",revision:"2026f0a6bc09a4a052cafb6336142289"},{url:"/fonts/BLotus.ttf",revision:"cddf76352dd26bc0b69d547ae035f59f"},{url:"/fonts/BLotus.woff",revision:"63b0d48a7f2ac8691da4d63b2d53161a"},{url:"/fonts/BMahsa.eot",revision:"ca340e5bb835df9d4bec5b7e0b792af8"},{url:"/fonts/BMahsa.ttf",revision:"4212144d79a3803eeaca150e388ce56e"},{url:"/fonts/BMahsa.woff",revision:"4ce2cc9e9651c10f03425cc5ecb7ecb9"},{url:"/fonts/BMehrBold.eot",revision:"6464b78b3f1c2a51ddf52edae336af1d"},{url:"/fonts/BMehrBold.ttf",revision:"6ba53acd0709f51be8f2f8af89114fae"},{url:"/fonts/BMehrBold.woff",revision:"ca1ebd4dc610ce210a65ea2dd9cfb536"},{url:"/fonts/BMitra.eot",revision:"5b019652a37f0eb3d95deaa2e8c9c6b2"},{url:"/fonts/BMitra.ttf",revision:"b7ba07f47b99f8c0ecb1c916906cfa08"},{url:"/fonts/BMitra.woff",revision:"53e01c6fd50f85d9f83aa787541c4109"},{url:"/fonts/BMorvarid.eot",revision:"8574a28539c93c0559b887c460b08e35"},{url:"/fonts/BMorvarid.ttf",revision:"4ab43393d2654c65a2a39ca538531bdf"},{url:"/fonts/BMorvarid.woff",revision:"d01070a79fe02788121b4a8ccdc4abb4"},{url:"/fonts/BNarm.eot",revision:"875c7d30f95abbec0b4e3aca1b26ff69"},{url:"/fonts/BNarm.ttf",revision:"da6b80c56fc8c453ceb66eeb9f4508b9"},{url:"/fonts/BNarm.woff",revision:"c1831fd72c6ec7c095635da15f6b633b"},{url:"/fonts/BNasimBold.eot",revision:"5e24f6837a3587ef994004a9e2726de0"},{url:"/fonts/BNasimBold.ttf",revision:"d9de79b33cc4bfc90f51fa0cb11a1f0a"},{url:"/fonts/BNasimBold.woff",revision:"a3fb55b0e0ed142a393b3521ad893deb"},{url:"/fonts/BNazanin.eot",revision:"0b8a8ba4fa3cf85b55080b0237a8b9a0"},{url:"/fonts/BNazanin.ttf",revision:"b63036ac4c35a57a39aa655254266bda"},{url:"/fonts/BNazanin.woff",revision:"e074f827d025842f07e2a9b1a44d42c0"},{url:"/fonts/BRoya.eot",revision:"bddf9b414b14014eba12f2d668191b55"},{url:"/fonts/BRoya.ttf",revision:"08a275871fc121b7bf40fec0471a9be8"},{url:"/fonts/BRoya.woff",revision:"509f14290a92bd618498bc8c5da1746d"},{url:"/fonts/BSetarehBold.eot",revision:"1ca2b7e39e26012656f306ea302b36fb"},{url:"/fonts/BSetarehBold.ttf",revision:"0080bf6e3841e5ca21531d0254f35b6a"},{url:"/fonts/BSetarehBold.woff",revision:"a2d79da0075e3b5f303a1fde525703dc"},{url:"/fonts/BShiraz.eot",revision:"581b8ffbfbfcd57844eeece2729dd263"},{url:"/fonts/BShiraz.ttf",revision:"052b08b74d70957c63cbe6a7ccf8ddd0"},{url:"/fonts/BShiraz.woff",revision:"e2889321b6047fb5121c3a3221bf54c0"},{url:"/fonts/BSinaBold.eot",revision:"b198a6f8723d9612da54a24b1a3a5301"},{url:"/fonts/BSinaBold.ttf",revision:"88da7b052418a036b458c2752cc78fe1"},{url:"/fonts/BSinaBold.woff",revision:"2743da46be523d9d56059b64949d4e99"},{url:"/fonts/BTabassom.eot",revision:"28c799506f8e7b68a2eb2f502d164839"},{url:"/fonts/BTabassom.ttf",revision:"35d1c019266f61970a5917aa1f49fde7"},{url:"/fonts/BTabassom.woff",revision:"818f5502890816acfaf0d3d666d682ed"},{url:"/fonts/BTehran.eot",revision:"618955aae95b836c9014d78dd03713a2"},{url:"/fonts/BTehran.ttf",revision:"ed264bba9e4bccc64e7ecedde9b9dbab"},{url:"/fonts/BTehran.woff",revision:"8144f2279acb7060c6da1c3a53329af7"},{url:"/fonts/BTitrBold.eot",revision:"f76cb2a447b981e61fadf808848e0f09"},{url:"/fonts/BTitrBold.ttf",revision:"65187b1da7ed3702ba0e4b47a2106591"},{url:"/fonts/BTitrBold.woff",revision:"1e209da700816141401a4a69d2ad326c"},{url:"/fonts/BTitrTGEBold.eot",revision:"130a8af8a1aea73eb7d5d681e50ad4ca"},{url:"/fonts/BTitrTGEBold.ttf",revision:"4773db9d665d74932cf0ac01de824d73"},{url:"/fonts/BTitrTGEBold.woff",revision:"e22c2100ee30dacca9cccdadb66a8c5a"},{url:"/fonts/BTraffic.eot",revision:"96ed10d44825f4b0ba6a707ed3014971"},{url:"/fonts/BTraffic.ttf",revision:"6b706b13b4b022a6ab669628c374c5ac"},{url:"/fonts/BTraffic.woff",revision:"1fb06b8ade418fa381359b425dd0a5c9"},{url:"/fonts/BVahidBold.eot",revision:"d53d6823dd80e01b32c74ec8b14e9334"},{url:"/fonts/BVahidBold.ttf",revision:"ee4ed7f3d289033ce560b3fac102777c"},{url:"/fonts/BVahidBold.woff",revision:"009dd7f7c355bf40f2717d0f94402ffa"},{url:"/fonts/BYagut.eot",revision:"286cdefa312aa5a52f06322ace02a76b"},{url:"/fonts/BYagut.ttf",revision:"c96790f5faac095d5af12c9ed9fa8ea1"},{url:"/fonts/BYagut.woff",revision:"f7c9fe093f3cddb9e52892b349034507"},{url:"/fonts/BYas.eot",revision:"d4c73ea793281e283a8f87375d4d928a"},{url:"/fonts/BYas.ttf",revision:"e07aacd5cc9a478bf4e1d6c5a6c617e5"},{url:"/fonts/BYas.woff",revision:"b00ae897628c0ebe344fe68e637456bb"},{url:"/fonts/BYekan.eot",revision:"7449863a7fc414e1f4d5b1634ceaf1a6"},{url:"/fonts/BYekan.ttf",revision:"0fddb75cc4bafe0b40c3333e3e51a2cb"},{url:"/fonts/BYekan.woff",revision:"d7b709263103c998c712e1395fc27936"},{url:"/fonts/BZar.eot",revision:"217a7d00886d096aa749b5bd3c302958"},{url:"/fonts/BZar.ttf",revision:"ee5ba220f3e248453e878beb6cb8c7b6"},{url:"/fonts/BZar.woff",revision:"bebb3ac3f605bf041cfa5db84307a95f"},{url:"/fonts/BZiba.eot",revision:"11827b01764605280002641fdff85317"},{url:"/fonts/BZiba.ttf",revision:"4383036361391ba067c5534b7208c7ea"},{url:"/fonts/BZiba.woff",revision:"646df2bb425a30818da8ed0eac3e9fac"},{url:"/fonts/IRANSansWeb/IRANSansWeb(FaNum).eot",revision:"94c311fd48c9362dea340aa3a29e3567"},{url:"/fonts/IRANSansWeb/IRANSansWeb(FaNum).ttf",revision:"e9908f05e5771638e40913309b784a17"},{url:"/fonts/IRANSansWeb/IRANSansWeb(FaNum).woff",revision:"bd6f69a8db87710b2f3fcd6ef75bd3e2"},{url:"/fonts/IRANSansWeb/IRANSansWeb(FaNum).woff2",revision:"eb5adaac0d814e1e8e5cbd75efb9db3e"},{url:"/fonts/IRANSansWeb/IRANSansWeb(FaNum)_Bold.eot",revision:"4abe296380edacb9f146cd778a94f43d"},{url:"/fonts/IRANSansWeb/IRANSansWeb(FaNum)_Bold.ttf",revision:"ff320f78af3a0fd44f2ee2993559fa9f"},{url:"/fonts/IRANSansWeb/IRANSansWeb(FaNum)_Bold.woff",revision:"753b3827c415580e864a545d1a860a5a"},{url:"/fonts/IRANSansWeb/IRANSansWeb(FaNum)_Bold.woff2",revision:"ceaf6d89af9fb96d0466b26d6f1c022a"},{url:"/fonts/IRANSansWeb/IRANSansWeb(FaNum)_Light.eot",revision:"ad395cc9a045cb4059bed55605a611e6"},{url:"/fonts/IRANSansWeb/IRANSansWeb(FaNum)_Light.ttf",revision:"bd26f02a2febca2229ccf2c4d37ee3f7"},{url:"/fonts/IRANSansWeb/IRANSansWeb(FaNum)_Light.woff",revision:"25bd95ce239f04e9457b5cf1c7dac593"},{url:"/fonts/IRANSansWeb/IRANSansWeb(FaNum)_Light.woff2",revision:"3f707510b31097b91baee0aaa50a57ce"},{url:"/fonts/IRANSansWeb/IRANSansWeb(FaNum)_Medium.eot",revision:"30ecec094f809f90a3e4c121115cc8ca"},{url:"/fonts/IRANSansWeb/IRANSansWeb(FaNum)_Medium.ttf",revision:"8789622647008ae1b00f6a890b49916e"},{url:"/fonts/IRANSansWeb/IRANSansWeb(FaNum)_Medium.woff",revision:"fe1913144aa13ac4b31777a96230fed1"},{url:"/fonts/IRANSansWeb/IRANSansWeb(FaNum)_Medium.woff2",revision:"62528a12d06f0745f8a43c0fd1318862"},{url:"/fonts/IRANSansWeb/IRANSansWeb(FaNum)_UltraLight.eot",revision:"bbb57c7053ed930508b718bc70802932"},{url:"/fonts/IRANSansWeb/IRANSansWeb(FaNum)_UltraLight.ttf",revision:"cb2ad2322140b8c86f1acb43710f9ad1"},{url:"/fonts/IRANSansWeb/IRANSansWeb(FaNum)_UltraLight.woff",revision:"658b85640048a3b6d9893cbb16a44cfb"},{url:"/fonts/IRANSansWeb/IRANSansWeb(FaNum)_UltraLight.woff2",revision:"6e57754a4baf5c1bcf358a9270049b3b"},{url:"/fonts/Iran Nastaligh Font 2.0 Beta/Font/Iran.Nastaliq.2.0.ttf",revision:"8d7d8fa0b9ddb8ec258ad6b8b9b6d254"},{url:"/fonts/Iran Nastaligh Font 2.0 Beta/Help.pdf",revision:"d2468fbb65e4c9d8f3845999ed4ad83c"},{url:"/fonts/Iran Nastaligh Font 2.0 Beta/Sarzamin Farsi Help.htm",revision:"0629e1de87eec771edf7cd3ee9109b9c"},{url:"/fonts/IranSans.ttf",revision:"e20972aee7112921a84fc1474cfba7a5"},{url:"/fonts/vazir-fonts/CHANGELOG.md",revision:"00597a29e3994edfa7de98dc5d0624ba"},{url:"/fonts/vazir-fonts/Farsi-Digits-Without-Latin/Vazir-Bold-FD-WOL.eot",revision:"9031bfdcb705c6935dfaeb01c8c48b68"},{url:"/fonts/vazir-fonts/Farsi-Digits-Without-Latin/Vazir-Bold-FD-WOL.ttf",revision:"2a2cd88d8a46202a13d46f478bccc62e"},{url:"/fonts/vazir-fonts/Farsi-Digits-Without-Latin/Vazir-Bold-FD-WOL.woff",revision:"ac2f1bdf2ea9a599bd9c98cdf6a158cd"},{url:"/fonts/vazir-fonts/Farsi-Digits-Without-Latin/Vazir-Bold-FD-WOL.woff2",revision:"0cad5012597169cc565522093b99df74"},{url:"/fonts/vazir-fonts/Farsi-Digits-Without-Latin/Vazir-FD-WOL.eot",revision:"79d2383471f394dfbe83842b9e4f37c6"},{url:"/fonts/vazir-fonts/Farsi-Digits-Without-Latin/Vazir-FD-WOL.ttf",revision:"1ac3ecd3b480fa8693061aedb2783e8a"},{url:"/fonts/vazir-fonts/Farsi-Digits-Without-Latin/Vazir-FD-WOL.woff",revision:"dcfcf40faa00612dc1b5f8e05b2b9153"},{url:"/fonts/vazir-fonts/Farsi-Digits-Without-Latin/Vazir-FD-WOL.woff2",revision:"09cc51915d2835f90418e74c4f05c171"},{url:"/fonts/vazir-fonts/Farsi-Digits-Without-Latin/Vazir-Light-FD-WOL.eot",revision:"5224e26693717bb61f051687f283cfa2"},{url:"/fonts/vazir-fonts/Farsi-Digits-Without-Latin/Vazir-Light-FD-WOL.ttf",revision:"3c796bfde5f6b46ec5c78a0cdf61b0ce"},{url:"/fonts/vazir-fonts/Farsi-Digits-Without-Latin/Vazir-Light-FD-WOL.woff",revision:"4527d3aef049abfb941256dc4cefb06d"},{url:"/fonts/vazir-fonts/Farsi-Digits-Without-Latin/Vazir-Light-FD-WOL.woff2",revision:"608415acb443131f2e9802f06c64e470"},{url:"/fonts/vazir-fonts/Farsi-Digits-Without-Latin/Vazir-Medium-FD-WOL.eot",revision:"f3ccd80571f80cd81acacfb05825d1a5"},{url:"/fonts/vazir-fonts/Farsi-Digits-Without-Latin/Vazir-Medium-FD-WOL.ttf",revision:"5340bb6f45ae63ffea8b8be3e7da5d91"},{url:"/fonts/vazir-fonts/Farsi-Digits-Without-Latin/Vazir-Medium-FD-WOL.woff",revision:"846e26e842bf9f35b5f1ef893e48965e"},{url:"/fonts/vazir-fonts/Farsi-Digits-Without-Latin/Vazir-Medium-FD-WOL.woff2",revision:"420ecdb7aed343f832da0f5063c26582"},{url:"/fonts/vazir-fonts/Farsi-Digits-Without-Latin/Vazir-Thin-FD-WOL.eot",revision:"bdb91cbaa77472ca3a8cee6790201979"},{url:"/fonts/vazir-fonts/Farsi-Digits-Without-Latin/Vazir-Thin-FD-WOL.ttf",revision:"d32ede6479a6fbfb9ae0b974e9ab69c9"},{url:"/fonts/vazir-fonts/Farsi-Digits-Without-Latin/Vazir-Thin-FD-WOL.woff",revision:"40d9e0d00df2bc9665fc119d851aed87"},{url:"/fonts/vazir-fonts/Farsi-Digits-Without-Latin/Vazir-Thin-FD-WOL.woff2",revision:"8b9229349acc797a4e974fc7d7ffcfd1"},{url:"/fonts/vazir-fonts/LICENSE",revision:"63aa060dde5535f21f848c69b7951c37"},{url:"/fonts/vazir-fonts/README.md",revision:"bba20c16c00f10feeca2039d70efe8e1"},{url:"/fonts/vazir-fonts/Vazir-Bold.eot",revision:"380d3338b01136a559e4577698318597"},{url:"/fonts/vazir-fonts/Vazir-Bold.ttf",revision:"8cea4a72681429a50b77de1d8aa609f3"},{url:"/fonts/vazir-fonts/Vazir-Bold.woff",revision:"06d42e475259e543806e34cde62f444e"},{url:"/fonts/vazir-fonts/Vazir-Bold.woff2",revision:"0c503e15fdffeb5b465760486d0472f9"},{url:"/fonts/vazir-fonts/Vazir-Light.eot",revision:"ee181cac89371b32c84ed24e7677a9cb"},{url:"/fonts/vazir-fonts/Vazir-Light.ttf",revision:"00f48b2a2bde26034df6e71ef3efadfe"},{url:"/fonts/vazir-fonts/Vazir-Light.woff",revision:"6c0a5ff35524caf9299877ad884e4733"},{url:"/fonts/vazir-fonts/Vazir-Light.woff2",revision:"d0a69cd04643602985210637d7dc3537"},{url:"/fonts/vazir-fonts/Vazir-Medium.eot",revision:"8bcbb741a2779e4e34b729c45f66f28f"},{url:"/fonts/vazir-fonts/Vazir-Medium.ttf",revision:"4a3887b6bfe4ed0fc41834d6e56b71ae"},{url:"/fonts/vazir-fonts/Vazir-Medium.woff",revision:"f2bd4a28e444d8f2ac28e9ce07b486b2"},{url:"/fonts/vazir-fonts/Vazir-Medium.woff2",revision:"0a3bc5ee1d3a315a24a1ac791a154823"},{url:"/fonts/vazir-fonts/Vazir-Thin.eot",revision:"3827ff8b38103584a840571f6eef219d"},{url:"/fonts/vazir-fonts/Vazir-Thin.ttf",revision:"e514f10989c43e8b8e0d81fac7aad163"},{url:"/fonts/vazir-fonts/Vazir-Thin.woff",revision:"7c81b653d9a41b0ae30534af4c13b5c2"},{url:"/fonts/vazir-fonts/Vazir-Thin.woff2",revision:"bb61b0157f216f5f31d8dd3fb58e8b4f"},{url:"/fonts/vazir-fonts/Vazir.eot",revision:"00dac7548bf7493c9042ad817d34cd46"},{url:"/fonts/vazir-fonts/Vazir.ttf",revision:"398b39dd0060814801cd1cbfe43fe0b5"},{url:"/fonts/vazir-fonts/Vazir.woff",revision:"331c39315fd661b27d8bba271fdb3fc0"},{url:"/fonts/vazir-fonts/Vazir.woff2",revision:"ea0968dcee21f5e5ada22ec622cb3733"},{url:"/img/chef1.928720a4.png",revision:null},{url:"/img/food-bg.a19d31bf.png",revision:null},{url:"/img/foods/1.jpg",revision:"0aea3dbc504e723ad59476b7dabbc2d0"},{url:"/img/foods/2.jpg",revision:"c532f84ffbdf6739d6ab8fc994451c69"},{url:"/img/foods/3.jpg",revision:"11daeb47884b3bace64ab9b05b873524"},{url:"/img/foods/4.jpg",revision:"539b2bd161933188d625ca673f2f8ca7"},{url:"/img/foods/5.jpg",revision:"3bf8078e6bd433c33d6ebcadd3e74c6a"},{url:"/img/foods/6.jpg",revision:"cc8236d3a0658e1d77799aec90dc1317"},{url:"/img/foods/7.jpg",revision:"ade6f74b91b7436b386c8e8933c486f8"},{url:"/img/foods/8.jpg",revision:"0b1ec5cc3cec2762fcd8bdf54c8f1dfa"},{url:"/img/foods/delish.png",revision:"94f3dad74955d12321d75cdff3ba80ed"},{url:"/img/foods/delish2.png",revision:"14370487713929927bb9b6acb4e63bf0"},{url:"/index.html",revision:"af3672da4bde6b09d5184bc0832dc3fe"},{url:"/js/app.bfb34db5.js",revision:null},{url:"/js/chunk-vendors.9cb0a781.js",revision:null},{url:"/js/foods.13bc69ad.js",revision:null},{url:"/js/orders.7f48f7f8.js",revision:null},{url:"/manifest.json",revision:"a58e4ae6cda4549744043ce117200c1c"},{url:"/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
