# School Meal Delivery System — Detailed PRD

**Version:** 1.0
**Date:** January 2025
**Target Market:** Egypt (K-12 Schools)

---

## Table of Contents

1. [Product Overview](#1-product-overview)
2. [Order Flow](#2-order-flow)
3. [Parent Mobile App](#3-parent-mobile-app)
4. [Supplier Dashboard](#4-supplier-dashboard)
5. [Floor Admin App](#5-floor-admin-app)
6. [School Admin Dashboard](#6-school-admin-dashboard)
7. [Technical Specifications](#7-technical-specifications)
8. [MVP Scope & Roadmap](#8-mvp-scope--roadmap)

---

## 1. Product Overview

A mobile platform that connects **parents**, **schools**, and **food suppliers** to streamline school meal ordering and delivery. Each school is linked to exactly one supplier, ensuring consistency and simplified operations.

### Key Value Propositions

| Stakeholder | Value |
|-------------|-------|
| **Parents** | Easy ordering, healthy meals, real-time tracking |
| **Schools** | Single vendor coordination, commission revenue, student nutrition visibility |
| **Suppliers** | Predictable demand, batch production, guaranteed payments |

### Business Model

| Revenue Stream | Description | Rate |
|----------------|-------------|------|
| Platform Fee | Commission on each transaction | 5-10% |
| School Commission | Fixed amount per order to school | 2-5 EGP |
| Supplier Subscription | Monthly platform access fee (optional) | 500-1000 EGP |

---

## 2. Order Flow

<div style="display: flex; align-items: center; justify-content: space-between; padding: 30px; background: linear-gradient(135deg, #f8f9fa, #e9ecef); border-radius: 12px; margin: 20px 0; overflow-x: auto; gap: 10px;">
  <div style="text-align: center; min-width: 100px;">
    <div style="width: 60px; height: 60px; background: linear-gradient(135deg, #4CAF50, #81C784); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 24px; margin: 0 auto 10px;">👨‍👩‍👧</div>
    <div style="font-size: 12px; font-weight: 600;">Parent Orders</div>
  </div>
  <div style="font-size: 24px; color: #ccc;">→</div>
  <div style="text-align: center; min-width: 100px;">
    <div style="width: 60px; height: 60px; background: linear-gradient(135deg, #4CAF50, #81C784); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 24px; margin: 0 auto 10px;">📋</div>
    <div style="font-size: 12px; font-weight: 600;">Aggregated</div>
  </div>
  <div style="font-size: 24px; color: #ccc;">→</div>
  <div style="text-align: center; min-width: 100px;">
    <div style="width: 60px; height: 60px; background: linear-gradient(135deg, #4CAF50, #81C784); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 24px; margin: 0 auto 10px;">👨‍🍳</div>
    <div style="font-size: 12px; font-weight: 600;">Supplier Prepares</div>
  </div>
  <div style="font-size: 24px; color: #ccc;">→</div>
  <div style="text-align: center; min-width: 100px;">
    <div style="width: 60px; height: 60px; background: linear-gradient(135deg, #4CAF50, #81C784); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 24px; margin: 0 auto 10px;">🚚</div>
    <div style="font-size: 12px; font-weight: 600;">Delivered</div>
  </div>
  <div style="font-size: 24px; color: #ccc;">→</div>
  <div style="text-align: center; min-width: 100px;">
    <div style="width: 60px; height: 60px; background: linear-gradient(135deg, #4CAF50, #81C784); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 24px; margin: 0 auto 10px;">✅</div>
    <div style="font-size: 12px; font-weight: 600;">Confirmed</div>
  </div>
  <div style="font-size: 24px; color: #ccc;">→</div>
  <div style="text-align: center; min-width: 100px;">
    <div style="width: 60px; height: 60px; background: linear-gradient(135deg, #4CAF50, #81C784); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 24px; margin: 0 auto 10px;">💰</div>
    <div style="font-size: 12px; font-weight: 600;">Payment Released</div>
  </div>
</div>

### Timing Requirements

| Event | Time | Notes |
|-------|------|-------|
| Order Cutoff | 8:00 AM | No orders accepted after this time |
| Supplier Receives Orders | 8:00 AM | Aggregated list sent automatically |
| Delivery to School | 9:30 - 10:00 AM | Before first break |
| Distribution Complete | 10:30 AM | All students receive meals |
| Payment Release | After Confirmation | Automatic after floor admin confirms |

---

## 3. Parent Mobile App

The primary interface for parents to manage their children's meals. Arabic-first with English support.

### 3.1 Welcome & Onboarding

<div style="display: flex; gap: 30px; flex-wrap: wrap; justify-content: center; margin: 30px 0;">

<!-- Splash Screen -->
<div style="text-align: center;">
<div style="font-size: 14px; font-weight: 600; margin-bottom: 15px; color: #333;">Splash Screen</div>
<div style="width: 280px; height: 580px; background: #1a1a1a; border-radius: 35px; padding: 12px; box-shadow: 0 10px 40px rgba(0,0,0,0.3);">
<div style="width: 100%; height: 100%; background: linear-gradient(135deg, #4CAF50, #81C784); border-radius: 25px; display: flex; flex-direction: column; align-items: center; justify-content: center;">
<div style="font-size: 80px; margin-bottom: 20px;">🍱</div>
<div style="font-size: 24px; font-weight: 700; color: white; margin-bottom: 8px;">وجبتي</div>
<div style="font-size: 14px; color: rgba(255,255,255,0.9);">Wajbaty</div>
<div style="font-size: 12px; color: rgba(255,255,255,0.7); margin-top: 20px;">وجبات صحية لأولادك</div>
</div>
</div>
</div>

<!-- Welcome Screen -->
<div style="text-align: center;">
<div style="font-size: 14px; font-weight: 600; margin-bottom: 15px; color: #333;">Welcome Screen</div>
<div style="width: 280px; height: 580px; background: #1a1a1a; border-radius: 35px; padding: 12px; box-shadow: 0 10px 40px rgba(0,0,0,0.3);">
<div style="width: 100%; height: 100%; background: #fff; border-radius: 25px; overflow: hidden; display: flex; flex-direction: column;">
<div style="display: flex; justify-content: space-between; padding: 8px 15px; font-size: 12px; color: #333;">
<span>9:41</span>
<span>100%</span>
</div>
<div style="flex: 1; display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 20px; text-align: center;">
<div style="width: 150px; height: 150px; background: linear-gradient(135deg, #E8F5E9, #C8E6C9); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 64px; margin-bottom: 20px;">🍽️</div>
<div style="font-size: 20px; font-weight: 700; color: #333; margin-bottom: 8px;">مرحباً بك في وجبتي</div>
<div style="font-size: 13px; color: #888; margin-bottom: 30px;">اطلب وجبات صحية لأولادك وتابع التوصيل</div>
<button style="width: 100%; padding: 12px; background: linear-gradient(135deg, #4CAF50, #45a049); color: white; border: none; border-radius: 8px; font-size: 14px; font-weight: 600; margin-bottom: 10px;">إنشاء حساب جديد</button>
<button style="width: 100%; padding: 12px; background: transparent; color: #4CAF50; border: 2px solid #4CAF50; border-radius: 8px; font-size: 14px; font-weight: 600;">تسجيل الدخول</button>
</div>
</div>
</div>
</div>

<!-- Account Type -->
<div style="text-align: center;">
<div style="font-size: 14px; font-weight: 600; margin-bottom: 15px; color: #333;">Account Type Selection</div>
<div style="width: 280px; height: 580px; background: #1a1a1a; border-radius: 35px; padding: 12px; box-shadow: 0 10px 40px rgba(0,0,0,0.3);">
<div style="width: 100%; height: 100%; background: #fff; border-radius: 25px; overflow: hidden; display: flex; flex-direction: column;">
<div style="display: flex; justify-content: space-between; padding: 8px 15px; font-size: 12px; color: #333;">
<span>9:41</span>
<span>100%</span>
</div>
<div style="background: linear-gradient(135deg, #4CAF50, #45a049); color: white; padding: 15px; text-align: center;">
<div style="font-size: 16px; font-weight: 600;">اختر نوع الحساب</div>
</div>
<div style="flex: 1; padding: 15px; background: #f8f9fa;">
<div style="background: white; border-radius: 12px; padding: 15px; margin-bottom: 10px; box-shadow: 0 2px 8px rgba(0,0,0,0.08); border: 2px solid #4CAF50; display: flex; align-items: center;">
<div style="font-size: 36px; margin-left: 15px;">👨‍👩‍👧</div>
<div>
<div style="font-weight: 600; font-size: 14px;">ولي أمر</div>
<div style="font-size: 11px; color: #888;">اطلب وجبات لأولادك</div>
</div>
</div>
<div style="background: white; border-radius: 12px; padding: 15px; margin-bottom: 10px; box-shadow: 0 2px 8px rgba(0,0,0,0.08); display: flex; align-items: center;">
<div style="font-size: 36px; margin-left: 15px;">👨‍🍳</div>
<div>
<div style="font-weight: 600; font-size: 14px;">مورد طعام</div>
<div style="font-size: 11px; color: #888;">قدم وجبات للمدارس</div>
</div>
</div>
<div style="background: white; border-radius: 12px; padding: 15px; box-shadow: 0 2px 8px rgba(0,0,0,0.08); display: flex; align-items: center;">
<div style="font-size: 36px; margin-left: 15px;">🏫</div>
<div>
<div style="font-weight: 600; font-size: 14px;">مشرف مدرسة</div>
<div style="font-size: 11px; color: #888;">استلم وأكد التوصيل</div>
</div>
</div>
</div>
</div>
</div>
</div>

</div>

### 3.2 Parent Registration

<div style="display: flex; gap: 30px; flex-wrap: wrap; justify-content: center; margin: 30px 0;">

<!-- Parent Info -->
<div style="text-align: center;">
<div style="font-size: 14px; font-weight: 600; margin-bottom: 15px; color: #333;">Step 1: Parent Info</div>
<div style="width: 280px; height: 580px; background: #1a1a1a; border-radius: 35px; padding: 12px; box-shadow: 0 10px 40px rgba(0,0,0,0.3);">
<div style="width: 100%; height: 100%; background: #fff; border-radius: 25px; overflow: hidden; display: flex; flex-direction: column;">
<div style="display: flex; justify-content: space-between; padding: 8px 15px; font-size: 12px; color: #333;">
<span>9:41</span>
<span>100%</span>
</div>
<div style="background: linear-gradient(135deg, #4CAF50, #45a049); color: white; padding: 15px;">
<div style="display: flex; align-items: center; gap: 10px;">
<span style="font-size: 18px;">←</span>
<span style="font-size: 16px; font-weight: 600;">بيانات ولي الأمر</span>
</div>
</div>
<div style="flex: 1; padding: 15px; overflow-y: auto;">
<div style="text-align: center; margin-bottom: 20px;">
<div style="font-size: 11px; color: #888;">الخطوة 1 من 3</div>
<div style="height: 4px; background: #eee; border-radius: 2px; margin-top: 8px;">
<div style="width: 33%; height: 100%; background: #4CAF50; border-radius: 2px;"></div>
</div>
</div>
<div style="margin-bottom: 12px;">
<label style="font-size: 11px; color: #666; display: block; margin-bottom: 4px;">الاسم الكامل</label>
<input type="text" placeholder="أحمد محمد" style="width: 100%; padding: 10px 12px; border: 1px solid #ddd; border-radius: 8px; font-size: 13px; box-sizing: border-box;">
</div>
<div style="margin-bottom: 12px;">
<label style="font-size: 11px; color: #666; display: block; margin-bottom: 4px;">رقم الموبايل</label>
<input type="tel" placeholder="01xxxxxxxxx" style="width: 100%; padding: 10px 12px; border: 1px solid #ddd; border-radius: 8px; font-size: 13px; box-sizing: border-box;">
</div>
<div style="margin-bottom: 12px;">
<label style="font-size: 11px; color: #666; display: block; margin-bottom: 4px;">البريد الإلكتروني (اختياري)</label>
<input type="email" placeholder="email@example.com" style="width: 100%; padding: 10px 12px; border: 1px solid #ddd; border-radius: 8px; font-size: 13px; box-sizing: border-box;">
</div>
<div style="margin-bottom: 12px;">
<label style="font-size: 11px; color: #666; display: block; margin-bottom: 4px;">كلمة المرور</label>
<input type="password" placeholder="••••••••" style="width: 100%; padding: 10px 12px; border: 1px solid #ddd; border-radius: 8px; font-size: 13px; box-sizing: border-box;">
</div>
<button style="width: 100%; padding: 12px; background: linear-gradient(135deg, #4CAF50, #45a049); color: white; border: none; border-radius: 8px; font-size: 14px; font-weight: 600; margin-top: 10px;">التالي</button>
</div>
</div>
</div>
</div>

<!-- School Selection -->
<div style="text-align: center;">
<div style="font-size: 14px; font-weight: 600; margin-bottom: 15px; color: #333;">Step 2: School Selection</div>
<div style="width: 280px; height: 580px; background: #1a1a1a; border-radius: 35px; padding: 12px; box-shadow: 0 10px 40px rgba(0,0,0,0.3);">
<div style="width: 100%; height: 100%; background: #fff; border-radius: 25px; overflow: hidden; display: flex; flex-direction: column;">
<div style="display: flex; justify-content: space-between; padding: 8px 15px; font-size: 12px; color: #333;">
<span>9:41</span>
<span>100%</span>
</div>
<div style="background: linear-gradient(135deg, #4CAF50, #45a049); color: white; padding: 15px;">
<div style="display: flex; align-items: center; gap: 10px;">
<span style="font-size: 18px;">←</span>
<span style="font-size: 16px; font-weight: 600;">اختر المدرسة</span>
</div>
</div>
<div style="flex: 1; padding: 15px; overflow-y: auto;">
<div style="text-align: center; margin-bottom: 20px;">
<div style="font-size: 11px; color: #888;">الخطوة 2 من 3</div>
<div style="height: 4px; background: #eee; border-radius: 2px; margin-top: 8px;">
<div style="width: 66%; height: 100%; background: #4CAF50; border-radius: 2px;"></div>
</div>
</div>
<div style="margin-bottom: 12px;">
<input type="text" placeholder="🔍 ابحث عن المدرسة..." style="width: 100%; padding: 10px 12px; border: 1px solid #ddd; border-radius: 8px; font-size: 13px; box-sizing: border-box;">
</div>
<div style="background: white; border-radius: 12px; padding: 12px; margin-bottom: 10px; box-shadow: 0 2px 8px rgba(0,0,0,0.08); border: 2px solid #4CAF50;">
<div style="font-weight: 600; font-size: 14px;">مدرسة النيل الدولية</div>
<div style="font-size: 11px; color: #888;">المعادي - القاهرة</div>
</div>
<div style="background: white; border-radius: 12px; padding: 12px; margin-bottom: 10px; box-shadow: 0 2px 8px rgba(0,0,0,0.08);">
<div style="font-weight: 600; font-size: 14px;">مدرسة الأورمان الخاصة</div>
<div style="font-size: 11px; color: #888;">الدقي - الجيزة</div>
</div>
<div style="background: white; border-radius: 12px; padding: 12px; margin-bottom: 10px; box-shadow: 0 2px 8px rgba(0,0,0,0.08);">
<div style="font-weight: 600; font-size: 14px;">مدرسة المستقبل</div>
<div style="font-size: 11px; color: #888;">مدينة نصر - القاهرة</div>
</div>
<button style="width: 100%; padding: 12px; background: linear-gradient(135deg, #4CAF50, #45a049); color: white; border: none; border-radius: 8px; font-size: 14px; font-weight: 600; margin-top: 10px;">التالي</button>
</div>
</div>
</div>
</div>

<!-- Child Details -->
<div style="text-align: center;">
<div style="font-size: 14px; font-weight: 600; margin-bottom: 15px; color: #333;">Step 3: Child Details</div>
<div style="width: 280px; height: 580px; background: #1a1a1a; border-radius: 35px; padding: 12px; box-shadow: 0 10px 40px rgba(0,0,0,0.3);">
<div style="width: 100%; height: 100%; background: #fff; border-radius: 25px; overflow: hidden; display: flex; flex-direction: column;">
<div style="display: flex; justify-content: space-between; padding: 8px 15px; font-size: 12px; color: #333;">
<span>9:41</span>
<span>100%</span>
</div>
<div style="background: linear-gradient(135deg, #4CAF50, #45a049); color: white; padding: 15px;">
<div style="display: flex; align-items: center; gap: 10px;">
<span style="font-size: 18px;">←</span>
<span style="font-size: 16px; font-weight: 600;">بيانات الطالب</span>
</div>
</div>
<div style="flex: 1; padding: 15px; overflow-y: auto;">
<div style="text-align: center; margin-bottom: 20px;">
<div style="font-size: 11px; color: #888;">الخطوة 3 من 3</div>
<div style="height: 4px; background: #eee; border-radius: 2px; margin-top: 8px;">
<div style="width: 100%; height: 100%; background: #4CAF50; border-radius: 2px;"></div>
</div>
</div>
<div style="margin-bottom: 12px;">
<label style="font-size: 11px; color: #666; display: block; margin-bottom: 4px;">اسم الطالب</label>
<input type="text" placeholder="يوسف أحمد" style="width: 100%; padding: 10px 12px; border: 1px solid #ddd; border-radius: 8px; font-size: 13px; box-sizing: border-box;">
</div>
<div style="margin-bottom: 12px;">
<label style="font-size: 11px; color: #666; display: block; margin-bottom: 4px;">الصف الدراسي</label>
<select style="width: 100%; padding: 10px 12px; border: 1px solid #ddd; border-radius: 8px; font-size: 13px; box-sizing: border-box; background: white;">
<option>الصف الرابع الابتدائي</option>
</select>
</div>
<div style="margin-bottom: 12px;">
<label style="font-size: 11px; color: #666; display: block; margin-bottom: 4px;">رقم الفصل</label>
<select style="width: 100%; padding: 10px 12px; border: 1px solid #ddd; border-radius: 8px; font-size: 13px; box-sizing: border-box; background: white;">
<option>فصل 3</option>
</select>
</div>
<div style="margin-bottom: 12px;">
<label style="font-size: 11px; color: #666; display: block; margin-bottom: 4px;">ملاحظات صحية (حساسية، أمراض)</label>
<input type="text" placeholder="مثال: حساسية من الفول السوداني" style="width: 100%; padding: 10px 12px; border: 1px solid #ddd; border-radius: 8px; font-size: 13px; box-sizing: border-box;">
</div>
<button style="width: 100%; padding: 12px; background: linear-gradient(135deg, #4CAF50, #45a049); color: white; border: none; border-radius: 8px; font-size: 14px; font-weight: 600; margin-top: 10px;">إنشاء الحساب</button>
</div>
</div>
</div>
</div>

</div>

### 3.3 Home & Menu Browsing

<div style="display: flex; gap: 30px; flex-wrap: wrap; justify-content: center; margin: 30px 0;">

<!-- Home Screen -->
<div style="text-align: center;">
<div style="font-size: 14px; font-weight: 600; margin-bottom: 15px; color: #333;">Home Screen</div>
<div style="width: 280px; height: 580px; background: #1a1a1a; border-radius: 35px; padding: 12px; box-shadow: 0 10px 40px rgba(0,0,0,0.3);">
<div style="width: 100%; height: 100%; background: #fff; border-radius: 25px; overflow: hidden; display: flex; flex-direction: column;">
<div style="display: flex; justify-content: space-between; padding: 8px 15px; font-size: 12px; color: #333;">
<span>9:41</span>
<span>100%</span>
</div>
<div style="background: linear-gradient(135deg, #4CAF50, #45a049); color: white; padding: 15px 15px 25px;">
<div style="display: flex; justify-content: space-between; align-items: center;">
<div>
<div style="font-size: 12px; opacity: 0.9;">صباح الخير 👋</div>
<div style="font-size: 16px; font-weight: 600;">أحمد محمد</div>
</div>
<div style="font-size: 24px;">🔔</div>
</div>
</div>
<div style="flex: 1; padding: 15px; background: #f8f9fa; overflow-y: auto;">
<div style="margin-top: -15px; margin-bottom: 15px;">
<div style="font-weight: 600; font-size: 14px; margin-bottom: 10px;">اختر الطالب</div>
<div style="display: flex; align-items: center; background: white; padding: 12px; border-radius: 12px; margin-bottom: 10px; box-shadow: 0 2px 8px rgba(0,0,0,0.08); border: 2px solid #4CAF50;">
<div style="width: 50px; height: 50px; background: linear-gradient(135deg, #FFE0B2, #FFCC80); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 24px; margin-left: 12px;">👦</div>
<div style="flex: 1;">
<div style="font-weight: 600; font-size: 14px;">يوسف أحمد</div>
<div style="font-size: 11px; color: #888;">الصف الرابع - فصل 3</div>
</div>
<div style="color: #4CAF50;">✓</div>
</div>
<div style="display: flex; align-items: center; background: white; padding: 12px; border-radius: 12px; margin-bottom: 10px; box-shadow: 0 2px 8px rgba(0,0,0,0.08);">
<div style="width: 50px; height: 50px; background: linear-gradient(135deg, #F8BBD9, #F48FB1); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 24px; margin-left: 12px;">👧</div>
<div style="flex: 1;">
<div style="font-weight: 600; font-size: 14px;">مريم أحمد</div>
<div style="font-size: 11px; color: #888;">الصف الثاني - فصل 1</div>
</div>
</div>
</div>
<div style="background: linear-gradient(135deg, #FFF3E0, #FFE0B2); border-radius: 12px; padding: 12px; margin-bottom: 15px;">
<div style="display: flex; align-items: center;">
<div style="flex: 1;">
<div style="font-size: 11px; color: #E65100;">⏰ آخر موعد للطلب</div>
<div style="font-size: 18px; font-weight: 700; color: #E65100;">8:00 صباحاً</div>
</div>
<div style="font-size: 36px;">⏰</div>
</div>
</div>
<button style="width: 100%; padding: 15px; background: linear-gradient(135deg, #4CAF50, #45a049); color: white; border: none; border-radius: 8px; font-size: 16px; font-weight: 600;">🍽️ اطلب وجبة الآن</button>
</div>
<div style="display: flex; justify-content: space-around; background: white; padding: 10px 0; border-top: 1px solid #eee;">
<div style="text-align: center; color: #4CAF50; font-size: 10px;"><div style="font-size: 20px; margin-bottom: 3px;">🏠</div>الرئيسية</div>
<div style="text-align: center; color: #888; font-size: 10px;"><div style="font-size: 20px; margin-bottom: 3px;">📋</div>طلباتي</div>
<div style="text-align: center; color: #888; font-size: 10px;"><div style="font-size: 20px; margin-bottom: 3px;">👤</div>حسابي</div>
</div>
</div>
</div>
</div>

<!-- Menu Categories -->
<div style="text-align: center;">
<div style="font-size: 14px; font-weight: 600; margin-bottom: 15px; color: #333;">Menu - Categories</div>
<div style="width: 280px; height: 580px; background: #1a1a1a; border-radius: 35px; padding: 12px; box-shadow: 0 10px 40px rgba(0,0,0,0.3);">
<div style="width: 100%; height: 100%; background: #fff; border-radius: 25px; overflow: hidden; display: flex; flex-direction: column;">
<div style="display: flex; justify-content: space-between; padding: 8px 15px; font-size: 12px; color: #333;">
<span>9:41</span>
<span>100%</span>
</div>
<div style="background: linear-gradient(135deg, #4CAF50, #45a049); color: white; padding: 15px;">
<div style="display: flex; align-items: center; gap: 10px;">
<span style="font-size: 18px;">←</span>
<span style="font-size: 16px; font-weight: 600;">قائمة الطعام</span>
</div>
</div>
<div style="flex: 1; padding: 15px; background: #f8f9fa; overflow-y: auto;">
<div style="background: white; padding: 10px; border-radius: 10px; margin-bottom: 15px; display: flex; align-items: center;">
<span style="margin-left: 8px;">🔍</span>
<span style="color: #aaa; font-size: 13px;">ابحث عن وجبة...</span>
</div>
<div style="display: flex; gap: 8px; overflow-x: auto; padding-bottom: 10px; margin-bottom: 15px;">
<span style="padding: 8px 14px; background: #4CAF50; color: white; border-radius: 20px; font-size: 11px; white-space: nowrap;">الكل</span>
<span style="padding: 8px 14px; background: white; border-radius: 20px; font-size: 11px; white-space: nowrap; border: 1px solid #ddd;">🥩 لحوم</span>
<span style="padding: 8px 14px; background: white; border-radius: 20px; font-size: 11px; white-space: nowrap; border: 1px solid #ddd;">🧀 جبن</span>
<span style="padding: 8px 14px; background: white; border-radius: 20px; font-size: 11px; white-space: nowrap; border: 1px solid #ddd;">🥗 صحي</span>
</div>
<div style="display: flex; background: white; border-radius: 12px; padding: 10px; margin-bottom: 10px; box-shadow: 0 2px 8px rgba(0,0,0,0.08);">
<div style="flex: 1;">
<div style="font-weight: 600; font-size: 13px; margin-bottom: 3px;">ساندويتش فراخ مشوية</div>
<div style="font-size: 11px; color: #888; margin-bottom: 5px;">فراخ مشوية + خس + طماطم</div>
<div style="font-weight: 700; font-size: 14px; color: #4CAF50;">45 ج.م</div>
</div>
<div style="width: 70px; height: 70px; background: linear-gradient(135deg, #FFE0B2, #FFCC80); border-radius: 10px; display: flex; align-items: center; justify-content: center; font-size: 28px; margin: 0 10px;">🍗</div>
<div style="width: 30px; height: 30px; background: #4CAF50; color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 18px; align-self: center;">+</div>
</div>
<div style="display: flex; background: white; border-radius: 12px; padding: 10px; margin-bottom: 10px; box-shadow: 0 2px 8px rgba(0,0,0,0.08);">
<div style="flex: 1;">
<div style="font-weight: 600; font-size: 13px; margin-bottom: 3px;">ساندويتش جبنة رومي</div>
<div style="font-size: 11px; color: #888; margin-bottom: 5px;">جبنة رومي + خيار + طماطم</div>
<div style="font-weight: 700; font-size: 14px; color: #4CAF50;">25 ج.م</div>
</div>
<div style="width: 70px; height: 70px; background: linear-gradient(135deg, #FFF9C4, #FFF59D); border-radius: 10px; display: flex; align-items: center; justify-content: center; font-size: 28px; margin: 0 10px;">🧀</div>
<div style="width: 30px; height: 30px; background: #4CAF50; color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 18px; align-self: center;">+</div>
</div>
<div style="display: flex; background: white; border-radius: 12px; padding: 10px; box-shadow: 0 2px 8px rgba(0,0,0,0.08);">
<div style="flex: 1;">
<div style="font-weight: 600; font-size: 13px; margin-bottom: 3px;">وجبة صحية متكاملة</div>
<div style="font-size: 11px; color: #888; margin-bottom: 5px;">أرز + فراخ + سلطة + عصير</div>
<div style="font-weight: 700; font-size: 14px; color: #4CAF50;">65 ج.م</div>
</div>
<div style="width: 70px; height: 70px; background: linear-gradient(135deg, #C8E6C9, #A5D6A7); border-radius: 10px; display: flex; align-items: center; justify-content: center; font-size: 28px; margin: 0 10px;">🥗</div>
<div style="width: 30px; height: 30px; background: #4CAF50; color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 18px; align-self: center;">+</div>
</div>
</div>
<div style="display: flex; justify-content: space-around; background: white; padding: 10px 0; border-top: 1px solid #eee;">
<div style="text-align: center; color: #888; font-size: 10px;"><div style="font-size: 20px; margin-bottom: 3px;">🏠</div>الرئيسية</div>
<div style="text-align: center; color: #4CAF50; font-size: 10px;"><div style="font-size: 20px; margin-bottom: 3px;">📋</div>طلباتي</div>
<div style="text-align: center; color: #888; font-size: 10px;"><div style="font-size: 20px; margin-bottom: 3px;">👤</div>حسابي</div>
</div>
</div>
</div>
</div>

<!-- Item Detail -->
<div style="text-align: center;">
<div style="font-size: 14px; font-weight: 600; margin-bottom: 15px; color: #333;">Menu Item Detail</div>
<div style="width: 280px; height: 580px; background: #1a1a1a; border-radius: 35px; padding: 12px; box-shadow: 0 10px 40px rgba(0,0,0,0.3);">
<div style="width: 100%; height: 100%; background: #fff; border-radius: 25px; overflow: hidden; display: flex; flex-direction: column;">
<div style="height: 180px; background: linear-gradient(135deg, #FFE0B2, #FFCC80); display: flex; align-items: center; justify-content: center; font-size: 80px; position: relative;">
🍗
<div style="position: absolute; top: 15px; right: 15px; width: 36px; height: 36px; background: white; border-radius: 50%; display: flex; align-items: center; justify-content: center;">←</div>
</div>
<div style="flex: 1; background: white; margin-top: -20px; border-radius: 20px 20px 0 0; padding: 25px 15px 15px; overflow-y: auto;">
<div style="font-size: 18px; font-weight: 700; margin-bottom: 5px;">ساندويتش فراخ مشوية</div>
<div style="font-size: 13px; color: #888; margin-bottom: 15px;">فراخ مشوية طازجة مع خس وطماطم وصوص خاص</div>
<div style="font-size: 22px; font-weight: 700; color: #4CAF50; margin-bottom: 20px;">45 ج.م</div>
<div style="font-weight: 600; font-size: 14px; margin-bottom: 10px;">اختر يوم التوصيل</div>
<div style="display: flex; gap: 8px; margin-bottom: 15px;">
<div style="min-width: 50px; padding: 10px; text-align: center; background: #4CAF50; color: white; border-radius: 10px;"><div style="font-size: 10px;">الأحد</div><div style="font-size: 16px; font-weight: 700;">12</div></div>
<div style="min-width: 50px; padding: 10px; text-align: center; background: white; border-radius: 10px; border: 1px solid #ddd;"><div style="font-size: 10px;">الإثنين</div><div style="font-size: 16px; font-weight: 700;">13</div></div>
<div style="min-width: 50px; padding: 10px; text-align: center; background: white; border-radius: 10px; border: 1px solid #ddd;"><div style="font-size: 10px;">الثلاثاء</div><div style="font-size: 16px; font-weight: 700;">14</div></div>
<div style="min-width: 50px; padding: 10px; text-align: center; background: white; border-radius: 10px; border: 1px solid #ddd;"><div style="font-size: 10px;">الأربعاء</div><div style="font-size: 16px; font-weight: 700;">15</div></div>
</div>
<div style="display: flex; align-items: center; margin-bottom: 15px;">
<input type="checkbox" style="margin-left: 8px;">
<span style="font-size: 13px;">تكرار الطلب لكل أيام الأسبوع</span>
</div>
<div style="display: flex; align-items: center; justify-content: center; gap: 20px; margin: 20px 0;">
<div style="width: 36px; height: 36px; background: #f5f5f5; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 18px;">-</div>
<div style="font-size: 20px; font-weight: 700;">1</div>
<div style="width: 36px; height: 36px; background: #4CAF50; color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 18px;">+</div>
</div>
<button style="width: 100%; padding: 12px; background: linear-gradient(135deg, #4CAF50, #45a049); color: white; border: none; border-radius: 8px; font-size: 14px; font-weight: 600;">أضف للسلة - 45 ج.م</button>
</div>
</div>
</div>
</div>

</div>

### 3.4 Cart & Checkout

<div style="display: flex; gap: 30px; flex-wrap: wrap; justify-content: center; margin: 30px 0;">

<!-- Cart -->
<div style="text-align: center;">
<div style="font-size: 14px; font-weight: 600; margin-bottom: 15px; color: #333;">Cart</div>
<div style="width: 280px; height: 580px; background: #1a1a1a; border-radius: 35px; padding: 12px; box-shadow: 0 10px 40px rgba(0,0,0,0.3);">
<div style="width: 100%; height: 100%; background: #fff; border-radius: 25px; overflow: hidden; display: flex; flex-direction: column;">
<div style="display: flex; justify-content: space-between; padding: 8px 15px; font-size: 12px; color: #333;">
<span>9:41</span>
<span>100%</span>
</div>
<div style="background: linear-gradient(135deg, #4CAF50, #45a049); color: white; padding: 15px;">
<div style="display: flex; align-items: center; gap: 10px;">
<span style="font-size: 18px;">←</span>
<span style="font-size: 16px; font-weight: 600;">سلة الطلبات</span>
</div>
</div>
<div style="flex: 1; padding: 15px; background: #f8f9fa; overflow-y: auto;">
<div style="background: #E8F5E9; border-radius: 12px; padding: 10px; margin-bottom: 15px; display: flex; align-items: center; font-size: 12px; color: #2E7D32;">
<span style="margin-left: 8px;">👦</span>
طلب ليوسف أحمد - الصف الرابع فصل 3
</div>
<div style="display: flex; background: white; border-radius: 12px; padding: 10px; margin-bottom: 10px; box-shadow: 0 2px 8px rgba(0,0,0,0.08);">
<div style="flex: 1;">
<div style="font-weight: 600; font-size: 13px;">ساندويتش فراخ مشوية</div>
<div style="font-size: 11px; color: #888;">الأحد 12 يناير</div>
<div style="font-weight: 700; font-size: 14px; color: #4CAF50;">45 ج.م</div>
</div>
<div style="width: 50px; height: 50px; background: linear-gradient(135deg, #FFE0B2, #FFCC80); border-radius: 10px; display: flex; align-items: center; justify-content: center; font-size: 20px; margin: 0 10px;">🍗</div>
<div style="display: flex; flex-direction: column; align-items: center; gap: 5px;">
<div style="font-size: 12px; color: #888;">x1</div>
<div style="color: #f44336; font-size: 18px;">🗑</div>
</div>
</div>
<div style="display: flex; background: white; border-radius: 12px; padding: 10px; margin-bottom: 10px; box-shadow: 0 2px 8px rgba(0,0,0,0.08);">
<div style="flex: 1;">
<div style="font-weight: 600; font-size: 13px;">وجبة صحية متكاملة</div>
<div style="font-size: 11px; color: #888;">الإثنين 13 يناير</div>
<div style="font-weight: 700; font-size: 14px; color: #4CAF50;">65 ج.م</div>
</div>
<div style="width: 50px; height: 50px; background: linear-gradient(135deg, #C8E6C9, #A5D6A7); border-radius: 10px; display: flex; align-items: center; justify-content: center; font-size: 20px; margin: 0 10px;">🥗</div>
<div style="display: flex; flex-direction: column; align-items: center; gap: 5px;">
<div style="font-size: 12px; color: #888;">x1</div>
<div style="color: #f44336; font-size: 18px;">🗑</div>
</div>
</div>
<div style="background: white; border-radius: 12px; padding: 15px; margin-top: 15px;">
<div style="display: flex; justify-content: space-between; margin-bottom: 8px; font-size: 13px;"><span>المجموع الفرعي</span><span>110 ج.م</span></div>
<div style="display: flex; justify-content: space-between; margin-bottom: 8px; font-size: 13px;"><span>رسوم الخدمة</span><span>5 ج.م</span></div>
<div style="display: flex; justify-content: space-between; border-top: 1px solid #eee; padding-top: 10px; font-weight: 700; font-size: 15px;"><span>الإجمالي</span><span style="color: #4CAF50;">115 ج.م</span></div>
</div>
<button style="width: 100%; padding: 12px; background: linear-gradient(135deg, #4CAF50, #45a049); color: white; border: none; border-radius: 8px; font-size: 14px; font-weight: 600; margin-top: 15px;">متابعة الدفع</button>
</div>
</div>
</div>
</div>

<!-- Payment -->
<div style="text-align: center;">
<div style="font-size: 14px; font-weight: 600; margin-bottom: 15px; color: #333;">Payment Methods</div>
<div style="width: 280px; height: 580px; background: #1a1a1a; border-radius: 35px; padding: 12px; box-shadow: 0 10px 40px rgba(0,0,0,0.3);">
<div style="width: 100%; height: 100%; background: #fff; border-radius: 25px; overflow: hidden; display: flex; flex-direction: column;">
<div style="display: flex; justify-content: space-between; padding: 8px 15px; font-size: 12px; color: #333;">
<span>9:41</span>
<span>100%</span>
</div>
<div style="background: linear-gradient(135deg, #4CAF50, #45a049); color: white; padding: 15px;">
<div style="display: flex; align-items: center; gap: 10px;">
<span style="font-size: 18px;">←</span>
<span style="font-size: 16px; font-weight: 600;">اختر طريقة الدفع</span>
</div>
</div>
<div style="flex: 1; padding: 15px; overflow-y: auto;">
<div style="display: flex; align-items: center; background: white; padding: 15px; border-radius: 12px; margin-bottom: 10px; border: 2px solid #4CAF50;">
<div style="width: 40px; height: 40px; background: #f5f5f5; border-radius: 8px; display: flex; align-items: center; justify-content: center; font-size: 20px; margin-left: 12px;">💳</div>
<div style="font-weight: 600; font-size: 13px; flex: 1;">بطاقة ائتمان / فيزا</div>
<div style="width: 20px; height: 20px; border: 2px solid #4CAF50; border-radius: 50%; background: #4CAF50; box-shadow: inset 0 0 0 4px white;"></div>
</div>
<div style="display: flex; align-items: center; background: white; padding: 15px; border-radius: 12px; margin-bottom: 10px; border: 2px solid #eee;">
<div style="width: 40px; height: 40px; background: #E53935; border-radius: 8px; display: flex; align-items: center; justify-content: center; font-size: 12px; font-weight: 700; color: white; margin-left: 12px;">VF</div>
<div style="font-weight: 600; font-size: 13px; flex: 1;">فودافون كاش</div>
<div style="width: 20px; height: 20px; border: 2px solid #ddd; border-radius: 50%;"></div>
</div>
<div style="display: flex; align-items: center; background: white; padding: 15px; border-radius: 12px; margin-bottom: 10px; border: 2px solid #eee;">
<div style="width: 40px; height: 40px; background: #FF6F00; border-radius: 8px; display: flex; align-items: center; justify-content: center; font-size: 10px; font-weight: 700; color: white; margin-left: 12px;">فوري</div>
<div style="font-weight: 600; font-size: 13px; flex: 1;">فوري</div>
<div style="width: 20px; height: 20px; border: 2px solid #ddd; border-radius: 50%;"></div>
</div>
<div style="margin-top: 20px;">
<div style="margin-bottom: 12px;">
<label style="font-size: 11px; color: #666; display: block; margin-bottom: 4px;">رقم البطاقة</label>
<input type="text" placeholder="1234 5678 9012 3456" style="width: 100%; padding: 10px 12px; border: 1px solid #ddd; border-radius: 8px; font-size: 13px; box-sizing: border-box;">
</div>
<div style="display: flex; gap: 10px;">
<div style="flex: 1;">
<label style="font-size: 11px; color: #666; display: block; margin-bottom: 4px;">تاريخ الانتهاء</label>
<input type="text" placeholder="MM/YY" style="width: 100%; padding: 10px 12px; border: 1px solid #ddd; border-radius: 8px; font-size: 13px; box-sizing: border-box;">
</div>
<div style="flex: 1;">
<label style="font-size: 11px; color: #666; display: block; margin-bottom: 4px;">CVV</label>
<input type="text" placeholder="123" style="width: 100%; padding: 10px 12px; border: 1px solid #ddd; border-radius: 8px; font-size: 13px; box-sizing: border-box;">
</div>
</div>
</div>
<button style="width: 100%; padding: 12px; background: linear-gradient(135deg, #4CAF50, #45a049); color: white; border: none; border-radius: 8px; font-size: 14px; font-weight: 600; margin-top: 20px;">ادفع 115 ج.م</button>
</div>
</div>
</div>
</div>

<!-- Order Confirmation -->
<div style="text-align: center;">
<div style="font-size: 14px; font-weight: 600; margin-bottom: 15px; color: #333;">Order Confirmation</div>
<div style="width: 280px; height: 580px; background: #1a1a1a; border-radius: 35px; padding: 12px; box-shadow: 0 10px 40px rgba(0,0,0,0.3);">
<div style="width: 100%; height: 100%; background: #fff; border-radius: 25px; overflow: hidden; display: flex; flex-direction: column;">
<div style="display: flex; justify-content: space-between; padding: 8px 15px; font-size: 12px; color: #333;">
<span>9:41</span>
<span>100%</span>
</div>
<div style="flex: 1; display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 30px; text-align: center;">
<div style="width: 100px; height: 100px; background: linear-gradient(135deg, #4CAF50, #81C784); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 48px; margin-bottom: 20px;">✓</div>
<div style="font-size: 20px; font-weight: 700; color: #333; margin-bottom: 8px;">تم الطلب بنجاح!</div>
<div style="font-size: 13px; color: #888; margin-bottom: 5px;">رقم الطلب: #12345</div>
<div style="font-size: 13px; color: #888; margin-bottom: 30px;">سيتم توصيل الوجبة ليوسف في موعدها</div>
<div style="background: #f8f9fa; border-radius: 12px; padding: 15px; width: 100%; text-align: right; margin-bottom: 20px;">
<div style="font-weight: 600; font-size: 14px; margin-bottom: 10px;">تفاصيل الطلب</div>
<div style="display: flex; justify-content: space-between; font-size: 12px; margin-bottom: 8px;"><span>ساندويتش فراخ مشوية</span><span>الأحد 12 يناير</span></div>
<div style="display: flex; justify-content: space-between; font-size: 12px;"><span>وجبة صحية متكاملة</span><span>الإثنين 13 يناير</span></div>
</div>
<button style="width: 100%; padding: 12px; background: linear-gradient(135deg, #4CAF50, #45a049); color: white; border: none; border-radius: 8px; font-size: 14px; font-weight: 600; margin-bottom: 10px;">تتبع الطلب</button>
<button style="width: 100%; padding: 12px; background: #f0f0f0; color: #333; border: none; border-radius: 8px; font-size: 14px; font-weight: 600;">العودة للرئيسية</button>
</div>
</div>
</div>
</div>

</div>

### 3.5 Order Tracking

<div style="display: flex; gap: 30px; flex-wrap: wrap; justify-content: center; margin: 30px 0;">

<!-- Tracking - Preparing -->
<div style="text-align: center;">
<div style="font-size: 14px; font-weight: 600; margin-bottom: 15px; color: #333;">Order Status - Preparing</div>
<div style="width: 280px; height: 580px; background: #1a1a1a; border-radius: 35px; padding: 12px; box-shadow: 0 10px 40px rgba(0,0,0,0.3);">
<div style="width: 100%; height: 100%; background: #fff; border-radius: 25px; overflow: hidden; display: flex; flex-direction: column;">
<div style="display: flex; justify-content: space-between; padding: 8px 15px; font-size: 12px; color: #333;">
<span>9:41</span>
<span>100%</span>
</div>
<div style="background: linear-gradient(135deg, #4CAF50, #45a049); color: white; padding: 15px;">
<div style="display: flex; align-items: center; gap: 10px;">
<span style="font-size: 18px;">←</span>
<span style="font-size: 16px; font-weight: 600;">تتبع الطلب #12345</span>
</div>
</div>
<div style="flex: 1; padding: 15px; overflow-y: auto;">
<div style="text-align: center; padding: 20px 0;">
<div style="width: 80px; height: 80px; background: linear-gradient(135deg, #FF9800, #FFB74D); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 36px; margin: 0 auto 15px;">👨‍🍳</div>
<div style="font-size: 16px; font-weight: 600; color: #333; margin-bottom: 5px;">جاري التحضير</div>
<div style="font-size: 12px; color: #888;">المورد يحضر وجبة يوسف الآن</div>
</div>
<div style="margin: 20px 0; padding: 0 10px;">
<div style="display: flex; align-items: flex-start; margin-bottom: 15px;">
<div style="width: 12px; height: 12px; background: #4CAF50; border-radius: 50%; margin-left: 10px; margin-top: 3px;"></div>
<div style="flex: 1;"><div style="font-size: 12px; font-weight: 600;">تم استلام الطلب</div><div style="font-size: 10px; color: #888;">7:30 صباحاً</div></div>
</div>
<div style="display: flex; align-items: flex-start; margin-bottom: 15px;">
<div style="width: 12px; height: 12px; background: #4CAF50; border-radius: 50%; margin-left: 10px; margin-top: 3px;"></div>
<div style="flex: 1;"><div style="font-size: 12px; font-weight: 600;">جاري التحضير</div><div style="font-size: 10px; color: #888;">8:15 صباحاً</div></div>
</div>
<div style="display: flex; align-items: flex-start; margin-bottom: 15px;">
<div style="width: 12px; height: 12px; background: #ddd; border-radius: 50%; margin-left: 10px; margin-top: 3px;"></div>
<div style="flex: 1;"><div style="font-size: 12px; font-weight: 600; color: #aaa;">في الطريق للمدرسة</div><div style="font-size: 10px; color: #888;">—</div></div>
</div>
<div style="display: flex; align-items: flex-start; margin-bottom: 15px;">
<div style="width: 12px; height: 12px; background: #ddd; border-radius: 50%; margin-left: 10px; margin-top: 3px;"></div>
<div style="flex: 1;"><div style="font-size: 12px; font-weight: 600; color: #aaa;">وصل للمدرسة</div><div style="font-size: 10px; color: #888;">—</div></div>
</div>
<div style="display: flex; align-items: flex-start;">
<div style="width: 12px; height: 12px; background: #ddd; border-radius: 50%; margin-left: 10px; margin-top: 3px;"></div>
<div style="flex: 1;"><div style="font-size: 12px; font-weight: 600; color: #aaa;">تم التسليم للطالب</div><div style="font-size: 10px; color: #888;">—</div></div>
</div>
</div>
</div>
<div style="display: flex; justify-content: space-around; background: white; padding: 10px 0; border-top: 1px solid #eee;">
<div style="text-align: center; color: #888; font-size: 10px;"><div style="font-size: 20px; margin-bottom: 3px;">🏠</div>الرئيسية</div>
<div style="text-align: center; color: #4CAF50; font-size: 10px;"><div style="font-size: 20px; margin-bottom: 3px;">📋</div>طلباتي</div>
<div style="text-align: center; color: #888; font-size: 10px;"><div style="font-size: 20px; margin-bottom: 3px;">👤</div>حسابي</div>
</div>
</div>
</div>
</div>

<!-- Tracking - Delivered -->
<div style="text-align: center;">
<div style="font-size: 14px; font-weight: 600; margin-bottom: 15px; color: #333;">Order Status - Delivered</div>
<div style="width: 280px; height: 580px; background: #1a1a1a; border-radius: 35px; padding: 12px; box-shadow: 0 10px 40px rgba(0,0,0,0.3);">
<div style="width: 100%; height: 100%; background: #fff; border-radius: 25px; overflow: hidden; display: flex; flex-direction: column;">
<div style="display: flex; justify-content: space-between; padding: 8px 15px; font-size: 12px; color: #333;">
<span>9:41</span>
<span>100%</span>
</div>
<div style="background: linear-gradient(135deg, #4CAF50, #45a049); color: white; padding: 15px;">
<div style="display: flex; align-items: center; gap: 10px;">
<span style="font-size: 18px;">←</span>
<span style="font-size: 16px; font-weight: 600;">تتبع الطلب #12345</span>
</div>
</div>
<div style="flex: 1; padding: 15px; overflow-y: auto;">
<div style="text-align: center; padding: 20px 0;">
<div style="width: 80px; height: 80px; background: linear-gradient(135deg, #4CAF50, #81C784); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 36px; margin: 0 auto 15px;">✓</div>
<div style="font-size: 16px; font-weight: 600; color: #333; margin-bottom: 5px;">تم التسليم!</div>
<div style="font-size: 12px; color: #888;">يوسف استلم وجبته الساعة 10:15 صباحاً</div>
</div>
<div style="margin: 20px 0; padding: 0 10px;">
<div style="display: flex; align-items: flex-start; margin-bottom: 15px;">
<div style="width: 12px; height: 12px; background: #4CAF50; border-radius: 50%; margin-left: 10px; margin-top: 3px;"></div>
<div style="flex: 1;"><div style="font-size: 12px; font-weight: 600;">تم استلام الطلب</div><div style="font-size: 10px; color: #888;">7:30 صباحاً</div></div>
</div>
<div style="display: flex; align-items: flex-start; margin-bottom: 15px;">
<div style="width: 12px; height: 12px; background: #4CAF50; border-radius: 50%; margin-left: 10px; margin-top: 3px;"></div>
<div style="flex: 1;"><div style="font-size: 12px; font-weight: 600;">جاري التحضير</div><div style="font-size: 10px; color: #888;">8:15 صباحاً</div></div>
</div>
<div style="display: flex; align-items: flex-start; margin-bottom: 15px;">
<div style="width: 12px; height: 12px; background: #4CAF50; border-radius: 50%; margin-left: 10px; margin-top: 3px;"></div>
<div style="flex: 1;"><div style="font-size: 12px; font-weight: 600;">في الطريق للمدرسة</div><div style="font-size: 10px; color: #888;">9:30 صباحاً</div></div>
</div>
<div style="display: flex; align-items: flex-start; margin-bottom: 15px;">
<div style="width: 12px; height: 12px; background: #4CAF50; border-radius: 50%; margin-left: 10px; margin-top: 3px;"></div>
<div style="flex: 1;"><div style="font-size: 12px; font-weight: 600;">وصل للمدرسة</div><div style="font-size: 10px; color: #888;">9:45 صباحاً</div></div>
</div>
<div style="display: flex; align-items: flex-start;">
<div style="width: 12px; height: 12px; background: #4CAF50; border-radius: 50%; margin-left: 10px; margin-top: 3px;"></div>
<div style="flex: 1;"><div style="font-size: 12px; font-weight: 600;">تم التسليم للطالب ✓</div><div style="font-size: 10px; color: #888;">10:15 صباحاً</div></div>
</div>
</div>
</div>
<div style="display: flex; justify-content: space-around; background: white; padding: 10px 0; border-top: 1px solid #eee;">
<div style="text-align: center; color: #888; font-size: 10px;"><div style="font-size: 20px; margin-bottom: 3px;">🏠</div>الرئيسية</div>
<div style="text-align: center; color: #4CAF50; font-size: 10px;"><div style="font-size: 20px; margin-bottom: 3px;">📋</div>طلباتي</div>
<div style="text-align: center; color: #888; font-size: 10px;"><div style="font-size: 20px; margin-bottom: 3px;">👤</div>حسابي</div>
</div>
</div>
</div>
</div>

<!-- Orders List -->
<div style="text-align: center;">
<div style="font-size: 14px; font-weight: 600; margin-bottom: 15px; color: #333;">My Orders List</div>
<div style="width: 280px; height: 580px; background: #1a1a1a; border-radius: 35px; padding: 12px; box-shadow: 0 10px 40px rgba(0,0,0,0.3);">
<div style="width: 100%; height: 100%; background: #fff; border-radius: 25px; overflow: hidden; display: flex; flex-direction: column;">
<div style="display: flex; justify-content: space-between; padding: 8px 15px; font-size: 12px; color: #333;">
<span>9:41</span>
<span>100%</span>
</div>
<div style="background: linear-gradient(135deg, #4CAF50, #45a049); color: white; padding: 15px; text-align: center;">
<div style="font-size: 16px; font-weight: 600;">طلباتي</div>
</div>
<div style="flex: 1; padding: 15px; background: #f8f9fa; overflow-y: auto;">
<div style="display: flex; gap: 8px; margin-bottom: 15px;">
<span style="padding: 8px 14px; background: #4CAF50; color: white; border-radius: 20px; font-size: 11px;">الكل</span>
<span style="padding: 8px 14px; background: white; border-radius: 20px; font-size: 11px; border: 1px solid #ddd;">قادمة</span>
<span style="padding: 8px 14px; background: white; border-radius: 20px; font-size: 11px; border: 1px solid #ddd;">مكتملة</span>
</div>
<div style="background: white; border-radius: 12px; padding: 12px; margin-bottom: 10px; box-shadow: 0 2px 8px rgba(0,0,0,0.08);">
<div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 8px;">
<div><div style="font-weight: 600; font-size: 14px;">طلب #12346</div><div style="font-size: 11px; color: #888;">الأحد 12 يناير</div></div>
<span style="padding: 4px 10px; background: #E3F2FD; color: #1565C0; border-radius: 12px; font-size: 10px; font-weight: 600;">جاري التحضير</span>
</div>
<div style="font-size: 12px; color: #666;">ساندويتش فراخ مشوية ليوسف</div>
<div style="font-weight: 600; color: #4CAF50; margin-top: 5px;">45 ج.م</div>
</div>
<div style="background: white; border-radius: 12px; padding: 12px; margin-bottom: 10px; box-shadow: 0 2px 8px rgba(0,0,0,0.08);">
<div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 8px;">
<div><div style="font-weight: 600; font-size: 14px;">طلب #12345</div><div style="font-size: 11px; color: #888;">السبت 11 يناير</div></div>
<span style="padding: 4px 10px; background: #E8F5E9; color: #2E7D32; border-radius: 12px; font-size: 10px; font-weight: 600;">تم التسليم</span>
</div>
<div style="font-size: 12px; color: #666;">وجبة صحية متكاملة ليوسف</div>
<div style="font-weight: 600; color: #4CAF50; margin-top: 5px;">65 ج.م</div>
</div>
<div style="background: white; border-radius: 12px; padding: 12px; box-shadow: 0 2px 8px rgba(0,0,0,0.08);">
<div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 8px;">
<div><div style="font-weight: 600; font-size: 14px;">طلب #12344</div><div style="font-size: 11px; color: #888;">الخميس 9 يناير</div></div>
<span style="padding: 4px 10px; background: #E8F5E9; color: #2E7D32; border-radius: 12px; font-size: 10px; font-weight: 600;">تم التسليم</span>
</div>
<div style="font-size: 12px; color: #666;">ساندويتش جبنة رومي لمريم</div>
<div style="font-weight: 600; color: #4CAF50; margin-top: 5px;">25 ج.م</div>
</div>
</div>
<div style="display: flex; justify-content: space-around; background: white; padding: 10px 0; border-top: 1px solid #eee;">
<div style="text-align: center; color: #888; font-size: 10px;"><div style="font-size: 20px; margin-bottom: 3px;">🏠</div>الرئيسية</div>
<div style="text-align: center; color: #4CAF50; font-size: 10px;"><div style="font-size: 20px; margin-bottom: 3px;">📋</div>طلباتي</div>
<div style="text-align: center; color: #888; font-size: 10px;"><div style="font-size: 20px; margin-bottom: 3px;">👤</div>حسابي</div>
</div>
</div>
</div>
</div>

</div>

---

## 4. Supplier Dashboard

Web-based dashboard for food suppliers to manage menus, view orders, and track payments.

### 4.1 Orders Overview

<div style="background: #1a1a1a; border-radius: 20px; padding: 15px; margin: 30px 0; box-shadow: 0 10px 40px rgba(0,0,0,0.3);">
<div style="background: #fff; border-radius: 12px; overflow: hidden;">

<!-- Header -->
<div style="background: linear-gradient(135deg, #4CAF50, #45a049); color: white; padding: 20px 25px; display: flex; justify-content: space-between; align-items: center;">
<div style="font-size: 18px; font-weight: 600;">🍳 لوحة تحكم المورد</div>
<div style="display: flex; align-items: center; gap: 10px;">
<span>مطعم الشيف أحمد</span>
<div style="width: 40px; height: 40px; background: rgba(255,255,255,0.3); border-radius: 50%; display: flex; align-items: center; justify-content: center;">👨‍🍳</div>
</div>
</div>

<!-- Layout -->
<div style="display: flex; min-height: 400px;">

<!-- Sidebar -->
<div style="width: 180px; background: #f8f9fa; border-left: 1px solid #eee; padding: 15px 0;">
<div style="padding: 12px 20px; background: #e8f5e9; color: #4CAF50; border-right: 3px solid #4CAF50; font-size: 13px;">📊 نظرة عامة</div>
<div style="padding: 12px 20px; color: #666; font-size: 13px;">📋 الطلبات</div>
<div style="padding: 12px 20px; color: #666; font-size: 13px;">🍽️ قائمة الطعام</div>
<div style="padding: 12px 20px; color: #666; font-size: 13px;">🏫 المدارس</div>
<div style="padding: 12px 20px; color: #666; font-size: 13px;">💰 المدفوعات</div>
<div style="padding: 12px 20px; color: #666; font-size: 13px;">📈 التقارير</div>
</div>

<!-- Content -->
<div style="flex: 1; padding: 20px; background: #f8f9fa;">

<!-- Title -->
<div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
<div style="font-size: 16px; font-weight: 600;">طلبات اليوم - الأحد 12 يناير</div>
<button style="padding: 10px 20px; background: linear-gradient(135deg, #4CAF50, #45a049); color: white; border: none; border-radius: 8px; font-size: 13px;">طباعة قائمة الطلبات</button>
</div>

<!-- Stats -->
<div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 15px; margin-bottom: 20px;">
<div style="background: white; padding: 15px; border-radius: 10px; border-top: 3px solid #4CAF50;"><div style="font-size: 24px; font-weight: 700;">127</div><div style="font-size: 11px; color: #888;">إجمالي الطلبات</div></div>
<div style="background: white; padding: 15px; border-radius: 10px; border-top: 3px solid #2196F3;"><div style="font-size: 24px; font-weight: 700;">3</div><div style="font-size: 11px; color: #888;">المدارس</div></div>
<div style="background: white; padding: 15px; border-radius: 10px; border-top: 3px solid #FF9800;"><div style="font-size: 24px; font-weight: 700;">4,250</div><div style="font-size: 11px; color: #888;">إيرادات اليوم (ج.م)</div></div>
<div style="background: white; padding: 15px; border-radius: 10px; border-top: 3px solid #9C27B0;"><div style="font-size: 24px; font-weight: 700;">89%</div><div style="font-size: 11px; color: #888;">معدل التسليم</div></div>
</div>

<!-- Table -->
<div style="background: white; border-radius: 10px; overflow: hidden;">
<div style="padding: 15px; border-bottom: 1px solid #eee; font-weight: 600;">طلبات حسب المدرسة</div>
<table style="width: 100%; border-collapse: collapse; font-size: 12px;">
<tr style="background: #f8f9fa;">
<th style="padding: 12px 15px; text-align: right;">المدرسة</th>
<th style="padding: 12px 15px; text-align: right;">عدد الطلبات</th>
<th style="padding: 12px 15px; text-align: right;">الوجبات</th>
<th style="padding: 12px 15px; text-align: right;">الإجمالي</th>
<th style="padding: 12px 15px; text-align: right;">الحالة</th>
<th style="padding: 12px 15px; text-align: right;">إجراء</th>
</tr>
<tr style="border-bottom: 1px solid #eee;">
<td style="padding: 12px 15px; font-weight: 600;">مدرسة النيل الدولية</td>
<td style="padding: 12px 15px;">52</td>
<td style="padding: 12px 15px;">فراخ (30)، جبنة (15)، صحي (7)</td>
<td style="padding: 12px 15px;">1,850 ج.م</td>
<td style="padding: 12px 15px;"><span style="padding: 4px 10px; background: #E3F2FD; color: #1565C0; border-radius: 12px; font-size: 10px;">جاري التحضير</span></td>
<td style="padding: 12px 15px;"><button style="padding: 5px 12px; background: #4CAF50; color: white; border: none; border-radius: 5px; font-size: 11px;">تم التجهيز</button></td>
</tr>
<tr style="border-bottom: 1px solid #eee;">
<td style="padding: 12px 15px; font-weight: 600;">مدرسة الأورمان الخاصة</td>
<td style="padding: 12px 15px;">45</td>
<td style="padding: 12px 15px;">فراخ (25)، بيض (12)، صحي (8)</td>
<td style="padding: 12px 15px;">1,520 ج.م</td>
<td style="padding: 12px 15px;"><span style="padding: 4px 10px; background: #FFF3E0; color: #E65100; border-radius: 12px; font-size: 10px;">في الانتظار</span></td>
<td style="padding: 12px 15px;"><button style="padding: 5px 12px; background: #2196F3; color: white; border: none; border-radius: 5px; font-size: 11px;">بدء التحضير</button></td>
</tr>
<tr>
<td style="padding: 12px 15px; font-weight: 600;">مدرسة المستقبل</td>
<td style="padding: 12px 15px;">30</td>
<td style="padding: 12px 15px;">جبنة (18)، فواكه (12)</td>
<td style="padding: 12px 15px;">880 ج.م</td>
<td style="padding: 12px 15px;"><span style="padding: 4px 10px; background: #E8F5E9; color: #2E7D32; border-radius: 12px; font-size: 10px;">تم التوصيل</span></td>
<td style="padding: 12px 15px;"><span style="color: #4CAF50;">✓ مكتمل</span></td>
</tr>
</table>
</div>

</div>
</div>

</div>
</div>

---

## 5. Floor Admin App

Mobile app for school floor administrators to receive deliveries and confirm handoff to students.

### 5.1 Delivery Flow

<div style="display: flex; gap: 30px; flex-wrap: wrap; justify-content: center; margin: 30px 0;">

<!-- Floor Admin Home -->
<div style="text-align: center;">
<div style="font-size: 14px; font-weight: 600; margin-bottom: 15px; color: #333;">Floor Admin - Home</div>
<div style="width: 280px; height: 580px; background: #1a1a1a; border-radius: 35px; padding: 12px; box-shadow: 0 10px 40px rgba(0,0,0,0.3);">
<div style="width: 100%; height: 100%; background: #fff; border-radius: 25px; overflow: hidden; display: flex; flex-direction: column;">
<div style="display: flex; justify-content: space-between; padding: 8px 15px; font-size: 12px; color: #333;">
<span>9:41</span>
<span>100%</span>
</div>
<div style="background: linear-gradient(135deg, #2196F3, #1976D2); color: white; padding: 15px;">
<div style="display: flex; justify-content: space-between; align-items: center;">
<div>
<div style="font-size: 12px; opacity: 0.9;">مدرسة النيل الدولية</div>
<div style="font-size: 16px; font-weight: 600;">الدور الثاني</div>
</div>
<div style="font-size: 24px;">🔔</div>
</div>
</div>
<div style="flex: 1; padding: 15px; background: #f8f9fa; overflow-y: auto;">
<div style="background: linear-gradient(135deg, #FFF3E0, #FFE0B2); border-radius: 12px; padding: 12px; margin-bottom: 15px;">
<div style="display: flex; align-items: center;">
<div style="flex: 1;">
<div style="font-size: 11px; color: #E65100;">🚚 التوصيل المتوقع</div>
<div style="font-size: 18px; font-weight: 700; color: #E65100;">9:45 صباحاً</div>
</div>
<div style="font-size: 36px;">📦</div>
</div>
</div>
<div style="font-weight: 600; font-size: 14px; margin-bottom: 10px;">طلبات اليوم</div>
<div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 10px; margin-bottom: 15px;">
<div style="background: white; padding: 12px; border-radius: 10px; border-top: 3px solid #4CAF50;"><div style="font-size: 28px; font-weight: 700;">18</div><div style="font-size: 10px; color: #888;">إجمالي الطلبات</div></div>
<div style="background: white; padding: 12px; border-radius: 10px; border-top: 3px solid #FF9800;"><div style="font-size: 28px; font-weight: 700;">0</div><div style="font-size: 10px; color: #888;">تم التسليم</div></div>
</div>
<button style="width: 100%; padding: 12px; background: linear-gradient(135deg, #2196F3, #1976D2); color: white; border: none; border-radius: 8px; font-size: 14px; font-weight: 600; margin-bottom: 15px;">📦 استلام التوصيل من المورد</button>
<div style="font-weight: 600; font-size: 14px; margin-bottom: 10px;">قائمة الطلبات</div>
<div style="background: white; border-radius: 12px; padding: 12px; margin-bottom: 10px; box-shadow: 0 2px 8px rgba(0,0,0,0.08); opacity: 0.6;">
<div style="display: flex; align-items: center;">
<div style="flex: 1;"><div style="font-weight: 600; font-size: 14px;">يوسف أحمد</div><div style="font-size: 11px; color: #888;">الصف الرابع - فصل 3</div><div style="font-size: 11px; color: #666; margin-top: 3px;">ساندويتش فراخ مشوية</div></div>
<span style="padding: 4px 10px; background: #FFF3E0; color: #E65100; border-radius: 12px; font-size: 10px;">في الانتظار</span>
</div>
</div>
</div>
</div>
</div>
</div>

<!-- Receive from Supplier -->
<div style="text-align: center;">
<div style="font-size: 14px; font-weight: 600; margin-bottom: 15px; color: #333;">Receive from Supplier</div>
<div style="width: 280px; height: 580px; background: #1a1a1a; border-radius: 35px; padding: 12px; box-shadow: 0 10px 40px rgba(0,0,0,0.3);">
<div style="width: 100%; height: 100%; background: #fff; border-radius: 25px; overflow: hidden; display: flex; flex-direction: column;">
<div style="display: flex; justify-content: space-between; padding: 8px 15px; font-size: 12px; color: #333;">
<span>9:41</span>
<span>100%</span>
</div>
<div style="background: linear-gradient(135deg, #2196F3, #1976D2); color: white; padding: 15px;">
<div style="display: flex; align-items: center; gap: 10px;">
<span style="font-size: 18px;">←</span>
<span style="font-size: 16px; font-weight: 600;">استلام من المورد</span>
</div>
</div>
<div style="flex: 1; padding: 15px; overflow-y: auto;">
<div style="text-align: center; padding: 20px 0;">
<div style="font-size: 48px; margin-bottom: 10px;">📦</div>
<div style="font-size: 14px; color: #888;">تحقق من الوجبات المستلمة</div>
</div>
<div style="font-weight: 600; font-size: 14px; margin-bottom: 10px;">قائمة الوجبات (18 وجبة)</div>
<div style="display: flex; align-items: center; background: white; padding: 12px; border-radius: 12px; margin-bottom: 10px; box-shadow: 0 2px 8px rgba(0,0,0,0.08);">
<div style="width: 24px; height: 24px; border: 2px solid #4CAF50; border-radius: 6px; margin-left: 12px; background: #4CAF50; display: flex; align-items: center; justify-content: center; color: white;">✓</div>
<div style="flex: 1;"><div style="font-weight: 600; font-size: 14px;">ساندويتش فراخ مشوية</div><div style="font-size: 11px; color: #888;">10 وجبات</div></div>
</div>
<div style="display: flex; align-items: center; background: white; padding: 12px; border-radius: 12px; margin-bottom: 10px; box-shadow: 0 2px 8px rgba(0,0,0,0.08);">
<div style="width: 24px; height: 24px; border: 2px solid #4CAF50; border-radius: 6px; margin-left: 12px; background: #4CAF50; display: flex; align-items: center; justify-content: center; color: white;">✓</div>
<div style="flex: 1;"><div style="font-weight: 600; font-size: 14px;">ساندويتش جبنة رومي</div><div style="font-size: 11px; color: #888;">5 وجبات</div></div>
</div>
<div style="display: flex; align-items: center; background: white; padding: 12px; border-radius: 12px; margin-bottom: 10px; box-shadow: 0 2px 8px rgba(0,0,0,0.08);">
<div style="width: 24px; height: 24px; border: 2px solid #4CAF50; border-radius: 6px; margin-left: 12px;"></div>
<div style="flex: 1;"><div style="font-weight: 600; font-size: 14px;">وجبة صحية متكاملة</div><div style="font-size: 11px; color: #888;">3 وجبات</div></div>
</div>
<div style="margin-top: 15px;">
<label style="font-size: 11px; color: #666; display: block; margin-bottom: 4px;">ملاحظات (اختياري)</label>
<input type="text" placeholder="مثال: وجبة ناقصة..." style="width: 100%; padding: 10px 12px; border: 1px solid #ddd; border-radius: 8px; font-size: 13px; box-sizing: border-box;">
</div>
<button style="width: 100%; padding: 12px; background: linear-gradient(135deg, #2196F3, #1976D2); color: white; border: none; border-radius: 8px; font-size: 14px; font-weight: 600; margin-top: 15px;">تأكيد الاستلام</button>
</div>
</div>
</div>
</div>

<!-- Confirm Student Delivery -->
<div style="text-align: center;">
<div style="font-size: 14px; font-weight: 600; margin-bottom: 15px; color: #333;">Confirm Student Delivery</div>
<div style="width: 280px; height: 580px; background: #1a1a1a; border-radius: 35px; padding: 12px; box-shadow: 0 10px 40px rgba(0,0,0,0.3);">
<div style="width: 100%; height: 100%; background: #fff; border-radius: 25px; overflow: hidden; display: flex; flex-direction: column;">
<div style="display: flex; justify-content: space-between; padding: 8px 15px; font-size: 12px; color: #333;">
<span>9:41</span>
<span>100%</span>
</div>
<div style="background: linear-gradient(135deg, #2196F3, #1976D2); color: white; padding: 15px;">
<div style="display: flex; align-items: center; gap: 10px;">
<span style="font-size: 18px;">←</span>
<span style="font-size: 16px; font-weight: 600;">تسليم للطلاب</span>
</div>
</div>
<div style="flex: 1; padding: 15px; background: #f8f9fa; overflow-y: auto;">
<div style="background: white; padding: 10px; border-radius: 10px; margin-bottom: 15px; display: flex; align-items: center;">
<span style="margin-left: 8px;">🔍</span>
<span style="color: #aaa; font-size: 13px;">ابحث عن طالب...</span>
</div>
<div style="font-weight: 600; font-size: 14px; margin-bottom: 10px;">الصف الرابع - فصل 3</div>
<div style="display: flex; align-items: center; background: white; padding: 12px; border-radius: 12px; margin-bottom: 10px; box-shadow: 0 2px 8px rgba(0,0,0,0.08); border: 2px solid #4CAF50;">
<div style="width: 24px; height: 24px; border: 2px solid #4CAF50; border-radius: 6px; margin-left: 12px; background: #4CAF50; display: flex; align-items: center; justify-content: center; color: white;">✓</div>
<div style="flex: 1;"><div style="font-weight: 600; font-size: 14px;">يوسف أحمد</div><div style="font-size: 11px; color: #888;">ساندويتش فراخ مشوية</div></div>
<span style="padding: 4px 10px; background: #E8F5E9; color: #2E7D32; border-radius: 12px; font-size: 10px;">تم</span>
</div>
<div style="display: flex; align-items: center; background: white; padding: 12px; border-radius: 12px; margin-bottom: 10px; box-shadow: 0 2px 8px rgba(0,0,0,0.08);">
<div style="width: 24px; height: 24px; border: 2px solid #ddd; border-radius: 6px; margin-left: 12px;"></div>
<div style="flex: 1;"><div style="font-weight: 600; font-size: 14px;">سارة محمود</div><div style="font-size: 11px; color: #888;">وجبة صحية متكاملة</div></div>
<button style="padding: 6px 12px; background: #4CAF50; color: white; border: none; border-radius: 5px; font-size: 11px;">تسليم</button>
</div>
<div style="display: flex; align-items: center; background: white; padding: 12px; border-radius: 12px; margin-bottom: 10px; box-shadow: 0 2px 8px rgba(0,0,0,0.08);">
<div style="width: 24px; height: 24px; border: 2px solid #ddd; border-radius: 6px; margin-left: 12px;"></div>
<div style="flex: 1;"><div style="font-weight: 600; font-size: 14px;">عمر خالد</div><div style="font-size: 11px; color: #888;">ساندويتش جبنة رومي</div></div>
<button style="padding: 6px 12px; background: #4CAF50; color: white; border: none; border-radius: 5px; font-size: 11px;">تسليم</button>
</div>
<div style="font-weight: 600; font-size: 14px; margin: 15px 0 10px;">الصف الرابع - فصل 2</div>
<div style="display: flex; align-items: center; background: white; padding: 12px; border-radius: 12px; box-shadow: 0 2px 8px rgba(0,0,0,0.08);">
<div style="width: 24px; height: 24px; border: 2px solid #ddd; border-radius: 6px; margin-left: 12px;"></div>
<div style="flex: 1;"><div style="font-weight: 600; font-size: 14px;">ليلى أحمد</div><div style="font-size: 11px; color: #888;">ساندويتش فراخ مشوية</div></div>
<button style="padding: 6px 12px; background: #4CAF50; color: white; border: none; border-radius: 5px; font-size: 11px;">تسليم</button>
</div>
</div>
</div>
</div>
</div>

</div>

---

## 6. School Admin Dashboard

Web dashboard for school administrators to manage suppliers, view reports, and track commissions.

### 6.1 Overview

<div style="background: #1a1a1a; border-radius: 20px; padding: 15px; margin: 30px 0; box-shadow: 0 10px 40px rgba(0,0,0,0.3);">
<div style="background: #fff; border-radius: 12px; overflow: hidden;">

<!-- Header -->
<div style="background: linear-gradient(135deg, #9C27B0, #7B1FA2); color: white; padding: 20px 25px; display: flex; justify-content: space-between; align-items: center;">
<div style="font-size: 18px; font-weight: 600;">🏫 مدرسة النيل الدولية</div>
<div style="display: flex; align-items: center; gap: 10px;">
<span>أ. محمد علي</span>
<div style="width: 40px; height: 40px; background: rgba(255,255,255,0.3); border-radius: 50%; display: flex; align-items: center; justify-content: center;">👤</div>
</div>
</div>

<!-- Layout -->
<div style="display: flex; min-height: 350px;">

<!-- Sidebar -->
<div style="width: 180px; background: #f8f9fa; border-left: 1px solid #eee; padding: 15px 0;">
<div style="padding: 12px 20px; background: #f3e5f5; color: #9C27B0; border-right: 3px solid #9C27B0; font-size: 13px;">📊 نظرة عامة</div>
<div style="padding: 12px 20px; color: #666; font-size: 13px;">👨‍🍳 المورد</div>
<div style="padding: 12px 20px; color: #666; font-size: 13px;">👥 المشرفين</div>
<div style="padding: 12px 20px; color: #666; font-size: 13px;">📋 الطلبات</div>
<div style="padding: 12px 20px; color: #666; font-size: 13px;">💰 العمولات</div>
<div style="padding: 12px 20px; color: #666; font-size: 13px;">📈 التقارير</div>
</div>

<!-- Content -->
<div style="flex: 1; padding: 20px; background: #f8f9fa;">

<div style="font-size: 16px; font-weight: 600; margin-bottom: 20px;">نظرة عامة - يناير 2025</div>

<!-- Stats -->
<div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 15px; margin-bottom: 20px;">
<div style="background: white; padding: 15px; border-radius: 10px; border-top: 3px solid #4CAF50;"><div style="font-size: 24px; font-weight: 700;">1,247</div><div style="font-size: 11px; color: #888;">إجمالي الطلبات</div></div>
<div style="background: white; padding: 15px; border-radius: 10px; border-top: 3px solid #2196F3;"><div style="font-size: 24px; font-weight: 700;">312</div><div style="font-size: 11px; color: #888;">الطلاب المسجلين</div></div>
<div style="background: white; padding: 15px; border-radius: 10px; border-top: 3px solid #FF9800;"><div style="font-size: 24px; font-weight: 700;">2,494</div><div style="font-size: 11px; color: #888;">العمولات (ج.م)</div></div>
<div style="background: white; padding: 15px; border-radius: 10px; border-top: 3px solid #9C27B0;"><div style="font-size: 24px; font-weight: 700;">96%</div><div style="font-size: 11px; color: #888;">معدل التسليم</div></div>
</div>

<!-- Cards -->
<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">

<!-- Orders by Category -->
<div style="background: white; border-radius: 12px; padding: 15px;">
<div style="font-weight: 600; font-size: 14px; margin-bottom: 15px;">📊 الطلبات حسب الفئة</div>
<div style="display: flex; align-items: center; margin-bottom: 10px;">
<div style="flex: 1; font-size: 13px;">🍗 لحوم</div>
<div style="width: 60%; height: 20px; background: #eee; border-radius: 10px; overflow: hidden;"><div style="width: 45%; height: 100%; background: #4CAF50;"></div></div>
<div style="width: 40px; text-align: left; font-size: 12px; color: #888;">45%</div>
</div>
<div style="display: flex; align-items: center; margin-bottom: 10px;">
<div style="flex: 1; font-size: 13px;">🧀 جبن</div>
<div style="width: 60%; height: 20px; background: #eee; border-radius: 10px; overflow: hidden;"><div style="width: 25%; height: 100%; background: #FFC107;"></div></div>
<div style="width: 40px; text-align: left; font-size: 12px; color: #888;">25%</div>
</div>
<div style="display: flex; align-items: center; margin-bottom: 10px;">
<div style="flex: 1; font-size: 13px;">🥗 صحي</div>
<div style="width: 60%; height: 20px; background: #eee; border-radius: 10px; overflow: hidden;"><div style="width: 20%; height: 100%; background: #2196F3;"></div></div>
<div style="width: 40px; text-align: left; font-size: 12px; color: #888;">20%</div>
</div>
<div style="display: flex; align-items: center;">
<div style="flex: 1; font-size: 13px;">🍎 أخرى</div>
<div style="width: 60%; height: 20px; background: #eee; border-radius: 10px; overflow: hidden;"><div style="width: 10%; height: 100%; background: #9C27B0;"></div></div>
<div style="width: 40px; text-align: left; font-size: 12px; color: #888;">10%</div>
</div>
</div>

<!-- Current Supplier -->
<div style="background: white; border-radius: 12px; padding: 15px;">
<div style="font-weight: 600; font-size: 14px; margin-bottom: 15px;">👨‍🍳 المورد الحالي</div>
<div style="display: flex; align-items: center; margin-bottom: 15px;">
<div style="width: 50px; height: 50px; background: #FFE0B2; border-radius: 10px; display: flex; align-items: center; justify-content: center; font-size: 24px; margin-left: 12px;">👨‍🍳</div>
<div><div style="font-weight: 600;">مطعم الشيف أحمد</div><div style="font-size: 12px; color: #888;">متعاقد منذ سبتمبر 2024</div></div>
</div>
<div style="display: flex; justify-content: space-between; font-size: 13px; padding: 8px 0; border-top: 1px solid #eee;"><span>التقييم</span><span style="color: #FFC107;">★★★★★ 4.8</span></div>
<div style="display: flex; justify-content: space-between; font-size: 13px; padding: 8px 0; border-top: 1px solid #eee;"><span>معدل التسليم في الوقت</span><span style="color: #4CAF50;">98%</span></div>
<button style="width: 100%; padding: 10px; background: #f5f5f5; border: none; border-radius: 8px; margin-top: 10px; font-size: 13px;">عرض التفاصيل</button>
</div>

</div>
</div>
</div>

</div>
</div>

---

## 7. Technical Specifications

### 7.1 Technology Stack

| Layer | Technology | Notes |
|-------|------------|-------|
| Mobile Apps | React Native / Flutter | Cross-platform for iOS & Android |
| Web Dashboards | React / Next.js | Responsive design for tablet & desktop |
| Backend API | Node.js / Python (FastAPI) | RESTful API with WebSocket for real-time |
| Database | PostgreSQL + Redis | Primary storage + caching |
| Payments | PayMob / Fawry | Egyptian payment gateway integration |
| Push Notifications | Firebase Cloud Messaging | iOS & Android support |
| Hosting | AWS / Google Cloud | Cairo region preferred |

### 7.2 API Endpoints (Sample)

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/auth/register` | POST | Register new user (parent/supplier/admin) |
| `/api/schools/:id/menu` | GET | Get menu for school's supplier |
| `/api/orders` | POST | Create new order |
| `/api/orders/:id/status` | PUT | Update order status |
| `/api/supplier/orders` | GET | Get supplier's orders (by school/date) |
| `/api/admin/confirm-delivery` | POST | Floor admin confirms student delivery |

### 7.3 Security Requirements

- JWT-based authentication with refresh tokens
- Role-based access control (RBAC)
- Data encryption at rest and in transit (TLS 1.3)
- PCI-DSS compliance for payment processing
- GDPR-style data protection for student information
- Rate limiting and DDoS protection

---

## 8. MVP Scope & Roadmap

### Phase 1: MVP

| Feature | Status |
|---------|--------|
| Parent registration & child management | In Scope |
| School-specific menu browsing | In Scope |
| Single day ordering | In Scope |
| Card & e-wallet payments | In Scope |
| Basic order tracking | In Scope |
| Floor admin delivery confirmation | In Scope |
| Supplier order list & basic dashboard | In Scope |

### Phase 2: Enhanced Features

| Feature | Status |
|---------|--------|
| Weekly meal scheduling | Post-MVP |
| Recurring orders | Post-MVP |
| Push notifications | Post-MVP |
| School admin reports | Post-MVP |
| Supplier analytics | Post-MVP |

### Phase 3: Scale & Expand

| Feature | Status |
|---------|--------|
| Ministry of Education dashboard | Future |
| Nutritional tracking | Future |
| Subscription meal plans | Future |
| Multi-supplier per school | Future |
| In-app messaging | Future |

---

**Document Version:** 1.0
**Last Updated:** January 2025
