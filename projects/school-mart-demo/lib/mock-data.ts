// Mock data for the School Mart demo

export const schools = [
  { id: '1', name: 'مدرسة النور الدولية', nameEn: 'Al Nour International School', logo: '/logos/school-1.svg' },
  { id: '2', name: 'مدرسة المستقبل', nameEn: 'Future Academy', logo: '/logos/school-2.svg' },
]

export const children = [
  { id: '1', name: 'أحمد علي', nameEn: 'Ahmed Ali', grade: 'الصف الخامس', gradeEn: 'Grade 5', schoolId: '1' },
  { id: '2', name: 'سارة علي', nameEn: 'Sara Ali', grade: 'الصف الثالث', gradeEn: 'Grade 3', schoolId: '1' },
  { id: '3', name: 'منى علي', nameEn: 'Mona Ali', grade: 'الصف الأول', gradeEn: 'Grade 1', schoolId: '2' },
]

export const wallet = {
  balance: 500,
  currency: 'EGP',
  currencyAr: 'ج.م',
}

export const extraLessons = [
  { id: '1', name: 'تقوية رياضيات', nameEn: 'Math Tutoring', price: 150, schedule: 'الأحد، الثلاثاء', scheduleEn: 'Sun, Tue', time: '3:00-4:00 م', timeEn: '3:00-4:00 PM' },
  { id: '2', name: 'تقوية لغة إنجليزية', nameEn: 'English Tutoring', price: 120, schedule: 'الإثنين، الأربعاء', scheduleEn: 'Mon, Wed', time: '3:00-4:00 م', timeEn: '3:00-4:00 PM' },
  { id: '3', name: 'تقوية علوم', nameEn: 'Science Tutoring', price: 130, schedule: 'الخميس', scheduleEn: 'Thu', time: '3:00-4:30 م', timeEn: '3:00-4:30 PM' },
]

export const educationalMaterials = [
  { id: '1', name: 'كتاب العلوم', nameEn: 'Science Book', price: 85 },
  { id: '2', name: 'كتاب الرياضيات', nameEn: 'Math Book', price: 75 },
  { id: '3', name: 'قاموس إنجليزي', nameEn: 'English Dictionary', price: 120 },
]

export const uniforms = [
  { id: '1', name: 'قميص أبيض', nameEn: 'White Shirt', price: 180, icon: '👕', sizes: ['S', 'M', 'L', 'XL'] },
  { id: '2', name: 'بنطلون كحلي', nameEn: 'Navy Pants', price: 220, icon: '👖', sizes: ['26', '28', '30', '32'] },
  { id: '3', name: 'حذاء مدرسي', nameEn: 'School Shoes', price: 350, icon: '👟', sizes: ['36', '38', '40', '42'] },
]

export const supplies = [
  { id: '1', name: 'حقيبة مدرسية', nameEn: 'School Bag', price: 450, icon: '🎒' },
  { id: '2', name: 'طقم أقلام', nameEn: 'Pen Set', price: 65, icon: '✏️' },
  { id: '3', name: 'دفاتر (5 قطع)', nameEn: 'Notebooks (5 pcs)', price: 85, icon: '📓' },
]

export const canteenMenu = [
  { id: '1', name: 'ساندويتش جبنة', nameEn: 'Cheese Sandwich', price: 25, icon: '🥪' },
  { id: '2', name: 'ساندويتش فول', nameEn: 'Fava Bean Sandwich', price: 20, icon: '🥙' },
  { id: '3', name: 'عصير برتقال', nameEn: 'Orange Juice', price: 15, icon: '🧃' },
  { id: '4', name: 'مياه معدنية', nameEn: 'Mineral Water', price: 10, icon: '💧' },
  { id: '5', name: 'فطيرة بالجبن', nameEn: 'Cheese Pastry', price: 30, icon: '🥐' },
  { id: '6', name: 'تفاحة', nameEn: 'Apple', price: 12, icon: '🍎' },
]

export const events = [
  {
    id: '1',
    name: 'رحلة المتحف المصري',
    nameEn: 'Egyptian Museum Trip',
    date: '15',
    month: 'يناير',
    monthEn: 'January',
    price: 250,
    grades: 'الصف 4-6',
    gradesEn: 'Grades 4-6',
    seatsLeft: 12,
    requiresConsent: false,
  },
  {
    id: '2',
    name: 'يوم رياضي',
    nameEn: 'Sports Day',
    date: '22',
    month: 'يناير',
    monthEn: 'January',
    price: 0,
    grades: 'جميع الصفوف',
    gradesEn: 'All Grades',
    seatsLeft: null,
    requiresConsent: true,
  },
  {
    id: '3',
    name: 'رحلة حديقة الحيوان',
    nameEn: 'Zoo Trip',
    date: '5',
    month: 'فبراير',
    monthEn: 'February',
    price: 180,
    grades: 'الصف 1-3',
    gradesEn: 'Grades 1-3',
    seatsLeft: 8,
    requiresConsent: false,
  },
]

export const recentActivity = [
  { id: '1', type: 'canteen', description: 'طلب كانتين', descriptionEn: 'Canteen order', amount: -55, date: 'اليوم', dateEn: 'Today' },
  { id: '2', type: 'wallet', description: 'شحن المحفظة', descriptionEn: 'Wallet top-up', amount: 200, date: 'أمس', dateEn: 'Yesterday' },
  { id: '3', type: 'events', description: 'تسجيل رحلة', descriptionEn: 'Trip registration', amount: -250, date: '10 يناير', dateEn: 'Jan 10' },
]
