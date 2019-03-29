(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{167:function(s,t,e){"use strict";e.r(t);var a=e(1),i=Object(a.a)({},function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",{staticClass:"content"},[e("h1",[s._v("Implement Laravel Authorization ด้วย Gate")]),s._v(" "),s._m(0),s._v(" "),s._m(1),s._v(" "),e("h3",{attrs:{id:"ตรวจสอบ-released-version-ของ-laravel-5"}},[s._v("ตรวจสอบ Released Version ของ Laravel 5")]),s._v(" "),s._m(2),s._v(" "),s._m(3),e("p"),s._m(4),e("p"),s._v(" "),e("h3",{attrs:{id:"การ-upgrade-จาก-laravel-released-ก่อนหน้า"}},[s._v("การ Upgrade จาก Laravel Released ก่อนหน้า")]),s._v(" "),s._m(5),s._v(" "),s._m(6),s._v(" "),s._m(7),s._m(8),s._v(" "),s._m(9),e("h3",{attrs:{id:"การกำหนด-policy"}},[s._v("การกำหนด Policy")]),s._v(" "),s._m(10),s._v(" "),s._m(11),s._m(12),s._v(" "),e("h3",{attrs:{id:"ตรวจสอบ-authorization-ใน-controller"}},[s._v("ตรวจสอบ Authorization ใน Controller")]),s._v(" "),s._m(13),s._v(" "),s._m(14),s._v(" "),s._m(15),s._m(16),s._v(" "),e("h3",{attrs:{id:"การกำหนด-policy-แบบมีการอ้างอิง-model-อื่น"}},[s._v("การกำหนด Policy แบบมีการอ้างอิง Model อื่น")]),s._v(" "),e("p",[s._v("ยกตัวอย่างเช่น ในกรณีที่เราจะอนุญาตให้ User สามารถลบเฉพาะ Post ของตัวเองได้เท่านั้น")]),s._v(" "),s._m(17),s._v(" "),s._m(18),s._m(19),s._v(" "),s._m(20),s._v(" "),s._m(21),e("h3",{attrs:{id:"ตรวจสอบ-authorization-ใน-model"}},[s._v("ตรวจสอบ Authorization ใน Model")]),s._v(" "),s._m(22),s._v(" "),s._m(23),s._v(" "),s._m(24),e("h3",{attrs:{id:"ตรวจสอบ-authorization-ใน-blade"}},[s._v("ตรวจสอบ Authorization ใน Blade")]),s._v(" "),e("p",[s._v("เราสามารถทำการตรวจสอบ Authorization ที่ระดับของ Blade ได้เช่นกัน เช่น เราต้องการจะแสดง Link ในการลบ Post เฉพาะกรณีที่ User มีสิทธิในการเข้าถึงเท่านั้น")]),s._v(" "),s._m(25),s._v(" "),s._m(26),e("h3",{attrs:{id:"บทสรุป"}},[s._v("บทสรุป")]),s._v(" "),e("p",[s._v("การทำ Authorization นั้นเป็นสิ่งที่มีความจำเป็นแทบในทุกๆ App ซึ่ง "),e("code",[s._v("Gate")]),s._v(" ใน Laravel Released 5.1.11 นั้นช่วยให้ชีวิตของ Developer ง่ายยิ่งขึ้นอีกเยอะ ในบทความนี้เป็นเพียงการพูดถึง "),e("code",[s._v("Gate")]),s._v(" ในระดับพื้นฐานเท่านั้น หากผู้อ่านสนใจใช้งาน "),e("code",[s._v("Gate")]),s._v(" ในระดับสูงสามารถศึกษาได้จาก "),e("a",{attrs:{href:"http://laravel.com/docs/5.1/authorization",target:"_blank",rel:"noopener noreferrer"}},[s._v("Documentation"),e("OutboundLink")],1),s._v(" ของ Laravel โดยตรงครับ")]),s._v(" "),s._m(27)])},[function(){var s=this.$createElement,t=this._self._c||s;return t("p",[this._v("ความสามารถในการทำ Authentication ที่มากับ Laravel แบบ Out-of-the-Box นั้นเพิ่มความสะดวกให้ Developer เป็นอย่างมาก เมื่อใช้ "),t("code",[this._v("Auth")]),this._v(" ร่วมกับ "),t("code",[this._v("Eloquent")]),this._v(" แล้ว Developer อย่างพวกเราแทบจะไม่ต้องทำอะไรเลยก็สามารถมีระบบ Authentication ให้กับ Web App ของเราได้ทันที")])},function(){var s=this.$createElement,t=this._self._c||s;return t("p",[this._v("หลังจากจัดการเรื่อง Authentication แล้ว เราก็ยังมีความต้องการที่จะต้องจัดการเรื่อง Access Control List (ACL) เพิ่มเติม แต่หลังจากนี้ไม่มีอะไรยุ่งยากอีกต่อไปเมื่อ Laravel Released 5.1.11 ได้เพิ่มเติม Facade และ ServiceProvider สำหรับการทำ Authorization นั่นคือ "),t("code",[this._v("Gate")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("p",[this._v("พิมพ์คำสั่งที่ "),t("em",[this._v("Terminal")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("div",{staticClass:"language-bash extra-class"},[t("pre",{staticClass:"hljs"},[t("code",[this._v("\nphp artisan --version\n")])])])},function(){var s=this.$createElement,t=this._self._c||s;return t("figure",{staticClass:"image"},[t("img",{attrs:{src:"/images/blogs/1509-001.png",alt:"ภาพตัวอย่างการตรวจเช็ค Version ของ Laravel"}})])},function(){var s=this.$createElement,t=this._self._c||s;return t("p",[this._v("เนื่องจากการ Upgrade จาก Released ก่อนหน้า 5.1.11 โดยการใช้ "),t("code",[this._v("composer update")]),this._v(" นั้น เป็นเพียงการ Update "),t("code",[this._v("Illuminate")]),this._v(" เท่านั้น จึงส่งผลให้ไฟล์ที่อยู่นอก Folder "),t("code",[this._v("vendor")]),this._v(" ไม่ได้รับการเปลี่ยนแปลงแต่อย่างใด เราจึงต้องทำการ Manual Update เพิ่มเติมดังนี้")])},function(){var s=this.$createElement,t=this._self._c||s;return t("p",[this._v("เพิ่มไฟล์ "),t("em",[this._v("app/Providers/AuthServiceProvider.php")])])},function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",{staticClass:"language-php extra-class"},[e("pre",{staticClass:"hljs"},[e("code",[s._v("\n"),e("span",{staticClass:"hljs-keyword"},[s._v("namespace")]),s._v(" "),e("span",{staticClass:"hljs-title"},[s._v("App")]),s._v("\\"),e("span",{staticClass:"hljs-title"},[s._v("Providers")]),s._v(";\n\n"),e("span",{staticClass:"hljs-keyword"},[s._v("use")]),s._v(" "),e("span",{staticClass:"hljs-title"},[s._v("Illuminate")]),s._v("\\"),e("span",{staticClass:"hljs-title"},[s._v("Contracts")]),s._v("\\"),e("span",{staticClass:"hljs-title"},[s._v("Auth")]),s._v("\\"),e("span",{staticClass:"hljs-title"},[s._v("Access")]),s._v("\\"),e("span",{staticClass:"hljs-title"},[s._v("Gate")]),s._v(" "),e("span",{staticClass:"hljs-title"},[s._v("as")]),s._v(" "),e("span",{staticClass:"hljs-title"},[s._v("GateContract")]),s._v(";\n"),e("span",{staticClass:"hljs-keyword"},[s._v("use")]),s._v(" "),e("span",{staticClass:"hljs-title"},[s._v("Illuminate")]),s._v("\\"),e("span",{staticClass:"hljs-title"},[s._v("Foundation")]),s._v("\\"),e("span",{staticClass:"hljs-title"},[s._v("Support")]),s._v("\\"),e("span",{staticClass:"hljs-title"},[s._v("Providers")]),s._v("\\"),e("span",{staticClass:"hljs-title"},[s._v("AuthServiceProvider")]),s._v(" "),e("span",{staticClass:"hljs-title"},[s._v("as")]),s._v(" "),e("span",{staticClass:"hljs-title"},[s._v("ServiceProvider")]),s._v(";\n\n"),e("span",{staticClass:"hljs-class"},[e("span",{staticClass:"hljs-keyword"},[s._v("class")]),s._v(" "),e("span",{staticClass:"hljs-title"},[s._v("AuthServiceProvider")]),s._v(" "),e("span",{staticClass:"hljs-keyword"},[s._v("extends")]),s._v(" "),e("span",{staticClass:"hljs-title"},[s._v("ServiceProvider")]),s._v("\n")]),s._v("{\n    "),e("span",{staticClass:"hljs-comment"},[s._v("/**\n     * The policy mappings for the application.\n     *\n     * "),e("span",{staticClass:"hljs-doctag"},[s._v("@var")]),s._v(" array\n     */")]),s._v("\n    "),e("span",{staticClass:"hljs-keyword"},[s._v("protected")]),s._v(" $policies = [\n        "),e("span",{staticClass:"hljs-string"},[s._v("'App\\Model'")]),s._v(" => "),e("span",{staticClass:"hljs-string"},[s._v("'App\\Policies\\ModelPolicy'")]),s._v(",\n    ];\n\n    "),e("span",{staticClass:"hljs-comment"},[s._v("/**\n     * Register any application authentication / authorization services.\n     *\n     * "),e("span",{staticClass:"hljs-doctag"},[s._v("@param")]),s._v("  \\Illuminate\\Contracts\\Auth\\Access\\Gate  $gate\n     * "),e("span",{staticClass:"hljs-doctag"},[s._v("@return")]),s._v(" void\n     */")]),s._v("\n    "),e("span",{staticClass:"hljs-keyword"},[s._v("public")]),s._v(" "),e("span",{staticClass:"hljs-function"},[e("span",{staticClass:"hljs-keyword"},[s._v("function")]),s._v(" "),e("span",{staticClass:"hljs-title"},[s._v("boot")]),e("span",{staticClass:"hljs-params"},[s._v("(GateContract $gate)")]),s._v("\n    ")]),s._v("{\n        "),e("span",{staticClass:"hljs-keyword"},[s._v("parent")]),s._v("::registerPolicies($gate);\n\n        "),e("span",{staticClass:"hljs-comment"},[s._v("//")]),s._v("\n    }\n}\n")])])])},function(){var s=this.$createElement,t=this._self._c||s;return t("p",[this._v("แก้ไขไฟล์ "),t("em",[this._v("config/app.php")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("div",{staticClass:"language-php extra-class"},[t("pre",{staticClass:"hljs"},[t("code",[this._v("\n"),t("span",{staticClass:"hljs-comment"},[this._v("/*\n * Application Service Providers...\n */")]),this._v("\n\nApp\\Providers\\AppServiceProvider::class,\nApp\\Providers\\AuthServiceProvider::class,\n\n...\n\n"),t("span",{staticClass:"hljs-string"},[this._v("'aliases'")]),this._v(" => [\n    ...\n    "),t("span",{staticClass:"hljs-string"},[this._v("'Gate'")]),this._v(" => Illuminate\\Support\\Facades\\Gate::class,\n    ...\n];\n")])])])},function(){var s=this.$createElement,t=this._self._c||s;return t("p",[this._v("การกำหนด Policy ในการเข้าถึง Resource ต่างๆ ภายใน App นั้น เราจะกำหนดไว้ที่ไฟล์ "),t("code",[this._v("app/Providers/AuthServiceProvider.php")]),this._v(" ภายใน Function ที่ชื่อ "),t("code",[this._v("boot()")])])},function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",{staticClass:"language-php extra-class"},[e("pre",{staticClass:"hljs"},[e("code",[s._v("\n"),e("span",{staticClass:"hljs-class"},[e("span",{staticClass:"hljs-keyword"},[s._v("class")]),s._v(" "),e("span",{staticClass:"hljs-title"},[s._v("AuthServiceProvider")]),s._v(" "),e("span",{staticClass:"hljs-keyword"},[s._v("extends")]),s._v(" "),e("span",{staticClass:"hljs-title"},[s._v("ServiceProvider")]),s._v("\n")]),s._v("{\n    "),e("span",{staticClass:"hljs-keyword"},[s._v("public")]),s._v(" "),e("span",{staticClass:"hljs-function"},[e("span",{staticClass:"hljs-keyword"},[s._v("function")]),s._v(" "),e("span",{staticClass:"hljs-title"},[s._v("boot")]),e("span",{staticClass:"hljs-params"},[s._v("(GateContract $gate)")]),s._v("\n    ")]),s._v("{\n        "),e("span",{staticClass:"hljs-keyword"},[s._v("parent")]),s._v("::registerPolicies($gate);\n\n        $gate->define("),e("span",{staticClass:"hljs-string"},[s._v("'list-employee'")]),s._v(", "),e("span",{staticClass:"hljs-function"},[e("span",{staticClass:"hljs-keyword"},[s._v("function")]),e("span",{staticClass:"hljs-params"},[s._v("($user)")]),s._v(" ")]),s._v("{\n            "),e("span",{staticClass:"hljs-keyword"},[s._v("return")]),s._v(" $user->role === "),e("span",{staticClass:"hljs-string"},[s._v("'admin'")]),s._v(";\n        });\n    }\n}\n")])])])},function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("blockquote",[e("p",[s._v("สังเกตุว่า Function "),e("code",[s._v("boot()")]),s._v(" จะมีการ Inject "),e("code",[s._v("GateContract")]),s._v(" เข้ามาเพื่อใช้งาน")]),s._v(" "),e("p",[s._v("เรากำหนด Policy โดยการใช้ "),e("code",[s._v("$gate->define")]),s._v(" และ กำหนดชื่อ เช่น "),e("code",[s._v("list-employee")]),s._v(" พร้อมทั้งมีการรับ Parameter "),e("code",[s._v("$user")]),s._v(" จากตัวอย่างข้างต้น "),e("code",[s._v("$user")]),s._v(" จะเป็นตัวแปรที่เก็บค่า User ของ Session ซึ่งมาจากการเรียกใช้ "),e("code",[s._v("Auth::attemp()")]),s._v(" ในการทำ Authentication ซึ่งเราได้กำหนด Policy ไว้ว่า User ที่สามารถเข้าถึง "),e("code",[s._v("list-employee")]),s._v(" ได้นั้นจะต้องมี Field "),e("code",[s._v("role")]),s._v(" ในฐานข้อมูลเท่ากับ "),e("code",[s._v("admin")])]),s._v(" "),e("p",[s._v("เนื่องจาก "),e("code",[s._v("Gate")]),s._v(" รับค่าต่อมาจาก "),e("code",[s._v("$user")]),s._v(" ดังนั้นหากยังไม่มีการ Logged in การทำ Authorization ด้วย "),e("code",[s._v("Gate")]),s._v(" จะคืนค่า "),e("code",[s._v("false")]),s._v(" โดยอัตโนมัติ")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("p",[this._v("เราสามารถอ้างถึง "),t("code",[this._v("Gate")]),this._v(" Facade ได้ทันทีเมื่อเรามีความต้องการที่จะทำการตรวจสอบสิทธิ์ในการเข้าถึง โดยการใช้ "),t("code",[this._v("Gate::allows()")]),this._v(" แล้วตามด้วยชื่อของ Policy ที่ได้กำหนดไว้")])},function(){var s=this.$createElement,t=this._self._c||s;return t("p",[t("em",[this._v("Controller")])])},function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",{staticClass:"language-php extra-class"},[e("pre",{staticClass:"hljs"},[e("code",[s._v("\n"),e("span",{staticClass:"hljs-keyword"},[s._v("if")]),s._v(" (\\Gate::allows("),e("span",{staticClass:"hljs-string"},[s._v("'list-employee'")]),s._v(")) {\n    "),e("span",{staticClass:"hljs-keyword"},[s._v("echo")]),s._v(" "),e("span",{staticClass:"hljs-string"},[s._v("'You have permission'")]),s._v(";\n} "),e("span",{staticClass:"hljs-keyword"},[s._v("else")]),s._v(" {\n    "),e("span",{staticClass:"hljs-keyword"},[s._v("echo")]),s._v(" "),e("span",{staticClass:"hljs-string"},[s._v("'You have no permissions'")]),s._v(";\n}\n")])])])},function(){var s=this.$createElement,t=this._self._c||s;return t("blockquote",[t("p",[t("code",[this._v("Gate::allows()")]),this._v(" จะอนุญาตให้ทำเมื่อ Policy คืนค่า "),t("code",[this._v("false")]),this._v(" ส่วน "),t("code",[this._v("Gate::denies()")]),this._v(" จะให้ผลลัพธ์ตรงกันข้าม")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("p",[t("em",[this._v("app/Providers/AuthServiceProvider.php")])])},function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",{staticClass:"language-php extra-class"},[e("pre",{staticClass:"hljs"},[e("code",[s._v("\n$gate->define("),e("span",{staticClass:"hljs-string"},[s._v("'delete-post'")]),s._v(", "),e("span",{staticClass:"hljs-function"},[e("span",{staticClass:"hljs-keyword"},[s._v("function")]),e("span",{staticClass:"hljs-params"},[s._v("($user, $post)")]),s._v(" ")]),s._v("{\n    "),e("span",{staticClass:"hljs-keyword"},[s._v("return")]),s._v(" $post->user_id = $user->id;\n});\n")])])])},function(){var s=this.$createElement,t=this._self._c||s;return t("blockquote",[t("p",[this._v("ตรวจสอบว่า Post ที่ User ต้องการลบมี ID ของเจ้าของ Post ตรงกับ ID ของ User ตาม Session หรือไม่")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("p",[t("em",[this._v("Controller")])])},function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",{staticClass:"language-php extra-class"},[e("pre",{staticClass:"hljs"},[e("code",[s._v("\n$post = \\App\\Post::find($id);\n\n"),e("span",{staticClass:"hljs-keyword"},[s._v("if")]),s._v(" (\\Gate::allows("),e("span",{staticClass:"hljs-string"},[s._v("'delete-post'")]),s._v(", $post)) {\n    "),e("span",{staticClass:"hljs-keyword"},[s._v("echo")]),s._v(" "),e("span",{staticClass:"hljs-string"},[s._v("'You have permission to delete'")]),s._v(";\n} "),e("span",{staticClass:"hljs-keyword"},[s._v("else")]),s._v(" {\n    "),e("span",{staticClass:"hljs-keyword"},[s._v("echo")]),s._v(" "),e("span",{staticClass:"hljs-string"},[s._v("'You have no permissions to delete'")]),s._v(";\n}\n")])])])},function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("p",[s._v("เราสามารถทำการตรวจสอบ Authorization ที่ระดับ Model ได้เช่นกัน โดยการใช้ "),e("code",[s._v("can()")]),s._v(" ของ "),e("code",[s._v("App\\User")]),s._v(" ซึ่งจะมีค่าเทียบเท่ากับการใช้ "),e("code",[s._v("Gate::allows()")]),s._v(" ในระดับ Controller ส่วน "),e("code",[s._v("cannot()")]),s._v(" จะเทียบเท่ากับ "),e("code",[s._v("Gate::denies()")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("p",[t("em",[this._v("Model")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("div",{staticClass:"language-php extra-class"},[t("pre",{staticClass:"hljs"},[t("code",[this._v("\n"),t("span",{staticClass:"hljs-keyword"},[this._v("if")]),this._v(" ($user->can("),t("span",{staticClass:"hljs-string"},[this._v("'delete-post'")]),this._v(", $post)) {\n    "),t("span",{staticClass:"hljs-comment"},[this._v("// You have permission to delete")]),this._v("\n}\n")])])])},function(){var s=this.$createElement,t=this._self._c||s;return t("p",[t("em",[this._v("Blade")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("div",{staticClass:"language- extra-class"},[t("pre",{staticClass:"hljs"},[t("code",[this._v('\n@can(\'delete-post\', $post)\n    <input type="submit" value="Delete">\n@endcan\n')])])])},function(){var s=this.$createElement,t=this._self._c||s;return t("blockquote",[t("p",[this._v("Code ตัวอย่างในบทความนี้ถูกทดสอบบน Laravel 5.1.x")])])}],!1,null,null,null);t.default=i.exports}}]);