(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{175:function(s,t,e){"use strict";e.r(t);var a=e(1),n=Object(a.a)({},function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",{staticClass:"content"},[s._m(0),s._v(" "),s._m(1),s._v(" "),e("h3",{attrs:{id:"ข้อจำกัดการใช้งาน-firebase-realtime-database-แบบฟรี"}},[s._v("ข้อจำกัดการใช้งาน Firebase Realtime Database แบบฟรี")]),s._v(" "),e("p"),s._m(2),e("p"),s._v(" "),e("h3",{attrs:{id:"firebase-account"}},[s._v("Firebase Account")]),s._v(" "),e("p",[s._v("เราสามารถใช้ Google Account เพื่อสมัคร Firebase Account และสร้าง Firebase Project ได้ที่ "),e("a",{attrs:{href:"https://console.firebase.google.com",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://console.firebase.google.com"),e("OutboundLink")],1)]),s._v(" "),s._m(3),s._v(" "),e("p"),s._m(4),e("p"),s._v(" "),e("h3",{attrs:{id:"เตรียมไฟล์สำหรับเขียนโปรแกรม"}},[s._v("เตรียมไฟล์สำหรับเขียนโปรแกรม")]),s._v(" "),s._m(5),s._v(" "),s._m(6),s._m(7),s._v(" "),s._m(8),s._m(9),s._v(" "),s._m(10),s._v(" "),e("p",[s._v("ใน Flow การทำงานของ Vue.js เมื่อเราต้องการ Update State เราก็จะกระทำกับตัว State นั้นโดยตรง ส่วนอื่นๆ ก็จะเกิดการ Reactive ตามมาเองครับ")]),s._v(" "),s._m(11),s._v(" "),s._m(12),s._v(" "),s._m(13),e("h3",{attrs:{id:"module-สำหรับ-firebase-application"}},[s._v("Module สำหรับ Firebase Application")]),s._v(" "),e("p",[s._v("เพื่อความสะดวกในการเรียกใช้ Instance ของ Firebase Application จากไฟล์ Component แต่ละไฟล์ เราจึงแยกเขียน โค้ดในส่วนนี้ออกเป็น Module ซะเลย")]),s._v(" "),s._m(14),s._v(" "),s._m(15),e("h3",{attrs:{id:"integrate-firebase-กับ-vue-js-component"}},[s._v("Integrate Firebase กับ Vue.js Component")]),s._v(" "),s._m(16),s._v(" "),s._m(17),s._v(" "),s._m(18),s._v(" "),s._m(19),s._v(" "),s._m(20),e("h3",{attrs:{id:"update-realtime-database"}},[s._v("Update Realtime Database")]),s._v(" "),s._m(21),s._v(" "),e("p",[s._v("ในขั้นตอนสุดท้ายเพี่ยงแค่ปรับโค้ดตามตัวอย่างด้านล่างก็เป็นอันเสร็จพิธีครับ")]),s._v(" "),s._m(22),s._v(" "),s._m(23),e("h3",{attrs:{id:"つづく"}},[s._v("つづく")])])},[function(){var s=this.$createElement,t=this._self._c||s;return t("h1",[this._v("ใช้งาน Firebase Realtime Database ร่วมกับ Vue.js แบบไม่ต้องง้อ "),t("code",[this._v("vuefire")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("p",[this._v("การเขียนโปรแกรมด้วย Vue.js เพื่อใช้งาน Firebase Realtime Database นั้น นักพัฒนาอาจจะนิยมใช้ "),t("code",[this._v("npm")]),this._v(" Package ที่ชื่อว่า "),t("code",[this._v("vuefire")]),this._v(" ซึ่งเป็น Official Package ของ Vue.js ที่ใช้งานง่ายและสะดวก อย่างไรเพื่อการทำความเข้าใจการทำงานร่วมกันระหว่าง Vue.js และ Firebase ในบทความนี้เราจะมาลองเขียนโปรแกรมเพื่อใช้งาน Firebase Realtime Database โดยใช้การสร้าง Subscription ใน Lifecycle Hooks ของ Vue.js กันครับ")])},function(){var s=this.$createElement,t=this._self._c||s;return t("figure",{staticClass:"image"},[t("img",{attrs:{src:"https://i.imgur.com/Mt3NMbJ.png",alt:""}})])},function(){var s=this.$createElement,t=this._self._c||s;return t("p",[this._v("หลังจากสร้าง Firebase Project ก็สามารถดูค่า Configuration เพื่อใช้สำหรับการตั้งค่าในขั้นตอนต่อไป ได้จากการคลิ๊กตามลำดับที่ "),t("code",[this._v("1.")]),this._v("และ"),t("code",[this._v("2.")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("figure",{staticClass:"image"},[t("img",{attrs:{src:"https://i.imgur.com/ekNBqAA.png",alt:""}})])},function(){var s=this.$createElement,t=this._self._c||s;return t("p",[t("em",[this._v("Path")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("div",{staticClass:"language- extra-class"},[t("pre",{staticClass:"hljs"},[t("code",[this._v("\n+-src\n|   |-Counter.vue\n|   |-firebase.js\n")])])])},function(){var s=this.$createElement,t=this._self._c||s;return t("p",[this._v("พิมพ์คำสั่งที่ "),t("em",[this._v("Terminal")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("div",{staticClass:"language-bash extra-class"},[t("pre",{staticClass:"hljs"},[t("code",[this._v("\n"),t("span",{staticClass:"hljs-comment"},[this._v("# ติดตั้ง package")]),this._v("\nnpm install @firebase/app --save\nnpm install @firebase/database --save\n")])])])},function(){var s=this.$createElement,t=this._self._c||s;return t("h3",{attrs:{id:"counter-component"}},[t("code",[this._v("Counter")]),this._v(" Component")])},function(){var s=this.$createElement,t=this._self._c||s;return t("p",[this._v("เริ่มต้นด้วยการโค้ด Counter Component ซึ่งจะทำการแสดงค่า Reactive State ชื่อ "),t("code",[this._v("counter")]),this._v(" พร้อมกับปุ่มที่ทำการ Increment ค่า "),t("code",[this._v("counter")]),this._v(" ไปเรื่อยๆ")])},function(){var s=this.$createElement,t=this._self._c||s;return t("p",[this._v("ไฟล์ "),t("em",[this._v("src/Counter.vue")])])},function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",{pre:!0},[e("div",{pre:!0,attrs:{class:"language-html extra-class"}},[e("pre",{pre:!0,attrs:{class:"hljs"}},[e("code",[s._v("\n"),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("p")]),s._v(">")]),s._v("Counter: {{ counter }}"),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("p")]),s._v(">")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("button")]),s._v(" @"),e("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("click")]),s._v("="),e("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"updateCounter"')]),s._v(">")]),s._v("Update"),e("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),e("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("button")]),s._v(">")]),s._v("\n")])])])])},function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",{staticClass:"language-js extra-class"},[e("pre",{staticClass:"hljs"},[e("code",[s._v("\n"),e("span",{staticClass:"hljs-keyword"},[s._v("export")]),s._v(" "),e("span",{staticClass:"hljs-keyword"},[s._v("default")]),s._v(" {\n    data() {\n        "),e("span",{staticClass:"hljs-keyword"},[s._v("return")]),s._v(" {\n            "),e("span",{staticClass:"hljs-attr"},[s._v("counter")]),s._v(": "),e("span",{staticClass:"hljs-number"},[s._v("1")]),s._v("\n        }\n    },\n\n    "),e("span",{staticClass:"hljs-attr"},[s._v("methods")]),s._v(": {\n        updateCounter() {\n            "),e("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".counter ++\n        }\n    }\n}\n")])])])},function(){var s=this.$createElement,t=this._self._c||s;return t("p",[this._v("ไฟล์ "),t("em",[this._v("src/firebase.js")])])},function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",{staticClass:"language-js extra-class"},[e("pre",{staticClass:"hljs"},[e("code",[s._v("\n"),e("span",{staticClass:"hljs-keyword"},[s._v("import")]),s._v(" firebase "),e("span",{staticClass:"hljs-keyword"},[s._v("from")]),s._v(" "),e("span",{staticClass:"hljs-string"},[s._v("'@firebase/app'")]),s._v("\n"),e("span",{staticClass:"hljs-keyword"},[s._v("import")]),s._v(" "),e("span",{staticClass:"hljs-string"},[s._v("'@firebase/database'")]),s._v("\n\n"),e("span",{staticClass:"hljs-comment"},[s._v("// ค่า minimum configuration คือ `apiKey` และ `databaseURL`")]),s._v("\n"),e("span",{staticClass:"hljs-keyword"},[s._v("const")]),s._v(" config = {\n  "),e("span",{staticClass:"hljs-attr"},[s._v("apiKey")]),s._v(": "),e("span",{staticClass:"hljs-string"},[s._v("'AIzaSyBEqQBxMg3M...'")]),s._v(",\n  "),e("span",{staticClass:"hljs-attr"},[s._v("databaseURL")]),s._v(": "),e("span",{staticClass:"hljs-string"},[s._v("'https://...'")]),s._v("\n}\n\n"),e("span",{staticClass:"hljs-comment"},[s._v("// คืนค่า firebase application ที่อาจถูก instantiate แล้วหรือ instantiate ใหม่")]),s._v("\n"),e("span",{staticClass:"hljs-keyword"},[s._v("export")]),s._v(" "),e("span",{staticClass:"hljs-keyword"},[s._v("default")]),s._v(" firebase.apps["),e("span",{staticClass:"hljs-number"},[s._v("0")]),s._v("] || firebase.initializeApp(config)\n")])])])},function(){var s=this.$createElement,t=this._self._c||s;return t("p",[this._v("Component ที่ต้องการใช้งาน Instance ของ Firebase Application เราก็จะทำการ Import Module และจะใช้ตัว Instance ดังกล่าวในการสร้างตัวแปรเพื่อเข้าถึง Collection ชื่อ "),t("code",[this._v("users")]),this._v(" ตามลำดับ")])},function(){var s=this.$createElement,t=this._self._c||s;return t("p",[this._v("เพื่อความง่ายเราจะเชื่อมต่อกับ Root Node โดยกำหนดชื่อว่า "),t("code",[this._v("counter")]),this._v(" ครับ")])},function(){var s=this.$createElement,t=this._self._c||s;return t("p",[t("img",{attrs:{src:"https://i.imgur.com/D8pANFL.png",alt:""}})])},function(){var s=this.$createElement,t=this._self._c||s;return t("p",[this._v("ไฟล์ "),t("em",[this._v("src/Counter.vue")])])},function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",{staticClass:"language-js extra-class"},[e("pre",{staticClass:"hljs"},[e("code",[s._v("\n"),e("span",{staticClass:"hljs-keyword"},[s._v("import")]),s._v(" firebaseApp "),e("span",{staticClass:"hljs-keyword"},[s._v("from")]),s._v(" "),e("span",{staticClass:"hljs-string"},[s._v("'./firebase'")]),s._v("\n\n"),e("span",{staticClass:"hljs-keyword"},[s._v("export")]),s._v(" "),e("span",{staticClass:"hljs-keyword"},[s._v("default")]),s._v(" {\n    created() {\n        "),e("span",{staticClass:"hljs-comment"},[s._v("// สร้าง reference ไปยัง counter ซึ่งเป็น root node ของ reatime database")]),s._v("\n        "),e("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".dbRef = firebaseApp.database().ref("),e("span",{staticClass:"hljs-string"},[s._v("'counter'")]),s._v(")\n    },\n\n    mounted() {\n        "),e("span",{staticClass:"hljs-comment"},[s._v("// สร้าง subscription สำหรับติดตามการเปลี่ยนแปลงของข้อมูล")]),s._v("\n        "),e("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".dbRef.on("),e("span",{staticClass:"hljs-string"},[s._v("'value'")]),s._v(", ss => {\n            "),e("span",{staticClass:"hljs-built_in"},[s._v("console")]),s._v(".log(ss.val())\n        })\n    },\n\n    beforeDestroy() {\n        "),e("span",{staticClass:"hljs-comment"},[s._v("// ยกเลิก subsciption เมื่อ component ถูกถอดจาก dom")]),s._v("\n        "),e("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".dbRef.off()\n    }\n}\n")])])])},function(){var s=this.$createElement,t=this._self._c||s;return t("p",[this._v("ใน Flow การทำงานของ Firebase เมื่อเราต้องการ Update State เราจะใช้วิธี Update ไปยังตัว Realtime Database เมื่อ Realtime Database เกิดการเปลี่ยนแปลง จะเกิด Callback มาที่ Method ที่เป็น Argument ของ "),t("code",[this._v(".on('value')")]),this._v(" เราจึงเพิ่มโค้ดเพื่อ Update State ที่ Method นี้แทน")])},function(){var s=this.$createElement,t=this._self._c||s;return t("p",[this._v("ไฟล์  "),t("em",[this._v("src/Counter.vue")])])},function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",{staticClass:"language-js extra-class"},[e("pre",{staticClass:"hljs"},[e("code",[s._v("\n"),e("span",{staticClass:"hljs-keyword"},[s._v("export")]),s._v(" "),e("span",{staticClass:"hljs-keyword"},[s._v("default")]),s._v(" {\n    "),e("span",{staticClass:"hljs-attr"},[s._v("methods")]),s._v(": {\n        updateCounter() {\n            "),e("span",{staticClass:"hljs-comment"},[s._v("// this.counter ++")]),s._v("\n            "),e("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".dbRef.set("),e("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".counter + "),e("span",{staticClass:"hljs-number"},[s._v("1")]),s._v(")\n        }\n    },\n\n    mounted() {\n        "),e("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".dbRef.on("),e("span",{staticClass:"hljs-string"},[s._v("'value'")]),s._v(", ss => {\n            "),e("span",{staticClass:"hljs-comment"},[s._v("// console.log(ss.val())")]),s._v("\n            "),e("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".counter = ss.val()\n        })\n    }\n}\n")])])])}],!1,null,null,null);t.default=n.exports}}]);