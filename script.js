const observer = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("show"); });
}, {threshold:.12});
document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

document.getElementById("year").textContent = new Date().getFullYear();

const reviews = [
  ["“Your testimonial will appear here once you provide an authentic client review.”","— Client testimonial placeholder"],
  ["“Add a genuine client review here to build trust with future brides.”","— Client testimonial placeholder"],
  ["“Add another verified customer experience here.”","— Client testimonial placeholder"]
];
document.querySelectorAll(".review-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".review-btn").forEach(b=>b.classList.remove("active"));
    btn.classList.add("active");
    const r = reviews[Number(btn.dataset.i)];
    document.getElementById("quote").textContent = r[0];
    document.getElementById("reviewer").textContent = r[1];
  });
});

// IMPORTANT: Replace this placeholder with the business's official WhatsApp number,
// digits only, including country code. Example format: 9198XXXXXXXX.
// No number has been invented because the supplied profile did not provide a confirmed booking number.
const WHATSAPP_NUMBER = "91XXXXXXXXXX";

document.getElementById("bookingForm").addEventListener("submit", function(e){
  e.preventDefault();
  const status = document.getElementById("status");
  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const date = document.getElementById("date").value;
  const service = document.getElementById("service").value;
  const location = document.getElementById("eventLocation").value.trim();
  const message = document.getElementById("message").value.trim();

  if (WHATSAPP_NUMBER.includes("X")) {
    status.textContent = "Booking form is ready. Add the official WhatsApp number in script.js to activate the WhatsApp button.";
    return;
  }
  const text = `Hello Jaipur Glamorous Squad!%0A%0AI would like to enquire about a booking.%0A%0AName: ${encodeURIComponent(name)}%0APhone: ${encodeURIComponent(phone)}%0AEvent date: ${encodeURIComponent(date)}%0AService: ${encodeURIComponent(service)}%0ALocation: ${encodeURIComponent(location)}%0AMessage: ${encodeURIComponent(message)}`;
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, "_blank", "noopener");
});
