# نظام توصيل الوجبات المدرسية — وثيقة متطلبات المنتج

**الإصدار:** 1.0
**التاريخ:** يناير 2025
**السوق المستهدف:** مصر (مدارس K-12)

---

## جدول المحتويات

1. [نظرة عامة على المنتج](#1-نظرة-عامة-على-المنتج)
2. [مسار الطلب](#2-مسار-الطلب)
3. [تطبيق ولي الأمر](#3-تطبيق-ولي-الأمر)
4. [لوحة تحكم المورد](#4-لوحة-تحكم-المورد)
5. [تطبيق مشرف الدور](#5-تطبيق-مشرف-الدور)
6. [لوحة تحكم إدارة المدرسة](#6-لوحة-تحكم-إدارة-المدرسة)
7. [المواصفات التقنية](#7-المواصفات-التقنية)
8. [نطاق MVP وخارطة الطريق](#8-نطاق-mvp-وخارطة-الطريق)

---

## 1. نظرة عامة على المنتج

منصة موبايل تربط **أولياء الأمور** و**المدارس** و**موردي الطعام** لتسهيل طلب وتوصيل الوجبات المدرسية. كل مدرسة مرتبطة بمورد واحد فقط، مما يضمن الاتساق وتبسيط العمليات.

### القيم الأساسية

| الطرف | القيمة |
|-------|--------|
| **أولياء الأمور** | طلب سهل، وجبات صحية، تتبع فوري |
| **المدارس** | تنسيق مع مورد واحد، إيرادات عمولة، رؤية لتغذية الطلاب |
| **الموردون** | طلب متوقع، إنتاج دفعات، مدفوعات مضمونة |

### نموذج الأعمال

| مصدر الإيرادات | الوصف | النسبة |
|----------------|-------|--------|
| رسوم المنصة | عمولة على كل معاملة | 5-10% |
| عمولة المدرسة | مبلغ ثابت لكل طلب للمدرسة | 2-5 ج.م |
| اشتراك المورد | رسوم وصول شهرية للمنصة (اختياري) | 500-1000 ج.م |

---

## 2. مسار الطلب

<div style="display: flex; align-items: center; justify-content: space-between; padding: 30px; background: linear-gradient(135deg, #f8f9fa, #e9ecef); border-radius: 12px; margin: 20px 0; overflow-x: auto; gap: 10px; direction: ltr;">
  <div style="text-align: center; min-width: 90px;">
    <div style="width: 50px; height: 50px; background: linear-gradient(135deg, #4CAF50, #81C784); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 20px; margin: 0 auto 8px;">👨‍👩‍👧</div>
    <div style="font-size: 11px; font-weight: 600;">ولي الأمر يطلب</div>
  </div>
  <div style="font-size: 20px; color: #ccc;">→</div>
  <div style="text-align: center; min-width: 90px;">
    <div style="width: 50px; height: 50px; background: linear-gradient(135deg, #4CAF50, #81C784); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 20px; margin: 0 auto 8px;">📋</div>
    <div style="font-size: 11px; font-weight: 600;">تجميع الطلبات</div>
  </div>
  <div style="font-size: 20px; color: #ccc;">→</div>
  <div style="text-align: center; min-width: 90px;">
    <div style="width: 50px; height: 50px; background: linear-gradient(135deg, #4CAF50, #81C784); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 20px; margin: 0 auto 8px;">👨‍🍳</div>
    <div style="font-size: 11px; font-weight: 600;">المورد يحضر</div>
  </div>
  <div style="font-size: 20px; color: #ccc;">→</div>
  <div style="text-align: center; min-width: 90px;">
    <div style="width: 50px; height: 50px; background: linear-gradient(135deg, #4CAF50, #81C784); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 20px; margin: 0 auto 8px;">🚚</div>
    <div style="font-size: 11px; font-weight: 600;">التوصيل</div>
  </div>
  <div style="font-size: 20px; color: #ccc;">→</div>
  <div style="text-align: center; min-width: 90px;">
    <div style="width: 50px; height: 50px; background: linear-gradient(135deg, #4CAF50, #81C784); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 20px; margin: 0 auto 8px;">✅</div>
    <div style="font-size: 11px; font-weight: 600;">التأكيد</div>
  </div>
  <div style="font-size: 20px; color: #ccc;">→</div>
  <div style="text-align: center; min-width: 90px;">
    <div style="width: 50px; height: 50px; background: linear-gradient(135deg, #4CAF50, #81C784); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 20px; margin: 0 auto 8px;">💰</div>
    <div style="font-size: 11px; font-weight: 600;">صرف المبلغ</div>
  </div>
</div>

### متطلبات التوقيت

| الحدث | الوقت | ملاحظات |
|-------|-------|---------|
| آخر موعد للطلب | 8:00 صباحاً | لا يُقبل أي طلب بعد هذا الوقت |
| استلام المورد للطلبات | 8:00 صباحاً | إرسال القائمة المجمعة تلقائياً |
| التوصيل للمدرسة | 9:30 - 10:00 صباحاً | قبل الفسحة الأولى |
| اكتمال التوزيع | 10:30 صباحاً | جميع الطلاب يستلمون وجباتهم |
| صرف المبلغ | بعد التأكيد | تلقائي بعد تأكيد مشرف الدور |

---

## 3. تطبيق ولي الأمر

الواجهة الرئيسية لأولياء الأمور لإدارة وجبات أبنائهم. عربي أولاً مع دعم الإنجليزية.

### 3.1 الترحيب والتسجيل

<div style="display: flex; gap: 20px; flex-wrap: wrap; justify-content: center; margin: 30px 0;">

<!-- شاشة الترحيب -->
<div style="text-align: center;">
<div style="font-size: 13px; font-weight: 600; margin-bottom: 12px; color: #333;">شاشة الترحيب</div>
<div style="width: 260px; height: 520px; background: #1a1a1a; border-radius: 30px; padding: 10px; box-shadow: 0 8px 30px rgba(0,0,0,0.3);">
<div style="width: 100%; height: 100%; background: linear-gradient(135deg, #4CAF50, #81C784); border-radius: 22px; display: flex; flex-direction: column; align-items: center; justify-content: center;">
<div style="font-size: 70px; margin-bottom: 15px;">🍱</div>
<div style="font-size: 22px; font-weight: 700; color: white; margin-bottom: 6px;">وجبتي</div>
<div style="font-size: 13px; color: rgba(255,255,255,0.9);">Wajbaty</div>
<div style="font-size: 11px; color: rgba(255,255,255,0.7); margin-top: 15px;">وجبات صحية لأولادك</div>
</div>
</div>
</div>

<!-- اختيار نوع الحساب -->
<div style="text-align: center;">
<div style="font-size: 13px; font-weight: 600; margin-bottom: 12px; color: #333;">اختيار نوع الحساب</div>
<div style="width: 260px; height: 520px; background: #1a1a1a; border-radius: 30px; padding: 10px; box-shadow: 0 8px 30px rgba(0,0,0,0.3);">
<div style="width: 100%; height: 100%; background: #fff; border-radius: 22px; overflow: hidden; display: flex; flex-direction: column;">
<div style="padding: 6px 12px; font-size: 11px; color: #333; display: flex; justify-content: space-between;"><span>9:41</span><span>100%</span></div>
<div style="background: linear-gradient(135deg, #4CAF50, #45a049); color: white; padding: 12px; text-align: center;">
<div style="font-size: 15px; font-weight: 600;">اختر نوع الحساب</div>
</div>
<div style="flex: 1; padding: 12px; background: #f8f9fa;">
<div style="background: white; border-radius: 10px; padding: 12px; margin-bottom: 8px; border: 2px solid #4CAF50; display: flex; align-items: center;">
<div style="font-size: 30px; margin-left: 12px;">👨‍👩‍👧</div>
<div><div style="font-weight: 600; font-size: 13px;">ولي أمر</div><div style="font-size: 10px; color: #888;">اطلب وجبات لأولادك</div></div>
</div>
<div style="background: white; border-radius: 10px; padding: 12px; margin-bottom: 8px; display: flex; align-items: center;">
<div style="font-size: 30px; margin-left: 12px;">👨‍🍳</div>
<div><div style="font-weight: 600; font-size: 13px;">مورد طعام</div><div style="font-size: 10px; color: #888;">قدم وجبات للمدارس</div></div>
</div>
<div style="background: white; border-radius: 10px; padding: 12px; display: flex; align-items: center;">
<div style="font-size: 30px; margin-left: 12px;">🏫</div>
<div><div style="font-weight: 600; font-size: 13px;">مشرف مدرسة</div><div style="font-size: 10px; color: #888;">استلم وأكد التوصيل</div></div>
</div>
</div>
</div>
</div>
</div>

<!-- بيانات الطالب -->
<div style="text-align: center;">
<div style="font-size: 13px; font-weight: 600; margin-bottom: 12px; color: #333;">بيانات الطالب</div>
<div style="width: 260px; height: 520px; background: #1a1a1a; border-radius: 30px; padding: 10px; box-shadow: 0 8px 30px rgba(0,0,0,0.3);">
<div style="width: 100%; height: 100%; background: #fff; border-radius: 22px; overflow: hidden; display: flex; flex-direction: column;">
<div style="padding: 6px 12px; font-size: 11px; color: #333; display: flex; justify-content: space-between;"><span>9:41</span><span>100%</span></div>
<div style="background: linear-gradient(135deg, #4CAF50, #45a049); color: white; padding: 12px;">
<div style="display: flex; align-items: center; gap: 8px;"><span>←</span><span style="font-size: 15px; font-weight: 600;">بيانات الطالب</span></div>
</div>
<div style="flex: 1; padding: 12px; overflow-y: auto;">
<div style="text-align: center; margin-bottom: 15px;">
<div style="font-size: 10px; color: #888;">الخطوة 3 من 3</div>
<div style="height: 3px; background: #eee; border-radius: 2px; margin-top: 6px;"><div style="width: 100%; height: 100%; background: #4CAF50; border-radius: 2px;"></div></div>
</div>
<div style="margin-bottom: 10px;"><label style="font-size: 10px; color: #666; display: block; margin-bottom: 3px;">اسم الطالب</label><input type="text" placeholder="يوسف أحمد" style="width: 100%; padding: 8px 10px; border: 1px solid #ddd; border-radius: 6px; font-size: 12px; box-sizing: border-box;"></div>
<div style="margin-bottom: 10px;"><label style="font-size: 10px; color: #666; display: block; margin-bottom: 3px;">الصف الدراسي</label><select style="width: 100%; padding: 8px 10px; border: 1px solid #ddd; border-radius: 6px; font-size: 12px; box-sizing: border-box; background: white;"><option>الصف الرابع الابتدائي</option></select></div>
<div style="margin-bottom: 10px;"><label style="font-size: 10px; color: #666; display: block; margin-bottom: 3px;">رقم الفصل</label><select style="width: 100%; padding: 8px 10px; border: 1px solid #ddd; border-radius: 6px; font-size: 12px; box-sizing: border-box; background: white;"><option>فصل 3</option></select></div>
<div style="margin-bottom: 10px;"><label style="font-size: 10px; color: #666; display: block; margin-bottom: 3px;">ملاحظات صحية (حساسية، أمراض)</label><input type="text" placeholder="مثال: حساسية من الفول السوداني" style="width: 100%; padding: 8px 10px; border: 1px solid #ddd; border-radius: 6px; font-size: 12px; box-sizing: border-box;"></div>
<button style="width: 100%; padding: 10px; background: linear-gradient(135deg, #4CAF50, #45a049); color: white; border: none; border-radius: 6px; font-size: 13px; font-weight: 600; margin-top: 8px;">إنشاء الحساب</button>
</div>
</div>
</div>
</div>

</div>

### 3.2 الرئيسية وقائمة الطعام

<div style="display: flex; gap: 20px; flex-wrap: wrap; justify-content: center; margin: 30px 0;">

<!-- الشاشة الرئيسية -->
<div style="text-align: center;">
<div style="font-size: 13px; font-weight: 600; margin-bottom: 12px; color: #333;">الشاشة الرئيسية</div>
<div style="width: 260px; height: 520px; background: #1a1a1a; border-radius: 30px; padding: 10px; box-shadow: 0 8px 30px rgba(0,0,0,0.3);">
<div style="width: 100%; height: 100%; background: #fff; border-radius: 22px; overflow: hidden; display: flex; flex-direction: column;">
<div style="padding: 6px 12px; font-size: 11px; color: #333; display: flex; justify-content: space-between;"><span>9:41</span><span>100%</span></div>
<div style="background: linear-gradient(135deg, #4CAF50, #45a049); color: white; padding: 12px 12px 20px;">
<div style="display: flex; justify-content: space-between; align-items: center;">
<div><div style="font-size: 11px; opacity: 0.9;">صباح الخير 👋</div><div style="font-size: 14px; font-weight: 600;">أحمد محمد</div></div>
<div style="font-size: 20px;">🔔</div>
</div>
</div>
<div style="flex: 1; padding: 12px; background: #f8f9fa; overflow-y: auto;">
<div style="font-weight: 600; font-size: 13px; margin-bottom: 8px;">اختر الطالب</div>
<div style="display: flex; align-items: center; background: white; padding: 10px; border-radius: 10px; margin-bottom: 8px; border: 2px solid #4CAF50;">
<div style="width: 40px; height: 40px; background: linear-gradient(135deg, #FFE0B2, #FFCC80); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 20px; margin-left: 10px;">👦</div>
<div style="flex: 1;"><div style="font-weight: 600; font-size: 13px;">يوسف أحمد</div><div style="font-size: 10px; color: #888;">الصف الرابع - فصل 3</div></div>
<div style="color: #4CAF50;">✓</div>
</div>
<div style="background: linear-gradient(135deg, #FFF3E0, #FFE0B2); border-radius: 10px; padding: 10px; margin: 12px 0;">
<div style="display: flex; align-items: center;">
<div style="flex: 1;"><div style="font-size: 10px; color: #E65100;">⏰ آخر موعد للطلب</div><div style="font-size: 16px; font-weight: 700; color: #E65100;">8:00 صباحاً</div></div>
<div style="font-size: 30px;">⏰</div>
</div>
</div>
<button style="width: 100%; padding: 12px; background: linear-gradient(135deg, #4CAF50, #45a049); color: white; border: none; border-radius: 8px; font-size: 14px; font-weight: 600;">🍽️ اطلب وجبة الآن</button>
</div>
<div style="display: flex; justify-content: space-around; background: white; padding: 8px 0; border-top: 1px solid #eee;">
<div style="text-align: center; color: #4CAF50; font-size: 9px;"><div style="font-size: 18px; margin-bottom: 2px;">🏠</div>الرئيسية</div>
<div style="text-align: center; color: #888; font-size: 9px;"><div style="font-size: 18px; margin-bottom: 2px;">📋</div>طلباتي</div>
<div style="text-align: center; color: #888; font-size: 9px;"><div style="font-size: 18px; margin-bottom: 2px;">👤</div>حسابي</div>
</div>
</div>
</div>
</div>

<!-- قائمة الطعام -->
<div style="text-align: center;">
<div style="font-size: 13px; font-weight: 600; margin-bottom: 12px; color: #333;">قائمة الطعام</div>
<div style="width: 260px; height: 520px; background: #1a1a1a; border-radius: 30px; padding: 10px; box-shadow: 0 8px 30px rgba(0,0,0,0.3);">
<div style="width: 100%; height: 100%; background: #fff; border-radius: 22px; overflow: hidden; display: flex; flex-direction: column;">
<div style="padding: 6px 12px; font-size: 11px; color: #333; display: flex; justify-content: space-between;"><span>9:41</span><span>100%</span></div>
<div style="background: linear-gradient(135deg, #4CAF50, #45a049); color: white; padding: 12px;">
<div style="display: flex; align-items: center; gap: 8px;"><span>←</span><span style="font-size: 15px; font-weight: 600;">قائمة الطعام</span></div>
</div>
<div style="flex: 1; padding: 12px; background: #f8f9fa; overflow-y: auto;">
<div style="display: flex; gap: 6px; overflow-x: auto; padding-bottom: 8px; margin-bottom: 12px;">
<span style="padding: 6px 12px; background: #4CAF50; color: white; border-radius: 15px; font-size: 10px; white-space: nowrap;">الكل</span>
<span style="padding: 6px 12px; background: white; border-radius: 15px; font-size: 10px; white-space: nowrap; border: 1px solid #ddd;">🥩 لحوم</span>
<span style="padding: 6px 12px; background: white; border-radius: 15px; font-size: 10px; white-space: nowrap; border: 1px solid #ddd;">🧀 جبن</span>
<span style="padding: 6px 12px; background: white; border-radius: 15px; font-size: 10px; white-space: nowrap; border: 1px solid #ddd;">🥚 بيض</span>
<span style="padding: 6px 12px; background: white; border-radius: 15px; font-size: 10px; white-space: nowrap; border: 1px solid #ddd;">🥗 صحي</span>
</div>
<div style="display: flex; background: white; border-radius: 10px; padding: 8px; margin-bottom: 8px;">
<div style="flex: 1;"><div style="font-weight: 600; font-size: 12px; margin-bottom: 2px;">ساندويتش فراخ مشوية</div><div style="font-size: 10px; color: #888; margin-bottom: 4px;">فراخ + خس + طماطم</div><div style="font-weight: 700; font-size: 13px; color: #4CAF50;">45 ج.م</div></div>
<div style="width: 55px; height: 55px; background: linear-gradient(135deg, #FFE0B2, #FFCC80); border-radius: 8px; display: flex; align-items: center; justify-content: center; font-size: 24px; margin: 0 8px;">🍗</div>
<div style="width: 26px; height: 26px; background: #4CAF50; color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 16px; align-self: center;">+</div>
</div>
<div style="display: flex; background: white; border-radius: 10px; padding: 8px; margin-bottom: 8px;">
<div style="flex: 1;"><div style="font-weight: 600; font-size: 12px; margin-bottom: 2px;">ساندويتش جبنة رومي</div><div style="font-size: 10px; color: #888; margin-bottom: 4px;">جبنة + خيار + طماطم</div><div style="font-weight: 700; font-size: 13px; color: #4CAF50;">25 ج.م</div></div>
<div style="width: 55px; height: 55px; background: linear-gradient(135deg, #FFF9C4, #FFF59D); border-radius: 8px; display: flex; align-items: center; justify-content: center; font-size: 24px; margin: 0 8px;">🧀</div>
<div style="width: 26px; height: 26px; background: #4CAF50; color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 16px; align-self: center;">+</div>
</div>
<div style="display: flex; background: white; border-radius: 10px; padding: 8px;">
<div style="flex: 1;"><div style="font-weight: 600; font-size: 12px; margin-bottom: 2px;">وجبة صحية متكاملة</div><div style="font-size: 10px; color: #888; margin-bottom: 4px;">أرز + فراخ + سلطة</div><div style="font-weight: 700; font-size: 13px; color: #4CAF50;">65 ج.م</div></div>
<div style="width: 55px; height: 55px; background: linear-gradient(135deg, #C8E6C9, #A5D6A7); border-radius: 8px; display: flex; align-items: center; justify-content: center; font-size: 24px; margin: 0 8px;">🥗</div>
<div style="width: 26px; height: 26px; background: #4CAF50; color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 16px; align-self: center;">+</div>
</div>
</div>
<div style="display: flex; justify-content: space-around; background: white; padding: 8px 0; border-top: 1px solid #eee;">
<div style="text-align: center; color: #888; font-size: 9px;"><div style="font-size: 18px; margin-bottom: 2px;">🏠</div>الرئيسية</div>
<div style="text-align: center; color: #4CAF50; font-size: 9px;"><div style="font-size: 18px; margin-bottom: 2px;">📋</div>طلباتي</div>
<div style="text-align: center; color: #888; font-size: 9px;"><div style="font-size: 18px; margin-bottom: 2px;">👤</div>حسابي</div>
</div>
</div>
</div>
</div>

<!-- السلة -->
<div style="text-align: center;">
<div style="font-size: 13px; font-weight: 600; margin-bottom: 12px; color: #333;">سلة الطلبات</div>
<div style="width: 260px; height: 520px; background: #1a1a1a; border-radius: 30px; padding: 10px; box-shadow: 0 8px 30px rgba(0,0,0,0.3);">
<div style="width: 100%; height: 100%; background: #fff; border-radius: 22px; overflow: hidden; display: flex; flex-direction: column;">
<div style="padding: 6px 12px; font-size: 11px; color: #333; display: flex; justify-content: space-between;"><span>9:41</span><span>100%</span></div>
<div style="background: linear-gradient(135deg, #4CAF50, #45a049); color: white; padding: 12px;">
<div style="display: flex; align-items: center; gap: 8px;"><span>←</span><span style="font-size: 15px; font-weight: 600;">سلة الطلبات</span></div>
</div>
<div style="flex: 1; padding: 12px; background: #f8f9fa; overflow-y: auto;">
<div style="background: #E8F5E9; border-radius: 10px; padding: 8px; margin-bottom: 12px; display: flex; align-items: center; font-size: 11px; color: #2E7D32;">
<span style="margin-left: 6px;">👦</span> طلب ليوسف أحمد
</div>
<div style="display: flex; background: white; border-radius: 10px; padding: 8px; margin-bottom: 8px;">
<div style="flex: 1;"><div style="font-weight: 600; font-size: 12px;">ساندويتش فراخ</div><div style="font-size: 10px; color: #888;">الأحد 12 يناير</div><div style="font-weight: 700; font-size: 13px; color: #4CAF50;">45 ج.م</div></div>
<div style="width: 40px; height: 40px; background: linear-gradient(135deg, #FFE0B2, #FFCC80); border-radius: 8px; display: flex; align-items: center; justify-content: center; font-size: 18px; margin: 0 8px;">🍗</div>
</div>
<div style="background: white; border-radius: 10px; padding: 12px; margin-top: 12px;">
<div style="display: flex; justify-content: space-between; margin-bottom: 6px; font-size: 12px;"><span>المجموع الفرعي</span><span>110 ج.م</span></div>
<div style="display: flex; justify-content: space-between; margin-bottom: 6px; font-size: 12px;"><span>رسوم الخدمة</span><span>5 ج.م</span></div>
<div style="display: flex; justify-content: space-between; border-top: 1px solid #eee; padding-top: 8px; font-weight: 700; font-size: 14px;"><span>الإجمالي</span><span style="color: #4CAF50;">115 ج.م</span></div>
</div>
<button style="width: 100%; padding: 10px; background: linear-gradient(135deg, #4CAF50, #45a049); color: white; border: none; border-radius: 8px; font-size: 13px; font-weight: 600; margin-top: 12px;">متابعة الدفع</button>
</div>
</div>
</div>
</div>

</div>

### 3.3 الدفع وتتبع الطلب

<div style="display: flex; gap: 20px; flex-wrap: wrap; justify-content: center; margin: 30px 0;">

<!-- طرق الدفع -->
<div style="text-align: center;">
<div style="font-size: 13px; font-weight: 600; margin-bottom: 12px; color: #333;">طرق الدفع</div>
<div style="width: 260px; height: 520px; background: #1a1a1a; border-radius: 30px; padding: 10px; box-shadow: 0 8px 30px rgba(0,0,0,0.3);">
<div style="width: 100%; height: 100%; background: #fff; border-radius: 22px; overflow: hidden; display: flex; flex-direction: column;">
<div style="padding: 6px 12px; font-size: 11px; color: #333; display: flex; justify-content: space-between;"><span>9:41</span><span>100%</span></div>
<div style="background: linear-gradient(135deg, #4CAF50, #45a049); color: white; padding: 12px;">
<div style="display: flex; align-items: center; gap: 8px;"><span>←</span><span style="font-size: 15px; font-weight: 600;">اختر طريقة الدفع</span></div>
</div>
<div style="flex: 1; padding: 12px; overflow-y: auto;">
<div style="display: flex; align-items: center; background: white; padding: 12px; border-radius: 10px; margin-bottom: 8px; border: 2px solid #4CAF50;">
<div style="width: 35px; height: 35px; background: #f5f5f5; border-radius: 6px; display: flex; align-items: center; justify-content: center; font-size: 18px; margin-left: 10px;">💳</div>
<div style="font-weight: 600; font-size: 12px; flex: 1;">بطاقة ائتمان / فيزا</div>
<div style="width: 18px; height: 18px; border: 2px solid #4CAF50; border-radius: 50%; background: #4CAF50; box-shadow: inset 0 0 0 3px white;"></div>
</div>
<div style="display: flex; align-items: center; background: white; padding: 12px; border-radius: 10px; margin-bottom: 8px; border: 2px solid #eee;">
<div style="width: 35px; height: 35px; background: #E53935; border-radius: 6px; display: flex; align-items: center; justify-content: center; font-size: 10px; font-weight: 700; color: white; margin-left: 10px;">VF</div>
<div style="font-weight: 600; font-size: 12px; flex: 1;">فودافون كاش</div>
<div style="width: 18px; height: 18px; border: 2px solid #ddd; border-radius: 50%;"></div>
</div>
<div style="display: flex; align-items: center; background: white; padding: 12px; border-radius: 10px; margin-bottom: 8px; border: 2px solid #eee;">
<div style="width: 35px; height: 35px; background: #FF6F00; border-radius: 6px; display: flex; align-items: center; justify-content: center; font-size: 9px; font-weight: 700; color: white; margin-left: 10px;">فوري</div>
<div style="font-weight: 600; font-size: 12px; flex: 1;">فوري</div>
<div style="width: 18px; height: 18px; border: 2px solid #ddd; border-radius: 50%;"></div>
</div>
<div style="display: flex; align-items: center; background: white; padding: 12px; border-radius: 10px; border: 2px solid #eee;">
<div style="width: 35px; height: 35px; background: #1565C0; border-radius: 6px; display: flex; align-items: center; justify-content: center; font-size: 9px; color: white; margin-left: 10px;">Inst</div>
<div style="font-weight: 600; font-size: 12px; flex: 1;">إنستاباي</div>
<div style="width: 18px; height: 18px; border: 2px solid #ddd; border-radius: 50%;"></div>
</div>
<button style="width: 100%; padding: 10px; background: linear-gradient(135deg, #4CAF50, #45a049); color: white; border: none; border-radius: 8px; font-size: 13px; font-weight: 600; margin-top: 15px;">ادفع 115 ج.م</button>
</div>
</div>
</div>
</div>

<!-- تأكيد الطلب -->
<div style="text-align: center;">
<div style="font-size: 13px; font-weight: 600; margin-bottom: 12px; color: #333;">تأكيد الطلب</div>
<div style="width: 260px; height: 520px; background: #1a1a1a; border-radius: 30px; padding: 10px; box-shadow: 0 8px 30px rgba(0,0,0,0.3);">
<div style="width: 100%; height: 100%; background: #fff; border-radius: 22px; overflow: hidden; display: flex; flex-direction: column;">
<div style="padding: 6px 12px; font-size: 11px; color: #333; display: flex; justify-content: space-between;"><span>9:41</span><span>100%</span></div>
<div style="flex: 1; display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 25px; text-align: center;">
<div style="width: 80px; height: 80px; background: linear-gradient(135deg, #4CAF50, #81C784); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 40px; margin-bottom: 15px;">✓</div>
<div style="font-size: 18px; font-weight: 700; color: #333; margin-bottom: 6px;">تم الطلب بنجاح!</div>
<div style="font-size: 12px; color: #888; margin-bottom: 4px;">رقم الطلب: #12345</div>
<div style="font-size: 12px; color: #888; margin-bottom: 20px;">سيتم توصيل الوجبة ليوسف في موعدها</div>
<button style="width: 100%; padding: 10px; background: linear-gradient(135deg, #4CAF50, #45a049); color: white; border: none; border-radius: 8px; font-size: 13px; font-weight: 600; margin-bottom: 8px;">تتبع الطلب</button>
<button style="width: 100%; padding: 10px; background: #f0f0f0; color: #333; border: none; border-radius: 8px; font-size: 13px; font-weight: 600;">العودة للرئيسية</button>
</div>
</div>
</div>
</div>

<!-- تتبع الطلب -->
<div style="text-align: center;">
<div style="font-size: 13px; font-weight: 600; margin-bottom: 12px; color: #333;">تتبع الطلب</div>
<div style="width: 260px; height: 520px; background: #1a1a1a; border-radius: 30px; padding: 10px; box-shadow: 0 8px 30px rgba(0,0,0,0.3);">
<div style="width: 100%; height: 100%; background: #fff; border-radius: 22px; overflow: hidden; display: flex; flex-direction: column;">
<div style="padding: 6px 12px; font-size: 11px; color: #333; display: flex; justify-content: space-between;"><span>9:41</span><span>100%</span></div>
<div style="background: linear-gradient(135deg, #4CAF50, #45a049); color: white; padding: 12px;">
<div style="display: flex; align-items: center; gap: 8px;"><span>←</span><span style="font-size: 15px; font-weight: 600;">تتبع الطلب #12345</span></div>
</div>
<div style="flex: 1; padding: 12px; overflow-y: auto;">
<div style="text-align: center; padding: 15px 0;">
<div style="width: 60px; height: 60px; background: linear-gradient(135deg, #4CAF50, #81C784); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 28px; margin: 0 auto 10px;">✓</div>
<div style="font-size: 14px; font-weight: 600; color: #333; margin-bottom: 4px;">تم التسليم!</div>
<div style="font-size: 11px; color: #888;">يوسف استلم وجبته 10:15 ص</div>
</div>
<div style="margin: 15px 0; padding: 0 8px;">
<div style="display: flex; align-items: flex-start; margin-bottom: 12px;">
<div style="width: 10px; height: 10px; background: #4CAF50; border-radius: 50%; margin-left: 8px; margin-top: 2px;"></div>
<div style="flex: 1;"><div style="font-size: 11px; font-weight: 600;">تم استلام الطلب</div><div style="font-size: 9px; color: #888;">7:30 ص</div></div>
</div>
<div style="display: flex; align-items: flex-start; margin-bottom: 12px;">
<div style="width: 10px; height: 10px; background: #4CAF50; border-radius: 50%; margin-left: 8px; margin-top: 2px;"></div>
<div style="flex: 1;"><div style="font-size: 11px; font-weight: 600;">جاري التحضير</div><div style="font-size: 9px; color: #888;">8:15 ص</div></div>
</div>
<div style="display: flex; align-items: flex-start; margin-bottom: 12px;">
<div style="width: 10px; height: 10px; background: #4CAF50; border-radius: 50%; margin-left: 8px; margin-top: 2px;"></div>
<div style="flex: 1;"><div style="font-size: 11px; font-weight: 600;">في الطريق للمدرسة</div><div style="font-size: 9px; color: #888;">9:30 ص</div></div>
</div>
<div style="display: flex; align-items: flex-start; margin-bottom: 12px;">
<div style="width: 10px; height: 10px; background: #4CAF50; border-radius: 50%; margin-left: 8px; margin-top: 2px;"></div>
<div style="flex: 1;"><div style="font-size: 11px; font-weight: 600;">وصل للمدرسة</div><div style="font-size: 9px; color: #888;">9:45 ص</div></div>
</div>
<div style="display: flex; align-items: flex-start;">
<div style="width: 10px; height: 10px; background: #4CAF50; border-radius: 50%; margin-left: 8px; margin-top: 2px;"></div>
<div style="flex: 1;"><div style="font-size: 11px; font-weight: 600;">تم التسليم ✓</div><div style="font-size: 9px; color: #888;">10:15 ص</div></div>
</div>
</div>
</div>
<div style="display: flex; justify-content: space-around; background: white; padding: 8px 0; border-top: 1px solid #eee;">
<div style="text-align: center; color: #888; font-size: 9px;"><div style="font-size: 18px; margin-bottom: 2px;">🏠</div>الرئيسية</div>
<div style="text-align: center; color: #4CAF50; font-size: 9px;"><div style="font-size: 18px; margin-bottom: 2px;">📋</div>طلباتي</div>
<div style="text-align: center; color: #888; font-size: 9px;"><div style="font-size: 18px; margin-bottom: 2px;">👤</div>حسابي</div>
</div>
</div>
</div>
</div>

</div>

---

## 4. لوحة تحكم المورد

لوحة تحكم ويب لموردي الطعام لإدارة القوائم وعرض الطلبات وتتبع المدفوعات.

<div style="background: #1a1a1a; border-radius: 16px; padding: 12px; margin: 25px 0; box-shadow: 0 8px 30px rgba(0,0,0,0.3);">
<div style="background: #fff; border-radius: 10px; overflow: hidden;">
<div style="background: linear-gradient(135deg, #4CAF50, #45a049); color: white; padding: 15px 20px; display: flex; justify-content: space-between; align-items: center;">
<div style="font-size: 16px; font-weight: 600;">🍳 لوحة تحكم المورد</div>
<div style="display: flex; align-items: center; gap: 8px; font-size: 13px;">
<span>مطعم الشيف أحمد</span>
<div style="width: 35px; height: 35px; background: rgba(255,255,255,0.3); border-radius: 50%; display: flex; align-items: center; justify-content: center;">👨‍🍳</div>
</div>
</div>
<div style="padding: 20px;">
<div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px; margin-bottom: 20px;">
<div style="background: #f8f9fa; padding: 12px; border-radius: 8px; border-top: 3px solid #4CAF50;"><div style="font-size: 22px; font-weight: 700;">127</div><div style="font-size: 10px; color: #888;">إجمالي الطلبات</div></div>
<div style="background: #f8f9fa; padding: 12px; border-radius: 8px; border-top: 3px solid #2196F3;"><div style="font-size: 22px; font-weight: 700;">3</div><div style="font-size: 10px; color: #888;">المدارس</div></div>
<div style="background: #f8f9fa; padding: 12px; border-radius: 8px; border-top: 3px solid #FF9800;"><div style="font-size: 22px; font-weight: 700;">4,250</div><div style="font-size: 10px; color: #888;">إيرادات اليوم (ج.م)</div></div>
<div style="background: #f8f9fa; padding: 12px; border-radius: 8px; border-top: 3px solid #9C27B0;"><div style="font-size: 22px; font-weight: 700;">89%</div><div style="font-size: 10px; color: #888;">معدل التسليم</div></div>
</div>
<div style="font-weight: 600; margin-bottom: 12px;">طلبات حسب المدرسة</div>
<table style="width: 100%; border-collapse: collapse; font-size: 11px;">
<tr style="background: #f8f9fa;">
<th style="padding: 10px; text-align: right; font-weight: 600;">المدرسة</th>
<th style="padding: 10px; text-align: right; font-weight: 600;">الطلبات</th>
<th style="padding: 10px; text-align: right; font-weight: 600;">الإجمالي</th>
<th style="padding: 10px; text-align: right; font-weight: 600;">الحالة</th>
</tr>
<tr style="border-bottom: 1px solid #eee;">
<td style="padding: 10px;">مدرسة النيل الدولية</td>
<td style="padding: 10px;">52</td>
<td style="padding: 10px;">1,850 ج.م</td>
<td style="padding: 10px;"><span style="padding: 3px 8px; background: #E3F2FD; color: #1565C0; border-radius: 10px; font-size: 9px;">جاري التحضير</span></td>
</tr>
<tr style="border-bottom: 1px solid #eee;">
<td style="padding: 10px;">مدرسة الأورمان</td>
<td style="padding: 10px;">45</td>
<td style="padding: 10px;">1,520 ج.م</td>
<td style="padding: 10px;"><span style="padding: 3px 8px; background: #FFF3E0; color: #E65100; border-radius: 10px; font-size: 9px;">في الانتظار</span></td>
</tr>
<tr>
<td style="padding: 10px;">مدرسة المستقبل</td>
<td style="padding: 10px;">30</td>
<td style="padding: 10px;">880 ج.م</td>
<td style="padding: 10px;"><span style="padding: 3px 8px; background: #E8F5E9; color: #2E7D32; border-radius: 10px; font-size: 9px;">تم التوصيل</span></td>
</tr>
</table>
</div>
</div>
</div>

---

## 5. تطبيق مشرف الدور

تطبيق موبايل لمشرفي الأدوار في المدرسة لاستلام التوصيلات وتأكيد التسليم للطلاب.

<div style="display: flex; gap: 20px; flex-wrap: wrap; justify-content: center; margin: 30px 0;">

<!-- الرئيسية -->
<div style="text-align: center;">
<div style="font-size: 13px; font-weight: 600; margin-bottom: 12px; color: #333;">الشاشة الرئيسية</div>
<div style="width: 260px; height: 520px; background: #1a1a1a; border-radius: 30px; padding: 10px; box-shadow: 0 8px 30px rgba(0,0,0,0.3);">
<div style="width: 100%; height: 100%; background: #fff; border-radius: 22px; overflow: hidden; display: flex; flex-direction: column;">
<div style="padding: 6px 12px; font-size: 11px; color: #333; display: flex; justify-content: space-between;"><span>9:41</span><span>100%</span></div>
<div style="background: linear-gradient(135deg, #2196F3, #1976D2); color: white; padding: 12px;">
<div style="display: flex; justify-content: space-between; align-items: center;">
<div><div style="font-size: 11px; opacity: 0.9;">مدرسة النيل الدولية</div><div style="font-size: 14px; font-weight: 600;">الدور الثاني</div></div>
<div style="font-size: 20px;">🔔</div>
</div>
</div>
<div style="flex: 1; padding: 12px; background: #f8f9fa; overflow-y: auto;">
<div style="background: linear-gradient(135deg, #FFF3E0, #FFE0B2); border-radius: 10px; padding: 10px; margin-bottom: 12px;">
<div style="display: flex; align-items: center;">
<div style="flex: 1;"><div style="font-size: 10px; color: #E65100;">🚚 التوصيل المتوقع</div><div style="font-size: 16px; font-weight: 700; color: #E65100;">9:45 صباحاً</div></div>
<div style="font-size: 30px;">📦</div>
</div>
</div>
<div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 8px; margin-bottom: 12px;">
<div style="background: white; padding: 10px; border-radius: 8px; border-top: 3px solid #4CAF50;"><div style="font-size: 24px; font-weight: 700;">18</div><div style="font-size: 9px; color: #888;">إجمالي الطلبات</div></div>
<div style="background: white; padding: 10px; border-radius: 8px; border-top: 3px solid #FF9800;"><div style="font-size: 24px; font-weight: 700;">0</div><div style="font-size: 9px; color: #888;">تم التسليم</div></div>
</div>
<button style="width: 100%; padding: 10px; background: linear-gradient(135deg, #2196F3, #1976D2); color: white; border: none; border-radius: 8px; font-size: 13px; font-weight: 600;">📦 استلام من المورد</button>
</div>
</div>
</div>
</div>

<!-- تسليم للطلاب -->
<div style="text-align: center;">
<div style="font-size: 13px; font-weight: 600; margin-bottom: 12px; color: #333;">تسليم للطلاب</div>
<div style="width: 260px; height: 520px; background: #1a1a1a; border-radius: 30px; padding: 10px; box-shadow: 0 8px 30px rgba(0,0,0,0.3);">
<div style="width: 100%; height: 100%; background: #fff; border-radius: 22px; overflow: hidden; display: flex; flex-direction: column;">
<div style="padding: 6px 12px; font-size: 11px; color: #333; display: flex; justify-content: space-between;"><span>9:41</span><span>100%</span></div>
<div style="background: linear-gradient(135deg, #2196F3, #1976D2); color: white; padding: 12px;">
<div style="display: flex; align-items: center; gap: 8px;"><span>←</span><span style="font-size: 15px; font-weight: 600;">تسليم للطلاب</span></div>
</div>
<div style="flex: 1; padding: 12px; background: #f8f9fa; overflow-y: auto;">
<div style="font-weight: 600; font-size: 13px; margin-bottom: 10px;">الصف الرابع - فصل 3</div>
<div style="display: flex; align-items: center; background: white; padding: 10px; border-radius: 10px; margin-bottom: 8px; border: 2px solid #4CAF50;">
<div style="width: 20px; height: 20px; border: 2px solid #4CAF50; border-radius: 5px; margin-left: 10px; background: #4CAF50; display: flex; align-items: center; justify-content: center; color: white; font-size: 12px;">✓</div>
<div style="flex: 1;"><div style="font-weight: 600; font-size: 12px;">يوسف أحمد</div><div style="font-size: 10px; color: #888;">ساندويتش فراخ</div></div>
<span style="padding: 3px 8px; background: #E8F5E9; color: #2E7D32; border-radius: 10px; font-size: 9px;">تم</span>
</div>
<div style="display: flex; align-items: center; background: white; padding: 10px; border-radius: 10px; margin-bottom: 8px;">
<div style="width: 20px; height: 20px; border: 2px solid #ddd; border-radius: 5px; margin-left: 10px;"></div>
<div style="flex: 1;"><div style="font-weight: 600; font-size: 12px;">سارة محمود</div><div style="font-size: 10px; color: #888;">وجبة صحية</div></div>
<button style="padding: 5px 10px; background: #4CAF50; color: white; border: none; border-radius: 4px; font-size: 10px;">تسليم</button>
</div>
<div style="display: flex; align-items: center; background: white; padding: 10px; border-radius: 10px;">
<div style="width: 20px; height: 20px; border: 2px solid #ddd; border-radius: 5px; margin-left: 10px;"></div>
<div style="flex: 1;"><div style="font-weight: 600; font-size: 12px;">عمر خالد</div><div style="font-size: 10px; color: #888;">ساندويتش جبنة</div></div>
<button style="padding: 5px 10px; background: #4CAF50; color: white; border: none; border-radius: 4px; font-size: 10px;">تسليم</button>
</div>
</div>
</div>
</div>
</div>

</div>

---

## 6. لوحة تحكم إدارة المدرسة

لوحة تحكم ويب لمديري المدارس لإدارة الموردين وعرض التقارير وتتبع العمولات.

<div style="background: #1a1a1a; border-radius: 16px; padding: 12px; margin: 25px 0; box-shadow: 0 8px 30px rgba(0,0,0,0.3);">
<div style="background: #fff; border-radius: 10px; overflow: hidden;">
<div style="background: linear-gradient(135deg, #9C27B0, #7B1FA2); color: white; padding: 15px 20px; display: flex; justify-content: space-between; align-items: center;">
<div style="font-size: 16px; font-weight: 600;">🏫 مدرسة النيل الدولية</div>
<div style="display: flex; align-items: center; gap: 8px; font-size: 13px;">
<span>أ. محمد علي</span>
<div style="width: 35px; height: 35px; background: rgba(255,255,255,0.3); border-radius: 50%; display: flex; align-items: center; justify-content: center;">👤</div>
</div>
</div>
<div style="padding: 20px;">
<div style="font-size: 14px; font-weight: 600; margin-bottom: 15px;">نظرة عامة - يناير 2025</div>
<div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px; margin-bottom: 20px;">
<div style="background: #f8f9fa; padding: 12px; border-radius: 8px; border-top: 3px solid #4CAF50;"><div style="font-size: 22px; font-weight: 700;">1,247</div><div style="font-size: 10px; color: #888;">إجمالي الطلبات</div></div>
<div style="background: #f8f9fa; padding: 12px; border-radius: 8px; border-top: 3px solid #2196F3;"><div style="font-size: 22px; font-weight: 700;">312</div><div style="font-size: 10px; color: #888;">الطلاب المسجلين</div></div>
<div style="background: #f8f9fa; padding: 12px; border-radius: 8px; border-top: 3px solid #FF9800;"><div style="font-size: 22px; font-weight: 700;">2,494</div><div style="font-size: 10px; color: #888;">العمولات (ج.م)</div></div>
<div style="background: #f8f9fa; padding: 12px; border-radius: 8px; border-top: 3px solid #9C27B0;"><div style="font-size: 22px; font-weight: 700;">96%</div><div style="font-size: 10px; color: #888;">معدل التسليم</div></div>
</div>
<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px;">
<div style="background: #f8f9fa; border-radius: 10px; padding: 15px;">
<div style="font-weight: 600; font-size: 13px; margin-bottom: 12px;">📊 الطلبات حسب الفئة</div>
<div style="margin-bottom: 8px;"><div style="display: flex; align-items: center; font-size: 11px;"><span style="flex: 1;">🍗 لحوم</span><div style="width: 50%; height: 16px; background: #eee; border-radius: 8px; overflow: hidden;"><div style="width: 45%; height: 100%; background: #4CAF50;"></div></div><span style="width: 35px; text-align: left; font-size: 10px; color: #888;">45%</span></div></div>
<div style="margin-bottom: 8px;"><div style="display: flex; align-items: center; font-size: 11px;"><span style="flex: 1;">🧀 جبن</span><div style="width: 50%; height: 16px; background: #eee; border-radius: 8px; overflow: hidden;"><div style="width: 25%; height: 100%; background: #FFC107;"></div></div><span style="width: 35px; text-align: left; font-size: 10px; color: #888;">25%</span></div></div>
<div style="margin-bottom: 8px;"><div style="display: flex; align-items: center; font-size: 11px;"><span style="flex: 1;">🥗 صحي</span><div style="width: 50%; height: 16px; background: #eee; border-radius: 8px; overflow: hidden;"><div style="width: 20%; height: 100%; background: #2196F3;"></div></div><span style="width: 35px; text-align: left; font-size: 10px; color: #888;">20%</span></div></div>
</div>
<div style="background: #f8f9fa; border-radius: 10px; padding: 15px;">
<div style="font-weight: 600; font-size: 13px; margin-bottom: 12px;">👨‍🍳 المورد الحالي</div>
<div style="display: flex; align-items: center; margin-bottom: 12px;">
<div style="width: 40px; height: 40px; background: #FFE0B2; border-radius: 8px; display: flex; align-items: center; justify-content: center; font-size: 20px; margin-left: 10px;">👨‍🍳</div>
<div><div style="font-weight: 600; font-size: 12px;">مطعم الشيف أحمد</div><div style="font-size: 10px; color: #888;">متعاقد منذ سبتمبر 2024</div></div>
</div>
<div style="display: flex; justify-content: space-between; font-size: 11px; padding: 6px 0; border-top: 1px solid #ddd;"><span>التقييم</span><span style="color: #FFC107;">★★★★★ 4.8</span></div>
<div style="display: flex; justify-content: space-between; font-size: 11px; padding: 6px 0; border-top: 1px solid #ddd;"><span>معدل التسليم</span><span style="color: #4CAF50;">98%</span></div>
</div>
</div>
</div>
</div>
</div>

---

## 7. المواصفات التقنية

### 7.1 مكدس التقنيات

| الطبقة | التقنية | ملاحظات |
|--------|---------|---------|
| تطبيقات الموبايل | React Native / Flutter | منصة متعددة لـ iOS و Android |
| لوحات التحكم | React / Next.js | تصميم متجاوب للتابلت والديسكتوب |
| واجهة برمجة التطبيقات | Node.js / Python (FastAPI) | RESTful API مع WebSocket للتحديث الفوري |
| قاعدة البيانات | PostgreSQL + Redis | التخزين الأساسي + التخزين المؤقت |
| المدفوعات | PayMob / Fawry | تكامل بوابات الدفع المصرية |
| الإشعارات | Firebase Cloud Messaging | دعم iOS و Android |
| الاستضافة | AWS / Google Cloud | يفضل منطقة القاهرة |

### 7.2 نقاط النهاية API (عينة)

| نقطة النهاية | الطريقة | الوصف |
|--------------|---------|-------|
| `/api/auth/register` | POST | تسجيل مستخدم جديد |
| `/api/schools/:id/menu` | GET | الحصول على قائمة مورد المدرسة |
| `/api/orders` | POST | إنشاء طلب جديد |
| `/api/orders/:id/status` | PUT | تحديث حالة الطلب |
| `/api/supplier/orders` | GET | الحصول على طلبات المورد |
| `/api/admin/confirm-delivery` | POST | تأكيد تسليم الطالب |

### 7.3 متطلبات الأمان

- مصادقة JWT مع رموز التحديث
- التحكم في الوصول القائم على الأدوار (RBAC)
- تشفير البيانات أثناء الراحة والنقل (TLS 1.3)
- الامتثال لـ PCI-DSS لمعالجة المدفوعات
- حماية بيانات الطلاب على غرار GDPR
- تحديد المعدل وحماية DDoS

---

## 8. نطاق MVP وخارطة الطريق

### المرحلة 1: MVP

| الميزة | الحالة |
|--------|--------|
| تسجيل ولي الأمر وإدارة الأطفال | في النطاق |
| تصفح قائمة طعام المدرسة | في النطاق |
| طلب يوم واحد | في النطاق |
| الدفع بالبطاقة والمحفظة الإلكترونية | في النطاق |
| تتبع الطلب الأساسي | في النطاق |
| تأكيد تسليم مشرف الدور | في النطاق |
| قائمة طلبات المورد ولوحة التحكم | في النطاق |

### المرحلة 2: ميزات محسنة

| الميزة | الحالة |
|--------|--------|
| جدولة الوجبات الأسبوعية | بعد MVP |
| الطلبات المتكررة | بعد MVP |
| الإشعارات الفورية | بعد MVP |
| تقارير إدارة المدرسة | بعد MVP |
| تحليلات المورد | بعد MVP |

### المرحلة 3: التوسع

| الميزة | الحالة |
|--------|--------|
| لوحة تحكم وزارة التربية والتعليم | مستقبلي |
| تتبع التغذية | مستقبلي |
| خطط الوجبات بالاشتراك | مستقبلي |
| موردون متعددون لكل مدرسة | مستقبلي |
| المراسلة داخل التطبيق | مستقبلي |

---

**إصدار الوثيقة:** 1.0
**آخر تحديث:** يناير 2025
