# Proposal

## Parent Engagement Add-ons – Digital Services Suite

---

## Executive Summary

<div dir="rtl">

تقدّم هذه الحزمة **أربعة تطبيقات رقمية** موجهة لأولياء الأمور، تعمل بشكل مستقل كإضافة اختيارية لمنظومة إدارة المدارس:

| التطبيق | الوظيفة الرئيسية |
|---------|-----------------|
| **الخدمات الأكاديمية** | حجز الدروس الإضافية وشراء المواد التعليمية |
| **الزي والمستلزمات** | طلب الزي المدرسي والأدوات إلكترونيًا |
| **الكانتين الذكي** | الطلب المسبق للوجبات والمحفظة الرقمية |
| **الفعاليات والرحلات** | التسجيل والدفع والموافقات الإلكترونية |

**المميزات الرئيسية:**
* بدون أي تكلفة على المدارس (التشغيل والصيانة مجانًا)
* نموذج إيرادات قائم على المعاملات فقط
* تطبيقات مستقلة لا تؤثر على الأنظمة الأساسية

</div>

---

## 1. Overview

<p dir="rtl">يقدّم هذا العرض الفني <strong>حزمة من التطبيقات الإضافية الموجهة لأولياء الأمور</strong>، تُطرح كحزمة تكميلية ضمن مشروع إدارة المدارس، وتهدف إلى تنظيم بعض الخدمات المدرسية الاختيارية وتحسين تجربة التفاعل بين المدرسة وولي الأمر.</p>

<p dir="rtl">تعمل هذه التطبيقات <strong>بشكل مستقل</strong> دون التأثير على العمليات الأساسية للمشروع، مع ضمان إدارة بيانات دقيقة وآمنة.</p>

---

## 2. Scope of Work

<div dir="rtl">

يشمل نطاق العمل:

* تصميم وتطوير ونشر مجموعة من التطبيقات الخدمية الموجهة لأولياء الأمور
* توفير واجهات استخدام للهواتف المحمولة والويب
* تشغيل وصيانة التطبيقات **دون أي تكلفة تشغيلية على المدارس**

</div>

---

## 3. System Architecture (High Level)

* **Frontend:** Mobile Applications (iOS / Android) + Web Portal
* **Backend:** Cloud-based Modular Architecture
* **Database:** Secure Database (Encrypted)
* **Integration Layer:** RESTful APIs
* **Security:** Role-Based Access Control & Secure Authentication
* **Reporting Engine:** Financial & Operational Reporting Modules

---

<div style="page-break-before: always;"></div>

## 4. Functional Modules

### 4.1 Academic Services (Limited Scope)

**Functionality:**

<div dir="rtl">

* إدارة حجز الدروس الإضافية بعد اليوم الدراسي
* التسجيل في البرامج العلاجية أو الإثرائية
* شراء المواد التعليمية المعتمدة (كتب – مذكرات – موارد إضافية)

</div>

**Key Features:**

* Online Reservation & Enrollment Workflow
* Secure Payment Integration
* Approval & Notification System
* Transaction Tracking

**Sample Screen:**

<div dir="rtl" style="direction: rtl; text-align: right; width: 280px; border: 8px solid #1a1a1a; border-radius: 24px; overflow: hidden; font-family: -apple-system, sans-serif; page-break-inside: avoid; break-inside: avoid; -webkit-print-color-adjust: exact; print-color-adjust: exact;">
  <div style="background: #2563eb; color: white; padding: 12px 16px; display: flex; flex-direction: row-reverse; align-items: center; justify-content: space-between;">
    <span style="font-weight: 600;">الخدمات الأكاديمية</span>
    <span>←</span>
  </div>
  <div style="background: #f8fafc; padding: 16px; min-height: 320px;">
    <div style="font-size: 13px; color: #64748b; margin-bottom: 8px; text-align: right;">الدروس الإضافية</div>
    <div style="background: white; border-radius: 12px; padding: 12px; margin-bottom: 10px; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
      <div style="display: flex; flex-direction: row-reverse; justify-content: space-between; margin-bottom: 4px;">
        <span style="font-weight: 600; font-size: 14px;">تقوية رياضيات</span>
        <span style="color: #16a34a; font-weight: 600;">150 ج.م</span>
      </div>
      <div style="font-size: 12px; color: #64748b; text-align: right;">الأحد، الثلاثاء • 3:00-4:00 م</div>
      <button style="background: #2563eb; color: white; border: none; border-radius: 6px; padding: 6px 12px; font-size: 12px; margin-top: 8px; width: 100%;">احجز الآن</button>
    </div>
    <div style="background: white; border-radius: 12px; padding: 12px; margin-bottom: 10px; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
      <div style="display: flex; flex-direction: row-reverse; justify-content: space-between; margin-bottom: 4px;">
        <span style="font-weight: 600; font-size: 14px;">تقوية لغة إنجليزية</span>
        <span style="color: #16a34a; font-weight: 600;">120 ج.م</span>
      </div>
      <div style="font-size: 12px; color: #64748b; text-align: right;">الإثنين، الأربعاء • 3:00-4:00 م</div>
      <button style="background: #2563eb; color: white; border: none; border-radius: 6px; padding: 6px 12px; font-size: 12px; margin-top: 8px; width: 100%;">احجز الآن</button>
    </div>
    <div style="font-size: 13px; color: #64748b; margin: 12px 0 8px; text-align: right;">المواد التعليمية</div>
    <div style="background: white; border-radius: 12px; padding: 12px; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
      <div style="display: flex; flex-direction: row-reverse; justify-content: space-between; margin-bottom: 4px;">
        <span style="font-weight: 600; font-size: 14px;">كتاب العلوم</span>
        <span style="color: #16a34a; font-weight: 600;">85 ج.م</span>
      </div>
      <button style="background: white; color: #2563eb; border: 1px solid #2563eb; border-radius: 6px; padding: 6px 12px; font-size: 12px; margin-top: 8px; width: 100%;">أضف للسلة</button>
    </div>
  </div>
  <div style="background: white; border-top: 1px solid #e2e8f0; padding: 12px; display: flex; flex-direction: row-reverse; justify-content: space-around;">
    <span>🏠</span><span style="color: #2563eb;">📚</span><span>🛒</span><span>👤</span>
  </div>
</div>

<blockquote dir="rtl">
<em>ملاحظة:</em><br>
لا يشمل هذا النطاق أي وظائف متعلقة بإدارة المناهج، أو التقييم الأكاديمي، أو أدوات التدريس.
</blockquote>

---

<div style="page-break-before: always;"></div>

### 4.2 School Uniforms & Supplies

**Functionality:**

<div dir="rtl">

* إدارة طلبات الزي المدرسي إلكترونيًا
* اختيار المقاسات وربطها ببيانات الطالب
* شراء الأدوات المدرسية والكتب
* تحديد مواعيد التسليم

</div>

**Key Features:**

* Product Catalog Management
* Size Selector & Student Profile Mapping
* Order Scheduling
* Inventory & Order Status Tracking

**Sample Screen:**

<div dir="rtl" style="direction: rtl; text-align: right; width: 280px; border: 8px solid #1a1a1a; border-radius: 24px; overflow: hidden; font-family: -apple-system, sans-serif; page-break-inside: avoid; break-inside: avoid; -webkit-print-color-adjust: exact; print-color-adjust: exact;">
  <div style="background: #7c3aed; color: white; padding: 12px 16px; display: flex; flex-direction: row-reverse; align-items: center; justify-content: space-between;">
    <span style="font-weight: 600;">الزي والمستلزمات</span>
    <span>←</span>
  </div>
  <div style="background: #f8fafc; padding: 16px; min-height: 320px;">
    <div style="background: #fef3c7; border-radius: 8px; padding: 10px; margin-bottom: 12px; font-size: 12px; text-align: right;">
      👤 <strong>أحمد علي</strong> - الصف الخامس
    </div>
    <div style="font-size: 13px; color: #64748b; margin-bottom: 8px; text-align: right;">الزي المدرسي</div>
    <div style="background: white; border-radius: 12px; padding: 12px; margin-bottom: 10px; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
      <div style="display: flex; flex-direction: row-reverse; gap: 10px;">
        <div style="width: 50px; height: 50px; background: #e2e8f0; border-radius: 8px; display: flex; align-items: center; justify-content: center;">👕</div>
        <div style="flex: 1; text-align: right;">
          <div style="font-weight: 600; font-size: 14px;">قميص أبيض</div>
          <div style="font-size: 12px; color: #64748b;">المقاس: <select style="border: 1px solid #e2e8f0; border-radius: 4px; padding: 2px;"><option>M</option></select></div>
          <div style="color: #16a34a; font-weight: 600; font-size: 13px;">180 ج.م</div>
        </div>
      </div>
      <button style="background: #7c3aed; color: white; border: none; border-radius: 6px; padding: 6px 12px; font-size: 12px; margin-top: 8px; width: 100%;">أضف للسلة</button>
    </div>
    <div style="background: white; border-radius: 12px; padding: 12px; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
      <div style="display: flex; flex-direction: row-reverse; gap: 10px;">
        <div style="width: 50px; height: 50px; background: #e2e8f0; border-radius: 8px; display: flex; align-items: center; justify-content: center;">👖</div>
        <div style="flex: 1; text-align: right;">
          <div style="font-weight: 600; font-size: 14px;">بنطلون كحلي</div>
          <div style="font-size: 12px; color: #64748b;">المقاس: <select style="border: 1px solid #e2e8f0; border-radius: 4px; padding: 2px;"><option>28</option></select></div>
          <div style="color: #16a34a; font-weight: 600; font-size: 13px;">220 ج.م</div>
        </div>
      </div>
      <button style="background: #7c3aed; color: white; border: none; border-radius: 6px; padding: 6px 12px; font-size: 12px; margin-top: 8px; width: 100%;">أضف للسلة</button>
    </div>
  </div>
  <div style="background: white; border-top: 1px solid #e2e8f0; padding: 12px; display: flex; flex-direction: row-reverse; justify-content: space-around;">
    <span>🏠</span><span style="color: #7c3aed;">👔</span><span>🛒</span><span>👤</span>
  </div>
</div>

---

<div style="page-break-before: always;"></div>

### 4.3 Smart Canteen (School Canteen)

**Functionality:**

<div dir="rtl">

* نظام الطلب المسبق للوجبات والمياه
* تطبيق سياسات غذائية تحددها المدرسة
* تقليل التزاحم والتعامل النقدي داخل المدرسة

</div>

**Key Features:**

* Pre-Order Engine
* Policy-Based Food Restriction Rules
* Digital Wallet (Transaction-Based)
* Queue Reduction Mechanism

**Sample Screen:**

<div dir="rtl" style="direction: rtl; text-align: right; width: 280px; border: 8px solid #1a1a1a; border-radius: 24px; overflow: hidden; font-family: -apple-system, sans-serif; page-break-inside: avoid; break-inside: avoid; -webkit-print-color-adjust: exact; print-color-adjust: exact;">
  <div style="background: #ea580c; color: white; padding: 12px 16px; display: flex; flex-direction: row-reverse; align-items: center; justify-content: space-between;">
    <span style="font-weight: 600;">الكانتين الذكي</span>
    <span>←</span>
  </div>
  <div style="background: #f8fafc; padding: 16px; min-height: 320px;">
    <div style="background: #dcfce7; border-radius: 8px; padding: 10px; margin-bottom: 12px; font-size: 12px; display: flex; flex-direction: row-reverse; justify-content: space-between;">
      <span>💳 رصيد المحفظة</span>
      <strong>500 ج.م</strong>
    </div>
    <div style="font-size: 13px; color: #64748b; margin-bottom: 8px; text-align: right;">طلب الغد - الأحد</div>
    <div style="background: white; border-radius: 12px; padding: 12px; margin-bottom: 10px; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
      <div style="display: flex; flex-direction: row-reverse; gap: 10px; align-items: center;">
        <div style="font-size: 24px;">🥪</div>
        <div style="flex: 1; text-align: right;">
          <div style="font-weight: 600; font-size: 14px;">ساندويتش جبنة</div>
          <div style="color: #16a34a; font-weight: 600; font-size: 13px;">25 ج.م</div>
        </div>
        <div style="display: flex; align-items: center; gap: 8px;">
          <button style="width: 24px; height: 24px; border-radius: 50%; border: none; background: #ea580c; color: white;">+</button>
          <span>1</span>
          <button style="width: 24px; height: 24px; border-radius: 50%; border: 1px solid #e2e8f0; background: white;">-</button>
        </div>
      </div>
    </div>
    <div style="background: white; border-radius: 12px; padding: 12px; margin-bottom: 10px; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
      <div style="display: flex; flex-direction: row-reverse; gap: 10px; align-items: center;">
        <div style="font-size: 24px;">🧃</div>
        <div style="flex: 1; text-align: right;">
          <div style="font-weight: 600; font-size: 14px;">عصير برتقال</div>
          <div style="color: #16a34a; font-weight: 600; font-size: 13px;">15 ج.م</div>
        </div>
        <div style="display: flex; align-items: center; gap: 8px;">
          <button style="width: 24px; height: 24px; border-radius: 50%; border: none; background: #ea580c; color: white;">+</button>
          <span>2</span>
          <button style="width: 24px; height: 24px; border-radius: 50%; border: 1px solid #e2e8f0; background: white;">-</button>
        </div>
      </div>
    </div>
    <div style="background: #ea580c; color: white; border-radius: 12px; padding: 12px; text-align: center; margin-top: 16px;">
      <div style="font-size: 12px;">الإجمالي: 55 ج.م</div>
      <div style="font-weight: 600;">تأكيد الطلب</div>
    </div>
  </div>
  <div style="background: white; border-top: 1px solid #e2e8f0; padding: 12px; display: flex; flex-direction: row-reverse; justify-content: space-around;">
    <span>🏠</span><span style="color: #ea580c;">🍽️</span><span>📋</span><span>👤</span>
  </div>
</div>

<blockquote dir="rtl">
<em>يتم تطبيق القيود الغذائية وفق سياسات المدرسة فقط، دون تقديم أي توصيات طبية.</em>
</blockquote>

---

<div style="page-break-before: always;"></div>

### 4.4 Events & Trips Management

**Functionality:**

<div dir="rtl">

* عرض وإدارة الرحلات والأنشطة المدرسية
* تسجيل الطلاب وتحصيل الرسوم إلكترونيًا
* إدارة موافقات أولياء الأمور الرقمية

</div>

**Key Features:**

* Event Listing & Registration
* Secure E-Payment Integration
* E-Consent Management
* Attendance Tracking

**Sample Screen:**

<div dir="rtl" style="direction: rtl; text-align: right; width: 280px; border: 8px solid #1a1a1a; border-radius: 24px; overflow: hidden; font-family: -apple-system, sans-serif; page-break-inside: avoid; break-inside: avoid; -webkit-print-color-adjust: exact; print-color-adjust: exact;">
  <div style="background: #0d9488; color: white; padding: 12px 16px; display: flex; flex-direction: row-reverse; align-items: center; justify-content: space-between;">
    <span style="font-weight: 600;">الفعاليات والرحلات</span>
    <span>←</span>
  </div>
  <div style="background: #f8fafc; padding: 16px; min-height: 320px;">
    <div style="font-size: 13px; color: #64748b; margin-bottom: 8px; text-align: right;">الفعاليات القادمة</div>
    <div style="background: white; border-radius: 12px; padding: 12px; margin-bottom: 10px; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
      <div style="display: flex; flex-direction: row-reverse; gap: 10px;">
        <div style="width: 50px; height: 50px; background: #ccfbf1; border-radius: 8px; display: flex; align-items: center; justify-content: center; flex-direction: column; font-size: 11px;">
          <strong style="font-size: 16px;">15</strong>
          <span>يناير</span>
        </div>
        <div style="flex: 1; text-align: right;">
          <div style="font-weight: 600; font-size: 14px;">رحلة المتحف المصري</div>
          <div style="font-size: 12px; color: #64748b;">الصف: 4-6 • المقاعد المتبقية: 12</div>
          <div style="color: #16a34a; font-weight: 600; font-size: 13px;">250 ج.م</div>
        </div>
      </div>
      <div style="display: flex; flex-direction: row-reverse; gap: 8px; margin-top: 10px;">
        <button style="flex: 1; background: #0d9488; color: white; border: none; border-radius: 6px; padding: 6px; font-size: 12px;">سجّل الآن</button>
        <button style="flex: 1; background: white; color: #0d9488; border: 1px solid #0d9488; border-radius: 6px; padding: 6px; font-size: 12px;">التفاصيل</button>
      </div>
    </div>
    <div style="background: white; border-radius: 12px; padding: 12px; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
      <div style="display: flex; flex-direction: row-reverse; gap: 10px;">
        <div style="width: 50px; height: 50px; background: #ccfbf1; border-radius: 8px; display: flex; align-items: center; justify-content: center; flex-direction: column; font-size: 11px;">
          <strong style="font-size: 16px;">22</strong>
          <span>يناير</span>
        </div>
        <div style="flex: 1; text-align: right;">
          <div style="font-weight: 600; font-size: 14px;">يوم رياضي</div>
          <div style="font-size: 12px; color: #64748b;">جميع الصفوف • مجاني</div>
          <div style="color: #ea580c; font-size: 12px;">⏳ موافقة مطلوبة</div>
        </div>
      </div>
      <button style="width: 100%; background: #fef3c7; color: #92400e; border: none; border-radius: 6px; padding: 6px; font-size: 12px; margin-top: 10px;">إرسال الموافقة</button>
    </div>
  </div>
  <div style="background: white; border-top: 1px solid #e2e8f0; padding: 12px; display: flex; flex-direction: row-reverse; justify-content: space-around;">
    <span>🏠</span><span style="color: #0d9488;">🎯</span><span>📋</span><span>👤</span>
  </div>
</div>

---

## 5. Technical Requirements

* Secure Payment Gateway
* Notification Services (App / Email / SMS)
* Multi-School / Multi-Branch Support

---

## 6. Non-Functional Requirements

* High Availability & Scalable Deployment
* Secure Cloud Infrastructure
* User-Friendly UI/UX
* Multi-Language Support
* Compliance with Data Privacy & Protection Standards

---

## 7. Security & Data Protection

* End-to-End Data Encryption
* Secure Authentication & Authorization
* Audit Trails & Transaction Logs
* Role-Based Access Control

---

## 8. Reporting & Analytics

* Financial Transaction Reports
* Service Usage Reports
* Operational Performance Dashboards

---

## 9. Cost & Commercial Model

* **Deployment, operation, and maintenance are provided free of charge to schools.**
* No subscription or licensing fees for parents or schools.
* Revenue model is **transaction-based only**, related to optional, school-approved services and products.
* The platform acts as a **transaction facilitator**, not as a service provider or seller.

---

## 10. Intellectual Property Rights

<p dir="rtl">تحتفظ الشركة بكامل حقوق الملكية الفكرية المتعلقة بهذه التطبيقات، ويجوز لها إعادة استخدامها أو تطويرها وتقديمها لمدارس أو جهات تعليمية أخرى، دون أي التزامات إضافية على الجهة المتعاقدة.</p>

---

## 11. Summary

<p dir="rtl">توفّر هذه الحزمة <strong>تحولًا رقميًا عمليًا</strong> في خدمات أولياء الأمور دون أعباء مالية على المدارس، مع تحسين تجربة ولي الأمر، وتنظيم الخدمات الاختيارية، ورفع كفاءة التشغيل المالي والإداري، وذلك ضمن نطاق فني واضح ومحدود.</p>
