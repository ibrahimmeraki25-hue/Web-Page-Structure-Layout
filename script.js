// ===========================
// تمرير سلس عند الضغط على روابط Navbar
// ===========================
document.querySelectorAll('header nav ul li a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        targetSection.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// ===========================
// نموذج التواصل
// ===========================
const contactForm = document.querySelector('.contact form');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault(); // منع إعادة تحميل الصفحة
    alert('تم إرسال الرسالة بنجاح! شكرًا لتواصلك معنا.');
    contactForm.reset(); // إعادة ضبط الحقول بعد الإرسال
});
