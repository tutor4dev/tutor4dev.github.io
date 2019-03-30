(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{184:function(t,s,e){"use strict";e.r(s);var i=e(1),n=Object(i.a)({},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"content"},[e("h1",[t._v("เขียนโปรแกรมส่งอีเมลด้วยภาษา Python ตอนที่ 1")]),t._v(" "),e("p",[t._v("โปรแกรมส่งอีเมลเป็นโปรแกรมที่เขียนง่าย และสามารถนำไปประยุกต์ใช้งานได้หลากหลาย เช่นการแจ้งโปรโมชั่นกับลูกค้า การส่งจดหมายเวียน และการใช้ยืนยันการสมัครสมาชิกของเว็บไซต์ เป็นต้น โดยบทความนี้จะเลือกใช้ภาษา Python ซึ่งกำลังฮอตฮิตเป็นอย่างมากในปัจจุบัน เนื่องจากเป็นภาษาที่เรียนรู้ง่ายแม้จะไม่เคยเขียนโปรแกรมมาก่อน และยังสามารถนำไปต่อยอดใช้กับการเขียนโปรแกรมด้าน Data Science และ Machine Learning ได้อีกด้วย")]),t._v(" "),e("h3",{attrs:{id:"ผู้ให้บริการ-smtp"}},[t._v("ผู้ให้บริการ SMTP")]),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),e("h3",{attrs:{id:"mailtrap-io"}},[t._v("Mailtrap.io")]),t._v(" "),t._m(2),t._v(" "),e("p",[t._v("แต่บทความนี้จะใช้บริการ "),e("a",{attrs:{href:"https://mailtrap.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://mailtrap.io/"),e("OutboundLink")],1),t._v(" ซึ่งเป็นบริการเซิร์ฟเวอร์ "),e("em",[t._v("SMTP")]),t._v(" ปลอมเพื่อใช้สำหรับการทดสอบเขียนโปรแกรมส่งอีเมลเท่านั้น (อีเมลจะไม่ถูกส่งจริงไปยังผู้รับ)")]),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),e("h3",{attrs:{id:"เตรียมไฟล์สำหรับเขียนโปรแกรม"}},[t._v("เตรียมไฟล์สำหรับเขียนโปรแกรม")]),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._m(9),t._v(" "),t._m(10),t._m(11),t._v(" "),t._m(12),t._v(" "),t._m(13),t._m(14),t._v(" "),t._m(15),t._v(" "),t._m(16),t._v(" "),t._m(17),t._v(" "),t._m(18),t._v(" "),t._m(19),t._v(" "),t._m(20),t._v(" "),t._m(21),t._v(" "),t._m(22),t._v(" "),t._m(23),t._m(24),t._v(" "),t._m(25),t._v(" "),t._m(26),t._v(" "),t._m(27),t._v(" "),e("h3",{attrs:{id:"โค้ดทั้งหมด"}},[t._v("โค้ดทั้งหมด")]),t._v(" "),t._m(28),t._m(29),t._v(" "),e("h3",{attrs:{id:"つづく"}},[t._v("つづく")])])},[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("p",[t._v("การที่เราสามารถ"),e("strong",[t._v("ส่ง")]),t._v("อีเมลถึงกันได้นั้นเป็นเพราะมีการใช้งานโปรโตคอล "),e("em",[t._v("SMTP")]),t._v(" และ "),e("em",[t._v("IMAP")]),t._v(" (บทความนี้จะกล่าวถึงโปรโตคอล "),e("em",[t._v("SMTP")]),t._v(" เท่านั้น) โดยโปรแกรมส่งอีเมลที่เราใช้จะส่งอีเมลไปยังเครื่อง "),e("em",[t._v("SMTP")]),t._v(" เซิร์ฟเวอร์ต้นทาง แล้วเจ้าเซิร์ฟเวอร์ดังกล่าวก็จะพยายามติดต่อกับเครื่อง "),e("em",[t._v("SMTP")]),t._v(" เซิร์ฟเวอร์ปลายทางเพื่อทำการส่งอีเมลกันต่อไป")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("บทความนี้จะสาธิตการเขียนโปรแกรมเพื่อ"),s("strong",[this._v("ส่ง")]),this._v("อีเมล ดังนั้นเราจึงสนใจแค่การส่งอีเมลไปยัง "),s("em",[this._v("SMTP")]),this._v(" เซิร์ฟเวอร์ต้นทางเพียงเท่านั้น เพราะงานส่วนที่เหลือเป็นภาระหน้าที่ของ "),s("em",[this._v("SMTP")]),this._v(" เซิร์ฟเวอร์ที่จะต้องดำเนินการในขั้นตอนต่อไป")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("โดยทั่วไปเราจะใช้ "),s("em",[this._v("SMTP")]),this._v(" เซิร์ฟเวอร์ของผู้ให้บริการอินเตอร์เน็ต เช่น เครื่องเซิร์ฟเวอร์ "),s("code",[this._v("smtp.3bbmail.com")]),this._v(" ของค่าย 3BB เป็นต้น โดยเราจะต้องมีบัญชีผู้ใช้ และรหัสผ่านจึงจะสามารถส่งอีเมลไปยังเครื่อง "),s("em",[this._v("SMTP")]),this._v(" เซิร์ฟเวอร์นั้นๆ ได้")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{attrs:{src:"https://i.imgur.com/ruxwKmK.png",alt:""}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{attrs:{src:"https://i.imgur.com/0mvwhfs.png",alt:""}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("blockquote",[s("p",[this._v("หลังจากสมัครใช้งาน Mailtrap.io แล้วเราสามารถดูค่าต่างๆ สำหรับใช้ในการเขียนโค้ด ตามรูปภาพข้างบนครับ โดยค่าที่เราต้องนำไปใช้ คือ Host, Port, Username และ Password")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("โปรแกรมนี้จะเขียนโค้ดทั้งหมดในไฟล์เพียงไฟล์เดียว โดยการสั่งให้โปรแกรมทำงานจะใช้วิธีการพิมพ์คำสั่งในโปรแกรม "),s("em",[this._v("Terminal")]),this._v(" หรือ "),s("em",[this._v("cmd.exe")]),this._v(" ครับ")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("em",[this._v("Path")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{staticClass:"hljs"},[s("code",[this._v("\n|-main.py\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("พิมพ์คำสั่งที่ "),s("em",[this._v("Terminal")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{staticClass:"hljs"},[s("code",[this._v("\n"),s("span",{staticClass:"hljs-comment"},[this._v("# สั่งให้โปรแกรมทำงาน")]),this._v("\npython main.py\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"ใช้งานโมดูล-smtplib"}},[this._v("ใช้งานโมดูล "),s("code",[this._v("smtplib")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("ไฟล์ "),s("em",[this._v("main.py")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-py extra-class"},[e("pre",{staticClass:"hljs"},[e("code",[t._v("\n"),e("span",{staticClass:"hljs-comment"},[t._v("# ใช้งานโมดูล")]),t._v("\n"),e("span",{staticClass:"hljs-keyword"},[t._v("import")]),t._v(" smtplib\n\n"),e("span",{staticClass:"hljs-comment"},[t._v("# กำหนดตัวแปรชื่อผู้ใช้ และ รหัสผ่าน")]),t._v("\nusername = "),e("span",{staticClass:"hljs-string"},[t._v("'f45df0b274f757'")]),t._v("\npassword = "),e("span",{staticClass:"hljs-string"},[t._v("'dc071f44e10bc9'")]),t._v("\n"),e("span",{staticClass:"hljs-comment"},[t._v("# กำหนดตัวแปรอีเมลผู้ส่ง และ ผู้รับ")]),t._v("\nsender = "),e("span",{staticClass:"hljs-string"},[t._v("'foo@gmail.com'")]),t._v("\nrecipient = "),e("span",{staticClass:"hljs-string"},[t._v("'bar@gmail.com'")]),t._v("\n\n"),e("span",{staticClass:"hljs-comment"},[t._v("# เนื้อหาของอีเมล")]),t._v("\nbody = "),e("span",{staticClass:"hljs-string"},[t._v('"""\nHello\nWorld\n"""')]),t._v("\n\nmail = body\n\n"),e("span",{staticClass:"hljs-comment"},[t._v("# ตั้งค่าเซิร์ฟเวอร์ด้วยชื่อโฮส และ พอร์ท")]),t._v("\nserver = smtplib.SMTP("),e("span",{staticClass:"hljs-string"},[t._v("'smtp.mailtrap.io'")]),t._v(", "),e("span",{staticClass:"hljs-number"},[t._v("25")]),t._v(")\nserver.login(username, password)\nserver.sendmail(sender, recipient, mail)\nserver.quit()\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{attrs:{src:"https://i.imgur.com/Q1fTGPX.png",alt:""}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{attrs:{src:"https://i.imgur.com/rQ3zS0M.png",alt:""}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{attrs:{src:"https://i.imgur.com/EeECOPh.png",alt:""}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("blockquote",[s("p",[this._v("หลังจากโปรแกรมทำงานเสร็จแล้ว (โดยไม่มี Error) จะเห็นว่าอีเมลถูกส่งไปยัง Mailtrap.io ซึ่งทำหน้าที่เป็นเครื่อง "),s("em",[this._v("SMTP")]),this._v(" เซิร์ฟเวอร์ให้กับเรา")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("มาถึงขั้นตอนนี้จะสังเกตุเห็นว่าแม้เราจะระบุ"),s("strong",[this._v("ผู้รับ")]),this._v("ด้วยโค้ด "),s("code",[this._v("server.sendmail(sender, recipient, mail)")]),this._v(" แต่ผลลัพธ์ที่เห็นเหมือนกับ"),s("strong",[this._v("ไม่มีผู้รับ")]),this._v("ถูกระบุอยู่ในอีเมลอยู่ดี")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("ปัญหาที่เจอในขั้นตอนนี้คือโดย Default เจ้าโมดูล "),s("code",[this._v("smtplib")]),this._v(" จะไม่สร้าง "),s("em",[this._v("SMTP Header")]),this._v(" โดยอัตโนมัติให้กับเรา เราจึงต้องทำการแก้ไขโค้ดเพื่อให้ "),s("em",[this._v("SMTP Header")]),this._v(" มีหน้าตาเหมือนกับรูปด้านล่างครับ")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{attrs:{src:"https://i.imgur.com/TDzvERs.png",alt:""}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"smtp-header"}},[s("em",[this._v("SMTP")]),this._v(" Header")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("ไฟล์ "),s("em",[this._v("main.py")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-py extra-class"},[e("pre",{staticClass:"hljs"},[e("code",[t._v("\n"),e("span",{staticClass:"hljs-comment"},[t._v("# ใช้งาน f-string")]),t._v("\nheader = "),e("span",{staticClass:"hljs-string"},[t._v("f'To: "),e("span",{staticClass:"hljs-subst"},[t._v("{ recipient }")]),t._v("'")]),t._v("\n\n"),e("span",{staticClass:"hljs-comment"},[t._v("# mail = body")]),t._v("\n"),e("span",{staticClass:"hljs-comment"},[t._v("# ระหว่าง header และ body จะต้องมีบรรทัดว่าง 1 บรรทัด")]),t._v("\nmail = header + "),e("span",{staticClass:"hljs-string"},[t._v("'\\n'")]),t._v(" + body\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{attrs:{src:"https://i.imgur.com/zi8i2Ou.png",alt:""}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{attrs:{src:"https://i.imgur.com/8dR2T7Z.png",alt:""}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{attrs:{src:"https://i.imgur.com/TDzvERs.png",alt:""}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("blockquote",[s("p",[this._v("ในครั้งนี้ จะเห็นว่ามีทั้งชื่อผู้ส่ง และผู้รับถูกต้องครบถ้วนครับ")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-py extra-class"},[e("pre",{staticClass:"hljs"},[e("code",[t._v("\n"),e("span",{staticClass:"hljs-keyword"},[t._v("import")]),t._v(" smtplib\n\nusername = "),e("span",{staticClass:"hljs-string"},[t._v("'f45df0b274f757'")]),t._v("\npassword = "),e("span",{staticClass:"hljs-string"},[t._v("'dc071f44e10bc9'")]),t._v("\n\nsender = "),e("span",{staticClass:"hljs-string"},[t._v("'foo@gmail.com'")]),t._v("\nrecipient = "),e("span",{staticClass:"hljs-string"},[t._v("'bar@gmail.com'")]),t._v("\n\nbody = "),e("span",{staticClass:"hljs-string"},[t._v('"""\nHello\nWorld\n"""')]),t._v("\n\nheader = "),e("span",{staticClass:"hljs-string"},[t._v("f'To: "),e("span",{staticClass:"hljs-subst"},[t._v("{ recipient }")]),t._v("\\n'")]),t._v("\n\nmail = header + body\n\nserver = smtplib.SMTP("),e("span",{staticClass:"hljs-string"},[t._v("'smtp.mailtrap.io'")]),t._v(", "),e("span",{staticClass:"hljs-number"},[t._v("25")]),t._v(")\nserver.login(username, password)\nserver.sendmail(sender, recipient, mail)\nserver.quit()\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("บทความตอนนี้จะเพียงแค่สาธิตการเขียนโปรแกรมด้วย Python เพื่อส่งอีเมลไปยัง "),s("em",[this._v("SMTP")]),this._v(" เซิร์ฟเวอร์ครับ ซึ่งผู้อ่านน่าจะพอสังเกตุเห็นแล้วว่าโปรแกรมของเรายังขาดความสมบูรณ์อีกหลายส่วน เช่น Subject ของอีเมล การส่งอีเมลหาผู้รับครั้งละหลายๆ คนเป็นต้น โดยเราจะยกยอดไปต่อกันในตอนหน้าครับ")])}],!1,null,null,null);s.default=n.exports}}]);