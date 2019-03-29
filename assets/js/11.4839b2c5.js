(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{165:function(s,a,t){"use strict";t.r(a);var l=t(1),n=Object(l.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("div",{staticClass:"content"},[t("h1",[s._v("Customize Eloquent เพื่อทำ Data Validation")]),s._v(" "),t("p",[s._v("การทำ Data Validation ก่อนการจัดเก็บเข้าฐานข้อมูลเป็นสิ่งจำเป็นและไม่ควรละเลยอย่างยิ่ง Coding ส่วนนี้ไม่ว่าจะเป็น Model ใด ก็จะแทบจะมี Coding เหมือนกัน เพื่อลดความซ้ำซ้อนตามหลักการของ OOP เราน่าจะย้าย Coding ตรงส่วนนี้มาไว้กับ Parent Class ซึ่ง Inherit มาจาก Eloquent โดยให้ Model ทุกตัวใน Project เปลี่ยนมา Inherit Class นี้แทนการ Inherit จาก Eloquent โดยตรง")]),s._v(" "),t("h3",{attrs:{id:"วิธีการ-coding-แบบเดิม"}},[s._v("วิธีการ Coding แบบเดิม")]),s._v(" "),t("p",[s._v("ก่อนหน้านี้ผม Coding ทุกอย่างไว้ที่ Controller ทั้ง "),t("code",[s._v("$rules")]),s._v(", "),t("code",[s._v("$messages")]),s._v(" และ การประมวลผล Validation")]),s._v(" "),t("div",{staticClass:"language-php extra-class"},[t("pre",{staticClass:"hljs"},[t("code",[s._v("\n"),t("span",{staticClass:"hljs-meta"},[s._v("<?php")]),s._v("\n\n"),t("span",{staticClass:"hljs-class"},[t("span",{staticClass:"hljs-keyword"},[s._v("class")]),s._v(" "),t("span",{staticClass:"hljs-title"},[s._v("RoomController")]),s._v(" "),t("span",{staticClass:"hljs-keyword"},[s._v("extends")]),s._v(" "),t("span",{staticClass:"hljs-title"},[s._v("BaseController")]),s._v(" ")]),s._v("{\n    "),t("span",{staticClass:"hljs-keyword"},[s._v("public")]),s._v(" "),t("span",{staticClass:"hljs-function"},[t("span",{staticClass:"hljs-keyword"},[s._v("function")]),s._v(" "),t("span",{staticClass:"hljs-title"},[s._v("postSaveToDatabase")]),t("span",{staticClass:"hljs-params"},[s._v("()")]),s._v(" ")]),s._v("{\n        Inputs = Input::all();\n\n        $rules = "),t("span",{staticClass:"hljs-keyword"},[s._v("array")]),s._v("(\n            "),t("span",{staticClass:"hljs-string"},[s._v("'room_desc'")]),s._v(" => "),t("span",{staticClass:"hljs-string"},[s._v("'required'")]),s._v(",\n            "),t("span",{staticClass:"hljs-string"},[s._v("'room_status'")]),s._v(" => "),t("span",{staticClass:"hljs-string"},[s._v("'required'")]),s._v(",\n        );\n\n        $messages = "),t("span",{staticClass:"hljs-keyword"},[s._v("array")]),s._v("(\n            "),t("span",{staticClass:"hljs-string"},[s._v("'room_desc.required'")]),s._v(" => "),t("span",{staticClass:"hljs-string"},[s._v("'กรุณากรอกข้อมูลรายละเอียดห้องพัก'")]),s._v(",\n            "),t("span",{staticClass:"hljs-string"},[s._v("'room_status.required'")]),s._v(" => "),t("span",{staticClass:"hljs-string"},[s._v("'กรุณากรอกข้อมูลสถานะห้องพัก'")]),s._v(",\n        );\n\n        $validator = Validator::make(Input::all(), $rules);\n\n        "),t("span",{staticClass:"hljs-keyword"},[s._v("if")]),s._v(" ($validator->passes()) {\n            "),t("span",{staticClass:"hljs-comment"},[s._v("// ผ่านการ Validate ทำการจัดเก็บข้อมูลต่อไป")]),s._v("\n        } "),t("span",{staticClass:"hljs-keyword"},[s._v("else")]),s._v(" {\n            dd($validator->messages());\n        }\n    }\n}\n")])])]),t("blockquote",[t("p",[s._v("ปกติ Controller ถูกออกแบบมาให้เป็นที่สำหรับ Coding Logic การประกาศตัวแปรสำหรับ Rules, Messages ไม่ค่อยถูกหลักนักที่จะมาประกาศไว้ที่นี่ อีกทั้ง Processs การทำ Validation ไม่ว่าจะเป็น Model ไหนก็จะมี Coding ลักษณะเดียวกัน เพื่อลดความซ้ำซ้อนของ Coding ส่วนนี้เราน่าจะมี Class ที่เป็น Parent Class ของทุก Model")])]),s._v(" "),t("h3",{attrs:{id:"เปลี่ยนมา-inherit-basemodel-แทน-eloquent"}},[s._v("เปลี่ยนมา Inherit BaseModel แทน Eloquent")]),s._v(" "),t("p",[s._v("ก่อนที่จะพูดถึง Class "),t("code",[s._v("BaseModel")]),s._v(" เราจะแก้ไข Coding ของ Class "),t("code",[s._v("Room")]),s._v(" ซึ่งเป็น Model จากที่เคย Inherit "),t("code",[s._v("Eloquent")]),s._v(" มา Inherit "),t("code",[s._v("BaseModel")]),s._v(" แทน โดยเราจะประกาศ "),t("code",[s._v("$rules")]),s._v(" และ "),t("code",[s._v("$messages")]),s._v(" ไว้ที่นี่ซะเลย")]),s._v(" "),t("div",{staticClass:"language-php extra-class"},[t("pre",{staticClass:"hljs"},[t("code",[s._v("\n"),t("span",{staticClass:"hljs-meta"},[s._v("<?php")]),s._v("\n\n"),t("span",{staticClass:"hljs-class"},[t("span",{staticClass:"hljs-keyword"},[s._v("class")]),s._v(" "),t("span",{staticClass:"hljs-title"},[s._v("Room")]),s._v(" "),t("span",{staticClass:"hljs-keyword"},[s._v("extends")]),s._v(" "),t("span",{staticClass:"hljs-title"},[s._v("BaseModel")]),s._v(" ")]),s._v("{\n    "),t("span",{staticClass:"hljs-comment"},[s._v("/**\n        กำหนดค่า Rules และ Messages ไว้ที่ Model ซะเลย\n    */")]),s._v("\n    "),t("span",{staticClass:"hljs-keyword"},[s._v("protected")]),s._v(" "),t("span",{staticClass:"hljs-keyword"},[s._v("static")]),s._v(" $rules = "),t("span",{staticClass:"hljs-keyword"},[s._v("array")]),s._v("(\n        "),t("span",{staticClass:"hljs-string"},[s._v("'room_desc'")]),s._v(" => "),t("span",{staticClass:"hljs-string"},[s._v("'required'")]),s._v(",\n        "),t("span",{staticClass:"hljs-string"},[s._v("'room_status'")]),s._v(" => "),t("span",{staticClass:"hljs-string"},[s._v("'required'")]),s._v("\n    );\n\n    "),t("span",{staticClass:"hljs-keyword"},[s._v("protected")]),s._v(" "),t("span",{staticClass:"hljs-keyword"},[s._v("static")]),s._v(" $messages = "),t("span",{staticClass:"hljs-keyword"},[s._v("array")]),s._v("(\n        "),t("span",{staticClass:"hljs-string"},[s._v("'room_desc.required'")]),s._v(" => "),t("span",{staticClass:"hljs-string"},[s._v("'กรุณากรอกข้อมูลรายละเอียดห้องพัก'")]),s._v(",\n        "),t("span",{staticClass:"hljs-string"},[s._v("'room_status.required'")]),s._v(" => "),t("span",{staticClass:"hljs-string"},[s._v("'กรุณากรอกข้อมูลสถานะห้องพัก'")]),s._v(",\n    );\n}\n")])])]),t("h3",{attrs:{id:"สร้าง-class-basemodel"}},[s._v("สร้าง Class BaseModel")]),s._v(" "),t("p",[s._v("Class นี้จะมี Public Function ที่สำคัญคือ "),t("code",[s._v("saveWithValidate()")]),s._v(" เอาไว้สำหรับการเรียกใช้เวลาจะจัดเก็บข้อมูลแบบมีการทำ Validation (ก่อนที่จะจัดเก็บเข้าฐานข้อมูล) และ Public Function "),t("code",[s._v("getErrors()")]),s._v(" เอาไว้ดึง Error Message ในกรณีที่ Validate ไม่ผ่าน")]),s._v(" "),t("div",{staticClass:"language-php extra-class"},[t("pre",{staticClass:"hljs"},[t("code",[s._v("\n"),t("span",{staticClass:"hljs-meta"},[s._v("<?php")]),s._v("\n\n"),t("span",{staticClass:"hljs-class"},[t("span",{staticClass:"hljs-keyword"},[s._v("class")]),s._v(" "),t("span",{staticClass:"hljs-title"},[s._v("BaseModel")]),s._v(" "),t("span",{staticClass:"hljs-keyword"},[s._v("extends")]),s._v(" "),t("span",{staticClass:"hljs-title"},[s._v("Eloquent")]),s._v(" ")]),s._v("{\n    "),t("span",{staticClass:"hljs-keyword"},[s._v("protected")]),s._v(" $errors;\n    "),t("span",{staticClass:"hljs-keyword"},[s._v("protected")]),s._v(" "),t("span",{staticClass:"hljs-keyword"},[s._v("static")]),s._v(" $rules = "),t("span",{staticClass:"hljs-keyword"},[s._v("array")]),s._v("();\n    "),t("span",{staticClass:"hljs-keyword"},[s._v("protected")]),s._v(" "),t("span",{staticClass:"hljs-keyword"},[s._v("static")]),s._v(" $messages = "),t("span",{staticClass:"hljs-keyword"},[s._v("array")]),s._v("();\n    "),t("span",{staticClass:"hljs-keyword"},[s._v("protected")]),s._v(" $validator;\n\n    "),t("span",{staticClass:"hljs-keyword"},[s._v("public")]),s._v(" "),t("span",{staticClass:"hljs-function"},[t("span",{staticClass:"hljs-keyword"},[s._v("function")]),s._v(" "),t("span",{staticClass:"hljs-title"},[s._v("__construct")]),t("span",{staticClass:"hljs-params"},[s._v("(array $attributes = array"),t("span",{staticClass:"hljs-params"},[s._v("()")]),s._v(", Validator $validator = null)")]),s._v(" ")]),s._v("{\n        "),t("span",{staticClass:"hljs-keyword"},[s._v("parent")]),s._v("::__construct($attributes);\n\n        "),t("span",{staticClass:"hljs-keyword"},[s._v("$this")]),s._v("->validator = $validator ?: \\App::make("),t("span",{staticClass:"hljs-string"},[s._v("'validator'")]),s._v(");\n    }\n\n    "),t("span",{staticClass:"hljs-comment"},[s._v("/**\n        สร้าง Public Function เพื่อเรียกใช้แทนการเรียก save()\n    */")]),s._v("\n    "),t("span",{staticClass:"hljs-keyword"},[s._v("public")]),s._v(" "),t("span",{staticClass:"hljs-function"},[t("span",{staticClass:"hljs-keyword"},[s._v("function")]),s._v(" "),t("span",{staticClass:"hljs-title"},[s._v("saveWithValidate")]),t("span",{staticClass:"hljs-params"},[s._v("()")]),s._v(" ")]),s._v("{\n        "),t("span",{staticClass:"hljs-keyword"},[s._v("if")]),s._v(" ("),t("span",{staticClass:"hljs-keyword"},[s._v("$this")]),s._v("->validate()) {\n            "),t("span",{staticClass:"hljs-comment"},[s._v("// ถ้าผ่าน Validation ก็จะเรียกใช้ save() ของ Eloquent")]),s._v("\n            "),t("span",{staticClass:"hljs-keyword"},[s._v("if")]),s._v(" ("),t("span",{staticClass:"hljs-keyword"},[s._v("$this")]),s._v("->save()) {\n                "),t("span",{staticClass:"hljs-keyword"},[s._v("return")]),s._v(" "),t("span",{staticClass:"hljs-keyword"},[s._v("true")]),s._v(";\n            }\n        }\n        "),t("span",{staticClass:"hljs-keyword"},[s._v("return")]),s._v(" "),t("span",{staticClass:"hljs-keyword"},[s._v("false")]),s._v(";\n    }\n\n    "),t("span",{staticClass:"hljs-comment"},[s._v("/**\n        ในกรณีที่ไม่ผ่านการ Validate เราจะใช้ Function นี้ในการดึงข้อความ Error\n    */")]),s._v("\n    "),t("span",{staticClass:"hljs-keyword"},[s._v("public")]),s._v(" "),t("span",{staticClass:"hljs-function"},[t("span",{staticClass:"hljs-keyword"},[s._v("function")]),s._v(" "),t("span",{staticClass:"hljs-title"},[s._v("getErrors")]),t("span",{staticClass:"hljs-params"},[s._v("()")]),s._v(" ")]),s._v("{\n        "),t("span",{staticClass:"hljs-keyword"},[s._v("return")]),s._v(" "),t("span",{staticClass:"hljs-keyword"},[s._v("$this")]),s._v("->errors;\n    }\n\n    "),t("span",{staticClass:"hljs-keyword"},[s._v("protected")]),s._v(" "),t("span",{staticClass:"hljs-function"},[t("span",{staticClass:"hljs-keyword"},[s._v("function")]),s._v(" "),t("span",{staticClass:"hljs-title"},[s._v("setErrors")]),t("span",{staticClass:"hljs-params"},[s._v("($errors)")]),s._v(" ")]),s._v("{\n        "),t("span",{staticClass:"hljs-keyword"},[s._v("$this")]),s._v("->errors = $errors;\n    }\n\n    "),t("span",{staticClass:"hljs-keyword"},[s._v("protected")]),s._v(" "),t("span",{staticClass:"hljs-function"},[t("span",{staticClass:"hljs-keyword"},[s._v("function")]),s._v(" "),t("span",{staticClass:"hljs-title"},[s._v("validate")]),t("span",{staticClass:"hljs-params"},[s._v("()")]),s._v(" ")]),s._v("{\n        $validator = "),t("span",{staticClass:"hljs-keyword"},[s._v("$this")]),s._v("->validator->make("),t("span",{staticClass:"hljs-keyword"},[s._v("$this")]),s._v("->attributes, "),t("span",{staticClass:"hljs-keyword"},[s._v("static")]),s._v("::$rules, "),t("span",{staticClass:"hljs-keyword"},[s._v("static")]),s._v("::$messages);\n\n        "),t("span",{staticClass:"hljs-keyword"},[s._v("if")]),s._v(" ($validator->passes()) {\n            "),t("span",{staticClass:"hljs-keyword"},[s._v("return")]),s._v(" "),t("span",{staticClass:"hljs-keyword"},[s._v("true")]),s._v(";\n        }\n\n        "),t("span",{staticClass:"hljs-keyword"},[s._v("$this")]),s._v("->setErrors($validator->messages());\n            "),t("span",{staticClass:"hljs-keyword"},[s._v("return")]),s._v(" "),t("span",{staticClass:"hljs-keyword"},[s._v("false")]),s._v(";\n        }\n    }\n}\n")])])]),t("h3",{attrs:{id:"แก้ไข-coding-ใน-controller"}},[s._v("แก้ไข Coding ใน Controller")]),s._v(" "),t("p",[s._v("เมื่อเราวางทุกอย่างไว้เรียบร้อยแล้ว เราก็เพียงเรียกใช้ "),t("code",[s._v("$room->saveWithValidate()")]),s._v(" ส่วนการทำ Validation นั้น Class "),t("code",[s._v("BaseModel")]),s._v(" จะจัดการให้เอง สะดวกดีแท้")]),s._v(" "),t("div",{staticClass:"language-php extra-class"},[t("pre",{staticClass:"hljs"},[t("code",[s._v("\n$room = "),t("span",{staticClass:"hljs-keyword"},[s._v("new")]),s._v(" Room();\n\n$room->room_desc = Input::get("),t("span",{staticClass:"hljs-string"},[s._v("'room_desc'")]),s._v(");\n"),t("span",{staticClass:"hljs-comment"},[s._v("// $room->room_status = Input::get('room_status');")]),s._v("\n\n"),t("span",{staticClass:"hljs-keyword"},[s._v("if")]),s._v(" (!$room->saveWithValidate()) {\n    dd($room->getErrors());\n} "),t("span",{staticClass:"hljs-keyword"},[s._v("else")]),s._v(" {\n    "),t("span",{staticClass:"hljs-keyword"},[s._v("echo")]),s._v(" "),t("span",{staticClass:"hljs-string"},[s._v("'Success'")]),s._v(";\n}\n")])])]),t("h3",{attrs:{id:"error-message"}},[s._v("Error Message")]),s._v(" "),t("p",[s._v("เมื่อทดลองเรียกใช้ "),t("code",[s._v("saveWithValidate()")]),s._v(" โดยที่ป้อนข้อมูลไม่ครบ ก็จะเกิด Error Message ประมาณ Snippet ด้านล่าง")]),s._v(" "),t("div",{staticClass:"language-php extra-class"},[t("pre",{staticClass:"hljs"},[t("code",[s._v("\nobject(Illuminate\\Support\\MessageBag)"),t("span",{staticClass:"hljs-comment"},[s._v("#237 (2) {")]),s._v("\n    ["),t("span",{staticClass:"hljs-string"},[s._v('"messages"')]),s._v(":"),t("span",{staticClass:"hljs-keyword"},[s._v("protected")]),s._v("]=> "),t("span",{staticClass:"hljs-keyword"},[s._v("array")]),s._v("("),t("span",{staticClass:"hljs-number"},[s._v("1")]),s._v(") {\n        ["),t("span",{staticClass:"hljs-string"},[s._v('"room_status"')]),s._v("]=> "),t("span",{staticClass:"hljs-keyword"},[s._v("array")]),s._v("("),t("span",{staticClass:"hljs-number"},[s._v("1")]),s._v(") {\n            ["),t("span",{staticClass:"hljs-number"},[s._v("0")]),s._v("]=> string("),t("span",{staticClass:"hljs-number"},[s._v("27")]),s._v(") "),t("span",{staticClass:"hljs-string"},[s._v('"กรุณากรอกข้อมูลสถานะห้องพัก"')]),s._v("\n        }\n    }\n\n    ["),t("span",{staticClass:"hljs-string"},[s._v('"format"')]),s._v(":"),t("span",{staticClass:"hljs-keyword"},[s._v("protected")]),s._v("]=> string("),t("span",{staticClass:"hljs-number"},[s._v("8")]),s._v(") "),t("span",{staticClass:"hljs-string"},[s._v('":message"')]),s._v("\n}\n")])])]),t("h3",{attrs:{id:"บทสรุป"}},[s._v("บทสรุป")]),s._v(" "),t("p",[s._v("เป็นสิ่งจำเป็นอย่างยิ่งที่ควรจะมีการทำ Validation ทุกครั้งก่อนที่จะมีการจัดเก็บข้อมูลเข้าฐานข้อมูล บ่อยครั้งที่การจัดเก็บข้อมูล Model เดียวกัน มีการกระจายอยู่ในหลาย Controller การเพิ่ม Class "),t("code",[s._v("BaseModel")]),s._v(" จะช่วยลดความซ้ำซ้อนตรงส่วนนี้ได้เป็นอย่างดี และ ยังช่วยให้การ Coding ที่ Controller ดูสบายตาเป็นอย่างมาก ง่ายต่อการ Maintainace Coding ในอนาคต")]),s._v(" "),t("blockquote",[t("p",[s._v("Code ตัวอย่างในบทความนี้ถูกทดสอบบน Laravel 4.2.x")])])])}],!1,null,null,null);a.default=n.exports}}]);